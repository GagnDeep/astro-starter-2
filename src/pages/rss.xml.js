import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const guides = await getCollection('guides');
  const posts = await getCollection('posts');

  const guideItems = guides.map((guide) => ({
    title: guide.data.title,
    pubDate: new Date(guide.data.pubDate),
    description: guide.data.description,
    link: `/guides/${guide.id}/`,
  }));

  const postItems = posts.map((post) => ({
    title: post.data.title,
    pubDate: new Date(post.data.pubDate),
    description: post.data.description,
    link: `/blog/${post.id}/`,
  }));

  return rss({
    title: 'bro.tax — Freelance Tax Intelligence Feed',
    description: 'Irreverent, CPA-verified 1099 tax guides, updates, and write-off articles for creators and freelancers.',
    site: context.site,
    items: [...guideItems, ...postItems].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
    customData: `<language>en-us</language>`,
  });
}
