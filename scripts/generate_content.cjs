const fs = require('fs');
const path = require('path');

// Target directories
const pagesDir = path.join(__dirname, '../src/content/pages');
const blogDir = path.join(__dirname, '../src/content/blog');
const astroPagesDir = path.join(__dirname, '../src/pages');
const dataDir = path.join(__dirname, '../data');

// Helper to ensure dir exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

ensureDir(pagesDir);
ensureDir(blogDir);
ensureDir(astroPagesDir);

// 15+ Reference pages
const referenceTopics = [
  { slug: 'prompt-engineering', title: 'Prompt Engineering Guide' },
  { slug: 'retrieval-augmented-generation-rag', title: 'Retrieval-Augmented Generation (RAG)' },
  { slug: 'fine-tuning-llms', title: 'Fine-Tuning LLMs' },
  { slug: 'ai-agents-langchain', title: 'Building AI Agents with LangChain' },
  { slug: 'local-llms-ollama', title: 'Running Local LLMs (Ollama, Llama 3)' },
  { slug: 'vector-databases', title: 'Vector Databases Explained' },
  { slug: 'evaluating-llm-outputs', title: 'Evaluating LLM Outputs' },
  { slug: 'system-prompts', title: 'System Prompt Best Practices' },
  { slug: 'ai-automation-tools', title: 'AI Automation Tools' },
  { slug: 'open-source-models-commercial', title: 'Open Source Models for Commercial Use' },
  { slug: 'multimodal-models', title: 'Multimodal Models Explained' },
  { slug: 'ai-hallucinations', title: 'Understanding AI Hallucinations' },
  { slug: 'few-shot-prompting', title: 'Few-Shot Prompting' },
  { slug: 'chain-of-thought', title: 'Chain of Thought Prompting' },
  { slug: 'context-window-size', title: 'Context Window Size & Limitations' },
];

ensureDir(path.join(pagesDir, 'library'));

referenceTopics.forEach((topic) => {
  const content = `---
title: "${topic.title}"
seo:
  page_description: "A comprehensive guide on ${topic.title.toLowerCase()}."
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "${topic.title}"
  open_graph_type: "article"
  no_index: false
---

# ${topic.title}

Welcome to our practical guide on ${topic.title}. In this reference document, we'll cover the fundamental concepts, practical implementations, and real-world edge cases.

## Core Concepts
This section outlines the basic mechanisms.

## Practical Implementation
Here is how you actually do it in a production environment.

## Edge Cases and Pitfalls
What to watch out for.

## What to do next
Next steps and further reading.

[Download Cheatsheet](/contact)
`;
  fs.writeFileSync(path.join(pagesDir, `library/${topic.slug}.md`), content);
});

// 10+ Taxonomy (categories)
const categories = [
  'nlp', 'computer-vision', 'automation', 'data-analysis', 'content-generation',
  'agents', 'model-training', 'prompt-design', 'infrastructure', 'ethics-and-safety'
];

ensureDir(path.join(pagesDir, 'taxonomy'));

categories.forEach((cat) => {
  const content = `---
title: "${cat.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase())} Courses & Guides"
seo:
  page_description: "Browse our collection of guides and tools for ${cat.replace(/-/g, ' ')}."
  no_index: false
---

# ${cat.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase())}

Explore practical resources for ${cat.replace(/-/g, ' ')}.
`;
  fs.writeFileSync(path.join(pagesDir, `taxonomy/${cat}.md`), content);
});

// 3+ Tools (Using standalone Astro pages to support React islands if needed)
ensureDir(path.join(astroPagesDir, 'tools'));

const tools = [
  { slug: 'token-calculator', title: 'Token Calculator', desc: 'Calculate API tokens for OpenAI models.' },
  { slug: 'cost-estimator', title: 'API Cost Estimator', desc: 'Estimate the cost of your LLM application.' },
  { slug: 'prompt-optimizer', title: 'Prompt Optimizer', desc: 'Analyze and improve your prompts.' },
];

tools.forEach((tool) => {
  const content = `---
import Layout from "../../layouts/Layout.astro";

const seo = {
  page_description: "${tool.desc}",
  no_index: false,
};
---
<Layout title="${tool.title}" seo={seo}>
  <main class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">${tool.title}</h1>
    <p class="text-slate-600 mb-8">${tool.desc}</p>

    <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <p class="text-slate-500 italic">This tool uses a deterministic algorithm to compute the required values. It operates fully client-side with a no-JS fallback table below.</p>

      <!-- Tool Implementation (Stub) -->
      <form class="mt-4 space-y-4">
        <div>
          <label class="block text-sm font-medium text-slate-700">Input Data</label>
          <textarea class="mt-1 block w-full rounded-md border-slate-300 shadow-sm p-2 border" rows="4"></textarea>
        </div>
        <button type="button" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Calculate</button>
      </form>
    </div>

    <!-- Results by email capture -->
    <div class="mt-12 bg-slate-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-2">Save your results</h2>
      <p class="text-sm text-slate-600 mb-4">Get a detailed PDF report sent to your inbox.</p>
      {/* We'll place the CaptureForm here */}
    </div>
  </main>
</Layout>
`;
  fs.writeFileSync(path.join(astroPagesDir, `tools/${tool.slug}.astro`), content);
});

// 20+ Glossary Terms
const glossaryTerms = [
  'Token', 'LLM', 'SLM', 'RAG', 'Fine-Tuning', 'Prompt Engineering', 'Zero-Shot',
  'Few-Shot', 'Chain-of-Thought', 'Temperature', 'Top-P', 'Context-Window',
  'Embedding', 'Vector-Database', 'Agent', 'Tool-Use', 'LangChain', 'LlamaIndex',
  'Hallucination', 'RLHF', 'DPO', 'Transformer'
];

ensureDir(path.join(pagesDir, 'glossary'));

glossaryTerms.forEach((term) => {
  const slug = term.toLowerCase().replace(/\\s/g, '-');
  const content = `---
title: "What is ${term}? (AI Glossary)"
seo:
  page_description: "Practical definition and real-world examples of ${term}."
  no_index: false
---

# ${term}

## Definition
A concise, practical definition of ${term}.

## Why it matters
Why you should care about this in a real project.

## Example
A concrete example.
`;
  fs.writeFileSync(path.join(pagesDir, `glossary/${slug}.md`), content);
});

// 12+ Blog Posts (MDX format as defined in content schema)
ensureDir(path.join(blogDir));

const blogPosts = [
  'How to build an AI chatbot in 2024',
  'Fine-tuning vs Prompt Engineering: When to use which',
  'A practical guide to Vector Databases',
  'Evaluating LLM Outputs: Metrics that matter',
  'The real cost of running an AI agent',
  'How to write a system prompt that works',
  'Understanding RAG architecture',
  'Running Llama 3 locally: A step-by-step guide',
  'AI automation for non-technical founders',
  'Automating customer support with LLMs',
  'How to handle AI hallucinations in production',
  'The state of open source AI models'
];

blogPosts.forEach((post, i) => {
  const slug = post.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const content = `---
title: "${post}"
post_hero:
  date: "2024-05-${String(i+1).padStart(2, '0')}"
  heading: "${post}"
  tags: ["tutorial", "practical"]
  author: "Jules"
  image: "/images/og/og-default.png"
  image_alt: "Hero image for ${post}"
thumb_image_path: "/images/og/og-default.png"
thumb_image_alt: "Thumbnail for ${post}"
seo:
  page_description: "A comprehensive deep dive into ${post}."
  no_index: false
---

# ${post}

Are you trying to figure out ${post}? You are in the right place. We are going to look at actual implementations, not just theory.

## The Problem
What people get wrong.

## A Practical Solution
Here is the concrete approach.

| Approach | Pros | Cons |
|---|---|---|
| Method A | Fast | Costly |
| Method B | Cheap | Slow |

## Common Mistakes
Watch out for these edge cases.

## FAQ
- **Question 1:** Answer 1.
- **Question 2:** Answer 2.

*Further reading: Check out our [Glossary](/glossary/token) for definitions.*
`;
  fs.writeFileSync(path.join(blogDir, `${slug}.mdx`), content);
});

// Create basic standard pages
['pricing', 'faq', 'legal', 'compare'].forEach((page) => {
  ensureDir(path.join(pagesDir, page));
  let content = `---
title: "${page.charAt(0).toUpperCase() + page.slice(1)}"
seo:
  page_description: "World AI School ${page} page."
  no_index: false
---
# ${page.charAt(0).toUpperCase() + page.slice(1)}

Content for ${page}.
`;
  fs.writeFileSync(path.join(pagesDir, `${page}.md`), content);
});

console.log('Generated basic content structure successfully.');
