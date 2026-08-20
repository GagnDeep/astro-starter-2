export interface ConditionData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  lastReviewed: string;
  reviewedBy: string;
  overview: string;
  epidemiology: string;
  symptoms: string[];
  diagnosticCriteria: { label: string; detail: string }[];
  treatmentOptions: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  citations: string[];
}

export const conditionsData: ConditionData[] = [
  {
    slug: "hypothyroidism",
    title: "Hypothyroidism (Underactive Thyroid)",
    subtitle: "Comprehensive diagnosis, TSH/Free T4 monitoring, and levothyroxine dose titration.",
    category: "Thyroid",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Hypothyroidism occurs when the thyroid gland produces insufficient thyroid hormones (thyroxine [T4] and triiodothyronine [T3]) to meet systemic metabolic demands. The most common cause in iodine-sufficient regions is Hashimoto's thyroiditis, an autoimmune destruction of thyroid follicular cells.",
    epidemiology: "Affects approximately 4.6% of the U.S. population aged 12 and older (0.3% overt, 4.3% subclinical). Prevalence is 5 to 8 times higher in females and increases with age.",
    symptoms: [
      "Persistent fatigue and lethargy",
      "Unexplained weight gain or difficulty losing weight",
      "Cold intolerance and low body temperature",
      "Dry skin, brittle hair, and hair thinning",
      "Constipation and sluggish digestion",
      "Depressed mood, brain fog, and slowed memory retrieval",
      "Menstrual irregularities (heavy or prolonged menses)"
    ],
    diagnosticCriteria: [
      { label: "Overt Hypothyroidism", detail: "Serum TSH elevated above upper reference limit (> 4.5 mIU/L) with Free T4 below normal laboratory reference range (< 0.8 ng/dL)." },
      { label: "Subclinical Hypothyroidism", detail: "Serum TSH elevated (typically 4.5–10.0 mIU/L) with normal Free T4 levels." },
      { label: "Anti-TPO Antibodies", detail: "Positive Thyroid Peroxidase (TPO) antibodies confirm autoimmune etiology (Hashimoto's thyroiditis)." }
    ],
    treatmentOptions: [
      { title: "Synthetic Levothyroxine (L-T4)", description: "First-line bioidentical T4 hormone replacement therapy. Standard full replacement dose is approximately 1.6 mcg/kg body weight per day, adjusted based on TSH monitoring every 6 to 8 weeks until euglycemic/euthyroid state." },
      { title: "T4 + T3 Combination Therapy", description: "Selective addition of low-dose Liothyronine (T3) for patients with persistent fatigue despite normalized TSH, following Endocrine Society guidelines." },
      { title: "Nutritional & Absorption Optimization", description: "Ensuring levothyroxine is taken on an empty stomach with plain water at least 30–60 minutes before breakfast or coffee to prevent absorption interference." }
    ],
    faqs: [
      { question: "Why should levothyroxine be taken separately from coffee or calcium?", answer: "Calcium, iron supplements, espresso, and fiber bind to levothyroxine in the gut lumen, reducing systemic bio-absorption by up to 30-40%." },
      { question: "How long does it take for TSH to stabilize after a dosage change?", answer: "Levothyroxine has a long half-life of 7 days. Serum TSH steady-state requires 6 to 8 weeks of consistent daily dosing before repeat testing." }
    ],
    citations: [
      "Jonklaas J, et al. Guidelines for the Treatment of Hypothyroidism: Prepared by the American Thyroid Association Taskforce. Thyroid. 2014;24(12):1670-1751.",
      "Garber JR, et al. Clinical Practice Guidelines for Hypothyroidism in Adults: Cosponsored by AACE and ATA. Endocr Pract. 2012;18(6):988-1028."
    ]
  },
  {
    slug: "hyperthyroidism",
    title: "Hyperthyroidism & Graves' Disease",
    subtitle: "Diagnosis, anti-thyroid pharmacotherapy, thyroid-stimulating immunoglobulin (TSI), and definitive management.",
    category: "Thyroid",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Hyperthyroidism is characterized by excessive synthesis and secretion of thyroid hormones by the thyroid gland, leading to hypermetabolism. Graves' disease, an autoimmune condition involving Thyroid-Stimulating Hormone Receptor Antibodies (TRAb/TSI), accounts for 60-80% of thyrotoxicosis cases.",
    epidemiology: "Prevalence in the U.S. is approximately 1.2% (0.5% overt, 0.7% subclinical). Most frequent between ages 20 and 50, with female-to-male ratio of 7:1.",
    symptoms: [
      "Unintended rapid weight loss despite increased appetite",
      "Sinus tachycardia, palpitations, or atrial fibrillation",
      "Heat intolerance and profuse sweating",
      "Fine hand tremors and muscle weakness",
      "Anxiety, irritability, and insomnia",
      "Frequent bowel movements or hyperdefecation",
      "Proptosis or eye gritty discomfort (Graves' orbitopathy)"
    ],
    diagnosticCriteria: [
      { label: "Suppressed TSH", detail: "Serum TSH suppressed to < 0.01 mIU/L." },
      { label: "Elevated Free T4 / Free T3", detail: "Serum Free T4 and/or Free T3 elevated above upper laboratory limits." },
      { label: "TSI / TRAb Antibody", detail: "Elevated Thyroid-Stimulating Immunoglobulin (TSI) confirms Graves' disease." },
      { label: "Radioactive Iodine Uptake (RAIU)", detail: "Diffusely elevated uptake confirms Graves'; low uptake suggests thyroiditis or factitious thyrotoxicosis." }
    ],
    treatmentOptions: [
      { title: "Anti-Thyroid Medications (Thionamides)", description: "Methimazole (MMI) or Propylthiouracil (PTU) inhibit thyroid peroxidase, suppressing hormone synthesis." },
      { title: "Beta-Blockers", description: "Propranolol or Atenolol for rapid symptomatic relief of tachycardia, tremors, and hyper-adrenergic symptoms." },
      { title: "Definitive Therapy (RAI or Surgery)", description: "Radioactive Iodine (I-131) ablation or total thyroidectomy for recurrent Graves' disease or toxic nodular goiters." }
    ],
    faqs: [
      { question: "What is the difference between hyperthyroidism and thyroiditis?", answer: "Hyperthyroidism involves active excess hormone production by thyroid cells. Thyroiditis involves destructive release of pre-formed thyroid hormone from damaged tissue." }
    ],
    citations: [
      "Kahaly GJ, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421."
    ]
  },
  {
    slug: "hashimotos-thyroiditis",
    title: "Hashimoto's Thyroiditis (Autoimmune Thyroiditis)",
    subtitle: "Pathophysiology, anti-TPO/anti-Tg antibody testing, symptom management, and long-term care.",
    category: "Thyroid",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Hashimoto's thyroiditis is a chronic autoimmune disease in which CD4+ and CD8+ T-lymphocytes and autoantibodies infiltrate and progressively destroy the thyroid architecture, leading to eventual hypothyroid hormone failure.",
    epidemiology: "The most common autoimmune disorder in the United States, affecting up to 10-12% of women over lifetime.",
    symptoms: [
      "Sensation of tightness or pressure in the lower neck",
      "Fluctuating fatigue and sluggish recovery after exercise",
      "Cold sensitivity and lowered baseline temperature",
      "Dry, thickened skin and brittle nails",
      "Joint stiffness and mild muscle aching"
    ],
    diagnosticCriteria: [
      { label: "Anti-TPO Antibodies", detail: "Elevated Thyroid Peroxidase Antibodies (> 34 IU/mL)." },
      { label: "Anti-Thyroglobulin Antibodies", detail: "Elevated Anti-Tg antibodies present in 60-70% of cases." },
      { label: "Thyroid Sonogram", detail: "Heterogeneous, hypoechoic parenchymal echotexture with hypervascularity on Doppler." }
    ],
    treatmentOptions: [
      { title: "Hormone Replacement", description: "Precision levothyroxine titration based on serum TSH and Free T4 targets." },
      { title: "Anti-Inflammatory Care Strategy", description: "Identifying micronutrient deficiencies (Vitamin D, Selenium) to support immune function." }
    ],
    faqs: [
      { question: "Can Hashimoto's cause periods of hyperthyroidism?", answer: "Yes. Early in the disease, lymphocyte infiltration can cause transient release of stored thyroid hormone, known as Hashitoxicosis." }
    ],
    citations: [
      "Caturegli P, et al. Hashimoto Thyroiditis: Clinical and Diagnostic Criteria. Autoimmun Rev. 2014;13(4-5):391-397."
    ]
  },
  {
    slug: "thyroid-nodules",
    title: "Thyroid Nodules & Goiter",
    subtitle: "Sonographic evaluation, ACR TI-RADS scoring, FNA decision pathways, and benign nodule surveillance.",
    category: "Thyroid",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Thyroid nodules are discrete lesions within the thyroid gland that are palpable or sonographically distinct from surrounding thyroid parenchyma. Over 90% of thyroid nodules are benign colloid nodules, follicular adenomas, or cysts.",
    epidemiology: "Palpable in 5% of women and 1% of men, but detected by high-resolution ultrasound in up to 50-60% of randomly screened adults.",
    symptoms: [
      "Asymptomatic incidental finding on neck imaging or routine exam",
      "Visible fullness or asymmetry in the anterior lower neck",
      "Globus sensation (feeling of lump in throat) when swallowing",
      "Dysphagia (difficulty swallowing solid foods) if nodule is > 3 cm",
      "Mild neck discomfort or local tracheal pressure"
    ],
    diagnosticCriteria: [
      { label: "High-Resolution Ultrasound", detail: "Evaluation of nodule composition, echogenicity, margins, shape, and microcalcifications." },
      { label: "ACR TI-RADS Stratification", detail: "Point-based risk scoring from TI-RADS 1 (benign) to TI-RADS 5 (high risk)." },
      { label: "Serum TSH Measurement", detail: "Suppressed TSH warrants a radionuclide thyroid scan to check for autonomous ('hot') nodule." }
    ],
    treatmentOptions: [
      { title: "Ultrasound Surveillance", description: "Serial ultrasound at 12–24 month intervals for low-risk benign nodules." },
      { title: "Fine Needle Aspiration (FNA) Biopsy", description: "In-office ultrasound-guided biopsy for TI-RADS 3 (≥2.5cm), TI-RADS 4 (≥1.5cm), or TI-RADS 5 (≥1.0cm)." },
      { title: "Surgical Resection", description: "Lobectomy or thyroidectomy for cytologically malignant, suspicious, or large compression goiters." }
    ],
    faqs: [
      { question: "Are most thyroid nodules cancerous?", answer: "No. Approximately 90-95% of all detected thyroid nodules are benign non-cancerous lesions." }
    ],
    citations: [
      "Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol. 2017;14(5):587-595."
    ]
  },
  {
    slug: "type-2-diabetes",
    title: "Type 2 Diabetes Mellitus",
    subtitle: "Pathophysiology, A1C targets, GLP-1/SGLT2 pharmacology, CGM technology, and complication prevention.",
    category: "Diabetes",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Type 2 diabetes mellitus is a chronic metabolic disorder characterized by systemic insulin resistance, progressive pancreatic beta-cell dysfunction, and resultant chronic hyperglycemia.",
    epidemiology: "Affects over 37 million Americans (11.3% of the U.S. population). An estimated 8.5 million adults remain undiagnosed.",
    symptoms: [
      "Polydipsia (excessive thirst) and dry mouth",
      "Polyuria (frequent urination, particularly nocturia)",
      "Polyphagia (increased hunger despite adequate food intake)",
      "Unexplained weight loss or chronic fatigue",
      "Blurred vision due to lens osmotic fluid shifts",
      "Slow-healing cutaneous wounds or frequent infections"
    ],
    diagnosticCriteria: [
      { label: "Fasting Plasma Glucose (FPG)", detail: "FPG ≥ 126 mg/dL (7.0 mmol/L) after at least 8 hours fasting." },
      { label: "Hemoglobin A1C", detail: "A1C ≥ 6.5% (48 mmol/mol) performed in an NGSP-certified laboratory." },
      { label: "2-Hour OGTT", detail: "2-hour plasma glucose ≥ 200 mg/dL (11.1 mmol/L) during 75g oral glucose tolerance test." },
      { label: "Random Glucose", detail: "Random plasma glucose ≥ 200 mg/dL with classic hyperglycemic symptoms." }
    ],
    treatmentOptions: [
      { title: "Incretin-Based Therapies (GLP-1 / GIP)", description: "Semaglutide or Tirzepatide to enhance glucose-dependent insulin secretion, slow gastric emptying, and suppress glucagon." },
      { title: "SGLT2 Inhibitors", description: "Empagliflozin or Dapagliflozin to promote urinary glucose excretion and provide renal/cardiovascular protection." },
      { title: "Metformin & Lifestyle Optimization", description: "First-line biguanide therapy reducing hepatic gluconeogenesis combined with tailored carbohydrate management." }
    ],
    faqs: [
      { question: "What is the recommended A1C target for most non-pregnant adults?", answer: "The American Diabetes Association recommends an A1C target of < 7.0% for most non-pregnant adults, individualized based on hypoglycemia risk." }
    ],
    citations: [
      "American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S1-S343."
    ]
  },
  {
    slug: "prediabetes",
    title: "Prediabetes & Impaired Fasting Glucose",
    subtitle: "A1C 5.7–6.4% diagnostic criteria, insulin sensitivity restoration, and evidence-based diabetes reversal.",
    category: "Diabetes",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Prediabetes is an intermediate metabolic state where blood glucose levels are higher than normal but below diagnostic thresholds for diabetes. It indicates underlying peripheral insulin resistance.",
    epidemiology: "Affects 96 million American adults (38% of the adult U.S. population). More than 80% are unaware of their status.",
    symptoms: [
      "Often entirely asymptomatic in early stages",
      "Acanthosis nigricans (darkened, velvety skin patches on neck/axillae)",
      "Mild postprandial fatigue or energy crashes after high-carbohydrate meals",
      "Increased abdominal visceral adiposity"
    ],
    diagnosticCriteria: [
      { label: "Fasting Plasma Glucose", detail: "100 mg/dL to 125 mg/dL (Impaired Fasting Glucose)." },
      { label: "Hemoglobin A1C", detail: "A1C 5.7% to 6.4%." },
      { label: "2-Hour OGTT", detail: "140 mg/dL to 199 mg/dL (Impaired Glucose Tolerance)." }
    ],
    treatmentOptions: [
      { title: "Structured Lifestyle Intervention", description: "Targeting 7% weight loss through physical activity (150 mins/week) and Mediterranean dietary patterns." },
      { title: "Metformin Therapy", description: "Considered for high-risk individuals (BMI ≥35, age <60, or history of gestational diabetes)." }
    ],
    faqs: [
      { question: "Is prediabetes reversible?", answer: "Yes. Clinical trials (like the Diabetes Prevention Program) demonstrate that lifestyle modification reduces 3-year diabetes progression risk by 58%." }
    ],
    citations: [
      "Knowler WC, et al. Reduction in the Incidence of Type 2 Diabetes with Lifestyle Intervention or Metformin. N Engl J Med. 2002;346(6):393-403."
    ]
  },
  {
    slug: "type-1-diabetes",
    title: "Type 1 Diabetes",
    subtitle: "Autoimmune beta-cell destruction, intensive basal-bolus insulin regimens, and automated insulin pumps.",
    category: "Diabetes",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Type 1 diabetes is an autoimmune disorder characterized by T-cell mediated destruction of pancreatic beta-cells in the Islets of Langerhans, producing absolute endogenously-derived insulin deficiency.",
    epidemiology: "Affects approximately 1.9 million Americans. Onset can occur at any age, though most frequently diagnosed in youth and young adulthood.",
    symptoms: [
      "Rapid-onset severe polydipsia, polyuria, and weight loss",
      "Extreme fatigue, weakness, and muscular wasting",
      "Diabetic Ketoacidosis (DKA) presentation: nausea, vomiting, Kussmaul breathing, fruity breath odor"
    ],
    diagnosticCriteria: [
      { label: "Hyperglycemia + Autoantibodies", detail: "Elevated fasting/random blood glucose with positive islet cell antibodies (GAD65, IA-2, ZnT8, ICA)." },
      { label: "Low C-Peptide", detail: "Suppressed serum C-peptide level (< 0.5 ng/mL) indicating negligible endogenous insulin secretion." }
    ],
    treatmentOptions: [
      { title: "Intensive Insulin Therapy", description: "Multiple Daily Injections (MDI) using long-acting basal insulin and rapid-acting bolus insulin for carbohydrate coverage." },
      { title: "Automated Insulin Delivery (AID)", description: "Hybrid closed-loop insulin pumps (Omnipod 5, Tandem Control-IQ) paired continuously with CGM sensors." }
    ],
    faqs: [
      { question: "What is time-in-range (TIR) for Type 1 diabetes?", answer: "TIR is the percentage of time blood glucose stays between 70–180 mg/dL. The recommended target is > 70% of readings." }
    ],
    citations: [
      "Chiang JL, et al. Type 1 Diabetes Through the Life Span: A Position Statement of the American Diabetes Association. Diabetes Care. 2014;37(7):2034-2054."
    ]
  },
  {
    slug: "gestational-diabetes",
    title: "Gestational Diabetes Mellitus (GDM)",
    subtitle: "Pregnancy-induced insulin resistance, maternal-fetal monitoring, and safe glycemic targets.",
    category: "Diabetes",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Gestational diabetes is carbohydrate intolerance resulting in hyperglycemia with onset or first recognition during pregnancy, driven by placental anti-insulin hormones (hPL, progesterone, cortisol).",
    epidemiology: "Complicates 6% to 10% of pregnancies in the United States.",
    symptoms: [
      "Often asymptomatic, detected during routine 24-28 week screening",
      "Mild fatigue or increased thirst"
    ],
    diagnosticCriteria: [
      { label: "Two-Step Screening", detail: "50g glucose challenge test (1-hour ≥ 130-140 mg/dL) followed by diagnostic 100g 3-hour OGTT." },
      { label: "One-Step 75g OGTT Thresholds", detail: "Fasting ≥ 92 mg/dL, 1-hour ≥ 180 mg/dL, or 2-hour ≥ 153 mg/dL." }
    ],
    treatmentOptions: [
      { title: "Medical Nutrition Therapy (MNT)", description: "Controlled carbohydrate distribution across 3 meals and 2-3 snacks daily." },
      { title: "Insulin Therapy", description: "First-line pharmacotherapy when lifestyle targets (fasting <95 mg/dL, 1-hr postprandial <140 mg/dL) are not met." }
    ],
    faqs: [
      { question: "Does gestational diabetes resolve after delivery?", answer: "In most cases yes, but women with GDM have a 50% lifetime risk of developing Type 2 diabetes and require postpartum 4-12 week testing." }
    ],
    citations: [
      "ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus. Obstet Gynecol. 2018;131(2):e49-e64."
    ]
  },
  {
    slug: "pcos",
    title: "Polycystic Ovary Syndrome (PCOS)",
    subtitle: "Rotterdam criteria, hyperandrogenism, insulin resistance, and endocrine fertility/metabolic management.",
    category: "Hormones",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "PCOS is a complex heterogeneous endocrine-metabolic disorder characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology, closely tied to compensatory hyperinsulinemia.",
    epidemiology: "Affects 8% to 13% of reproductive-aged women worldwide.",
    symptoms: [
      "Oligomenorrhea (infrequent menses) or amenorrhea (absent menses)",
      "Hirsutism (excess facial or body hair in androgen-sensitive areas)",
      "Severe adult acne or androgenic alopecia (hair thinning)",
      "Central weight gain and difficulty losing weight",
      "Infertility due to chronic anovulation"
    ],
    diagnosticCriteria: [
      { label: "Rotterdam Criteria (2 of 3 required)", detail: "1. Oligo- or anovulation; 2. Clinical or biochemical hyperandrogenism; 3. Polycystic ovaries on pelvic ultrasound (≥20 follicles per ovary)." }
    ],
    treatmentOptions: [
      { title: "Insulin Sensitizers", description: "Metformin to lower fasting insulin, restore regular menses, and improve metabolic profiles." },
      { title: "Anti-Androgens", description: "Spironolactone or finasteride to reduce hirsutism and androgenic acne." },
      { title: "Combined Oral Contraceptive Pills", description: "First-line management for menstrual cycle regulation and suppression of ovarian androgen synthesis." }
    ],
    faqs: [
      { question: "Why is insulin resistance so common in PCOS?", answer: "Post-receptor insulin signaling defects in skeletal muscle and adipose tissue trigger compensatory hyperinsulinemia, which stimulates ovarian androgen production." }
    ],
    citations: [
      "Teede HJ, et al. Recommendations from the 2023 International Evidence-Based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. Fertil Steril. 2023;120(4):767-793."
    ]
  },
  {
    slug: "osteoporosis",
    title: "Osteoporosis & Low Bone Density",
    subtitle: "Central DEXA T-scores, FRAX 10-year fracture risk, bisphosphonate/anabolic therapies.",
    category: "Bone Health",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Osteoporosis is a systemic skeletal disease characterized by low bone mass, microarchitectural deterioration of bone tissue, and a consequent increase in bone fragility and fracture susceptibility.",
    epidemiology: "Affects an estimated 10 million Americans over age 50, with an additional 44 million having low bone mass (osteopenia).",
    symptoms: [
      "Asymptomatic until a fragility fracture occurs",
      "Height loss (> 1.5 inches) or progressive kyphosis (dowager's hump)",
      "Acute back pain due to vertebral compression fracture"
    ],
    diagnosticCriteria: [
      { label: "Central DEXA Scan T-Score", detail: "T-score ≤ -2.5 at femoral neck, total hip, or lumbar spine." },
      { label: "Osteopenia", detail: "T-score between -1.0 and -2.5." },
      { label: "Fragility Fracture", detail: "Low-trauma fracture of hip or spine regardless of T-score." }
    ],
    treatmentOptions: [
      { title: "Anti-Resorptive Agents", description: "Oral bisphosphonates (Alendronate, Risedronate) or IV Zoledronic acid / Denosumab to reduce osteoclast activity." },
      { title: "Anabolic Bone Builders", description: "Teriparatide, Abaloparatide, or Romosozumab for severe osteoporosis to stimulate new bone formation." }
    ],
    faqs: [
      { question: "When should women start DEXA bone density screening?", answer: "Routine DEXA screening is recommended for all women aged 65 and older, or younger postmenopausal women with risk factors." }
    ],
    citations: [
      "Camacho PM, et al. American Association of Clinical Endocrinologists Guidelines for Diagnosis and Treatment of Postmenopausal Osteoporosis—2020. Endocr Pract. 2020;26(Suppl 1):1-46."
    ]
  },
  {
    slug: "adrenal-insufficiency",
    title: "Adrenal Insufficiency & Addison's Disease",
    subtitle: "Cortisol deficiency, ACTH stimulation testing, hydrocortisone replacement, and emergency stress dosing.",
    category: "Adrenal",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Adrenal insufficiency occurs when the adrenal cortex fails to produce adequate amounts of glucocorticoids (cortisol) and mineralocorticoids (aldosterone), either due to primary adrenal destruction or secondary pituitary deficiency.",
    epidemiology: "Primary adrenal insufficiency (Addison's) affects 100-140 per million individuals.",
    symptoms: [
      "Profound, worsening fatigue and generalized muscle weakness",
      "Hyperpigmentation of skin and mucous membranes (in primary Addison's)",
      "Unexplained weight loss and anorexia",
      "Orthostatic hypotension and dizziness upon standing",
      "Salt craving (due to aldosterone loss)"
    ],
    diagnosticCriteria: [
      { label: "Morning Serum Cortisol", detail: "8 AM Cortisol < 3 mcg/dL strongly indicates adrenal insufficiency." },
      { label: "Cosyntropin (ACTH) Stimulation Test", detail: "Peak cortisol < 18 mcg/dL 30-60 minutes after 250 mcg synthetic ACTH injection." }
    ],
    treatmentOptions: [
      { title: "Glucocorticoid Replacement", description: "Oral Hydrocortisone (15-25 mg daily in divided doses) or Prednisone." },
      { title: "Mineralocorticoid Replacement", description: "Fludrocortisone (0.05-0.2 mg daily) for primary adrenal failure." }
    ],
    faqs: [
      { question: "What is adrenal crisis?", answer: "A life-threatening emergency caused by acute severe cortisol deficiency, presenting with high fever, severe hypotension, and shock requiring immediate IV hydrocortisone." }
    ],
    citations: [
      "Bornstein SR, et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-389."
    ]
  },
  {
    slug: "cushings-syndrome",
    title: "Cushing's Syndrome & Hypercortisolemia",
    subtitle: "Pathophysiology, 1mg dexamethasone suppression test, 24-hr urinary free cortisol, and pituitary/adrenal workup.",
    category: "Adrenal",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Cushing's syndrome encompasses the clinical abnormalities resulting from chronic exposure to excessive levels of cortisol, whether endogenous (ACTH-secreting pituitary tumor, adrenal adenoma) or exogenous (corticosteroid therapy).",
    epidemiology: "Endogenous Cushing's is rare, with an incidence of 2 to 3 cases per million persons per year.",
    symptoms: [
      "Central obesity with supraclavicular fat pad ('buffalo hump') and moon facies",
      "Purple abdominal striae (> 1 cm wide)",
      "Proximal muscle weakness (difficulty rising from a chair)",
      "Hypertension and easy bruising / thin skin",
      "Glucose intolerance or new-onset diabetes"
    ],
    diagnosticCriteria: [
      { label: "Overnight 1mg Dexamethasone Suppression Test", detail: "Post-dexamethasone 8 AM serum cortisol > 1.8 mcg/dL." },
      { label: "Late-Night Salivary Cortisol", detail: "Elevated late-night salivary cortisol on at least two separate nights." },
      { label: "24-Hour Urinary Free Cortisol (UFC)", detail: "UFC > 3 times the upper limit of normal." }
    ],
    treatmentOptions: [
      { title: "Surgical Resection", description: "Transsphenoidal pituitary surgery for Cushing's disease or adrenalectomy for adrenal adenomas." },
      { title: "Medical Cortisol Inhibitors", description: "Ketoconazole, Osilodrostat, or Metyrapone when surgery is non-curative or contraindicated." }
    ],
    faqs: [
      { question: "What is the difference between Cushing's Syndrome and Cushing's Disease?", answer: "Cushing's Syndrome is the umbrella term for high cortisol. Cushing's Disease specifically refers to hypercortisolemia caused by an ACTH-secreting pituitary adenoma." }
    ],
    citations: [
      "Nieman LK, et al. The Diagnosis of Cushing's Syndrome: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2008;93(5):1526-1540."
    ]
  },
  {
    slug: "hyperparathyroidism",
    title: "Primary Hyperparathyroidism & Calcium Dysregulation",
    subtitle: "Elevated PTH, hypercalcemia, 24-hr urine calcium, renal stone risk, and parathyroidectomy criteria.",
    category: "Parathyroid",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Primary hyperparathyroidism is characterized by excessive secretion of parathyroid hormone (PTH) from one or more hyperfunctioning parathyroid glands (adenoma or hyperplasia), causing hypercalcemia.",
    epidemiology: "Third most common endocrine disorder, occurring in 1 to 4 per 1,000 adults, most frequently postmenopausal women.",
    symptoms: [
      "Often discovered incidentally on routine serum calcium labs",
      "Renal calculi (kidney stones)",
      "Bone aches and increased osteoporosis rate",
      "Constipation, nausea, and abdominal discomfort",
      "Cognitive fatigue, depression, and memory changes ('groans, moans, stones, bones')"
    ],
    diagnosticCriteria: [
      { label: "Elevated Calcium + Elevated/Inappropriate PTH", detail: "Serum corrected calcium > 10.5 mg/dL with serum intact PTH elevated or inappropriately normal." },
      { label: "24-Hour Urinary Calcium", detail: "Rule out Familial Hypocalciuric Hypercalcemia (FHH) with calcium clearance ratio." }
    ],
    treatmentOptions: [
      { title: "Parathyroidectomy", description: "Surgical removal of hyperfunctioning adenoma; definitive cure." },
      { title: "Medical Management", description: "Cinacalcet (calcimimetic) or bisphosphonates for non-surgical candidates." }
    ],
    faqs: [
      { question: "Can vitamin D deficiency mask primary hyperparathyroidism?", answer: "Yes. Coexisting Vitamin D deficiency lowers serum calcium, producing 'normocalcemic' hyperparathyroidism." }
    ],
    citations: [
      "Bilezikian JP, et al. Guidelines for the Management of Asymptomatic Primary Hyperparathyroidism. J Clin Endocrinol Metab. 2014;99(10):3561-3579."
    ]
  },
  {
    slug: "pituitary-adenoma",
    title: "Pituitary Adenomas & Prolactinomas",
    subtitle: "Classification, prolactinoma management, acromegaly screening, and pituitary MRI surveillance.",
    category: "Pituitary",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Pituitary adenomas are benign monoclonal neoplasms arising from adenohypophyseal cells in the anterior pituitary gland, categorized by size (microadenoma <10mm, macroadenoma ≥10mm) and hormonal hypersecretion.",
    epidemiology: "Accounts for 10% to 15% of all intracranial neoplasms; prolactinomas are the most common functional type.",
    symptoms: [
      "Galactorrhea (inappropriate breast milk production) and amenorrhea",
      "Bitemporal hemianopsia (loss of peripheral visual fields due to optic chiasm compression)",
      "Persistent frontal headaches",
      "Acromegaly symptoms (enlarged hands/feet, coarsened facial features)"
    ],
    diagnosticCriteria: [
      { label: "Serum Prolactin Level", detail: "Prolactin > 200 ng/mL strongly diagnostic for prolactinoma." },
      { label: "IGF-1 Measurement", detail: "Elevated Insulin-like Growth Factor 1 screens for GH-secreting adenomas." },
      { label: "High-Resolution Pituitary MRI", detail: "Targeted sellar MRI with contrast." }
    ],
    treatmentOptions: [
      { title: "Dopamine Agonists", description: "Cabergoline or Bromocriptine first-line for prolactinomas to shrink tumor and normalize prolactin." },
      { title: "Transsphenoidal Surgery", description: "First-line surgical management for non-functioning macroadenomas causing optic nerve compression." }
    ],
    faqs: [
      { question: "Are pituitary adenomas cancerous?", answer: "Over 99% of pituitary adenomas are benign non-cancerous tumors." }
    ],
    citations: [
      "Melmed S, et al. Diagnosis and Treatment of Hyperprolactinemia: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2011;96(2):273-288."
    ]
  },
  {
    slug: "metabolic-syndrome",
    title: "Metabolic Syndrome",
    subtitle: "Cardiovascular-metabolic risk cluster, abdominal obesity, atherogenic dyslipidemia, and insulin resistance.",
    category: "Metabolic",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Metabolic syndrome is a cluster of interconnected physiological, biochemical, and clinical factors that directly increase the risk of cardiovascular disease, type 2 diabetes, and stroke.",
    epidemiology: "Affects approximately 35% of U.S. adults and over 50% of adults aged 60 and older.",
    symptoms: [
      "Increased waist circumference (abdominal obesity)",
      "Elevated resting blood pressure",
      "Elevated fasting blood glucose",
      "Acanthosis nigricans or cutaneous skin tags"
    ],
    diagnosticCriteria: [
      { label: "NCEP ATP III Criteria (3 or more required)", detail: "1. Waist circumference >40 in (men) or >35 in (women); 2. Triglycerides ≥150 mg/dL; 3. HDL <40 mg/dL (men) or <50 mg/dL (women); 4. BP ≥130/85 mmHg; 5. Fasting glucose ≥100 mg/dL." }
    ],
    treatmentOptions: [
      { title: "Comprehensive Lifestyle Modification", description: "Mediterranean diet, 150+ minutes weekly aerobic exercise, and visceral fat loss." },
      { title: "Targeted Pharmacotherapy", description: "Statins for dyslipidemia, antihypertensives, and insulin sensitizers." }
    ],
    faqs: [
      { question: "Why is abdominal fat particularly dangerous?", answer: "Visceral fat releases pro-inflammatory cytokines and free fatty acids directly into portal circulation, worsening hepatic insulin resistance." }
    ],
    citations: [
      "Grundy SM, et al. Diagnosis and Management of the Metabolic Syndrome: An American Heart Association/National Heart, Lung, and Blood Institute Scientific Statement. Circulation. 2005;112(17):2735-2752."
    ]
  },
  {
    slug: "menopause-hormone-imbalance",
    title: "Perimenopause & Menopause Hormone Balancing",
    subtitle: "Vasomotor symptoms, FDA-approved bioidentical estrogen/progesterone protocols, and bone health.",
    category: "Hormones",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Menopause is defined retrospectively after 12 consecutive months of amenorrhea following permanent cessation of primary ovarian follicular activity and dramatic reduction in circulating estradiol.",
    epidemiology: "Average age of natural menopause in the United States is 51 years.",
    symptoms: [
      "Vasomotor hot flashes and severe night sweats",
      "Sleep fragmentation and severe insomnia",
      "Genitourinary Syndrome of Menopause (vaginal dryness, dyspareunia)",
      "Mood liability, irritability, and brain fog",
      "Accelerated bone density loss"
    ],
    diagnosticCriteria: [
      { label: "Clinical Diagnosis", detail: "12 months amenorrhea in women over 45. Serum FSH > 30 IU/L can support perimenopausal evaluation." }
    ],
    treatmentOptions: [
      { title: "Transdermal Estradiol + Oral Progesterone", description: "First-line HRT using bioidentical transdermal estradiol patches/gels and micronized progesterone to prevent endometrial hyperplasia." },
      { title: "Non-Hormonal Therapies", description: "Fezolinetant (NK3 receptor antagonist) or SSRIs/SNRIs for hot flashes in women with estrogen contraindications." }
    ],
    faqs: [
      { question: "Is hormone replacement therapy safe when started near menopause onset?", answer: "Yes. The Menopause Society timing hypothesis confirms favorable risk-benefit profiles for healthy women starting HRT within 10 years of menopause onset." }
    ],
    citations: [
      "The NAMS 2022 Hormone Therapy Position Statement Advisory Panel. The 2022 Hormone Therapy Position Statement of The North American Menopause Society. Menopause. 2022;29(7):767-794."
    ]
  },
  {
    slug: "hypogonadism",
    title: "Male Hypogonadism (Low Testosterone)",
    subtitle: "Serum morning testosterone testing, primary vs secondary etiology, and androgen therapy safety.",
    category: "Hormones",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Male hypogonadism is a clinical syndrome resulting from failure of the testes to produce physiological levels of testosterone and/or normal sperm output, due to testicular (primary) or hypothalamic-pituitary (secondary) dysfunction.",
    epidemiology: "Affects 2% to 6% of adult males, increasing markedly with age, obesity, and type 2 diabetes.",
    symptoms: [
      "Decreased sexual desire (libido) and erectile dysfunction",
      "Loss of morning erections",
      "Unexplained fatigue and decreased muscle mass/strength",
      "Increased body fat and gynecomastia",
      "Decreased bone mineral density"
    ],
    diagnosticCriteria: [
      { label: "8 AM Total Serum Testosterone", detail: "Two separate fasting morning total testosterone levels < 300 ng/dL." },
      { label: "LH and FSH Measurement", detail: "Differentiates primary testicular failure (high LH) from secondary pituitary failure (low/normal LH)." }
    ],
    treatmentOptions: [
      { title: "Testosterone Replacement Therapy (TRT)", description: "Transdermal gels, subcutaneous injections, or pellets to restore serum testosterone into mid-normal physiological range." }
    ],
    faqs: [
      { question: "Why must testosterone be tested early in the morning?", answer: "Serum testosterone exhibits a distinct circadian rhythm in young and middle-aged men, peaking between 7 AM and 10 AM." }
    ],
    citations: [
      "Bhasin S, et al. Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2018;103(5):1715-1744."
    ]
  },
  {
    slug: "obesity-weight-management",
    title: "Metabolic Weight Management & Obesity",
    subtitle: "Basal metabolic rate physiology, GLP-1/GIP incretin pharmacotherapy, and long-term cardiometabolic health.",
    category: "Metabolic",
    lastReviewed: "January 15, 2025",
    reviewedBy: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    overview: "Obesity is a chronic, relapsing neurobehavioral and metabolic disease characterized by abnormal or excessive adiposity that impairs systemic health and increases risk for type 2 diabetes, cardiovascular disease, and liver steatosis.",
    epidemiology: "Affects 41.9% of adults in the United States.",
    symptoms: [
      "Elevated BMI (≥ 30 kg/m²)",
      "Joint strain and back pain",
      "Exertional dyspnea and obstructive sleep apnea",
      "Metabolic comorbidities (hypertension, hepatic steatosis, dyslipidemia)"
    ],
    diagnosticCriteria: [
      { label: "BMI & Adiposity Evaluation", detail: "BMI ≥ 30 kg/m² or BMI ≥ 27 kg/m² with weight-related comorbidities." }
    ],
    treatmentOptions: [
      { title: "Incretin Receptor Agonists", description: "Subcutaneous Semaglutide (2.4mg) or Tirzepatide (10-15mg) achieving 15% to 20%+ average total body weight loss in clinical trials." },
      { title: "Lifestyle & Medical Nutrition Therapy", description: "High-protein muscle-sparing nutritional plans and resistance training to preserve lean mass." }
    ],
    faqs: [
      { question: "Why do most diets fail long-term without medical support?", answer: "Weight loss triggers evolutionary physiological defenses, including increased hunger hormones (ghrelin) and persistent drops in basal metabolic rate." }
    ],
    citations: [
      "Wharton S, et al. Obesity in Adults: A Clinical Practice Guideline. CMAJ. 2020;192(31):E875-E891."
    ]
  }
];
