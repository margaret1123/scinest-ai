"use client";

import { usePathname } from "next/navigation";

export function LangSwitch() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");

  // Chinese page → remove /zh prefix to get English counterpart (empty string becomes /)
  // English page → prepend /zh
  // Solo pages (no twin in the other locale) link to the other locale's home instead.
  const overrides: Record<string, string> = {
    "/best-ai-tools-for-thesis-writing": "/zh",
    "/zh/literature-review-assistant": "/",
  };
  const targetPath =
    overrides[pathname] ??
    (isZh ? pathname.replace(/^\/zh/, "") || "/" : `/zh${pathname}`);

  return (
    <a
      href={targetPath}
      style={{
        fontSize: 13,
        fontWeight: 650,
        color: "#087f72",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      {isZh ? "EN" : "中文"}
    </a>
  );
}
