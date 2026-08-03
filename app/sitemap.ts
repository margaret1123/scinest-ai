import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-29T00:00:00.000Z");
  const homeLanguages = {
    en: `${siteUrl}/`,
    "zh-CN": `${siteUrl}/zh`,
    "x-default": `${siteUrl}/`,
  };

  const productPages = [
    "ai-powerpoint-generator",
    "scientific-figure-generator",
    "ai-thesis-writing-assistant",
  ];

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${siteUrl}/zh`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: homeLanguages },
    },
    ...productPages.flatMap((slug) => {
      const languages = {
        en: `${siteUrl}/${slug}`,
        "zh-CN": `${siteUrl}/zh/${slug}`,
        "x-default": `${siteUrl}/${slug}`,
      };
      return [
        {
          url: `${siteUrl}/${slug}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.9,
          alternates: { languages },
        },
        {
          url: `${siteUrl}/zh/${slug}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.85,
          alternates: { languages },
        },
      ];
    }),
    {
      url: `${siteUrl}/ai-long-form-writer`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/refund-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
