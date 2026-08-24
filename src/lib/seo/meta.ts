import site from "../../../data/site.json";

export interface SeoFrontmatter {
  /** ~155 character unique description. Falls back to site description. */
  page_description?: string | null;
  /**
   * Only needed if this page duplicates another.
   * Auto-generated from Astro.url if omitted.
   */
  canonical_url?: string | null;
  /** Absolute path (e.g., /images/hero.jpg). Falls back to site default OG image. */
  featured_image?: string | null;
  featured_image_alt?: string | null;
  author_twitter_handle?: string | null;
  open_graph_type?: string | null;
  no_index?: boolean;
}

export interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export interface ResolvedSeo {
  /** Just the page name (e.g. "About") */
  rawTitle: string;
  /** Page Name — Site Title */
  fullTitle: string;
  description: string;
  /** Always absolute, always trailing-slash normalised. */
  canonical: string;
  /** Absolute URL to the OG image. */
  image: string;
  imageAlt: string;
  openGraphType: "website" | "article" | "profile" | string;
  noIndex: boolean;
  lang: string;
  locale: string;
  twitterCreator?: string;
  article?: ArticleMeta;
  siteName: string;
  twitterSite?: string;
  themeColor: string;
}

export interface MetaResolutionOptions {
  frontmatterTitle: string;
  frontmatterSeo?: SeoFrontmatter;
  articleMeta?: ArticleMeta;
  /** The current `Astro.url` */
  currentUrl: URL;
  /** The `site:` config value from `astro.config.mjs` */
  siteUrl: URL | undefined;
}

/** Prepends site base to root-relative paths, ignoring fully-qualified URLs. */
export function absoluteUrl(pathOrUrl: string, base: string | URL): string {
  try {
    return new URL(pathOrUrl).toString();
  } catch {
    const cleanPath = pathOrUrl.startsWith("/") ? pathOrUrl.slice(1) : pathOrUrl;
    return new URL(cleanPath, base).toString();
  }
}

/** Ensure canonical URLs match the `trailingSlash: "always"` Astro config. */
function normaliseCanonical(urlStr: string): string {
  const url = new URL(urlStr);
  if (!url.pathname.endsWith("/") && !url.pathname.split("/").pop()?.includes(".")) {
    url.pathname = `${url.pathname}/`;
  }
  return url.toString();
}

/**
 * Merges page frontmatter with site.json defaults.
 * Output is fully resolved and absolute-ised, ready to render `<meta>` tags.
 */
export function resolveMeta({
  frontmatterTitle,
  frontmatterSeo,
  articleMeta,
  currentUrl,
  siteUrl,
}: MetaResolutionOptions): ResolvedSeo {
  // Astro.url does not know the site origin during SSG, so we inject it.
  const base = siteUrl || currentUrl;

  // Clean up the title: index pages get just the site name, others get Page - Site
  const rawTitle = frontmatterTitle || site.site_title;
  const isHome = currentUrl.pathname === "/" || frontmatterTitle === site.site_title;
  const fullTitle = isHome ? site.site_title : `${rawTitle} — ${site.site_title}`;

  // Canonical: prefer frontmatter, fall back to current URL, normalise trailing slash
  let canonicalPath = frontmatterSeo?.canonical_url;
  if (!canonicalPath) canonicalPath = currentUrl.pathname;
  const canonical = normaliseCanonical(absoluteUrl(canonicalPath, base));

  // Images: absolute-ise whatever path we get
  const imagePath = frontmatterSeo?.featured_image || site.image;
  const image = absoluteUrl(imagePath, base);
  const imageAlt = frontmatterSeo?.featured_image_alt || site.image_alt;

  // Description fallback
  const description = frontmatterSeo?.page_description || site.description;

  const openGraphType = frontmatterSeo?.open_graph_type || (articleMeta ? "article" : "website");

  return {
    rawTitle,
    fullTitle,
    description,
    canonical,
    image,
    imageAlt,
    openGraphType,
    noIndex: frontmatterSeo?.no_index ?? false,
    lang: site.lang,
    locale: site.locale,
    twitterCreator: frontmatterSeo?.author_twitter_handle || undefined,
    article: articleMeta,
    siteName: site.site_title,
    twitterSite: site.twitter_site || undefined,
    themeColor: site.theme_color,
  };
}
