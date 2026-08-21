const fs = require('fs');
const path = require('path');

const formats = ['pdf', 'docx', 'xlsx', 'pptx', 'txt', 'rtf', 'csv', 'epub', 'mobi', 'odt', 'ods', 'odp', 'xml', 'json', 'md'];

formats.forEach(format => {
  const content = `---
import Layout from "../../layouts/Layout.astro";
import ViewerPlaceholder from "../../components/viewer-placeholder.astro";
import CaptureForm from "../../components/forms/capture-form.astro";

const title = "${format.toUpperCase()} File Viewer - Open ${format.toUpperCase()} Online";
const seo = {
  page_description: "Free online ${format.toUpperCase()} viewer. Open and read ${format.toUpperCase()} files directly in your browser without installing any software.",
  open_graph_type: "website" as const,
};
---
<Layout seo={seo} title={title}>
  <main class="container mx-auto px-4 py-12 prose prose-slate max-w-4xl">
    <h1 class="text-center">View ${format.toUpperCase()} Files Online</h1>
    <p class="text-center lead">Securely open and view <strong>.${format}</strong> documents in your browser. No downloads, no sign-ups required.</p>

    <ViewerPlaceholder documentType="${format.toUpperCase()}" />

    <div class="my-12">
      <h2>What is a ${format.toUpperCase()} file?</h2>
      <p>A ${format.toUpperCase()} file is a standard document format used across various platforms. Our online viewer allows you to open these files instantly without needing specialized software like Microsoft Office, Adobe Acrobat, or other proprietary tools.</p>

      <h3>Why view ${format.toUpperCase()} online?</h3>
      <ul>
        <li><strong>Security:</strong> Prevent downloading potentially malicious files to your device.</li>
        <li><strong>Convenience:</strong> Access your documents from any device (mobile, tablet, desktop) with a web browser.</li>
        <li><strong>Speed:</strong> Instant viewing without waiting for heavy applications to load.</li>
      </ul>
    </div>

    <div class="bg-surface p-8 rounded-xl border border-border my-12">
      <h3 class="mt-0">Need more features?</h3>
      <p>Let us know what you'd like to see in our document viewer.</p>
      <CaptureForm form="contact" submitLabel="Send Feedback" />
    </div>
  </main>
</Layout>
`;
  fs.writeFileSync(path.join(__dirname, `../src/pages/reference/${format}.astro`), content);
});

const taxonomies = ['spreadsheets', 'presentations', 'text-documents', 'ebooks', 'data-files', 'images', 'archives', 'code', 'legal-documents', 'financial-reports'];

taxonomies.forEach(tax => {
  const formattedTitle = tax.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = `---
import Layout from "../../layouts/Layout.astro";

const title = "View ${formattedTitle} Online | UViewDocument";
const seo = {
  page_description: "Securely view ${formattedTitle.toLowerCase()} online directly in your browser. Fast, free, and no registration required.",
  open_graph_type: "website" as const,
};
---
<Layout seo={seo} title={title}>
  <main class="container mx-auto px-4 py-12 prose prose-slate max-w-4xl">
    <h1 class="text-center">${formattedTitle}</h1>
    <p class="text-center lead">We support a wide variety of formats for viewing ${formattedTitle.toLowerCase()} online.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12 not-prose">
      <a href="/reference/pdf" class="block p-6 border border-border rounded-lg bg-surface hover:border-primary transition-colors">
        <h3 class="font-bold text-lg mb-2">PDF</h3>
        <p class="text-sm text-gray-600">Universal document format</p>
      </a>
      <a href="/reference/docx" class="block p-6 border border-border rounded-lg bg-surface hover:border-primary transition-colors">
        <h3 class="font-bold text-lg mb-2">DOCX</h3>
        <p class="text-sm text-gray-600">Microsoft Word document</p>
      </a>
      <a href="/reference/txt" class="block p-6 border border-border rounded-lg bg-surface hover:border-primary transition-colors">
        <h3 class="font-bold text-lg mb-2">TXT</h3>
        <p class="text-sm text-gray-600">Plain text file</p>
      </a>
    </div>

    <h2>How to open ${formattedTitle.toLowerCase()} without software</h2>
    <p>Opening ${formattedTitle.toLowerCase()} typically requires expensive or bulky software. With UViewDocument, you simply drag and drop your file into the browser. We process the rendering locally or via secure ephemeral servers to display the content instantly.</p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12 not-prose">
      <a href="/" class="bg-primary hover:bg-primary-hover text-bg px-6 py-3 rounded font-medium text-center transition-colors">Go to Viewer</a>
      <a href="/tools/file-size-calculator" class="border border-border hover:bg-surface px-6 py-3 rounded font-medium text-center transition-colors">Check File Size</a>
    </div>
  </main>
</Layout>
`;
  fs.writeFileSync(path.join(__dirname, `../src/pages/formats/${tax}.astro`), content);
});

const glossaryTerms = Array.from({length: 25}, (_, i) => `term-${i+1}`);
glossaryTerms.push('mime-type', 'pdf', 'encryption', 'lossless-compression', 'metadata');

glossaryTerms.forEach(term => {
  const formattedTitle = term.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = `---
import Layout from "../../layouts/Layout.astro";

const title = "What is ${formattedTitle}? | Document Glossary";
const seo = {
  page_description: "Learn the definition and meaning of ${formattedTitle} in our comprehensive document viewer glossary.",
  open_graph_type: "website" as const,
};
---
<Layout seo={seo} title={title}>
  <main class="container mx-auto px-4 py-12 prose prose-slate max-w-3xl">
    <nav class="text-sm mb-8" aria-label="Breadcrumb">
      <ol class="list-none p-0 flex gap-2">
        <li class="m-0"><a href="/">Home</a> / </li>
        <li class="m-0"><a href="/glossary">Glossary</a> / </li>
        <li class="m-0 font-medium">${formattedTitle}</li>
      </ol>
    </nav>

    <h1>${formattedTitle}</h1>
    <p class="lead text-xl text-gray-600">In the context of document viewing and sharing, <strong>${formattedTitle.toLowerCase()}</strong> refers to a standard component of digital file management.</p>

    <h2>Detailed Definition</h2>
    <p>${formattedTitle} plays a crucial role when you attempt to open or view files online. Understanding this term helps in resolving common compatibility issues.</p>

    <div class="bg-surface p-6 border border-border rounded my-8 not-prose">
      <h3 class="font-bold mb-4">Related Terms</h3>
      <ul class="flex flex-wrap gap-2">
        <li><a href="/glossary/pdf" class="px-3 py-1 bg-white border border-border rounded-full text-sm hover:border-primary">PDF</a></li>
        <li><a href="/glossary/mime-type" class="px-3 py-1 bg-white border border-border rounded-full text-sm hover:border-primary">MIME Type</a></li>
        <li><a href="/glossary/metadata" class="px-3 py-1 bg-white border border-border rounded-full text-sm hover:border-primary">Metadata</a></li>
      </ul>
    </div>
  </main>
</Layout>
`;
  fs.writeFileSync(path.join(__dirname, `../src/pages/glossary/${term}.astro`), content);
});

fs.writeFileSync(path.join(__dirname, '../src/pages/glossary/index.astro'), `---
import Layout from "../../layouts/Layout.astro";

const title = "Document Glossary | UViewDocument";
const seo = {
  page_description: "A comprehensive glossary of document formats, standards, and terms.",
  open_graph_type: "website" as const,
};
---
<Layout seo={seo} title={title}>
  <main class="container mx-auto px-4 py-12 prose prose-slate max-w-4xl">
    <h1 class="text-center">Document Glossary</h1>
    <p class="text-center lead mb-12">Learn about the various terms and technologies that power digital documents.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
      ${glossaryTerms.map(term => `<a href="/glossary/${term}" class="p-4 border border-border rounded bg-surface hover:border-primary">${term.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</a>`).join('\n      ')}
    </div>
  </main>
</Layout>
`);
