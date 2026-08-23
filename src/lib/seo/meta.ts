import site from "../../../data/site.json";

export interface SeoFrontmatter {
  page_description?: string | null;
  featured_image?: string | null;
  featured_image_alt?: string | null;
  canonical_url?: string | null;
  no_index?: boolean | null;
  open_graph_type?: string | null;
  author_twitter_handle?: string | null;
  list_data?: { name: string, items: { name: string, description?: string }[] } | null;
}

export interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  author_name?: string;
  tags?: string[];
}

export interface ResolveSeoOptions {
  title?: string;
  seo?: SeoFrontmatter | null;
  url: URL;
  siteUrl?: URL | undefined;
  article?: ArticleMeta;
}

export interface ResolvedSeo {
  title: string;
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
  listData?: { name: string, items: { name: string, description?: string }[] };
}

const FALLBACK_ORIGIN = "http://localhost:4321";

export function absoluteUrl(pathOrUrl: string, base: URL | string): string {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(pathOrUrl, base).toString();
}

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
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    locale: site.locale ?? "en_US",
    lang: site.lang ?? "en",
    siteName: site.site_title,
    twitterSite: site.twitter_site ?? "",
    twitterCreator: seo?.author_twitter_handle || site.twitter_site || "",
    themeColor: site.theme_color ?? "#ffffff",
    article,
    listData: seo?.list_data || undefined,
  };
}
