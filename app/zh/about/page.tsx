import type { Metadata } from "next";
import { LangSwitch } from "../../lang-switch";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest.app";

export const metadata: Metadata = {
  title: "关于 SciNest｜我们是谁",
  description:
    "SciNest 是一款免费的 Windows 桌面端 AI 科研工作区：自带 ChatGPT、DeepSeek 或 Claude API Key，无订阅费，不限生成次数。",
  alternates: {
    canonical: "/zh/about",
    languages: { "zh-CN": "/zh/about", en: "/about", "x-default": "/about" },
  },
  openGraph: {
    type: "website",
    url: "/zh/about",
    title: "关于 SciNest｜我们是谁",
    description: "为什么 SciNest 采用自带 API Key 模式：项目保存在本地，只为实际 AI 用量向服务商付费。",
    images: [{ url: "/scinest/hero-zh.svg", width: 1280, height: 800 }],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "关于 SciNest",
  url: `${siteUrl}/zh/about`,
  description: metadata.description,
  inLanguage: "zh-CN",
  isPartOf: { "@type": "WebSite", name: "SciNest", url: siteUrl },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "关于 SciNest",
  url: `${siteUrl}/zh/about`,
  inLanguage: "zh-CN",
  about: {
    "@type": "SoftwareApplication",
    name: "SciNest",
    alternateName: "科研小棉袄",
    operatingSystem: "Windows",
    applicationCategory: "ProductivityApplication",
  },
  publisher: {
    "@type": "Organization",
    name: "SciNest",
    url: siteUrl,
    founder: { "@type": "Person", name: "Margaret" },
  },
};

export default function Page() {
  return (
    <div style={{ fontFamily: '"Aptos","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif', color: "#0a2030", background: "#f9fcfb" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      <header style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.png" alt="SciNest logo" width={36} height={36} style={{ borderRadius: 8 }} />
          <a href="/zh" style={{ fontSize: 20, fontWeight: 800, color: "#0a2030", textDecoration: "none" }}>SciNest · 科研小棉袄</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LangSwitch />
          <a href="/login" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>登录</a>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: 780, margin: "0 auto", padding: "48px 28px 24px" }}>
          <p style={{ color: "#087f72", fontSize: 13, fontWeight: 850, letterSpacing: ".12em", margin: 0 }}>关于 SCINEST</p>
          <h1 style={{ fontSize: "clamp(30px,4.4vw,44px)", lineHeight: 1.15, letterSpacing: "-.02em", margin: "16px 0 20px", fontFamily: "Georgia,Times New Roman,serif" }}>我们做了自己当年最想要的科研工作区</h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#526974", margin: 0 }}>
            SciNest 是一款免费的 Windows 桌面端科研工作区，覆盖论文写作、科研绘图和答辩演示——为那些材料已经齐全、只差最后成稿的研究生和青年科研人员而做。
          </p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px" }}>
          <h2 style={{ fontSize: 23, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>我们是谁</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#42606c", margin: 0 }}>
            SciNest 由 <strong>Margaret</strong> 个人开发并运营（新西兰个体经营者）。故事始于一位执业心理咨询师：临床工作之余还要写论文、申报书和报告，厌倦了在聊天窗口和绘图软件之间来回搬运、反复解释同一份研究——于是自己动手做了想要的工具：上传一次，保持上下文，直到成稿。
          </p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px" }}>
          <h2 style={{ fontSize: 23, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>为什么采用自带 API Key 模式？</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#42606c", margin: 0 }}>
            大多数 AI 写作工具把 AI 用量打包进订阅费，并对生成次数设置上限。我们选择相反的模式，只为价格透明：
          </p>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "#42606c", margin: "12px 0 0", paddingLeft: 22 }}>
            <li>连接你自己的 ChatGPT、DeepSeek 或 Claude API Key（兼容任何 OpenAI 接口）。</li>
            <li>SciNest <strong>无订阅费、不限生成次数</strong>——Free 版含一个活跃项目；Pro 版（¥299/年，$49/年）解锁多项目与无水印导出。</li>
            <li>AI 调用费直接向服务商支付。一次完整论文草稿通常只需几美元的 API 额度，远低于按月订阅。</li>
          </ul>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px" }}>
          <h2 style={{ fontSize: 23, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>我们做什么、不做什么</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#42606c", margin: 0 }}>
            SciNest 是写作辅助工具，不是代写服务。它基于<em>你自己上传的材料</em>进行起草、组织与修改，最终文本、引用及其是否符合学校 AI 政策，均由你本人负责。我们不承诺成绩、通过或发表——也不会装作能承诺。
          </p>
        </section>

        <section style={{ maxWidth: 780, margin: "0 auto", padding: "24px 28px 56px" }}>
          <h2 style={{ fontSize: 23, fontFamily: "Georgia,Times New Roman,serif", margin: "0 0 12px" }}>联系我们</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#42606c", margin: 0 }}>
            反馈与问题报告：{" "}
            <a href="https://github.com/margaret1123/scinest-ai/issues/new/choose" target="_blank" rel="noopener noreferrer" style={{ color: "#087f72" }}>在 GitHub 提交 Issue</a>。
          </p>
          <p style={{ fontSize: 13, color: "#8599a3", margin: "28px 0 0" }}>最近更新：2026-08-31</p>
        </section>
      </main>

      <footer style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", padding: "24px 28px 40px", borderTop: "1px solid rgba(7,95,85,.1)" }}>
        <span style={{ fontSize: 14, color: "#8599a3" }}>SciNest — Crafted by Margaret, New Zealand</span>
        <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="/zh" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>首页</a>
          <a href="/privacy" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>隐私政策</a>
          <a href="/terms" style={{ fontSize: 14, color: "#42606c", textDecoration: "none" }}>服务条款</a>
        </nav>
      </footer>
    </div>
  );
}
