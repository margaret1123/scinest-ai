import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/ai-powerpoint-generator",
        destination: "/ai-editable-powerpoint",
        permanent: true,
      },
      {
        source: "/zh/ai-powerpoint-generator",
        destination: "/zh/ai-editable-powerpoint",
        permanent: true,
      },
      {
        source: "/ai-thesis-writing-assistant",
        destination: "/ai-long-form-writer",
        permanent: true,
      },
      {
        source: "/zh/ai-thesis-writing-assistant",
        destination: "/zh/ai-long-form-writer",
        permanent: true,
      },
      {
        source: "/scientific-figure-generator",
        destination: "/ai-editable-images",
        permanent: true,
      },
      {
        source: "/zh/scientific-figure-generator",
        destination: "/zh/ai-editable-images",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
