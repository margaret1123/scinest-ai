import type { Metadata } from "next";
import styles from "../product-pages.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";
const registerUrl = "/login?redirect=/dashboard&intent=early-bird";

export const metadata: Metadata = {
  title: "AI 论文写作助手｜大纲、材料、引用与长文写作",
  description: "先确认可编辑大纲，再绑定选定材料与参考文献，生成连贯长文，并对指定章节和段落继续修改。",
  alternates: {
    canonical: "/zh/ai-thesis-writing-assistant",
    languages: { en: "/ai-thesis-writing-assistant", "zh-CN": "/zh/ai-thesis-writing-assistant", "x-default": "/ai-thesis-writing-assistant" },
  },
  openGraph: { type: "website", url: "/zh/ai-thesis-writing-assistant", title: "SciNest AI 论文写作助手", description: "从可编辑大纲和选定材料开始，生成连贯长文并继续局部修改。", images: [{ url: "/scinest/writing-ui-en.webp", width: 1280, height: 800 }] },
};

const faq = [
  ["可以一次生成完整长文吗？", "写作流程会从已确认的大纲出发，生成一份连贯的长文草稿，而不是要求用户逐段重复提示。"],
  ["生成前可以修改大纲吗？", "可以。章节顺序、目标、范围和字数都可以在扩写前调整。"],
  ["会使用我上传的材料吗？", "你可以选择本次任务要使用的论文、笔记、草稿、评分标准和参考文献。"],
  ["引用会自动正确吗？", "系统会保留来源与章节之间的上下文，但用户仍必须核查每条引用、事实和学校要求。"],
  ["后续只改一章可以吗？", "可以。生成后可针对具体章节或段落修改，不必推翻整篇文稿。"],
];

export default function Page() {
  const structuredData = { "@context": "https://schema.org", "@type": "WebPage", name: "AI 论文写作助手", url: `${siteUrl}/zh/ai-thesis-writing-assistant`, inLanguage: "zh-CN", description: metadata.description };
  return <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className={styles.header}><a className={styles.brand} href="/zh"><span>S</span>SciNest 科研小棉袄</a><nav className={styles.nav}><a href="#outline">大纲</a><a href="#materials">材料与引用</a><a href="#long-form">长文</a><a href="#faq">常见问题</a></nav><a className={styles.cta} href={registerUrl}>获取 SciNest Free</a></header>
    <main>
      <section className={styles.hero}><div><p className={styles.eyebrow}>先定大纲 · 绑定材料 · 保留引用上下文</p><h1>从可编辑大纲，生成一份<em>连贯长文草稿。</em></h1><p className={styles.lead}>选择真正相关的材料，确认章节结构和写作目标，再生成完整文稿。后续只修改需要调整的章节或段落。</p><div className={styles.points}>{["可编辑大纲","选择材料","引用上下文","长文生成","局部修改"].map(x=><span key={x}>✓ {x}</span>)}</div><div className={styles.actions}><a className={styles.cta} href={registerUrl}>生成长文草稿 ↗</a><a className={styles.secondary} href="#outline">查看写作流程</a></div></div><figure className={styles.proof}><img src="/scinest/writing-ui-en.webp" alt="SciNest 学术写作工作区" width="1280" height="800" /></figure></section>
      <section className={`${styles.section} ${styles.dark}`}><div><p className={styles.kicker}>逐段提示的陷阱</p><h2>长文不该由几十段互不相连的回答拼出来。</h2><div className={styles.grid}><article className={styles.card}><h3>上下文漂移</h3><p>章节越多，术语、论点和结论越容易前后矛盾。</p></article><article className={styles.card}><h3>引用断裂</h3><p>材料和参考文献被复制到不同对话后，很难继续对应到具体章节。</p></article><article className={styles.card}><h3>返工增加</h3><p>最终工作变成重新合并、补标题和修复结构。</p></article></div></div></section>
      <section className={styles.section} id="outline"><div><p className={styles.kicker}>大纲是控制层</p><h2>在字数增长前，先确认结构。</h2><p>先确定章节顺序、每章目标、重点和目标字数。结构不合适时直接修改，不必等全文生成后再返工。</p><figure className={styles.proof} style={{marginTop:36}}><img src="/scinest/writing-ui-en.webp" alt="SciNest 可编辑论文大纲" width="1280" height="800" /></figure></div></section>
      <section className={`${styles.section} ${styles.dark}`} id="materials"><div><p className={styles.kicker}>材料与引用保持连接</p><h2>每一章都知道自己该写什么、依据来自哪里。</h2><div className={styles.steps}>{[["01","选择材料","只使用与本次任务相关的论文、笔记、草稿和评分要求。"],["02","绑定章节","让材料、证据和参考文献进入对应章节，而不是混成一堆。"],["03","用户核查","最终事实、引用和原创性仍由用户确认。"]].map(([n,t,b])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{b}</p></article>)}</div></div></section>
      <section className={styles.section} id="long-form"><div><p className={styles.kicker}>一份连贯文稿</p><h2>生成完整草稿，再修改真正需要改的地方。</h2><p>完整文稿、章节导航和局部 AI 修改放在同一个写作工作区。导师意见只影响对应章节，不应触发整篇重写。</p><figure className={styles.proof} style={{marginTop:36}}><img src="/scinest/writing-ui-en.webp" alt="SciNest 长文编辑与局部修改界面" width="1280" height="800" /></figure></div></section>
      <section className={styles.section} id="faq"><div><p className={styles.kicker}>常见问题</p><h2>关于材料约束长文写作的实际边界。</h2><div className={styles.faq}>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section className={styles.final}><h2>不要再把一篇长文拼成几十段零散回答。</h2><p>先确认大纲和材料，再生成一份可以继续修改的连贯草稿。</p><a className={styles.cta} href={registerUrl}>获取 SciNest Free ↗</a></section>
    </main><footer className={styles.footer}><strong>SciNest · 科研小棉袄</strong><span>由 Jiaempower Pathways Limited 运营</span><nav style={{display:"flex",gap:18,flexWrap:"wrap",marginTop:10}}><a href="/zh">中文首页</a><a href="/zh/ai-powerpoint-generator">AI PPT 生成器</a><a href="/zh/scientific-figure-generator">AI 科研图生成器</a></nav></footer>
  </div>;
}
