"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase-client";

interface Order {
  id: string;
  product_name: string;
  amount: number;
  currency: string;
  created_at: string;
}

interface DashboardContentProps {
  email: string;
  hasFoundingEdition: boolean;
  earlyBirdEligible: boolean;
  license: string;
  orders: Order[];
  locale: "zh" | "en";
}

const t = {
  zh: {
    title: "账户与下载",
    download: "下载 SciNest",
    smartScreen: "Windows 可能提示 SmartScreen 警告，点击「更多信息」→「仍要运行」。macOS 首次打开需右键选择「打开」。",
    foundingBadge: "FOUNDING EDITION",
    foundingTitle: "Pro 授权已激活",
    foundingBody: "你拥有 SciNest Founding Edition 授权。全部功能已解锁，包括无水印导出、图层编辑和可编辑 PPT 导出。",
    proBadge: "PRO UNLOCKED",
    proTitle: "Pro 已解锁",
    proBody: "Pro 功能已就绪。无水印导出、图层编辑、可编辑 PPTX — 全部可用。",
    freeBadge: "SCINEST FREE",
    freeTitle: "SciNest Free",
    freeBody: "你当前使用 SciNest Free。升级到 Pro 解锁无水印导出、图层编辑和可编辑 PPTX。",
    buyCny: "升级 Pro · ¥299",
    buyUsd: "Upgrade · $49",
    buying: "处理中…",
    buyingEn: "Processing…",
    priceNote: "365 天 Pro 授权 · 无水印导出 · 图层编辑 · 可编辑 PPTX · 无限项目",
    foundingOrder: "已有 Founding Edition 订单",
    foundingOrderNote: "现有付费订单与授权记录保留。",
    ordersTitle: "订单记录",
    logout: "退出",
    signIn: "登录",
    compareTitle: "Free 与 Pro",
    compareFree: "Free",
    comparePro: "Pro",
    comparePriceFree: "免费",
    comparePricePro: "¥299/年",
    compareGroups: [
      {
        label: "SciNest 生成",
        rows: [
          ["不限次数生成", "✓", "✓"],
          ["活跃项目数", "1 个", "无限制"],
        ],
      },
      {
        label: "学术写作",
        rows: [
          ["长文生成与修改", "✓", "✓"],
          ["材料与引用绑定", "✓", "✓"],
          ["章节定向修改", "✓", "✓"],
        ],
      },
      {
        label: "科研图",
        rows: [
          ["科研图生成", "✓", "✓"],
          ["导出", "带水印", "无水印"],
          ["图层/标签/元素编辑", "—", "✓"],
          ["选中区域重新生成", "—", "✓"],
        ],
      },
      {
        label: "答辩 PPT",
        rows: [
          ["PPT 生成", "✓", "✓"],
          ["导出 PDF", "✓", "✓"],
          ["导出可编辑 PPTX", "—", "✓"],
        ],
      },
    ] as { label: string; rows: [string, string, string][] }[],
  },
  en: {
    title: "Account & Download",
    download: "Download SciNest",
    smartScreen: "Windows may show a SmartScreen warning — click 'More info' then 'Run anyway'. On macOS, right-click and select 'Open' for first launch.",
    foundingBadge: "FOUNDING EDITION",
    foundingTitle: "Pro License Active",
    foundingBody: "You have a SciNest Founding Edition license. All features unlocked — watermark-free export, layer editing, and editable PPTX.",
    proBadge: "PRO UNLOCKED",
    proTitle: "Pro Unlocked",
    proBody: "All Pro features ready — watermark-free export, layer editing, editable PPTX.",
    freeBadge: "SCINEST FREE",
    freeTitle: "SciNest Free",
    freeBody: "You're on SciNest Free. Upgrade to Pro for watermark-free export, layer editing, and editable PPTX.",
    buyCny: "Upgrade Pro · ¥299",
    buyUsd: "Upgrade · $49",
    buying: "Processing…",
    buyingEn: "Processing…",
    priceNote: "365-day Pro license · Watermark-free · Layer editing · Editable PPTX · Unlimited projects",
    foundingOrder: "Founding Edition Order",
    foundingOrderNote: "Existing order and license records are preserved.",
    ordersTitle: "Order History",
    logout: "Sign out",
    signIn: "Sign in",
    compareTitle: "Free vs Pro",
    compareFree: "Free",
    comparePro: "Pro",
    comparePriceFree: "Free",
    comparePricePro: "$49/year",
    compareGroups: [
      {
        label: "SciNest Generations",
        rows: [
          ["Unlimited generations", "✓", "✓"],
          ["Active projects", "1", "Unlimited"],
        ],
      },
      {
        label: "Academic Writing",
        rows: [
          ["Long-form generation & revision", "✓", "✓"],
          ["Source & reference binding", "✓", "✓"],
          ["Section-level editing", "✓", "✓"],
        ],
      },
      {
        label: "Scientific Figures",
        rows: [
          ["Figure generation", "✓", "✓"],
          ["Export", "Watermarked", "Watermark-free"],
          ["Layer, label & element editing", "—", "✓"],
          ["Selected-area regeneration", "—", "✓"],
        ],
      },
      {
        label: "Defense Presentations",
        rows: [
          ["Presentation generation", "✓", "✓"],
          ["Export as PDF", "✓", "✓"],
          ["Export as editable PPTX", "—", "✓"],
        ],
      },
    ] as { label: string; rows: [string, string, string][] }[],
  },
} as const;

export function DashboardContent({ email, hasFoundingEdition, earlyBirdEligible, license, orders, locale }: DashboardContentProps) {
  const router = useRouter();
  const c = t[locale];

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(`/${locale === "zh" ? "zh" : ""}`);
    router.refresh();
  };

  const [buying, setBuying] = useState(false);
  const [buyError, setBuyError] = useState<string | null>(null);

  const handlePurchase = async (market: "cny" | "usd") => {
    if (buying) return;
    setBuying(true);
    setBuyError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ market }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setBuyError(data.error || "Checkout unavailable");
        setBuying(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setBuyError("Network error. Please try again.");
      setBuying(false);
    }
  };

  const formatAmount = (order: Order) => {
    const currency = order.currency?.toUpperCase() || "CNY";
    return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US", {
      style: "currency",
      currency,
    }).format(order.amount / 100);
  };

  const isPro = license === "pro_founding" || license === "early_bird_pro";

  return (
    <div style={{ minHeight: "100vh", background: "#f7fbfb", color: "#102326" }}>
      <header style={{ borderBottom: "1px solid #dcebea", background: "#fff", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href={`/${locale === "zh" ? "zh" : ""}`} style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit", textDecoration: "none" }}>
          <span style={{ width: 38, height: 38, borderRadius: 12, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>S</span>
          <strong>SciNest{locale === "zh" ? " · 科研小棉袄" : ""}</strong>
        </a>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={locale === "zh" ? "/" : "/zh"} style={{ color: "#607477", fontSize: 13, textDecoration: "none" }}>{locale === "zh" ? "EN" : "中文"}</a>
          <span style={{ color: "#607477", fontSize: 14 }}>{email}</span>
          <button onClick={handleLogout} style={{ border: "1px solid #b9d8d5", borderRadius: 999, background: "#fff", padding: "8px 16px", cursor: "pointer" }}>{c.logout}</button>
        </div>
      </header>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ marginBottom: 8 }}>{c.title}</h1>

        {/* ── Download section ── */}
        <section style={{ marginTop: 24, padding: 24, borderRadius: 20, background: "#fff", border: "1px solid #dcebea" }}>
          <h2 style={{ marginTop: 0 }}>{c.download}</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
            <a href="https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.exe" style={{ padding: "10px 18px", borderRadius: 10, background: "#0D9488", color: "#fff", textDecoration: "none", fontWeight: 700 }}>Windows</a>
            <a href="https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-mac-arm64.dmg" style={{ padding: "10px 18px", borderRadius: 10, background: "#f1f8f7", color: "#0D9488", textDecoration: "none" }}>macOS</a>
            <a href="https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-linux-x86_64.AppImage" style={{ padding: "10px 18px", borderRadius: 10, background: "#f1f8f7", color: "#0D9488", textDecoration: "none" }}>Linux</a>
          </div>
          <p style={{ color: "#94A3A8", fontSize: 13, margin: 0 }}>{c.smartScreen}</p>
        </section>

        {/* ── License status ── */}
        {license === "pro_founding" ? (
          <section style={{ marginTop: 32, padding: 32, borderRadius: 24, background: "#0c2d32", color: "#fff", border: "1px solid #1a4a52" }}>
            <p style={{ color: "#72e3d4", fontWeight: 700, marginTop: 0 }}>{c.foundingBadge}</p>
            <h2>{c.foundingTitle}</h2>
            <p style={{ color: "#c2dad7", lineHeight: 1.7 }}>{c.foundingBody}</p>
          </section>
        ) : (
          <section style={{ marginTop: 32, padding: 32, borderRadius: 24, background: isPro ? "#0c2d32" : "#fff", color: isPro ? "#fff" : "#102326", border: "1px solid #dcebea" }}>
            <p style={{ color: isPro ? "#72e3d4" : "#087c75", fontWeight: 700, marginTop: 0 }}>{isPro ? c.proBadge : c.freeBadge}</p>
            <h2>{isPro ? c.proTitle : c.freeTitle}</h2>
            <p style={{ color: isPro ? "#c2dad7" : "#607477", lineHeight: 1.7 }}>
              {isPro ? c.proBody : c.freeBody}
            </p>
          </section>
        )}

        {/* ── Free vs Pro comparison ── */}
        <section style={{ marginTop: 32, padding: 28, borderRadius: 20, background: "#fff", border: "1px solid #dcebea" }}>
          <h2 style={{ margin: "0 0 20px", fontSize: 20 }}>{c.compareTitle}</h2>

          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 0, marginBottom: 0 }}>
            <div />
            <div style={{ textAlign: "center", padding: "12px 8px", background: "#f1f8f7", borderRadius: "10px 0 0 0", fontWeight: 800, color: "#087569", fontSize: 15 }}>{c.compareFree}</div>
            <div style={{ textAlign: "center", padding: "12px 8px", background: "#0c2d32", borderRadius: "0 10px 0 0", fontWeight: 800, color: "#72e3d4", fontSize: 15 }}>{c.comparePro}</div>
          </div>
          {/* Price row */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 0, borderBottom: "1px solid #edf4f3" }}>
            <div />
            <div style={{ textAlign: "center", padding: "8px", background: "#f1f8f7", color: "#087569", fontWeight: 700, fontSize: 18 }}>{c.comparePriceFree}</div>
            <div style={{ textAlign: "center", padding: "8px", background: "#0c2d32", color: "#fff", fontWeight: 700, fontSize: 18 }}>{c.comparePricePro}</div>
          </div>

          {c.compareGroups.map((group) => (
            <div key={group.label}>
              <div style={{ padding: "14px 0 6px", fontSize: 12, fontWeight: 800, color: "#94A3A8", textTransform: "uppercase", letterSpacing: "0.08em" }}>{group.label}</div>
              {group.rows.map(([feature, free, pro]) => (
                <div key={feature} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 0, borderBottom: "1px solid #f5f8f7", alignItems: "center" }}>
                  <div style={{ padding: "10px 8px 10px 0", fontSize: 14, color: "#314554" }}>{feature}</div>
                  <div style={{ textAlign: "center", padding: "10px 4px", fontSize: 13, color: free === "✓" ? "#087569" : free === "—" ? "#d0d5d9" : "#607477", fontWeight: free === "✓" ? 700 : 400 }}>{free}</div>
                  <div style={{ textAlign: "center", padding: "10px 4px", fontSize: 13, color: pro === "✓" ? "#087569" : pro === "—" ? "#d0d5d9" : "#087569", fontWeight: pro === "✓" ? 700 : 400, background: "#fafdfc" }}>{pro}</div>
                </div>
              ))}
            </div>
          ))}

          {/* Purchase CTA for Free users */}
          {!isPro && (
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => handlePurchase("cny")}
                  disabled={buying}
                  style={{ padding: "12px 28px", borderRadius: 12, background: "#0D9488", color: "#fff", border: "none", fontWeight: 700, fontSize: 15, cursor: buying ? "wait" : "pointer" }}
                >
                  {buying ? c.buying : c.buyCny}
                </button>
                <button
                  onClick={() => handlePurchase("usd")}
                  disabled={buying}
                  style={{ padding: "12px 28px", borderRadius: 12, background: "#f1f8f7", color: "#0D9488", border: "1px solid #0D9488", fontWeight: 600, fontSize: 14, cursor: buying ? "wait" : "pointer" }}
                >
                  {buying ? c.buyingEn : c.buyUsd}
                </button>
              </div>
              {buyError && <p style={{ color: "#dc2626", fontSize: 13, marginTop: 8 }}>{buyError}</p>}
              <p style={{ color: "#94A3A8", fontSize: 12, marginTop: 8, marginBottom: 0 }}>{c.priceNote}</p>
            </div>
          )}
        </section>

        {hasFoundingEdition && (
          <section style={{ marginTop: 24, padding: 24, borderRadius: 20, background: "#fff", border: "1px solid #dcebea" }}>
            <strong>{c.foundingOrder}</strong>
            <p style={{ color: "#607477", marginBottom: 0 }}>{c.foundingOrderNote}</p>
          </section>
        )}

        {orders.length > 0 && (
          <section style={{ marginTop: 24, padding: 32, borderRadius: 24, background: "#fff", border: "1px solid #dcebea" }}>
            <h2 style={{ marginTop: 0 }}>{c.ordersTitle}</h2>
            {orders.map((order) => <div key={order.id} style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "14px 0", borderBottom: "1px solid #edf4f3" }}><div><strong>{order.product_name}</strong><div style={{ color: "#607477", fontSize: 13 }}>{new Date(order.created_at).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US")}</div></div><strong style={{ color: "#087c75" }}>{formatAmount(order)}</strong></div>)}
          </section>
        )}
      </main>
    </div>
  );
}
