import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOOLS = [
  { slug: "fiber-calculator", title: "Daily Fiber Intake Calculator", desc: "Calculate your ideal daily fiber intake based on age and gender.", kw: "daily fiber intake calculator" },
  { slug: "transit-time", title: "Digestion Transit Time Tracker", desc: "Track how long it takes for food to move through your system.", kw: "digestion transit time tracker" },
  { slug: "water-intake", title: "Water Intake for Digestion", desc: "Calculate how much water you need for optimal digestion.", kw: "water intake for digestion calculator" },
];

function writeTools() {
  TOOLS.forEach(tool => {
    const content = `---
title: "${tool.title}"
description: "${tool.desc}"
seo:
  page_description: "${tool.desc}"
  canonical_url: null
  featured_image: null
  featured_image_alt: null
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
---

# ${tool.title}

${tool.desc}

<!-- We will build actual interactive tools using React islands later -->
<div class="p-6 bg-white shadow-md rounded-lg my-8">
  <h2 class="text-2xl font-semibold mb-4 text-primary">Interactive Tool Placeholder</h2>
  <p class="text-gray-700">This interactive tool will help you calculate your needs based on the latest dietary guidelines.</p>
</div>

## Why This Matters
For optimal gut health, understanding your specific needs is crucial. This calculator uses established guidelines to give you a pragmatic target.

## Next Steps
Once you have your result, aim to meet it consistently rather than perfectly every single day.
`;
    fs.writeFileSync(path.join(__dirname, '../../src/content/tools', `${tool.slug}.md`), content);
  });
}

writeTools();
console.log("Tools generated successfully.");
