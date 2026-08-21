#!/bin/bash

categories=("prompting" "automation" "strategy")

cat << 'INNER' > src/content/library/prompt-engineering-basics.md
---
title: "The Anatomy of a Perfect Prompt"
description: "A framework for writing clear, actionable instructions that get AI to do exactly what you want."
category: "prompting"
order: 1
---

## Stop Treating AI Like Google

The most common mistake professionals make when first using tools like ChatGPT or Claude is treating the interface like a search engine. You type in a few keywords, hit enter, and expect a polished result.

When you do this, you are forcing the LLM to guess your intent, your context, and your desired format. The result is generic, unhelpful text—often called "AI slop."

To get high-quality output, you need to transition from *searching* to *instructing*.

## The CREATE Framework for Prompting

A robust prompt should contain several distinct elements. We use the CREATE framework:

### 1. Context (The "Who and What")
Before asking for an output, tell the AI who it is acting as and what the background situation is.
> *"You are a senior B2B marketing manager. We are launching a new cybersecurity software for mid-sized healthcare clinics..."*

### 2. Request (The Task)
What, specifically, do you want the AI to do? Use strong verbs.
> *"Draft a 3-email sequence designed to get clinic IT directors to book a 15-minute demo."*

### 3. Examples (The "Show, Don't Tell")
Providing examples (Few-Shot Prompting) is the single most effective way to improve output quality.
> *"Here is an example of an email that worked well for us in the past: [Insert Email]. Match this tone."*

### 4. Audience (The Target)
Who will be reading the output?
> *"The audience is highly technical IT directors who are notoriously short on time and skeptical of sales jargon."*

### 5. Tone (The Style)
Give explicit instructions on the voice.
> *"The tone should be professional, direct, and slightly urgent. Do NOT use words like 'revolutionary', 'synergy', or 'unleash'."*

### 6. Extras (Format and Constraints)
How do you want the information presented? Are there length limits?
> *"Format the output as a Markdown table. Do not exceed 150 words per email. Include two subject line options for each."*

## Putting it Together

When you combine these elements, a simple request transforms into a powerful set of instructions. The time you spend writing a detailed prompt is directly proportional to the time you save editing the output.

For a deeper dive into providing examples, read our guide on [Few-Shot Prompting](/library/few-shot-prompting).
INNER

cat << 'INNER' > src/content/library/few-shot-prompting.md
---
title: "Few-Shot Prompting: Teaching AI by Example"
description: "How to drastically improve AI output quality by providing examples directly in your prompt."
category: "prompting"
order: 2
---

## The Power of Examples

If you tell an intern to "write a weekly update report," they might give you a three-page essay or a two-line email. If you tell them to "write a weekly update report, like this one from last week," you will get exactly what you need.

AI models work the same way.

**Zero-Shot Prompting** is asking the AI to perform a task with no examples.
**Few-Shot Prompting** is providing 1 to 5 examples of the desired input/output format within the prompt.

## When to Use Few-Shot Prompting

You should use Few-Shot Prompting when:
1.  **Format is critical:** You need the output in a very specific, non-standard layout (e.g., a specific JSON structure, or a highly stylized Markdown table).
2.  **Tone is subtle:** You are trying to capture a specific brand voice that is hard to describe with adjectives alone.
3.  **Logic is complex:** You are asking the AI to categorize data based on subjective or nuanced criteria.

## How to Structure a Few-Shot Prompt

The key is to create a clear pattern for the AI to follow. Use distinct separators (like `###` or `<example>`) so the AI knows what is an example and what is the actual task.

### Example Structure

```text
You are a sentiment analysis bot. Classify the following customer reviews into Positive, Negative, or Neutral.

Here are some examples:

Review: "The software crashed three times today. Unusable."
Classification: Negative
###
Review: "It gets the job done, but the UI is a bit clunky."
Classification: Neutral
###
Review: "Absolutely love the new automation features. Saved my team 5 hours this week."
Classification: Positive
###

Now, classify this review:
Review: [Insert new review here]
Classification:
```

By establishing this pattern, the AI learns exactly how to respond, eliminating verbose explanations and formatting errors. This technique is foundational when building automated workflows with tools like Zapier and the OpenAI API.
INNER

for i in {3..15}; do
  cat << INNER > "src/content/library/guide-$i.md"
---
title: "Advanced Guide $i"
description: "Detailed documentation and practical examples for implementing AI strategy $i."
category: "strategy"
order: $i
---

## The Core Concept

This is a comprehensive guide on advanced AI strategies for professionals.

To effectively leverage AI, you must understand both the technical capabilities of the models and the organizational dynamics of your team. This guide covers best practices, common pitfalls, and real-world examples.

### Key Takeaways
- Always verify outputs against primary sources.
- Implement strict data privacy policies before using public APIs.
- Focus on augmenting human capabilities, not replacing them.

For fundamental concepts, refer to our [Glossary](/glossary). For calculating the financial impact of these strategies, use our [AI ROI Calculator](/tools/roi-calculator).
INNER
done
