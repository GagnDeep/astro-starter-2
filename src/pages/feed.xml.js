import site from '../../data/site.json';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';
const posts = await getCollection('blog');

export async function GET(context) {
  const siteUrl = context.site ? context.site.toString() : 'https://aerospaceuae.com/';
  return rss({
    title: site.site_title,
    description: site.description,
    site: siteUrl,
    items: posts.map((post) => {
      // trailing slash for blog posts
      const slug = post.id.replace(/\.mdx?$/, '');
      return {
        link: `/blog/${slug}/`,
        title: post.data.title,
        pubDate: post.data.post_hero.date,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
