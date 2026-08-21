#!/bin/bash

terms=(
    "llm|Large Language Model|A foundational AI model trained on massive amounts of text data to understand and generate human-like language."
    "rag|Retrieval-Augmented Generation|A technique that allows an AI model to search a custom database or document for relevant information before generating a response, improving accuracy and reducing hallucinations."
    "prompt-engineering|Prompt Engineering|The practice of designing and refining inputs (prompts) to guide an AI model to produce specific, desired outputs."
    "hallucination|Hallucination|When an AI model confidently generates false, nonsensical, or unverified information."
    "fine-tuning|Fine-tuning|Taking a pre-trained AI model and training it further on a smaller, specific dataset to specialize it for a particular task or domain."
    "token|Token|The fundamental unit of data processed by an LLM. It can be a word, a part of a word, or a single character."
    "context-window|Context Window|The maximum amount of text (measured in tokens) that an AI model can consider at one time when generating a response."
    "zero-shot-prompting|Zero-Shot Prompting|Asking an AI model to perform a task without providing any examples in the prompt."
    "few-shot-prompting|Few-Shot Prompting|Providing an AI model with a few examples of the desired input-output format within the prompt to guide its behavior."
    "chain-of-thought|Chain-of-Thought Prompting|A prompting technique where the AI is instructed to explain its reasoning step-by-step before arriving at a final answer."
    "system-prompt|System Prompt|A set of overarching instructions or persona guidelines given to an AI model that dictates its behavior throughout an entire conversation."
    "temperature|Temperature|A parameter that controls the randomness or creativity of an AI model's output. Lower values produce predictable text; higher values produce more varied text."
    "ai-agent|AI Agent|An AI system capable of autonomous action, able to use tools (like web browsers or APIs) and make decisions to achieve a specified goal."
    "machine-learning|Machine Learning|A subset of AI where systems learn patterns from data to improve their performance on a specific task without being explicitly programmed."
    "deep-learning|Deep Learning|A specialized subset of machine learning based on artificial neural networks with multiple layers, used to model complex patterns in large datasets."
    "nlp|Natural Language Processing (NLP)|The branch of AI focused on the interaction between computers and human language, enabling machines to understand, interpret, and generate text."
    "generative-ai|Generative AI|A category of AI systems designed to create new content—such as text, images, code, or audio—based on patterns learned from training data."
    "embedding|Embedding|A mathematical representation of text or data as a vector of numbers, capturing semantic meaning and allowing computers to measure the similarity between concepts."
    "vector-database|Vector Database|A specialized database designed to store and quickly query embeddings, often used in RAG systems to find relevant information."
    "api|API (Application Programming Interface)|A set of rules and protocols that allows different software applications to communicate with each other, often used to integrate AI models into custom software."
    "open-source-ai|Open-Source AI|AI models whose underlying code and weights are made publicly available for anyone to use, modify, and distribute (e.g., Llama 3)."
    "foundation-model|Foundation Model|A large, generalized AI model trained on vast amounts of unlabeled data, serving as a base that can be adapted (fine-tuned) for a wide range of specific tasks."
)

for item in "${terms[@]}"; do
    slug=$(echo "$item" | cut -d'|' -f1)
    title=$(echo "$item" | cut -d'|' -f2)
    def=$(echo "$item" | cut -d'|' -f3)

    cat << INNER > "src/content/glossary/$slug.md"
---
title: "$title"
definition: "$def"
---

Understanding **$title** is essential for any professional looking to apply practical AI in their daily workflows.

By grasping this concept, you move beyond surface-level usage of chat interfaces and begin to understand the underlying mechanics of how these tools operate. This knowledge is critical for troubleshooting, optimizing prompts, and designing automated systems.

*For more practical applications and deep dives, explore our [Reference Library](/library).*
INNER
done
