import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const homeLanguages = {
    en: `${siteUrl}/`,
    "zh-CN": `${siteUrl}/zh`,
    "x-default": `${siteUrl}/`,
  };

  const productPages = [
    "ai-editable-powerpoint",
    "ai-editable-images",
    "ai-long-form-writer",
    "ai-paper-writer",
    "thesis-defense-presentation",
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
      url: `${siteUrl}/best-ai-tools-for-thesis-writing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/best-ai-tools-for-thesis-writing`,
          "x-default": `${siteUrl}/best-ai-tools-for-thesis-writing`,
        },
      },
    },
    {
      url: `${siteUrl}/zh/literature-review-assistant`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          "zh-CN": `${siteUrl}/zh/literature-review-assistant`,
          en: `${siteUrl}/`,
          "x-default": `${siteUrl}/`,
        },
      },
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
      alternates: {
        languages: {
          en: `${siteUrl}/about`,
          "zh-CN": `${siteUrl}/zh/about`,
          "x-default": `${siteUrl}/about`,
        },
      },
    },
    {
      url: `${siteUrl}/zh/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
      alternates: {
        languages: {
          en: `${siteUrl}/about`,
          "zh-CN": `${siteUrl}/zh/about`,
          "x-default": `${siteUrl}/about`,
        },
      },
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
