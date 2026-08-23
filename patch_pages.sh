#!/bin/bash
# Writing out pages
cat << 'INNER_EOF' > src/content/pages/guide.md
---
title: "The Handpan Buyer's Guide"
seo:
  page_description: "A comprehensive, uncompromised guide for first-time handpan buyers. Find the right scale, maker, and budget without affiliate bias."
  canonical_url: "https://handpano.com/guide/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpano — independent handpan buyer's guide"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["guide", "buying"]
hero_block:
  _name: Hero
  heading: "The Complete Handpan Buyer's Guide"
  subheading: "Everything you need to know before investing in your first handpan. No affiliate links. No drop-shippers. Just facts, verified pricing, and clear criteria."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "A person playing a high-quality handpan in natural light"
  button:
    text: "Get the 10-Point Checklist"
    link: "#checklist"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "Why You Need a Guide to Buy a Handpan"
    text_content: >
      Buying a handpan is uniquely challenging compared to other instruments. Unlike guitars or pianos, which have established brands and standardized models you can try at any local music shop, the handpan market is largely decentralized. It's dominated by independent makers scattered across the globe.


      This decentralization has led to a flood of misinformation. Stamped steel imports are marketed as "authentic" hammered art. Affiliate marketers push whichever brand offers the highest commission. The truth is, a quality handpan is a significant investment—typically ranging from $1,500 to $3,500 USD—and making an informed decision requires understanding the nuances of scales, materials, and maker reputations.

      This guide provides a structured framework for evaluating any handpan. We break down the core components of the instrument, explain the true cost of craftsmanship, and give you the tools to spot red flags before you hand over your money.
  - _name: FeatureBlock
    heading: "The Three Pillars of Your Decision"
    features:
      - title: "1. The Scale"
        description: "The scale defines the mood and emotional resonance of the instrument. Once tuned, a handpan's scale cannot be changed. For most beginners, a D Minor (Kurd 9) is recommended due to its versatility and intuitive progression. [Learn more about scales](/scales/)."
      - title: "2. The Maker"
        description: "The maker determines the instrument's longevity, tuning stability, and timbral quality. Authentic makers hand-hammer each note, carefully tuning the fundamental tone, octave, and compound fifth. [Explore verified makers](/makers/)."
      - title: "3. The Budget"
        description: "Understanding the true cost of materials and labor is essential. A $500 handpan is almost certainly a mass-produced, stamped shell that will rapidly fall out of tune. [Understand the cost breakdown](/budget/cost-breakdown/)."
  - _name: CaptureBand
    heading: "Don't buy until you read this."
    subheading: "Join our newsletter and receive a free 10-point checklist on how to spot a fake handpan."
    form_label: "newsletter"
  - _name: SourcesList
    heading: "References & Further Reading"
    sources:
      - title: "Handpan Makers Guild - Authentication Standards"
        url: "https://example.com/hmg"
      - title: "Acoustics of the Handpan (Scientific Analysis)"
        url: "https://example.com/acoustics"
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/scales.md
---
title: "Handpan Scales Guide"
seo:
  page_description: "Understand the different handpan scales and choose the right one for your musical background. Categorized by mood and difficulty."
  canonical_url: "https://handpano.com/scales/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpan scale diagram"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["scales", "tuning"]
hero_block:
  _name: Hero
  heading: "Choosing the Right Handpan Scale"
  subheading: "The scale you choose defines the voice of your instrument forever. We break down the most common tunings by mood, difficulty, and versatility."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Close-up of handpan tone fields"
  button:
    text: "View D Minor Guide"
    link: "/scales/d-minor/"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "The Importance of Scale Selection"
    text_content: >
      Unlike a piano or guitar, a standard handpan cannot play every note in the chromatic scale. It is fixed to a specific set of notes—typically 7 to 9 on the top shell—that form a single scale. This means the scale you choose dictates the emotional quality and musical possibilities of the instrument.


      If you choose a melancholic scale, every composition you play will inherently carry a sense of longing or sadness. If you choose an uplifting major scale, your music will sound bright and optimistic. Furthermore, certain scales interact better with other instruments, which is critical if you plan to jam with friends or integrate the handpan into existing music.

      In this guide, we evaluate scales based on three criteria: Emotional Resonance (mood), Beginner Friendliness (ease of intuitive play), and Harmonic Versatility (how well it plays with other instruments).
  - _name: ComparisonTable
    heading: "Popular Scales Compared"
    our_name: "Mood"
    their_name: "Best For"
    rows:
      - feature: "D Minor (Kurd)"
        our_value: "Melancholic, Cinematic, Balanced"
        their_value: "Absolute beginners, jamming with others"
      - feature: "C# Minor (Celtic)"
        our_value: "Mystical, Deep, Resonant"
        their_value: "Solo players, meditation, sound healing"
      - feature: "F Major (Sabye)"
        our_value: "Uplifting, Bright, Hopeful"
        their_value: "Experienced players looking for a contrasting mood"
  - _name: TextBlock
    heading: "Why D Minor is the Standard"
    text_content: >
      For over 80% of first-time buyers, D Minor (often referred to as Kurd 9) is the optimal choice. Its intuitive layout ensures that almost any combination of notes sounds harmonious, reducing the frustration of hitting a 'wrong' note during improvisation.


      It is deeply versatile, serving as a reliable foundation for both rhythmic, upbeat playing and slow, meditative sessions.
  - _name: CaptureBand
    heading: "Want help deciding?"
    subheading: "Sign up to receive our interactive scale selection quiz directly in your inbox."
    form_label: "newsletter"
  - _name: SourcesList
    heading: "References & Primary Sources"
    sources:
      - title: "Harmonic Overtone Analysis in Steel Instruments"
        url: "https://example.com/overtones"
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/budget/used-handpans.md
---
title: "Buying a Used Handpan"
seo:
  page_description: "Find a quality handpan at a lower price point and avoid getting scammed on the secondary market with our used handpan checklist."
  canonical_url: "https://handpano.com/budget/used-handpans/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "A person inspecting a used handpan"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["budget", "used"]
hero_block:
  _name: Hero
  heading: "How to Safely Buy a Used Handpan"
  subheading: "The secondary market is the best way to save money on a real instrument—but it’s also full of scams. Here is exactly what to look for."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Used handpan inspection"
  button:
    text: "Read the Checklist"
    link: "#checklist"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "The Reality of the Secondary Market"
    text_content: >
      A high-quality handpan holds its value incredibly well. Instruments from top-tier makers often sell for near their original retail price on the secondary market. Buying used isn't about finding a $3,000 instrument for $500; it's about skipping the maker's waitlist (which can be years long) or saving 10-20% off the retail price.


      However, the secondary market is fraught with risks. Scammers frequently steal photos and videos from legitimate listings. Sellers may inadvertently try to offload instruments that have fallen out of tune or suffered structural damage from being dropped.


      To protect yourself, you must demand a current, dated video demonstrating the tuning of every note, and you should always use a secure payment method with buyer protection.
  - _name: TextBlock
    heading: "Checklist for Assessing a Used Handpan"
    text_content: >
      When evaluating a used instrument, always verify these three critical factors:


      1. **Tuning Stability:** Ask the seller to play every note (the central ding, the fundamental, the octave, and the fifth) while displaying a reliable digital tuner in the frame.

      2. **Structural Integrity:** Request well-lit, close-up photos of the rim, the central ding, and the bottom port (Gu). Look for hairline cracks or deep dents. Minor surface rust can often be treated, but deep pitting affects the sound.

      3. **Seller Authenticity:** Insist on a "proof of life" video. The seller should state your name and the current date on camera before playing the instrument.
  - _name: SourcesList
    heading: "Primary Sources"
    sources:
      - title: "Consumer Protection Guidelines on Peer-to-Peer Instrument Sales"
        url: "https://example.com/consumer-protection"
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/makers/how-to-spot-fakes.md
---
title: "How to Spot Fake Handpans"
seo:
  page_description: "Learn the visual and structural red flags to identify cheap, mass-produced stamped steel masquerading as hammered art."
  canonical_url: "https://handpano.com/makers/how-to-spot-fakes/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Comparing a real and fake handpan"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["makers", "fakes"]
hero_block:
  _name: Hero
  heading: "How to Spot a Fake Handpan"
  subheading: "Don't get scammed by drop-shippers. Learn the tell-tale signs of mass-produced, stamped steel instruments that won't hold their tune."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Examining handpan construction"
  button:
    text: "See the Warning Signs"
    link: "#warning-signs"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "The Drop-Shipping Epidemic"
    text_content: >
      The explosive popularity of the handpan has attracted opportunistic manufacturers who prioritize scale over sound quality. They use heavy industrial presses to stamp out metal shells in seconds, completely bypassing the meticulous hand-hammering process required to properly tune the fundamental tone, octave, and compound fifth of each note.


      These instruments are then bulk-shipped to resellers who rebrand them, slap on a $500–$800 price tag, and flood marketplaces like Amazon and eBay. They often use aggressive marketing tactics, fake reviews, and stolen video audio to deceive first-time buyers.


      The problem isn't just that these instruments sound harsh or metallic; it's that their tuning structure is fundamentally flawed. They cannot hold their tuning, and legitimate tuners will refuse to fix them because the metal lacks the necessary internal tension.
  - _name: FeatureBlock
    heading: "Visual and Structural Red Flags"
    features:
      - title: "Perfectly Uniform Dimples"
        description: "A real handpan shows subtle variations from the hammer strikes required for precise tuning. If the dimples (the indentations on the tone fields) look perfectly uniform and machine-pressed, it is a stamped fake."
      - title: "The 'Too Good to Be True' Price"
        description: "Hand-tuning takes hours of skilled labor. A new instrument selling for under $1,000 USD is a massive red flag. Quality craftsmanship simply cannot be delivered at that price point."
      - title: "Lack of Maker Transparency"
        description: "Authentic builders are proud of their work. They show their workshop, their tuning process, and sign their instruments. If a brand only exists as an Amazon storefront with generic stock photos, avoid it."
  - _name: SourcesList
    heading: "References"
    sources:
      - title: "Metallurgical Analysis of Stamped vs. Hammered Steel"
        url: "https://example.com/metallurgy"
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/about.md
---
title: "About Handpano"
seo:
  page_description: "Learn about the team behind Handpano. We provide independent, citation-backed resources for first-time handpan buyers."
  canonical_url: "https://handpano.com/about/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpano Editorial Team"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["about"]
hero_block:
  _name: Hero
  heading: "About Handpano"
  subheading: "We are an independent editorial team dedicated to bringing transparency to the handpan market. No affiliate links, no paid placements, just facts."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Handpano team"
  button:
    text: "Read Our Editorial Policy"
    link: "/editorial-policy/"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "Our Mission"
    text_content: >
      The handpan is a magical instrument, but buying one shouldn't require magic. When we set out to buy our first handpans, we were met with a wall of confusing terminology, opaque pricing, and sites prioritizing affiliate commissions over honest advice.


      We founded Handpano to be the resource we wished we had. We buy instruments at retail price, we test them extensively, and we publish our findings without fear of upsetting manufacturers or losing commission payouts.


      Our goal is simple: to help you find an instrument that matches your musical goals and budget, without the affiliate spin. We sustain this work by offering our own, deeply researched buyer's guide and structured learning courses.
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/contact.md
---
title: "Contact Handpano"
seo:
  page_description: "Get in touch with the Handpano editorial team. We are here to answer your questions about handpans, makers, and our reviews."
  canonical_url: "https://handpano.com/contact/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Contact Handpano"
  author_twitter_handle: null
  open_graph_type: "website"
  no_index: false
hero_block:
  _name: Hero
  heading: "Get in Touch"
  subheading: "Have a question about a specific maker? Need clarification on our review process? Reach out below."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Contact Handpano"
content_blocks:
  - _name: TextBlock
    heading: "How to Reach Us"
    text_content: >
      Whether you have a specific question about our guides or need to report a correction, we are always happy to hear from our readers.

      Please use the secure form below to send us a message. We typically respond within two business days.
  - _name: CaptureBand
    heading: "Send us a message."
    subheading: "We read every email and typically reply within 48 hours."
    form_label: "contact"
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/editorial-policy.md
---
title: "Editorial Policy"
seo:
  page_description: "Our strict editorial guidelines ensure all handpan reviews and guides are independent, objective, and completely free of affiliate bias."
  canonical_url: "https://handpano.com/editorial-policy/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpano Editorial Policy"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["policy"]
hero_block:
  _name: Hero
  heading: "Our Editorial Policy"
  subheading: "Transparency and independence are the core of everything we publish. We refuse all affiliate programs and sponsored placements."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Editorial Policy"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "Commitment to Independence"
    text_content: >
      Our content is guided by a strict editorial policy designed to eliminate conflicts of interest. We do not participate in any affiliate marketing programs. We never accept free instruments, paid travel, or any form of compensation from makers in exchange for coverage.


      When we test an instrument, we purchase it at full retail price or borrow it from an independent owner. This ensures that the instruments we evaluate are exactly the same as the ones you would receive.
  - _name: TextBlock
    heading: "Corrections and Updates"
    text_content: >
      The handpan market evolves rapidly. Makers adjust their pricing, change their materials, and update their waitlists. If we make an error regarding a maker's specifications or pricing, we correct it immediately on the page and log the date of the change.

      If you spot a factual error, please contact us so we can verify and update the information.
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/how-we-make-money.md
---
title: "How We Make Money"
seo:
  page_description: "Learn exactly how Handpano sustains its independent editorial operations without using affiliate links or accepting paid reviews."
  canonical_url: "https://handpano.com/how-we-make-money/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpano Monetization Policy"
  author_twitter_handle: null
  open_graph_type: "article"
  no_index: false
post_hero:
  date: "2025-02-23"
  author: "Handpano Editorial"
  tags: ["policy", "monetization"]
hero_block:
  _name: Hero
  heading: "How We Fund Our Work"
  subheading: "We sustain our independent research and reporting by selling our own educational products, never by taking a cut of your instrument purchase."
  image:
    image_path: "/src/assets/images/blog/featured-image-1.jpg"
    alt_text: "Handpano Funding"
content_blocks:
  - _name: Byline
    author_name: "Handpano Editorial"
    author_title: "Editorial Team"
    date: "2025-02-23"
    avatar_path: "/src/assets/images/author-editorial.jpg"
  - _name: TextBlock
    heading: "Our Monetization Engine"
    text_content: >
      Producing in-depth, citation-backed research requires significant time and resources. Because we strictly refuse affiliate commissions and sponsored content, we rely entirely on our own products to fund our operations.


      We make money in two primary ways: First, through the sale of our comprehensive $29 Buyer's Decision Guide, which offers structured frameworks that go beyond our free articles. Second, through our curriculum of handpan lessons designed for absolute beginners.


      Every recommendation we make on this site is based purely on merit and verified craftsmanship. When you buy a handpan based on our advice, 100% of your money goes directly to the independent maker.
---
INNER_EOF

cat << 'INNER_EOF' > src/content/pages/author/editorial.md
---
title: "Handpano Editorial Team"
seo:
  page_description: "The Handpano editorial team writes independent, rigorous guides for first-time buyers based on direct testing and market research."
  canonical_url: "https://handpano.com/author/editorial/"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "Handpano Editorial Team Portrait"
  author_twitter_handle: null
  open_graph_type: "profile"
  no_index: false
hero_block:
  _name: Hero
  heading: "Handpano Editorial"
  subheading: "Our team of researchers and musicians dedicated to transparent, objective handpan education."
  image:
    image_path: "/src/assets/images/author-editorial.jpg"
    alt_text: "Handpano Editorial Team Portrait"
content_blocks:
  - _name: TextBlock
    heading: "About the Team"
    text_content: >
      The Handpano editorial team is a collective of experienced handpan players, researchers, and writers. We share a common frustration with the state of the handpan market, which is too often dominated by aggressive marketing and undisclosed financial incentives.


      Our mission is to cut through the noise. We rely on direct testing, rigorous market research, and consultations with metallurgical experts and master tuners to bring you factual, actionable advice. We maintain complete editorial independence by funding our work entirely through the sale of our own educational materials.
---
INNER_EOF
