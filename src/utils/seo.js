const SITE_URL = 'https://nettiarchitetti.it';
const DEFAULT_IMAGE = `${SITE_URL}/home/M_03-homepage.jpg`;
const SITE_NAME = 'Netti Architetti';

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: DEFAULT_IMAGE,
    width: 1200,
    height: 630,
  },
  email: 'studio@nettiarchitetti.it',
  telephone: '+39 0805241767',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Piazza Giuseppe Massari, 36',
    addressLocality: 'Bari',
    postalCode: '70122',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.12765160469907,
    longitude: 16.865408873701487,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/nettiarchitetti/',
    'https://www.instagram.com/nettiarchitetti/',
    'https://www.archilovers.com/lorenzo-netti/',
    'https://divisare.com/authors/10021575-netti-architetti',
  ],
};

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${SITE_NAME} - Architettura per il Mondo Reale | Bari, Puglia`,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'it-IT',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function generateSeoHead({
  title,
  description,
  slug = '',
  image = DEFAULT_IMAGE,
  breadcrumbs = [],
  type = 'WebPage',
  datePublished = null,
  dateModified = null,
  authorName = SITE_NAME,
  keywords = [],
}) {
  const pageUrl = slug ? `${SITE_URL}/${slug}` : SITE_URL;

  const breadcrumbSchema = breadcrumbs.length
    ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    }
    : null;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: 'it-IT',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    ...(image && {
      primaryImageOfPage: { '@type': 'ImageObject', url: image },
    }),
    ...(breadcrumbSchema && {
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    }),
    ...(type === 'BlogPosting' && {
      headline: title,
      author: {
        '@type': 'Organization',
        name: authorName,
        url: SITE_URL,
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
      image: { '@type': 'ImageObject', url: image },
      ...(datePublished && { datePublished }),
      ...(dateModified && { dateModified }),
    }),
  };

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#fb2831' },
      ...(keywords.length
        ? [{ name: 'keywords', content: keywords.join(', ') }]
        : []),
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: pageUrl },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:type',
        content: type === 'BlogPosting' ? 'article' : 'website',
      },
      { property: 'og:locale', content: 'it_IT' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: pageUrl },
      { rel: 'icon', href: '/logo.png' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(pageSchema),
      },
      ...(breadcrumbSchema
        ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(breadcrumbSchema),
          },
        ]
        : []),
    ],
  };
}

const homeSeoBase = generateSeoHead({
  title: `${SITE_NAME} - Architettura per il Mondo Reale | Bari, Puglia`,
  description:
    'Netti Architetti offre progettazione architettonica innovativa a Bari, ricercando nuove forme espressive con attenzione alla storia, all\'ambiente e al paesaggio urbano ed extraurbano.',
  slug: '',
  keywords: [
    'architettura Bari',
    'studio di architettura Puglia',
    'progettazione architettonica',
    'architettura contemporanea',
    'design sostenibile',
    'architetti italiani',
  ],
  breadcrumbs: [{ name: 'Home', url: SITE_URL }],
});

export const head = {
  ...homeSeoBase,
  script: [
    ...homeSeoBase.script,
    { type: 'application/ld+json', innerHTML: JSON.stringify(schemaOrganization) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(schemaWebSite) },
  ],
};
