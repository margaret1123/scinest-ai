import type { ReactNode } from "react";
import { ProductBreadcrumbs, RelatedProductPages, createBreadcrumbData } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export default function AiPowerPointGeneratorLayout({ children }: { children: ReactNode }) {
  const breadcrumbData = createBreadcrumbData(siteUrl, "powerpoint");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <ProductBreadcrumbs current="powerpoint" />
      {children}
      <RelatedProductPages current="powerpoint" />
    </>
  );
}
