import type { Metadata } from "next";
import styles from "./scientific-figure-generator.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scinest-ai.vercel.app";
const registerUrl = "/login?redirect=/dashboard&intent=early-bird";

export const metadata: Metadata = {
  title: "AI Scientific Figure Generator With Editable Layers | SciNest",
  description: