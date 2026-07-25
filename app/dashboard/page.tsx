import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { DashboardContent } from "./dashboard-content";

const EARLY_BIRD_CUTOFF = new Date("2026-08-01T00:00:00+12:00").getTime();

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
  const earlyBirdEligible = new Date(user.created_at).getTime() < EARLY_BIRD_CUTOFF;
  const license = (user.app_metadata as Record<string, string> | undefined)?.license ?? "free";

  return <DashboardContent email={user.email!} hasFoundingEdition={hasFoundingEdition || false} earlyBirdEligible={earlyBirdEligible} license={license} orders={orders || []} />;
}