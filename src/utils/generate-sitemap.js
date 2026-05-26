import fs from 'fs';

const SITE = 'https://nettiarchitetti.it';

const staticRoutes = [
  { url: '/',                   priority: '1.0', changefreq: 'weekly'  },
  { url: '/architetture',       priority: '0.9', changefreq: 'monthly' },
  { url: '/progetti',           priority: '0.9', changefreq: 'monthly' },
  { url: '/ricerche',           priority: '0.8', changefreq: 'monthly' },
  { url: '/ricerche/dinettica', priority: '0.7', changefreq: 'monthly' },
  { url: '/ricerche/extra',     priority: '0.7', changefreq: 'monthly' },
  { url: '/agenda',             priority: '0.8', changefreq: 'weekly'  },
  { url: '/chi-siamo',          priority: '0.7', changefreq: 'yearly'  },
  { url: '/contatti',           priority: '0.7', changefreq: 'yearly'  },
];

const topics = ['Agenda', 'Progetti', 'Architetture', 'Dinettica', 'Extra'];

async function fetchPostsByTopic(topic) {
  const res = await fetch(
    `https://test.fastsite.it/api/blog/post?project=nettiarchitetti.it&topics[]=${topic}`
  );
  const data = await res.json();
  console.log(`Topic ${topic}: ${data.posts?.length} post`);
  return data.posts ?? [];
}

async function generateSitemap() {
  let dynamicRoutes = [];

  try {
    const results = await Promise.all(topics.map(fetchPostsByTopic));
    const allPosts = results.flat();

    const seen = new Set();
    dynamicRoutes = allPosts
      .filter(post => {
        if (seen.has(post.id)) return false;
        seen.add(post.id);
        return true;
      })
      .map(post => ({
        url: `/dettaglio/${post.id}`,
        priority: '0.6',
        changefreq: 'never',
        lastmod: post.updated_at?.slice(0, 10) ?? post.created_at?.slice(0, 10),
      }));

    console.log(`✅ Recuperati ${dynamicRoutes.length} post totali`);
  } catch (err) {
    console.warn('⚠️  Impossibile recuperare i post dinamici:', err.message);
  }

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${SITE}${r.url}</loc>${r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : ''}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('./public/sitemap.xml', xml, 'utf-8');
  console.log(`✅ sitemap.xml generata con ${allRoutes.length} URL`);
}

generateSitemap();