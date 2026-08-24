import site from '../../data/site.json';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  let posts = [];
  try {
    posts = await getCollection('blog');
  } catch (e) {
    // If blog collection doesn't exist or is empty
  }

  return rss({
    title: site.site_title,
    description: site.description,
    site: context.site || 'https://instituteofretirement.com/',
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`, // Note trailing slash
      title: post.data.title,
      pubDate: post.data.post_hero?.date || new Date(),
    })),
    customData: `<language>${site.locale?.replace('_', '-') || 'en-us'}</language>`,
  });
}
