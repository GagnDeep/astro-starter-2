import re

with open("capture.config.ts", "r") as f:
    content = f.read()

# Make sure the requested form labels from memory are added if not present.
# From Memory: The capture.config.ts for this site uses form labels: contact, newsletter, software_referral, certification_inquiry.
# I will update forms mapping.

content = re.sub(
    r'forms: \{.*?\},',
    '''forms: {
    contact: "contact",
    newsletter: "newsletter",
    software_referral: "software_referral",
    certification_inquiry: "certification_inquiry",
    waitlist: "waitlist",
    toolkit_inquiry: "toolkit_inquiry",
    sponsorship: "sponsorship",
  },''',
    content,
    flags=re.DOTALL
)

with open("capture.config.ts", "w") as f:
    f.write(content)
