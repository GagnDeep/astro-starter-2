/**
 * Client-side helper for the capture API.
 *
 * One function: `submit(formLabel, fields)`. It fills in the context the server
 * cannot infer (page URL, referrer, UTM parameters), sends the request, and
 * turns every documented response into a plain `{ ok }` result so a component
 * never has to reason about status codes.
 *
 * Contract: https://api.markremover.com/docs
 */
import capture from "../../capture.config";

export interface SubmitResult {
  ok: boolean;
  /** Present on success. UUIDv7 of the stored submission. */
  id?: string;
  /** True when the server merged this into an identical earlier submission. */
  duplicate?: boolean;
  /** 'created' | 'duplicate' | 'queued' — 'queued' means spooled to disk. */
  outcome?: "created" | "duplicate" | "queued";
  /** Safe to show a visitor. Never contains server internals. */
  message?: string;
  /** Stable machine-readable failure code (e.g. 'rate_limited'). */
  code?: string;
}

/**
 * Fields the browser must not send in the JSON body.
 *
 * `key` and `redirect` exist for the no-JavaScript path: they live as hidden
 * inputs so a plain form post works. `new FormData(form)` picks them up, and a
 * body containing `redirect` makes the server answer 303 — `fetch` follows it,
 * lands on the thank-you HTML, and `.json()` then throws even though the lead
 * was stored fine. Strip them, and send the key as a header instead.
 */
const NON_PAYLOAD_FIELDS = new Set(["key", "redirect"]);

/** UTM parameters ride on the landing URL; read them once at module load,
 *  because by the time someone submits a form they may have navigated away
 *  from the page that carried them. */
const utm = (() => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of ["source", "medium", "campaign", "term", "content"]) {
    const value = params.get(`utm_${key}`);
    if (value) out[`utm_${key}`] = value;
  }
  return out;
})();

export async function submit(
  formLabel: string,
  fields: Record<string, unknown> | FormData,
): Promise<SubmitResult> {
  const entries = fields instanceof FormData ? Object.fromEntries(fields.entries()) : { ...fields };

  const body: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(entries)) {
    if (NON_PAYLOAD_FIELDS.has(key)) continue;
    // An empty optional input is noise in the dashboard, not data.
    if (typeof value === "string" && value.trim() === "") continue;
    body[key] = value;
  }

  // Anything the server does not recognise as a documented field is folded into
  // `data` automatically, so site-specific inputs need no schema change here or
  // at the other end.
  const payload = {
    ...utm,
    page_url: window.location.href,
    referrer: document.referrer || undefined,
    ...body,
  };

  try {
    const response = await fetch(
      `${capture.endpoint}/v1/collect/${encodeURIComponent(formLabel)}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-public-key": capture.publicKey,
          // Makes a network-level retry exactly-once instead of two submissions.
          "idempotency-key": requestId(),
        },
        body: JSON.stringify(payload),
      },
    );

    // 201 stored, 200 duplicate-merged, 202 spooled while the database is down.
    // All three mean the lead is safe; only 201 is "new".
    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return { ok: true, id: data.id, duplicate: data.duplicate, outcome: data.outcome };
    }

    // Failures are application/problem+json (RFC 9457). `title` is written to be
    // shown to a visitor; `code` is the stable value to branch on.
    const problem = await response.json().catch(() => null);
    return {
      ok: false,
      code: problem?.code,
      message:
        response.status === 429
          ? "Too many messages just now. Please try again in a minute."
          : (problem?.title ?? "Something went wrong. Please try again."),
    };
  } catch {
    // Offline, DNS failure, request blocked. Never surface the exception.
    return { ok: false, message: "Could not reach the server. Please try again." };
  }
}

/** `crypto.randomUUID` needs a secure context; fall back so http:// dev works. */
function requestId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Action URL for a form that must work without JavaScript.
 *
 * The key travels as a hidden `key` input and the browser is sent to
 * `thanksUrl` with a 303, so the form works with scripting disabled.
 */
export function actionUrl(formLabel: string): string {
  return `${capture.endpoint}/v1/collect/${encodeURIComponent(formLabel)}`;
}
