/**
 * Form capture configuration
 */

export const capture = {
  /** Capture server origin. Same for every site; change only if it moves. */
  endpoint: "https://api.markremover.com",

  /**
   * This site's write-only public key. Per-site — swap it for a new domain.
   * Placeholder key; MUST BE REPLACED BEFORE LAUNCH.
   */
  publicKey: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",

  /**
   * Form labels for Institute of Catering
   */
  forms: {
    contact: "contact",
    newsletter: "newsletter",
    quote: "quote",
    certification: "certification",
    software_referral: "software_referral"
  },

  /**
   * Where a no-JavaScript submission lands.
   */
  thanksUrl: "/thanks/",

  /**
   * Honeypot input name.
   */
  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
