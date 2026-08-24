const fs = require('fs');

const appendLinks = (filepath, links) => {
  let content = fs.readFileSync(filepath, 'utf-8');
  let linkHTML = `\n\n<h2>More Resources</h2>\n<ul>\n`;
  links.forEach(l => {
    linkHTML += `  <li><a href="${l.url}">${l.text}</a></li>\n`;
  });
  linkHTML += `</ul>\n`;

  // Try to find a good place to insert (before SourcesList if exists, else before </div> that closes prose)
  if (content.includes('<SourcesList')) {
    content = content.replace(/(\s*)<SourcesList/, `\n      ${linkHTML}$1<SourcesList`);
  } else if (content.includes('</Layout>')) {
     content = content.replace(/(\s*)<\/div>\n(\s*)<\/section>/, `\n      ${linkHTML}$1</div>$2</section>`);
  }
  fs.writeFileSync(filepath, content);
};

appendLinks('src/pages/about.astro', [
  {url: '/authors/editorial-team/', text: 'Meet our Editorial Team'},
  {url: '/editorial-policy/', text: 'Read our Editorial Policy'},
  {url: '/how-we-make-money/', text: 'How We Make Money'}
]);

appendLinks('src/pages/authors/editorial-team/index.astro', [
  {url: '/about/', text: 'About AI & Investing'},
  {url: '/blog/', text: 'Read the Blog'},
  {url: '/editorial-policy/', text: 'Editorial Policy'}
]);

appendLinks('src/pages/back-tests/danelfin/index.astro', [
  {url: '/reviews/danelfin/', text: 'Read our full Danelfin Review'},
  {url: '/comparisons/danelfin-vs-kavout/', text: 'Compare Danelfin vs Kavout'}
]);

appendLinks('src/pages/back-tests/trade-ideas/index.astro', [
  {url: '/reviews/trade-ideas/', text: 'Read our full Trade Ideas Review'},
  {url: '/comparisons/trade-ideas-vs-trendspider/', text: 'Compare Trade Ideas vs TrendSpider'}
]);

appendLinks('src/pages/back-tests/trendspider/index.astro', [
  {url: '/reviews/trendspider/', text: 'Read our full TrendSpider Review'},
  {url: '/comparisons/trade-ideas-vs-trendspider/', text: 'Compare TrendSpider vs Trade Ideas'}
]);

appendLinks('src/pages/blog/[...page].astro', [
  {url: '/authors/editorial-team/', text: 'About the Authors'},
  {url: '/about/', text: 'About AI & Investing'}
]);

appendLinks('src/pages/comparisons/danelfin-vs-kavout/index.astro', [
  {url: '/reviews/danelfin/', text: 'Danelfin Review'},
  {url: '/reviews/kavout/', text: 'Kavout Review'}
]);

appendLinks('src/pages/comparisons/index.astro', [
  {url: '/glossary/', text: 'Investing Glossary'},
  {url: '/methodology/', text: 'Our Testing Methodology'}
]);

appendLinks('src/pages/comparisons/trade-ideas-vs-trendspider/index.astro', [
  {url: '/reviews/trade-ideas/', text: 'Trade Ideas Review'},
  {url: '/reviews/trendspider/', text: 'TrendSpider Review'}
]);

appendLinks('src/pages/editorial-policy.astro', [
  {url: '/about/', text: 'About AI & Investing'},
  {url: '/how-we-make-money/', text: 'How We Make Money'}
]);

appendLinks('src/pages/glossary/index.astro', [
  {url: '/comparisons/', text: 'Tool Comparisons'},
  {url: '/reviews/', text: 'Software Reviews'}
]);

appendLinks('src/pages/how-we-make-money.astro', [
  {url: '/about/', text: 'About AI & Investing'},
  {url: '/editorial-policy/', text: 'Read our Editorial Policy'}
]);

appendLinks('src/pages/reviews/danelfin/index.astro', [
  {url: '/back-tests/danelfin/', text: 'Danelfin Backtest Results'},
  {url: '/comparisons/danelfin-vs-kavout/', text: 'Compare Danelfin vs Kavout'}
]);

appendLinks('src/pages/reviews/kavout/index.astro', [
  {url: '/comparisons/danelfin-vs-kavout/', text: 'Compare Kavout vs Danelfin'},
  {url: '/methodology/', text: 'Our Review Methodology'}
]);

appendLinks('src/pages/reviews/trade-ideas/index.astro', [
  {url: '/back-tests/trade-ideas/', text: 'Trade Ideas Backtest Results'},
  {url: '/comparisons/trade-ideas-vs-trendspider/', text: 'Compare Trade Ideas vs TrendSpider'}
]);

appendLinks('src/pages/reviews/trendspider/index.astro', [
  {url: '/back-tests/trendspider/', text: 'TrendSpider Backtest Results'},
  {url: '/comparisons/trade-ideas-vs-trendspider/', text: 'Compare TrendSpider vs Trade Ideas'}
]);

appendLinks('src/pages/thanks.astro', [
  {url: '/blog/', text: 'Read our Blog'},
  {url: '/about/', text: 'About AI & Investing'}
]);

appendLinks('src/pages/contact.astro', [
  {url: '/about/', text: 'About AI & Investing'},
  {url: '/thanks/', text: 'Thank You'},
  {url: '/blog/', text: 'Read our Blog'}
]);
