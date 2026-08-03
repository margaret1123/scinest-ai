import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const registerUrl = "/login?redirect=/dashboard&intent=early-bird";

export const metadata: Metadata = {
  title: "用 AI 生成真正可编辑的 PPTX｜不是截图，不是 HTML",
  description:
    "生成标准 .PPTX 文件，带可编辑文字、可替换图片和讲稿。不是整页截图，不是 HTML 幻灯片。打开就能继续改——在用 ChatGPT、DeepSeek 或 Claude 的同一个工作区里完成。",
  alternates: {
    canonical: "/zh/ai-editable-powerpoint",
    languages: { en: "/ai-editable-powerpoint", "zh-CN": "/zh/ai-editable-powerpoint", "x-default": "/ai-editable-powerpoint" },
  },
  openGraph: {
    type: "website", url: "/zh/ai-editable-powerpoint",
    title: "用 AI 生成真正可编辑的 PPTX | SciNest",
    description: "标准 PPTX 导出。可编辑文字。可替换图片。不是截图。",
  },
};

const siteJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "用 AI 生成可编辑 PPTX", url: `${siteUrl}/zh/ai-editable-powerpoint`, inLanguage: "zh-CN", isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl } };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "AI 生成的是真正的 PowerPoint 文件吗？能继续编辑吗？", acceptedAnswer: { "@type": "Answer", text: "是。SciNest 输出标准 .PPTX 文件。标题是真实文本框，正文可编辑，图片可替换，页面顺序可调整。在 PowerPoint、WPS 等兼容软件里打开就能继续改——不需要转换。" } },
  { "@type": "Question", name: "和那些把幻灯片导出成图片的工具有什么区别？", acceptedAnswer: { "@type": "Answer", text: "很多 AI PPT 工具把每页渲染成一张整图，塞进 PPTX 壳里。看起来像幻灯片，实际上是一张无法编辑的截图——不能选文字、不能移元素、不能改内容。真正的 PPTX 把标题、正文、图片和形状保留为独立可编辑对象。" } },
  { "@type": "Question", name: "生成前能修改大纲吗？", acceptedAnswer: { "@type": "Answer", text: "可以。先设定演示目的、受众、页数和模板，然后逐页审阅标题、顺序和重点，确认后再生成完整幻灯片。大纲阶段改结构零成本。" } },
  { "@type": "Question", name: "能只改一页，不动整个 PPT 吗？", acceptedAnswer: { "@type": "Answer", text: "可以。生成后可以单独修改某一页——改文字、换图片、调布局——不碰其余页面。这是结构化 PPTX 输出最大的优势。" } },
  { "@type": "Question", name: "能用我上传的材料生成幻灯片吗？", acceptedAnswer: { "@type": "Answer", text: "可以。你选择哪些项目论文、数据、图片和内容参与 PPT 任务。AI 按你选的材料生成幻灯片，不是凭空编造。" } },
]};

const comparison = [
  ["标准 .PPTX 文件", "图片或 PDF 套个壳", "真正 PPTX——打开就能编辑"],
  ["可编辑文字", "文字被截图锁死", "选中、编辑、改格式"],
  ["图片处理", "固定——改就得重新生成这页", "替换、缩放、重定位"],
  ["页面顺序", "重新生成整份 PPT", "拖拽排序、删页、插页"],
  ["大纲编辑", "跳过或隐藏大纲步骤", "生成前审阅并调整"],
  ["讲稿", "通常没有或一刀切", "每页生成，随内容一起编辑"],
];

const workflow = [
  ["01", "定义演示", "设定用途、受众、时长和页数。选答辩、会议、课程报告等真实场景。"],
  ["02", "选择材料", "挑选参与本次 PPT 任务的论文、数据、图片和内容。AI 按你选的写。"],
  ["03", "编辑大纲", "逐页审阅标题、调整顺序、设重点。在生成前把故事理顺。"],
  ["04", "生成幻灯片", "从确认的材料和大纲生成结构化页面、视觉元素和讲稿。"],
  ["05", "编辑导出", "改个别页面、换图片、调文字、润色讲稿。导出最终 PPTX。"],
];

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/zh" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none" }}>SciNest 科研小棉袄</a>
        <a href={registerUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>获取 SciNest Free</a>
      </header>
      <main>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>真正的 PPTX · 不是截图</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,52px)", lineHeight: 1.1, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 生成真正可编辑的 PPTX</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 640, margin: "0 auto 32px" }}>标准 .PPTX 文件，带可编辑文字、可替换图片和讲稿。不是整页截图，不是 HTML 幻灯片。打开 PowerPoint 就能继续改。</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={registerUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none" }}>生成可编辑 PPTX ↗</a>
            <a href="#how" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)" }}>查看流程</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Windows 桌面端 · 标准 PPTX 导出 · 自带 AI Key</p>
        </section>

        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>什么是真正的"可编辑"</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", textAlign: "center", lineHeight: 1.18, margin: "14px 0 16px", fontFamily: "Georgia,Times New Roman,serif" }}>能打开的幻灯片。能选中的文字。能替换的图片。</h2>
          <p style={{ textAlign: "center", fontSize: 16, color: "#526974", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>大多数 AI PPT 工具导出的是截图包在 PPTX 里的"假幻灯片"。预览时看起来正常，但当你需要改一个错字、换一个日期或调整一张图片时，你发现每一页都是一张锁死的图。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, maxWidth: 760, margin: "0 auto" }}>
            {[["可编辑文字","选中标题、要点或段落直接编辑。改错字不用重新生成整页。"],["可替换图片","换一张图、重定位、调大小——布局自动适配。"],["可重排页面","改页面顺序、插入新页、删掉不需要的。"],["可编辑讲稿","每页生成专属讲稿，随内容一起修改。"]].map(([t,d]) => <div key={t} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 18, padding: "24px 20px" }}><h3 style={{ margin: "0 0 8px", fontSize: 17 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.6, fontSize: 14 }}>{d}</p></div>)}
          </div>
        </section>

        <section style={{ background: "#fff", padding: "60px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>区别</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 28px", fontFamily: "Georgia,Times New Roman,serif" }}>图片型 PPT vs 真正可编辑的 PPTX</h2>
            <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead><tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>你需要</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>图片型 AI 工具</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#087f72", fontWeight: 750 }}>SciNest 可编辑 PPTX</th></tr></thead>
              <tbody>{comparison.map(([n, o, s]) => <tr key={n} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}><td style={{ padding: "12px 14px", fontWeight: 650 }}>{n}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{o}</td><td style={{ padding: "12px 14px", color: "#087f72", fontWeight: 600 }}>{s}</td></tr>)}</tbody>
            </table></div>
          </div>
        </section>

        <section id="how" style={{ maxWidth: 720, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>五步流程</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>从你的材料到可编辑 PPTX</h2>
          {workflow.map(([n,t,d]) => <div key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24 }}><span style={{ flex: "0 0 40px", width: 40, height: 40, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span><div><h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{d}</p></div></div>)}
        </section>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "50px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>常见问题</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.18, margin: "12px 0 24px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 生成可编辑 PPT，你最关心的</h2>
          {[["生成的是真正的 PowerPoint 文件吗？","是。标准 .PPTX 文件。标题是真实文本框，正文可编辑，图片可替换。在 PowerPoint、WPS 里打开就能继续改。"],["和导出成图片的工具有什么区别？","图片型工具把每页渲染成截图包在 PPTX 里。表面是幻灯片，实际是锁死的图——不能选文字、不能移元素。真正的 PPTX 每个元素独立可编辑。"],["生成前能修改大纲吗？","可以。先设定用途、受众、页数，再逐页审阅标题和顺序，确认后再生成。大纲阶段改结构不花成本。"],["能只改一页不动整份 PPT 吗？","可以。生成后单独修改某页——改文字、换图片、调布局——不碰其余页面。"],["能用我上传的材料吗？","可以。选择哪些论文、数据和图片参与 PPT 任务。AI 按你选的内容生成，不是凭空编。"],["能做什么类型的 PPT？","答辩、毕业答辩、研究展示、论文转 PPT、会议报告、文献综述、研究计划、课程报告、技术路线——任何有内容和结构的演示。"]].map(([q,a]) => <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "16px 0" }}><summary style={{ fontWeight: 650, fontSize: 15, cursor: "pointer", listStyle: "none" }}>{q}</summary><p style={{ margin: "10px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>{a}</p></details>)}
        </section>

        <section style={{ background: "linear-gradient(180deg,#0a2a30,#0d2328)", color: "#fff", textAlign: "center", padding: "60px 28px" }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.12, margin: "0 0 12px", fontFamily: "Georgia,Times New Roman,serif" }}>真正可编辑的 PPTX。不是截图。</h2>
          <p style={{ fontSize: 16, opacity: .78, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>上传材料。编辑大纲。生成幻灯片。打开 PPTX 继续改。每个元素都独立——就像你自己做的幻灯片一样。</p>
          <a href={registerUrl} style={{ background: "#fff", color: "#087f72", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>生成可编辑 PPTX ↗</a>
          <p style={{ marginTop: 18, fontSize: 12, opacity: .5 }}>免费下载 · Windows · 标准 PPTX 导出</p>
        </section>
      </main>
      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, color: "#5e6f7c", fontSize: 13 }}>
        <strong style={{ color: "#0a2030" }}>SciNest · 科研小棉袄</strong>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/zh" style={{ color: "#087f72", textDecoration: "none" }}>首页</a>
          <a href="/zh/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 长文写作</a>
          <a href="/zh/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑图片</a>
        </nav>
      </footer>
    </div>
  );
}
