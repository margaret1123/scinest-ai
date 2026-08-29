import type { Metadata } from "next";
import { LangSwitch } from "../../lang-switch";
import { ProductBreadcrumbs, createBreadcrumbData } from "../../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "AI 论文写作助手｜用 ChatGPT / DeepSeek 起草、修改毕业论文",
  description:
    "连接你自己的 ChatGPT / DeepSeek / Claude API Key，上传文献与材料，先定大纲再逐章起草毕业论文，修哪章改哪章。免费开始。",
  alternates: {
    canonical: "/zh/ai-paper-writer",
    languages: { en: "/ai-paper-writer", "zh-CN": "/zh/ai-paper-writer", "x-default": "/ai-paper-writer" },
  },
  openGraph: {
    type: "website", url: "/zh/ai-paper-writer",
    title: "AI 论文写作助手｜起草、修改毕业论文 | SciNest",
    description: "连接你自己的 API Key，上传文献与材料，先定大纲再逐章起草毕业论文，修哪章改哪章。免费开始。",
    images: [{ url: "/scinest/writing-ui-en.webp", width: 1280, height: 800 }],
  },
};

const siteJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "AI 论文写作助手", url: `${siteUrl}/zh/ai-paper-writer`, inLanguage: "zh-CN", isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl } };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "AI 论文写作助手是免费的吗？", acceptedAnswer: { "@type": "Answer", text: "Free 版免费且不限生成次数（一个活跃项目）。Pro 版 ¥299/年（$49/年）解锁多项目与无水印导出。AI 调用费由你自己的 API Key 直接向服务商支付，无 SciNest 订阅费。" } },
  { "@type": "Question", name: "用 AI 写毕业论文会被判定学术不端吗？", acceptedAnswer: { "@type": "Answer", text: "SciNest 是写作辅助工具而非代写服务：用于大纲、草稿与修改，最终内容须由本人撰写和审核，并遵守学校的 AI 使用规定。不要把 AI 生成的文字直接当作自己的成果提交。" } },
  { "@type": "Question", name: "可以用 DeepSeek 的 API 吗？", acceptedAnswer: { "@type": "Answer", text: "可以。SciNest 兼容 DeepSeek、OpenAI、Anthropic 及任何 OpenAI 兼容接口。DeepSeek API 费用明显更低，写一篇完整论文草稿通常只需几块钱。" } },
  { "@type": "Question", name: "能只修改论文的某一章吗？", acceptedAnswer: { "@type": "Answer", text: "可以。逐章生成后可单独修改某一章或某一节，不动其余内容。导师对第三章有意见？把意见绑定到该章，只修那一部分。" } },
  { "@type": "Question", name: "AI 写的论文引用可靠吗？", acceptedAnswer: { "@type": "Answer", text: "AI 可能编造看起来真实但实际不存在的引用。SciNest 将写作绑定到你上传的文献和材料，提交前仍需逐条核对引用与事实。" } },
]};

const chatLimits = [
  ["草稿长度", "每次几百字", "逐章生成，全文连贯"],
  ["上下文记忆", "长对话后丢失", "项目持久记忆——大纲、文献、章节保持连接"],
  ["材料绑定", "粘贴片段，分不清来源", "上传一次文献，每章知道自己的材料"],
  ["章节修改", "重新提示整章", "选中一章一段，只改那一部分"],
  ["导师意见", "重新解释全部背景", "意见绑定到对应章节，定向修改"],
  ["引用", "编造参考文献和 DOI", "绑定你上传的文献——你核对，AI 不瞎编"],
];

const workflow = [
  ["01", "定论文大纲", "把研究问题拆成章节、小节和字数目标。生成第一个字之前，先把结构调好——改结构在大纲阶段零成本。"],
  ["02", "上传文献与导师意见", "论文、参考文献、笔记、导师反馈、提交要求。绑定到对应章节，让 AI 知道什么材料属于哪里。"],
  ["03", "逐章起草", "选 ChatGPT、DeepSeek、Claude 或任何兼容 API。工作区按顺序逐章生成，后面的章节继承前面的上下文。"],
  ["04", "定向修改", "导师对第三章有意见？只修那一章。需要缩短文献综述？只改那一节。文档其余部分不动。"],
  ["05", "导出提交", "导出完整文档。草稿是你的——逐条核对引用、润色、排版、提交。"],
];

const aiSummary =
  "SciNest 是一款免费的 Windows 桌面端 AI 论文写作助手，面向研究生和毕业生，支持用你自己的 ChatGPT、DeepSeek 或 Claude API Key 起草和修改毕业论文。无 SciNest 订阅费、不限生成次数，AI 调用费直接向服务商支付。Free 版一个活跃项目；Pro 版 ¥299/年（$49/年），多项目与无水印导出。上传文献和材料，先定大纲，逐章生成全文，可单独修改任意章节。官网 scinest.app 免费下载。";

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbData(siteUrl, "paperWriter", "zh")) }} />
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/zh" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest 科研小棉袄</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>获取 SciNest Free</a>
        </div>
      </header>
      <main>
        <ProductBreadcrumbs current="paperWriter" locale="zh" />
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>AI 论文写作助手</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,52px)", lineHeight: 1.1, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 起草、修改、完成<br />你的毕业论文</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 640, margin: "0 auto 32px" }}>上传文献和材料，先定大纲，再用你自己的 ChatGPT、DeepSeek 或 Claude 逐章起草全文。导师意见绑定到章节，修哪章改哪章——不用推翻重写。</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none" }}>开始写论文 ↗</a>
            <a href="#how" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)" }}>查看流程</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>免费开始 · 自选模型 · 不限生成次数</p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "0 28px 44px" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(7,95,85,.16)", borderLeft: "5px solid #087f72", borderRadius: 16, padding: "26px 30px" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>AI 摘要</p>
            <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.8, color: "#0a2030", maxWidth: 640 }}>{aiSummary}</p>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "40px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 }}>
            {[{ title: "从研究问题到论文大纲", desc: "把研究问题拆成章节、小节与字数目标，结构不满意随时改。", color: "#10a37f" }, { title: "按导师意见定向修改", desc: "意见绑定到章节。只改那一部分，不动文档其余内容。", color: "#4d6bfe" }, { title: "你的 Key，你的成本", desc: "无 SciNest 订阅费。用自己的 API Key，直接向服务商付费。", color: "#d97706" }].map(m => (
              <div key={m.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 20, padding: "24px 20px", borderTop: `4px solid ${m.color}` }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{m.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 14 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "linear-gradient(180deg,#ecf8f4,#dff3ec)", padding: "60px 28px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>论文工作流</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, margin: "14px 0 18px", fontFamily: "Georgia,Times New Roman,serif" }}>论文是一个项目，不是一个提示词。</h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>从研究问题到可提交成稿：先定大纲，文献绑定到章节，逐章生成，定向修改——都在同一个学术写作工作区里。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, maxWidth: 750, margin: "0 auto" }}>
              {[["大纲先行","章节、小节、字数目标一次定好。结构不满意就改——别等六万字写完了再返工。"],["文献绑定章节","上传论文、参考文献、笔记和导师意见。每章按你绑定的材料写，不瞎编。"],["导师意见定向修改","意见绑定到对应章节，只修那一部分。其余内容保持不动。"],["文献综述一键生成","把你上传的文献梳理成综述小节，严格跟随大纲结构。"],["单章重写","缩短、加强或重组某一章——不用重新生成全文。"],["导出成稿","导出完整草稿，逐条核对引用，排版提交。成果是你的。"]].map(([t,d]) => (
                <div key={t} style={{ background: "rgba(255,255,255,.82)", borderRadius: 16, padding: "22px 18px", textAlign: "left", border: "1px solid rgba(7,95,85,.06)" }}>
                  <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "#5e6f7c", lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 820, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>对比</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 28px", fontFamily: "Georgia,Times New Roman,serif" }}>聊天窗口 vs SciNest 论文工作区</h2>
          <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead><tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>你需要</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>AI 聊天窗口</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#087f72", fontWeight: 750 }}>SciNest 论文工作区</th></tr></thead>
            <tbody>{chatLimits.map(([n, c, s]) => <tr key={n} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}><td style={{ padding: "12px 14px", fontWeight: 650 }}>{n}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{c}</td><td style={{ padding: "12px 14px", color: "#087f72", fontWeight: 600 }}>{s}</td></tr>)}</tbody>
          </table></div>
        </section>

        <section id="how" style={{ background: "#fff", padding: "60px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>五步流程</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>从研究问题到可提交成稿</h2>
            {workflow.map(([n,t,d]) => <div key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24 }}><span style={{ flex: "0 0 40px", width: 40, height: 40, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span><div><h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{d}</p></div></div>)}
          </div>
        </section>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "50px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>常见问题</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.18, margin: "12px 0 24px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 写论文，你最关心的</h2>
          {[["AI 论文写作助手是免费的吗？","Free 版免费且不限生成次数（一个活跃项目）。Pro 版 ¥299/年（$49/年）解锁多项目与无水印导出。AI 调用费由你自己的 API Key 直接向服务商支付。"],["用 AI 写毕业论文会被判定学术不端吗？","SciNest 是写作辅助工具而非代写服务：用于大纲、草稿与修改，最终内容须由本人撰写和审核，并遵守学校的 AI 使用规定。"],["可以用 DeepSeek 的 API 吗？","可以。兼容 DeepSeek、OpenAI、Anthropic 及任何 OpenAI 兼容接口。DeepSeek API 费用明显更低，写一篇完整论文草稿通常只需几块钱。"],["能只修改论文的某一章吗？","可以。逐章生成后可单独修改某一章或某一节，不动其余内容。导师意见可绑定到对应章节定向修改。"],["AI 写的论文引用可靠吗？","AI 可能编造看起来真实但实际不存在的引用。SciNest 将写作绑定到你上传的文献，提交前仍需逐条核对引用与事实。"]].map(([q,a]) => <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "16px 0" }}><summary style={{ fontWeight: 650, fontSize: 15, cursor: "pointer", listStyle: "none" }}>{q}</summary><p style={{ margin: "10px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>{a}</p></details>)}
        </section>

        <section style={{ background: "linear-gradient(180deg,#0a2a30,#0d2328)", color: "#fff", textAlign: "center", padding: "60px 28px" }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.12, margin: "0 0 12px", fontFamily: "Georgia,Times New Roman,serif" }}>你的论文。你的大纲，你的文献，你的成稿。</h2>
          <p style={{ fontSize: 16, opacity: .78, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>无需复杂指令，无需反复解释，无需窗口间复制粘贴。免费开始。</p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>开始写论文 ↗</a>
          <p style={{ marginTop: 18, fontSize: 12, opacity: .5 }}>免费开始 · Windows · 自选模型，不限生成</p>
        </section>
      </main>
      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, color: "#5e6f7c", fontSize: 13 }}>
        <strong style={{ color: "#0a2030" }}>SciNest · 科研小棉袄</strong>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/zh" style={{ color: "#087f72", textDecoration: "none" }}>首页</a>
          <a href="/zh/thesis-defense-presentation" style={{ color: "#087f72", textDecoration: "none" }}>答辩 PPT</a>
          <a href="/zh/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 长文写作</a>
          <a href="/zh/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑 PPT</a>
          <a href="/zh/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑图片</a>
          <a href="/zh/literature-review-assistant" style={{ color: "#087f72", textDecoration: "none" }}>文献综述助手</a>
        </nav>
      </footer>
    </div>
  );
}
