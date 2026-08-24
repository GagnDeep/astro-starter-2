/**
 * JSON-LD (schema.org) builders.
 */
import site from "../../../data/site.json";
import { absoluteUrl, type ResolvedSeo } from "./meta";

type JsonLdNode = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface PageSchemaOptions {
  seo: ResolvedSeo;
  siteUrl: URL | undefined;
  breadcrumbs?: BreadcrumbItem[];
  itemList?: {
    name: string;
    items: { name: string; description?: string }[];
  };
}

const id = (base: string, hash: string) => `${new URL("/", base).toString()}#${hash}`;

function prune(node: JsonLdNode): JsonLdNode {
  return Object.fromEntries(Object.entries(node).filter(([, value]) => value !== undefined));
}

/** The full JSON-LD graph for a page. Returns `null` for noindex pages. */
export function buildSchemaGraph(options: PageSchemaOptions): JsonLdNode | null {
  const { seo, siteUrl, breadcrumbs } = options;
  if (seo.noIndex) return null;

  const base = (siteUrl ?? new URL(seo.canonical)).toString();
  const isArticle = Boolean(seo.article);
  const graph: JsonLdNode[] = [];

  const websiteNode: JsonLdNode = {
    "@type": "WebSite",
    "@id": id(base, "website"),
    url: new URL("/", base).toString(),
    name: site.site_title,
    description: site.description,
    inLanguage: site.lang,
    publisher: { "@id": id(base, "organization") },
  };
  graph.push(websiteNode);

  const orgNode: JsonLdNode = {
    "@type": "Organization",
    "@id": id(base, "organization"),
    name: site.organization?.name || site.site_title,
    url: new URL("/", base).toString(),
  };

  if (site.organization?.logo) {
    const logoNode = {
      "@type": "ImageObject",
      "@id": id(base, "logo"),
      inLanguage: site.lang,
      url: absoluteUrl(site.organization.logo, base),
      contentUrl: absoluteUrl(site.organization.logo, base),
      caption: site.site_title,
    };
    orgNode.logo = { "@id": id(base, "logo") };
    orgNode.image = { "@id": id(base, "logo") };
    graph.push(logoNode);
  }
  if (site.organization?.same_as?.length) {
    orgNode.sameAs = site.organization.same_as;
  }
  graph.push(orgNode);

  const pageNode: JsonLdNode = {
    "@type": isArticle ? "BlogPosting" : "WebPage",
    "@id": `${seo.canonical}#${isArticle ? "article" : "webpage"}`,
    url: seo.canonical,
    name: seo.rawTitle,
    headline: seo.rawTitle,
    description: seo.description,
    inLanguage: seo.lang,
    isPartOf: { "@id": id(base, "website") },
  };

  if (seo.image) {
    const imgObj = {
      "@type": "ImageObject",
      "@id": `${seo.canonical}#primaryimage`,
      inLanguage: seo.lang,
      url: seo.image,
      contentUrl: seo.image,
      ...(seo.imageAlt && { caption: seo.imageAlt })
    };
    pageNode.primaryImageOfPage = { "@id": `${seo.canonical}#primaryimage` };
    graph.push(prune(imgObj));
  }

  if (isArticle) {
    if (seo.image) { pageNode.image = { "@id": `${seo.canonical}#primaryimage` }; }
    pageNode.datePublished = seo.article?.publishedTime;
    pageNode.dateModified = seo.article?.modifiedTime ?? seo.article?.publishedTime;
    pageNode.publisher = { "@id": id(base, "organization") };

    if (seo.article?.author) {
      const authorId = id(base, `author-${seo.article.author.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
      pageNode.author = { "@id": authorId };
      graph.push(prune({
        "@type": "Person",
        "@id": authorId,
        name: seo.article.author
      }));
    }

    if (seo.article?.tags?.length) {
      pageNode.keywords = seo.article.tags;
    }
    pageNode.mainEntityOfPage = { "@type": "WebPage", "@id": seo.canonical };
  } else {
    pageNode.about = { "@id": id(base, "organization") };
  }

  graph.push(prune(pageNode));

  if (breadcrumbs?.length) {
    const breadcrumbNode = {
      "@type": "BreadcrumbList",
      "@id": `${breadcrumbs[breadcrumbs.length - 1]?.url ?? base}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.url, base),
      })),
    };
    graph.push(breadcrumbNode);
  }

  if (options.itemList && options.itemList.items.length > 0) {
    const itemListSchema: JsonLdNode = {
      "@type": "ItemList",
      "@id": `${seo.canonical}#itemlist`,
      name: options.itemList.name,
      itemListElement: options.itemList.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description
      }))
    };
    graph.push(prune(itemListSchema));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
