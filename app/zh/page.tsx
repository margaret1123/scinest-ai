import type { Metadata } from "next";
import { SciNestHome } from "../scinest-home";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export const metadata: Metadata = {
  title: "论文、PPT、科研图一站式平台｜SciNest — 无需换窗口，无需复杂指令",
  description:
    "上传一次材料，连接你自己的 API Key，论文、PPT、科研图一站式打通。无需反复解释，无需切换工具。免费开始。",
  alternates: {
    canonical: `${siteUrl}/zh`,
    languages: { en: siteUrl, "zh-CN": `${siteUrl}/zh`, "x-default": siteUrl },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/zh`,
    siteName: "SciNest",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    title: "论文、PPT、科研图一站式平台｜SciNest",
    description: "上传一次材料，连接你自己的 API Key，论文、PPT、科研图一站式打通。无需反复解释，无需切换工具。免费开始。",
  },
};

export default function ChineseHomePage() {
  return <SciNestHome locale="zh" />;
}
