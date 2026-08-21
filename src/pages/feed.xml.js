import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteData from '../../data/site.json';

export async function GET(context) {
  const blog = await getCollection('blog');

  return rss({
    title: siteData.site_title,
    description: siteData.description,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ? new Date(post.data.date) : new Date(),
      description: post.data.seo?.page_description || '',
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
