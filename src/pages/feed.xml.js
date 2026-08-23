import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import site from "../../data/site.json";

export async function GET(context) {
  return rss({
    title: site.site_title,
    description: site.description,
    site: context.site,
    items: [],
    customData: `<language>${site.lang || "en"}</language>`,
  });
}
