"use client";

import { trackEvent } from "@/lib/gtag";

interface DownloadCTAProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  placement: "nav" | "hero" | "final";
}

export function DownloadCTA({ href, className, children, placement }: DownloadCTAProps) {
  const handleClick = () => {
    trackEvent("download_click", { placement, os: "windows" });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
