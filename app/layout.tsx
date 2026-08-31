import type { Metadata } from "next";
import { headers } from "next/headers";
import { GoogleAnalytics } from "./google-analytics";
import "./globals.css";
import "./scinest-assets.css";
import "./home-product-entries.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SciNest",
    title: "AI Academic Writing Workspace: Papers, Slides & Diagrams | SciNest",
    description: "Free Windows app. Use your own ChatGPT, DeepSeek or Claude API key — no AI-usage subscription, no generation cap. Pro features from $9/mo. Draft papers, decks and diagrams. Start free.",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Academic Writing Workspace: Papers, Slides & Diagrams",
    description: "Free Windows app. Bring your own ChatGPT, DeepSeek or Claude API key. Start free.",
    images: ["/logo.png"],
  },
  title: {
    default: "SciNest — AI Academic Writing Workspace: Papers, Slides, Diagrams",
    template: "%s | SciNest",
  },
  description:
    "Free Windows app: use your own ChatGPT, DeepSeek or Claude API key — no AI-usage subscription, no generation cap. Pro features from $9/mo. Draft papers, decks and diagrams. Start free.",
  keywords: [
    "AI academic workspace",
    "academic writing tool",
    "research writing assistant",
    "AI long-form writing",
    "editable AI PowerPoint",
    "AI diagram generator editable",
    "long-form writing workspace",
    "学术写作工具",
    "论文写作助手",
    "AI 学术工作区",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh", "x-default": "/" },
  },
  verification: {
    google: "7mLz2N52DJFJlAp8T_pJAJIqmuC9E92pVTkNJnG3eMM",
    // Bing Webmaster: replace with your real msvalidate.01 token after verifying scinest.app
    other: { "msvalidate.01": "REPLACE-WITH-YOUR-BING-WEBMASTER-TOKEN" },
  },
  robots: { index: true, follow: true },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SciNest",
    alternateName: "科研小棉袄",
    url: siteUrl,
    inLanguage: ["en", "zh-CN"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SciNest",
    url: siteUrl,
    brand: { "@type": "Brand", name: "SciNest" },
    founder: { "@type": "Person", name: "Margaret" },
    sameAs: ["https://github.com/margaret1123/scinest-ai", "https://github.com/margaret1123"],
  },
  // Person schema 无需单独启用：Organization 的 founder 字段已声明 Margaret（运营主体为新西兰个体经营者，不公开注册名）。
  // {
  //   "@context": "https://schema.org",
  //   "@type": "Person",
  //   name: "Margaret",
  //   url: `${siteUrl}/about`,
  //   worksFor: { "@type": "Organization", name: "SciNest" },
  //   jobTitle: "Founder",
  //   sameAs: ["https://github.com/margaret1123"],
  // },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SciNest",
    alternateName: "科研小棉袄",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Windows",
    releaseNotes: "SciNest Free is available for Windows. New accounts start with Pro unlocked.",
    description:
      "A Windows desktop research productivity application that connects academic writing, scientific figures and thesis defense presentations inside one project.",
    featureList: [
      "Unlimited SciNest generations with the user's own AI API key",
      "Thesis and dissertation revision",
      "Scientific figure generation",
      "Paper-to-PowerPoint and thesis defense presentation workflows",
      "Free plan with one active project, watermarked figure export and PDF presentation export",
      "Pro plan with multiple projects, watermark-free figures, layer editing and editable PowerPoint export",
      "Local project workspace",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Postgraduate students, final-year students and early researchers",
    },
    author: { "@type": "Person", name: "Margaret" },
  },
];

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const htmlLang = h.get("x-html-lang") || "en";

  return (
    <html lang={htmlLang}>
      <head>
        <meta name="baidu-site-verification" content="codeva-I9EWAxnaV0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js';}else{bp.src='http://push.zhanzhang.baidu.com/push.js';}var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(bp,s);})();",
          }}
        />
      </head>
      <body>{children}<GoogleAnalytics /></body>
    </html>
  );
}
