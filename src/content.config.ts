import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const seoSchema = z.object({
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  canonical_url: z.string().optional(),
  no_index: z.boolean().default(false),
}).optional();

const deductionsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/deductions" }),
  schema: z.object({
    title: z.string(),
    short_title: z.string(),
    category: z.enum([
      "Equipment & Hardware",
      "Software & Cloud",
      "Office & Workplace",
      "Meals & Travel",
      "Services & Subcontractors",
      "Marketing & Admin",
      "Health & Insurance",
      "Education & Training",
    ]),
    deduction_percentage: z.string(), // e.g. "100%" or "50%" or "Pro-rated"
    audit_risk: z.enum(["LOW", "MEDIUM", "HIGH"]),
    irs_rule_citation: z.string(),
    summary: z.string(),
    quick_verdict: z.string(),
    what_you_can_deduct: z.array(z.string()),
    what_you_cannot_deduct: z.array(z.string()),
    receipt_requirement: z.string(),
    seo: seoSchema,
  }),
});

const guidesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default("Bro Tax CPA Team"),
    category: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    seo: seoSchema,
  }),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().default("Bro Tax CPA Team"),
    tags: z.array(z.string()),
    seo: seoSchema,
  }),
});

export const collections = {
  deductions: deductionsCollection,
  guides: guidesCollection,
  posts: postsCollection,
};
