export interface GuideData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  lastReviewed: string;
  reviewedBy: string;
  overview: string;
  checklist: string[];
  timeline: { step: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  citations: string[];
}

export const guidesData: GuideData[] = [
  {
    slug: "first-visit-what-to-expect",
    title: "First Visit: What to Expect at Your Appointment",
    subtitle: "A detailed walkthrough of your 60-minute initial consultation with Dr. Ameena.",
    category: "Appointment Prep",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Your initial visit at Dr. Ameena's Austin clinic is structured to provide ample time for a comprehensive endocrine review. Rather than a rushed 10-minute check, initial consults are reserved for 60 minutes.",
    checklist: [
      "Government-issued photo ID and current health insurance card",
      "List of all prescription medications, OTC drugs, and supplements with exact dosages",
      "Copies of blood work, thyroid ultrasounds, DEXA scans, or MRI reports from the past 12 months",
      "Completed new patient intake forms",
      "List of primary symptoms and top 3 clinical questions"
    ],
    timeline: [
      { step: "Arrival & Check-In (10 Mins)", description: "Verify administrative insurance info and complete vitals check (blood pressure, pulse, height, weight)." },
      { step: "Clinical History & Listening (25 Mins)", description: "In-depth discussion of symptom timeline, family history, and past treatment responses with Dr. Ameena." },
      { step: "Physical Exam & In-Office Assessment (15 Mins)", description: "Focused endocrine exam including thyroid neck palpation, cardiac evaluation, skin exam, and nerve screening." },
      { step: "Diagnostic & Care Plan Strategy (10 Mins)", description: "Ordering specialized lab panels, scheduling diagnostic imaging, and setting follow-up timeline." }
    ],
    faqs: [
      { question: "Can a family member accompany me?", answer: "Yes. Patients are welcome to bring a family member or caregiver to assist with note-taking and history details." }
    ],
    citations: [
      "American Association of Clinical Endocrinology (AACE) Patient Advocacy Guidelines."
    ]
  },
  {
    slug: "preparing-for-thyroid-ultrasound",
    title: "Preparing for Your Thyroid Ultrasound",
    subtitle: "Instructions for in-office neck sonography imaging.",
    category: "Procedure Prep",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "In-office thyroid sonography uses non-invasive sound waves to create real-time images of your thyroid gland and neck tissue.",
    checklist: [
      "Wear a comfortable shirt with a wide or button-down collar.",
      "Remove necklaces, chains, and neck jewelry.",
      "No fasting or dietary restriction required."
    ],
    timeline: [
      { step: "Setup", description: "You will lie comfortably on an exam table with a soft pillow under your shoulders to gently extend your neck." },
      { step: "Scanning (15-20 Mins)", description: "Warm sonographic gel is applied to your lower neck, and a small linear probe is moved across your thyroid." },
      { step: "Immediate Review", description: "Dr. Ameena reviews the images with you immediately following the scan." }
    ],
    faqs: [
      { question: "Will the ultrasound probe hurt?", answer: "No. You will feel light pressure as the probe glides across your neck, but the scan is completely painless." }
    ],
    citations: [
      "American College of Radiology (ACR) Thyroid Ultrasound Practice Parameter."
    ]
  },
  {
    slug: "fasting-lab-work-prep-guide",
    title: "Fasting Lab Work Preparation Protocol",
    subtitle: "Fasting guidelines, water intake, medication rules, and morning biotin precautions.",
    category: "Lab Prep",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Accurate blood testing for lipid panels, fasting glucose, insulin, and thyroid hormones requires strict adherence to lab prep guidelines.",
    checklist: [
      "Fast for 8 to 12 hours prior to morning blood draw (water is encouraged).",
      "Discontinue high-dose Biotin (Vitamin B7) supplements 3 to 5 days before thyroid labs.",
      "Drink 16 oz of plain water on the morning of labs to ensure good hydration for vein access."
    ],
    timeline: [
      { step: "Night Before", description: "Finish dinner by 8:00 PM. No alcohol, late snacks, or sugary drinks." },
      { step: "Morning of Draw", description: "Drink plain water. Withhold morning thyroid pills until AFTER blood draw." }
    ],
    faqs: [
      { question: "Why does Biotin interfere with thyroid lab tests?", answer: "High-dose Biotin (frequently found in hair/nail supplements) interferes with streptavidin-biotin immunoassays, causing falsely high T4/T3 and falsely low TSH results." }
    ],
    citations: [
      "U.S. Food and Drug Administration (FDA). FDA Safety Communication: Biotin Interference with Lab Tests. 2019."
    ]
  },
  {
    slug: "understanding-your-a1c-results",
    title: "Decoding Your HbA1c Results",
    subtitle: "Translating A1C percentages into Estimated Average Glucose (eAG) mg/dL.",
    category: "Lab Interpretation",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Hemoglobin A1C reflects your average blood glucose level over the preceding 2 to 3 months by measuring the percentage of hemoglobin proteins coated with sugar.",
    checklist: [
      "Normal: A1C < 5.7%",
      "Prediabetes: A1C 5.7% to 6.4%",
      "Diabetes Threshold: A1C ≥ 6.5%",
      "General Diabetes Goal: A1C < 7.0% (eAG ~154 mg/dL)"
    ],
    timeline: [
      { step: "A1C 6.0%", description: "Estimated Average Glucose = 126 mg/dL." },
      { step: "A1C 7.0%", description: "Estimated Average Glucose = 154 mg/dL." },
      { step: "A1C 8.0%", description: "Estimated Average Glucose = 183 mg/dL." }
    ],
    faqs: [
      { question: "Can anemia affect A1C accuracy?", answer: "Yes. Conditions that alter red blood cell lifespan (like iron deficiency anemia, sickle cell trait, or recent blood loss) can cause falsely elevated or low A1C readings." }
    ],
    citations: [
      "American Diabetes Association Standards of Care in Diabetes—2024."
    ]
  },
  {
    slug: "how-to-wear-and-track-cgm",
    title: "How to Wear, Apply, and Track Your CGM",
    subtitle: "Placement tips, skin prep, compression low avoidance, and trends.",
    category: "Diabetes Tech",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Continuous Glucose Monitoring (CGM) provides 24/7 glucose visibility with real-time trend arrows showing direction and rate of change.",
    checklist: [
      "Choose a fleshy area on the back of the upper arm or upper abdomen.",
      "Clean site with alcohol and let skin air dry completely.",
      "Avoid placing sensor over tattoos, moles, scar tissue, or insulin injection sites."
    ],
    timeline: [
      { step: "Application", description: "Press applicator firmly against skin and click button to insert flexible sensor filament." },
      { step: "Warm-Up Period", description: "Allow 25 minutes (Dexcom G7) or 60 minutes (Libre 3) warm-up before first reading." }
    ],
    faqs: [
      { question: "What is a 'compression low' on CGM?", answer: "Pressing against the sensor while sleeping reduces local interstitial blood flow, causing artificial false low glucose alarms." }
    ],
    citations: [
      "ADA Diabetes Technology Guidelines 2024."
    ]
  },
  {
    slug: "managing-hypothyroidism-symptoms",
    title: "Tracking & Managing Hypothyroidism Symptoms",
    subtitle: "Daily symptom tracking sheets, morning levothyroxine timing, and coffee rules.",
    category: "Condition Management",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Optimizing thyroid replacement requires consistent pill timing and systematic tracking of fatigue, mood, body temperature, and digestion.",
    checklist: [
      "Take levothyroxine immediately upon waking with a full glass of water.",
      "Wait at least 30 to 60 minutes before drinking coffee, espresso, or eating breakfast.",
      "Separate calcium, iron, or antacid supplements by at least 4 hours."
    ],
    timeline: [
      { step: "Week 1-2", description: "Establish consistent morning dosing schedule." },
      { step: "Week 4-6", description: "Notice gradual improvement in energy levels and mental clarity." },
      { step: "Week 6-8", description: "Repeat serum TSH and Free T4 lab draw to verify euthyroid dose." }
    ],
    faqs: [
      { question: "Can I take levothyroxine at bedtime?", answer: "Yes, provided you take it at least 3 to 4 hours after your last meal on a completely empty stomach." }
    ],
    citations: [
      "ATA Treatment Guidelines for Hypothyroidism."
    ]
  },
  {
    slug: "navigating-pcos-lifestyle-and-nutrition",
    title: "Navigating PCOS Lifestyle & Nutrition",
    subtitle: "Evidence-based nutrition strategies, protein targets, and insulin-sensitizing exercise.",
    category: "Lifestyle & Nutrition",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Addressing compensatory hyperinsulinemia through structured nutritional timing and resistance training is foundational to PCOS symptom improvement.",
    checklist: [
      "Aim for 25–30g of protein at each main meal to stabilize postprandial glucose curves.",
      "Prioritize high-fiber complex carbohydrates (legumes, berries, whole grains).",
      "Incorporate progressive resistance training 3 times weekly to increase muscle glucose uptake."
    ],
    timeline: [
      { step: "Month 1", description: "Focus on blood sugar stability and reducing post-meal energy crashes." },
      { step: "Month 3", description: "Assess improvements in skin clarity, energy, and menstrual regularity." }
    ],
    faqs: [
      { question: "Do I need to eliminate all carbohydrates for PCOS?", answer: "No. Strict elimination is unsustainable and unnecessary. Choosing low-glycemic, fiber-rich carbohydrates paired with protein produces optimal results." }
    ],
    citations: [
      "2023 International Evidence-Based PCOS Guidelines."
    ]
  },
  {
    slug: "dexa-scan-preparation-and-t-scores",
    title: "DEXA Bone Scan Preparation & T-Scores",
    subtitle: "Preparation steps, calcium hold rules, T-score ranges, and FRAX scores.",
    category: "Bone Health",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Dual-energy X-ray absorptiometry (DEXA) provides precise bone mineral density measurement at your lumbar spine and hips.",
    checklist: [
      "Do NOT take calcium supplements for 24 hours before your DEXA scan.",
      "Wear comfortable clothing without metal zippers, buttons, or metal snaps.",
      "Inform staff if you recently had barium or contrast dye imaging."
    ],
    timeline: [
      { step: "Scan Duration (10-15 Mins)", description: "Lie still on an open padded table while the scanner arm passes overhead." }
    ],
    faqs: [
      { question: "What T-score indicates osteoporosis?", answer: "A T-score of -2.5 or lower at the lumbar spine, femoral neck, or total hip signifies osteoporosis." }
    ],
    citations: [
      "ISCD Official Densitometry Positions 2023."
    ]
  },
  {
    slug: "talking-to-your-family-about-hereditary-endocrine-conditions",
    title: "Hereditary Endocrine Conditions & Family History",
    subtitle: "Gathering family history for thyroid, MEN syndromes, and autoimmune diabetes.",
    category: "Family Health",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Many endocrine conditions have strong genetic components. Compiling a thorough 3-generation family health tree aids early risk screening.",
    checklist: [
      "Ask parents, siblings, and grandparents about thyroid cancer, nodules, or goiter.",
      "Document cases of Type 1 diabetes, autoimmune thyroiditis, or celiac disease.",
      "Note early osteoporosis or fragility fractures in relatives."
    ],
    timeline: [
      { step: "Pre-Consult Prep", description: "Record family medical details on our downloadable history worksheet." }
    ],
    faqs: [
      { question: "Are thyroid nodules genetic?", answer: "While most sporadic nodules are not inherited, familial medullary thyroid carcinoma and certain goiters have direct genetic links." }
    ],
    citations: [
      "Endocrine Society Genetics and Familial Endocrine Tumors Guidance."
    ]
  },
  {
    slug: "traveling-with-insulin-and-injectables",
    title: "Traveling with Insulin & Injectable Medications",
    subtitle: "TSA security screening rules, cooling pouches, time zone changes, and backup supplies.",
    category: "Travel & Safety",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Traveling safely with insulin, GLP-1 injectables, needles, and CGM sensors requires advance planning and proper storage.",
    checklist: [
      "Keep all insulin and injectables in carry-on luggage—NEVER in checked baggage (where freezing cargo temperatures destroy protein molecules).",
      "Bring a doctor's travel letter listing all supplies, meters, and medications.",
      "Use insulated cooling pouches (e.g. FRIO) to maintain temperature < 86°F."
    ],
    timeline: [
      { step: "TSA Checkpoint", description: "Notify TSA officer that you have diabetes supplies and CGM/pump on your person before screening." }
    ],
    faqs: [
      { question: "Can CGM sensors go through airport X-ray scanners?", answer: "Most manufacturers recommend requesting a physical pat-down rather than sending CGM sensors through airport body scanners or X-ray luggage machines." }
    ],
    citations: [
      "TSA Disabilities and Medical Conditions Guidance & ADA Travel Guidelines."
    ]
  },
  {
    slug: "medication-prior-authorization-guide",
    title: "Navigating Medication Prior Authorizations",
    subtitle: "Step-by-step prior authorization process for GLP-1s, CGMs, and branded thyroid meds.",
    category: "Insurance & Access",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Health insurance plans frequently require Prior Authorization (PA) before approving coverage for specialized endocrine therapies.",
    checklist: [
      "Provide our office with your prescription insurance card (RxBIN, PCN, Group numbers).",
      "Document prior medication trials and step-therapy history.",
      "Verify preferred formulary alternatives with your insurer."
    ],
    timeline: [
      { step: "Submission", description: "Our clinical team submits clinical chart notes, lab values, and diagnosis codes to your insurer." },
      { step: "Review (3-7 Days)", description: "Insurance medical director reviews clinical criteria." }
    ],
    faqs: [
      { question: "What happens if a prior authorization is denied?", answer: "Our administrative team submits formal peer-to-peer clinical appeals with supporting medical society guidelines." }
    ],
    citations: [
      "AMA Practice Management Prior Authorization Reform Protocols."
    ]
  },
  {
    slug: "telehealth-consultation-checklist",
    title: "Telehealth Consultation Checklist",
    subtitle: "Technology setup, camera positioning, lab uploads, and blood pressure/glucose prep.",
    category: "Virtual Care",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Telehealth visits offer convenient follow-up care for lab reviews, CGM downloads, and medication adjustments.",
    checklist: [
      "Test video and microphone connection 10 minutes before your scheduled appointment.",
      "Upload recent blood pressure readings, glucose logs, or CGM reports into patient portal.",
      "Sit in a well-lit, quiet room with good internet connectivity."
    ],
    timeline: [
      { step: "10 Mins Before", description: "Click secure telehealth video link sent to your email or SMS." }
    ],
    faqs: [
      { question: "Can new patient consults be done via telehealth?", answer: "Texas medical board guidelines allow initial telehealth consults, though in-person visits are preferred for physical neck/thyroid exams." }
    ],
    citations: [
      "American Thyroid Association (ATA) Telehealth Best Practices Guidance."
    ]
  }
];
