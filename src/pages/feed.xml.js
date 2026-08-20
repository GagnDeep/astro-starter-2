import siteData from '../../data/site.json';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => new Date(b.data.post_hero.date).getTime() - new Date(a.data.post_hero.date).getTime());

  return rss({
    title: siteData.site_title,
    description: siteData.description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      link: `/blog/${post.id}/`,
      title: post.data.title,
      pubDate: new Date(post.data.post_hero.date),
      description: post.data.seo?.page_description || post.data.title,
    })),
    customData: `<language>ro-ro</language>`,
  });
}
