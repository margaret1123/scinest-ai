import { permanentRedirect } from "next/navigation";

export default function LegacyEnglishHomePage() {
  permanentRedirect("/");
}
