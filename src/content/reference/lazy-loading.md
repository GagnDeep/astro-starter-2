---
title: "Lazy Loading"

seo:
  page_description: "Optimizing page load times. A complete technical guide."
---
<div class="max-w-4xl mx-auto px-4 py-20">
    <div class="mb-8">
      <a href="/reference" class="text-primary hover:underline">&larr; Back to Reference Library</a>
    </div>

    <div class="prose max-w-none mb-16">
      <h1>Lazy Loading</h1>
      <p class="text-xl text-text/80">Optimizing page load times.</p>

      <div class="mt-8">
        Never load 10 document iframes on page load. Use `&lt;iframe loading="lazy"&gt;`. This ensures the browser only fetches the document data when the user scrolls near it, drastically improving Initial Page Load metrics.
      </div>


