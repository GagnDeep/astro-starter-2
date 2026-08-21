import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
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
  schema: z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().optional(),
      image: z.string().optional(),
      image_alt: z.string().optional(),
    }).optional(),
    thumb_image_path: z.string().optional(),
    thumb_image_alt: z.string().optional(),
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
  page_size: z.number().positive().optional(),
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
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: seoSchema,
  }),
});

const calculatorsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/calculators" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  reference: referenceCollection,
  glossary: glossaryCollection,
  calculators: calculatorsCollection,
};
