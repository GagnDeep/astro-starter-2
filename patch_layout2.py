import sys

with open('src/layouts/Layout.astro', 'r') as f:
    content = f.read()

content = content.replace('''  post_hero?: {
    date?: string | Date;
    author?: string;
    tags?: string[];
  };
}''', '''  post_hero?: {
    date?: string | Date;
    author?: string;
    tags?: string[];
  };
  itemListElements?: Array<{ name: string; url?: string }>;
}''')

content = content.replace('''const { seo, title, article, breadcrumbs, post_hero } = Astro.props;''', '''const { seo, title, article, breadcrumbs, post_hero, itemListElements } = Astro.props;''')

content = content.replace('''    <Seo title={title} seo={seo} article={resolvedArticle} breadcrumbs={breadcrumbs} />''', '''    <Seo title={title} seo={seo} article={resolvedArticle} breadcrumbs={breadcrumbs} itemListElements={itemListElements} />''')

with open('src/layouts/Layout.astro', 'w') as f:
    f.write(content)
