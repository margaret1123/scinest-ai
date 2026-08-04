import type { Metadata } from "next";
import styles from "../product-pages.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.exe";

export const metadata: Metadata = {
  title: "用 AI 画可修改的图表｜改文字、移元素、局部重绘",
  description: "把方法、机制、研究关系和实验流程变成可继续修改的科研图。标签、箭头、结构和局部区域不必每次整图重做。",
  alternates: {
    canonical: "/zh/scientific-figure-generator",
    languages: { en: "/scientific-figure-generator", "zh-CN": "/zh/scientific-figure-generator", "x-default": "/scientific-figure-generator" },
  },
  openGraph: { type: "website", url: "/zh/scientific-figure-generator", title: "SciNest AI 科研图生成器", description: "不是生成一张无法改字的图片，而是围绕研究逻辑生成可继续修改的科研图。", images: [{ url: "/scinest/figures-ui-en.webp", width: 1280, height: 800 }] },
};

const faq = [
  ["科研图生成后还能修改吗？", "可以继续调整标签、关系、结构和支持的图层内容，而不是每次都重新生成整张图。"],
  ["可以做哪些图？", "适用于机制图、技术路线图、实验流程图、概念框架、图形摘要等科研表达任务。"],
  ["文字会不会直接画死在图片里？", "SciNest 的方向是把文字与标注作为可编辑内容处理，减少模型拼写错误导致的整图返工。"],
  ["可以只改一个区域吗？", "支持的工作流会尽量针对选定区域或图层修改，保留已经确认的部分。"],
  ["能在 PPT 中复用吗？", "同一项目里的科研图可以继续用于演示文稿，减少重复上传和重新解释。"],
];

export default function Page() {
  const structuredData = { "@context": "https://schema.org", "@type": "WebPage", name: "AI 科研图生成器", url: `${siteUrl}/zh/scientific-figure-generator`, inLanguage: "zh-CN", description: metadata.description };
  return <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className={styles.header}><a className={styles.brand} href="/zh"><span>S</span>SciNest 科研小棉袄</a><nav className={styles.nav}><a href="#difference">为什么可编辑</a><a href="#workflow">生成流程</a><a href="#faq">常见问题</a></nav><a className={styles.cta} href={downloadUrl}>获取 SciNest Free</a></header>
    <main>
      <section className={styles.hero}><div><p className={styles.eyebrow}>研究逻辑先于装饰</p><h1>把研究内容变成一张<em>还能继续修改的科研图。</em></h1><p className={styles.lead}>先理解实体、过程、阶段和关系，再生成机制图、路线图、实验流程图或图形摘要。标签和结构发生变化时，不必推翻整张图。</p><div className={styles.points}>{["可编辑标签","关系可调整","局部修改","多种图型","可复用到 PPT"].map(x=><span key={x}>✓ {x}</span>)}</div><div className={styles.actions}><a className={styles.cta} href={downloadUrl}>生成我的科研图 ↗</a><a className={styles.secondary} href="#workflow">查看流程</a></div></div><figure className={styles.proof}><img src="/scinest/figures-ui-en.webp" alt="SciNest 科研图生成与编辑工作区" width="1280" height="800" /></figure></section>
      <section className={`${styles.section} ${styles.dark}`} id="difference"><div><p className={styles.kicker}>漂亮但不能改，不等于可用</p><h2>一个标签错了，不该迫使你重画整张图。</h2><div className={styles.grid}><article className={styles.card}><h3>标签单独修改</h3><p>文字与标注尽量保持可编辑，减少拼写错误和术语变化带来的返工。</p></article><article className={styles.card}><h3>关系可以调整</h3><p>箭头方向、阶段顺序和模块关系可以继续修正。</p></article><article className={styles.card}><h3>保留已确认区域</h3><p>修改局部时，不应丢掉已经认可的其他部分。</p></article></div></div></section>
      <section className={styles.section} id="workflow"><div><p className={styles.kicker}>先理解，再规划，最后生成</p><h2>科研图从研究逻辑开始，不从视觉装饰开始。</h2><div className={styles.steps}>{[["01","理解材料","识别研究对象、过程、因果关系、阶段和关键结论。"],["02","规划结构","确定图型、面板、节点、关系、标签和重点区域。"],["03","生成与修改","生成科研图，并继续调整标签、箭头、布局和选定区域。"]].map(([n,t,b])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div><figure className={styles.proof} style={{marginTop:36}}><img src="/scinest/figures-ui-en.webp" alt="SciNest 科研图结构与图层编辑界面" width="1280" height="800" /></figure></div></section>
      <section className={`${styles.section} ${styles.dark}`}><div><p className={styles.kicker}>适用图型</p><h2>同一套材料，生成不同用途的科研表达。</h2><div className={styles.grid}><article className={styles.card}><h3>机制与通路图</h3><p>展示实体之间的激活、抑制、转化和因果关系。</p></article><article className={styles.card}><h3>技术路线与实验流程</h3><p>展示研究阶段、分组、时间线、方法和里程碑。</p></article><article className={styles.card}><h3>图形摘要与概念框架</h3><p>把论文核心发现或理论关系压缩成一张全景图。</p></article></div></div></section>
      <section className={styles.section} id="faq"><div><p className={styles.kicker}>常见问题</p><h2>关于可编辑科研图的实际边界。</h2><div className={styles.faq}>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section className={styles.final}><h2>不要把无法纠错的漂亮图片当成科研图成品。</h2><p>用自己的研究材料生成，再继续修改和复用。</p><a className={styles.cta} href={downloadUrl}>获取 SciNest Free ↗</a></section>
    </main><footer className={styles.footer}><strong>SciNest · 科研小棉袄</strong><span>由 Jiaempower Pathways Limited 运营</span><nav style={{display:"flex",gap:18,flexWrap:"wrap",marginTop:10}}><a href="/zh">中文首页</a><a href="/zh/ai-powerpoint-generator">AI PPT 生成器</a><a href="/zh/ai-thesis-writing-assistant">AI 论文写作助手</a></nav></footer>
  </div>;
}
