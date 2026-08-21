import fs from 'fs/promises';
import path from 'path';

async function main() {
  const dirs = ['src/components/forms', 'src/pages/tools', 'src/pages'];

  async function walk(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
      const filepath = path.join(dir, file);
      const stat = await fs.stat(filepath);
      if (stat && stat.isDirectory()) {
        results = results.concat(await walk(filepath));
      } else if (filepath.endsWith('.astro')) {
        results.push(filepath);
      }
    }
    return results;
  }

  let allFiles = [];
  for (const d of dirs) {
    allFiles = allFiles.concat(await walk(d));
  }

  for (const file of allFiles) {
    let content = await fs.readFile(file, 'utf8');

    // Fix hex colors
    // We had hover:bg-[#065f46] (darker primary) and hover:bg-[#991b1b] (darker danger)
    // We should use standard css vars or tailwind opacity for hover.
    // Wait, the prompt says "tokens as CSS vars in the Tailwind theme, never hex in components."
    // We can add these to main.css as tokens, or just use css brightness, or use another token.

    // Instead of hardcoding hex, we can define hover tokens in main.css and use them.
    content = content.replace(/hover:bg-\[\#065f46\]/g, 'hover:bg-[var(--color-primary-hover)]');
    content = content.replace(/hover:bg-\[\#991b1b\]/g, 'hover:bg-[var(--color-danger-hover)]');

    // also text-[#d1fae5] in index.astro
    content = content.replace(/text-\[\#d1fae5\]/g, 'text-[var(--color-primary-light)]');

    await fs.writeFile(file, content);
  }
}

main().catch(console.error);
