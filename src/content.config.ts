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
      image: z.string().or(z.object({
        src: z.string(),
        width: z.number(),
        height: z.number(),
        format: z.string()
      })).or(z.any()), // Allow image() helper integration if configured
      image_alt: z.string(),
    }),
    thumb_image_path: z.string().or(z.object({
        src: z.string(),
        width: z.number(),
        height: z.number(),
        format: z.string()
    })).or(z.any()), // Allow image() helper integration if configured
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

const baseSchema = z.object({
  title: z.string(),
  seo: seoSchema,
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  reference: defineCollection({ loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reference" }), schema: baseSchema }),
  foods: defineCollection({ loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/foods" }), schema: baseSchema }),
  glossary: defineCollection({ loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }), schema: baseSchema }),
  calculators: defineCollection({ loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/calculators" }), schema: baseSchema }),
};
