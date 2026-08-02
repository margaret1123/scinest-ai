import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/dashboard", "/api/stripe/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/login", "/dashboard"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/login", "/dashboard"],
      },
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: ["/login", "/dashboard"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/login", "/dashboard"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/login", "/dashboard"],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/sitemap-llm.xml`],
    host: siteUrl,
  };
}
