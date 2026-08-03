import type { ReactNode } from "react";
import { ProductBreadcrumbs, RelatedProductPages, createBreadcrumbData } from "../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export default function AiThesisWritingAssistantLayout({ children }: { children: ReactNode }) {
  const breadcrumbData = createBreadcrumbData(siteUrl, "writing");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <ProductBreadcrumbs current="writing" />
      {children}
      <RelatedProductPages current="writing" />
    </>
  );
}
