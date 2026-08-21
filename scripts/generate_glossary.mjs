import fs from 'fs';
import path from 'path';

const glossaryTerms = [
  'Acrobat', 'Annotation', 'Digital Signature', 'E-Sign', 'Fillable PDF',
  'Flatten PDF', 'Interactive Form', 'PDF-A', 'Watermark', 'OCR',
  'Vector Graphics', 'Raster Image', 'Metadata', 'Encryption', 'Compression',
  'Redaction', 'XFA Form', 'AcroForm', 'Bates Numbering', 'CMYK'
];

const glossaryDir = path.join('src', 'content', 'pages', 'glossary');

glossaryTerms.forEach(term => {
  const slug = term.toLowerCase().replace(/ /g, '-');
  const content = `---
_schema: default
title: What is a ${term}?
seo:
  page_description: Definition of ${term} in the context of PDF documents.
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type: website
  no_index: false
content_blocks:
  - _name: TextBlock
    heading: ${term}
    text_content: >-
      A **${term}** is a common concept in PDF document management.

      When working with fillable forms, understanding what a ${term} means can help you ensure your documents are formatted, exported, and secured correctly.

      ### Why Does It Matter?
      The PDF format is notoriously complex. Knowing the difference between vector graphics and a <a href="/glossary/raster-image/">raster image</a>, or understanding why you must <a href="/blog/flatten-pdf-meaning/">flatten a PDF</a>, is critical for secure document delivery. If you encounter an <a href="/blog/xfa-vs-acroform">XFA Form</a>, you need specific tools to open it.

      ### What to Do Next
      If you need to execute tasks related to a ${term}, consider using our suite of tools. You can <a href="/tools/compress-pdf/">compress PDFs</a>, <a href="/tools/sign-pdf/">sign PDFs</a>, or <a href="/tools/merge-pdf/">merge PDFs</a> securely directly from your browser.

      [Back to Glossary](/glossary/)
---
`;
  fs.writeFileSync(path.join(glossaryDir, `${slug}.md`), content);
});

console.log('Glossary generated.');
