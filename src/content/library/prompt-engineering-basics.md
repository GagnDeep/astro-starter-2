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
