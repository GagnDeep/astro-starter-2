import fs from 'fs';
import path from 'path';

function fixPages(dir: string) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir, { recursive: true }) as string[];
    for (const f of files) {
        if (!f.endsWith('.md')) continue;
        const p = path.join(dir, f);
        let c = fs.readFileSync(p, 'utf-8');

        c = c.replace(/no_index: "false"/g, 'no_index: false');
        c = c.replace(/no_index: "true"/g, 'no_index: true');

        fs.writeFileSync(p, c);
    }
}

fixPages('src/content/pages');
