"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: loginError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirect)}`,
      },
    });

    if (loginError) {
      setError(loginError.message);
    } else {
      setSent(true);
    }

    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 420, borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36, boxShadow: "0 20px 60px rgba(16,82,92,.10)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 54, height: 54, margin: "0 auto 14px", borderRadius: 16, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontSize: 24, fontWeight: 800 }}>S</div>
          <h1 style={{ margin: 0, color: "#102326", fontSize: 26 }}>
            {sent ? "登录邮件已发送" : "登录 SciNest"}
          </h1>
          <p style={{ color: "#607477", lineHeight: 1.6 }}>
            {sent ? "请打开邮箱中的安全登录链接。" : "输入邮箱，我们会发送一次性登录链接。"}
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleLogin}>
            <label htmlFor="email" style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>邮箱</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              autoComplete="email"
              required
              style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16 }}
            />
            {error && <p style={{ color: "#b42318", fontSize: 14 }}>{error}</p>}
            <button type="submit" disabled={loading} style={{ width: "100%", marginTop: 18, border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: 13, fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer" }}>
              {loading ? "正在发送…" : "发送登录链接"}
            </button>
          </form>
        ) : (
          <button onClick={() => { setSent(false); setEmail(""); }} style={{ width: "100%", border: "1px solid #b9d8d5", borderRadius: 999, background: "#fff", padding: 13, fontWeight: 700, cursor: "pointer" }}>
            更换邮箱
          </button>
        )}

        <p style={{ marginTop: 22, textAlign: "center", color: "#607477", fontSize: 13 }}>
          无需设置密码。登录后可查看授权和订单状态。
        </p>
      </section>
    </main>
  );
}
