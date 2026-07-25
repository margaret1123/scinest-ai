// Vercel build-time Supabase setup
// Runs during `npm run build` on Vercel, where all env vars are available

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function main() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    console.log("[setup-supabase] Missing SUPABASE_URL or SERVICE_ROLE_KEY, skipping.");
    return;
  }

  console.log("[setup-supabase] Starting…");

  // ── 1. Execute SQL trigger ────────────────────────────────
  const sql = `
CREATE OR REPLACE FUNCTION auth.set_license_on_signup()
RETURNS TRIGGER AS $$
DECLARE
  cutoff timestamptz := '2026-08-01T00:00:00+12:00'::timestamptz;
  expiry  timestamptz := '2026-09-01T00:00:00Z'::timestamptz;
BEGIN
  IF NEW.created_at < cutoff THEN
    NEW.raw_app_meta_data = jsonb_set(
      COALESCE(NEW.raw_app_meta_data, '{}'::jsonb),
      '{license}',
      '"early_bird_pro"'
    );
    NEW.raw_app_meta_data = jsonb_set(
      NEW.raw_app_meta_data,
      '{early_bird_expires_at}',
      to_jsonb(expiry)
    );
  ELSE
    NEW.raw_app_meta_data = jsonb_set(
      COALESCE(NEW.raw_app_meta_data, '{}'::jsonb),
      '{license}',
      '"free"'
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION auth.set_license_on_signup();
`;

  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/rpc/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        apikey: SERVICE_ROLE_KEY,
        Prefer: "params=single-object",
      },
      body: JSON.stringify({ sql }),
    });

    // The default RPC endpoint may not support raw SQL.
    // Fall back to using the SQL API via the management endpoint.
    if (!resp.ok) {
      console.log("[setup-supabase] RPC fallback, trying SQL API…");
      const mgmtResp = await fetch(`https://api.supabase.com/v1/projects/eiuszpszszdgwpermjfr/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        },
        body: JSON.stringify({ query: sql }),
      });
      if (mgmtResp.ok) {
        console.log("[setup-supabase] SQL trigger created via management API.");
      } else {
        const err = await mgmtResp.text();
        console.log("[setup-supabase] SQL trigger: management API failed —", err.substring(0, 200));
        console.log("[setup-supabase] Please run supabase-schema.sql manually in SQL Editor.");
      }
    } else {
      console.log("[setup-supabase] SQL trigger created via RPC.");
    }
  } catch (e) {
    console.log("[setup-supabase] SQL trigger error:", e.message);
    console.log("[setup-supabase] Please run supabase-schema.sql manually in SQL Editor.");
  }

  // ── 2. Update Site URL ────────────────────────────────────
  try {
    const settingsResp = await fetch(`${SUPABASE_URL}/auth/v1/settings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        apikey: SERVICE_ROLE_KEY,
      },
      body: JSON.stringify({
        site_url: "https://scinest-ai.vercel.app",
        uri_allow_list: "https://scinest-ai.vercel.app,https://kmate-wab.vercel.app",
      }),
    });
    if (settingsResp.ok) {
      console.log("[setup-supabase] Site URL updated to https://scinest-ai.vercel.app");
    } else {
      const errText = await settingsResp.text();
      console.log(`[setup-supabase] Site URL update failed: ${settingsResp.status} — ${errText.substring(0, 200)}`);
    }
  } catch (e) {
    console.log("[setup-supabase] Site URL update error:", e.message);
  }

  console.log("[setup-supabase] Done.");
}

main().catch((e) => {
  console.error("[setup-supabase] Fatal:", e.message);
  // Never fail the build
  process.exit(0);
});
