import fs from 'fs/promises';
import path from 'path';

async function main() {
  const blogDir = 'src/content/blog';
  const files = await fs.readdir(blogDir);

  for (const file of files) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;

    const filepath = path.join(blogDir, file);
    let content = await fs.readFile(filepath, 'utf8');

    // The `<Picture>` component in Astro dynamically loads images using import.meta.glob with a pattern:
    // `"/src/assets/**/*.{jpeg,jpg,png,gif,svg,avif}"`
    // Our frontmatter has `image: "/images/blog/featured-image-1.jpg"`. This string is not matched in glob, so it defaults to the string value.
    // Astro's `<Picture>` requires width/height for remote/public images OR it needs an `ImageMetadata` object.
    // To pass `ImageMetadata`, we need the path to match `/src/assets/...`.
    // Let's replace `/images/blog/` with `/src/assets/images/blog/` in all .mdx frontmatter.

    content = content.replace(/"\/images\/blog\/(.*?)"/g, '"/src/assets/images/blog/$1"');
    await fs.writeFile(filepath, content);
  }
}

main().catch(console.error);
