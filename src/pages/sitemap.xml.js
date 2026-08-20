import { conditionsData } from '../data/conditionsData';
import { treatmentsData } from '../data/treatmentsData';
import { guidesData } from '../data/guidesData';
import { blogData } from '../data/blogData';

export async function GET() {
  const baseUrl = 'https://doctorameena.com';

  const staticPages = [
    '',
    'about',
    'services',
    'booking',
    'location',
    'faq',
    'privacy',
    'disclaimer',
    'terms',
    'conditions',
    'treatments',
    'guides',
    'tools',
    'glossary',
    'blog',
    'tools/symptom-checklist',
    'tools/question-builder',
    'tools/insurance-checker'
  ];

  const conditionPages = conditionsData.map(c => `conditions/${c.slug}`);
  const treatmentPages = treatmentsData.map(t => `treatments/${t.slug}`);
  const guidePages = guidesData.map(g => `guides/${g.slug}`);
  const blogPages = blogData.map(b => `blog/${b.slug}`);

  const allPaths = [
    ...staticPages,
    ...conditionPages,
    ...treatmentPages,
    ...guidePages,
    ...blogPages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(path => `  <url>
    <loc>${baseUrl}/${path}${path ? '/' : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
