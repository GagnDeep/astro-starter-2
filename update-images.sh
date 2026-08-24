for file in src/content/pages/*.md src/content/pages/directory/*.md src/content/pages/jobs/*.md src/content/pages/author/*.md; do
  sed -i 's|image: "/images/og/og-default.png"|image: "/src/assets/images/og-default.png"|g' "$file"
done
