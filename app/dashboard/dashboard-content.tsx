"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { useState } from "react";

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
  orders: Order[];
}

export function DashboardContent({
  email,
  hasFoundingEdition,
  orders,
}: DashboardContentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const handleBuy = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ market: "cny" }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "暂时无法开始付款，请稍后再试。");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("网络连接失败，请稍后再试。");
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (order: Order) => {
    const currency = order.currency?.toUpperCase() || "CNY";
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency,
    }).format(order.amount / 100);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7fbfb", color: "#102326" }}>
      <header style={{ borderBottom: "1px solid #dcebea", background: "#fff", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, color: "inherit", textDecoration: "none" }}>
          <span style={{ width: 38, height: 38, borderRadius: 12, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>S</span>
          <strong>SciNest · 科研小棉袄</strong>
        </a>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ color: "#607477", fontSize: 14 }}>{email}</span>
          <button onClick={handleLogout} style={{ border: "1px solid #b9d8d5", borderRadius: 999, background: "#fff", padding: "8px 16px", cursor: "pointer" }}>退出</button>
        </div>
      </header>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ marginBottom: 8 }}>账户与授权</h1>
        <p style={{ color: "#607477", marginTop: 0 }}>查看 SciNest Personal · Founding Edition 的购买与授权状态。</p>

        <section style={{ marginTop: 32, padding: 32, borderRadius: 24, background: "#fff", border: "1px solid #dcebea" }}>
          <p style={{ color: "#087c75", fontWeight: 700, marginTop: 0 }}>SciNest Personal · Founding Edition</p>
          {hasFoundingEdition ? (
            <>
              <h2>授权已生效</h2>
              <p style={{ color: "#607477" }}>包含 12 个月功能更新；更新期结束后，已购买版本仍可继续使用。</p>
              <div style={{ padding: 16, borderRadius: 14, background: "#f1f8f7", color: "#40595c" }}>
                下载与设备授权入口将在交付文件完成验证后开放。当前页面不会提供无效下载链接。
              </div>
            </>
          ) : (
            <>
              <h2>尚未购买</h2>
              <p style={{ color: "#607477" }}>创始价格 ¥299。模型服务商 API 调用费不包含在软件授权中。</p>
              <button onClick={handleBuy} disabled={loading} style={{ border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: "13px 24px", fontWeight: 700, cursor: loading ? "wait" : "pointer" }}>
                {loading ? "正在准备付款…" : "购买 Founding Edition"}
              </button>
              {error && <p style={{ color: "#b42318", marginBottom: 0 }}>{error}</p>}
            </>
          )}
        </section>

        {orders.length > 0 && (
          <section style={{ marginTop: 24, padding: 32, borderRadius: 24, background: "#fff", border: "1px solid #dcebea" }}>
            <h2 style={{ marginTop: 0 }}>订单记录</h2>
            {orders.map((order) => (
              <div key={order.id} style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "14px 0", borderBottom: "1px solid #edf4f3" }}>
                <div>
                  <strong>{order.product_name}</strong>
                  <div style={{ color: "#607477", fontSize: 13 }}>{new Date(order.created_at).toLocaleDateString("zh-CN")}</div>
                </div>
                <strong style={{ color: "#087c75" }}>{formatAmount(order)}</strong>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
