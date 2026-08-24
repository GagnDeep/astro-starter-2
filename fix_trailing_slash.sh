#!/bin/bash
files=(
  "src/components/blog/pagination.jsx"
  "src/components/blog/summary.astro"
)
# Handled blog pagination

# find src -type f -name "*.astro" -o -name "*.md" -o -name "*.mdx" -o -name "*.json" | xargs sed -i -E 's|href="(/[^"#\.]+[^/])"|href="\1/"|g'
find src data -type f -name "*.json" | xargs sed -i -E 's|"link": "(/[^"#\.]+[^/])"|"link": "\1/"|g'
find src -type f -name "*.astro" -o -name "*.md" | xargs sed -i -E 's|href="(/[^"#\.]+[^/])"|href="\1/"|g'
find src -type f -name "*.md" | xargs sed -i -E 's|\]\((/[^"#\.]+[^/])\)|\]\(\1/\)|g'
