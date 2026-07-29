"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-client";

type Mode = "password" | "magiclink";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";
  const earlyBird = searchParams.get("intent") === "early-bird";

  const [mode, setMode] = useState<Mode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scinest-ai.vercel.app";

  // ── Password login ──────────────────────────────────────────
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    } else {
      router.push(redirect);
      router.refresh();
    }
  };

  // ── Magic Link login ────────────────────────────────────────
  const handleMagicLinkLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: loginError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${siteUrl}/auth/callback?next=${encodeURIComponent(redirect)}`,
      },
    });

    if (loginError) setError(loginError.message);
    else setSent(true);
    setLoading(false);
  };

  // ── Forgot password ─────────────────────────────────────────
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${siteUrl}/auth/callback?next=/reset-password`,
    });

    if (resetError) setError(resetError.message);
    else setSent(true);
    setLoading(false);
  };

  // ── Render ──────────────────────────────────────────────────
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 440, borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36, boxShadow: "0 20px 60px rgba(16,82,92,.10)" }}>
        {/* header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 54, height: 54, margin: "0 auto 14px", borderRadius: 16, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontSize: 24, fontWeight: 800 }}>S</div>
          <h1 style={{ margin: 0, color: "#102326", fontSize: 26 }}>
            {sent ? "Check your email" : earlyBird ? "Claim 30 days of SciNest Pro" : "Sign in to SciNest"}
          </h1>
          <p style={{ color: "#607477", lineHeight: 1.65 }}>
            {sent
              ? "Open the link we sent. If you requested a password reset, you will be able to set a new password."
              : earlyBird
                ? "Register before August 1. No credit card, no automatic charge."
                : "Sign in with your email and password."}
          </p>
        </div>

        {!sent ? (
          <>
            {/* tab switcher */}
            <div style={{ display: "flex", marginBottom: 24, borderRadius: 12, background: "#edf4f3", padding: 3 }}>
              <button
                onClick={() => setMode("password")}
                style={{
                  flex: 1, padding: "10px 0", border: 0, borderRadius: 10,
                  background: mode === "password" ? "#fff" : "transparent",
                  color: mode === "password" ? "#102326" : "#607477",
                  fontWeight: mode === "password" ? 700 : 500,
                  cursor: "pointer", fontSize: 14, boxShadow: mode === "password" ? "0 1px 4px rgba(0,0,0,.08)" : "none",
                }}
              >
                Password
              </button>
              <button
                onClick={() => setMode("magiclink")}
                style={{
                  flex: 1, padding: "10px 0", border: 0, borderRadius: 10,
                  background: mode === "magiclink" ? "#fff" : "transparent",
                  color: mode === "magiclink" ? "#102326" : "#607477",
                  fontWeight: mode === "magiclink" ? 700 : 500,
                  cursor: "pointer", fontSize: 14, boxShadow: mode === "magiclink" ? "0 1px 4px rgba(0,0,0,.08)" : "none",
                }}
              >
                Magic Link
              </button>
            </div>

            {/* password form */}
            {mode === "password" && (
              <form onSubmit={handlePasswordLogin}>
                <label htmlFor="email" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" autoComplete="email" required
                  style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 16 }} />

                <label htmlFor="password" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Password</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" autoComplete="current-password" required
                  style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 8 }} />

                <div style={{ textAlign: "right", marginBottom: 16 }}>
                  <button type="button" onClick={handleForgotPassword}
                    style={{ border: 0, background: "none", color: "#087c75", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                    Forgot password?
                  </button>
                </div>

                {error && <p style={{ color: "#b42318", fontSize: 14, marginBottom: 12 }}>{error}</p>}

                <button type="submit" disabled={loading}
                  style={{ width: "100%", border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: 13, fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer" }}>
                  {loading ? "Signing in…" : "Sign in"}
                </button>
              </form>
            )}

            {/* magic link form */}
            {mode === "magiclink" && (
              <form onSubmit={handleMagicLinkLogin}>
                <label htmlFor="email-ml" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Email</label>
                <input id="email-ml" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" autoComplete="email" required
                  style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 16 }} />

                {error && <p style={{ color: "#b42318", fontSize: 14, marginBottom: 12 }}>{error}</p>}

                <button type="submit" disabled={loading}
                  style={{ width: "100%", border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: 13, fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer" }}>
                  {loading ? "Sending…" : "Send sign-in link"}
                </button>
              </form>
            )}

            {/* register link */}
            <p style={{ marginTop: 20, textAlign: "center", color: "#607477", fontSize: 14 }}>
              Don&apos;t have an account?{" "}
              <a href={`/register${earlyBird ? "?intent=early-bird" : ""}`} style={{ color: "#087c75", fontWeight: 600, textDecoration: "none" }}>
                Create one
              </a>
            </p>
          </>
        ) : (
          <button onClick={() => { setSent(false); setEmail(""); }}
            style={{ width: "100%", border: "1px solid #b9d8d5", borderRadius: 999, background: "#fff", padding: 13, fontWeight: 700, cursor: "pointer" }}>
            Use another email
          </button>
        )}

        <p style={{ marginTop: 22, textAlign: "center", color: "#607477", fontSize: 13 }}>
          <a href="https://github.com/margaret1123/scinest-ai/releases/latest" style={{color: "#0D9488"}}>Download SciNest Free</a> · Available now for Windows
        </p>
      </section>
    </main>
  );
}
