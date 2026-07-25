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
  const earlyBird = searchParams.get("intent") === "early-bird";

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: loginError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirect)}` },
    });

    if (loginError) setError(loginError.message);
    else setSent(true);
    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 440, borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36, boxShadow: "0 20px 60px rgba(16,82,92,.10)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 54, height: 54, margin: "0 auto 14px", borderRadius: 16, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontSize: 24, fontWeight: 800 }}>S</div>
          <h1 style={{ margin: 0, color: "#102326", fontSize: 26 }}>{sent ? "Check your email" : earlyBird ? "Claim 30 days of SciNest Pro" : "Sign in to SciNest"}</h1>
          <p style={{ color: "#607477", lineHeight: 1.65 }}>
            {sent ? "Open the secure sign-in link we sent. Your pre-launch registration is recorded when the account is created." : earlyBird ? "Register before August 1. No credit card, no automatic charge. Pro begins when downloads open." : "Enter your email and we will send a secure sign-in link."}
          </p>
        </div>
        {!sent ? (
          <form onSubmit={handleLogin}>
            <label htmlFor="email" style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>Email</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16 }} />
            {error && <p style={{ color: "#b42318", fontSize: 14 }}>{error}</p>}
            <button type="submit" disabled={loading} style={{ width: "100%", marginTop: 18, border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: 13, fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer" }}>{loading ? "Sending…" : earlyBird ? "Claim early-bird Pro" : "Send sign-in link"}</button>
          </form>
        ) : (
          <button onClick={() => { setSent(false); setEmail(""); }} style={{ width: "100%", border: "1px solid #b9d8d5", borderRadius: 999, background: "#fff", padding: 13, fontWeight: 700, cursor: "pointer" }}>Use another email</button>
        )}
        <p style={{ marginTop: 22, textAlign: "center", color: "#607477", fontSize: 13 }}>SciNest Free opens August 1, 2026. Downloads and public payment are not open yet.</p>
      </section>
    </main>
  );
}
