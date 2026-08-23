import site from "../../data/site.json";

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.site_title}</title>
    <link>https://instituteofsustainability.com</link>
    <description>${site.description}</description>
    <language>en-us</language>
  </channel>
</rss>`,
    {
      headers: { "Content-Type": "application/xml" },
    },
  );
}
