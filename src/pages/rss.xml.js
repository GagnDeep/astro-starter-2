import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Dr. Ameena Patel, MD — Patient Education Feed',
    description: 'Evidence-led medical insights on thyroid health, diabetes technology, and endocrinology.',
    site: context.site || 'https://doctorameena.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishDate),
      description: post.data.summary,
      link: `/blog/${post.id.replace(/\.(md|mdx)$/, '')}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
