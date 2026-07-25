import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-25T00:00:00.000Z");
  const languages = {
    en: `${siteUrl}/`,
    "zh-CN": `${siteUrl}/zh`,
    "x-default": `${siteUrl}/`,
  };

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/zh`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/api/ai/summary`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/api/ai/faq`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/api/ai/service`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
