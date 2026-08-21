const fs = require('fs');
let content = fs.readFileSync('src/pages/blog/[...slug].astro', 'utf8');
if (!content.includes('import { capture }')) {
  content = content.replace('import CaptureForm from', 'import { capture } from "../../capture.config";\nimport CaptureForm from');
  fs.writeFileSync('src/pages/blog/[...slug].astro', content);
}
