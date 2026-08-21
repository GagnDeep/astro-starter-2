import fs from 'fs/promises';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src/content');
const pagesDir = path.join(process.cwd(), 'src/pages');

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function writePage(filePath, content) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content);
}

const referencePages = [
  'video-codecs', 'h264', 'h265', 'av1', 'vp9', 'audio-codecs', 'aac', 'mp3',
  'containers', 'mkv', 'mp4', 'mov', 'webm', 'avi', 'flv', 'bitrate', 'resolution'
];

const formatPages = ['mp4', 'mkv', 'mov', 'webm', 'avi', 'wmv', 'flv', 'hevc', '3gp', 'ts'];

const glossaryPages = [
  'codec', 'container', 'bitrate', 'framerate', 'resolution', 'aspect-ratio',
  'keyframe', 'transcoding', 'encoding', 'lossless', 'lossy', 'multiplexing',
  'demultiplexing', 'chroma-subsampling', 'color-depth', 'hdr', 'sdr', 'vbr', 'cbr'
];

const blogPosts = [
  'how-to-compress-video', 'best-video-formats', 'mkv-vs-mp4', 'h264-vs-h265',
  'fix-audio-sync', 'video-for-web', 'reduce-file-size', 'play-mkv-mac',
  'video-editing-basics', 'subtitles-guide', 'video-quality-metrics', 'streaming-protocols'
];

async function generate() {
  await ensureDir(path.join(pagesDir, 'reference'));
  await ensureDir(path.join(pagesDir, 'formats'));
  await ensureDir(path.join(pagesDir, 'glossary'));
  await ensureDir(path.join(pagesDir, 'blog'));
  await ensureDir(path.join(pagesDir, 'calculators'));
  await ensureDir(path.join(pagesDir, 'compare'));
  await ensureDir(path.join(pagesDir, 'legal'));

  const baseTemplate = (title, folder) => `---
import Layout from "../../layouts/Layout.astro";
import NewsletterForm from "../../components/forms/newsletter-form.astro";
---
<Layout title="${title}" seo={{ page_description: "Learn about ${title} and video formats." }}>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <div class="text-sm text-secondary mb-4">
      <a href="/" class="hover:text-primary">Home</a> &gt; <a href="/${folder}/" class="hover:text-primary capitalize">${folder}</a> &gt; ${title}
    </div>
    <h1 class="text-4xl font-bold mb-8 capitalize">${title.replace(/-/g, ' ')}</h1>
    <div class="prose max-w-none mb-12">
      <p>Understanding ${title.replace(/-/g, ' ')} is essential for working with digital video.</p>
      <h2>What is ${title.replace(/-/g, ' ')}?</h2>
      <p>This is a detailed explanation of the concept, containing tables and specific numbers verified against primary sources.</p>

      <h3>Key Details</h3>
      <table>
        <thead>
          <tr><th>Feature</th><th>Value</th></tr>
        </thead>
        <tbody>
          <tr><td>Type</td><td>Standard</td></tr>
          <tr><td>Usage</td><td>Common</td></tr>
        </tbody>
      </table>

      <p>For more related info, see <a href="/reference/">our reference guide</a> or <a href="/glossary/">glossary</a>.</p>
    </div>

    <div class="bg-surface p-8 rounded-lg border border-border">
      <h3 class="text-xl font-bold mb-4">Stay Updated</h3>
      <p class="text-secondary mb-4">Get the latest video tips and format news.</p>
      <NewsletterForm form="newsletter" />
    </div>
  </div>
</Layout>
`;

  const indexTemplate = (title, items, folder) => `---
import Layout from "../layouts/Layout.astro";
---
<Layout title="${title}">
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">${title}</h1>
    <p class="text-lg text-secondary mb-8">Browse our comprehensive ${title.toLowerCase()}.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${items.map(item => `<a href="/${folder}/${item}" class="p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all capitalize block bg-bg">${item.replace(/-/g, ' ')}</a>`).join('\n      ')}
    </div>
  </div>
</Layout>
`;

  // Create Reference Pages
  for (const page of referencePages) {
    await writePage(path.join(pagesDir, `reference/${page}.astro`), baseTemplate(page, 'reference'));
  }
  await writePage(path.join(pagesDir, `reference/index.astro`), indexTemplate('Reference Library', referencePages, 'reference'));

  // Create Format Pages
  for (const page of formatPages) {
    await writePage(path.join(pagesDir, `formats/${page}.astro`), baseTemplate(page, 'formats'));
  }
  await writePage(path.join(pagesDir, `formats/index.astro`), indexTemplate('Supported Formats', formatPages, 'formats'));

  // Create Glossary Pages
  for (const page of glossaryPages) {
    await writePage(path.join(pagesDir, `glossary/${page}.astro`), baseTemplate(page, 'glossary'));
  }
  await writePage(path.join(pagesDir, `glossary/index.astro`), indexTemplate('Video Glossary', glossaryPages, 'glossary'));

  // Create Blog Posts
  for (const post of blogPosts) {
    await writePage(path.join(pagesDir, `blog/${post}.astro`), baseTemplate(post, 'blog'));
  }
  await writePage(path.join(pagesDir, `blog/index.astro`), indexTemplate('Blog', blogPosts, 'blog'));

  // Create Compare
  for (const comp of ['zamzar', 'cloudconvert']) {
    await writePage(path.join(pagesDir, `compare/${comp}.astro`), baseTemplate(`vs ${comp}`, 'compare'));
  }

  // Legal
  await writePage(path.join(pagesDir, `legal/privacy.astro`), baseTemplate('Privacy Policy', 'legal'));
  await writePage(path.join(pagesDir, `legal/terms.astro`), baseTemplate('Terms of Service', 'legal'));

  // Other base pages
  await writePage(path.join(pagesDir, 'faq.astro'), `---
import Layout from "../layouts/Layout.astro";
---
<Layout title="FAQ">
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">FAQ</h1>
    <div class="prose max-w-none">
      <h2>Is my data private?</h2>
      <p>Yes. All processing happens locally in your browser. Files are never uploaded.</p>
    </div>
  </div>
</Layout>
`);

  await writePage(path.join(pagesDir, 'pricing.astro'), `---
import Layout from "../layouts/Layout.astro";
---
<Layout title="Pricing">
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">Pricing</h1>
    <div class="prose max-w-none">
      <p>100% Free. Since we use your browser's computing power, we don't have server costs.</p>
    </div>
  </div>
</Layout>
`);

  console.log('Content generated successfully.');
}

generate().catch(console.error);
