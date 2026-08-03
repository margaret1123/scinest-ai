import type { Metadata } from "next";
import { SciNestHome } from "../scinest-home";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export const metadata: Metadata = {
  title: "论文修改、科研图与答辩PPT AI工具｜SciNest 科研小棉袄",
  description:
    "把已有论文、文献、草稿、导师意见和研究材料，继续变成可编辑文稿、科研图与答辩PPT。Windows桌面端，本地项目，使用自己的AI Key。",
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
    title: "论文修改、科研图与答辩PPT AI工具｜SciNest",
    description: "资料已经有了。把剩下的文稿、科研图和答辩PPT，在截止日期前真正做完。",
  },
};

export default function ChineseHomePage() {
  return <SciNestHome locale="zh" />;
}
