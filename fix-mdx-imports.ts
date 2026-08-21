import fs from 'fs';
import path from 'path';

function fixImports(dir: string) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir, { recursive: true }) as string[];
    for (const f of files) {
        if (!f.endsWith('.mdx') && !f.endsWith('.md')) continue;
        const p = path.join(dir, f);
        let c = fs.readFileSync(p, 'utf-8');

        c = c.replace(/import CaptureForm from "\.\.\/\.\.\/components\/forms\/capture-form\.astro";/g, 'import CaptureForm from "../../../components/forms/capture-form.astro";');

        fs.writeFileSync(p, c);
    }
}

fixImports('src/content/pages/library');
