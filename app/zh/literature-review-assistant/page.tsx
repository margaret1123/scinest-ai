import type { Metadata } from "next";
import { LangSwitch } from "../../lang-switch";
import { ProductBreadcrumbs, createBreadcrumbData } from "../../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "文献综述助手｜AI 帮你写文献综述与开题报告",
  description:
    "上传文献与笔记，AI 帮你梳理研究脉络，撰写文献综述、开题报告和研究计划。逐节生成、逐节修改。免费开始。",
  alternates: {
    canonical: "/zh/literature-review-assistant",
    languages: { "zh-CN": "/zh/literature-review-assistant", en: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website", url: "/zh/literature-review-assistant",
    title: "文献综述助手｜AI 帮你写文献综述与开题报告 | SciNest",
    description: "上传文献与笔记，AI 帮你梳理研究脉络，撰写文献综述、开题报告和研究计划。免费开始。",
    images: [{ url: "/scinest/writing-ui-en.webp", width: 1280, height: 800 }],
  },
};

const siteJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "文献综述助手", url: `${siteUrl}/zh/literature-review-assistant`, inLanguage: "zh-CN", isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl } };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "AI 能帮我写文献综述吗？", acceptedAnswer: { "@type": "Answer", text: "能。上传论文和笔记后，SciNest 帮你梳理研究脉络、归纳观点，按大纲逐节生成综述草稿。生成内容绑定到你上传的文献，而不是凭空编造。" } },
  { "@type": "Question", name: "AI 生成的综述引用可靠吗？", acceptedAnswer: { "@type": "Answer", text: "AI 可能编造看起来真实但实际不存在的引用。SciNest 将生成内容绑定到你上传的文献，提交前必须逐条核对。" } },
  { "@type": "Question", name: "开题报告也能用吗？", acceptedAnswer: { "@type": "Answer", text: "能。文献综述、开题报告、研究计划都有结构化工作流：定大纲、选材料、逐节生成、局部修改，同一个项目里材料与成稿保持连接。" } },
  { "@type": "Question", name: "和直接问 ChatGPT 有什么区别？", acceptedAnswer: { "@type": "Answer", text: "聊天窗口输出短、易丢上下文；SciNest 保持大纲、文献和章节的持久连接，每节继承前面内容，可单独修改任意一节。" } },
  { "@type": "Question", name: "免费吗？", acceptedAnswer: { "@type": "Answer", text: "Free 版免费且不限生成次数（一个活跃项目）；Pro 版 ¥299/年（$49/年）支持多项目与无水印导出。AI 调用费由你自己的 API Key 直接向服务商支付。" } },
]};

const chatLimits = [
  ["输出长度", "每次几百字，易截断", "按大纲逐节生成，全文连贯"],
  ["上下文记忆", "多轮对话后丢失", "大纲、文献、成稿持久连接"],
  ["文献绑定", "粘贴片段，分不清来源", "上传一次文献，每节知道自己的材料"],
  ["逐节修改", "重新提示整个综述", "选中一节一段，只改那一部分"],
  ["引用核查", "编造参考文献和 DOI", "绑定你上传的文献——逐条核对"],
];

const workflow = [
  ["01", "上传文献与笔记", "论文、参考文献、读书笔记、导师意见。一次上传，绑定到对应章节。"],
  ["02", "梳理研究脉络", "AI 帮你按主题归纳文献：谁做了什么、结论是什么、争议在哪里、你的研究补哪个空。"],
  ["03", "定综述大纲", "按脉络生成大纲：背景、研究现状、争议点、研究空白。结构不满意随时改。"],
  ["04", "逐节生成草稿", "按大纲逐节生成综述。每一节都来自你上传的文献，前后文保持连接。"],
  ["05", "定向修改导出", "导师意见绑定到对应小节，只改那一处。导出成稿，逐条核对引用。"],
];

const aiSummary =
  "SciNest 是免费的 Windows 桌面端 AI 学术写作工具，可撰写文献综述、开题报告和研究计划：上传文献与笔记，先定大纲，按研究脉络逐节生成，再单独修改任意一节。AI 连接你自己的 ChatGPT、DeepSeek 或 Claude API Key——无订阅费、不限生成次数，调用费直接向服务商支付。Free 版一个活跃项目；Pro 版 ¥299/年（$49/年），多项目与无水印导出。官网 scinest.app 免费下载。";

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbData(siteUrl, "litReview", "zh")) }} />
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/zh" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest 科研小棉袄</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>获取 SciNest Free</a>
        </div>
      </header>
      <main>
        <ProductBreadcrumbs current="litReview" locale="zh" />
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>文献综述助手</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,52px)", lineHeight: 1.1, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 写文献综述<br />和开题报告</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 640, margin: "0 auto 32px" }}>上传文献与笔记，AI 帮你梳理研究脉络，先定大纲，再逐节生成综述草稿——每一节都来自你上传的材料。开题报告、研究计划同样适用。</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none" }}>开始写文献综述 ↗</a>
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
            {[{ title: "文献脉络梳理", desc: "按主题归纳：谁做了什么、争议在哪、你的研究补哪个空。", color: "#10a37f" }, { title: "综述大纲先行", desc: "背景、现状、争议、空白——大纲定好再动笔，改结构零成本。", color: "#4d6bfe" }, { title: "逐节生成、逐节修改", desc: "按大纲逐节生成，导师意见绑定到小节，只改那一处。", color: "#d97706" }].map(m => (
              <div key={m.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 20, padding: "24px 20px", borderTop: `4px solid ${m.color}` }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{m.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 14 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "linear-gradient(180deg,#ecf8f4,#dff3ec)", padding: "60px 28px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>综述工作流</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, margin: "14px 0 18px", fontFamily: "Georgia,Times New Roman,serif" }}>文献综述是梳理，不是堆砌。</h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>SciNest 把文献、笔记、大纲和成稿放在同一个项目里——研究脉络保持连接，逐节生成、逐节修改，开题报告和研究计划同一条工作流。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, maxWidth: 750, margin: "0 auto" }}>
              {[["文献脉络梳理","按主题归纳你上传的文献：谁做了什么、结论如何、争议在哪。"],["综述大纲","背景、研究现状、争议、空白——先定大纲，再动笔。"],["逐节生成","每节内容来自你上传的文献，前后节保持连接。"],["局部修改","导师意见绑定到小节，只改那一处，不动其余内容。"],["开题报告工作流","文献综述、研究问题、方法、计划——结构化逐节完成。"],["研究计划工作流","从综述到计划无缝衔接，材料一次上传全项目复用。"]].map(([t,d]) => (
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
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 28px", fontFamily: "Georgia,Times New Roman,serif" }}>聊天窗口 vs SciNest 综述工作区</h2>
          <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead><tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>你需要</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>AI 聊天窗口</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#087f72", fontWeight: 750 }}>SciNest 综述工作区</th></tr></thead>
            <tbody>{chatLimits.map(([n, c, s]) => <tr key={n} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}><td style={{ padding: "12px 14px", fontWeight: 650 }}>{n}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{c}</td><td style={{ padding: "12px 14px", color: "#087f72", fontWeight: 600 }}>{s}</td></tr>)}</tbody>
          </table></div>
        </section>

        <section id="how" style={{ background: "#fff", padding: "60px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>五步流程</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>从文献堆到成稿</h2>
            {workflow.map(([n,t,d]) => <div key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24 }}><span style={{ flex: "0 0 40px", width: 40, height: 40, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span><div><h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{d}</p></div></div>)}
          </div>
        </section>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "50px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>常见问题</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.18, margin: "12px 0 24px", fontFamily: "Georgia,Times New Roman,serif" }}>写文献综述，你最关心的</h2>
          {[["AI 能帮我写文献综述吗？","能。上传论文和笔记后，SciNest 帮你梳理研究脉络、归纳观点，按大纲逐节生成综述草稿。生成内容绑定到你上传的文献。"],["AI 生成的综述引用可靠吗？","AI 可能编造看起来真实但实际不存在的引用。SciNest 将生成内容绑定到你上传的文献，提交前必须逐条核对。"],["开题报告也能用吗？","能。文献综述、开题报告、研究计划都有结构化工作流：定大纲、选材料、逐节生成、局部修改。"],["和直接问 ChatGPT 有什么区别？","聊天窗口输出短、易丢上下文；SciNest 保持大纲、文献和章节的持久连接，每节继承前面内容，可单独修改任意一节。"],["免费吗？","Free 版免费且不限生成次数（一个活跃项目）；Pro 版 ¥299/年支持多项目与无水印导出。"]].map(([q,a]) => <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "16px 0" }}><summary style={{ fontWeight: 650, fontSize: 15, cursor: "pointer", listStyle: "none" }}>{q}</summary><p style={{ margin: "10px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>{a}</p></details>)}
        </section>

        <section style={{ background: "linear-gradient(180deg,#0a2a30,#0d2328)", color: "#fff", textAlign: "center", padding: "60px 28px" }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.12, margin: "0 0 12px", fontFamily: "Georgia,Times New Roman,serif" }}>你的文献，你的脉络，你的综述。</h2>
          <p style={{ fontSize: 16, opacity: .78, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>9 月开题季正当时。免费开始。</p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>开始写文献综述 ↗</a>
          <p style={{ marginTop: 18, fontSize: 12, opacity: .5 }}>免费开始 · Windows · 自选模型，不限生成</p>
        </section>
      </main>
      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, color: "#5e6f7c", fontSize: 13 }}>
        <strong style={{ color: "#0a2030" }}>SciNest · 科研小棉袄</strong>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/zh" style={{ color: "#087f72", textDecoration: "none" }}>首页</a>
          <a href="/zh/ai-paper-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 论文写作助手</a>
          <a href="/zh/thesis-defense-presentation" style={{ color: "#087f72", textDecoration: "none" }}>答辩 PPT</a>
          <a href="/zh/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 长文写作</a>
          <a href="/zh/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑 PPT</a>
          <a href="/zh/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑图片</a>
        </nav>
      </footer>
    </div>
  );
}
