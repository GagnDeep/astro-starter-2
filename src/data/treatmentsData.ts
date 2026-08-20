export interface TreatmentData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  lastReviewed: string;
  reviewedBy: string;
  overview: string;
  indications: string[];
  procedureSteps: { title: string; description: string }[];
  prePostCare: { preCare: string[]; postCare: string[] };
  faqs: { question: string; answer: string }[];
  citations: string[];
}

export const treatmentsData: TreatmentData[] = [
  {
    slug: "continuous-glucose-monitoring",
    title: "Continuous Glucose Monitoring (CGM) Therapy",
    subtitle: "Real-time glucose tracking, sensor placement, time-in-range analysis, and alert optimization.",
    category: "Technology",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Continuous Glucose Monitoring (CGM) uses a tiny subcutaneous sensor filament inserted into interstitial fluid to measure glucose levels every 1–5 minutes. CGM provides real-time trend arrows, customizable high/low alerts, and comprehensive Time-in-Range (TIR) metrics.",
    indications: [
      "Type 1 Diabetes Mellitus (all ages)",
      "Type 2 Diabetes treated with insulin or GLP-1 medications",
      "Hypoglycemia unawareness or frequent nocturnal low glucose",
      "Gestational Diabetes requiring tight glycemic targets"
    ],
    procedureSteps: [
      { title: "Sensor Selection & Application", description: "Selecting Dexcom G7, FreeStyle Libre 3, or Eversense based on patient lifestyle, skin sensitivity, and insurance coverage. Application is painless using an automated applicator onto the back of the upper arm or abdomen." },
      { title: "Device Pairing & Alert Customization", description: "Connecting the sensor via Bluetooth to a smartphone or dedicated receiver. Setting personalized alert thresholds (e.g., low alert at 70 mg/dL, high alert at 180 mg/dL)." },
      { title: "Ambulatory Glucose Profile (AGP) Analysis", description: "Reviewing 14-day download reports during clinical visits to evaluate Time-in-Range (70–180 mg/dL), Glucose Management Indicator (GMI), and coefficient of variation (%CV)." }
    ],
    prePostCare: {
      preCare: [
        "Clean insertion site thoroughly with alcohol swab and allow skin to dry completely.",
        "Avoid applying lotion, oil, or sunscreen near the insertion area."
      ],
      postCare: [
        "Use medical adhesive overlay patches (e.g. Skin Grip) if active in swimming or high-sweat exercise.",
        "Check blood glucose with a fingerstick meter if symptoms do not match CGM sensor readings."
      ]
    },
    faqs: [
      { question: "Why do CGM readings sometimes lag behind fingerstick blood glucose?", answer: "CGM measures interstitial fluid glucose, which lags behind capillary blood glucose by approximately 5 to 10 minutes during rapid glucose changes." }
    ],
    citations: [
      "American Diabetes Association. Diabetes Technology: Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S126-S144."
    ]
  },
  {
    slug: "thyroid-ultrasound",
    title: "In-Office Diagnostic Thyroid Ultrasound",
    subtitle: "High-resolution sonography for thyroid nodules, goiter, lymphadenopathy, and thyroiditis.",
    category: "Diagnostic Imaging",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "In-office high-frequency (12–18 MHz) linear transducer thyroid sonography provides real-time anatomical imaging of the thyroid gland, adjacent carotid sheath vasculature, and cervical lymph node chains.",
    indications: [
      "Palpable thyroid nodule or lower neck mass",
      "Abnormal TSH or thyroid antibody lab values",
      "Surveillance of known benign nodules or goiter",
      "Cervical lymphadenopathy evaluation"
    ],
    procedureSteps: [
      { title: "Patient Positioning", description: "Patient lies supine with neck mildly extended over a shoulder pillow." },
      { title: "Transverse & Sagittal Scanning", description: "Systematic imaging of right lobe, left lobe, and isthmus measuring dimensions in three planes." },
      { title: "ACR TI-RADS Nodule Assessment", description: "Scoring composition, echogenicity, shape, margins, and echogenic foci." }
    ],
    prePostCare: {
      preCare: [
        "Wear a comfortable open-neck shirt or blouse.",
        "Remove neck jewelry prior to scan."
      ],
      postCare: [
        "Wipe away water-soluble sonographic gel.",
        "Review immediate diagnostic results with Dr. Ameena."
      ]
    },
    faqs: [
      { question: "Does a thyroid ultrasound involve radiation?", answer: "No. Ultrasound uses high-frequency sound waves and involves zero ionizing radiation." }
    ],
    citations: [
      "Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS). J Am Coll Radiol. 2017;14(5):587-595."
    ]
  },
  {
    slug: "fine-needle-aspiration-biopsy",
    title: "Ultrasound-Guided Fine Needle Aspiration (FNA) Biopsy",
    subtitle: "Precise, minimally invasive cytological biopsy of suspicious thyroid nodules in Austin, TX.",
    category: "Procedure",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Ultrasound-guided Fine Needle Aspiration (FNA) biopsy is a safe, outpatient procedure using a micro-fine gauge needle (25–27G) under continuous real-time sonographic guidance to collect cellular samples from thyroid nodules for Bethesda cytological classification.",
    indications: [
      "TI-RADS 5 high-risk nodules ≥ 1.0 cm",
      "TI-RADS 4 moderately suspicious nodules ≥ 1.5 cm",
      "TI-RADS 3 mildly suspicious nodules ≥ 2.5 cm",
      "Nodules with suspicious cervical lymph nodes"
    ],
    procedureSteps: [
      { title: "Site Preparation & Local Anesthesia", description: "Neck skin is sterilized with chlorhexidine. Local anesthesia (1% lidocaine) is infiltrated into subcutaneous tissues overlying the thyroid." },
      { title: "Real-Time Ultrasound-Guided Sampling", description: "Under direct sonographic visualization, a fine 25-gauge needle is advanced into the nodule. 3 to 4 passes collect cellular capillary samples." },
      { title: "Cytology & Molecular Processing", description: "Specimens are prepared on slides for pathologist review. Molecular testing (Afirma / ThyroSeq) is ordered if Bethesda III/IV cytological indeterminacy occurs." }
    ],
    prePostCare: {
      preCare: [
        "Inform physician if taking blood thinners (Warfarin, Eliquis, Plavix) or aspirin.",
        "No fasting required before procedure."
      ],
      postCare: [
        "Apply direct pressure to neck site for 10-15 minutes post-procedure.",
        "Apply ice pack intermittently for 24 hours to minimize mild bruising."
      ]
    },
    faqs: [
      { question: "Is an FNA biopsy painful?", answer: "Most patients describe the sensation as similar to a routine blood draw, as local lidocaine numbs the superficial neck area." }
    ],
    citations: [
      "Haugen BR, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules. Thyroid. 2016;26(1):1-133."
    ]
  },
  {
    slug: "insulin-pump-therapy",
    title: "Automated Insulin Pump Therapy",
    subtitle: "Continuous subcutaneous insulin infusion (CSII), automated closed-loop algorithms, and basal/bolus tuning.",
    category: "Technology",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Automated Insulin Delivery (AID) systems integrate insulin pumps with real-time continuous glucose monitors to automatically increase, decrease, or suspend basal insulin delivery based on predicted glucose trends.",
    indications: [
      "Type 1 Diabetes Mellitus requiring flexible insulin dosing",
      "Insulin-requiring Type 2 Diabetes with high glycemic variability",
      "Recurrent nocturnal hypoglycemia on injection therapy"
    ],
    procedureSteps: [
      { title: "System Selection", description: "Evaluating Omnipod 5 (tubeless), Tandem t:slim X2 / Control-IQ, or Medtronic 780G." },
      { title: "Basal & Active Insulin Time Setup", description: "Programming circadian basal profiles, Insulin-to-Carbohydrate Ratios (ICR), and Insulin Sensitivity Factors (ISF)." }
    ],
    prePostCare: {
      preCare: ["Complete online manufacturer interactive pump onboarding."],
      postCare: ["Rotate infusion site every 48 to 72 hours to prevent lipohypertrophy."]
    },
    faqs: [
      { question: "Can I wear an insulin pump while showering or swimming?", answer: "Tubeless pumps like Omnipod are waterproof. Tubed pumps can be unclipped for up to 60 minutes for bathing." }
    ],
    citations: [
      "American Diabetes Association. Diabetes Technology: Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S126-S144."
    ]
  },
  {
    slug: "bioidentical-hormone-replacement",
    title: "Evidence-Based Hormone Replacement Therapy (HRT)",
    subtitle: "Transdermal bioidentical estradiol, progesterone, and androgen balancing for perimenopause and menopause.",
    category: "Therapy",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Evidence-based Hormone Replacement Therapy (HRT) utilizes FDA-approved bioidentical hormones (molecularly identical to endogenous human hormones) to treat vasomotor symptoms, genitourinary atrophy, and prevent menopausal bone density loss.",
    indications: [
      "Moderate-to-severe menopausal hot flashes and night sweats",
      "Genitourinary Syndrome of Menopause (GSM)",
      "Prevention of postmenopausal osteoporosis in high-risk women"
    ],
    procedureSteps: [
      { title: "Hormonal & Cardiovascular Risk Stratification", description: "Assessing age, years since menopause, VTE history, breast health history, and blood pressure." },
      { title: "Transdermal Estradiol Titration", description: "Initiating transdermal estradiol patch or gel to avoid hepatic first-pass metabolism." },
      { title: "Progestogen Endometrial Protection", description: "Adding oral micronized progesterone (100–200mg) for women with an intact uterus." }
    ],
    prePostCare: {
      preCare: ["Ensure up-to-date screening mammogram within past 12 months."],
      postCare: ["Follow up in 8 to 12 weeks for symptom score and blood pressure check."]
    },
    faqs: [
      { question: "What is the difference between FDA-approved bioidentical HRT and compounded HRT?", answer: "FDA-approved bioidentical hormones undergo strict purity, dosing consistency, and safety testing. Custom compounded pellet mixtures lack standardized safety oversight." }
    ],
    citations: [
      "The NAMS 2022 Hormone Therapy Position Statement Advisory Panel. Menopause. 2022;29(7):767-794."
    ]
  },
  {
    slug: "glp1-receptor-agonist-therapy",
    title: "GLP-1 & Dual Incretin Agonist Therapy",
    subtitle: "Semaglutide, Tirzepatide, and Liraglutide prescribing, titration schedules, and gastrointestinal management.",
    category: "Pharmacology",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Glucagon-Like Peptide-1 (GLP-1) and Glucose-Dependent Insulinotropic Polypeptide (GIP) receptor agonists mimic endogenous gut incretin hormones to enhance glucose-dependent insulin secretion, slow gastric emptying, and promote central satiety.",
    indications: [
      "Type 2 Diabetes Mellitus with sub-optimal glycemic control",
      "Chronic weight management in adults with BMI ≥ 30 kg/m² or BMI ≥ 27 kg/m² with comorbidities",
      "Cardiovascular risk reduction in diabetic adults with established ASCVD"
    ],
    procedureSteps: [
      { title: "Baseline Screening", description: "Checking personal/family history for Medullary Thyroid Carcinoma (MTC) or MEN 2 syndrome (contraindications)." },
      { title: "Stepwise Escalation Titration", description: "Starting low (e.g. Semaglutide 0.25mg or Tirzepatide 2.5mg weekly) for 4 weeks before step increases to minimize nausea." }
    ],
    prePostCare: {
      preCare: ["Review injection technique using pre-filled pen device."],
      postCare: ["Maintain 1.5–2.0 liters daily fluid intake and consume 80–100g daily protein."]
    },
    faqs: [
      { question: "How do I prevent GLP-1 nausea?", answer: "Eat smaller meals, stop eating immediately when feeling satisfied, avoid greasy/fatty foods, and stay hydrated." }
    ],
    citations: [
      "Davies MJ, et al. Management of Hyperglycemia in Type 2 Diabetes, 2022. A Consensus Report by ADA and EASD. Diabetes Care. 2022;45(11):2753-2786."
    ]
  },
  {
    slug: "bone-density-dexa-scan-evaluation",
    title: "Central DEXA Scan & FRAX Analysis",
    subtitle: "Dual-energy X-ray absorptiometry interpretation, lumbar/hip T-scores, and 10-year fracture calculation.",
    category: "Diagnostics",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Central Dual-Energy X-ray Absorptiometry (DEXA) measures bone mineral density (BMD in g/cm²) at the lumbar spine, femoral neck, and total hip to quantify fracture risk.",
    indications: [
      "Women age 65 and older / Men age 70 and older",
      "Postmenopausal women with fragility fracture or high risk",
      "Long-term glucocorticoid therapy (≥ 5mg prednisone for > 3 months)"
    ],
    procedureSteps: [
      { title: "Image Acquisition", description: "Low-dose X-ray scan of lumbar spine (L1–L4) and bilateral proximal hips." },
      { title: "T-Score & Z-Score Analysis", description: "Comparing BMD against young adult reference (T-score) and age-matched reference (Z-score)." },
      { title: "FRAX Risk Calculation", description: "Calculating 10-year probability of major osteoporotic fracture and hip fracture." }
    ],
    prePostCare: {
      preCare: ["Stop calcium supplements 24 hours prior to DEXA scan."],
      postCare: ["Review DEXA report and start targeted bone protection plan."]
    },
    faqs: [
      { question: "What is the difference between a T-score and a Z-score?", answer: "A T-score compares your bone density to a healthy 30-year-old adult. A Z-score compares your bone density to people of your same age and gender." }
    ],
    citations: [
      "International Society for Clinical Densitometry (ISCD) Official Positions. 2023."
    ]
  },
  {
    slug: "thyroid-hormone-replacement-optimization",
    title: "Thyroid Hormone Dose Optimization",
    subtitle: "Precision levothyroxine (T4) and liothyronine (T3) titration, body-weight dosing, and TSH target setting.",
    category: "Pharmacology",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Thyroid hormone optimization tailors L-T4 and combination T4/T3 therapy to individual patient genetics, body weight, lean mass, and cardiac clearance targets.",
    indications: [
      "Persistent hypothyroid fatigue despite normal TSH",
      "Variable thyroid hormone absorption or gastrointestinal disorders",
      "Post-thyroidectomy thyroid hormone suppressive therapy"
    ],
    procedureSteps: [
      { title: "Weight-Based Calculation", description: "Calculating initial lean body mass dose (1.6 mcg/kg/day L-T4)." },
      { title: "Serum TSH / Free T4 / Free T3 Equilibrium Review", description: "Checking serum thyroid panel at 6 to 8 week intervals." }
    ],
    prePostCare: {
      preCare: ["Take thyroid medication with plain water at least 30-60 mins before food."],
      postCare: ["Do not take morning thyroid pill prior to lab draw on testing day."]
    },
    faqs: [
      { question: "Why should I withhold my thyroid pill before morning lab draws?", answer: "Taking T4/T3 immediately before lab work causes a transient artificial spike in Free T4 and Free T3 levels." }
    ],
    citations: [
      "Jonklaas J, et al. Guidelines for the Treatment of Hypothyroidism. Thyroid. 2014;24(12):1670-1751."
    ]
  },
  {
    slug: "adrenal-vein-sampling-consultation",
    title: "Adrenal Vein Sampling Consultation",
    subtitle: "Diagnostic localization workup for primary aldosteronism (Conn's syndrome) and surgical vs medical decisions.",
    category: "Diagnostics",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Adrenal Vein Sampling (AVS) is the gold-standard diagnostic procedure to differentiate unilateral adrenal aldosterone-producing adenoma from bilateral adrenal hyperplasia in confirmed primary aldosteronism.",
    indications: [
      "Confirmed primary aldosteronism (elevated Aldosterone-to-Renin ratio)",
      "Hypertension resistant to 3+ anti-hypertensive medications",
      "Hypokalemia with adrenal incidenaloma"
    ],
    procedureSteps: [
      { title: "Endocrine Workup", description: "Confirming hyperaldosteronism with oral salt loading or fludrocortisone suppression test." },
      { title: "Catheterization Protocol", description: "Radiology catheter sampling of right and left adrenal veins measuring aldosterone/cortisol ratios." }
    ],
    prePostCare: {
      preCare: ["Discontinue spironolactone or eplerenone 4 to 6 weeks prior to testing."],
      postCare: ["Review lateralization ratio to determine surgical adrenalectomy eligibility."]
    },
    faqs: [
      { question: "Why is CT imaging alone insufficient for adrenal aldosterone localization?", answer: "Adrenal CT scans miss microadenomas <10mm and frequently show non-functioning incidentalomas in up to 20% of older adults." }
    ],
    citations: [
      "Funder JW, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment. J Clin Endocrinol Metab. 2016;101(5):1889-1916."
    ]
  },
  {
    slug: "pituitary-hormone-dynamic-testing",
    title: "Pituitary Dynamic Testing Protocols",
    subtitle: "In-office stimulation and suppression testing for growth hormone, ACTH, prolactin, and gonadotropin deficiencies.",
    category: "Diagnostics",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Dynamic endocrine testing evaluates anterior and posterior pituitary reserve by administering provocative pharmacological stimuli (e.g. Cosyntropin, Glucagon, Insulin) or suppressive agents (e.g. Glucose) with timed blood sampling.",
    indications: [
      "Suspected hypopituitarism post-brain injury or pituitary surgery",
      "Evaluation of acromegaly (Oral Glucose Tolerance Test GH suppression)",
      "Cushing's disease differential diagnosis"
    ],
    procedureSteps: [
      { title: "Basal Line Placement", description: "Inserting intravenous catheter for timed painless blood draws." },
      { title: "Provocative/Suppressive Agent Administration", description: "Administering oral glucose, IV cosyntropin, or glucagon." },
      { title: "Timed Sampling Protocol", description: "Drawing blood samples at 0, 30, 60, 90, and 120 minutes." }
    ],
    prePostCare: {
      preCare: ["Overnight fasting for 8 to 12 hours required before dynamic test."],
      postCare: ["Provide light snack and fruit juice post-procedure."]
    },
    faqs: [
      { question: "How long does dynamic pituitary testing take?", answer: "Most dynamic testing protocols take between 2 to 4 hours in our quiet clinical testing suite." }
    ],
    citations: [
      "Fleseriu M, et al. Consensus on Diagnosis and Management of Cushing's Disease. Lancet Diabetes Endocrinol. 2021;9(12):847-875."
    ]
  }
];
