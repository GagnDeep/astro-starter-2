---
title: "LLM Token Cost Estimator"
description: "Estimate API costs for building applications on top of large language models."
component: "token-cost-calculator"
---

## What is a Token?

In the context of Large Language Models (LLMs) like GPT-4 or Claude, a token is a chunk of text. As a rule of thumb, **1 token is approximately 4 characters** or **0.75 words** of English text.

Providers charge based on the number of tokens you send to the model (Input) and the number of tokens the model generates in response (Output). Output tokens are typically 3x to 5x more expensive than input tokens because generating text requires more compute power than reading it.

### Cost Strategies

-   **Model Selection:** The biggest lever you have is model choice. Using GPT-4o for a simple classification task is a waste of money; GPT-3.5 Turbo or Claude Haiku would cost a fraction of the price and perform just as well.
-   **Prompt Optimization:** Shorter prompts cost less. Remove unnecessary context.
-   **Output Constraints:** Instruct the model to be concise. E.g., "Answer in one sentence."
