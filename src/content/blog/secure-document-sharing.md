---
title: "Document Viewer"
post_hero:\n  date: 2024-01-01
seo:
  page_description: "A comprehensive guide on "
---
<div class="max-w-3xl mx-auto px-4 py-20">
    <a href="/blog" class="text-primary no-underline hover:underline mb-8 block">&larr; Back to Blog</a>
    <h1 class="text-4xl font-bold mb-4 font-heading">{title}</h1>
    <div class="text-text/60 mb-12 pb-4 border-b border-border">Published {new Date().toLocaleDateString()}</div>

    <div class="prose max-w-none">
      <p>When searching for <strong>secure document sharing</strong>, developers often find outdated advice from 2012. The web has changed significantly, and how we handle documents needs to evolve.</p>

      <h2>Common Mistakes</h2>
      <ul>
        <li>Relying solely on <code>&lt;iframe src="file.pdf"&gt;</code> without considering mobile Safari fallbacks.</li>
        <li>Not optimizing PDFs for Fast Web View (Linearization) beforehand.</li>
        <li>Ignoring cross-origin resource sharing (CORS) headers.</li>
      </ul>

      <h2>The Modern Solution</h2>
      <p>Using a lightweight, dedicated viewer ensures that performance metrics (like CLS and LCP) remain high while providing a consistent experience across all devices.</p>

      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Native Iframe</td>
            <td>Zero JS, easy setup</td>
            <td>Broken on mobile Safari, UI varies by browser</td>
          </tr>
          <tr>
            <td>PDF.js</td>
            <td>Consistent UI, customizable</td>
            <td>Very heavy payload (~2.5MB), hard to implement</td>
          </tr>
          <tr>
            <td>uDocumentViewer</td>
            <td>12kb payload, perfectly responsive</td>
            <td>Requires API access for advanced features</td>
          </tr>
        </tbody>
      </table>

      <h2>Worked Example</h2>
      <p>Here is how you would implement this using standard HTML5:</p>
      <pre><code>&lt;div class="document-container"&gt;
  &lt;!-- Optimized for modern browsers --&gt;
  &lt;iframe
    src="https://view.udocumentviewer.com/?url=YOUR_DOC_URL"
    loading="lazy"
    title="Document Viewer"&gt;
  &lt;/iframe&gt;
&lt;/div&gt;</code></pre>

      <h2>Tradeoffs</h2>
      <p>If you build a canvas-based renderer from scratch, you own the entire stack, but you commit to maintaining a massive codebase that must stay updated with PDF specification changes. Relying on native iframes is maintenance-free but provides a terrible user experience on mobile. A managed API viewer is often the best middle ground.</p>

      <h2>Frequently Asked Questions</h2>
      <div class="space-y-4 not-prose mt-6">
        <details class="bg-surface p-4 rounded border border-border">
          <summary class="font-bold cursor-pointer">Does this affect SEO?</summary>
          <p class="mt-2 text-text/80">Embedded documents via iframes are generally not indexed by Google in the context of the host page. Always provide a clear, descriptive text link to the document for SEO purposes.</p>
        </details>
        <details class="bg-surface p-4 rounded border border-border">
          <summary class="font-bold cursor-pointer">How do I handle CORS?</summary>
          <p class="mt-2 text-text/80">If your document is hosted on a different domain than your viewer, you must configure your storage bucket (like S3) to send <code>Access-Control-Allow-Origin: *</code> headers. See our <a href="/reference/cors-headers" class="text-primary hover:underline">CORS guide</a>.</p>
        </details>
      </div>



<h2>The Core Issue</h2>
<p>Security in document viewing involves DRM, preventing unauthorized downloads, and securing the iframe sandbox. We discuss the limitations of client-side security (if they can see it, they can screenshot it) and how to implement robust CORS and authentication checks.</p>

<h2>Implementation Challenges</h2>
<p>Handling this manually requires deep knowledge of browser internals. Native implementations often fail on edge cases, resulting in memory leaks or broken UI on mobile devices.</p>

<h2>The Solution</h2>
<p>By leveraging an optimized API or a carefully configured lightweight viewer, you can achieve the required functionality without the massive overhead associated with legacy libraries.</p>
