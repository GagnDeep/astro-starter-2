const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walkSync(filepath, filelist);
    } else {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const htmlFiles = walkSync('dist').filter(f => f.endsWith('.html'));

const graph = {}; // page -> { out: [{url, text, type}], in: [] }
const pages = [];

htmlFiles.forEach(file => {
  let url = '/' + path.relative('dist', file).replace(/index\.html$/, '').replace(/\\/g, '/');
  if (url === '/404.html') return;
  if (!url.endsWith('/')) {
    if (url !== '/404') {
        url = url + '/';
    }
  }
  pages.push(url);
  graph[url] = { out: [], in: [], isOrphan: true };
});

htmlFiles.forEach(file => {
  let sourceUrl = '/' + path.relative('dist', file).replace(/index\.html$/, '').replace(/\\/g, '/');
  if (sourceUrl === '/404.html') return;
  if (!sourceUrl.endsWith('/')) {
    if (sourceUrl !== '/404') {
        sourceUrl = sourceUrl + '/';
    }
  }

  const content = fs.readFileSync(file, 'utf-8');
  const $ = cheerio.load(content);

  $('a[href]').each((i, el) => {
    const href = $(el).attr('href');
    const text = $(el).text().trim().substring(0, 100);
    const isNav = $(el).closest('header, nav').length > 0;
    const isFooter = $(el).closest('footer').length > 0;
    const type = isNav ? 'nav' : (isFooter ? 'footer' : 'body');

    if (href.startsWith('/') && !href.startsWith('//')) {
      graph[sourceUrl].out.push({ url: href, text, type });
      if (graph[href]) {
        graph[href].in.push({ source: sourceUrl, text, type });
      }
    }
  });
});

console.log(`Analyzed ${pages.length} pages.`);

const orphans = [];
const lowLinks = [];
const onlyNavFooterLinks = [];
let missingTrailingSlash = [];

pages.forEach(url => {
  const inbound = graph[url].in;
  if (inbound.length === 0 && url !== '/') orphans.push(url);
  if (inbound.length < 3 && url !== '/') lowLinks.push({url, count: inbound.length});

  const bodyInbound = inbound.filter(l => l.type === 'body');
  if (inbound.length > 0 && bodyInbound.length === 0 && url !== '/') {
    onlyNavFooterLinks.push(url);
  }
});

console.log(`Orphans:`, orphans);
console.log(`Low links (<3):`, lowLinks);
console.log(`Only nav/footer links:`, onlyNavFooterLinks);

const depths = {};
pages.forEach(p => depths[p] = Infinity);
depths['/'] = 0;

let queue = ['/'];
while (queue.length > 0) {
  const current = queue.shift();
  const d = depths[current];

  if (graph[current]) {
    graph[current].out.forEach(link => {
      if (depths[link.url] > d + 1) {
        depths[link.url] = d + 1;
        queue.push(link.url);
      }
    });
  }
}

const deepPages = Object.entries(depths).filter(([url, d]) => d > 3 && d !== Infinity);
const unreachablePages = Object.entries(depths).filter(([url, d]) => d === Infinity && url !== '/404');
console.log(`Pages with depth > 3:`, deepPages);
console.log(`Unreachable pages (from home):`, unreachablePages);

// trailing slashes
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const $ = cheerio.load(content);
  $('a[href]').each((i, el) => {
    const href = $(el).attr('href');
    if (href.startsWith('/') && !href.startsWith('//') && !href.endsWith('/') && !href.includes('.') && !href.includes('#')) {
      missingTrailingSlash.push({file, href});
    }
  });
});

console.log(`Missing trailing slash in href:`, missingTrailingSlash.length > 0 ? missingTrailingSlash : 'None');
