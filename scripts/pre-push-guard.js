// Pre-push guard — this repo is PUBLIC. Blocks pushes that would expose
// credentials, personal machine paths, or local-only tooling.
// Wired into .git/hooks/pre-push (local install only; see header of the hook file).
//
// Banned paths:   .claude/, video-production/, docs/superpowers/, docs/seo-geo-checklist.md,
//                 scripts/ga-*.js, scripts/pdf-text.js, *-rak.json, scinest-auth*.json, .env*
// Banned content: sk_live_/rk_live_ keys, Google API keys, private keys,
//                 absolute local paths, service-account emails
//
// To push anyway with full knowledge (e.g. deliberate teardown): git push --no-verify
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// --install: (re)create .git/hooks/pre-push after a fresh clone
if (process.argv.includes("--install")) {
  const hook = path.join(__dirname, "..", ".git", "hooks", "pre-push");
  fs.writeFileSync(hook, [
    "#!/bin/sh",
    "# SciNest public-repo guard (installed by scripts/pre-push-guard.js --install)",
    'node "$(git rev-parse --show-toplevel)/scripts/pre-push-guard.js" <&0 || exit 1',
    "",
  ].join("\n"));
  console.log("Installed", hook);
  process.exit(0);
}

const BANNED_PATHS = [
  /(^|\/)\.claude\//,
  /(^|\/)video-production\//,
  /(^|\/)docs\/superpowers\//,
  /(^|\/)docs\/seo-geo-checklist\.md$/,
  /(^|\/)scripts\/ga-.*\.js$/,
  /(^|\/)scripts\/pdf-text\.js$/,
  /-rak\.json$/,
  /scinest-auth.*\.json$/,
  /\.env(\.local)?$/,
];

const BANNED_CONTENT = [
  /C:\/Users\//,
  /sk_live_[0-9A-Za-z]{10,}/,
  /rk_live_[0-9A-Za-z]{10,}/,
  /AIza[0-9A-Za-z_-]{30,}/,
  /BEGIN [A-Z ]*PRIVATE KEY/,
  new RegExp('"private_' + "key_id\""), // split so this file doesn't self-match
  /gserviceaccount\.com/,
];

const input = fs.readFileSync(0, "utf8").trim();
if (!input) process.exit(0);

let failed = [];

function checkNames(names) {
  for (const name of names.split("\n").filter(Boolean)) {
    for (const re of BANNED_PATHS) {
      if (re.test(name)) failed.push(`banned path in push: ${name}`);
    }
  }
}

function checkContent(diff) {
  for (const line of diff.split("\n")) {
    if (!line.startsWith("+")) continue;
    for (const re of BANNED_CONTENT) {
      if (re.test(line)) failed.push(`banned content in push: ${line.slice(0, 100)}`);
    }
  }
}

const EMPTY_TREE = "4b825dc642cb6eb9a060e54bf8d69288fbee4904"; // git's canonical empty tree

for (const line of input.split("\n")) {
  const [localRef, localSha, , remoteSha] = line.split(" ");
  // New branch (remoteSha all zeros) → diff against the empty tree so the
  // whole history of the branch is scanned, not just the tip.
  const base = remoteSha && !/^0+$/.test(remoteSha) ? remoteSha : EMPTY_TREE;
  try {
    // ACM only: deletions are the fix, never the leak
    checkNames(execSync(`git diff-tree -r --diff-filter=ACM --name-only ${base} ${localSha}`, { encoding: "utf8" }));
    checkContent(execSync(`git diff ${base} ${localSha}`, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }));
  } catch (e) {
    failed.push(`guard error on ${localRef}: ${String(e.message).slice(0, 120)}`);
  }
}

if (failed.length) {
  console.error("\n✋ PRE-PUSH GUARD BLOCKED THIS PUSH — repo is public:\n");
  for (const f of failed) console.error("  " + f);
  console.error("\n  Override only if intentional: git push --no-verify\n");
  process.exit(1);
}
process.exit(0);
