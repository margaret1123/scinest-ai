"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
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
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      setDone(true);
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 1500);
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
      <section style={{ width: "100%", maxWidth: 440, borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36, boxShadow: "0 20px 60px rgba(16,82,92,.10)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ width: 54, height: 54, margin: "0 auto 14px", borderRadius: 16, background: "#087c75", color: "#fff", display: "grid", placeItems: "center", fontSize: 24, fontWeight: 800 }}>S</div>
          <h1 style={{ margin: 0, color: "#102326", fontSize: 26 }}>
            {done ? "Password updated" : "Set a new password"}
          </h1>
          <p style={{ color: "#607477", lineHeight: 1.65 }}>
            {done
              ? "Your password has been changed. Redirecting to dashboard…"
              : "Choose a new password for your account."}
          </p>
        </div>

        {!done && (
          <form onSubmit={handleReset}>
            <label htmlFor="password" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>New password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" autoComplete="new-password" required
              style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 16 }} />

            <label htmlFor="confirm" style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 14 }}>Confirm new password</label>
            <input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Re-enter your password" autoComplete="new-password" required
              style={{ width: "100%", boxSizing: "border-box", border: "1px solid #b9d8d5", borderRadius: 12, padding: "13px 14px", fontSize: 16, marginBottom: 8 }} />

            {error && <p style={{ color: "#b42318", fontSize: 14, marginBottom: 12 }}>{error}</p>}

            <button type="submit" disabled={loading}
              style={{ width: "100%", border: 0, borderRadius: 999, background: "#087c75", color: "#fff", padding: 13, fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer", marginTop: 8 }}>
              {loading ? "Updating…" : "Set new password"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
