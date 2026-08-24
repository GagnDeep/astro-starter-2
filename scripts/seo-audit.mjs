import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error("❌ 'dist' directory not found. Please run 'pnpm build' first.");
  process.exit(1);
}

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const htmlFiles = walk(distDir);
let hasError = false;

// We will track local pages by URL paths they generate (assuming trailingSlash: 'always')
const validPaths = new Set();
for (const file of htmlFiles) {
  let relativePath = path.relative(distDir, file);
  if (relativePath.endsWith('index.html')) {
    relativePath = relativePath.slice(0, -10);
  }
  let linkPath = '/' + relativePath.replace(/\\/g, '/');
  validPaths.add(linkPath);
}
validPaths.add('/feed.xml');
validPaths.add('/sitemap-index.xml');
validPaths.add('/robots.txt');


for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(content);
  const doc = dom.window.document;

  const relPath = path.relative(distDir, file);

  const error = (msg) => {
    console.error(`❌ [${relPath}] ${msg}`);
    hasError = true;
  };

  // 1. Duplicate or missing title or description
  const titles = doc.querySelectorAll('title');
  if (titles.length === 0) error("Missing <title>");
  else if (titles.length > 1) error("Duplicate <title>");
  else if (!titles[0].textContent.trim()) error("Empty <title>");

  const descriptions = doc.querySelectorAll('meta[name="description"]');
  if (descriptions.length === 0) error('Missing <meta name="description">');
  else if (descriptions.length > 1) error('Duplicate <meta name="description">');
  else if (!descriptions[0].getAttribute('content').trim()) error('Empty description');

  // 2. Exactly one H1
  const h1s = doc.querySelectorAll('h1');
  if (h1s.length !== 1) error(`Found ${h1s.length} <h1> tags, expected exactly 1`);

  // 3. Missing or non-absolute canonical
  const canonicals = doc.querySelectorAll('link[rel="canonical"]');
  if (canonicals.length !== 1) error(`Found ${canonicals.length} canonical links, expected exactly 1`);
  else {
    const href = canonicals[0].getAttribute('href');
    if (!href) error("Canonical link has no href");
    else if (!href.startsWith('http://') && !href.startsWith('https://')) error(`Canonical is not absolute: ${href}`);
  }

  // 4. JSON-LD parsing and @id references
  const jsonLds = doc.querySelectorAll('script[type="application/ld+json"]');
  const ids = new Set();
  const idRefs = [];

  for (const script of jsonLds) {
    try {
      const data = JSON.parse(script.textContent);

      const findIds = (obj) => {
        if (typeof obj !== 'object' || obj === null) return;
        if (obj['@id'] && Object.keys(obj).length > 1) {
            // It's a definition if it has more than just @id (or is array of types, etc.)
            // Assuming @id is a definition if it has other properties like @type
            ids.add(obj['@id']);
        } else if (obj['@id'] && Object.keys(obj).length === 1) {
            // It's just a reference
            idRefs.push(obj['@id']);
        }
        for (const key of Object.keys(obj)) {
          if (Array.isArray(obj[key])) {
            obj[key].forEach(findIds);
          } else if (typeof obj[key] === 'object') {
            findIds(obj[key]);
          }
        }
      };
      findIds(data);
    } catch (e) {
      error(`Failed to parse JSON-LD: ${e.message}`);
    }
  }

  for (const ref of idRefs) {
    if (!ids.has(ref) && !ref.startsWith('http')) {
       error(`JSON-LD @id reference '${ref}' does not resolve to a node in the graph`);
    }
  }

  // 5. Missing Open Graph image
  const ogImages = doc.querySelectorAll('meta[property="og:image"]');
  if (ogImages.length === 0) error("Missing Open Graph image (<meta property=\"og:image\">)");

  // 6. Broken internal links & internal href without trailing slash
  const links = doc.querySelectorAll('a[href]');
  for (const link of links) {
    let href = link.getAttribute('href');

    // Ignore external links, mailto, tel, anchor links
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      continue;
    }

    // Convert to path
    let urlPath = href.split('#')[0].split('?')[0];

    if (urlPath === '') continue; // Just a hash link?

    if (!urlPath.endsWith('/') && !urlPath.includes('.')) {
      error(`Internal link lacks trailing slash: ${href}`);
    }

    // Resolve relative path to absolute root-based path for validation
    // assuming validPaths are all root-based (start with /)
    let absolutePath = urlPath;
    if (!absolutePath.startsWith('/')) {
        let currentDir = path.dirname('/' + relPath.replace(/\\/g, '/'));
        absolutePath = path.resolve(currentDir, urlPath);
    }

    // Remove query and hash for validation
    let validationPath = absolutePath.split('#')[0].split('?')[0];

    // Normalize index.html if pointing directly
    if (validationPath.endsWith('/index.html')) {
        validationPath = validationPath.slice(0, -10);
    }

    if (validationPath !== '/' && validationPath.endsWith('/') && validationPath.length > 1) {
      // Keep it as is if trailing slash is expected (it should be)
    }

    if (!validPaths.has(validationPath) && !validPaths.has(validationPath + '/') && !validPaths.has(validationPath.replace(/\/$/, ''))) {
        error(`Broken internal link: ${href} (resolves to ${validationPath})`);
    }
  }

  // 7. http:// asset
  const elementsWithSrc = doc.querySelectorAll('[src], [href]');
  for (const el of elementsWithSrc) {
      const src = el.getAttribute('src') || el.getAttribute('href');
      if (src && src.startsWith('http://') && !src.includes('localhost') && !src.includes('www.w3.org')) {
          error(`Found http:// asset: ${src}`);
      }
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log("✅ SEO audit passed.");
}
