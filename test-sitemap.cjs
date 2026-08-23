const fs = require('fs');
const content = fs.readFileSync('SITEMAP.md', 'utf-8');

// Basic checks
const urlCount = (content.match(/\*\*URL:\*\*/g) || []).length;
console.log(`URL count: ${urlCount}`);
if (urlCount < 16) {
  throw new Error(`Expected at least 16 URLs, found ${urlCount}`);
}

const lines = content.split('\n');
const missingFields = lines.filter(line => line.startsWith('* **') && !line.includes(':'));
if (missingFields.length > 0) {
  console.log('Fields missing values:', missingFields);
}
