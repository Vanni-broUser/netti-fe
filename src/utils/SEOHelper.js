/**
 * Crea l'oggetto `head` per pagine secondarie del sito.
 *
 * @param {Object} config - Configurazione della pagina
 * @param {string} config.title - Titolo completo della pagina
 * @param {string} config.description - Meta description
 * @param {string} config.slug - Slug della pagina (es: "progetti", "chi-siamo")
 * @param {Array} config.breadcrumbs - Array con i breadcrumb { name, url }
 * @param {string} [config.image] - URL immagine per og:image (default fornito)
 * @returns {Object} head
 */
export function generateSeoHead({
  title,
  description,
  slug,
  breadcrumbs = [],
  image = "https://nettiarchitetti.it/home/M_03-homepage.jpg",
}) {
  const pageUrl = `https://nettiarchitetti.it/${slug}`;

  const breadcrumbList = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return {
    title,
    meta: [
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: image },
      { property: "og:type", content: "website" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [
      { rel: "canonical", href: pageUrl },
      { rel: "icon", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: title,
          description,
          inLanguage: "it-IT",
          isPartOf: {
            "@id": "https://nettiarchitetti.it/#website",
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: breadcrumbList,
          },
        }),
      },
    ],
  };
}
