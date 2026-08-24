#!/bin/bash
# A script to check which pages exist and their word count
for p in src/pages/reviews/trendspider/index.astro src/pages/reviews/trade-ideas/index.astro src/pages/reviews/kavout/index.astro src/pages/back-tests/trade-ideas/index.astro src/pages/back-tests/trendspider/index.astro src/pages/comparisons/trade-ideas-vs-trendspider/index.astro src/pages/comparisons/danelfin-vs-kavout/index.astro src/pages/methodology/index.astro src/pages/glossary/index.astro src/pages/reviews/danelfin/index.astro src/pages/back-tests/danelfin/index.astro; do
  echo "--- $p ---"
  wc -w "$p"
done
