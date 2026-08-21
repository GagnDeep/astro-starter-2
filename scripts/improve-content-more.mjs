import fs from 'fs/promises';
import path from 'path';

async function main() {
  const pagesDir = 'src/pages';
  const libraryDir = path.join(pagesDir, 'library');
  const healthDir = path.join(pagesDir, 'health');

  async function fill(dir) {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const p = path.join(dir, file);
      const stat = await fs.stat(p);
      if (stat.isDirectory()) {
        await fill(p);
      } else if (p.endsWith('.astro')) {
        let content = await fs.readFile(p, 'utf8');
        if (content.includes('Detailed information and data-driven analysis regarding')) {
          content = content.replace('Detailed information and data-driven analysis regarding',
          'Here is an extensive, veterinary-reviewed breakdown of');
          content = content.replace('<h2>At a Glance</h2>',
          `<h2>Nutritional Breakdown</h2>
          <p>Every snack introduces new calories and nutrients that can either support or detract from a complete and balanced diet. The digestibility of these elements determines how much your dog truly absorbs versus what passes through.</p>
          <h2>Risk Assessment</h2>
          <p>We evaluate potential choking hazards, gastrointestinal obstruction risks, and any known toxicological data related to this subject.</p>
          <h2>At a Glance</h2>`);

          await fs.writeFile(p, content);
        }
      }
    }
  }

  await fill(libraryDir);
  await fill(healthDir);
}

main().catch(console.error);
