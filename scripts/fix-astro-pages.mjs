import fs from 'fs/promises';
import path from 'path';

async function main() {
  const pagesDir = 'src/pages';

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

  const astroFiles = await walk(pagesDir);
  for (const file of astroFiles) {
    let content = await fs.readFile(file, 'utf8');

    // Fix layout import
    const depth = file.split(path.sep).length - 3; // src/pages/ is 2, index.astro is 3 (3-3=0)

    // calculate correct path back to src/layouts/Layout.astro
    let layoutPath = '';
    if (depth === 0) layoutPath = '../layouts/Layout.astro';
    else if (depth === 1) layoutPath = '../../layouts/Layout.astro';
    else if (depth === 2) layoutPath = '../../../layouts/Layout.astro';
    else if (depth === 3) layoutPath = '../../../../layouts/Layout.astro';
    else layoutPath = '../layouts/Layout.astro'; // fallback

    // Replace all incorrect layout imports
    content = content.replace(/import Layout from "(\.\.\/)+layouts\/Layout.astro";/g, `import Layout from "${layoutPath}";`);

    // Fix index.astro newsletter form
    if (file === 'src/pages/index.astro') {
      content = content.replace('form={CaptureForm.newsletter}', 'form="newsletter"');
    }

    await fs.writeFile(file, content);
  }
}

main().catch(console.error);
