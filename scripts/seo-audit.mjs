import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const distDir = path.join(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  console.error("❌ dist/ directory not found. Run pnpm build first.");
  process.exit(1);
}

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(distDir);
let hasErrors = false;

const allPaths = new Set();
htmlFiles.forEach(file => {
  let relativePath = file.substring(distDir.length).replace(/\\/g, '/');
  allPaths.add(relativePath);
  if (relativePath.endsWith('/index.html')) {
    allPaths.add(relativePath.replace('/index.html', '/'));
  }
});

for (const file of htmlFiles) {
  const relativePath = file.substring(distDir.length).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  const $ = cheerio.load(content);

  const errors = [];

  // Title & Description
  const titles = $('title');
  if (titles.length === 0) errors.push("Missing <title>");
  else if (titles.length > 1) errors.push(`Duplicate <title> (${titles.length})`);

  const descriptions = $('meta[name="description"]');
  if (descriptions.length === 0) errors.push("Missing meta description");
  else if (descriptions.length > 1) errors.push(`Duplicate meta description (${descriptions.length})`);

  // H1
  const h1s = $('h1');
  if (h1s.length !== 1) errors.push(`Expected exactly 1 <h1>, found ${h1s.length}`);

  // Canonical
  const canonicals = $('link[rel="canonical"]');
  if (canonicals.length === 0) {
    errors.push("Missing canonical URL");
  } else {
    const href = canonicals.attr('href');
    if (!href || !href.startsWith('http')) {
      errors.push(`Non-absolute canonical URL: ${href}`);
    }
  }

  // Open Graph Image
  const ogImages = $('meta[property="og:image"]');
  if (ogImages.length === 0) errors.push("Missing Open Graph image");

  // JSON-LD
  const jsonLds = $('script[type="application/ld+json"]');
  jsonLds.each((_, el) => {
    try {
      const data = JSON.parse($(el).html());
      const ids = new Set();

      function collectIds(obj) {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
          obj.forEach(collectIds);
        } else {
          if (obj['@id']) ids.add(obj['@id']);
          Object.values(obj).forEach(collectIds);
        }
      }
      collectIds(data);

      function checkReferences(obj) {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
          obj.forEach(checkReferences);
        } else {
          for (const [key, value] of Object.entries(obj)) {
            // Very basic check for @id references. If a value is an object with only @id, it's a ref.
            if (value && typeof value === 'object' && Object.keys(value).length === 1 && value['@id']) {
              const refId = value['@id'];
              // Ignore absolute URLs for now, only check internal # refs
              if (refId.startsWith('#') && !ids.has(refId)) {
                errors.push(`JSON-LD reference to ${refId} does not resolve`);
              }
            } else if (typeof value === 'string' && key === '@id' && !value.startsWith('http') && !value.startsWith('#') && !value.startsWith('/')) {
                // Ignore these for now, let's keep it simple
            } else {
              checkReferences(value);
            }
          }
        }
      }
      checkReferences(data);
    } catch (e) {
      errors.push(`Invalid JSON-LD: ${e.message}`);
    }
  });

  // Links
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;

    // Ignore external, mailto, tel, hashes
    if (href.startsWith('http://')) {
       errors.push(`http:// asset found in link: ${href}`);
    } else if (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      return;
    } else {
      // Internal link
      if (!href.endsWith('/') && !href.includes('.') && !href.includes('?')) {
        errors.push(`Internal href without trailing slash: ${href}`);
      }

      const cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref.endsWith('/')) {
        const checkPaths = [
          cleanHref,
          cleanHref + 'index.html',
          cleanHref.substring(0, cleanHref.length - 1) + '.html'
        ];
        if (!checkPaths.some(p => allPaths.has(p) || fs.existsSync(path.join(distDir, p)))) {
             // In dev it might not be in allPaths if it's dynamic, but dist/ should have it.
             // We can check if file exists in dist
             const targetPath = path.join(distDir, cleanHref, 'index.html');
             if (!fs.existsSync(targetPath)) {
                 errors.push(`Broken internal link: ${href}`);
             }
        }
      } else if (cleanHref.startsWith('/')) {
          const targetPath = path.join(distDir, cleanHref);
          if (!fs.existsSync(targetPath)) {
              errors.push(`Broken internal link: ${href}`);
          }
      }
    }
  });

  // Check HTTP assets
  $('[src], [href]').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('href');
      if (src && src.startsWith('http://') && !src.startsWith('http://localhost')) {
          errors.push(`http:// asset found: ${src}`);
      }
  });

  if (errors.length > 0) {
    console.error(`\n❌ ${relativePath}`);
    errors.forEach(err => console.error(`   - ${err}`));
    hasErrors = true;
  }
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log("✅ SEO Audit passed.");
}
