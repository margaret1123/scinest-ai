"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-client";

export function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const earlyBird = searchParams.get("intent") === "early-bird";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scinest-ai.vercel.app";
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

    router.push("/dashboard");
    router.refresh();
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

        <p style={{ marginTop: 20, textAlign: "center", color: "#607477", fontSize: 14 }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#087c75", fontWeight: 600, textDecoration: "none" }}>Sign in</a>
        </p>

        <p style={{ marginTop: 22, textAlign: "center", color: "#607477", fontSize: 13 }}>
          SciNest Free opens August 1, 2026.
        </p>
      </section>
    </main>
  );
}
