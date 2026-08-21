#!/bin/bash
set -e

# --- Reference ---
refs=("microbiome" "stomach-acid" "digestive-enzymes" "gut-motility" "leaky-gut" "vagus-nerve" "short-chain-fatty-acids" "bristol-stool-scale" "gut-brain-axis" "enteric-nervous-system" "mucosal-lining" "bile-acids" "pancreatic-function" "gastric-emptying" "intestinal-flora")
for r in "${refs[@]}"; do
cat << INNER_EOF > src/content/reference/$r.md
---
title: ${r//-/ }
description: Reference guide for ${r//-/ }
seo:
  page_description: Comprehensive overview of ${r//-/ }.
---
# ${r//-/ }
This is a reference page explaining ${r//-/ }.

## Understanding ${r//-/ }
Detailed explanation of ${r//-/ }.
INNER_EOF
done

# --- Conditions ---
conds=("bloating" "acid-reflux" "constipation" "diarrhea" "sibo" "ibs" "candida" "gastritis" "dysbiosis" "leaky-gut-syndrome")
for c in "${conds[@]}"; do
cat << INNER_EOF > src/content/conditions/$c.md
---
title: ${c//-/ }
description: Condition overview for ${c//-/ }
seo:
  page_description: Learn about the causes and solutions for ${c//-/ }.
---
# ${c//-/ }
Learn about ${c//-/ }.

## Causes of ${c//-/ }
Common causes.
INNER_EOF
done

# --- Glossary ---
glos=("prebiotics" "probiotics" "postbiotics" "synbiotics" "l-glutamine" "betaine-hcl" "pepsin" "amylase" "protease" "lipase" "inulin" "psyllium" "butyrate" "lactobacillus" "bifidobacterium" "saccharomyces-boulardii" "zonulin" "peristalsis" "chyme" "motilin")
for g in "${glos[@]}"; do
cat << INNER_EOF > src/content/glossary/$g.md
---
title: ${g//-/ }
description: Glossary term ${g//-/ }
seo:
  page_description: Definition of ${g//-/ } in digestive health.
---
# ${g//-/ }
Definition of ${g//-/ }.
INNER_EOF
done

# --- Posts ---
posts=("enzymes-vs-probiotics" "how-to-improve-digestion-naturally" "best-time-to-take-probiotics" "signs-of-low-stomach-acid" "stress-and-digestion-connection" "low-fodmap-diet-guide" "apple-cider-vinegar-digestion" "foods-that-cause-bloating" "how-long-to-heal-gut" "prebiotics-side-effects" "gut-brain-axis-explained" "natural-remedies-acid-reflux")
for p in "${posts[@]}"; do
cat << INNER_EOF > src/content/blog/$p.mdx
---
title: ${p//-/ }
post_hero:
  date: 2024-05-01
  heading: ${p//-/ }
  tags: ["digestion", "health"]
  author: "Digestine Editorial"
  image: /images/blog/featured-image-1.jpg
  image_alt: ${p//-/ } image
thumb_image_path: /images/blog/thumb-1.jpg
thumb_image_alt: thumbnail for ${p//-/ }
seo:
  page_description: An article on ${p//-/ }.
---
# ${p//-/ }
Detailed article about ${p//-/ } spanning at least 1500 words (stubbed for now, will enhance later if time permits).

[Read more in our glossary](/glossary/prebiotics)
INNER_EOF
done
