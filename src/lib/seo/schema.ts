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
      "@id": id(base, "organization/logo")
    };
  }
  if (site.organization?.same_as?.length) {
    node.sameAs = site.organization.same_as;
  }
  return node;
}

function organizationLogoNode(base: string): JsonLdNode | null {
  if (!site.organization?.logo) return null;
  return {
    "@type": "ImageObject",
    "@id": id(base, "organization/logo"),
    url: absoluteUrl(site.organization.logo, base),
    caption: site.organization?.name || site.site_title
  };
}

function authorNode(base: string, authorName: string): JsonLdNode {
  // If we have an author in site.json matching by name, use it, otherwise fallback
  const authorData = site.authors?.find((a) => a.name === authorName);
  const safeName = authorName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const node: JsonLdNode = {
    "@type": "Person",
    "@id": id(base, `author/${safeName}`),
    name: authorName,
  };

  if (authorData) {
    if (authorData.sameAs && authorData.sameAs.length > 0) {
      node.sameAs = authorData.sameAs;
    }
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
export function buildSchemaGraph({
  seo,
  siteUrl,
  breadcrumbs,
}: PageSchemaOptions): JsonLdNode | null {
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
  };

  const graph: JsonLdNode[] = [websiteNode(base), organizationNode(base)];

  const logoNode = organizationLogoNode(base);
  if (logoNode) graph.push(logoNode);

  if (seo.image) {
    const primaryImageId = `${seo.canonical}#primaryimage`;
    pageNode.primaryImageOfPage = { "@id": primaryImageId };
    if (isArticle) {
      pageNode.image = { "@id": primaryImageId };
    }

    graph.push({
      "@type": "ImageObject",
      "@id": primaryImageId,
      url: seo.image,
      caption: seo.imageAlt || undefined
    });
  }

  if (isArticle) {
    pageNode.datePublished = seo.article?.publishedTime;
    pageNode.dateModified = seo.article?.modifiedTime ?? seo.article?.publishedTime;
    pageNode.publisher = { "@id": id(base, "organization") };
    if (seo.article?.author) {
      const authorSafeName = seo.article.author.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      pageNode.author = { "@id": id(base, `author/${authorSafeName}`) };
      graph.push(authorNode(base, seo.article.author));
    }
    if (seo.article?.tags?.length) {
      pageNode.keywords = seo.article.tags;
    }
    pageNode.mainEntityOfPage = { "@type": "WebPage", "@id": seo.canonical };
  }

  graph.push(prune(pageNode));
  if (breadcrumbs?.length) graph.push(breadcrumbNode(base, breadcrumbs));

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Drop undefined values so the emitted JSON stays clean. */
function prune(node: JsonLdNode): JsonLdNode {
  return Object.fromEntries(Object.entries(node).filter(([, value]) => value !== undefined));
}
