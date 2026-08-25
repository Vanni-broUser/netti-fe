import fs from 'node:fs';
import path from 'node:path';

import {
  DEFAULT_IMAGE,
  SITE_URL,
  breadcrumbsOf,
  seoRoutes
} from '../src/utils/seo.routes.js';

// L'app e' una SPA: il server manda un index.html vuoto e Vue lo riempie dopo.
// Chi non esegue JavaScript - anteprime social, assistenti AI, Googlebot prima
// del render - vede quindi una pagina senza testo ne' metadati.
//
// Questo plugin, a build finita, scrive un index.html per ogni rotta statica con
// i tag della rotta gia' dentro. server.js monta express.static su dist/, che
// serve dist/architetture/index.html per /architetture senza modifiche.
//
// Il markup iniettato nel body e' solo un fallback per i crawler: al mount Vue
// azzera il contenuto di #app (runtime-dom fa container.innerHTML = ''), quindi
// per l'utente non cambia nulla.

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const metaTags = (route) => {
  const url = `${SITE_URL}${route.path}`;
  const breadcrumbs = breadcrumbsOf(route);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'it-IT',
    isPartOf: { '@id': `${SITE_URL}/#website` }
  };

  if (breadcrumbs.length) {
    jsonLd.breadcrumb = {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  const tags = [
    ['name', 'description', route.description],
    ['name', 'robots', 'index, follow'],
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', 'Netti Architetti'],
    ['property', 'og:locale', 'it_IT'],
    ['property', 'og:title', route.title],
    ['property', 'og:description', route.description],
    ['property', 'og:url', url],
    ['property', 'og:image', DEFAULT_IMAGE],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', route.title],
    ['name', 'twitter:description', route.description],
    ['name', 'twitter:image', DEFAULT_IMAGE]
  ]
    .map(([attr, key, value]) => `    <meta ${attr}="${key}" content="${escapeHtml(value)}" />`)
    .join('\n');

  return [
    tags,
    `    <link rel="canonical" href="${url}" />`,
    `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  ].join('\n');
};

// Testo leggibile senza JavaScript, con i link interni per far scoprire le
// altre pagine a chi non manda in esecuzione il router.
const fallbackBody = (route) => {
  const links = seoRoutes
    .filter((item) => item.path !== route.path)
    .map((item) => `<li><a href="${item.path}">${escapeHtml(item.heading)}</a></li>`)
    .join('');

  return [
    '<div id="app">',
    `<h1>${escapeHtml(route.heading)}</h1>`,
    `<p>${escapeHtml(route.intro)}</p>`,
    `<nav aria-label="Pagine del sito"><ul>${links}</ul></nav>`,
    '</div>'
  ].join('');
};

const renderRoute = (template, route) =>
  template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace('</head>', `${metaTags(route)}\n  </head>`)
    .replace('<div id="app"></div>', fallbackBody(route));

const renderSitemap = () =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...seoRoutes.map((route) =>
      [
        '  <url>',
        `    <loc>${SITE_URL}${route.path}</loc>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        '  </url>'
      ].join('\n')
    ),
    '</urlset>',
    ''
  ].join('\n');

export default function staticSeo() {
  return {
    name: 'netti-static-seo',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(outDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        this.warn('dist/index.html assente: SEO statica non applicata.');
        return;
      }

      const template = fs.readFileSync(indexPath, 'utf8');

      for (const route of seoRoutes) {
        const html = renderRoute(template, route);
        const target =
          route.path === '/'
            ? indexPath
            : path.join(outDir, route.path.slice(1), 'index.html');

        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, html);
      }

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap());

      this.info(`SEO statica applicata a ${seoRoutes.length} rotte + sitemap.xml`);
    }
  };
}
