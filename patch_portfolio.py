import sys
import re

with open('src/content/pages/technology/portfolio-management/index.md', 'r') as f:
    content = f.read()

content = content.replace('## Evaluating the Core Engine', '## How do you evaluate a portfolio management system when alternative investments are a primary asset class?')
content = content.replace('### Evaluation Criteria', '### What are the three non-negotiable criteria for a multi-custodial reconciliation engine?')
content = content.replace('## The Integration Reality', '## Why do promised future integrations pose a systemic operational risk to an independent RIA?')

with open('src/content/pages/technology/portfolio-management/index.md', 'w') as f:
    f.write(content)

with open('src/content/pages/succession/valuation/index.md', 'r') as f:
    content = f.read()

content = content.replace('## The Mathematics of Enterprise Value', '## How is the enterprise value of an independent RIA mathematically determined?')
content = content.replace('### Multiples of Revenue vs. EBITDA', '### Why have sophisticated buyers shifted from revenue multiples to adjusted EBITDA?')
content = content.replace('### The Impact of Client Demographics', '### How does the average age of your client base directly discount your firm\'s valuation multiplier?')
content = content.replace('### Structuring the Earn-Out', '### What structural mechanisms in an earn-out provision protect the buyer against post-transition client attrition?')

with open('src/content/pages/succession/valuation/index.md', 'w') as f:
    f.write(content)

with open('src/content/pages/formation/series-65/index.md', 'r') as f:
    content = f.read()

content = content.replace('## The Licensing Gatekeeper', '## What is the core regulatory purpose of the Series 65 licensing examination?')
content = content.replace('### Who Must Take the Series 65?', '### Which specific roles within an RIA require an active Series 65 registration?')
content = content.replace('### Professional Designation Waivers', '### Which active professional designations automatically grant a waiver from the Series 65 requirement?')
content = content.replace('### The Series 7 and 66 Combination', '### Does holding a valid Series 7 and Series 66 combination satisfy the requirements for an independent IAR?')

with open('src/content/pages/formation/series-65/index.md', 'w') as f:
    f.write(content)
