import fs from 'fs';
import path from 'path';

interface SitemapHookOptions {
  dir: { pathname?: string; fsPath?: string };
  pages: Array<{ pathname: string }>;
}

export default function sitemapGenerator() {
  return {
    name: 'custom-sitemap-generator',
    hooks: {
      'astro:build:done': async ({ dir, pages }: SitemapHookOptions) => {
        const siteUrl = 'https://doctorameena.com';
        const urls = pages
          .map((p: { pathname: string }) => p.pathname)
          .filter((p: string) => p !== undefined && p !== null && !p.includes('404'))
          .map((p: string) => {
            const cleanPath = p === '' ? '' : (p.endsWith('/') ? p : p + '/');
            return `${siteUrl}/${cleanPath}`.replace(/([^:]\/)\/+/g, "$1");
          });

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url: string) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n  </url>`).join('\n')}
</urlset>`;

        const distDir = dir.pathname || dir.fsPath || path.join(process.cwd(), 'dist');
        fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), xml);
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
        console.log('Successfully generated custom sitemap-index.xml with', urls.length, 'URLs.');
      }
    }
  };
}
