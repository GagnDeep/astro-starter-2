---
title: "Content-Disposition"

seo:
  page_description: "How headers affect document rendering vs downloading. A complete technical guide."
---
<div class="max-w-4xl mx-auto px-4 py-20">
    <div class="mb-8">
      <a href="/reference" class="text-primary hover:underline">&larr; Back to Reference Library</a>
    </div>

    <div class="prose max-w-none mb-16">
      <h1>Content-Disposition</h1>
      <p class="text-xl text-text/80">How headers affect document rendering vs downloading.</p>

      <div class="mt-8">
        The `Content-Disposition` HTTP header dictates if a file is displayed inline or downloaded. `Content-Disposition: inline` tells the browser to try rendering it (crucial for iframes). `Content-Disposition: attachment` forces a download prompt.
      </div>


