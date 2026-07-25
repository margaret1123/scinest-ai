"use client";

import { useRouter } from "next/navigation";
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

  const formatAmount = (order: Order) => {
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
        <h1 style={{ marginBottom: 8 }}>账户与预开放资格</h1>
        <p style={{ color: "#607477", marginTop: 0 }}>SciNest Free 计划于 2026 年 8 月 1 日开放 Windows 下载。</p>

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
              {earlyBirdEligible ? "下载开放后，你将获得30天 SciNest Pro。无需银行卡，不会自动扣费；到期后自动回到 Free。" : "你可以在下载开放后使用 SciNest Free。公开付款目前未开放。"}
            </p>
            <div style={{ padding: 16, borderRadius: 14, background: earlyBirdEligible ? "rgba(255,255,255,.08)" : "#f1f8f7", color: earlyBirdEligible ? "#d8efec" : "#40595c" }}>
              下载入口将在安装包完成验证后开放。当前页面不会提供无效下载链接。
            </div>
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