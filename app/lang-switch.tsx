"use client";

import { usePathname } from "next/navigation";

export function LangSwitch() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");

  // Chinese page → remove /zh prefix to get English counterpart (empty string becomes /)
  // English page → prepend /zh
  const targetPath = isZh
    ? pathname.replace(/^\/zh/, "") || "/"
    : `/zh${pathname}`;

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
