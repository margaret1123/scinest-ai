import { cookies } from "next/headers";
import { SciNestHome } from "./scinest-home";

export default async function HomePage() {
  const cookieStore = await cookies();
  cookieStore.set("preferred_lang", "en", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  return <SciNestHome locale="en" />;
}
