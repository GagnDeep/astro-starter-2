import re

with open("src/content/pages/index.md", "r") as f:
    content = f.read()

# Make sure FAQ answers in first 40-60 words are self-contained answers.
# Current answers:
# "The EU Battery Passport becomes mandatory on 18 February 2027 for LMT batteries, industrial batteries with a capacity greater than 2 kWh, and EV batteries. This date is strictly established by the EU Battery Regulation, requiring the digital record to be accessible via a QR code." -> 43 words.
# "The required data fields are divided into public, regulatory, and economic operator access levels. They include carbon footprint declarations, supply chain due diligence reports, expected lifetime metrics, and exact recycled content percentages. We maintain the complete data model mapping." -> 39 words.
# "No, we do not sell compliance software. This site provides the authoritative free information layer on the regulation. It is funded by vendor sponsorships and a paid readiness toolkit intended to help companies assess their own gaps." -> 38 words.
# "A gap analysis involves mapping your current supply chain data against the specific requirements of the EU regulation. You must evaluate missing data points in performance, recycled content, and due diligence, then assess your technical capability to generate the required digital record." -> 43 words.

# H2 checks
# "Avoid the software upselling trap." -> Text content: "Most information available on the EU Battery Passport is published by software vendors who want to sell you their platform..." (Not really answering a question or claim)
# Change heading to: "Why is independent verification critical for the EU Battery Passport?"
# Change text to: "Independent verification is critical because most information available on the EU Battery Passport is published by software vendors who want to sell you their platform. Their content is often high-level, vague, or deliberately obfuscates the exact regulatory requirements to make their proprietary solution seem indispensable. We don't sell software. We provide the authoritative, exact information layer verified directly against EUR-Lex, allowing compliance teams to build real technical requirements."

content = content.replace(
    'heading: "Avoid the software upselling trap."',
    'heading: "Why is independent verification critical for the EU Battery Passport?"'
).replace(
    'text_content: "Most information available on the EU Battery Passport is published by software vendors',
    'text_content: "Independent verification is critical because most information available on the EU Battery Passport is published by software vendors'
)

# "Designed for technical implementation."
# Change heading to: "How do we support technical implementation of the battery passport?"
# Change text to: "We support technical implementation by providing exact data field specifications rather than high-level summaries. Compliance and product managers need exact data field specifications, not summaries. We break down the technical specifications into materials, performance parameters, and circularity information. Every obligation is paired with its original legal citation so you can trust the architecture you are building."

content = content.replace(
    'heading: "Designed for technical implementation."',
    'heading: "How do we support technical implementation of the battery passport?"'
).replace(
    'text_content: "Compliance and product managers need exact data field specifications',
    'text_content: "We support technical implementation by providing exact data field specifications rather than high-level summaries. Compliance and product managers need exact data field specifications'
)

with open("src/content/pages/index.md", "w") as f:
    f.write(content)
