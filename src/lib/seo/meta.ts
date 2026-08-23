/**
 * SEO metadata resolution.
 *
 * One place decides the final title, description, canonical URL, social image
 * and robots directives for every page. Pages/layouts only supply what they
 * know; site-wide fallbacks come from `data/site.json`.
 *
 * Precedence everywhere: page front matter → site defaults → safe fallback.
 */
import site from "../../../data/site.json";

export interface SeoFrontmatter {
  page_description?: string | null;
  featured_image?: string | null;
  featured_image_alt?: string | null;
  canonical_url?: string | null;
  no_index?: boolean | null;
  open_graph_type?: string | null;
  author_twitter_handle?: string | null;
}

export interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export interface ResolveSeoOptions {
  /** Page title, without the site-title suffix. */
  title?: string;
  seo?: SeoFrontmatter | null;
  /** `Astro.url` for the current page. */
  url: URL;
  /** `Astro.site` — the configured production origin. */
  siteUrl?: URL | undefined;
  article?: ArticleMeta;
}

export interface ResolvedSeo {
  /** Full document title, including the site-title suffix. */
  title: string;
  /** Page title on its own — used for headings and structured data. */
  rawTitle: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  openGraphType: string;
  noIndex: boolean;
  robots: string;
  locale: string;
  lang: string;
  siteName: string;
  twitterSite: string;
  twitterCreator: string;
  themeColor: string;
  article?: ArticleMeta;
}

const FALLBACK_ORIGIN = "http://localhost:4321";

/** Absolute URL for an asset path, passing through URLs that are already absolute. */
export function absoluteUrl(pathOrUrl: string, base: URL | string): string {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(pathOrUrl, base).toString();
}

/**
 * Canonical URL for a page: production origin + current path, with the trailing
 * slash normalised to match `trailingSlash: "always"` in `astro.config.mjs`.
 * Query strings and hashes are intentionally dropped.
 */
export function canonicalFor(url: URL, siteUrl: URL | undefined, override?: string | null): string {
  const base = siteUrl ?? new URL(FALLBACK_ORIGIN);
  if (override) return absoluteUrl(override, base);

  const canonical = new URL(url.pathname, base);
  const hasExtension = /\.[a-z0-9]+$/i.test(canonical.pathname);
  if (!hasExtension && !canonical.pathname.endsWith("/")) {
    canonical.pathname += "/";
  }
  return canonical.toString();
}

/** Build the `<title>`: home page uses the bare title, inner pages get a suffix. */
export function pageTitle(title: string | undefined, url: URL): string {
  if (!title) return site.site_title;
  if (url.pathname === "/" || url.pathname === "") return title;
  return `${title} | ${site.site_title}`;
}

export function resolveSeo({ title, seo, url, siteUrl, article }: ResolveSeoOptions): ResolvedSeo {
  const base = siteUrl ?? new URL(FALLBACK_ORIGIN);
  const noIndex = Boolean(seo?.no_index);
  const image = seo?.featured_image || site.image;

  return {
    title: pageTitle(title, url),
    rawTitle: title || site.site_title,
    description: seo?.page_description || site.description,
    canonical: canonicalFor(url, siteUrl, seo?.canonical_url),
    image: absoluteUrl(image, base),
    imageAlt: seo?.featured_image_alt || site.image_alt,
    openGraphType: seo?.open_graph_type || (article ? "article" : "website"),
    noIndex,
    // `max-image-preview:large` is what unlocks large thumbnails in Google
    // Discover / image results; the other two lift snippet truncation limits.
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    locale: site.locale ?? "en_US",
    lang: site.lang ?? "en",
    siteName: site.site_title,
    twitterSite: "",
    twitterCreator: seo?.author_twitter_handle || "",
    themeColor: site.theme_color ?? "#ffffff",
    article,
  };
}
