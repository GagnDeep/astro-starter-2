import site from '../../data/site.json';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';
const posts = await getCollection('blog');

export async function GET() {
  return rss({
    title: site.site_title,
    description: site.description,
    site: 'https://usignpdf.com',
    items: posts.map((post) => ({
      link: `/blog/${post.id}`,
      title: post.data.title,
      pubDate: post.data.date || new Date(),
    })),
    customData: `<language>en-us</language>`,
  });
}
