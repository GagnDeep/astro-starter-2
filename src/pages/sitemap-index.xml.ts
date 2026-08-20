import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.href.replace(/\/$/, '') : 'https://bro.tax';

  const staticPages = [
    '',
    '/estimator',
    '/deductions',
    '/guides',
    '/blog',
    '/about',
    '/pricing',
  ];

  const deductions = await getCollection('deductions');
  const deductionPages = deductions.map((d) => `/deductions/${d.id}`);

  const guides = await getCollection('guides');
  const guidePages = guides.map((g) => `/guides/${g.id}`);

  const posts = await getCollection('posts');
  const postPages = posts.map((p) => `/blog/${p.id}`);

  const allPages = [...staticPages, ...deductionPages, ...guidePages, ...postPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
