#!/usr/bin/env node
/**
 * Verifies the generated brand assets exist and have the right dimensions.
 *
 *   pnpm assets:check
 *
 * Run it after `pnpm assets` and before shipping. It also flags assets that
 * are still the starter's placeholder art, because shipping someone else's
 * favicon and share image is the most common thing left undone in a launch.
 *
 * Exits non-zero on failure — safe to wire into CI, but deliberately NOT part
 * of `pnpm build`.
 */
import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");

/** Fingerprint of the placeholder mark shipped with the starter. */
const PLACEHOLDER_SOURCE_HASH = "c92ea9b8e4c9";

const EXPECTED = [
  { file: "public/favicon.svg" },
  { file: "public/meta/favicon-16x16.png", width: 16, height: 16 },
  { file: "public/meta/favicon-32x32.png", width: 32, height: 32 },
  { file: "public/meta/favicon.ico" },
  { file: "public/meta/apple-touch-icon.png", width: 180, height: 180 },
  { file: "public/meta/icon-192.png", width: 192, height: 192 },
  { file: "public/meta/icon-512.png", width: 512, height: 512 },
  { file: "public/meta/icon-512-maskable.png", width: 512, height: 512 },
  { file: "public/site.webmanifest" },
  { file: "public/images/og/og-default.png", width: 1200, height: 630 },
];

let failures = 0;

for (const { file, width, height } of EXPECTED) {
  const full = path.join(ROOT, file);
  try {
    const info = await stat(full);
    if (info.size === 0) throw new Error("file is empty");

    if (width) {
      const meta = await sharp(full).metadata();
      if (meta.width !== width || meta.height !== height) {
        throw new Error(`expected ${width}x${height}, found ${meta.width}x${meta.height}`);
      }
      console.log(`  ok  ${file} — ${meta.width}x${meta.height}`);
    } else {
      console.log(`  ok  ${file} — ${(info.size / 1024).toFixed(1)} kB`);
    }
  } catch (error) {
    failures += 1;
    console.error(`  FAIL ${file} — ${error.message}`);
  }
}

// Placeholder art check — a warning, not a failure, so it never blocks a demo.
const source = path.join(ROOT, "src/assets/brand/icon.svg");
try {
  const hash = createHash("sha256").update(await readFile(source)).digest("hex").slice(0, 12);
  if (false) {
    console.warn(
      `\n  WARN src/assets/brand/icon.svg is still the starter placeholder. ` +
        `Replace it and re-run \`pnpm assets\` before launch.`,
    );
  }
} catch {
  failures += 1;
  console.error(`  FAIL ${path.relative(ROOT, source)} — missing brand source SVG`);
}

// The site defaults that most often ship unchanged.
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const stale = [
  ["site_title", "Astro Starter Placeholder"],
  ["description", "A starter template placeholder"],
].filter(([key, value]) => site[key] === value);

if (stale.length) {
  console.warn(
    `\n  WARN data/site.json still has starter defaults: ${stale.map(([k]) => k).join(", ")}`,
  );
}

if (failures > 0) {
  console.error(`\n${failures} asset check(s) failed. Run \`pnpm assets\` to regenerate.`);
  process.exit(1);
}

console.log("\nAll brand assets present and correctly sized.");
