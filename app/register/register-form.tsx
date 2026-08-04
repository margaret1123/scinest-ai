"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { trackEvent } from "@/lib/gtag";

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

export function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const earlyBird = searchParams.get("intent") === "early-bird";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scinest.app";
    const supabase = createClient();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${siteUrl}/auth/callback?next=/dashboard`,
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("Account created! Please sign in.");
      setLoading(false);
      setTimeout(() => router.push("/login"), 1500);
      return;
    }

    // Set 7-day Pro license for new accounts
    const userId = signUpData.user?.id;
    if (userId) {
      fetch("/api/auth/set-license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }).catch(() => {}); // fire-and-forget, non-blocking
    }

    trackEvent("sign_up", { method: "email" });
    router.push("/dashboard");
    router.refresh();
  };

  // ── Google OAuth ────────────────────────────────────────────
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scinest.app";

  const handleGoogleLogin = async () => {
    setLoadingGoogle(true);
    setError("");

    const supabase = createClient();
    trackEvent("sign_up", { method: "google" });
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/callback?next=/dashboard`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      setLoadingGoogle(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 440, borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36, boxShadow: "0 20px 60px rgba(16,82,92,.10)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 54, height: 54, margin: "0 auto 14px", borderRadius: 16, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontSize: 24, fontWeight: 800 }}>S</div>
          <h1 style={{ margin: 0, color: "#102326", fontSize: 26 }}>
            {earlyBird ? "Create your SciNest account" : "Create your SciNest account"}
          </h1>
          <p style={{ color: "#607477", lineHeight: 1.65 }}>
            {earlyBird
              ? "Pro is unlocked for new accounts."
              : "One account for the web dashboard and the desktop app."}
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <label htmlFor="email" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" autoComplete="email" required
            style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 16 }} />

          <label htmlFor="password" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" autoComplete="new-password" required
            style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 16 }} />

          <label htmlFor="confirm" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Confirm password</label>
          <input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Re-enter your password" autoComplete="new-password" required
            style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 8 }} />

          {error && <p style={{ color: error.includes("created") ? "#087c75" : "#b42318", fontSize: 14, marginBottom: 12 }}>{error}</p>}

          <button type="submit" disabled={loading}
            style={{ width: "100%", border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: 13, fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer", marginTop: 8 }}>
            {loading ? "Creating account…" : earlyBird ? "Create account" : "Create account"}
          </button>
        </form>

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

        <p style={{ marginTop: 20, textAlign: "center", color: "#607477", fontSize: 14 }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#087c75", fontWeight: 600, textDecoration: "none" }}>Sign in</a>
        </p>

        <p style={{ marginTop: 22, textAlign: "center", color: "#607477", fontSize: 13 }}>
          SciNest Free for Windows. New accounts start with Pro unlocked.
        </p>
      </section>
    </main>
  );
}
