import site from '../../data/site.json';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';
const posts = await getCollection('blog');

export async function GET(context) {
  return rss({
    title: site.site_title,
    description: site.description,
    site: context.site ?? 'https://aiandinvesting.com',
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: post.data.post_hero?.date ? new Date(post.data.post_hero.date) : new Date(),
    })),
    customData: `<language>en-us</language>`,
  });
}
