/**
 * JSON-LD (schema.org) builders.
 *
 * Every page emits a single `@graph` containing the site's `WebSite` and
 * `Organization` nodes plus a node for the page itself. Nodes reference each
 * other by `@id`, which is what Google's parsers prefer over repeated
 * duplicate blocks.
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

function websiteNode(base: string): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": id(base, "website"),
    url: new URL("/", base).toString(),
    name: site.site_title,
    description: site.description,
    inLanguage: site.lang,
    publisher: { "@id": id(base, "organization") },
  };
}

function organizationNode(base: string): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "Organization",
    "@id": id(base, "organization"),
    name: site.organization?.name || site.site_title,
    url: new URL("/", base).toString(),
  };

  if (site.organization?.logo) {
    node.logo = {
      "@type": "ImageObject",
      "@id": id(base, "logo"),
      inLanguage: site.lang,
      url: absoluteUrl(site.organization.logo, base),
      contentUrl: absoluteUrl(site.organization.logo, base),
      caption: site.site_title,
    };
    node.image = { "@id": id(base, "logo") };
  }
  if (site.organization?.same_as?.length) {
    node.sameAs = site.organization.same_as;
  }
  return node;
}

function breadcrumbNode(base: string, items: BreadcrumbItem[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1]?.url ?? base}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url, base),
    })),
  };
}

/** The full JSON-LD graph for a page. Returns `null` for noindex pages. */
export function buildSchemaGraph(options: PageSchemaOptions): JsonLdNode | null {
  const { seo, siteUrl, breadcrumbs } = options;
  if (seo.noIndex) return null;

  const base = (siteUrl ?? new URL(seo.canonical)).toString();
  const isArticle = Boolean(seo.article);

  const pageNode: JsonLdNode = {
    "@type": isArticle ? "BlogPosting" : "WebPage",
    "@id": `${seo.canonical}#${isArticle ? "article" : "webpage"}`,
    url: seo.canonical,
    name: seo.rawTitle,
    headline: seo.rawTitle,
    description: seo.description,
    inLanguage: seo.lang,
    isPartOf: { "@id": id(base, "website") },
    primaryImageOfPage: seo.image
      ? {
          "@type": "ImageObject",
          "@id": `${seo.canonical}#primaryimage`,
          inLanguage: seo.lang,
          url: seo.image,
          contentUrl: seo.image,
          ...(seo.imageAlt && { caption: seo.imageAlt })
        }
      : undefined,
  };

  if (isArticle) {
    pageNode.image = seo.image ? { "@id": `${seo.canonical}#primaryimage` } : undefined;
    pageNode.datePublished = seo.article?.publishedTime;
    pageNode.dateModified = seo.article?.modifiedTime ?? seo.article?.publishedTime;
    pageNode.publisher = { "@id": id(base, "organization") };
    if (seo.article?.author) {
      pageNode.author = {
        "@type": "Person",
        "@id": id(base, `author-${seo.article.author.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`),
        name: seo.article.author
      };
    }
    if (seo.article?.tags?.length) {
      pageNode.keywords = seo.article.tags;
    }
    pageNode.mainEntityOfPage = { "@type": "WebPage", "@id": seo.canonical };
  } else {
    pageNode.about = { "@id": id(base, "organization") };
  }

  const graph: JsonLdNode[] = [websiteNode(base), organizationNode(base), prune(pageNode)];
  if (breadcrumbs?.length) graph.push(breadcrumbNode(base, breadcrumbs));

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

/** Drop undefined values so the emitted JSON stays clean. */
function prune(node: JsonLdNode): JsonLdNode {
  return Object.fromEntries(Object.entries(node).filter(([, value]) => value !== undefined));
}
