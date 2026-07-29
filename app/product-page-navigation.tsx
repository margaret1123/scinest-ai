import styles from "./product-page-navigation.module.css";

export type ProductPageKey = "writing" | "figures" | "powerpoint";

const productPages = {
  writing: {
    label: "AI Thesis Writing Assistant",
    href: "/ai-thesis-writing-assistant",
    title: "Build the academic draft",
    description: "Create an editable outline, bind selected materials and references, and generate a connected long-form draft.",
  },
  figures: {
    label: "Scientific Figure Generator",
    href: "/scientific-figure-generator",
    title: "Create an editable scientific figure",
    description: "Turn the research into layered scientific visuals with editable text and selected-area revision.",
  },
  powerpoint: {
    label: "AI PowerPoint Generator",
    href: "/ai-powerpoint-generator",
    title: "Build the editable presentation",
    description: "Reuse selected materials, writing and figures to create a structured presentation and export a real PPTX.",
  },
} as const;

export function createBreadcrumbData(siteUrl: string, current: ProductPageKey) {
  const page = productPages[current];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SciNest",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.label,
        item: `${siteUrl}${page.href}`,
      },
    ],
  };
}

export function ProductBreadcrumbs({ current }: { current: ProductPageKey }) {
  const page = productPages[current];

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{page.label}</li>
      </ol>
    </nav>
  );
}

export function RelatedProductPages({ current }: { current: ProductPageKey }) {
  const relatedPages = (Object.entries(productPages) as Array<[ProductPageKey, (typeof productPages)[ProductPageKey]]>)
    .filter(([key]) => key !== current);
  const headingId = `related-${current}`;

  return (
    <section className={styles.related} aria-labelledby={headingId}>
      <div className={styles.relatedInner}>
        <p className={styles.eyebrow}>CONTINUE THE SAME PROJECT</p>
        <h2 id={headingId}>Writing, figures and presentations stay connected.</h2>
        <p className={styles.intro}>SciNest keeps the selected project materials and confirmed outputs available as the work moves from one academic deliverable to the next.</p>
        <div className={styles.grid}>
          {relatedPages.map(([key, page]) => (
            <a className={styles.card} href={page.href} key={key}>
              <span className={styles.cardLabel}>{page.label}</span>
              <h3>{page.title}</h3>
              <p>{page.description}</p>
              <strong>View this workflow <span aria-hidden="true">→</span></strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
