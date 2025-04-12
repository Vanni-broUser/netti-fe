const breadcrumbs = [
  { name: "Home", url: "https://nettiarchitetti.it", position: 1 },
  {
    name: "Architetture",
    url: "https://nettiarchitetti.it/architetture",
    position: 2,
  },
  { name: "Progetti", url: "https://nettiarchitetti.it/progetti", position: 3 },
  { name: "Ricerche", url: "https://nettiarchitetti.it/ricerche", position: 4 },
  { name: "Agenda", url: "https://nettiarchitetti.it/agenda", position: 5 },
  {
    name: "Chi Siamo",
    url: "https://nettiarchitetti.it/chi-siamo",
    position: 6,
  },
  {
    name: "Dinettica",
    url: "https://nettiarchitetti.it/ricerche/dinettica",
    position: 7,
  },
  {
    name: "Extra",
    url: "https://nettiarchitetti.it/ricerche/extra",
    position: 8,
  },
];

const getBreadcrumb = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nettiarchitetti.it/#breadcrumb",
  itemListElement: breadcrumbs.map((item) => ({
    "@type": "ListItem",
    position: item.position,
    name: item.name,
    item: {
      "@type": "WebPage",
      "@id": item.url,
      url: item.url,
      name: item.name,
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
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#fb2831" },
    { name: "geo.position", content: "41.12765160469907;16.865408873701487" },
    { name: "geo.region", content: "IT-BA" },
    { name: "geo.placename", content: "Bari" },
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
  ],
  link: [
    { rel: "icon", href: "/logo.png" },
    { rel: "apple-touch-icon", href: "/logo.png" },
    { rel: "canonical", href: "https://nettiarchitetti.it" },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://nettiarchitetti.it/#organization",
          name: "Netti Architetti",
          url: "https://nettiarchitetti.it",
          logo: "https://nettiarchitetti.it/home/M_03-homepage.jpg",
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
        null,
        2
      ),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(
        {
          "@context": "https://schema.org",
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
          priceRange: "$$$",
          sameAs: [
            "https://www.facebook.com/nettiarchitetti/",
            "https://www.instagram.com/nettiarchitetti/",
            "https://www.archilovers.com/lorenzo-netti/",
            "https://divisare.com/authors/10021575-netti-architetti",
          ],
          parentOrganization: {
            "@id": "https://nettiarchitetti.it/#organization",
          },
        },
        null,
        2
      ),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(
        {
          "@context": "https://schema.org",
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
        null,
        2
      ),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumb(), null, 2),
    },
  ],
};
