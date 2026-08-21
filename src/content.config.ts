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
  schema: ({ image }) => z.object({
    title: z.string(),
    post_hero: z.object({
      date: z.string().or(z.date()),
      heading: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      image: image(),
      image_alt: z.string(),
    }),
    thumb_image_path: image(),
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

const formatSchema = z.object({
  title: z.string(),
  description: z.string(),
  seo: seoSchema,
});

const formatCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/formats" }),
  schema: formatSchema,
});

const glossarySchema = z.object({
  title: z.string(),
  description: z.string(),
  seo: seoSchema,
});

const glossaryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/glossary" }),
  schema: glossarySchema,
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  formats: formatCollection,
  glossary: glossaryCollection,
};
