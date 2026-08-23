#!/bin/bash
# Adding some extra content to /guide to make it closer to 1200 words as per instructions.
# I'll create a script to append more content.
cat << 'INNER_EOF' >> src/content/pages/guide.md
  - _name: TextBlock
    heading: "Understanding the Mechanics of a Handpan"
    text_content: >
      At its core, a handpan is a carefully sculpted steel vessel. The magic happens through the precise shaping of the tone fields—the dimpled areas struck by the player. A true handpan is not just a single note per field. Every single tone field is meticulously hand-hammered to produce three distinct frequencies: the fundamental note, an octave above the fundamental, and a compound fifth.


      When a skilled player strikes a note, these three frequencies ring out simultaneously. This multi-layered harmonic structure is what gives the instrument its signature ethereal, resonant voice. Without this complex tuning, the instrument would sound flat, percussive, and metallic—like hitting an empty oil drum.


      The top half of the handpan, known as the Ding side, contains the central note (the Ding) and a circle of surrounding notes. The bottom half, known as the Gu side, features a central port that acts as a Helmholtz resonator, amplifying the internal sound waves and projecting the bass frequencies.

  - _name: TextBlock
    heading: "Evaluating a Handpan: The 10-Point Framework"
    text_content: >
      To make an informed purchase, you need a systematic way to evaluate any instrument you consider. Do not rely solely on the brand name or the price tag. Here are the first five points of our comprehensive evaluation framework.


      **1. Harmonic Alignment:** When you strike a note, does it sing with a clear, resonant tone, or does it sound muddy? The octave and fifth should harmonize perfectly with the fundamental note.


      **2. Tuning Stability:** How long will the instrument stay in tune? A high-quality handpan can stay in tune for years under normal playing conditions. Cheaper, mass-produced instruments may detune within months because the steel lacks the necessary internal tension created by hand-hammering.


      **3. Material Choice:** Most handpans are made from either nitrided steel or stainless steel. Nitrided steel offers a more ceramic, controlled, and percussive sound, ideal for fast, rhythmic playing. Stainless steel provides a warmer, longer sustain, making it perfect for slow, meditative, and melodic styles.


      **4. Ergonomics and Layout:** Is the instrument comfortable to play? The notes should be spaced intuitively. Custom handpans with too many bottom notes can be ergonomically challenging and difficult to mute properly.


      **5. Maker Reputation:** Does the builder have a track record of quality and customer support? A reputable maker will often provide re-tuning services and stand behind their craftsmanship.


      These criteria form the foundation of our reviews and recommendations. We verify pricing, evaluate the materials, and assess the tuning stability of every instrument we feature.

  - _name: FeatureBlock
    heading: "Pricing Realities: What You Should Expect to Pay"
    features:
      - title: "Under $1,000 USD (Avoid)"
        description: "Instruments in this price range are almost universally mass-produced stamped steel. They lack the harmonic complexity of a true handpan and will rapidly fall out of tune. Do not waste your money on these 'Amazon specials.' They are essentially expensive toys."
      - title: "$1,500 - $2,500 USD (Entry-Level Professional)"
        description: "This is the sweet spot for a first-time buyer. Instruments in this range are typically built by independent makers who take the time to hand-tune each note properly. They offer excellent harmonic alignment and tuning stability."
      - title: "$2,500 - $3,500+ USD (Mastercraft)"
        description: "These instruments are built by master tuners with decades of experience or feature complex custom scales, bottom notes, and specialized materials. While incredible, they are usually an unnecessary expense for a beginner."

  - _name: ComparisonTable
    heading: "The Cost of Craftsmanship"
    our_name: "Authentic Handpan"
    their_name: "Mass-Produced Fake"
    rows:
      - feature: "Manufacturing Process"
        our_value: "Hand-hammered and heat-treated over days."
        their_value: "Machine-stamped in seconds."
      - feature: "Tuning Complexity"
        our_value: "3+ frequencies tuned per note."
        their_value: "1 frequency (often poorly tuned)."
      - feature: "Lifespan & Maintenance"
        our_value: "Lasts decades, can be re-tuned."
        their_value: "Detunes quickly, cannot be fixed."

  - _name: TextBlock
    heading: "The Final Step: Learning to Play"
    text_content: >
      Buying the instrument is just the beginning. The handpan is famously intuitive, but mastering the basic touch—learning how to strike the steel to pull the sound out rather than push the sound in—takes structured practice.


      We recommend checking out our [handpan lessons](/lessons/) directory to find a teaching style that matches your goals. Whether you want to play fast, complex rhythms or focus on slow, meditative melodies, structured instruction will drastically accelerate your progress and prevent bad habits from forming.
INNER_EOF
