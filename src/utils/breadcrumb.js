export const breadcrumbs = [
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
    url: "https://nettiarchitetti.it/ricerche",
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
    url: "https://nettiarchitetti.it/dinettica",
    position: 7,
  },
  {
    name: "Extra",
    url: "https://nettiarchitetti.it/extra",
    position: 8,
  },
];

// Mapper per generare il JSON-LD
export const getBreadcrumbJSONLD = () => ({
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
