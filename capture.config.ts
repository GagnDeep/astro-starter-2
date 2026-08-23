/**
 * Form capture configuration
 */

export const capture = {
  endpoint: "https://api.markremover.com",

  /**
   * This site's write-only public key. Per-site — swap it for a new domain.
   * [TODO: Replace this placeholder with the real jsonmock wcs_pk_ key before launch]
   */
  publicKey: "wcs_pk_placeholder",

  forms: {
    contact: "contact",
    newsletter: "newsletter",
    waitlist: "waitlist",
    quote: "quote",
    trial: "trial",
  },

  thanksUrl: "/thanks/",

  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
