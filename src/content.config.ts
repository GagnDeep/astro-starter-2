import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const seoSchema = z
  .object({
    page_description: z.string().nullable().optional(),
    canonical_url: z.string().nullable().optional(),
    featured_image: z.string().nullable().optional(),
    featured_image_alt: z.string().nullable().optional(),
    author_twitter_handle: z.string().nullable().optional(),
    open_graph_type: z.string().nullable().optional(),
    no_index: z.boolean().optional(),
  })
  .optional();

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      image: image().optional(),
      image_alt: z.string().optional(),
    }),
    thumb_image_path: image().optional(),
    thumb_image_alt: z.string().optional(),
    seo: seoSchema,
  }),
});

const libraryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/library" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seo: seoSchema,
  }),
});

const pageSchema = z.object({
  title: z.string(),
  hero_block: z.any().optional(),
  content_blocks: z.array(z.any()).optional(),
  seo: seoSchema,
});

const paginatedCollectionSchema = z.object({
  title: z.string(),
  page_size: z.number().positive(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,astro}', base: "./src/content/pages" }),
  schema: z.union([paginatedCollectionSchema, pageSchema]),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  library: libraryCollection,
  glossary: glossaryCollection,
};
