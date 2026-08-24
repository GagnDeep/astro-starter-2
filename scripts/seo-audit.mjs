#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';

const dist = path.join(process.cwd(), 'dist');

async function *walk(dir) {
  for await (const d of await fs.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile() && entry.endsWith('.html')) yield entry;
  }
}

async function *walkAll(dir) {
  for await (const d of await fs.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walkAll(entry);
    else if (d.isFile()) yield entry;
  }
}

async function runAudit() {
  const htmlFiles = [];
  try {
    for await (const p of walk(dist)) htmlFiles.push(p);
  } catch (e) {
    console.error("No dist folder found.");
    process.exit(1);
  }

  const titles = new Map();
  const descriptions = new Map();
  let failures = 0;

  function fail(file, msg) {
    console.error(`FAIL [${file}]: ${msg}`);
    failures++;
  }

  const allFilePaths = new Set();
  for await (const p of walkAll(dist)) {
    allFilePaths.add('/' + path.relative(dist, p).replace(/\\/g, '/'));
  }

  for (const file of htmlFiles) {
    const relFile = '/' + path.relative(dist, file).replace(/\\/g, '/');
    const content = await fs.readFile(file, 'utf8');
    const $ = cheerio.load(content);

    // Title
    const titleTags = $('title');
    if (titleTags.length !== 1) {
      fail(relFile, `Missing or multiple <title> (${titleTags.length})`);
    } else {
      const t = titleTags.text().trim();
      if (!t) fail(relFile, 'Empty title');
      if (titles.has(t) && !relFile.includes('404')) {
        if (titles.get(t) !== relFile) {
          fail(relFile, `Duplicate title "${t}" (also on ${titles.get(t)})`);
        }
      } else {
        titles.set(t, relFile);
      }
    }

    // Description
    const descTags = $('meta[name="description"]');
    if (descTags.length !== 1) {
      if (!relFile.includes('404')) fail(relFile, `Missing or multiple description meta (${descTags.length})`);
    } else {
      const d = descTags.attr('content')?.trim();
      if (!d) fail(relFile, 'Empty description');
      if (descriptions.has(d) && !relFile.includes('404')) {
        if (descriptions.get(d) !== relFile) {
          fail(relFile, `Duplicate description "${d}" (also on ${descriptions.get(d)})`);
        }
      } else {
        descriptions.set(d, relFile);
      }
    }

    // H1
    const h1s = $('h1');
    if (h1s.length !== 1) {
      fail(relFile, `Must have exactly one <h1>, found ${h1s.length}`);
    }

    // Canonical
    const canonical = $('link[rel="canonical"]').attr('href');
    if (!canonical || !canonical.startsWith('http')) {
      if (!relFile.includes('404')) fail(relFile, `Missing or non-absolute canonical (${canonical})`);
    }

    // OG Image
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (!ogImage) {
      if (!relFile.includes('404')) fail(relFile, `Missing Open Graph image`);
    }

    // JSON-LD
    const jsonLds = $('script[type="application/ld+json"]');
    jsonLds.each((i, el) => {
      try {
        const data = JSON.parse($(el).html());
        const graph = data['@graph'] || (Array.isArray(data) ? data : [data]);
        const ids = new Set();
        const refs = new Set();

        function checkValue(v) {
          if (!v || typeof v !== 'object') return;
          if (Array.isArray(v)) {
            v.forEach(checkValue);
            return;
          }
          if (v['@id'] && Object.keys(v).length === 1) {
            refs.add(v['@id']);
          } else {
            walkJson(v);
          }
        }

        function walkJson(obj) {
          if (!obj || typeof obj !== 'object') return;
          if (Array.isArray(obj)) {
            obj.forEach(walkJson);
            return;
          }
          if (obj['@id']) ids.add(obj['@id']);
          for (const [k, v] of Object.entries(obj)) {
            checkValue(v);
          }
        }
        walkJson(graph);

        for (const ref of refs) {
          if (!ids.has(ref) && !ref.startsWith('http')) {
            fail(relFile, `JSON-LD @id reference "${ref}" does not resolve to a declared @id`);
          }
        }
      } catch (e) {
        fail(relFile, `JSON-LD parse error: ${e.message}`);
      }
    });

    // Links
    $('a[href]').each((i, el) => {
      const href = $(el).attr('href');
      if (href.startsWith('http://')) {
        fail(relFile, `http:// asset in href: ${href}`);
      }
      if (href.startsWith('/')) {
        if (!href.endsWith('/') && !href.includes('.') && !href.includes('#') && !href.includes('?')) {
          fail(relFile, `Internal href without trailing slash: ${href}`);
        }

        const cleanHref = href.split('#')[0].split('?')[0];
        if (cleanHref) {
          let fileToFind1 = cleanHref;
          if (cleanHref.endsWith('/')) {
            fileToFind1 = cleanHref + 'index.html';
          }

          if (!allFilePaths.has(fileToFind1) && !allFilePaths.has(cleanHref)) {
            fail(relFile, `Broken internal link: ${href}`);
          }
        }
      }
    });

    // http:// assets
    $('[src]').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.startsWith('http://') && !src.includes('localhost')) {
        fail(relFile, `http:// asset in src: ${src}`);
      }
    });
  }

  if (failures > 0) {
    console.error(`\nSEO Audit failed with ${failures} errors.`);
    process.exit(1);
  }
  console.log("SEO Audit passed.");
}
runAudit();
