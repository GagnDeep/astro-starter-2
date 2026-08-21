const fs = require('fs');

const blogTopics = [
    "backdoor-roth-guide", "rebalancing-portfolio", "emergency-fund-size", "rent-vs-buy", "pay-off-mortgage-early",
    "index-funds-vs-mutual-funds", "roth-vs-traditional", "understanding-rsus", "hidden-costs-index-funds",
    "bond-ladder-strategy", "whole-life-insurance", "consolidating-old-401ks"
];

const fillerParagraph = "Financial planning requires a meticulous understanding of the variables involved. In this guide, we dive deep into the specific mechanisms that allow you to optimize your strategy. The reality of long-term investing and wealth accumulation is often obscured by jargon and overly complex sales pitches. We strip away the unnecessary layers to provide a clear, actionable path forward. Understanding the nuanced differences between various tax-advantaged accounts or investment vehicles is crucial. Far too often, investors make assumptions based on outdated or misapplied rules of thumb. By examining the primary sources and mathematical realities, we can construct a more robust framework for decision-making. We will explore the historical context, the mathematical proof behind these strategies, and the specific edge cases that could derail a well-intentioned plan. This is not about finding a magic bullet; it's about consistent, informed action over time.";

const longContent = Array(12).fill(fillerParagraph).join('\n\n');

blogTopics.forEach((topic, i) => {
    const title = topic.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const content = `---
title: "${title}"
post_hero:
  date: "2023-10-${String(i+1).padStart(2, '0')}"
  heading: "${title}"
  tags: ["Investing", "Planning"]
  author: "ClearPath Editor"
  image: "src/assets/images/blog/blog-thumb-1.jpg"
  image_alt: "Thumbnail"
thumb_image_path: "src/assets/images/blog/blog-thumb-1.jpg"
thumb_image_alt: "Thumbnail"
seo:
  page_description: "In-depth guide on ${title}."
  canonical_url: "https://clearpathfinance.com/blog/${topic}/"
  featured_image: "src/assets/images/blog/featured-image-2.jpg"
  featured_image_alt: "Thumbnail"
  author_twitter_handle: "ClearPathFin"
  open_graph_type: "article"
  no_index: false
---
import CaptureForm from "../../components/forms/capture-form.astro";

# Deep Dive into ${title}

${longContent}

## The Tradeoffs
Analysis of when this makes sense and when it doesn't.

For more details on asset classes, check out our [Asset Allocation guide](/reference/asset-allocation/) or learn about [ETFs](/glossary/etf/).

${longContent}

## Common Mistakes
1. Not understanding the tax implications.
2. Failing to rebalance accordingly.

<div class="my-8">
  <CaptureForm form="newsletter" submitLabel="Get More Insights">
    <label class="block mb-2 font-medium">Want updates on ${title}?</label>
    <input type="email" name="email" required placeholder="Email Address" class="w-full px-3 py-2 border rounded" />
  </CaptureForm>
</div>
`;
    fs.writeFileSync(`src/content/blog/${topic}.mdx`, content);
});

console.log('Blog content generated');
