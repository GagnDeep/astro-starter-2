import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

let errors = [];
let htmlFiles = [];
let allHrefs = new Set();
let pageLinks = {}; // file -> [links]

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findHtmlFiles(fullPath);
        } else if (fullPath.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(distDir);

let titles = new Set();
let descriptions = new Set();

for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const root = parse(content);
    const relativePath = path.relative(distDir, file);

    const titleEl = root.querySelector('title');
    if (!titleEl) {
        errors.push(`${relativePath}: Missing title`);
    } else {
        const title = titleEl.textContent;
        if (titles.has(title)) {
            errors.push(`${relativePath}: Duplicate title "${title}"`);
        }
        titles.add(title);
    }

    const descEl = root.querySelector('meta[name="description"]');
    if (!descEl) {
        errors.push(`${relativePath}: Missing description`);
    } else {
        const desc = descEl.getAttribute('content');
        if (descriptions.has(desc)) {
            errors.push(`${relativePath}: Duplicate description "${desc}"`);
        }
        descriptions.add(desc);
    }

    const h1s = root.querySelectorAll('h1');
    if (h1s.length !== 1) {
        errors.push(`${relativePath}: Has ${h1s.length} h1 elements, must be exactly one`);
    }

    const canonicalEl = root.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
        errors.push(`${relativePath}: Missing canonical link`);
    } else {
        const canonicalUrl = canonicalEl.getAttribute('href');
        if (!canonicalUrl || !canonicalUrl.startsWith('http')) {
            errors.push(`${relativePath}: Non-absolute canonical "${canonicalUrl}"`);
        }
    }

    const jsonLds = root.querySelectorAll('script[type="application/ld+json"]');
    let ids = new Set();
    for (const jsonLd of jsonLds) {
        try {
            const data = JSON.parse(jsonLd.textContent);
            function collectIds(obj) {
                if (Array.isArray(obj)) {
                    obj.forEach(collectIds);
                } else if (obj !== null && typeof obj === 'object') {
                    if (obj['@id']) {
                        ids.add(obj['@id']);
                    }
                    for (const key in obj) {
                        collectIds(obj[key]);
                    }
                }
            }
            collectIds(data);
        } catch (e) {
            errors.push(`${relativePath}: Invalid JSON-LD - ${e.message}`);
        }
    }
    // simple check - if we have an @id reference that isn't defined, it's an error. But actually, cross-referencing happens globally. We'll skip for now if too complex or just check if it resolves in the same document.
    for (const jsonLd of jsonLds) {
        try {
            const data = JSON.parse(jsonLd.textContent);
            function checkRefs(obj) {
                if (Array.isArray(obj)) {
                    obj.forEach(checkRefs);
                } else if (obj !== null && typeof obj === 'object') {
                    if (obj['@id'] && Object.keys(obj).length === 1) {
                        if (!ids.has(obj['@id'])) {
                             errors.push(`${relativePath}: JSON-LD @id reference does not resolve: ${obj['@id']}`);
                        }
                    }
                    for (const key in obj) {
                        checkRefs(obj[key]);
                    }
                }
            }
            checkRefs(data);
        } catch (e) {}
    }


    const ogImageEl = root.querySelector('meta[property="og:image"]');
    if (!ogImageEl) {
        errors.push(`${relativePath}: Missing Open Graph image`);
    }

    // check links
    const aTags = root.querySelectorAll('a');
    pageLinks[file] = [];
    for (const a of aTags) {
        let href = a.getAttribute('href');
        if (href) {
            // Strip query params and hash for internal link checks
            if (href.startsWith('/') && !href.startsWith('//')) {
                const hrefUrl = new URL(href, 'http://localhost');
                const cleanHref = hrefUrl.pathname;
                pageLinks[file].push(cleanHref);
            }

            if (href.startsWith('/') && !href.startsWith('//')) {
                if (!href.endsWith('/') && !href.includes('.') && href !== '/') {
                    errors.push(`${relativePath}: Internal href without trailing slash "${href}"`);
                }
            }
        }
    }

    const allElements = root.querySelectorAll('*');
    for (const el of allElements) {
        for (const attr in el.attributes) {
            const val = el.attributes[attr];
            if (val.startsWith('http://') && attr !== 'xmlns') {
                errors.push(`${relativePath}: Contains http:// asset "${val}"`);
            }
        }
    }
}


// Now check broken internal links
const validPaths = new Set(htmlFiles.map(f => {
    let p = path.relative(distDir, f);
    if (!p.startsWith('/')) p = '/' + p;
    return p;
}));

for (const file in pageLinks) {
    const relativePath = path.relative(distDir, file);
    for (let href of pageLinks[file]) {
        // We only care about internal links
        if (href.startsWith('/') && !href.startsWith('//')) {
             let target = href;
             if (target.endsWith('/')) {
                 target += 'index.html';
             }
             if (!validPaths.has(target)) {
                 // Check if it's an asset or other non-html file (like feed.xml or an image)
                 const assetPath = path.join(distDir, href);
                 if (!fs.existsSync(assetPath)) {
                     errors.push(`${relativePath}: Broken internal link "${href}"`);
                 }
             }
        }
    }
}

console.log(`Found ${errors.length} errors.`);
if (errors.length > 0) {
    for (const error of errors) {
        console.error(error);
    }
    process.exit(1);
} else {
    console.log("All clear!");
}
