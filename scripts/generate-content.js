import fs from 'fs';
import path from 'path';

const forms = [
  { id: '1040', title: '1040 Form PDF', form_number: '1040', description: 'U.S. Individual Income Tax Return', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f1040.pdf' },
  { id: 'w2', title: 'W-2 Form PDF', form_number: 'W-2', description: 'Wage and Tax Statement', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/fw2.pdf' },
  { id: '1099-nec', title: '1099-NEC Form PDF', form_number: '1099-NEC', description: 'Nonemployee Compensation', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/f1099nec.pdf' },
  { id: 'w4', title: 'W-4 Form PDF', form_number: 'W-4', description: 'Employee\'s Withholding Certificate', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/fw4.pdf' },
  { id: '1040-sr', title: '1040-SR Form PDF', form_number: '1040-SR', description: 'U.S. Tax Return for Seniors', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f1040s.pdf' },
  { id: 'schedule-c', title: 'Schedule C Form PDF', form_number: 'Schedule C (Form 1040)', description: 'Profit or Loss From Business', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/f1040sc.pdf' },
  { id: '4868', title: '4868 Form PDF (Extension)', form_number: '4868', description: 'Application for Automatic Extension of Time To File', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f4868.pdf' },
  { id: '1098-t', title: '1098-T Form PDF', form_number: '1098-T', description: 'Tuition Statement', year: 2024, category: 'education', download: 'https://www.irs.gov/pub/irs-pdf/f1098t.pdf' },
  { id: 'schedule-a', title: 'Schedule A Form PDF', form_number: 'Schedule A (Form 1040)', description: 'Itemized Deductions', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f1040sa.pdf' },
  { id: 'schedule-se', title: 'Schedule SE Form PDF', form_number: 'Schedule SE (Form 1040)', description: 'Self-Employment Tax', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/f1040sse.pdf' },
  { id: 'w9', title: 'W-9 Form PDF', form_number: 'W-9', description: 'Request for Taxpayer Identification Number', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/fw9.pdf' },
  { id: '1099-misc', title: '1099-MISC Form PDF', form_number: '1099-MISC', description: 'Miscellaneous Information', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/f1099msc.pdf' },
  { id: '1099-k', title: '1099-K Form PDF', form_number: '1099-K', description: 'Payment Card and Third Party Network Transactions', year: 2024, category: 'business', download: 'https://www.irs.gov/pub/irs-pdf/f1099k.pdf' },
  { id: 'schedule-b', title: 'Schedule B Form PDF', form_number: 'Schedule B (Form 1040)', description: 'Interest and Ordinary Dividends', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f1040sb.pdf' },
  { id: 'schedule-d', title: 'Schedule D Form PDF', form_number: 'Schedule D (Form 1040)', description: 'Capital Gains and Losses', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f1040sd.pdf' },
  { id: '8962', title: '8962 Form PDF', form_number: '8962', description: 'Premium Tax Credit (PTC)', year: 2024, category: 'individual', download: 'https://www.irs.gov/pub/irs-pdf/f8962.pdf' },
];

forms.forEach(f => {
  fs.writeFileSync(`src/content/forms/${f.id}.md`, `---
title: "${f.title}"
form_number: "${f.form_number}"
description: "${f.description}"
year: ${f.year}
download_url: "${f.download}"
category: "${f.category}"
software_alternative: true
seo:
  page_description: "Download the official ${f.form_number} PDF (${f.year}) for ${f.description}. Free and printable."
---
Here you can download the latest official IRS version of the ${f.form_number} form.

### Who Needs to File This Form?
If you fall into the categories required by the IRS, you must submit this document.

### Common Mistakes
- Not signing the document.
- Using last year's form instead of the current one.
- Math errors.

See also [Individual Forms](/categories/individual/) and [Business Forms](/categories/business/).
`);
});

console.log("Forms generated.");
