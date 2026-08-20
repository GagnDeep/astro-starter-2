#!/usr/bin/env node
/**
 * Generates Open Graph / Twitter share images (1200x630) from code — no
 * design tool, no external service.
 *
 *   pnpm assets:og                                  # site default
 *   node scripts/generate-og.mjs --title "How we cut LCP in half" \
 *        --subtitle "Engineering" --out public/images/og/lcp.png
 *
 * Then point a page at it:  seo.featured_image: /images/og/lcp.png
 *
 * Text is laid out as SVG and rasterised with sharp. Fonts come from the
 * machine running the script, so the stack sticks to faces that exist
 * everywhere; check the result before committing.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));

const args = parseArgs(process.argv.slice(2));
const title = args.title ?? site.site_title;
const subtitle = args.subtitle ?? site.tagline ?? site.description;
const outFile = path.resolve(ROOT, args.out ?? "public/images/og/og-default.png");

const WIDTH = 1200;
const HEIGHT = 630;
const FONT = "system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";
const background = site.theme_color ?? "#0f172a";
const accent = "#38bdf8";

const mark = await readFile(path.join(ROOT, "src/assets/brand/icon.svg"));
const markPng = await sharp(mark, { density: 512 }).resize(96, 96).png().toBuffer();

const titleLines = wrap(title, 26).slice(0, 3);
const subtitleLines = wrap(subtitle ?? "", 60).slice(0, 2);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${background}"/>
      <stop offset="100%" stop-color="${shade(background, -18)}"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="0" width="${WIDTH}" height="10" fill="${accent}"/>
  ${titleLines
    .map(
      (line, i) =>
        `<text x="80" y="${250 + i * 78}" font-family="${FONT}" font-size="68" font-weight="700" fill="#ffffff">${escapeXml(line)}</text>`,
    )
    .join("\n  ")}
  ${subtitleLines
    .map(
      (line, i) =>
        `<text x="80" y="${268 + titleLines.length * 78 + i * 40}" font-family="${FONT}" font-size="30" fill="#cbd5e1">${escapeXml(line)}</text>`,
    )
    .join("\n  ")}
  <text x="196" y="${HEIGHT - 68}" font-family="${FONT}" font-size="30" font-weight="600" fill="#ffffff">${escapeXml(site.site_title)}</text>
</svg>`;

await mkdir(path.dirname(outFile), { recursive: true });

const image = await sharp(Buffer.from(svg))
  .composite([{ input: markPng, left: 80, top: HEIGHT - 132 }])
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(outFile, image);

const meta = await sharp(image).metadata();
console.log(
  `Generated ${path.relative(ROOT, outFile)} — ${meta.width}x${meta.height}, ${(image.length / 1024).toFixed(1)} kB`,
);
console.log(`  title:    ${title}`);
if (subtitle) console.log(`  subtitle: ${subtitle}`);

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, "");
    if (key) out[key] = argv[i + 1];
  }
  return out;
}

/** Greedy word wrap at `max` characters — good enough for two or three lines. */
function wrap(text, max) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Lighten (positive) or darken (negative) a #rrggbb colour by `amount` percent. */
function shade(hex, amount) {
  const match = /^#?([a-f\d]{6})$/i.exec(hex);
  if (!match) return hex;
  const num = parseInt(match[1], 16);
  const channels = [num >> 16, (num >> 8) & 0xff, num & 0xff].map((c) =>
    Math.max(0, Math.min(255, Math.round(c + (255 * amount) / 100))),
  );
  return `#${channels.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}
