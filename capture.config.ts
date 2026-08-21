import { PUBLIC_WCS_PK } from "astro:env/client";

/**
 * Form capture configuration
 */
export const capture = {
  endpoint: "https://api.markremover.com",
  publicKey: PUBLIC_WCS_PK,
  forms: {
    contact: "contact",
    newsletter: "newsletter",
    waitlist: "waitlist",
    quote: "quote",
    results: "results"
  },
  thanksUrl: "/thanks/",
  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
