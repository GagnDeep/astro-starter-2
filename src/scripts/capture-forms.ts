/**
 * Progressive enhancement for every capture form on the page.
 *
 * The markup already works with scripting disabled — it posts straight to the
 * capture endpoint and the server 303s to the thank-you page. This module
 * upgrades that to an inline success message, so nobody loses their place.
 *
 * Imported by the form components, not by the layout: a page with no form
 * ships none of this. ESM caching means it runs once no matter how many
 * components import it.
 */
import { submit } from "../lib/capture";

const BOUND = "captureBound";

function enhance(form: HTMLFormElement) {
  if (form.dataset[BOUND]) return;
  form.dataset[BOUND] = "true";

  const status = form.querySelector<HTMLElement>("[data-capture-status]");
  const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
  const successText = form.dataset.captureSuccess ?? "Thanks — we'll be in touch.";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (button) button.disabled = true;
    if (status) {
      status.textContent = "Sending…";
      status.dataset.state = "pending";
    }

    const result = await submit(form.dataset.capture!, new FormData(form));

    if (status) {
      status.textContent = result.ok ? successText : (result.message ?? "Something went wrong.");
      status.dataset.state = result.ok ? "success" : "error";
    }
    if (result.ok) form.reset();
    // Re-enable on failure only: a successful form should not be resubmitted.
    if (button) button.disabled = result.ok;
  });
}

function enhanceAll() {
  document.querySelectorAll<HTMLFormElement>("form[data-capture]").forEach(enhance);
}

enhanceAll();
// Astro's prefetch/view transitions swap the DOM without a full reload.
document.addEventListener("astro:page-load", enhanceAll);
