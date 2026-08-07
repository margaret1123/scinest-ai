import type { Metadata } from "next";
import styles from "../product-pages.module.css";
import { LangSwitch } from "../../lang-switch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "用 ChatGPT / DeepSeek 生成可编辑 PPTX｜不是截图，不是 HTML",
  description: "上传论文、报告、数据和图片，生成可继续修改的标准 PPTX。先编辑大纲，再生成页面、图示和讲稿。",
  alternates: {
    canonical: "/zh/ai-powerpoint-generator",
    languages: { en: "/ai-powerpoint-generator", "zh-CN": "/zh/ai-powerpoint-generator", "x-default": "/ai-powerpoint-generator" },
  },
  openGraph: { type: "website", url: "/zh/ai-powerpoint-generator", title: "SciNest AI PPT 生成器", description: "不是整页图片，也不是 HTML 幻灯片，而是可编辑的标准 PPTX。", images: [{ url: "/scinest/ppt-ui-en.webp", width: 1280, height: 800 }] },
};

const faq = [
  ["生成的是标准 PowerPoint 文件吗？", "是。最终结果为标准 .pptx 文件，可在 Microsoft PowerPoint、WPS 等兼容软件中继续修改和演示。"],
  ["每一页会不会只是无法修改的图片？", "不会。标题、正文、图片和支持的页面元素会尽量保留结构，而不是把整页压成一张图。"],
  ["生成前可以修改大纲吗？", "可以。你可以先调整页数、顺序、标题、重点、受众和演讲时长，再生成完整演示文稿。"],
  ["会自动使用所有上传文件吗？", "不会。你可以选择本次任务使用哪些项目材料，避免无关文件干扰内容。"],
  ["生成后还能修改吗？", "可以继续修改大纲、页面顺序、标题、正文、图片和讲稿，再导出最终 PPTX。"],
];

export default function Page() {
  const structuredData = { "@context": "https://schema.org", "@type": "WebPage", name: "AI PPT 生成器", url: `${siteUrl}/zh/ai-powerpoint-generator`, inLanguage: "zh-CN", description: metadata.description };
  return <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className={styles.header}><a className={styles.brand} href="/zh"><span>S</span>SciNest 科研小棉袄</a><nav className={styles.nav}><a href="#difference">为什么不同</a><a href="#workflow">使用流程</a><a href="#faq">常见问题</a></nav><LangSwitch /><a className={styles.cta} href={downloadUrl}>获取 SciNest Free</a></header>
    <main>
      <section className={styles.hero}><div><p className={styles.eyebrow}>真正的 POWERPOINT · 不是整页图片</p><h1>AI 生成一份<em>真正可编辑的 PPT。</em></h1><p className={styles.lead}>上传一次材料，一站式生成大纲、页面、图示和讲稿，导出标准 PPTX 直接可用。</p><div className={styles.points}>{["标准 PPTX","材料约束","可编辑大纲","图文规划","生成后继续改"].map(x=><span key={x}>✓ {x}</span>)}</div><div className={styles.actions}><a className={styles.cta} href={downloadUrl}>生成我的 PPT ↗</a><a className={styles.secondary} href="#workflow">查看流程</a></div></div><figure className={styles.proof}><img src="/scinest/ppt-ui-en.webp" alt="SciNest 可编辑 PowerPoint 工作区" width="1280" height="800" /></figure></section>
      <section className={`${styles.section} ${styles.dark}`} id="difference"><div><p className={styles.kicker}>无需推倒重来，无需另存为图片</p><h2>每一页生成后保持可编辑——标题、正文、图片、顺序，全部由你掌控。</h2><div className={styles.grid}><article className={styles.card}><h3>不是整页截图</h3><p>文字和支持的元素保留结构，改错字不需要重生成整页。</p></article><article className={styles.card}><h3>不是 HTML 幻灯片</h3><p>避免浏览器里正常、导入 PowerPoint 后版式错乱。</p></article><article className={styles.card}><h3>不是只有大纲</h3><p>从材料到页面内容、图示位置和讲稿形成完整交付。</p></article></div></div></section>
      <section className={styles.section} id="workflow"><div><p className={styles.kicker}>从材料到可编辑 PPTX</p><h2>先确认故事，再生成页面。</h2><div className={styles.steps}>{[["01","选择材料","导入论文、数据、图片和现有演示文稿。"],["02","编辑大纲","调整页数、顺序、标题、重点和演讲时长。"],["03","生成与导出","生成页面、视觉元素和讲稿，继续修改后导出 PPTX。"]].map(([n,t,b])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div><figure className={styles.proof} style={{marginTop:36}}><img src="/scinest/ppt-ui-en.webp" alt="SciNest PPT 大纲与页面编辑界面" width="1280" height="800" /></figure></div></section>
      <section className={styles.section} id="faq"><div><p className={styles.kicker}>常见问题</p><h2>关于可编辑 PPT 的实际边界。</h2><div className={styles.faq}>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section className={styles.final}><h2>上传材料，编辑大纲，生成 PPTX，打开继续改。</h2><p>无需复杂操作，无需切换工具。免费开始。</p><a className={styles.cta} href={downloadUrl}>获取 SciNest Free ↗</a></section>
    </main><footer className={styles.footer}><strong>SciNest · 科研小棉袄</strong><span>由 Jiaempower Pathways Limited 运营</span><nav style={{display:"flex",gap:18,flexWrap:"wrap",marginTop:10}}><a href="/zh">中文首页</a><a href="/zh/ai-thesis-writing-assistant">AI 论文写作助手</a><a href="/zh/scientific-figure-generator">AI 科研图生成器</a></nav></footer>
  </div>;
}
