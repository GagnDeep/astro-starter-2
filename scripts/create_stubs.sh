#!/bin/bash
set -e

# Reference Pages
refs=("diaphragmatic-breathing" "vagus-nerve-stimulation" "heart-rate-variability" "co2-tolerance" "nasal-vs-mouth-breathing" "hyperventilation-mechanics" "parasympathetic-nervous-system" "sympathetic-nervous-system" "blood-pressure-regulation" "sleep-onset-latency" "nitric-oxide-production" "hypoxia-basics" "respiratory-sinus-arrhythmia" "boltz-score" "breathing-biomechanics" "ph-balance-blood")
for ref in "${refs[@]}"; do
  cat << INNER > "src/content/reference/$ref.md"
---
title: "${ref//-/ }"
description: "Detailed scientific reference on ${ref//-/ }."
seo:
  page_description: "Detailed scientific reference on ${ref//-/ }."
---

# ${ref//-/ }

Content goes here for ${ref//-/ }.
INNER
done

# Techniques
techs=("box-breathing" "4-7-8-method" "physiological-sigh" "wim-hof-method" "buteyko-method" "alternate-nostril-breathing" "tummo" "holotropic-breathwork" "resonance-frequency" "sama-vritti" "kapalabhati")
for tech in "${techs[@]}"; do
  cat << INNER > "src/content/techniques/$tech.md"
---
title: "${tech//-/ }"
description: "How to perform ${tech//-/ }."
seo:
  page_description: "How to perform ${tech//-/ }."
---

# ${tech//-/ }

Content goes here for ${tech//-/ }.
INNER
done

# Glossary
gloss=("apnea" "bradycardia" "capnography" "chemoreceptors" "diaphragm" "dyspnea" "eupnea" "hypercapnia" "hypocapnia" "hypoxia" "medulla-oblongata" "minute-ventilation" "pranayama" "respiratory-rate" "tidal-volume" "vagal-tone" "vasodilation" "vasoconstriction" "vital-capacity" "bohr-effect" "haldane-effect")
for term in "${gloss[@]}"; do
  cat << INNER > "src/content/glossary/$term.md"
---
title: "${term//-/ }"
description: "Definition of ${term//-/ }."
seo:
  page_description: "Definition of ${term//-/ }."
---

# ${term//-/ }

Definition goes here for ${term//-/ }.
INNER
done

# Posts
posts=("best-breathing-for-sleep" "how-to-lower-heart-rate-fast" "breathwork-for-anxiety-relief" "science-of-physiological-sigh" "wim-hof-vs-buteyko" "improving-hrv-with-breathing" "box-breathing-navy-seals" "mouth-taping-benefits" "resonance-frequency-guide" "breathwork-contraindications" "breathing-for-focus-adhd" "cold-exposure-and-breathwork")
for post in "${posts[@]}"; do
  cat << INNER > "src/content/blog/$post.mdx"
---
title: "${post//-/ }"
thumb_image_path: "/images/blog/featured-image-1.jpg"
thumb_image_alt: "${post//-/ }"
post_hero:
  date: "2024-05-15"
  heading: "${post//-/ }"
  tags:
    - breathwork
  author: "Breather Timer"
  image: "/images/blog/featured-image-1.jpg"
  image_alt: "${post//-/ }"
seo:
  page_description: "Article about ${post//-/ }."
---

# ${post//-/ }

Article content for ${post//-/ }.
INNER
done
