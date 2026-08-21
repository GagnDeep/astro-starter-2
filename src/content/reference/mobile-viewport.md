---
title: "Mobile Viewport"

seo:
  page_description: "Meta tags for responsive document viewers. A complete technical guide."
---
<div class="max-w-4xl mx-auto px-4 py-20">
    <div class="mb-8">
      <a href="/reference" class="text-primary hover:underline">&larr; Back to Reference Library</a>
    </div>

    <div class="prose max-w-none mb-16">
      <h1>Mobile Viewport</h1>
      <p class="text-xl text-text/80">Meta tags for responsive document viewers.</p>

      <div class="mt-8">
        Iframes do not automatically scale their internal content on mobile Safari. To fix this, the embedded page needs `&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;`. If you do not control the embedded page, you must rely on CSS hacks or a tool like uDocumentViewer.
      </div>


