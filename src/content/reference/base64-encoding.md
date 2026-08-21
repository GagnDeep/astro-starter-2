---
title: "Base64 Encoding"

seo:
  page_description: "Encoding documents directly. A complete technical guide."
---
<div class="max-w-4xl mx-auto px-4 py-20">
    <div class="mb-8">
      <a href="/reference" class="text-primary hover:underline">&larr; Back to Reference Library</a>
    </div>

    <div class="prose max-w-none mb-16">
      <h1>Base64 Encoding</h1>
      <p class="text-xl text-text/80">Encoding documents directly.</p>

      <div class="mt-8">
        You can embed small documents directly in HTML using Base64 Data URIs: `src="data:application/pdf;base64,JVBER..."`. This avoids a network request but bloats the HTML file size by ~33%. Only use for very small files.
      </div>


