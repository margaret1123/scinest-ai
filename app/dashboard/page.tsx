import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { createClient } from "@/lib/supabase-server";
import { DashboardContent } from "./dashboard-content";

async function detectLocale(): Promise<"zh" | "en"> {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("preferred_lang")?.value;
  if (langCookie === "zh" || langCookie === "en") return langCookie;

  const headersList = await headers();
  const acceptLang = headersList.get("accept-language") || "";
  if (acceptLang.toLowerCase().includes("zh")) return "zh";

  return "en";
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login?redirect=/dashboard");

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .eq("status", "paid")
    .order("created_at", { ascending: false });

  const hasFoundingEdition = orders?.some((order: { product_id?: string }) => order.product_id === "scinest_founding");
  const license = (user.app_metadata as Record<string, string> | undefined)?.license ?? "free";
  const locale = await detectLocale();

  return <DashboardContent email={user.email!} hasFoundingEdition={hasFoundingEdition || false} earlyBirdEligible={license === "early_bird_pro"} license={license} orders={orders || []} locale={locale} />;
}
