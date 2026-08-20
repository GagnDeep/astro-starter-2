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

const deductionsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/deductions" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    deductibilityPercentage: z.number().min(0).max(100),
    legalReference: z.string(),
    maxThresholdRon: z.number().nullable().optional(),
    summary: z.string(),
    benefits: z.array(z.string()),
    requiredDocuments: z.array(z.string()),
    publishedDate: z.string().or(z.date()),
    seo: seoSchema,
  }),
});

const guidesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(["Începător", "Intermediar", "Avansat"]),
    targetAudience: z.string(),
    updatedDate: z.string().or(z.date()),
    readTimeMinutes: z.number().positive(),
    seo: seoSchema,
  }),
});

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

export const collections = {
  deductions: deductionsCollection,
  guides: guidesCollection,
  blog: blogCollection,
  pages: pagesCollection,
};
