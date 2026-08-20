import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import type { AstroIntegration } from "astro";

/**
 * Warns when unlayered CSS would override Tailwind's spacing utilities.
 *
 * Tailwind v4 emits utilities inside `@layer utilities`. Unlayered CSS wins
 * over *every* cascade layer no matter the specificity or order, so a reset
 * such as `* { margin: 0; padding: 0 }` written outside a layer disables
 * `p-*`, `m-*`, `mx-auto` and `space-y-*` site-wide while colours and flex
 * keep working — a failure that looks like a broken layout, not a CSS bug.
 *
 * This only warns; it never fails the build. Fix by moving the rule inside
 * `@layer base { ... }` in `src/styles/main.css`.
 */
export default function cssCascadeGuard(): AstroIntegration {
  return {
    name: "css-cascade-guard",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const assetsDir = path.join(fileURLToPath(dir), "_astro");

        let files: string[];
        try {
          files = (await readdir(assetsDir)).filter((file) => file.endsWith(".css"));
        } catch {
          return;
        }

        for (const file of files) {
          const css = await readFile(path.join(assetsDir, file), "utf8");
          for (const selector of findUnlayeredSpacingResets(css)) {
            logger.warn(
              `Unlayered rule \`${selector}\` sets margin/padding outside a @layer — ` +
                `it overrides Tailwind spacing utilities site-wide. ` +
                `Move it inside \`@layer base\` in src/styles/main.css.`,
            );
          }
        }
      },
    },
  };
}

/**
 * Returns selectors of top-level (unlayered) rules that set margin or padding.
 * Walks the stylesheet tracking brace depth and `@layer`/`@media` nesting.
 */
function findUnlayeredSpacingResets(css: string): string[] {
  const offenders: string[] = [];
  const layerDepths: number[] = [];
  let depth = 0;
  let selectorStart = 0;

  for (let i = 0; i < css.length; i += 1) {
    const char = css[i];

    if (char === "{") {
      const header = css.slice(selectorStart, i).trim();
      depth += 1;

      if (/^@layer\b/.test(header)) {
        layerDepths.push(depth);
      } else if (layerDepths.length === 0 && !header.startsWith("@")) {
        const body = css.slice(i + 1, css.indexOf("}", i) + 1);
        if (/(^|[;{\s])(margin|padding)(-[a-z]+)?\s*:/.test(body)) {
          offenders.push(header.slice(0, 60));
        }
      }
      selectorStart = i + 1;
    } else if (char === "}") {
      if (layerDepths[layerDepths.length - 1] === depth) layerDepths.pop();
      depth -= 1;
      selectorStart = i + 1;
    } else if (char === ";" && depth === 0) {
      selectorStart = i + 1;
    }
  }

  return offenders;
}
