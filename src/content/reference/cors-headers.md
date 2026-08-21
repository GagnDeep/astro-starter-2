---
title: "CORS Headers"

seo:
  page_description: "Fixing Cross-Origin Resource Sharing issues. A complete technical guide."
---
<div class="max-w-4xl mx-auto px-4 py-20">
    <div class="mb-8">
      <a href="/reference" class="text-primary hover:underline">&larr; Back to Reference Library</a>
    </div>

    <div class="prose max-w-none mb-16">
      <h1>CORS Headers</h1>
      <p class="text-xl text-text/80">Fixing Cross-Origin Resource Sharing issues.</p>

      <div class="mt-8">
        If you are fetching a document via JavaScript (e.g., using PDF.js or uDocumentViewer) from a different domain, the server hosting the document must return `Access-Control-Allow-Origin` headers. Without this, the browser will block the request to protect user data.
      </div>


