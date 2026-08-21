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
