// Fonte di verita' unica per i metadati SEO di ogni rotta statica.
//
// Viene letta due volte:
//  - a runtime dalle view, tramite useHead(generateSeoHead(...));
//  - a build time dal plugin build/static-seo.js, che scrive gli stessi tag
//    dentro l'HTML servito.
//
// Cosi' i crawler che non eseguono JavaScript (anteprime social, assistenti AI,
// e Googlebot prima del render) leggono gli stessi metadati che vede l'utente.

export const SITE_URL = 'https://nettiarchitetti.it';

export const SITE_NAME = 'Netti Architetti';

export const DEFAULT_IMAGE = `${SITE_URL}/home/M_03-homepage.jpg`;

// `path` e' la rotta reale definita in src/plugins/router.js: da qui derivano
// sia il canonical sia la sitemap, quindi non puo' divergere dal router.
export const seoRoutes = [
  {
    path: '/',
    priority: 1.0,
    title: 'Netti Architetti - Architettura per il Mondo Reale | Bari, Puglia',
    description:
      'Netti Architetti offre progettazione architettonica innovativa a Bari, ricercando nuove forme espressive con attenzione alla storia, all\'ambiente e al paesaggio urbano ed extraurbano.',
    heading: 'Netti Architetti',
    intro:
      'Studio di architettura a Bari. Progettazione architettonica contemporanea in Puglia, tra ricerca espressiva, attenzione alla storia e al paesaggio urbano ed extraurbano.'
  },
  {
    path: '/progetti',
    priority: 0.9,
    title: 'Progetti - Netti Architetti | Architettura Contemporanea a Bari',
    description:
      'Progetti. Scopri i nostri progetti di architettura contemporanea a Bari e in Puglia.',
    heading: 'Progetti',
    intro:
      'I progetti di architettura contemporanea realizzati da Netti Architetti a Bari e in Puglia.'
  },
  {
    path: '/architetture',
    priority: 0.9,
    title: 'Architetture - Netti Architetti | Architettura Contemporanea a Bari',
    description:
      'Ecco le nostre architetture contemporanee a Bari e in Puglia. Scopri i nostri progetti di architettura.',
    heading: 'Architetture',
    intro:
      'Le architetture contemporanee firmate Netti Architetti a Bari e in Puglia.'
  },
  {
    path: '/ricerche',
    priority: 0.8,
    title: 'Ricerche - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Ricerche. La parola chiave e\' ricerca.',
    heading: 'Ricerche',
    intro:
      'La ricerca come metodo di lavoro dello studio: sperimentazione, didattica e progetti extra.'
  },
  {
    path: '/ricerche/dinettica',
    priority: 0.6,
    title: 'Dinettica - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Dinettica. Scopri i nostri progetti didattici di architettura.',
    heading: 'Dinettica',
    intro: 'I progetti didattici di architettura dello studio Netti Architetti.'
  },
  {
    path: '/ricerche/extra',
    priority: 0.6,
    title: 'Extra - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Extra. Scopri i nostri progetti bonus.',
    heading: 'Extra',
    intro: 'I progetti extra e le sperimentazioni fuori formato dello studio.'
  },
  {
    path: '/agenda',
    priority: 0.8,
    title: 'Agenda - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Agenda. Il blog di Netti Architetti.',
    heading: 'Agenda',
    intro: 'Il blog dello studio: appuntamenti, mostre, pubblicazioni e novita\'.'
  },
  {
    path: '/chi-siamo',
    priority: 0.7,
    title: 'Chi Siamo - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Chi Siamo. Scopri chi siamo e la nostra storia.',
    heading: 'Chi Siamo',
    intro: 'Chi siamo, la storia dello studio e le persone che lo compongono.'
  },
  {
    path: '/contatti',
    priority: 0.7,
    title: 'Contatti - Netti Architetti | Architettura Contemporanea a Bari',
    description:
      'Contatta Netti Architetti: studio di architettura a Bari. Scrivici per informazioni sui nostri progetti.',
    heading: 'Contatti',
    intro: 'Come raggiungere e contattare lo studio Netti Architetti a Bari.'
  },
  {
    path: '/portfolio-15',
    priority: 0.6,
    title: 'Portfolio 2015 - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Il portfolio 2015 dello studio Netti Architetti.',
    heading: 'Portfolio 2015',
    intro: 'Una selezione dei lavori dello studio raccolti nel portfolio 2015.'
  },
  {
    path: '/portfolio-25',
    priority: 0.6,
    title: 'Portfolio 2025 - Netti Architetti | Architettura Contemporanea a Bari',
    description: 'Il portfolio 2025 dello studio Netti Architetti.',
    heading: 'Portfolio 2025',
    intro: 'Una selezione dei lavori dello studio raccolti nel portfolio 2025.'
  }
];

// Lo slug atteso da generateSeoHead(): la rotta senza lo slash iniziale.
export const slugOf = (path) => path.replace(/^\//, '');

// Breadcrumb Home > Pagina, coerente con il canonical.
export const breadcrumbsOf = (route) =>
  route.path === '/'
    ? []
    : [
      { name: 'Home', url: SITE_URL },
      { name: route.heading, url: `${SITE_URL}${route.path}` }
    ];

// Argomenti pronti per generateSeoHead(), usati dalle view.
export const seoFor = (path) => {
  const route = seoRoutes.find((item) => item.path === path);

  if (!route) throw new Error(`seo.routes.js: rotta non censita: ${path}`);

  return {
    title: route.title,
    description: route.description,
    slug: slugOf(route.path),
    breadcrumbs: breadcrumbsOf(route)
  };
};
