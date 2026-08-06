import type { Metadata } from "next";
import { LangSwitch } from "../../lang-switch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";
const downloadUrl = "https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.zip";

export const metadata: Metadata = {
  title: "用 ChatGPT / DeepSeek / Claude 起草万字长文｜自带 API Key",
  description:
    "自带 API Key，用 ChatGPT、DeepSeek 或 Claude 起草完整长文。先定大纲，再逐章生成，修哪章改哪章——不用推翻全文。免费下载，Pro 已解锁。",
  alternates: {
    canonical: "/zh/ai-long-form-writer",
    languages: { en: "/ai-long-form-writer", "zh-CN": "/zh/ai-long-form-writer", "x-default": "/ai-long-form-writer" },
  },
  openGraph: {
    type: "website", url: "/zh/ai-long-form-writer",
    title: "用 ChatGPT / DeepSeek / Claude 写出万字长文 | SciNest",
    description: "自带 API Key。先定大纲，再逐章生成完整长文，修哪章改哪章——不用推翻全文。",
  },
};

const siteJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "用 AI 写出万字长文", url: `${siteUrl}/zh/ai-long-form-writer`, inLanguage: "zh-CN", isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl } };

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "ChatGPT 或 DeepSeek 真能写出一万字以上的论文吗？", acceptedAnswer: { "@type": "Answer", text: "能——用对的工具。聊天窗口每次只输出几百字，长对话还会丢失上下文。但用同一个 API，通过专为长文设计的工作区（大纲→章节→完整草稿→局部修改），ChatGPT、DeepSeek 和 Claude 都能生成连贯的万字长文。SciNest 连接你自己的 API Key，把写作拆成结构化流程。" } },
  { "@type": "Question", name: "需要付费订阅 ChatGPT 吗？", acceptedAnswer: { "@type": "Answer", text: "不需要。SciNest 连接你自己的 OpenAI、DeepSeek 或 Anthropic API Key。你直接向服务商付费，没有 SciNest 订阅费，没有生成次数限制。一篇完整论文草稿通常只需几块钱的 API 费用，远低于月费订阅。" } },
  { "@type": "Question", name: "和直接把论文粘贴到 ChatGPT 里有什么区别？", acceptedAnswer: { "@type": "Answer", text: "粘贴到 ChatGPT 只能得到一段 500-1500 字的回复，而且常常截断。多轮对话后上下文丢失，模型记不住你的大纲、文献和前面写过什么。写作工作区把大纲、选定材料、已生成章节和修改历史保持在同一个项目里，每一章都继承前面的上下文。" } },
  { "@type": "Question", name: "能只改一章，不动全文吗？", acceptedAnswer: { "@type": "Answer", text: "可以。全文草稿生成后，选中某章、某节或某段进行修改——缩短、加强论证、回应导师意见、重新组织——不动文档其余部分。这是聊天界面做不到的。" } },
  { "@type": "Question", name: "支持 DeepSeek 的免费 API 吗？", acceptedAnswer: { "@type": "Answer", text: "支持。SciNest 兼容 DeepSeek、OpenAI、Anthropic 和任何兼容 OpenAI 接口的 API 端点。DeepSeek API 价格显著低于大多数替代方案。" } },
]};

const chatLimits = [
  ["输出长度", "每次几百字", "完整的章节，全文连贯"],
  ["上下文记忆", "几轮对话后丢失", "项目持久记忆——大纲、材料、章节保持连接"],
  ["材料绑定", "粘贴片段，分不清来源", "一次选定材料，每个章节知道自己在写什么"],
  ["引用", "编造参考文献和 DOI", "绑定你上传的真实文献和资料"],
  ["章节修改", "重新提示整个章节", "选中一章、一段，只改那部分"],
];

const workflow = [
  ["01", "定大纲", "设定章节、小节、字数目标和写作要求。在生成第一个字之前把结构调好。"],
  ["02", "选材料", "上传论文、文献、笔记、导师意见和提交要求。绑定到对应章节。"],
  ["03", "生成全文", "选你的 AI 服务商——ChatGPT、DeepSeek 或 Claude。工作区逐章生成，全文上下文保持连接。"],
  ["04", "局部修改", "导师对第三章有意见？只修那一段。需要缩短文献综述？只改那一块。文档其余部分不动。"],
  ["05", "导出提交", "导出完整文档。草稿是你的——审查、核实、润色、排版、提交。"],
];

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/zh" style={{ color: "#087f72", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-.02em" }}>SciNest 科研小棉袄</a>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "10px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>获取 SciNest Free</a>
        </div>
      </header>
      <main>
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 40px", textAlign: "center" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>AI 长文写作</p>
          <h1 style={{ fontSize: "clamp(32px,4.8vw,52px)", lineHeight: 1.1, letterSpacing: "-.035em", margin: "18px 0 22px", fontFamily: "Georgia,Times New Roman,serif" }}>用 ChatGPT / DeepSeek / Claude<br />起草万字长文</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#526974", maxWidth: 640, margin: "0 auto 32px" }}>自带 API Key。先定大纲，再用你自己的材料逐章起草完整长文。修哪章改哪章——不用推翻全文。同一把 Key，换个工作方式。</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={downloadUrl} style={{ background: "#087f72", color: "#fff", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none" }}>开始起草长文 ↗</a>
            <a href="#how" style={{ color: "#087f72", padding: "15px 28px", borderRadius: 14, fontWeight: 650, fontSize: 16, textDecoration: "none", border: "2px solid rgba(7,153,135,.2)" }}>查看流程</a>
          </div>
          <p style={{ color: "#8599a3", fontSize: 13, marginTop: 18 }}>免费下载 · 自带 API Key · 不限生成次数</p>
        </section>

        <section style={{ maxWidth: 800, margin: "0 auto", padding: "40px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>聊天窗口是瓶颈</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,36px)", textAlign: "center", lineHeight: 1.18, letterSpacing: "-.03em", margin: "14px 0 18px", fontFamily: "Georgia,Times New Roman,serif" }}>模型够聪明，界面拖了后腿</h2>
          <p style={{ textAlign: "center", fontSize: 17, color: "#526974", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 36px" }}>ChatGPT、DeepSeek、Claude 都有写长论文的智力。问题是聊天界面——它为对话设计，不是为管理一万五千字、带大纲和文献的完整文档而建。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, maxWidth: 780, margin: "0 auto" }}>
            {[{ title: "ChatGPT", desc: "输出截断，几轮对话后丢失上下文，编造参考文献", color: "#10a37f" }, { title: "DeepSeek", desc: "推理能力强，但聊天界面同样只能输出短回复，没有持久大纲和章节管理", color: "#4d6bfe" }, { title: "Claude", desc: "文笔自然，但聊天窗口不能把文献绑定到章节，不能追踪全篇修改", color: "#d97706" }].map(m => (
              <div key={m.title} style={{ background: "#fff", border: "1px solid rgba(7,95,85,.12)", borderRadius: 20, padding: "24px 20px", borderTop: `4px solid ${m.color}` }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{m.title}</h3>
                <p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.65, fontSize: 14 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "linear-gradient(180deg,#ecf8f4,#dff3ec)", padding: "60px 28px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>解决方案</p>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.15, margin: "14px 0 18px", fontFamily: "Georgia,Times New Roman,serif" }}>同一个 API Key。换个工作方式。</h2>
            <p style={{ fontSize: 17, color: "#42606c", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>SciNest 连接你自己的 OpenAI、DeepSeek 或 Anthropic API Key。先定可编辑大纲，再逐章生成，全文上下文保持连接。修哪章改哪章——不碰其余内容。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, maxWidth: 750, margin: "0 auto" }}>
              {[["自带 API Key","没有 SciNest 订阅费。不限生成次数。用 ChatGPT、DeepSeek、Claude 任意兼容 API。"],["先定大纲","设定章节、小节和字数目标。结构不满意就改——别等一万五千字写完了再返工。"],["材料绑定写作","上传论文、文献和导师意见。绑定到具体章节。AI 按你的材料写，不瞎编。"],["逐章修改","缩短第三章。加强第五章的论证。回应某一节的导师意见——不动文档其余部分。"],["项目持久记忆","大纲、材料、生成章节、修改历史全部保持连接。不用重复上下文，不用在窗口间粘贴。"],["导出完整草稿","全文完成后导出。审查、核实、润色、排版、提交。成果是你的。"]].map(([t,d]) => (
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
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 28px", fontFamily: "Georgia,Times New Roman,serif" }}>聊天窗口 vs 写作工作区</h2>
          <div style={{ overflowX: "auto" }}><table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead><tr style={{ borderBottom: "2px solid rgba(7,95,85,.16)" }}><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>你需要</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#5e6f7c" }}>AI 聊天窗口</th><th style={{ textAlign: "left", padding: "12px 14px", fontSize: 13, color: "#087f72", fontWeight: 750 }}>SciNest 工作区</th></tr></thead>
            <tbody>{chatLimits.map(([n, c, s]) => <tr key={n} style={{ borderBottom: "1px solid rgba(7,95,85,.08)" }}><td style={{ padding: "12px 14px", fontWeight: 650 }}>{n}</td><td style={{ padding: "12px 14px", color: "#5e6f7c" }}>{c}</td><td style={{ padding: "12px 14px", color: "#087f72", fontWeight: 600 }}>{s}</td></tr>)}</tbody>
          </table></div>
        </section>

        <section id="how" style={{ background: "#fff", padding: "60px 28px", borderTop: "1px solid rgba(7,95,85,.08)", borderBottom: "1px solid rgba(7,95,85,.08)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>五步流程</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.15, margin: "14px 0 36px", fontFamily: "Georgia,Times New Roman,serif" }}>从空白页到完整草稿</h2>
            {workflow.map(([n,t,d]) => <div key={n} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: 24 }}><span style={{ flex: "0 0 40px", width: 40, height: 40, background: "#087f72", color: "#fff", borderRadius: 999, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13 }}>{n}</span><div><h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{t}</h3><p style={{ margin: 0, color: "#5e6f7c", lineHeight: 1.7 }}>{d}</p></div></div>)}
          </div>
        </section>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "50px 28px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0, textAlign: "center" }}>常见问题</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.18, margin: "12px 0 24px", fontFamily: "Georgia,Times New Roman,serif" }}>用 AI 写长文，你最关心的</h2>
          {[["ChatGPT 或 DeepSeek 真能写出一万字以上的论文吗？","能——用对的工具。聊天窗口每次只输出几百字，长对话丢失上下文。但用同一个 API，通过专为长文设计的工作区（大纲→章节→完整草稿→局部修改），ChatGPT、DeepSeek 和 Claude 都能生成连贯的万字长文。"],["需要付费订阅 ChatGPT 吗？","不需要。SciNest 连接你自己的 API Key。你直接向服务商付费。一篇完整论文草稿通常只需几块钱 API 费用。"],["和把论文粘贴到 ChatGPT 里有什么区别？","粘贴只能得到 500-1500 字且常常截断。多轮对话后上下文丢失。工作区把大纲、材料、章节和修改历史保持连接，每章继承前面的上下文。"],["能只改一章不动全文吗？","可以。全文草稿生成后，选中某章、某节修改——不碰其余内容。这是聊天界面最大的缺失。"],["支持 DeepSeek 的免费 API 吗？","支持。DeepSeek API 价格显著低于多数替代方案。兼容任何 OpenAI 接口的 API。"],["能写什么类型的文档？","论文、毕业论文、文献综述、研究计划、长篇论文、报告——任何有结构的长文档。"],].map(([q,a]) => <details key={q} style={{ borderBottom: "1px solid rgba(7,95,85,.1)", padding: "16px 0" }}><summary style={{ fontWeight: 650, fontSize: 15, cursor: "pointer", listStyle: "none" }}>{q}</summary><p style={{ margin: "10px 0 0", color: "#42606c", lineHeight: 1.75, fontSize: 14 }}>{a}</p></details>)}
        </section>

        <section style={{ background: "linear-gradient(180deg,#0a2a30,#0d2328)", color: "#fff", textAlign: "center", padding: "60px 28px" }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,36px)", lineHeight: 1.12, margin: "0 0 12px", fontFamily: "Georgia,Times New Roman,serif" }}>别再跟聊天窗口较劲了。</h2>
          <p style={{ fontSize: 16, opacity: .78, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.65 }}>自带 API Key。定大纲。生成全文。只改需要改的。ChatGPT、DeepSeek、Claude 都能写——给它们对的工具。</p>
          <a href={downloadUrl} style={{ background: "#fff", color: "#087f72", padding: "15px 34px", borderRadius: 14, fontWeight: 750, fontSize: 16, textDecoration: "none", display: "inline-block" }}>开始起草长文 ↗</a>
          <p style={{ marginTop: 18, fontSize: 12, opacity: .5 }}>免费下载 · Windows · 自带 API Key</p>
        </section>
      </main>
      <footer style={{ maxWidth: 1160, margin: "0 auto", padding: "28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, color: "#5e6f7c", fontSize: 13 }}>
        <strong style={{ color: "#0a2030" }}>SciNest · 科研小棉袄</strong>
        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="/zh" style={{ color: "#087f72", textDecoration: "none" }}>首页</a>
          <a href="/zh/ai-editable-powerpoint" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑 PPT</a>
          <a href="/zh/ai-editable-images" style={{ color: "#087f72", textDecoration: "none" }}>AI 可编辑图片</a>
        </nav>
      </footer>
    </div>
  );
}
