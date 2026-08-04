"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-client";

export default function DesktopAuthPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    (async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getSession();
      const session = data?.session;

      if (!session) {
        setStatus("error");
        return;
      }

      const params = new URLSearchParams();
      params.set("access_token", session.access_token);
      params.set("refresh_token", session.refresh_token ?? "");
      const url = `scinest://auth-callback#${params.toString()}`;

      setStatus("success");
      window.location.href = url;
    })();
  }, []);

  if (status === "error") {
    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
        <section style={{ maxWidth: 440, textAlign: "center", borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36 }}>
          <h1 style={{ color: "#102326" }}>No active session</h1>
          <p style={{ color: "#607477" }}>
            Please sign in again in the SciNest desktop app.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f7fbfb", padding: 24 }}>
      <section style={{ maxWidth: 440, textAlign: "center", borderRadius: 24, background: "#fff", border: "1px solid #dcebea", padding: 36 }}>
        <h1 style={{ color: "#102326" }}>Returning to SciNest…</h1>
        <p style={{ color: "#607477", lineHeight: 1.65 }}>
          If nothing happens, make sure SciNest is installed and{' '}
          <a href="scinest://auth-callback" style={{ color: "#087c75" }}>click here</a>.
        </p>
      </section>
    </main>
  );
}
