import sys

with open('src/layouts/Layout.astro', 'r') as f:
    content = f.read()

content = content.replace('''interface Props {
  title?: string;
  seo?: any;
  article?: any;
  breadcrumbs?: any[];
}

const { title, seo, article, breadcrumbs } = Astro.props;''', '''interface Props {
  title?: string;
  seo?: any;
  article?: any;
  breadcrumbs?: any[];
  itemListElements?: Array<{ name: string; url?: string }>;
}

const { title, seo, article, breadcrumbs, itemListElements } = Astro.props;''')

content = content.replace('''    <SEO title={title} seo={seo} article={article} breadcrumbs={breadcrumbs} />''', '''    <SEO title={title} seo={seo} article={article} breadcrumbs={breadcrumbs} itemListElements={itemListElements} />''')

with open('src/layouts/Layout.astro', 'w') as f:
    f.write(content)
