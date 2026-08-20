#!/usr/bin/env node
/**
 * Generates every favicon / app icon from one source SVG.
 *
 *   pnpm assets:icons
 *
 * Source:  src/assets/brand/icon.svg   (square, 512x512 viewBox)
 * Outputs: public/favicon.svg
 *          public/meta/favicon-16x16.png, favicon-32x32.png, favicon.ico
 *          public/meta/apple-touch-icon.png            (180, opaque background)
 *          public/meta/icon-192.png, icon-512.png      (PWA / Android)
 *          public/meta/icon-512-maskable.png           (safe-zone padded)
 *          public/site.webmanifest                     (from data/site.json)
 *
 * Nothing here runs during `astro build` — regenerate deliberately, commit the
 * output. Verify afterwards with `pnpm assets:check`.
 */
import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "src/assets/brand/icon.svg");
const PUBLIC = path.join(ROOT, "public");
const META = path.join(PUBLIC, "meta");

const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const background = site.theme_color ?? "#ffffff";

const svg = await readFile(SOURCE);

await mkdir(META, { recursive: true });

/** Render the source SVG at `size`, optionally flattened onto the theme colour. */
async function render(size, { opaque = false, padding = 0 } = {}) {
  const inner = Math.round(size * (1 - padding * 2));
  let image = sharp(svg, { density: 512 }).resize(inner, inner, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

  if (padding > 0) {
    const edge = Math.round((size - inner) / 2);
    image = image.extend({
      top: edge,
      bottom: size - inner - edge,
      left: edge,
      right: size - inner - edge,
      background: opaque ? background : { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }

  if (opaque) image = image.flatten({ background });

  return image.png({ compressionLevel: 9 }).toBuffer();
}

/**
 * Wrap a PNG in an ICO container. Every browser in use today reads PNG-encoded
 * .ico files, and it avoids pulling in an extra dependency.
 */
function pngToIco(png, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  header.writeUInt8(size >= 256 ? 0 : size, 6); // width
  header.writeUInt8(size >= 256 ? 0 : size, 7); // height
  header.writeUInt8(0, 8); // palette
  header.writeUInt8(0, 9); // reserved
  header.writeUInt16LE(1, 10); // colour planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(png.length, 14); // payload size
  header.writeUInt32LE(22, 18); // payload offset
  return Buffer.concat([header, png]);
}

const written = [];
async function write(file, data) {
  await writeFile(file, data);
  written.push(`${path.relative(ROOT, file)} (${(data.length / 1024).toFixed(1)} kB)`);
}

// Vector favicon — the one modern browsers prefer.
await copyFile(SOURCE, path.join(PUBLIC, "favicon.svg"));
written.push("public/favicon.svg");

await write(path.join(META, "favicon-16x16.png"), await render(16));
await write(path.join(META, "favicon-32x32.png"), await render(32));
await write(path.join(META, "favicon.ico"), pngToIco(await render(32), 32));
// iOS ignores transparency, so this one is flattened onto the theme colour.
await write(path.join(META, "apple-touch-icon.png"), await render(180, { opaque: true }));
await write(path.join(META, "icon-192.png"), await render(192));
await write(path.join(META, "icon-512.png"), await render(512));
// Maskable icons are cropped to a circle by Android: keep art in the middle 80%.
await write(
  path.join(META, "icon-512-maskable.png"),
  await render(512, { opaque: true, padding: 0.1 }),
);

const manifest = {
  name: site.site_title,
  short_name: site.organization?.name ?? site.site_title,
  description: site.description,
  lang: site.lang ?? "en",
  start_url: "/",
  scope: "/",
  display: "standalone",
  background_color: background,
  theme_color: background,
  icons: [
    { src: "/meta/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/meta/icon-512.png", sizes: "512x512", type: "image/png" },
    {
      src: "/meta/icon-512-maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};
await write(path.join(PUBLIC, "site.webmanifest"), Buffer.from(JSON.stringify(manifest, null, 2) + "\n"));

console.log("Generated icons from src/assets/brand/icon.svg:");
for (const line of written) console.log(`  ${line}`);
