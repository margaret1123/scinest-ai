import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.exe";

export const metadata: Metadata = {
  title: "用 AI 生成可编辑的图片｜改文字、移元素、局部重绘",
  description:
    "生成带可编辑图层的图片——文字标签、形状、箭头和区域保持独立。改一个字不用重新生成整张图。移动元素，调整布局，AI 只重绘选中区域。像 DALL-E 和 Midjourney 一样用 AI 生成，但结果可以继续修改。",
  alternates: {
    canonical: "/zh/ai-editable-images",
    languages: { en: "/ai-editable-images", "zh-CN": "/zh/ai-editable-images", "x-default": "/ai-editable-images" },
  },
  openGraph: {
    type: "website", url: "/zh/ai-editable-images",
    title: "用 AI 生成可编辑的图片 | SciNest",
    description: "改文字。移元素。局部重绘。不用重新生成整张图。",
  },
};

const siteJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "用 AI 生成可编辑的图片", url: `${siteUrl}/zh/ai-editable-images`, inLanguage: "zh-CN", isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl } };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "生成后能改文字标签吗？不用重新生成整张图？", acceptedAnswer: { "@type": "Answer", text: "能。SciNest 生成的图片保持文字为独立可编辑图层。标签、标注和说明保持可编辑——改措辞、改错字、更新术语都不需要重新生成整张图。这是和像素型 AI 图片生成器最根本的区别。" } },
  { "@type": "Question", name: "和 DALL-E 或 Midjourney 有什么不同？", acceptedAnswer: { "@type": "Answer", text: "DALL-E、Midjourney 等工具输出一张像素融合的整图。每个元素——形状、文字、箭头、标签——被锁死在一个不可编辑的图层里。标签拼错了或者要换个配色，就必须从头重写提示词重新生成。SciNest 保持文字、形状和区域为独立可编辑图层，让你可以逐个元素修改。" } },
  { "@type": "Question", name: "能移动或调整单个元素的大小吗？", acceptedAnswer: { "@type": "Answer", text: "能。文字、形状、箭头和图片区域可以被选中、移动、缩放和重定位。调整布局不用重新生成。" } },
  { "@type": "Question", name: "能只重绘图片的一部分吗？", acceptedAnswer: { "@type": "Answer", text: "能。选中一个区域或元素，只对那部分重新运行 AI。其余部分——标签、布局、已确认区域——保持在原位不变。" } },
  { "@type": "Question", name: "能生成什么类型的图？", acceptedAnswer: { "@type": "Answer", text: "机制图、技术流程图、研究路线图、实验流程图、概念框架、图形摘要、流程图、关系图、时间线——任何结合文字标签和形状的图表。" } },
]};

const comparison = [
  ["文字标签", "融在像素里——不能选中不能改", "独立文字图层——随时改"],
  ["元素编辑", "重新生成整张图", "选中、移动、缩放单个元素"],
  ["局部修改", "新提示词=新图=从零开始", "选中区域，只改那一块"],
  ["文字准确度", "乱码、拼错、错字", "真实渲染文字——改错字一键"],
  ["布局调整", "从头再来", "拖拽重定位、缩放、重排"],
];

const workflow = [
  ["01", "定义视觉", "描述需要展示什么——机制、流程、关系、时间线。AI 从内容逻辑出发，不是从装饰出发。"],
  ["02", "规划结构", "选图型、面板、节点、关系、标签和重点。生成前先把布局调好。"],
  ["03", "生成图片", "创建带独立图层（文字、形状、连接线、区域）的结构化视觉。"],
  ["04", "编辑修改", "改标签。缩放形状。移动箭头。选中区域 AI 重绘——不碰已确认的部分。"],
  ["05", "导出复用", "导出最终图片。用在论文、PPT 或文档里。后续改动不需要从零重建。"],
];

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/zh" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none" }}>SciNest 科研小棉袄</a>
        <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>获取 SciNest Free</a>
      </header>
      <main>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>可编辑图层 · 不是一张死图</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,52px)", lineHeight: 1.1, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 生成可编辑的图片</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 640, margin: "0 auto 32px" }}>生成带独立图层的图片——文字标签、形状和区域保持可编辑。改字不用重生成。移元素、调大小。AI 只重绘你选中的部分，其余保持不变。</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none" }}>生成可编辑的图片 ↗</a>
            <a href="#how" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)" }}>查看流程</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>Windows 桌面端 · 可编辑图层 · 导出复用</p>
        </section>

        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>超越像素</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", textAlign: "center", lineHeight: 1.18, margin: "14px 0 16px", fontFamily: "Georgia,Times New Roman,serif" }}>文字保持为文字。每个元素都能独立修改。</h2>
          <p style={{ textAlign: "center", fontSize: 16, color: "#526974", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>像素型 AI 生成器把所有元素融成一张死图。标签错了一个字就得从头生成。可编辑生成把文字保持为真文字，形状保持为独立对象，区域可单独选中——只改需要改的，其余保持不变。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, maxWidth: 760, margin: "0 auto" }}>
            {[["可编辑文字标签","改标签、改错字、更新术语——不用重新生成整张图。"],["可移动元素","选中形状、箭头或文本框，移动、缩放。改布局不用从头来。"],["选择性 AI 重绘","选中一个区域，AI 只处理那一块。已确认的部分原封不动。"],["跨项目复用","导出到论文。PPT 需要同一张图时直接复用——不用重新上传。"]].map(([t,d]) => <div key={t} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 18, padding: "24px 20px" }}><h3 style={{ margin: "0 0 8px", fontSize: 17 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.6, fontSize: 14 }}>{d}</p></div>)}
          </div>
        </section>

        <section style={{ background: "#fff", padding: "60px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>区别</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 28px", fontFamily: "Georgia,Times New Roman,serif" }}>像素死图 vs 可编辑图层</h2>
            <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead><tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>你需要</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>像素型 AI 生成器</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#087f72", fontWeight: 750 }}>SciNest 可编辑图片</th></tr></thead>
              <tbody>{comparison.map(([n, o, s]) => <tr key={n} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}><td style={{ padding: "12px 14px", fontWeight: 650 }}>{n}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{o}</td><td style={{ padding: "12px 14px", color: "#087f72", fontWeight: 600 }}>{s}</td></tr>)}</tbody>
            </table></div>
          </div>
        </section>

        <section id="how" style={{ maxWidth: 720, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>五步流程</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>从内容逻辑到可编辑视觉</h2>
          {workflow.map(([n,t,d]) => <div key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24 }}><span style={{ flex: "0 0 40px", width: 40, height: 40, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span><div><h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{d}</p></div></div>)}
        </section>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "50px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>常见问题</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.18, margin: "12px 0 24px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 生成可编辑图片，你最关心的</h2>
          {[["生成后能改文字标签吗？","能。标签、标注和说明保持独立文字图层。改措辞、改错字、更新术语——不用重新生成整张图。这是和像素型生成器最根本的区别。"],["和 DALL-E 或 Midjourney 有什么不同？","像素型生成器把所有元素融成一张死图。文字永远被锁在像素里。标签错一个字就得从头写提示词重新生成。可编辑生成保持每个元素独立可改。"],["能移动或缩放单个元素吗？","能。文字、形状、箭头和图片区域可选中、移动、缩放、重定位。改布局不用重新生成。"],["能只重绘图片的一部分吗？","能。选中一个区域，AI 只处理那一块。已确认的部分保持不变。"],["能生成什么类型的图？","机制图、技术流程图、研究路线图、实验流程图、概念框架、图形摘要、流程图、关系图、时间线——任何结合文字和形状的图表。"]].map(([q,a]) => <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "16px 0" }}><summary style={{ fontWeight: 650, fontSize: 15, cursor: "pointer", listStyle: "none" }}>{q}</summary><p style={{ margin: "10px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>{a}</p></details>)}
        </section>

        <section style={{ background: "linear-gradient(180deg,#0a2a30,#0d2328)", color: "#fff", textAlign: "center", padding: "60px 28px" }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.12, margin: "0 0 12px", fontFamily: "Georgia,Times New Roman,serif" }}>生成。编辑。不用从头来。</h2>
          <p style={{ fontSize: 16, opacity: .78, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>生成带可编辑文字、可移动元素和选择性 AI 重绘的图片。改需要改的——保留已经好的。</p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>生成可编辑的图片 ↗</a>
          <p style={{ marginTop: 18, fontSize: 12, opacity: .5 }}>免费下载 · Windows · 可编辑图层</p>
        </section>
      </main>
      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, color: "#5e6f7c", fontSize: 13 }}>
        <strong style={{ color: "#0a2030" }}>SciNest · 科研小棉袄</strong>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/zh" style={{ color: "#087f72", textDecoration: "none" }}>首页</a>
          <a href="/zh/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 长文写作</a>
          <a href="/zh/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑 PPT</a>
        </nav>
      </footer>
    </div>
  );
}
