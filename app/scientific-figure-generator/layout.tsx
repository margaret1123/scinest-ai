import type { ReactNode } from "react";
import { ProductBreadcrumbs, RelatedProductPages, createBreadcrumbData } from "../product-page-navigation";
import "./scientific-figure-proof.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export default function ScientificFigureGeneratorLayout({ children }: { children: ReactNode }) {
  const breadcrumbData = createBreadcrumbData(siteUrl, "figures");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <ProductBreadcrumbs current="figures" />
      {children}
      <RelatedProductPages current="figures" />
    </>
  );
}
