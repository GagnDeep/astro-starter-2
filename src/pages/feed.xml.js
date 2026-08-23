import site from '../../data/site.json';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';

export async function GET() {
  const posts = await getCollection('blog').catch(() => []);

  return rss({
    title: site.site_title,
    description: site.description,
    site: 'https://instituteofcatering.com',
    items: posts.map((post) => ({
      link: `/blog/${post.id}`,
      title: post.data.title,
      pubDate: post.data.post_hero.date,
    })),
    customData: `<language>en-gb</language>`,
  });
}
