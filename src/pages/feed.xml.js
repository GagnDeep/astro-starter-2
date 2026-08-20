import site from '../../data/site.json';
import { blogData } from '../data/blogData';
import rss from '@astrojs/rss';

export async function GET() {
  const baseUrl = 'https://doctorameena.com';

  return rss({
    title: site.site_title,
    description: site.description,
    site: baseUrl,
    items: blogData.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.title,
      pubDate: new Date(post.date),
      description: post.summary,
    })),
    customData: `<language>en-us</language>`,
  });
}
