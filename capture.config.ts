/**
 * Form capture configuration — the ONLY file to edit when standing up a new site.
 */

export const capture = {
  /** Capture server origin. Same for every site; change only if it moves. */
  endpoint: "https://api.markremover.com",

  /**
   * This site's write-only public key. Per-site — swap it for a new domain.
   * PLACEHOLDER KEY MUST BE REPLACED BEFORE LAUNCH.
   */
  publicKey: "wcs_pk_placeholder_replace_before_launch",

  /**
   * Form labels — how submissions are grouped in the dashboard.
   */
  forms: {
    contact: "contact",
    job_post: "job_post",
    sponsorship: "sponsorship",
    correction: "correction",
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
