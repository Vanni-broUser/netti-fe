import { baseUrl, pagePaths } from "./urls";

const breadcrumbs = [
  {
    name: "Home",
    url: "https://nettiarchitetti.it",
    position: 1,
  },
  {
    name: "Architetture",
    url: "https://nettiarchitetti.it/architetture",
    position: 2,
  },
  {
    name: "Progetti",
    url: "https://nettiarchitetti.it/progetti",
    position: 3,
  },
  {
    name: "Ricerche",
    url: `${baseUrl}/${pagePaths.ricerche}`,
    position: 4,
  },
  {
    name: "Agenda",
    url: "https://nettiarchitetti.it/agenda",
    position: 5,
  },
  {
    name: "Chi Siamo",
    url: "https://nettiarchitetti.it/chi-siamo",
    position: 6,
  },
  {
    name: "Dinettica",
    url: `${baseUrl}/${pagePaths.dinettica}`,
    position: 7,
  },
  {
    name: "Extra",
    url: `${baseUrl}/${pagePaths.extra}`,
    position: 8,
  },
];

const getBreadcrumb = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nettiarchitetti.it/#breadcrumb",
  itemListElement: breadcrumbs.map((breadcrumb) => ({
    "@type": "ListItem",
    position: breadcrumb.position,
    name: breadcrumb.name,
    item: {
      "@type": "WebPage",
      "@id": breadcrumb.url,
      url: breadcrumb.url,
      name: breadcrumb.name,
    },
  })),
});

export const head = {
  title: "Netti Architetti - Architettura per il Mondo Reale | Bari, Puglia",
  meta: [
    {
      name: "description",
      content:
        "Netti Architetti offre progettazione architettonica innovativa a Bari, ricercando nuove forme espressive con attenzione alla storia, all'ambiente e al paesaggio urbano ed extraurbano.",
    },
    {
      name: "keywords",
      content:
        "Netti Architetti, architettura Bari, progettazione architettonica, design sostenibile, ricerca espressiva, paesaggio urbano, architetti italiani, progetti architettonici, studio di architettura, architettura contemporanea",
    },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "Netti Architetti - Architettura per il Mondo Reale a Bari",
    },
    {
      property: "og:description",
      content:
        "Netti Architetti è uno studio di architettura a Bari che offre progettazione innovativa, ricercando nuove forme espressive con responsabilità e consapevolezza.",
    },
    {
      property: "og:image",
      content: "https://nettiarchitetti.it/home/M_03-homepage.jpg",
    },
    { property: "og:url", content: "https://nettiarchitetti.it" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "it_IT" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Netti Architetti - Architettura per il Mondo Reale a Bari",
    },
    {
      name: "twitter:description",
      content:
        "Netti Architetti offre progettazione architettonica innovativa a Bari, ricercando nuove forme espressive con attenzione alla storia, all'ambiente e al paesaggio.",
    },
    {
      name: "twitter:image",
      content: "https://nettiarchitetti.it/home/M_03-homepage.jpg",
    },
    { name: "geo.position", content: "41.12765160469907;16.865408873701487" },
    { name: "geo.region", content: "IT-BA" },
    { name: "geo.placename", content: "Bari" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#fb2831" },
  ],
  link: [
    { rel: "icon", href: "/logo.png" },
    { rel: "apple-touch-icon", href: "/logo.png" },
  ],
  script: [
    {
      type: "application/ld+json",
      json: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://nettiarchitetti.it/#organization",
            name: "Netti Architetti",
            url: "https://nettiarchitetti.it",
            image: "https://nettiarchitetti.it/home/M_03-homepage.jpg",
            email: "mailto:studio@nettiarchitetti.it",
            telephone: "+39 0805241767",
            sameAs: [
              "https://www.facebook.com/nettiarchitetti/",
              "https://www.instagram.com/nettiarchitetti/",
              "https://www.archilovers.com/lorenzo-netti/",
              "https://divisare.com/authors/10021575-netti-architetti",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Piazza Giuseppe Massari, 36",
              addressLocality: "Bari",
              postalCode: "70122",
              addressCountry: "IT",
            },
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://nettiarchitetti.it/#localbusiness",
            name: "Netti Architetti",
            image: "https://nettiarchitetti.it/home/M_03-homepage.jpg",
            url: "https://nettiarchitetti.it",
            telephone: "+39 0805241767",
            email: "mailto:studio@nettiarchitetti.it",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Piazza Giuseppe Massari, 36",
              addressLocality: "Bari",
              postalCode: "70122",
              addressCountry: "IT",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 41.12765160469907,
              longitude: 16.865408873701487,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/nettiarchitetti/",
              "https://www.instagram.com/nettiarchitetti/",
              "https://www.archilovers.com/lorenzo-netti/",
              "https://divisare.com/authors/10021575-netti-architetti",
            ],
            priceRange: "$$$",
            parentOrganization: {
              "@type": "Organization",
              "@id": "https://nettiarchitetti.it/#organization",
            },
          },
          {
            "@type": "WebSite",
            "@id": "https://nettiarchitetti.it/#website",
            url: "https://nettiarchitetti.it",
            name: "Netti Architetti - Architettura per il Mondo Reale | Bari, Puglia",
            publisher: {
              "@id": "https://nettiarchitetti.it/#organization",
            },
            inLanguage: "it-IT",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://nettiarchitetti.it/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@type": "WebPage",
            "@id": "https://nettiarchitetti.it/#webpage",
            url: "https://nettiarchitetti.it",
            name: "Netti Architetti - Architettura per il Mondo Reale | Bari, Puglia",
            description:
              "Netti Architetti offre progettazione architettonica innovativa a Bari, ricercando nuove forme espressive con attenzione alla storia, all'ambiente e al paesaggio urbano ed extraurbano.",
            inLanguage: "it-IT",
            isPartOf: {
              "@id": "https://nettiarchitetti.it/#website",
            },
            breadcrumb: {
              "@id": "https://nettiarchitetti.it/#breadcrumb",
            },
            datePublished: "2023-10-01",
            dateModified: "2023-10-01",
          },
          getBreadcrumb(),
        ],
      }),
    },
  ],
};
