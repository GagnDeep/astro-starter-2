const fs = require('fs');

const appendLinks = (filepath, links) => {
  let content = fs.readFileSync(filepath, 'utf-8');
  let linkHTML = `\n\n<h2>More Resources</h2>\n<ul>\n`;
  links.forEach(l => {
    linkHTML += `  <li><a href="${l.url}">${l.text}</a></li>\n`;
  });
  linkHTML += `</ul>\n`;

  if (content.includes('<SourcesList')) {
    content = content.replace(/(\s*)<SourcesList/, `\n      ${linkHTML}$1<SourcesList`);
  } else if (content.includes('</Layout>')) {
     content = content.replace(/(\s*)<\/div>\n(\s*)<\/section>/, `\n      ${linkHTML}$1</div>$2</section>`);
  }
  fs.writeFileSync(filepath, content);
};

appendLinks('src/pages/glossary/index.astro', [
  {url: '/authors/editorial-team/', text: 'Meet our Editorial Team'},
  {url: '/thanks/', text: 'Thank You'},
  {url: '/contact/', text: 'Contact Us'}
]);

appendLinks('src/pages/reviews/trendspider/index.astro', [
  {url: '/glossary/', text: 'Investing Glossary'},
  {url: '/reviews/kavout/', text: 'Read Kavout Review'},
  {url: '/back-tests/trade-ideas/', text: 'Trade Ideas Backtest'}
]);

appendLinks('src/pages/reviews/trade-ideas/index.astro', [
  {url: '/back-tests/trendspider/', text: 'TrendSpider Backtest'},
  {url: '/reviews/kavout/', text: 'Read Kavout Review'}
]);

appendLinks('src/pages/how-we-make-money.astro', [
  {url: '/thanks/', text: 'Thank You'},
  {url: '/authors/editorial-team/', text: 'Meet our Editorial Team'},
  {url: '/contact/', text: 'Contact Us'}
]);
