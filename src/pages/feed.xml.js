import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import site from "../../data/site.json";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: site.site_title,
    description: site.description,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.post_hero.date),
      description: post.data.seo?.page_description || "",
      link: `/blog/${post.id}/`,
    })),
  });
}
