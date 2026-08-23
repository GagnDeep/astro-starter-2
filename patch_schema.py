import sys

with open('src/lib/seo/schema.ts', 'r') as f:
    content = f.read()

# Add itemListElements to PageSchemaOptions
content = content.replace('''export interface PageSchemaOptions {
  seo: ResolvedSeo;
  siteUrl: URL | undefined;
  breadcrumbs?: BreadcrumbItem[];
}''', '''export interface PageSchemaOptions {
  seo: ResolvedSeo;
  siteUrl: URL | undefined;
  breadcrumbs?: BreadcrumbItem[];
  itemListElements?: Array<{ name: string; url?: string }>;
}''')

# Update function signature
content = content.replace('''export function buildSchemaGraph({
  seo,
  siteUrl,
  breadcrumbs,
}: PageSchemaOptions): JsonLdNode | null {''', '''export function buildSchemaGraph(options: PageSchemaOptions): JsonLdNode | null {
  const { seo, siteUrl, breadcrumbs } = options;''')

# Update article author handling
content = content.replace('''    if (seo.article?.author) {
      pageNode.author = { "@type": "Person", name: seo.article.author };
    }''', '''    if (seo.article?.author) {
      const authors = site.authors as Array<{ name: string; slug: string }>;
      const authorMatch = authors?.find(a => a.name === seo.article?.author);
      if (authorMatch) {
        pageNode.author = {
          "@type": "Person",
          "@id": id(base, `authors/${authorMatch.slug}/`),
          name: authorMatch.name
        };
      } else {
        pageNode.author = { "@type": "Person", name: seo.article.author };
      }
    }''')

# Add ItemList elements to graph
content = content.replace('''  if (breadcrumbs?.length) graph.push(breadcrumbNode(base, breadcrumbs));

  return { "@context": "https://schema.org", "@graph": graph };
}''', '''  if (breadcrumbs?.length) graph.push(breadcrumbNode(base, breadcrumbs));

  if (options.itemListElements?.length) {
    graph.push({
      "@type": "ItemList",
      "@id": `${seo.canonical}#itemlist`,
      itemListElement: options.itemListElements.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.url && { url: absoluteUrl(item.url, base) })
      }))
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}''')

with open('src/lib/seo/schema.ts', 'w') as f:
    f.write(content)
