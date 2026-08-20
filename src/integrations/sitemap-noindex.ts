import { readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import type { AstroIntegration } from "astro";

/**
 * Removes noindex pages from the generated sitemap.
 *
 * `@astrojs/sitemap` lists every emitted route and cannot see page front
 * matter, so a page with `seo.no_index: true` would still be advertised to
 * crawlers — a mixed signal Google logs as a warning. This integration runs
 * after the sitemap is written, inspects each URL's emitted HTML, and drops
 * any entry whose robots meta tag says `noindex`.
 *
 * Keep it registered *after* `sitemap()` in `astro.config.mjs`; integration
 * hooks run in array order.
 */
const NOINDEX_META = /<meta[^>]+name=["'](?:robots|googlebot)["'][^>]+content=["'][^"']*noindex/i;

export default function sitemapNoindexFilter(): AstroIntegration {
  return {
    name: "sitemap-noindex-filter",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);

        let entries: string[];
        try {
          entries = await readdir(outDir);
        } catch {
          return;
        }

        const sitemaps = entries.filter((file) => /^sitemap-\d+\.xml$/.test(file));
        if (sitemaps.length === 0) return;

        let removed = 0;

        for (const file of sitemaps) {
          const sitemapPath = path.join(outDir, file);
          const xml = await readFile(sitemapPath, "utf8");
          const blocks = xml.match(/<url>[\s\S]*?<\/url>/g);
          if (!blocks) continue;

          let output = xml;

          for (const block of blocks) {
            const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
            if (!loc) continue;

            if (await isNoindex(outDir, loc)) {
              output = output.replace(block, "");
              removed += 1;
            }
          }

          if (output !== xml) {
            await writeFile(sitemapPath, output, "utf8");
          }
        }

        if (removed > 0) {
          logger.info(`Removed ${removed} noindex page(s) from the sitemap.`);
        }
      },
    },
  };
}

async function isNoindex(outDir: string, loc: string): Promise<boolean> {
  let pathname: string;
  try {
    pathname = new URL(loc).pathname;
  } catch {
    return false;
  }

  const relative = pathname.replace(/^\/+/, "");
  const candidate = relative.endsWith(".html") ? relative : path.join(relative, "index.html");

  try {
    const html = await readFile(path.join(outDir, candidate), "utf8");
    return NOINDEX_META.test(html);
  } catch {
    return false;
  }
}
