import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const results: string[] = [];
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL" }, { status: 500 });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // ── Step 1: Execute SQL trigger ──────────────────────────
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
    const { error: sqlError } = await supabaseAdmin.rpc("exec_sql", { sql });
    if (sqlError) {
      // exec_sql RPC might not exist; try raw SQL via REST
      const resp = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${serviceRoleKey}`,
          apikey: serviceRoleKey,
        },
        body: JSON.stringify({ sql }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        results.push(`SQL trigger: FAILED — ${JSON.stringify(data)}. You may need to run supabase-schema.sql manually in Supabase SQL Editor.`);
      } else {
        results.push("SQL trigger: OK");
      }
    } else {
      results.push("SQL trigger: OK (RPC)");
    }
  } catch (e: any) {
    results.push(`SQL trigger: ERROR — ${e.message}. Please run supabase-schema.sql manually.`);
  }

  // ── Step 2: Update Site URL ──────────────────────────────
  try {
    const settingsResp = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceRoleKey}`,
        apikey: serviceRoleKey,
      },
      body: JSON.stringify({
        site_url: "https://scinest-ai.vercel.app",
        uri_allow_list: "https://scinest-ai.vercel.app,https://kmate-wab.vercel.app",
      }),
    });
    if (settingsResp.ok) {
      results.push("Site URL: updated to https://scinest-ai.vercel.app");
    } else {
      const errData = await settingsResp.text();
      results.push(`Site URL: FAILED — ${settingsResp.status} ${errData}`);
    }
  } catch (e: any) {
    results.push(`Site URL: ERROR — ${e.message}`);
  }

  return NextResponse.json({ done: true, results });
}
