import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/scinest/ppt-outline-edit-proof-en.svg",
        destination: "/scinest/ppt-outline-edit-verified.webp",
      },
      {
        source: "/scinest/ppt-outline-edit-en.svg",
        destination: "/scinest/ppt-outline-edit-verified.webp",
      },
      {
        source: "/scinest/writing-long-form-hero-en.svg",
        destination: "/scinest/writing-ui-verified.webp",
      },
      {
        source: "/scinest/writing-long-form-edit-en.svg",
        destination: "/scinest/writing-long-form-verified.webp",
      },
      {
        source: "/scinest/writing-ui-en.webp",
        destination: "/scinest/writing-ui-verified.webp",
      },
    ];
  },
};

export default nextConfig;
