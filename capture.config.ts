/**
 * Global configuration for the shared capture server.
 *
 * This is the ONLY place form capture is configured. Do not add API routes,
 * mailers, or external form integrations.
 *
 * The public key (`wcs_pk_…`) is write-only and safe to commit — it has no
 * `SELECT` permissions on the capture database. The admin key (`wcs_sk_…`) reads
 * every submission and must NEVER appear here.
 */

export const capture = {
  /** Capture server origin. Same for every site; change only if it moves. */
  endpoint: "https://api.markremover.com",

  /**
   * This site's write-only public key. Per-site — swap it for a new domain.
   * Deliberately committed rather than an env var: it is inlined into the
   * browser bundle anyway, and a missing env var would silently break forms.
   *
   * FIXME: Replace this placeholder public key before launch!
   */
  publicKey: "wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE",

  /**
   * Form labels — how submissions are grouped in the dashboard. Add one per
   * form on the site; any string up to 64 chars works, no registration needed.
   */
  forms: {
    contact: "contact",
    correction: "correction"
  },

  /**
   * Where a no-JavaScript submission lands. Must be same-origin with the page
   * holding the form (the server refuses a cross-origin redirect target), and
   * must be a real route in `src/pages/`.
   */
  thanksUrl: "/thanks/",

  /**
   * Honeypot input name. Leave `null` unless the *site* has a honeypot
   * configured server-side (`honeypot_field`); a honeypot the server does not
   * know about only adds a field to the stored payload.
   */
  honeypotField: null as string | null,
} as const;

export type FormLabel = keyof typeof capture.forms;
