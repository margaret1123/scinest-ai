import type { Metadata } from "next";
import { LangSwitch } from "../../lang-switch";
import { ProductBreadcrumbs, createBreadcrumbData } from "../../product-page-navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "答辩PPT｜用 AI 把论文变成答辩演示文稿",
  description:
    "上传论文，设定答辩时长与页数，AI 生成答辩大纲、逐页内容和演讲备注，导出可编辑 PPTX 或 PDF。免费开始。",
  alternates: {
    canonical: "/zh/thesis-defense-presentation",
    languages: { en: "/thesis-defense-presentation", "zh-CN": "/zh/thesis-defense-presentation", "x-default": "/thesis-defense-presentation" },
  },
  openGraph: {
    type: "website", url: "/zh/thesis-defense-presentation",
    title: "答辩PPT｜用 AI 把论文变成答辩演示文稿 | SciNest",
    description: "上传论文，设定答辩时长与页数，AI 生成答辩大纲、逐页内容和演讲备注，导出可编辑 PPTX 或 PDF。",
    images: [{ url: "/scinest/ppt-ui-en.webp", width: 1280, height: 800 }],
  },
};

const siteJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "答辩 PPT", url: `${siteUrl}/zh/thesis-defense-presentation`, inLanguage: "zh-CN", isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl } };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "AI 能直接根据我的论文生成答辩 PPT 吗？", acceptedAnswer: { "@type": "Answer", text: "能。上传论文后设定答辩时长和页数，SciNest 按论文内容生成大纲与逐页内容，而非套用通用模板。每页内容都来自你上传的论文和项目材料。" } },
  { "@type": "Question", name: "生成的 PPT 可以编辑吗？", acceptedAnswer: { "@type": "Answer", text: "可以。Pro 版（¥29/月 或 ¥299/年）导出标准 PPTX，文字、图片、页面顺序均可修改，单页修改无需重新生成；Free 版导出 PDF。" } },
  { "@type": "Question", name: "答辩 PPT 一般做多少页？", acceptedAnswer: { "@type": "Answer", text: "20 分钟答辩通常 15–30 页。生成前可设定页数和时长，再逐页调整大纲，以符合答辩委员会的要求。" } },
  { "@type": "Question", name: "会生成演讲备注吗？", acceptedAnswer: { "@type": "Answer", text: "会。每页自动生成基于论文内容的演讲备注，可修改删减，方便排练。备注随页面保存。" } },
  { "@type": "Question", name: "需要付费订阅 ChatGPT 吗？", acceptedAnswer: { "@type": "Answer", text: "不需要。使用你自己的 API Key（ChatGPT、DeepSeek、Claude 或任何兼容接口），调用费直接向服务商支付，SciNest Free 不限生成次数。" } },
]};

const comparisonRows = [
  ["制作时间", "手动复制好几天", "几分钟生成初稿", "几分钟生成，逐页修改"],
  ["与论文内容匹配", "全靠自己重打", "可能跑题", "每页来自你上传的论文"],
  ["生成后能否编辑", "完全可控但慢", "截图式，只能重做", "文字可改、图片可换、单页可修"],
  ["演讲备注", "另外写", "通常没有", "逐页自动起草"],
  ["大纲控制", "全手动", "没有真正的大纲", "生成前先审大纲"],
  ["导出格式", "手动 PPTX", "图片文件", "真 PPTX（Pro）或 PDF（Free）"],
];

const workflow = [
  ["01", "上传论文与材料", "加入论文、参考文献、图表和答辩要求。工作区把论文当作每一页的唯一来源。"],
  ["02", "设定时长与页数", "输入答辩时长和目标页数——20 分钟答辩、10 分钟汇报、开题报告，都按时间配页数。"],
  ["03", "审大纲", "生成 PPT 前先审大纲。移动、合并、删除页面——大纲阶段改，零成本。"],
  ["04", "生成逐页内容与备注", "工作区按论文逐页生成内容，并为每页起草演讲备注。哪页不满意就改哪页。"],
  ["05", "排练导出", "照着备注排练，删减到合适长度，导出可编辑 PPTX（Pro）或 PDF（Free）。"],
];

const aiSummary =
  "SciNest 是 Windows 桌面端工具，可把论文或开题报告做成答辩演示文稿：上传论文，设定时长与页数，生成答辩大纲、逐页内容和演讲备注。Pro 版（¥29/月 或 ¥299/年）导出可编辑 PPTX，Free 版导出 PDF；内容可逐页修改。AI 使用你自己的 ChatGPT、DeepSeek 或 Claude API Key，AI 使用无订阅费、不限生成次数。官网 scinest.app 免费下载。";

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createBreadcrumbData(siteUrl, "defense", "zh")) }} />
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/zh" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest 科研小棉袄</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>获取 SciNest Free</a>
        </div>
      </header>
      <main>
        <ProductBreadcrumbs current="defense" locale="zh" />
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>答辩 PPT</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,52px)", lineHeight: 1.1, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 把论文做成<br />答辩 PPT</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 640, margin: "0 auto 32px" }}>上传论文，设定答辩时长与页数，先审大纲，再生成逐页内容和演讲备注——全部来自你自己的论文，不是通用模板。</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none" }}>开始做答辩 PPT ↗</a>
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
            {[{ title: "论文直接转 PPT", desc: "每页内容来自你上传的论文——结论、数据、图表和原文保持一致。", color: "#10a37f" }, { title: "真 PPTX，不是截图", desc: "导出标准可编辑 PPTX。改文字、换图片、调顺序，改到答辩前最后一分钟。", color: "#4d6bfe" }, { title: "逐页演讲备注", desc: "每页自动起草演讲备注，排练时删改，备注随页保存。", color: "#d97706" }].map(m => (
              <div key={m.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 20, padding: "24px 20px", borderTop: `4px solid ${m.color}` }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{m.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 14 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "linear-gradient(180deg,#ecf8f4,#dff3ec)", padding: "60px 28px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>答辩工作流</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, margin: "14px 0 18px", fontFamily: "Georgia,Times New Roman,serif" }}>评委问的是你的论文，PPT 就应该从论文里长出来。</h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>SciNest 把论文当作唯一事实来源：先大纲、再逐页生成，演讲备注来自同一份文档。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, maxWidth: 750, margin: "0 auto" }}>
              {[["论文绑定页面","每一页都从你上传的论文和图表生成，结论和数据与原文一致。"],["按时长配页数","生成前设定答辩时长和目标页数，20 分钟答辩配 20 分钟的 deck。"],["先审大纲再生成","生成 PPT 前先审大纲：移动、合并、删除页面，大纲阶段改零成本。"],["单页修改","只改某一页，不用重新生成整个 PPT。文字、图片、顺序都可调。"],["逐页演讲备注","每页自动起草备注，排练时删改，随页保存。"],["PDF + PPTX 导出","Pro 导出真 PPTX，Free 导出 PDF。没有截图糊弄。"]].map(([t,d]) => (
                <div key={t} style={{ background: "rgba(255,255,255,.82)", borderRadius: 16, padding: "22px 18px", textAlign: "left", border: "1px solid rgba(7,95,85,.06)" }}>
                  <h3 style={{ margin: "0 0 6px", fontSize: 16 }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 13, color: "#5e6f7c", lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>对比</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 28px", fontFamily: "Georgia,Times New Roman,serif" }}>手动做 vs 截图式 AI 工具 vs SciNest</h2>
          <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead><tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>你需要</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>手动做</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>截图式 AI 工具</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#087f72", fontWeight: 750 }}>SciNest</th></tr></thead>
            <tbody>{comparisonRows.map(([n, m, a, s]) => <tr key={n} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}><td style={{ padding: "12px 14px", fontWeight: 650 }}>{n}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{m}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{a}</td><td style={{ padding: "12px 14px", color: "#087f72", fontWeight: 600 }}>{s}</td></tr>)}</tbody>
          </table></div>
        </section>

        <section id="how" style={{ background: "#fff", padding: "60px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>五步流程</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>从论文到答辩 deck</h2>
            {workflow.map(([n,t,d]) => <div key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24 }}><span style={{ flex: "0 0 40px", width: 40, height: 40, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span><div><h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{d}</p></div></div>)}
          </div>
        </section>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "50px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>常见问题</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.18, margin: "12px 0 24px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 做答辩 PPT，你最关心的</h2>
          {[["AI 能直接根据我的论文生成答辩 PPT 吗？","能。上传论文后设定答辩时长和页数，SciNest 按论文内容生成大纲与逐页内容，而非套用通用模板。"],["生成的 PPT 可以编辑吗？","可以。Pro 版（¥29/月 或 ¥299/年）导出标准 PPTX，文字、图片、页面顺序均可修改；Free 版导出 PDF。"],["答辩 PPT 一般做多少页？","20 分钟答辩通常 15–30 页。生成前可设定页数和时长，再逐页调整大纲。"],["会生成演讲备注吗？","会。每页自动生成基于论文内容的演讲备注，可修改删减，方便排练。"],["需要付费订阅 ChatGPT 吗？","不需要。使用你自己的 API Key，调用费直接向服务商支付，SciNest Free 不限生成次数。"]].map(([q,a]) => <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "16px 0" }}><summary style={{ fontWeight: 650, fontSize: 15, cursor: "pointer", listStyle: "none" }}>{q}</summary><p style={{ margin: "10px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>{a}</p></details>)}
        </section>

        <section style={{ background: "linear-gradient(180deg,#0a2a30,#0d2328)", color: "#fff", textAlign: "center", padding: "60px 28px" }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.12, margin: "0 0 12px", fontFamily: "Georgia,Times New Roman,serif" }}>你的论文。你的答辩。你的 deck。</h2>
          <p style={{ fontSize: 16, opacity: .78, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>从你已经写好的论文里，长出一份答辩 PPT。免费开始。</p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>开始做答辩 PPT ↗</a>
          <p style={{ marginTop: 18, fontSize: 12, opacity: .5 }}>免费开始 · Windows · 自选模型，不限生成</p>
        </section>
      </main>
      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, color: "#5e6f7c", fontSize: 13 }}>
        <strong style={{ color: "#0a2030" }}>SciNest · 科研小棉袄</strong>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/zh" style={{ color: "#087f72", textDecoration: "none" }}>首页</a>
          <a href="/zh/ai-paper-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 论文写作助手</a>
          <a href="/zh/ai-long-form-writer" style={{ color: "#087f72", textDecoration: "none" }}>AI 长文写作</a>
          <a href="/zh/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑 PPT</a>
          <a href="/zh/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑图片</a>
          <a href="/zh/literature-review-assistant" style={{ color: "#087f72", textDecoration: "none" }}>文献综述助手</a>
        </nav>
      </footer>
    </div>
  );
}
