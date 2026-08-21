const fs = require('fs');
const path = require('path');

const GLOSSARY_TERMS = [
  "Akkermansia muciniphila", "Bifidobacterium", "Bloating", "Bristol Stool Scale",
  "Constipation", "Digestive Enzymes", "Dysbiosis", "Elimination Diet", "FODMAP",
  "Fiber (Soluble vs Insoluble)", "Gut-Brain Axis", "IBS", "Lactobacillus",
  "Leaky Gut Syndrome", "Microbiome", "Motility", "Postbiotics", "Prebiotics",
  "Probiotics", "Short-Chain Fatty Acids (SCFAs)", "Synbiotic", "Transit Time",
  "Fermentation", "Gastrointestinal Tract", "Gut Flora"
];

const REFERENCE_PAGES = [
  { slug: "bloating", title: "What Causes Severe Bloating After Eating", desc: "A complete guide to why you bloat and how to fix it." },
  { slug: "leaky-gut", title: "Signs of Leaky Gut Syndrome", desc: "Understanding intestinal permeability and symptoms." },
  { slug: "microbiome", title: "How to Improve Your Gut Microbiome", desc: "Evidence-based ways to increase bacterial diversity." },
  { slug: "elimination-diet", title: "How to Do an Elimination Diet", desc: "Step-by-step guide to identifying food triggers." },
  { slug: "constipation", title: "Why Am I Always Constipated?", desc: "Root causes of chronic constipation and natural relief." },
  { slug: "best-foods", title: "Best Foods for Digestion", desc: "The top foods to soothe your stomach and promote motility." },
  { slug: "stress-digestion", title: "Does Stress Affect Digestion?", desc: "The gut-brain connection and anxiety-induced stomach pain." },
  { slug: "stomach-acid", title: "How to Naturally Increase Stomach Acid", desc: "Signs of low stomach acid and how to support digestion." },
  { slug: "gut-acne", title: "Gut Health and Acne", desc: "How your microbiome affects your skin and breakouts." },
  { slug: "healing-time", title: "How Long Does It Take to Heal Your Gut?", desc: "Realistic timelines for microbiome recovery." },
  { slug: "inflammation-foods", title: "Foods That Cause Inflammation in the Gut", desc: "Common dietary triggers for digestive distress." },
  { slug: "digestive-enzymes-guide", title: "When to Take Digestive Enzymes", desc: "How and when to use enzymes for symptom relief." },
  { slug: "synbiotic-guide", title: "What is a Synbiotic?", desc: "Why combining prebiotics and probiotics matters." },
  { slug: "bristol-scale", title: "Understanding the Bristol Stool Scale", desc: "What your stool consistency says about your transit time." },
  { slug: "travel-constipation", title: "How to Avoid Travel Constipation", desc: "Tips for keeping your digestion moving while on the road." },
  { slug: "antibiotic-recovery", title: "Recovering Gut Health After Antibiotics", desc: "How to rebuild your microbiome post-treatment." }
];

const BLOG_POSTS = [
  { slug: "prebiotics-vs-probiotics", title: "Prebiotics vs Probiotics vs Postbiotics", kw: "prebiotics vs probiotics vs postbiotics" },
  { slug: "gut-brain-connection", title: "The Gut-Brain Connection: How Digestion Affects Mental Health", kw: "gut health and mental health connection" },
  { slug: "ag1-alternatives", title: "Top AG1 Alternatives for Specific Gut Health Needs", kw: "ag1 alternatives for gut health" },
  { slug: "best-synbiotic", title: "How to Choose the Best Synbiotic Supplement", kw: "best synbiotic supplement" },
  { slug: "seed-alternative", title: "Seed Probiotic Alternatives: What to Look For", kw: "seed probiotic vs ritual" },
  { slug: "hum-nutrition-review", title: "Hum Nutrition Gut Instinct Review vs Digestine", kw: "hum nutrition gut health review" },
  { slug: "love-wellness-compare", title: "Love Wellness vs Hum Nutrition vs Digestine", kw: "love wellness vs hum nutrition" },
  { slug: "digestive-enzymes-online", title: "Where to Buy Digestive Enzymes Online (And Which Ones Work)", kw: "buy digestive enzymes online" },
  { slug: "supplement-for-bloating", title: "The Best Supplement for Bloating in 2024", kw: "best supplement for bloating" },
  { slug: "synbiotic-subscription", title: "Is a Daily Synbiotic Subscription Worth It?", kw: "daily synbiotic subscription" },
  { slug: "gut-health-women", title: "Gut Health Supplements for Women: Hormones and Digestion", kw: "gut health supplements for women" },
  { slug: "natural-constipation-relief", title: "Natural Constipation Relief Supplements That Actually Work", kw: "natural constipation relief supplement" }
];

const TAXONOMY_PAGES = [
  { slug: "compare", title: "Compare Gut Health Supplements" },
  { slug: "compare/seed", title: "Digestine vs Seed Probiotic" },
  { slug: "compare/ritual", title: "Digestine vs Ritual Synbiotic+" },
  { slug: "compare/athletic-greens", title: "Digestine vs Athletic Greens (AG1)" },
  { slug: "compare/love-wellness", title: "Digestine vs Love Wellness" },
  { slug: "compare/hum-nutrition", title: "Digestine vs Hum Nutrition" },
  { slug: "tools", title: "Digestive Health Tools & Calculators" },
  { slug: "learn", title: "Gut Health Library" },
  { slug: "glossary", title: "Gut Health Glossary" },
  { slug: "ingredients", title: "Digestine Ingredients" }
];


function writeGlossary() {
  GLOSSARY_TERMS.forEach(term => {
    const slug = term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const content = `---
title: "${term}"
definition: "A core concept in digestive health."
seo:
  page_description: "Learn about ${term} in our comprehensive gut health glossary."
  canonical_url: null
  featured_image: null
  featured_image_alt: null
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
---

# ${term}

**${term}** plays a crucial role in the overall ecosystem of your gut microbiome. Understanding this concept is essential for anyone looking to improve their digestive health, reduce bloating, and achieve regularity.

## Why it matters
In the context of the pragmatic approach to gut health, balancing your microbiome requires an understanding of how ${term} interacts with diet, lifestyle, and supplementation.

## Related Terms
- [Microbiome](/glossary/microbiome)
- [Dysbiosis](/glossary/dysbiosis)
- [Prebiotics](/glossary/prebiotics)
`;
    fs.writeFileSync(path.join(__dirname, '../../src/content/glossary', `${slug}.md`), content);
  });
}

function writeReference() {
  REFERENCE_PAGES.forEach(page => {
    const content = `---
title: "${page.title}"
description: "${page.desc}"
seo:
  page_description: "${page.desc}"
  canonical_url: null
  featured_image: null
  featured_image_alt: null
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
---

# ${page.title}

${page.desc}

## The Core Problem
Many people experience digestive distress without understanding the root cause. This guide explores the pragmatic, evidence-based approach to addressing these issues.

## What the Science Says
Clinical studies suggest that managing this issue requires a holistic approach, combining dietary changes with targeted supplementation.

### Key Factors:
1. **Dietary Triggers**: Identifying what exacerbates your symptoms.
2. **Microbiome Balance**: The role of a diverse gut flora.
3. **Transit Time**: How quickly food moves through your system.

## What to Do Next
If you're struggling with this, consider starting with a food diary and tracking your symptoms. For persistent issues, a high-quality synbiotic like [Digestine](/products/daily-synbiotic) can provide foundational support.

### Common Mistakes
- Relying on quick-fix "detoxes".
- Ignoring the impact of stress.
- Taking single-strain probiotics without prebiotic support.
`;
    fs.writeFileSync(path.join(__dirname, '../../src/content/reference', `${page.slug}.md`), content);
  });
}

function writeBlog() {
  BLOG_POSTS.forEach((post, i) => {
    // Need MDX for blog posts based on content.config.ts
    // Use an image from public or mock it.
    // Astro's <Image /> requires local images to be imported from src/assets.
    // But since it's frontmatter, they might be resolved from public or via astro image resolution.
    // Let's use absolute paths from src/assets/images/blog/ for the content generation.
    const imagePath = `../../assets/images/blog/featured-image-${(i % 6) + 1}.jpg`;
    const content = `---
title: "${post.title}"
post_hero:
  date: 2024-05-20
  heading: "${post.title}"
  tags: ["Gut Health", "Supplementation"]
  author: "Digestine Team"
  image: "${imagePath}"
  image_alt: "A visual representation of ${post.title}"
thumb_image_path: "${imagePath}"
thumb_image_alt: "Thumbnail for ${post.title}"
seo:
  page_description: "Learn more about ${post.kw} and how it impacts your digestive well-being."
  canonical_url: null
  featured_image: "${imagePath}"
  featured_image_alt: "Featured image"
  author_twitter_handle: "@digestine"
  open_graph_type: "article"
  no_index: false
---

# ${post.title}

When it comes to **${post.kw}**, finding reliable, practical information can be challenging. In this post, we cut through the jargon to give you actionable advice for your gut health.

## The Problem with Kitchen-Sink Supplements
Many products on the market try to do too much. They pack 75 different ingredients into one scoop, leaving you wondering what is actually working and what is just expensive filler.

### A Pragmatic Approach
Instead of chasing perfection, focus on consistency. A targeted approach to gut health often yields better results than a scattered one.

<table class="w-full text-left border-collapse my-8">
  <thead>
    <tr>
      <th class="border-b-2 border-gray-300 py-2">Feature</th>
      <th class="border-b-2 border-gray-300 py-2">Traditional Approach</th>
      <th class="border-b-2 border-gray-300 py-2">Pragmatic Approach</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b border-gray-200 py-2">Focus</td>
      <td class="border-b border-gray-200 py-2">Curing everything</td>
      <td class="border-b border-gray-200 py-2">Targeted relief</td>
    </tr>
    <tr>
      <td class="border-b border-gray-200 py-2">Ingredients</td>
      <td class="border-b border-gray-200 py-2">Kitchen sink</td>
      <td class="border-b border-gray-200 py-2">Clinically studied</td>
    </tr>
  </tbody>
</table>

## Worked Example: Daily Routine
Here is how you might integrate this advice into your daily life:
1. **Morning**: Hydrate and take your foundational synbiotic.
2. **Afternoon**: Ensure adequate fiber intake.
3. **Evening**: Manage stress to support the gut-brain axis.

## FAQ
**Q: How long does it take to see results?**
A: Most people notice a difference in transit time within a few days, but microbiome shifts take 4-12 weeks.

**Q: Is this safe for daily use?**
A: Yes, pragmatic gut health focuses on sustainable, long-term habits.
`;
    fs.writeFileSync(path.join(__dirname, '../../src/content/blog', `${post.slug}.mdx`), content);
  });
}

function writeTaxonomy() {
    // Generate simple pages in src/content/pages for taxonomy
    TAXONOMY_PAGES.forEach(page => {
        const parts = page.slug.split('/');
        let dir = path.join(__dirname, '../../src/content/pages');
        if (parts.length > 1) {
            dir = path.join(dir, parts[0]);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        }

        const fileName = parts.length > 1 ? parts[1] : parts[0];

        const content = `---
title: "${page.title}"
seo:
  page_description: "Explore ${page.title} to support your digestive health."
  canonical_url: null
  featured_image: null
  featured_image_alt: null
  author_twitter_handle: null
  open_graph_type: "website"
  no_index: false
content_blocks:
  - _bookshop_name: text-block
    heading: ${page.title}
    content_html: "<p>Welcome to our comprehensive guide on ${page.title}.</p>"
---
`;
        fs.writeFileSync(path.join(dir, `${fileName}.md`), content);
    });
}

writeGlossary();
writeReference();
writeBlog();
writeTaxonomy();

console.log("Content generated successfully.");
