import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

const distDir = path.join(process.cwd(), "dist");

if (!fs.existsSync(distDir)) {
  console.error("Error: dist/ directory not found. Run pnpm build first.");
  process.exit(1);
}

// Ensure the directory contains html files to parse
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith(".html")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getHtmlFiles(distDir);

let errors = [];
const seenTitles = new Set();
const seenDescriptions = new Set();
const validHrefs = new Set();

// Gather all output paths as valid hrefs
files.forEach((file) => {
    const relativePath = path.relative(distDir, file);
    let routePath = "/" + relativePath.replace(/\\/g, "/");
    if (routePath.endsWith("/index.html")) {
        routePath = routePath.slice(0, -10); // remove index.html, leave trailing slash
    }
    if (routePath === "") routePath = "/";
    validHrefs.add(routePath);
});

files.forEach((file) => {
  const relativePath = path.relative(distDir, file);
  // Do not parse error pages and CloudCannon internals
  if (relativePath.includes("_cloudcannon") || relativePath.startsWith("404")) {
    return;
  }

  const html = fs.readFileSync(file, "utf-8");
  const $ = cheerio.load(html);

  const title = $("title").text();
  const description = $("meta[name='description']").attr("content");

  if (!title) {
    errors.push(`${relativePath}: Missing title`);
  } else {
    if (seenTitles.has(title)) {
      errors.push(`${relativePath}: Duplicate title ("${title}")`);
    }
    seenTitles.add(title);
  }

  if (!description) {
    errors.push(`${relativePath}: Missing description`);
  } else {
    if (seenDescriptions.has(description)) {
      errors.push(`${relativePath}: Duplicate description ("${description}")`);
    }
    seenDescriptions.add(description);
  }

  const h1s = $("h1");
  if (h1s.length !== 1) {
    errors.push(`${relativePath}: Has ${h1s.length} h1 elements (must be exactly 1)`);
  }

  const canonical = $("link[rel='canonical']").attr("href");
  if (!canonical) {
    errors.push(`${relativePath}: Missing canonical tag`);
  } else if (!canonical.startsWith("http")) {
    errors.push(`${relativePath}: Canonical tag is not absolute (${canonical})`);
  }

  const ogImage = $("meta[property='og:image']").attr("content");
  if (!ogImage) {
      errors.push(`${relativePath}: Missing Open Graph image`);
  }

  const jsonLdScripts = $("script[type='application/ld+json']");
  if (jsonLdScripts.length === 0) {
      // Only an error if a page *should* have one, but starter handles it
  } else {
      jsonLdScripts.each((_, el) => {
          try {
              const parsed = JSON.parse($(el).html());
              // rudimentary graph check for @id resolution
              if (parsed["@graph"]) {
                  const ids = new Set();
                  const refs = new Set();

                  const crawl = (obj) => {
                      if (Array.isArray(obj)) {
                          obj.forEach(crawl);
                      } else if (obj !== null && typeof obj === 'object') {
                          if (obj["@id"]) {
                              ids.add(obj["@id"]);
                          }
                          for (const key of Object.keys(obj)) {
                              if (key === "id") {
                                  if (typeof obj[key] === "string" && obj[key].startsWith("http")) {
                                  }
                              } else if (key !== "@id") {
                                  if (obj[key] && typeof obj[key] === 'object') {
                                      if (obj[key]["@id"] && Object.keys(obj[key]).length === 1) {
                                          refs.add(obj[key]["@id"]);
                                      } else {
                                          crawl(obj[key]);
                                      }
                                  } else {
                                      crawl(obj[key]);
                                  }
                              }
                          }
                      }
                  };
                  crawl(parsed["@graph"]);

                  for (const ref of refs) {
                      if (!ids.has(ref) && !ref.startsWith("http")) {
                          errors.push(`${relativePath}: JSON-LD reference ${ref} does not resolve to an @id in the graph`);
                      }
                  }
              }
          } catch (e) {
              errors.push(`${relativePath}: JSON-LD parsing error - ${e.message}`);
          }
      });
  }

  $("a").each((_, a) => {
      const href = $(a).attr("href");
      if (!href) return;
      if (href.startsWith("http://")) {
          errors.push(`${relativePath}: Contains http:// asset/link (${href})`);
      }
      if (href.startsWith("/") && !href.startsWith("//")) {
          // Internal link
          if (!href.endsWith("/") && !href.includes(".") && !href.includes("#") && !href.includes("?")) {
              errors.push(`${relativePath}: Internal link without trailing slash (${href})`);
          }
          let cleanHref = href.split("#")[0].split("?")[0];
          if (cleanHref && !validHrefs.has(cleanHref)) {
              if (cleanHref !== "/" && cleanHref !== "/feed.xml") {
                 errors.push(`${relativePath}: Broken internal link to ${cleanHref}`);
              }
          }
      }
  });

  $("img, script, link, iframe").each((_, el) => {
      const src = $(el).attr("src") || $(el).attr("href");
      if (src && src.startsWith("http://")) {
          errors.push(`${relativePath}: Contains http:// asset (${src})`);
      }
  });
});

if (errors.length > 0) {
  console.error("SEO Audit failed:");
  errors.forEach(e => console.error("- " + e));
  process.exit(1);
} else {
  console.log("SEO Audit passed.");
}
