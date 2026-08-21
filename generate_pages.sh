#!/bin/bash
set -e

# Guides (10 pages)
mkdir -p src/pages/guides
cat << 'INNER' > src/pages/guides/index.astro
---
import Layout from "../../layouts/Layout.astro";
const seo = { page_description: "Guides and tutorials for PDF annotation." };
---
<Layout title="PDF Guides" seo={seo}>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-16">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Guides</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <a href={\`/guides/guide-\${i + 1}\`} class="block p-6 border border-gray-200 rounded-lg bg-bg-surface hover:border-brand-accent">
          <h2 class="text-xl font-semibold mb-2">Guide \${i + 1}</h2>
        </a>
      ))}
    </div>
  </div>
</Layout>
INNER

for i in {1..10}; do
cat << INNER > src/pages/guides/guide-$i.astro
---
import Layout from "../../layouts/Layout.astro";
import CaptureForm from "../../components/forms/capture-form.astro";
const seo = { page_description: "How to guide $i for PDF workflows." };
---
<Layout title="Guide $i" seo={seo}>
  <div class="max-w-3xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Guide $i</h1>
    <p>This is a detailed guide on how to complete a specific PDF workflow.</p>
    <div class="mt-12 not-prose p-6 bg-gray-50 border border-gray-200 rounded">
      <h3 class="text-lg font-bold mb-4">Subscribe for more guides</h3>
      <CaptureForm formLabel="newsletter" submitText="Subscribe" />
    </div>
  </div>
</Layout>
INNER
done

# Calculators (4 pages)
mkdir -p src/pages/calculators
cat << 'INNER' > src/pages/calculators/index.astro
---
import Layout from "../../layouts/Layout.astro";
const seo = { page_description: "Calculators for PDF size, resolution, and dimensions." };
---
<Layout title="PDF Calculators" seo={seo}>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-16">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Calculators</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <a href={\`/calculators/calc-\${i + 1}\`} class="block p-6 border border-gray-200 rounded-lg bg-bg-surface hover:border-brand-accent">
          <h2 class="text-xl font-semibold mb-2">Calculator \${i + 1}</h2>
        </a>
      ))}
    </div>
  </div>
</Layout>
INNER

for i in {1..4}; do
cat << INNER > src/pages/calculators/calc-$i.astro
---
import Layout from "../../layouts/Layout.astro";
import CaptureForm from "../../components/forms/capture-form.astro";
const seo = { page_description: "Calculator tool $i for PDF optimization." };
---
<Layout title="Calculator $i" seo={seo}>
  <div class="max-w-3xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Calculator $i</h1>
    <p>Use this tool to calculate PDF properties.</p>
    <!-- Add no-JS fallback -->
    <noscript><p>This calculator requires JavaScript.</p></noscript>
    <div class="mt-12 not-prose p-6 bg-gray-50 border border-gray-200 rounded">
      <h3 class="text-lg font-bold mb-4">Request a custom tool</h3>
      <CaptureForm formLabel="contact" submitText="Send Request" />
    </div>
  </div>
</Layout>
INNER
done

# Glossary (20 pages)
mkdir -p src/pages/glossary
cat << 'INNER' > src/pages/glossary/index.astro
---
import Layout from "../../layouts/Layout.astro";
const seo = { page_description: "Glossary of PDF terms and definitions." };
---
<Layout title="PDF Glossary" seo={seo}>
  <div class="max-w-6xl mx-auto px-4 sm:px-8 py-16">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Glossary</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <a href={\`/glossary/term-\${i + 1}\`} class="block p-4 border border-gray-200 rounded-lg bg-bg-surface hover:border-brand-accent">
          Term \${i + 1}
        </a>
      ))}
    </div>
  </div>
</Layout>
INNER

for i in {1..20}; do
cat << INNER > src/pages/glossary/term-$i.astro
---
import Layout from "../../layouts/Layout.astro";
const seo = { page_description: "Definition of term $i in the context of PDF." };
---
<Layout title="Term $i" seo={seo}>
  <div class="max-w-3xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Term $i</h1>
    <p>Definition of term $i.</p>
  </div>
</Layout>
INNER
done

# Standard pages
cat << 'INNER' > src/pages/compare.astro
---
import Layout from "../layouts/Layout.astro";
const seo = { page_description: "Compare uViewPDF with other PDF tools." };
---
<Layout title="Compare" seo={seo}>
  <div class="max-w-4xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Compare</h1>
    <p>How we stack up.</p>
  </div>
</Layout>
INNER

cat << 'INNER' > src/pages/pricing.astro
---
import Layout from "../layouts/Layout.astro";
const seo = { page_description: "Pricing for uViewPDF." };
---
<Layout title="Pricing" seo={seo}>
  <div class="max-w-4xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Pricing</h1>
    <p>It's free.</p>
  </div>
</Layout>
INNER

cat << 'INNER' > src/pages/faq.astro
---
import Layout from "../layouts/Layout.astro";
const seo = { page_description: "Frequently Asked Questions." };
---
<Layout title="FAQ" seo={seo}>
  <div class="max-w-4xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>FAQ</h1>
    <p>Frequently asked questions.</p>
  </div>
</Layout>
INNER

mkdir -p src/pages/legal
cat << 'INNER' > src/pages/legal/privacy.astro
---
import Layout from "../../layouts/Layout.astro";
const seo = { page_description: "Privacy Policy." };
---
<Layout title="Privacy Policy" seo={seo}>
  <div class="max-w-4xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Privacy Policy</h1>
    <p>Your privacy is important to us.</p>
  </div>
</Layout>
INNER

cat << 'INNER' > src/pages/legal/terms.astro
---
import Layout from "../../layouts/Layout.astro";
const seo = { page_description: "Terms of Service." };
---
<Layout title="Terms of Service" seo={seo}>
  <div class="max-w-4xl mx-auto px-4 sm:px-8 py-16 prose">
    <h1>Terms of Service</h1>
    <p>Terms and conditions.</p>
  </div>
</Layout>
INNER
