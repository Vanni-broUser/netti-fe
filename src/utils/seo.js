const BASE_URL = 'https://nettiarchitetti.it';
const DEFAULT_IMAGE = `${BASE_URL}/home/desktop/3.jpg`;
const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ArchitectureFirm'],
  '@id': ORGANIZATION_ID,
  name: 'Netti Architetti',
  alternateName: 'Studio Netti Architetti',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 200,
    height: 200,
  },
  image: DEFAULT_IMAGE,
  email: 'studio@nettiarchitetti.it',
  telephone: '+390805241767',
  foundingDate: '1990',
  description:
    'Studio di architettura a Bari fondato da Lorenzo Netti e Gloria Valente. Progettazione architettonica contemporanea con attenzione alla storia, all\'ambiente e al paesaggio urbano ed extraurbano.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Piazza Giuseppe Massari, 36',
    addressLocality: 'Bari',
    addressRegion: 'Puglia',
    postalCode: '70122',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.12765160469907,
    longitude: 16.865408873701487,
  },
  sameAs: [
    'https://www.facebook.com/nettiarchitetti/',
    'https://www.instagram.com/nettiarchitetti/',
    'https://www.archilovers.com/lorenzo-netti/',
    'https://divisare.com/authors/10021575-netti-architetti',
  ],
  member: [
    {
      '@type': 'Person',
      name: 'Lorenzo Netti',
      jobTitle: 'Architetto, Docente Politecnico di Bari',
      image: `${BASE_URL}/chiSiamo/lorenzo_netti.jpg`,
      sameAs: 'https://www.archilovers.com/lorenzo-netti/',
    },
    {
      '@type': 'Person',
      name: 'Gloria Valente',
      jobTitle: 'Architetto, Designer',
      image: `${BASE_URL}/chiSiamo/gloria_valente.jpg`,
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ArchitectureFirm'],
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'Netti Architetti',
  image: DEFAULT_IMAGE,
  url: BASE_URL,
  telephone: '+390805241767',
  email: 'studio@nettiarchitetti.it',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Piazza Giuseppe Massari, 36',
    addressLocality: 'Bari',
    addressRegion: 'Puglia',
    postalCode: '70122',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.12765160469907,
    longitude: 16.865408873701487,
  },
  hasMap: 'https://maps.google.com/?q=Piazza+Giuseppe+Massari+36+Bari',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Bari' },
    { '@type': 'State', name: 'Puglia' },
    { '@type': 'Country', name: 'Italy' },
  ],
  parentOrganization: { '@id': ORGANIZATION_ID },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: BASE_URL,
  name: 'Netti Architetti',
  description: 'Studio di architettura contemporanea a Bari, Puglia.',
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: ['it-IT', 'en-US'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/ricerca-post?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function buildWebPageSchema({ url, title, description, image, breadcrumbs = [], type = 'WebPage', datePublished, dateModified }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'it-IT',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  };

  if (image) {
    schema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: image,
      representativeOfPage: true,
    };
  }

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;

  if (breadcrumbs.length) {
    schema.breadcrumb = buildBreadcrumbSchema(breadcrumbs);
  }

  return schema;
}

function baseMeta(title, description, url, image) {
  return [
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    // Open Graph
    { property: 'og:site_name', content: 'Netti Architetti' },
    { property: 'og:locale', content: 'it_IT' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@nettiarchitetti' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];
}

function baseLink(url) {
  return [
    { rel: 'icon', href: '/logo.png', type: 'image/png' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
    { rel: 'canonical', href: url },
    { rel: 'alternate', hreflang: 'it', href: url },
    { rel: 'alternate', hreflang: 'x-default', href: url },
  ];
}

export const head = {
  title: 'Netti Architetti — Architettura per il Mondo Reale | Studio a Bari, Puglia',
  htmlAttrs: { lang: 'it' },
  meta: [
    ...baseMeta(
      'Netti Architetti — Architettura per il Mondo Reale | Bari, Puglia',
      'Studio di architettura a Bari fondato da Lorenzo Netti e Gloria Valente. Progettazione architettonica contemporanea per residenze, spazi pubblici e ricerca, con attenzione alla storia, all\'ambiente e al paesaggio urbano ed extraurbano.',
      BASE_URL,
      DEFAULT_IMAGE
    ),
    { name: 'keywords', content: 'studio architettura Bari, architetti Bari, progettazione architettonica Puglia, architettura contemporanea, Lorenzo Netti, Gloria Valente, architettura residenziale, progettazione spazi pubblici' },
    { name: 'author', content: 'Netti Architetti' },
    { name: 'geo.position', content: '41.12765160469907;16.865408873701487' },
    { name: 'geo.region', content: 'IT-BA' },
    { name: 'geo.placename', content: 'Bari, Puglia, Italia' },
    { name: 'ICBM', content: '41.12765160469907, 16.865408873701487' },
    { name: 'theme-color', content: '#fb2831' },
  ],
  link: [
    ...baseLink(BASE_URL),
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(websiteSchema) },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(
        buildWebPageSchema({
          url: BASE_URL,
          title: 'Netti Architetti — Architettura per il Mondo Reale',
          description: 'Homepage di Netti Architetti, studio di architettura a Bari.',
          image: DEFAULT_IMAGE,
          breadcrumbs: [{ name: 'Home', url: BASE_URL }],
          type: 'WebPage',
        })
      ),
    },
  ],
};

export function generateSeoHead({
  title,
  description,
  slug,
  breadcrumbs = [],
  image = DEFAULT_IMAGE,
  pageType = 'CollectionPage',
  keywords = '',
}) {
  const pageUrl = slug ? `${BASE_URL}/${slug}` : BASE_URL;

  const meta = [
    ...baseMeta(title, description, pageUrl, image),
    { name: 'author', content: 'Netti Architetti' },
  ];

  if (keywords) {
    meta.push({ name: 'keywords', content: keywords });
  }

  return {
    title,
    htmlAttrs: { lang: 'it' },
    meta,
    link: baseLink(pageUrl),
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(
          buildWebPageSchema({ url: pageUrl, title, description, image, breadcrumbs, type: pageType })
        ),
      },
    ],
  };
}
