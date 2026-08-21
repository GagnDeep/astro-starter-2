import fs from 'fs/promises';
import path from 'path';

async function main() {
  const blogDir = 'src/content/blog';
  const files = await fs.readdir(blogDir);

  for (const file of files) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;
    if (file === 'blog.md') continue; // handled specially or skip

    const filepath = path.join(blogDir, file);
    let content = await fs.readFile(filepath, 'utf8');

    // Parse existing basic frontmatter out
    const lines = content.split('\n');
    let title = "";

    for (const line of lines) {
      if (line.startsWith('title:')) {
        title = line.replace('title: ', '').replace(/"/g, '').trim();
      }
    }

    if (!title) title = "DogSnacking Post";

    const newFrontmatter = `---
title: "${title}"
post_hero:
  date: "2024-03-20"
  heading: "${title}"
  tags: ["Treats", "Reviews", "Health"]
  author: "DogSnacking Editor"
  image: "/images/blog/featured-image-1.jpg"
  image_alt: "Dog enjoying ${title}"
thumb_image_path: "/images/blog/blog-thumb-1.jpg"
thumb_image_alt: "Thumbnail for ${title}"
seo:
  page_description: "A deep dive into ${title}."
  canonical_url: null
  featured_image: "/images/blog/featured-image-1.jpg"
  featured_image_alt: "Dog enjoying ${title}"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
---
`;

    // replace everything between first two `---`
    const bodyMatch = content.match(/---[\s\S]*?---\n([\s\S]*)/);
    if (bodyMatch) {
      content = newFrontmatter + bodyMatch[1];
      await fs.writeFile(filepath, content);
      console.log(`Updated ${file}`);
    }
  }
}

main().catch(console.error);
