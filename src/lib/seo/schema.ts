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
      "@type": "ImageObject",
      "@id": id(base, "logo"),
      url: absoluteUrl(site.organization.logo, base),
    };
    node.image = { "@id": id(base, "logo") };
  }
  if (site.organization?.same_as && site.organization.same_as.length > 0) {
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
export function buildSchemaGraph({
  seo,
  siteUrl,
  breadcrumbs,
}: PageSchemaOptions): JsonLdNode | null {
  if (seo.noIndex) return null;

  const base = (siteUrl ?? new URL(seo.canonical)).toString();
  const isArticle = Boolean(seo.article);

  const pageNode: JsonLdNode = {
    "@type": isArticle ? "Article" : "WebPage",
    "@id": `${seo.canonical}#${isArticle ? "article" : "webpage"}`,
    url: seo.canonical,
    name: seo.rawTitle,
    headline: seo.rawTitle,
    description: seo.description,
    inLanguage: seo.lang,
    isPartOf: { "@id": id(base, "website") },
    about: { "@id": id(base, "organization") },
  };

  if (seo.image) {
    pageNode.primaryImageOfPage = {
      "@type": "ImageObject",
      "@id": `${seo.canonical}#primaryimage`,
      url: seo.image,
      ...(seo.imageAlt && { caption: seo.imageAlt })
    };
    pageNode.image = { "@id": `${seo.canonical}#primaryimage` };
  }

  if (isArticle) {
    pageNode.datePublished = seo.article?.publishedTime;
    pageNode.dateModified = seo.article?.modifiedTime ?? seo.article?.publishedTime;
    pageNode.publisher = { "@id": id(base, "organization") };
    if (seo.article?.author) {
      const authorMatch = site.authors?.find(a => a.name === seo.article?.author);
      const authorUrl = authorMatch ? new URL(`/authors/${authorMatch.slug}/`, base).toString() : `${seo.canonical}#author`;
      pageNode.author = { "@type": "Person", "@id": authorUrl, name: seo.article.author };
    }
    if (seo.article?.tags?.length) {
      pageNode.keywords = seo.article.tags;
    }
    pageNode.mainEntityOfPage = { "@type": "WebPage", "@id": seo.canonical };
  }

  const authorMatch = isArticle && site.authors?.find(a => a.name === seo.article?.author);
  const authorNode = authorMatch ? {
    "@type": "Person",
    "@id": new URL(`/authors/${authorMatch.slug}/`, base).toString(),
    "name": authorMatch.name,
    "url": new URL(`/authors/${authorMatch.slug}/`, base).toString()
  } : null;

  let graphNodes = [websiteNode(base), organizationNode(base), prune(pageNode)];
  if (authorNode) graphNodes.push(authorNode);
  if (base.includes('/passport/') || base.includes('/oci/')) {
    const isPassport = base.includes('/passport/');
    const itemList: JsonLdNode = {
      "@type": "ItemList",
      "@id": `${seo.canonical}#list`,
      "itemListElement": isPassport ? [
        { "@type": "ListItem", "position": 1, "url": new URL("/passport/standard-renewal/", base).toString() },
        { "@type": "ListItem", "position": 2, "url": new URL("/passport/change-of-appearance/", base).toString() },
        { "@type": "ListItem", "position": 3, "url": new URL("/passport/tatkaal-service/", base).toString() },
        { "@type": "ListItem", "position": 4, "url": new URL("/passport/lost-damaged/", base).toString() }
      ] : [
        { "@type": "ListItem", "position": 1, "url": new URL("/oci/new-application/", base).toString() },
        { "@type": "ListItem", "position": 2, "url": new URL("/oci/renewal/", base).toString() },
        { "@type": "ListItem", "position": 3, "url": new URL("/oci/lost-passport/", base).toString() },
        { "@type": "ListItem", "position": 4, "url": new URL("/oci/minor-application/", base).toString() }
      ]
    };
    pageNode.mainEntity = { "@id": `${seo.canonical}#list` };
    graphNodes = [websiteNode(base), organizationNode(base), prune(pageNode), prune(itemList)];
    if (authorNode) graphNodes.push(authorNode);
  }

  const graph: JsonLdNode[] = graphNodes;
  if (breadcrumbs?.length) graph.push(breadcrumbNode(base, breadcrumbs));

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Drop undefined values so the emitted JSON stays clean. */
function prune(node: JsonLdNode): JsonLdNode {
  return Object.fromEntries(Object.entries(node).filter(([, value]) => value !== undefined));
}
