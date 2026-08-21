import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const seoSchema = z
  .object({
    page_description: z.string().optional().nullable(),
    canonical_url: z.string().optional().nullable(),
    featured_image: z.string().optional().nullable(),
    featured_image_alt: z.string().optional().nullable(),
    author_twitter_handle: z.string().optional().nullable(),
    open_graph_type: z.string().optional().nullable(),
    no_index: z.boolean().optional(),
  })
  .optional();

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      image: z.string(),
      image_alt: z.string(),
    }),
    thumb_image_path: z.string(),
    thumb_image_alt: z.string(),
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

const referenceCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()).optional(),
    seo: seoSchema,
  }),
});

const taxonomyCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/taxonomy" }),
  schema: z.object({
    title: z.string(),
    region: z.string().optional(),
    utility: z.string().optional(),
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    term: z.string(),
    definition: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  reference: referenceCollection,
  taxonomy: taxonomyCollection,
  glossary: glossaryCollection,
};
