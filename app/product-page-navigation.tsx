import styles from "./product-page-navigation.module.css";

export type ProductPageKey = "writing" | "figures" | "powerpoint" | "paperWriter" | "defense" | "litReview";

const productPages = {
  writing: {
    label: "AI Long-Form Writer",
    labelZh: "AI 长文写作",
    href: "/ai-long-form-writer",
    title: "Draft the complete paper",
    description: "Create an editable outline, bind selected materials and references, and generate a connected long-form draft.",
  },
  figures: {
    label: "AI Editable Images",
    labelZh: "AI 可编辑图片",
    href: "/ai-editable-images",
    title: "Create an editable diagram or figure",
    description: "Turn the research into visual diagrams with editable text labels, movable elements and selected-area revision.",
  },
  powerpoint: {
    label: "AI Editable PowerPoint",
    labelZh: "AI 可编辑 PPT",
    href: "/ai-editable-powerpoint",
    title: "Build the editable presentation",
    description: "Reuse selected materials, writing and figures to create a structured presentation and export a real editable PPTX.",
  },
  paperWriter: {
    label: "AI Paper Writer",
    labelZh: "AI 论文写作助手",
    href: "/ai-paper-writer",
    title: "Draft and revise your thesis",
    description: "Turn a research question into an outline, draft chapter by chapter from your sources, and revise single sections in place.",
  },
  defense: {
    label: "Thesis Defense Presentation",
    labelZh: "答辩 PPT",
    href: "/thesis-defense-presentation",
    title: "Turn your paper into defense slides",
    description: "Generate a defense deck from your thesis with speaker notes, then export a real editable PPTX or PDF.",
  },
  litReview: {
    label: "Literature Review Assistant",
    labelZh: "文献综述助手",
    href: "/literature-review-assistant",
    title: "Write the literature review",
    description: "Organise uploaded papers into a research narrative, then draft the literature review and research proposal section by section.",
  },
} as const;

export type BreadcrumbLocale = "en" | "zh";

export function createBreadcrumbData(siteUrl: string, current: ProductPageKey, locale: BreadcrumbLocale = "en") {
  const page = productPages[current];
  const zh = locale === "zh";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SciNest",
        item: zh ? `${siteUrl}/zh` : `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: zh ? page.labelZh : page.label,
        item: `${siteUrl}${zh ? "/zh" : ""}${page.href}`,
      },
    ],
  };
}

export function ProductBreadcrumbs({ current, locale = "en" }: { current: ProductPageKey; locale?: BreadcrumbLocale }) {
  const page = productPages[current];
  const zh = locale === "zh";

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol>
        <li><a href={zh ? "/zh" : "/"}>{zh ? "首页" : "Home"}</a></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{zh ? page.labelZh : page.label}</li>
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
