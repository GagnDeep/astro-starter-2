for file in src/content/pages/*.md src/content/pages/directory/*.md src/content/pages/jobs/*.md src/content/pages/author/*.md; do
  sed -i 's|featured_image: "/images/og/og-default.png"|featured_image: "/images/og/og-default.png"|g' "$file"
done
