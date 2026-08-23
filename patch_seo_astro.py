import sys

with open('src/components/seo/seo.astro', 'r') as f:
    content = f.read()

content = content.replace('''interface Props {
  title?: string;
  seo?: SeoFrontmatter | null;
  article?: ArticleMeta;
  breadcrumbs?: BreadcrumbItem[];
}

const { title, seo, article, breadcrumbs } = Astro.props;

const meta = resolveSeo({ title, seo, url: Astro.url, siteUrl: Astro.site, article });
const schema = buildSchemaGraph({ seo: meta, siteUrl: Astro.site, breadcrumbs });''', '''interface Props {
  title?: string;
  seo?: SeoFrontmatter | null;
  article?: ArticleMeta;
  breadcrumbs?: BreadcrumbItem[];
  itemListElements?: Array<{ name: string; url?: string }>;
}

const { title, seo, article, breadcrumbs, itemListElements } = Astro.props;

const meta = resolveSeo({ title, seo, url: Astro.url, siteUrl: Astro.site, article });
const schema = buildSchemaGraph({ seo: meta, siteUrl: Astro.site, breadcrumbs, itemListElements });''')

with open('src/components/seo/seo.astro', 'w') as f:
    f.write(content)
