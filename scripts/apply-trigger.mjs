// 在 Supabase 上重建 auth.set_license_on_signup trigger
// 使用 service_role key（有 auth schema 权限）
// 用法: node scripts/apply-trigger.mjs

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function main() {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error("❌ 缺少环境变量 NEXT_PUBLIC_SUPABASE_URL 或 SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const sql = `
CREATE OR REPLACE FUNCTION auth.set_license_on_signup()
RETURNS TRIGGER AS $$
DECLARE
  expiry timestamptz := NEW.created_at + INTERVAL '7 days';
BEGIN
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
    // 通过 Supabase PostgreSQL REST 接口执行 SQL
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/rpc/pgsql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_KEY}`,
        apikey: SERVICE_KEY,
      },
      body: JSON.stringify({ query: sql }),
    });

    if (!resp.ok) {
      // 回退：通过 Supabase Management API
      const projectId = SUPABASE_URL.match(/https:\/\/(.+)\.supabase\.co/)?.[1] || "";
      console.log("RPC 方式失败，尝试 Management API…");

      const mgmtResp = await fetch(
        `https://api.supabase.com/v1/projects/${projectId}/query`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SERVICE_KEY}`,
          },
          body: JSON.stringify({ query: sql }),
        }
      );

      if (!mgmtResp.ok) {
        const err = await mgmtResp.text();
        console.error("❌ 两种方式都失败了:", err.substring(0, 300));
        process.exit(1);
      }
    }

    console.log("✅ Trigger 已更新 — 所有新用户注册即获得 7 天 Pro");
  } catch (e) {
    console.error("❌ 执行失败:", e.message);
    process.exit(1);
  }
}

main();
