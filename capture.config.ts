/**
 * Form capture configuration — the ONLY file to edit when standing up a new site.
 *
 * Every form on this site posts to the shared capture server
 * (https://api.markremover.com/docs). There is no form backend, mail service or
 * API route in this repo, and none should be added.
 *
 * The public key (`wcs_pk_…`) is write-only by construction: the capture
 * endpoint connects to Postgres as a role with no SELECT privilege on captured
 * content, so a public key can create a submission and nothing else — it cannot
 * read, list, edit or delete. It is safe in client JavaScript and safe in git.
 * An admin key (`wcs_sk_…`) reads every submission and must NEVER appear here.
 */

export const capture = {
  /** Capture server origin. Same for every site; change only if it moves. */
  endpoint: "https://api.markremover.com",

  /**
   * This site's write-only public key. Per-site — swap it for a new domain.
   * Deliberately committed rather than an env var: it is inlined into the
   * browser bundle anyway, and a missing env var would silently break forms.
   *
   * TODO: Replace this placeholder key with the real wcs_pk_ key for handpano.com before launch.
   */
  publicKey: "wcs_pk_PLACEHOLDER_REPLACE_BEFORE_LAUNCH",

  /**
   * Form labels — how submissions are grouped in the dashboard. Add one per
   * form on the site; any string up to 64 chars works, no registration needed.
   */
  forms: {
    contact: "contact",
    newsletter: "newsletter",
    guide_interest: "guide_interest",
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
