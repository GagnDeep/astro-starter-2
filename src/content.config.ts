import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const citationSchema = z.object({
  title: z.string(),
  publication: z.string(),
  year: z.number(),
  doiUrl: z.string().optional(),
});

const conditionsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/conditions" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    category: z.enum(['Thyroid & Parathyroid', 'Diabetes & Metabolism', 'Hormones & Reproductive Health', 'Bone & Mineral']),
    lastReviewed: z.string(),
    author: z.string().default('Dr. Ameena Patel, MD, FACE'),
    symptoms: z.array(z.string()),
    diagnosticTests: z.array(z.string()),
    treatmentTradeoffs: z.array(z.object({
      option: z.string(),
      pros: z.string(),
      cons: z.string(),
      clinicalNote: z.string()
    })),
    urgentCareRedFlags: z.array(z.string()),
    citations: z.array(citationSchema),
    seo: z.object({
      description: z.string(),
      keywords: z.array(z.string()).optional()
    }).optional()
  })
});

const proceduresCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/procedures" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    durationMinutes: z.number(),
    inOffice: z.boolean().default(true),
    preparationSteps: z.array(z.string()),
    whatToExpect: z.array(z.string()),
    aftercareNotes: z.string(),
    lastReviewed: z.string(),
    author: z.string().default('Dr. Ameena Patel, MD, FACE'),
    citations: z.array(citationSchema),
    seo: z.object({
      description: z.string(),
      keywords: z.array(z.string()).optional()
    }).optional()
  })
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.string(),
    lastReviewed: z.string(),
    author: z.string().default('Dr. Ameena Patel, MD, FACE'),
    tags: z.array(z.string()),
    citations: z.array(citationSchema),
    seo: z.object({
      description: z.string(),
      keywords: z.array(z.string()).optional()
    }).optional()
  })
});

export const collections = {
  conditions: conditionsCollection,
  procedures: proceduresCollection,
  blog: blogCollection,
};
