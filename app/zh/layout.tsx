import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SciNest 科研小棉袄｜把资料变成可编辑文稿、科研图和答辩 PPT",
  description:
    "面向有截止日期的学生和早期研究者。上传论文、草稿、课程要求或导师意见，把已有材料整理成可编辑文稿、科研图和答辩 PPT。项目默认本地保存，使用自己的 AI API。",
  alternates: {
    canonical: "/zh",
    languages: { en: "/", "zh-CN": "/zh", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/zh",
    siteName: "SciNest",
    title: "SciNest 科研小棉袄｜截止日期前完成文稿、科研图和答辩 PPT",
    description: "已有材料，不必从零开始。生成后仍可修改和导出。",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
  },
};

const chineseStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SciNest",
  alternateName: "科研小棉袄",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Windows",
  inLanguage: "zh-CN",
  audience: {
    "@type": "Audience",
    audienceType: "有明确截止日期的学生、研究生和早期研究者",
  },
  description:
    "SciNest 把用户已有的论文、草稿、文献、课程要求和导师意见，转成可编辑文稿、科研图和答辩演示文稿。用户使用自己的 AI API，项目文件默认保存在本地。",
  featureList: [
    "基于已有材料生成和修改文稿",
    "生成并继续编辑科研图",
    "把论文和材料转成可编辑答辩 PPT",
    "同一项目内复用资料、文稿和图",
    "用户自备 AI API",
  ],
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="zh-CN">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chineseStructuredData) }}
      />
      {children}
    </div>
  );
}
