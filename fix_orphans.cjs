const fs = require('fs');

const indexAstro = fs.readFileSync('src/pages/back-tests/index.astro', 'utf-8');
const newIndex = indexAstro.replace('        </ul>\n      </div>', '        </ul>\n\n        <h2>Related Links</h2>\n        <ul>\n          <li><a href="/about/">About Us</a></li>\n          <li><a href="/editorial-policy/">Editorial Policy</a></li>\n          <li><a href="/how-we-make-money/">How We Make Money</a></li>\n          <li><a href="/authors/editorial-team/">Our Editorial Team</a></li>\n          <li><a href="/blog/">Read Our Blog</a></li>\n          <li><a href="/thanks/">Thank You</a></li>\n        </ul>\n      </div>');
fs.writeFileSync('src/pages/back-tests/index.astro', newIndex);

const footerJSON = fs.readFileSync('data/navigation.json', 'utf-8');
const newFooter = footerJSON.replace('"link": "/contact/"\n      }', '"link": "/contact/"\n      },\n      {\n        "text": "About Us",\n        "link": "/about/"\n      },\n      {\n        "text": "Editorial Policy",\n        "link": "/editorial-policy/"\n      },\n      {\n        "text": "How We Make Money",\n        "link": "/how-we-make-money/"\n      }');
fs.writeFileSync('data/navigation.json', newFooter);
