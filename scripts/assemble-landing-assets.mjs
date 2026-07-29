import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const partDir = path.join(root, "scripts", "landing-assets");
const outputDir = path.join(root, "public", "scinest");

const assets = [
  {
    name: "PPT outline proof",
    prefix: "ppt-outline-edit-proof-v3",
    partCount: 5,
    bytes: 37434,
    sha256: "1657376b35d2bf2d98cff65672d55827bbdd2bb31540f47c3e47cec9991eb61c",
    outputs: ["ppt-outline-edit-proof-v3.webp"],
  },
  {
    name: "writing workspace proof",
    prefix: "writing-ui-proof-v3",
    partCount: 4,
    bytes: 40426,
    sha256: "0935b60ff22efd580f67a072a896f74d222290b7c7cb23d4292b6bff2002ec31",
    outputs: ["writing-workspace-proof-v3.webp", "writing-long-form-proof-v3.webp"],
  },
];

function assertWebP(buffer, asset) {
  if (buffer.length !== asset.bytes) {
    throw new Error(`${asset.name}: expected ${asset.bytes} bytes, received ${buffer.length}`);
  }
  if (buffer.subarray(0, 4).toString("ascii") !== "RIFF" || buffer.subarray(8, 12).toString("ascii") !== "WEBP") {
    throw new Error(`${asset.name}: decoded payload is not a WebP file`);
  }
  const digest = createHash("sha256").update(buffer).digest("hex");
  if (digest !== asset.sha256) {
    throw new Error(`${asset.name}: SHA-256 mismatch (${digest})`);
  }
}

function svgWrapper(imagePath, width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><image href="${imagePath}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/></svg>`;
}

await mkdir(outputDir, { recursive: true });

for (const asset of assets) {
  const chunks = [];
  for (let index = 0; index < asset.partCount; index += 1) {
    const suffix = String(index).padStart(2, "0");
    const filename = path.join(partDir, `${asset.prefix}.${suffix}.b64part`);
    chunks.push((await readFile(filename, "utf8")).trim());
  }

  const buffer = Buffer.from(chunks.join(""), "base64");
  assertWebP(buffer, asset);

  for (const output of asset.outputs) {
    await writeFile(path.join(outputDir, output), buffer);
    console.log(`[landing-assets] wrote ${output} (${buffer.length} bytes)`);
  }
}

await writeFile(
  path.join(outputDir, "ppt-outline-edit-proof-en.svg"),
  svgWrapper("/scinest/ppt-outline-edit-proof-v3.webp", 900, 570),
);
await writeFile(
  path.join(outputDir, "writing-long-form-hero-en.svg"),
  svgWrapper("/scinest/writing-workspace-proof-v3.webp", 800, 507),
);
await writeFile(
  path.join(outputDir, "writing-long-form-edit-en.svg"),
  svgWrapper("/scinest/writing-long-form-proof-v3.webp", 800, 507),
);
console.log("[landing-assets] replaced legacy SVG wrappers with verified screenshot references");
