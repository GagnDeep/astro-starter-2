#!/usr/bin/env node
/**
 * SEO Audit Script
 * Validates the generated HTML files in the dist/ directory.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, extname } from "node:path";
import * as cheerio from "cheerio";

const distDir = join(process.cwd(), "dist");

async function getHtmlFiles(dir, fileList = []) {
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      await getHtmlFiles(fullPath, fileList);
    } else if (extname(file.name) === ".html") {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// Map HTML paths to routes for broken link checking
function routeFromPath(htmlPath) {
  let relative = htmlPath.replace(distDir, "");
  if (relative === "/index.html") return "/";
  if (relative.endsWith("/index.html")) {
     return relative.slice(0, -10);
  }
  return relative;
}

async function audit() {
  const files = await getHtmlFiles(distDir);
  let hasErrors = false;

  // Build a set of all valid internal routes
  const validRoutes = new Set();
  for (const file of files) {
    validRoutes.add(routeFromPath(file));
  }

  for (const file of files) {
    const relativePath = file.replace(distDir, "");
    if (relativePath.includes("/404.html")) continue;

    const content = await readFile(file, "utf8");
    const $ = cheerio.load(content);
    let fileErrors = [];
    const fileIds = new Set();

    // First pass to collect @ids in this file's JSON-LD
    const jsonLdScripts = $("script[type='application/ld+json']");
    jsonLdScripts.each((_, script) => {
        try {
            const data = JSON.parse($(script).html());
            if (data["@graph"]) {
                data["@graph"].forEach(node => {
                    if (node["@id"]) {
                        fileIds.add(node["@id"]);
                    }
                });
            } else if (data["@id"]) {
                fileIds.add(data["@id"]);
            }
        } catch (e) {
            // Handled later
        }
    });

    // Duplicate or missing title
    const titles = $("title");
    if (titles.length === 0) {
      fileErrors.push("Missing <title>");
    } else if (titles.length > 1) {
      fileErrors.push(`Duplicate <title>: found ${titles.length}`);
    } else if (!titles.text().trim()) {
      fileErrors.push("Empty <title>");
    }

    // Duplicate or missing description
    const descriptions = $("meta[name='description']");
    if (descriptions.length === 0) {
      fileErrors.push("Missing meta description");
    } else if (descriptions.length > 1) {
      fileErrors.push(`Duplicate meta description: found ${descriptions.length}`);
    } else if (!descriptions.attr("content")?.trim()) {
      fileErrors.push("Empty meta description");
    }

    // Exactly one h1
    const h1s = $("h1");
    if (h1s.length !== 1) {
      fileErrors.push(`Expected exactly one <h1>, found ${h1s.length}`);
    }

    // Missing or non-absolute canonical
    const canonicals = $("link[rel='canonical']");
    if (canonicals.length === 0) {
      fileErrors.push("Missing canonical link");
    } else {
      const href = canonicals.attr("href");
      if (!href) {
        fileErrors.push("Canonical link missing href");
      } else if (!href.startsWith("http://") && !href.startsWith("https://")) {
        fileErrors.push(`Non-absolute canonical: ${href}`);
      }
    }

    // JSON-LD that does not parse or whose @id references do not resolve
    if (jsonLdScripts.length > 0) {
        jsonLdScripts.each((_, script) => {
            try {
                const data = JSON.parse($(script).html());
                const validateRefs = (obj) => {
                    if (Array.isArray(obj)) {
                        obj.forEach(validateRefs);
                    } else if (typeof obj === 'object' && obj !== null) {
                        for (const key in obj) {
                            if (key === '@id' && !obj['@type']) {
                                const ref = obj[key];
                                if (!fileIds.has(ref)) {
                                    fileErrors.push(`JSON-LD @id reference does not resolve: ${ref}`);
                                }
                            }
                            if (typeof obj[key] === 'object') {
                                validateRefs(obj[key]);
                            }
                        }
                    }
                };
                validateRefs(data);
            } catch (e) {
                fileErrors.push(`JSON-LD parse error: ${e.message}`);
            }
        });
    }

    // Missing Open Graph image
    const ogImages = $("meta[property='og:image']");
    if (ogImages.length === 0) {
      fileErrors.push("Missing Open Graph image (og:image)");
    }

    // Broken internal link & Internal href without a trailing slash
    $("a[href]").each((_, el) => {
      let href = $(el).attr("href");
      if (!href) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#") || href.startsWith("javascript:")) return;

      // Check for trailing slash on internal links
      if (href.startsWith("/")) {
        const urlWithoutHash = href.split("#")[0].split("?")[0];
        if (urlWithoutHash !== "/" && !urlWithoutHash.endsWith("/") && !urlWithoutHash.match(/\.[a-z0-9]+$/i)) {
             fileErrors.push(`Internal href without trailing slash: ${href}`);
        }

        // Broken link check
        if (urlWithoutHash.endsWith("/")) {
            if (!validRoutes.has(urlWithoutHash)) {
                fileErrors.push(`Broken internal link: ${href}`);
            }
        } else {
             // For static assets that are linked without a trailing slash, typically won't be matched by route logic exactly
             // if it doesn't match standard routing we don't strict check it unless it's a page route
        }
      }
    });

    // http:// asset
    $("[src], [href]").each((_, el) => {
      const src = $(el).attr("src") || $(el).attr("href");
      if (src && src.startsWith("http://")) {
         // skip localhost or 127.0.0.1 for links/assets
         if (src.startsWith("http://localhost") || src.startsWith("http://127.0.0.1")) {
            return;
         }
         // if it's the schema.org context, ignore
         if (src === "http://schema.org") return;

        fileErrors.push(`http:// asset found: ${src}`);
      }
    });

    if (fileErrors.length > 0) {
      hasErrors = true;
      console.error(`\n✖ ${relativePath}`);
      fileErrors.forEach(err => console.error(`  - ${err}`));
    }
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log("✔ SEO audit passed cleanly.");
  }
}

audit().catch(err => {
  console.error(err);
  process.exit(1);
});
