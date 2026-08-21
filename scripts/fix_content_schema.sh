#!/bin/bash
set -e

find src/content -name "*.md" -o -name "*.mdx" | while read -r file; do
  # Inject the missing SEO properties if they don't exist
  if ! grep -q "canonical_url:" "$file"; then
    sed -i '/page_description/a \  canonical_url: null\n  featured_image: null\n  featured_image_alt: null\n  author_twitter_handle: null\n  open_graph_type: null\n  no_index: false' "$file"
  fi
done
