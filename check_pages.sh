#!/bin/bash
for f in $(find src/pages src/content/pages -type f -name "*.astro" -o -name "*.md" -o -name "*.mdx"); do
  echo "--- $f ---"
  wc -w "$f"
  grep -i "table" "$f" > /dev/null && echo "Has table"
  grep -i "ul>" "$f" > /dev/null && echo "Has list"
done
