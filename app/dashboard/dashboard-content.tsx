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
}

export function DashboardContent({ email, hasFoundingEdition, earlyBirdEligible, license, orders }: DashboardContentProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
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
    const currency = order.currency?.toUpperCase() || "CNY";
    return new Intl.NumberFormat("zh-CN", { style: "currency", currency }).format(order.amount / 100);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7fbfb", color: "#102326" }}>
      <header style={{ borderBottom: "1px solid #dcebea", background: "#fff", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit", textDecoration: "none" }}>
          <span style={{ width: 38, height: 38, borderRadius: 12, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>S</span>
          <strong>SciNest · 科研小棉袄</strong>
        </a>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}><span style={{ color: "#607477", fontSize: 14 }}>{email}</span><button onClick={handleLogout} style={{ border: "1px solid #b9d8d5", borderRadius: 999, background: "#fff", padding: "8px 16px", cursor: "pointer" }}>退出</button></div>
      </header>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ marginBottom: 8 }}>账户与下载</h1>

        {/* ── Download section ── */}
        <section style={{ marginTop: 24, padding: 24, borderRadius: 20, background: "#fff", border: "1px solid #dcebea" }}>
          <h2 style={{ marginTop: 0 }}>下载 SciNest</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
            <a href="https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-win-x64.exe" style={{ padding: "10px 18px", borderRadius: 10, background: "#0D9488", color: "#fff", textDecoration: "none", fontWeight: 700 }}>Windows</a>
            <a href="https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-mac-arm64.dmg" style={{ padding: "10px 18px", borderRadius: 10, background: "#f1f8f7", color: "#0D9488", textDecoration: "none" }}>macOS</a>
            <a href="https://github.com/margaret1123/scinest-ai/releases/latest/download/SciNest-linux-x86_64.AppImage" style={{ padding: "10px 18px", borderRadius: 10, background: "#f1f8f7", color: "#0D9488", textDecoration: "none" }}>Linux</a>
          </div>
          <p style={{ color: "#94A3A8", fontSize: 13, margin: 0 }}>Windows 可能提示 SmartScreen 警告，点击「更多信息」→「仍要运行」。macOS 首次打开需右键选择「打开」。</p>
        </section>

        {license === "pro_founding" ? (
          <section style={{ marginTop: 32, padding: 32, borderRadius: 24, background: "#0c2d32", color: "#fff", border: "1px solid #1a4a52" }}>
            <p style={{ color: "#72e3d4", fontWeight: 700, marginTop: 0 }}>FOUNDING EDITION</p>
            <h2>永久 Pro 授权已激活</h2>
            <p style={{ color: "#c2dad7", lineHeight: 1.7 }}>你拥有 SciNest Founding Edition 永久授权。全部功能已解锁，包括无水印导出、图层编辑和可编辑 PPT 导出。</p>
          </section>
        ) : (
          <section style={{ marginTop: 32, padding: 32, borderRadius: 24, background: earlyBirdEligible ? "#0c2d32" : "#fff", color: earlyBirdEligible ? "#fff" : "#102326", border: "1px solid #dcebea" }}>
            <p style={{ color: earlyBirdEligible ? "#72e3d4" : "#087c75", fontWeight: 700, marginTop: 0 }}>{earlyBirdEligible ? "EARLY BIRD PRO" : "SCINEST FREE"}</p>
            <h2>{earlyBirdEligible ? "30天 Pro 资格已锁定" : "账户已注册"}</h2>
            <p style={{ color: earlyBirdEligible ? "#c2dad7" : "#607477", lineHeight: 1.7 }}>
              {earlyBirdEligible
                ? "你已获得30天 SciNest Pro。无需银行卡，不会自动扣费；到期后自动回到 Free。"
                : "你当前使用 SciNest Free。升级到 Pro 解锁无水印导出、图层编辑和可编辑 PPTX。"}
            </p>
            {!earlyBirdEligible && (
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    onClick={() => handlePurchase("cny")}
                    disabled={buying}
                    style={{ padding: "12px 24px", borderRadius: 12, background: "#0D9488", color: "#fff", border: "none", fontWeight: 700, fontSize: 15, cursor: buying ? "wait" : "pointer" }}
                  >
                    {buying ? "处理中…" : "立即升级 Pro · ¥88"}
                  </button>
                  <button
                    onClick={() => handlePurchase("usd")}
                    disabled={buying}
                    style={{ padding: "12px 24px", borderRadius: 12, background: "#f1f8f7", color: "#0D9488", border: "1px solid #0D9488", fontWeight: 600, fontSize: 14, cursor: buying ? "wait" : "pointer" }}
                  >
                    {buying ? "Processing…" : "Upgrade · $12"}
                  </button>
                </div>
                {buyError && (
                  <p style={{ color: "#dc2626", fontSize: 13, marginTop: 8 }}>{buyError}</p>
                )}
                <p style={{ color: "#94A3A8", fontSize: 12, marginTop: 8, marginBottom: 0 }}>
                  365 天 Pro 授权 · 无水印导出 · 图层编辑 · 可编辑 PPTX · 无限项目
                </p>
              </div>
            )}
          </section>
        )}

        {hasFoundingEdition && (
          <section style={{ marginTop: 24, padding: 24, borderRadius: 20, background: "#fff", border: "1px solid #dcebea" }}>
            <strong>已有 Founding Edition 订单</strong>
            <p style={{ color: "#607477", marginBottom: 0 }}>现有付费订单与授权记录保留，不受预开放页面调整影响。</p>
          </section>
        )}

        {orders.length > 0 && (
          <section style={{ marginTop: 24, padding: 32, borderRadius: 24, background: "#fff", border: "1px solid #dcebea" }}>
            <h2 style={{ marginTop: 0 }}>订单记录</h2>
            {orders.map((order) => <div key={order.id} style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "14px 0", borderBottom: "1px solid #edf4f3" }}><div><strong>{order.product_name}</strong><div style={{ color: "#607477", fontSize: 13 }}>{new Date(order.created_at).toLocaleDateString("zh-CN")}</div></div><strong style={{ color: "#087c75" }}>{formatAmount(order)}</strong></div>)}
          </section>
        )}
      </main>
    </div>
  );
}