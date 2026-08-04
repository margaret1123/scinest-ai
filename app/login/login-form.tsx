"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { trackEvent } from "@/lib/gtag";

type Mode = "password" | "magiclink";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

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
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scinest.app";

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
      trackEvent("login", { method: "password" });
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
    else { setSent(true); trackEvent("login", { method: "magiclink" }); }
    setLoading(false);
  };

  // ── Google OAuth ────────────────────────────────────────────
  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);
    setError("");

    const supabase = createClient();
    trackEvent("login", { method: "google" });
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/callback?next=${encodeURIComponent(redirect)}`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      setLoadingGoogle(false);
    }
    // On success the browser redirects to Google — no need to reset loading
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
            {sent ? "Check your email" : earlyBird ? "Sign in to SciNest" : "Sign in to SciNest"}
          </h1>
          <p style={{ color: "#607477", lineHeight: 1.65 }}>
            {sent
              ? "Open the link we sent. If you requested a password reset, you will be able to set a new password."
              : earlyBird
                ? "New accounts start with Pro unlocked."
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

            {/* Google OAuth divider + button */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20, marginBottom: 20 }}>
              <hr style={{ flex: 1, border: 0, borderTop: "1px solid #dcebea" }} />
              <span style={{ color: "#94A3A8", fontSize: 13, flexShrink: 0 }}>or</span>
              <hr style={{ flex: 1, border: 0, borderTop: "1px solid #dcebea" }} />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loadingGoogle}
              style={{
                width: "100%",
                border: "1px solid #b9d8d5",
                borderRadius: 999,
                background: "#fff",
                color: "#314554",
                padding: "11px 13px",
                fontSize: 15,
                fontWeight: 600,
                cursor: loadingGoogle ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <GoogleIcon />
              {loadingGoogle ? "Connecting to Google…" : "Continue with Google"}
            </button>

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
          SciNest Free for Windows. New accounts start with Pro unlocked.
        </p>
      </section>
    </main>
  );
}
