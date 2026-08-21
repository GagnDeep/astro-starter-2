import fs from 'fs';

const categories = [
  { id: 'individual', title: 'Individual Tax Forms', description: 'Forms for individual taxpayers (1040, schedules).' },
  { id: 'business', title: 'Business Tax Forms', description: 'Forms for businesses, independent contractors, and employers.' },
  { id: 'education', title: 'Education Tax Forms', description: 'Forms related to student loans and tuition (1098-T).' },
  { id: 'healthcare', title: 'Healthcare Tax Forms', description: 'Forms for ACA and premium tax credits (8962, 1095).' },
  { id: 'extensions', title: 'Tax Extensions', description: 'Forms to request more time to file (4868, 7004).' },
  { id: 'amended', title: 'Amended Returns', description: 'Forms to correct previously filed returns (1040-X).' },
  { id: 'non-resident', title: 'Non-Resident Alien Forms', description: 'Forms for non-US citizens earning US income (1040-NR).' },
  { id: 'estate', title: 'Estate and Trust Forms', description: 'Forms for estates and trusts (1041).' },
  { id: 'charity', title: 'Tax Exempt Organizations', description: 'Forms for non-profits (990).' },
  { id: 'retirement', title: 'Retirement Forms', description: 'Forms for IRA and pension distributions (1099-R, 5498).' },
];

categories.forEach(c => {
  fs.writeFileSync(`src/content/categories/${c.id}.md`, `---
title: "${c.title}"
description: "${c.description}"
seo:
  page_description: "Find all ${c.title.toLowerCase()} required by the IRS. Free downloadable PDFs."
---
Browse our collection of ${c.title.toLowerCase()}. Downloading the right form is the first step, but remember that e-filing is often faster and less prone to errors.

Check out our [Glossary](/glossary/) if you come across terms you don't understand, or try our [Calculators](/tools/) to estimate your taxes.
`);
});

console.log("Categories generated.");
