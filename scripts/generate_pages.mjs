import fs from 'fs';
import path from 'path';

const taxForms = [
  { slug: 'w9', keyword: 'w9 fillable 2024', desc: 'Fill out a W-9 form for 2024 online.', title: 'W-9 Fillable Form (2024)' },
  { slug: 'w4', keyword: 'w4 fillable', desc: 'Fill out a W-4 form online.', title: 'W-4 Fillable Form' },
  { slug: '1099-nec', keyword: '1099 nec fillable', desc: 'Fill out a 1099-NEC online.', title: '1099-NEC Fillable Form' },
  { slug: '1099-misc', keyword: '1099 misc fillable', desc: 'Fill out a 1099-MISC online.', title: '1099-MISC Fillable Form' },
  { slug: '1040', keyword: '1040 fillable 2024', desc: 'Fill out a 1040 form for 2024.', title: '1040 Fillable Form (2024)' },
  { slug: 'w2', keyword: 'w2 fillable pdf', desc: 'Fill out a W-2 form online.', title: 'W-2 Fillable Form' },
  { slug: '8822', keyword: 'form 8822 fillable', desc: 'Fill out Form 8822 (Change of Address) online.', title: 'Form 8822 Fillable Form' },
  { slug: '1098-t', keyword: '1098 t fillable', desc: 'Fill out Form 1098-T online.', title: '1098-T Fillable Form' },
  { slug: 'fw8ben', keyword: 'w8ben fillable', desc: 'Fill out Form W-8BEN online.', title: 'W-8BEN Fillable Form' },
  { slug: 'i9', keyword: 'i9 fillable', desc: 'Fill out Form I-9 online.', title: 'I-9 Fillable Form' },
  { slug: 'f1040x', keyword: '1040x fillable', desc: 'Fill out Form 1040-X online.', title: '1040-X Fillable Form' },
  { slug: 'f4868', keyword: '4868 fillable', desc: 'Fill out Form 4868 online.', title: '4868 Fillable Form' },
  { slug: 'f941', keyword: '941 fillable', desc: 'Fill out Form 941 online.', title: '941 Fillable Form' },
  { slug: 'f2848', keyword: '2848 fillable', desc: 'Fill out Form 2848 online.', title: '2848 Fillable Form' },
  { slug: 'f8962', keyword: '8962 fillable', desc: 'Fill out Form 8962 online.', title: '8962 Fillable Form' }
];

const taxFormsDir = path.join('src', 'content', 'pages', 'library', 'tax-forms');

taxForms.forEach(form => {
  const content = `---
_schema: default
title: ${form.title}
seo:
  page_description: ${form.desc}
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type: website
  no_index: false
content_blocks:
  - _name: TextBlock
    heading: ${form.title}
    text_content: >-
      Easily fill out your **${form.keyword}** using FreeFormPDF. Secure, fast, and 100% free with no watermarks.

      ## What is the ${form.title}?
      The ${form.title} is an essential document for tax reporting. By using our tool, you can type directly into the fields, sign it electronically, and export the flattened PDF immediately.

      ### How to use this tool
      1. Click the 'Start Filling' button below.
      2. Upload your existing blank form, or we will load the official IRS template if available.
      3. Type your details into the highlighted boxes.
      4. Download your completed PDF securely.

      ### Edge Cases & What to Do Next
      Ensure you have checked your document thoroughly before hitting export. Once the document is generated, you may want to <a href="/tools/compress-pdf">compress the PDF file</a> before emailing it to your employer, or <a href="/tools/merge-pdf">merge it with other tax documents</a> to keep a clean digital record. If you are asked to provide a secure signature, read up on the legality of <a href="/blog/esignature-legality-explained">e-signatures</a>.

  - _name: LeftRight
    heading: Ready to begin?
    text_content: Start filling out your ${form.title} now.
    image:
      image_path: /src/assets/images/transparent-bg/undraw-online-test.svg
      alt_text: Edit PDF
    flipped: false
    button:
      text: Start Filling
      link: /tools/merge-pdf/
---
`;
  fs.writeFileSync(path.join(taxFormsDir, `${form.slug}.md`), content);
});

console.log('Library tax form pages regenerated with deeper content where needed.');
