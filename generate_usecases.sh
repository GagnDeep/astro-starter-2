#!/bin/bash

usecases=(
    "marketing|marketing|How marketers use AI for content scaling, customer segmentation, and campaign analysis."
    "sales|sales|How sales teams use AI for lead scoring, personalized outreach, and meeting summaries."
    "hr|hr|How HR professionals use AI for drafting job descriptions, analyzing employee feedback, and onboarding."
    "finance|finance|How finance teams use AI for anomaly detection, automated reporting, and invoice processing."
    "operations|operations|How operations managers use AI for supply chain forecasting and process automation."
    "customer-support|customer-support|How support teams use AI for ticket routing, draft responses, and knowledge base retrieval."
    "legal|legal|How legal professionals use AI for contract analysis, precedent research, and document drafting."
    "software-engineering|software-engineering|How developers use AI for code generation, bug detection, and documentation."
    "product-management|product-management|How PMs use AI for user research synthesis, writing user stories, and competitive analysis."
    "executive-leadership|executive-leadership|How executives use AI for market trend analysis, summarizing reports, and strategic planning."
)

for item in "${usecases[@]}"; do
    slug=$(echo "$item" | cut -d'|' -f1)
    ind=$(echo "$item" | cut -d'|' -f2)
    sum=$(echo "$item" | cut -d'|' -f3)

    cat << INNER > "src/content/use-cases/$slug.md"
---
title: "AI in $(echo "$ind" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')"
industry: "$ind"
summary: "$sum"
---

## The Landscape Today

Professionals in $ind are rapidly adopting AI tools to eliminate repetitive tasks and uncover insights hidden in unstructured data.

The most successful implementations do not attempt to replace human judgment; rather, they automate the "busywork" (data entry, drafting, summarizing) so that professionals can focus on high-value strategic work.

### Top 3 Use Cases in $ind

1.  **Automated Drafting and Review:** Using LLMs to generate first drafts of standard documents, emails, and reports.
2.  **Data Extraction:** Pulling structured data (like dates, names, or financial figures) out of messy, unstructured text (like emails or PDFs).
3.  **Synthesis and Summarization:** Turning hours of meeting transcripts or dozens of long documents into concise, actionable summaries.

### Getting Started

If you are just beginning to integrate AI into your $ind workflow, start small. Identify a daily task that takes 30 minutes and requires low cognitive load. Use our [Time Saved Calculator](/tools/time-saved) to estimate the impact, and begin testing prompts.
INNER
done
