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
    no_index: z.boolean().optional().default(false),
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
      image_width: z.number().optional(),
      image_height: z.number().optional(),
    }),
    thumb_image_path: z.string(),
    thumb_image_width: z.number().optional(),
    thumb_image_height: z.number().optional(),
    thumb_image_alt: z.string(),
      image_width: z.number().optional(),
      image_height: z.number().optional(),
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
    seo: seoSchema,
  }),
});

const beveragesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/beverages" }),
  schema: z.object({
    title: z.string(),
    hydration_index: z.number().optional(),
    description: z.string().optional(),
    seo: seoSchema,
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    definition: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = {
  reference: referenceCollection,
  beverages: beveragesCollection,
  glossary: glossaryCollection,
  blog: blogCollection,
  pages: pagesCollection,
};
