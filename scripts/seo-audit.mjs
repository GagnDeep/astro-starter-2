import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');

let hasError = false;

function error(msg) {
  console.error(`[SEO-AUDIT ERROR] ${msg}`);
  hasError = true;
}

if (!fs.existsSync(DIST_DIR)) {
  console.error('[SEO-AUDIT ERROR] dist/ directory not found. Run pnpm build first.');
  process.exit(1);
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const htmlFiles = walk(DIST_DIR);
const validPaths = new Set();
// Build valid paths for internal link checking
// Includes things like /about/, /blog/, /
function addValidPath(filePath) {
    let relative = filePath.replace(DIST_DIR, '');
    if (relative.endsWith('index.html')) {
        relative = relative.slice(0, -10);
    }
    if (!relative.startsWith('/')) {
        relative = '/' + relative;
    }
    validPaths.add(relative);
}

htmlFiles.forEach(addValidPath);
// Some files are just assets, we can check basic existence later

const titles = new Set();
const descriptions = new Set();

htmlFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content);
  const relativePath = filePath.replace(DIST_DIR, '') || '/';

  // Title
  const title = $('title').text().trim();
  if (!title) {
    error(`Missing title in ${relativePath}`);
  } else if (titles.has(title) && !filePath.includes('404')) {
    error(`Duplicate title found in ${relativePath}: "${title}"`);
  } else {
    titles.add(title);
  }

  // Description
  const description = $('meta[name="description"]').attr('content');
  if (!description) {
      if(!filePath.includes('404')) {
          error(`Missing description in ${relativePath}`);
      }
  } else {
      const descTrimmed = description.trim();
      if (descriptions.has(descTrimmed) && !filePath.includes('404')) {
        error(`Duplicate description found in ${relativePath}: "${descTrimmed}"`);
      } else {
        descriptions.add(descTrimmed);
      }
  }

  // H1
  const h1s = $('h1');
  if (h1s.length !== 1) {
    error(`Page must have exactly one H1, found ${h1s.length} in ${relativePath}`);
  }

  // Canonical
  const canonical = $('link[rel="canonical"]').attr('href');
  if (!canonical) {
      if(!filePath.includes('404')) {
          error(`Missing canonical link in ${relativePath}`);
      }
  } else if (!canonical.startsWith('http://') && !canonical.startsWith('https://')) {
    error(`Canonical link must be absolute, found ${canonical} in ${relativePath}`);
  }

  // Open Graph Image
  const ogImage = $('meta[property="og:image"]').attr('content');
  if (!ogImage) {
      if(!filePath.includes('404')) {
          error(`Missing Open Graph image in ${relativePath}`);
      }
  }

  // JSON-LD
  const jsonLdScripts = $('script[type="application/ld+json"]');
  jsonLdScripts.each((i, el) => {
    try {
      const data = JSON.parse($(el).html());
      // Check @id references resolution
      let ids = new Set();
      let refs = new Set();

      function walkObj(obj) {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
          obj.forEach(walkObj);
          return;
        }
        if (obj['@id']) {
          if (Object.keys(obj).length === 1) {
            refs.add(obj['@id']); // It's a reference
          } else {
            ids.add(obj['@id']); // It's a definition
          }
        }
        for (const key in obj) {
          walkObj(obj[key]);
        }
      }
      walkObj(data);

      refs.forEach(ref => {
        if (!ids.has(ref) && !ref.startsWith('http')) {
           // It's possible the ref is external, but if it's internal we check
           // In our implementation, we want to make sure all @id references resolve within the graph
           error(`JSON-LD @id reference "${ref}" does not resolve in ${relativePath}`);
        }
      });

    } catch (e) {
      error(`Invalid JSON-LD in ${relativePath}: ${e.message}`);
    }
  });

  // Links
  $('a[href]').each((i, el) => {
    const href = $(el).attr('href');
    if (href.startsWith('http://')) {
      error(`Found http:// asset link ${href} in ${relativePath}`);
    }

    if (href.startsWith('/') && !href.startsWith('//')) {
      // Internal link
      if (!href.endsWith('/') && !href.includes('.') && !href.includes('#') && !href.includes('?')) {
        error(`Internal href without trailing slash found: ${href} in ${relativePath}`);
      }

      const pathOnly = href.split('#')[0].split('?')[0];
      if (pathOnly && !pathOnly.includes('.')) {
          let checkPath = pathOnly;
          if (!checkPath.endsWith('/')) {
              checkPath += '/';
          }
          if (!validPaths.has(checkPath) && checkPath !== '/') {
              // Wait, let's verify if the file actually exists
              const expectedHtml = path.join(DIST_DIR, checkPath, 'index.html');
              if (!fs.existsSync(expectedHtml)) {
                  error(`Broken internal link: ${href} in ${relativePath}`);
              }
          }
      }
    }
  });

  // Assets (images, scripts, styles)
  $('[src], [href]').each((i, el) => {
    const src = $(el).attr('src') || $(el).attr('href');
    if (src && src.startsWith('http://')) {
       error(`Found http:// asset ${src} in ${relativePath}`);
    }
  });

});

if (hasError) {
  process.exit(1);
} else {
  console.log('[SEO-AUDIT] All checks passed.');
}
