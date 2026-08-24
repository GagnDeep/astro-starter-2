import type { APIRoute } from "astro";

/**
 * /robots.txt
 *
 * Allows everything, points crawlers at the sitemap index emitted by
 * `@astrojs/sitemap`, and keeps CloudCannon preview/editor artefacts out of
 * the index. Add `Disallow:` lines here rather than in individual pages.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("/sitemap-index.xml", site ?? "http://localhost:4321").toString();

  const body = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /_cloudcannon/
Disallow: /404

# explicitly allow AI bots for citation eligibility
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
