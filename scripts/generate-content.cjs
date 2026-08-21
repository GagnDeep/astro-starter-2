const fs = require('fs');
const path = require('path');

// Target directory paths
const CONTENT_PAGES_DIR = path.join(__dirname, '../src/content/pages');
const CONTENT_BLOG_DIR = path.join(__dirname, '../src/content/blog');
const CONTENT_GUIDES_DIR = path.join(__dirname, '../src/content/pages/guides');
const CONTENT_REVIEWS_DIR = path.join(__dirname, '../src/content/pages/reviews');
const CONTENT_COMPARISONS_DIR = path.join(__dirname, '../src/content/pages/comparisons');
const CONTENT_GLOSSARY_DIR = path.join(__dirname, '../src/content/pages/glossary');
const CONTENT_TOOLS_DIR = path.join(__dirname, '../src/content/pages/tools');

const DIRS = [CONTENT_PAGES_DIR, CONTENT_BLOG_DIR, CONTENT_GUIDES_DIR, CONTENT_REVIEWS_DIR, CONTENT_COMPARISONS_DIR, CONTENT_GLOSSARY_DIR, CONTENT_TOOLS_DIR];

DIRS.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const generateMarkdown = (title, seoDesc, headings) => {
    let content = `---
title: "${title}"
seo:
  page_description: "${seoDesc}"
  canonical_url: null
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpano"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
content_blocks:
  - _bookshop_name: hero
    heading: "${title}"
    subheading: "${seoDesc}"
    image: "/images/og/og-default.png"
    image_alt: "Hero image"
    button_text: ""
    button_link: ""
  - _bookshop_name: text-block
    heading: "Introduction to ${title}"
    content: "<p>Welcome to our comprehensive guide on ${title}. Buying a handpan is a journey, and we're here to provide objective, BS-free advice to help you navigate it. We will cover all the crucial aspects you need to know, from basic concepts to advanced considerations.</p><p>This is a foundational piece in understanding the broader handpan ecosystem. Let's dive in.</p>"
`;

    headings.forEach((heading, idx) => {
        content += `  - _bookshop_name: text-block\n    heading: "${heading}"\n    content: "<p>Detailed breakdown for ${heading}. In this section, we explore the nuances and trade-offs. The handpan is a delicate instrument, and factors like material choice (nitrided vs. stainless steel) and tuning (440Hz vs 432Hz) play a major role.</p><table><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>Scale Options</td><td>Varies by maker</td></tr><tr><td>Maintenance</td><td>Regular oiling required</td></tr></tbody></table><p>A common mistake beginners make is ignoring these factors, leading to poor purchases. Always consult primary sources and trust objective reviews.</p>"\n`;
    });

    content += `---`;
    return content;
};


const guides = [
  "What is a Handpan?", "The Ultimate Handpan Buying Guide", "Handpan Scales Explained", "Materials: Nitrided Steel vs Stainless Steel", "How Much Do Handpans Cost?", "432Hz vs 440Hz Handpans", "Maintenance and Care Guide", "How to Play the Handpan (Basics)", "Traveling with a Handpan", "Anatomy of a Handpan", "History of the Hang", "Custom vs Stock Handpans", "Understanding Bottom Notes and Mutants", "Recording Handpans", "Amplifying Handpans Live", "How to Choose a Handpan Maker", "Handpan Cases and Bags"
];

guides.forEach((g, i) => {
  const slug = g.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  fs.writeFileSync(path.join(CONTENT_GUIDES_DIR, `${slug}.md`), generateMarkdown(g, `A complete, objective guide to ${g.toLowerCase()} for handpan players.`, ["Key Considerations", "Common Pitfalls", "Expert Recommendations", "FAQ"]));
});

const reviews = [
  "Best Handpans for Beginners", "Best Handpans Under $1000", "Warning: Amazon and eBay Handpans", "Best Handpan Cases", "Best Handpan Stands and Mounts", "Review: NovaPans", "Review: Pantheon Steel", "Review: Saraz Handpans", "Review: Yishama Handpans", "Review: Ayasa Handpans", "Review: Harmonic Art"
];

reviews.forEach((g, i) => {
  const slug = g.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  fs.writeFileSync(path.join(CONTENT_REVIEWS_DIR, `${slug}.md`), generateMarkdown(g, `Our honest, BS-free review on ${g.toLowerCase()}.`, ["The Good", "The Bad", "Build Quality", "Sound & Tuning", "Final Verdict"]));
});


const comparisons = [
  "Handpan vs Tongue Drum", "Handpan vs RAV Vast", "Stainless Steel vs Nitrided Steel", "432Hz vs 440Hz", "9-Note vs 17-Note Handpans", "Handpan vs Hang", "Ember Steel vs Stainless", "Custom Order vs Off The Shelf"
];

comparisons.forEach((g, i) => {
  const slug = g.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  fs.writeFileSync(path.join(CONTENT_COMPARISONS_DIR, `${slug}.md`), generateMarkdown(g, `A detailed comparison of ${g.toLowerCase()}.`, ["Core Differences", "Pros and Cons", "Which is Right for You?"]));
});

// Glossary Generation
const glossaryTerms = ["Ding", "Gu", "Helmholtz Resonance", "Interstitial Notes", "Mutant Notes", "Overtone", "Fundamental", "Fifth", "Octave", "Nitrided Steel", "Stainless Steel", "Ember Steel", "Scale", "Tuning", "Shoulder Tones", "Harmonics", "Tongue Drum", "Hang", "Maker", "Retuning"];

glossaryTerms.forEach((g, i) => {
  const slug = g.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  fs.writeFileSync(path.join(CONTENT_GLOSSARY_DIR, `${slug}.md`), generateMarkdown(`Glossary: ${g}`, `Definition and explanation of ${g} in the context of handpans.`, ["Definition", "Context in Playing", "Related Terms"]));
});


// Core pages (Index for sections)
fs.writeFileSync(path.join(CONTENT_PAGES_DIR, 'guides.md'), `---
title: "Handpan Guides"
seo:
  page_description: "All our comprehensive handpan guides."
  no_index: false
content_blocks:
  - _bookshop_name: hero
    heading: "Handpan Reference Library"
    subheading: "Everything you need to know about buying and playing."
---`);

fs.writeFileSync(path.join(CONTENT_PAGES_DIR, 'reviews.md'), `---
title: "Handpan Reviews"
seo:
  page_description: "Honest, objective handpan reviews."
  no_index: false
content_blocks:
  - _bookshop_name: hero
    heading: "Handpan Reviews"
    subheading: "We review makers, models, and accessories."
---`);

fs.writeFileSync(path.join(CONTENT_PAGES_DIR, 'comparisons.md'), `---
title: "Handpan Comparisons"
seo:
  page_description: "Comparing handpans, materials, and alternatives."
  no_index: false
content_blocks:
  - _bookshop_name: hero
    heading: "Handpan Comparisons"
    subheading: "Head to head matchups to help you decide."
---`);

fs.writeFileSync(path.join(CONTENT_PAGES_DIR, 'tools.md'), `---
title: "Handpan Tools"
seo:
  page_description: "Interactive tools for handpan players."
  no_index: false
content_blocks:
  - _bookshop_name: hero
    heading: "Handpan Tools & Calculators"
    subheading: "Find your scale, budget, and more."
---`);


const blogPosts = [
  "How to Remove Rust from a Handpan", "How Much Does It Cost to Retune a Handpan?", "How Long Does a Handpan Stay in Tune?", "Preventing Hand Pain While Playing", "Left-Handed Handpan Playing Guide", "Using the Handpan for Meditation", "Can You Learn Handpan Without Musical Experience?", "The Evolution of Handpan Scales", "Why Handpans Are So Expensive", "Top 5 Handpan Festivals in 2024", "How to Ship a Handpan Safely", "Microphones for Handpan Recording"
];

blogPosts.forEach((g, i) => {
  const slug = g.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let blogContent = `---
title: "${g}"
thumb_image_path: "/images/og/og-default.png"
thumb_image_alt: "${g}"
post_hero:
  date: "2024-03-${String((i%28)+1).padStart(2, '0')}"
  heading: "${g}"
  tags: ["handpan", "tips"]
  author: "Handpano Editor"
  image: "/images/og/og-default.png"
  image_alt: "Hero for ${g}"
seo:
  page_description: "In-depth article on ${g.toLowerCase()}."
  no_index: false
---

Welcome to our deep dive on **${g}**. Finding the right information can be tough, so we've compiled the most accurate, sourced data for you.

## Understanding the Core Problem

When players ask about this topic, they often misunderstand the fundamentals. For example, handpans are carefully tuned steel membranes, and treating them like a typical percussion instrument can lead to damage.

### Key Factors

*   **Factor 1:** Material choice matters. Nitrided steel requires oil, while stainless steel is rust-resistant.
*   **Factor 2:** The scale layout. Different scales evoke different emotions.
*   **Factor 3:** Maker reputation. Never buy a cheap unbranded handpan from Amazon.

## Real World Example

Let's look at a concrete example. If you have a D Minor handpan (often called Kurd), the layout revolves around a central Ding (D3) and usually 8 notes in a circle (A3, Bb3, C4, D4, E4, F4, G4, A4).

> "The handpan is an instrument of intuition, but choosing one requires strict logic."

## Common Mistakes

1.  Buying the first cheap instrument you find online.
2.  Neglecting rust prevention (if you have nitrided steel).
3.  Playing too hard and knocking it out of tune.

## FAQ

**Q: Is this relevant for all handpans?**
A: Generally, yes, though specifics vary by maker and material.

**Q: Where can I learn more?**
A: Check out our guides section for a full breakdown.

## What's Next?

If you found this helpful, be sure to explore our [Scale Finder Tool](/tools/scale-finder) to narrow down your next instrument.
`;
  fs.writeFileSync(path.join(CONTENT_BLOG_DIR, `${slug}.mdx`), blogContent);
});

console.log("Successfully generated all content pages.");
