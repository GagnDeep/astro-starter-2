import fs from 'fs';
import path from 'path';

const conditions = [
  {
    slug: 'hypothyroidism-hashimotos.md',
    title: "Hypothyroidism & Hashimoto's Thyroiditis",
    subtitle: "Root-Cause Diagnosis and Personalized Hormone Optimization",
    summary: "Comprehensive care for underactive thyroid and autoimmune Hashimoto's disease, moving beyond standard TSH monitoring to optimize Free T3, Free T4, and quality of life.",
    category: "Thyroid & Parathyroid",
    lastReviewed: "2025-01-15",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Persistent fatigue despite normal TSH levels",
      "Unexplained weight gain and fluid retention",
      "Cold intolerance and dry skin",
      "Brain fog, memory lapses, and low mood",
      "Hair thinning and outer eyebrow loss"
    ],
    diagnosticTests: [
      "Complete Thyroid Panel (TSH, Free T3, Free T4, Reverse T3)",
      "Thyroid Peroxidase (TPO) and Thyroglobulin (Tg) Antibodies",
      "High-Resolution In-Office Thyroid Ultrasound",
      "Serum Selenium and Vitamin D3 Assessment"
    ],
    treatmentTradeoffs: [
      {
        option: "Levothyroxine Monotherapy (Synthetic T4)",
        pros: "Standard of care, long half-life, predictable daily dosing, fully covered by insurance.",
        cons: "Does not benefit patients with impaired peripheral T4-to-T3 conversion.",
        clinicalNote: "Ideal first-line therapy, but requires full Free T3 monitoring if symptoms persist."
      },
      {
        option: "Combination T4 + Liothyronine (Synthetic T3)",
        pros: "Directly restores physiological T3 levels, often improving brain fog and energy.",
        cons: "Shorter half-life requires split daily dosing; potential for temporary palpitations if over-dosed.",
        clinicalNote: "Highly effective for symptomatic patients with low Free T3 despite normal TSH."
      }
    ],
    urgentCareRedFlags: [
      "Severe lethargy or confusion (risk of myxedema coma)",
      "Rapid heart rate above 120 bpm combined with extreme heat intolerance",
      "Difficulty swallowing or sudden painful thyroid swelling"
    ],
    citations: [
      {
        title: "Guidelines for the Treatment of Hypothyroidism: Prepared by the American Thyroid Association Taskforce",
        publication: "Thyroid",
        year: 2014,
        doiUrl: "https://doi.org/10.1089/thy.2014.0028"
      }
    ],
    seo: {
      description: "Expert Hashimoto's and hypothyroidism care in Austin, TX by Dr. Ameena Patel. Specialized T3/T4 combination therapy and complete antibody testing.",
      keywords: ["hashimotos doctor austin", "hypothyroidism specialist", "t3 t4 combination therapy", "austin endocrinologist"]
    },
    content: `
## Understanding Hypothyroidism Beyond TSH

Hypothyroidism occurs when the thyroid gland produces insufficient thyroid hormone to meet metabolic demands. In Central Texas, the vast majority of hypothyroid cases stem from **Hashimoto's Thyroiditis**, an autoimmune disorder where the immune system targets thyroid peroxidase (TPO) and thyroglobulin proteins.

In my Austin practice, I frequently meet patients who have been told "your labs are completely normal," yet they suffer from severe fatigue, brain fog, and stubborn weight gain. Standard primary care screening relies exclusively on Thyroid-Stimulating Hormone (TSH). While TSH is a valuable pituitary signal, it does not reveal how efficiently your body converts inactive T4 into active Free T3 at the cellular level.

### Comprehensive Diagnostic Approach

When evaluating thyroid health, we run a full clinical panel:
- **Free T3 and Free T4**: Measures biologically available hormones.
- **Reverse T3**: Evaluates whether metabolic stress is blocking active T3 receptors.
- **TPO Antibodies**: Confirms autoimmune thyroid disease early.
- **In-Clinic Ultrasound**: Identifies thyroid tissue inflammation, chronic lymphocytic changes, or co-existing nodules.

### Personalized Treatment Plans

We tailor therapy to your specific biochemistry. Whether through precision-titrated Levothyroxine, physiological T3/T4 combination regimens, or evidence-led lifestyle and anti-inflammatory modifications, our goal is complete symptom relief and long-term metabolic stability.
`
  },
  {
    slug: 'hyperthyroidism-graves.md',
    title: "Hyperthyroidism & Graves' Disease",
    subtitle: "Precision Control for Overactive Thyroid Function",
    summary: "Expert diagnosis and management of hyperthyroidism, Graves' disease, and toxic thyroid nodules, focusing on hormone stabilization and thyroid eye protection.",
    category: "Thyroid & Parathyroid",
    lastReviewed: "2025-01-18",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Rapid or irregular heartbeat (palpitations)",
      "Unexplained rapid weight loss despite increased appetite",
      "Heat intolerance and excessive sweating",
      "Hand tremors and muscle weakness",
      "Anxiety, irritability, and insomnia"
    ],
    diagnosticTests: [
      "TSH Receptor Antibodies (TRAb) / Thyroid-Stimulating Immunoglobulin (TSI)",
      "Radioactive Iodine Uptake and Scan (RAIU)",
      "In-Office Thyroid Color Doppler Ultrasound",
      "Free T3 and Free T4 Rapid Titration Panel"
    ],
    treatmentTradeoffs: [
      {
        option: "Antithyroid Medications (Methimazole)",
        pros: "Preserves natural thyroid gland, non-invasive, potential for long-term Graves' remission.",
        cons: "Requires frequent lab monitoring; minor risk of liver inflammation or low white blood cell count.",
        clinicalNote: "First-line medical treatment in our clinic, with monthly lab checks during titration."
      },
      {
        option: "Radioactive Iodine Ablation (RAI)",
        pros: "Definitive cure for hyperthyroidism in a single oral dose.",
        cons: "Results in permanent hypothyroidism requiring lifelong thyroid hormone replacement; may worsen active Graves' eye disease.",
        clinicalNote: "Reserved for patients unable to tolerate medications or with recurrent disease."
      }
    ],
    urgentCareRedFlags: [
      "High fever, extreme agitation, and racing heart rate over 140 bpm (Thyroid Storm emergency)",
      "Sudden double vision or severe eye pain behind the socket"
    ],
    citations: [
      {
        title: "2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism",
        publication: "Thyroid",
        year: 2016,
        doiUrl: "https://doi.org/10.1089/thy.2016.0229"
      }
    ],
    seo: {
      description: "Specialized Graves' disease and hyperthyroidism treatment in Austin, TX by Dr. Ameena Patel, MD. Methimazole titration and thyroid eye co-management.",
      keywords: ["graves disease doctor austin", "hyperthyroidism specialist", "methimazole endocrinologist", "austin thyroid clinic"]
    },
    content: `
## Navigating An Overactive Thyroid

Hyperthyroidism is characterized by excessive production of thyroid hormones (T3 and T4), accelerating bodily metabolism to uncomfortable and dangerous speeds. The most common cause in adults under 60 is **Graves' Disease**, an autoimmune condition caused by antibodies stimulating the TSH receptor.

### Protecting Heart and Vision

An overactive thyroid places intense stress on the cardiovascular system. In our Austin office, early intervention centers on rapid hormone reduction to prevent atrial fibrillation and bone density loss. Additionally, for patients presenting with eye dryness, bulging (proptosis), or pressure, we coordinate directly with specialized oculoplastic surgeons to manage **Thyroid Eye Disease (TED)**.

### Guided Remission Pathways

Through structured Methimazole titration and regular immune biomarker monitoring, up to 40% of Graves' disease patients can achieve sustained remissions. We guide you through every stage with clear expectations and supportive care.
`
  },
  {
    slug: 'thyroid-nodules-fna.md',
    title: "Thyroid Nodules & FNA Biopsy",
    subtitle: "In-Office Ultrasound Evaluation and Same-Day Diagnostic Biopsy",
    summary: "Comprehensive risk assessment for thyroid nodules using high-resolution ACR TI-RADS ultrasound stratification and expert in-clinic ultrasound-guided fine needle aspiration.",
    category: "Thyroid & Parathyroid",
    lastReviewed: "2025-01-20",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Visible or palpable lump in the front of the neck",
      "Sensation of fullness, tightness, or difficulty swallowing pills",
      "Persistent unexplained hoarseness",
      "Incidental discovery on neck CT or carotid ultrasound"
    ],
    diagnosticTests: [
      "High-Resolution In-Office Thyroid Ultrasound",
      "ACR TI-RADS Risk Stratification Scoring",
      "Ultrasound-Guided Fine Needle Aspiration (FNA) Biopsy",
      "Molecular Diagnostic Gene Testing (Afirma / ThyroSeq) for indeterminate nodules"
    ],
    treatmentTradeoffs: [
      {
        option: "Active Ultrasound Surveillance",
        pros: "Avoids unnecessary procedures for benign low-risk nodules (TI-RADS 1-3).",
        cons: "Requires follow-up ultrasounds at 12 to 24 month intervals.",
        clinicalNote: "The safest pathway for small, smooth, benign-appearing nodules."
      },
      {
        option: "In-Office Ultrasound-Guided FNA Biopsy",
        pros: "Same-day diagnostic clarity; virtually painless under local anesthesia; prevents delay in identifying thyroid carcinoma.",
        cons: "Small risk of localized neck bruising or mild soreness for 24 hours.",
        clinicalNote: "Performed directly by Dr. Ameena in our comfortable procedure suite."
      }
    ],
    urgentCareRedFlags: [
      "Rapidly growing neck mass causing acute airway constriction or breathing difficulty",
      "Sudden onset of severe neck pain radiating to ears accompanied by fever"
    ],
    citations: [
      {
        title: "American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules",
        publication: "Thyroid",
        year: 2016,
        doiUrl: "https://doi.org/10.1089/thy.2015.0020"
      }
    ],
    seo: {
      description: "In-office thyroid nodule ultrasound and FNA biopsy in Austin, TX with Dr. Ameena Patel. Rapid diagnostic answers without hospital delays.",
      keywords: ["thyroid nodule biopsy austin", "thyroid ultrasound fna", "austin thyroid specialist", "afirma gene test thyroid"]
    },
    content: `
## Precision Thyroid Nodule Evaluation

Thyroid nodules are extremely common, occurring in up to 50% of adults by age 60. While over 90% of thyroid nodules are benign (non-cancerous), careful clinical assessment is vital to rule out thyroid malignancy and prevent unnecessary surgical interventions.

### Advanced In-Office Diagnostics

In our Central Austin office, Dr. Ameena personally conducts high-resolution ultrasound imaging to classify nodule characteristics according to the **ACR TI-RADS** guidelines. We evaluate size, margin sharpness, echogenicity, microcalcifications, and vascularity.

### Same-Day FNA Biopsy Protocol

When a nodule meets biopsy criteria, we perform **Ultrasound-Guided Fine Needle Aspiration (FNA)** right in our clinic. Using ultra-thin needles and real-time ultrasound guidance, the procedure takes under 15 minutes with local numbing. If cytology yields an indeterminate result, advanced molecular genomic testing is utilized to determine cancer risk with over 95% accuracy.
`
  },
  {
    slug: 'type-2-diabetes.md',
    title: "Type 2 Diabetes & Insulin Resistance",
    subtitle: "Modern Pharmacotherapy and Metabolic Remission Protocols",
    summary: "Evidence-based management of Type 2 Diabetes focusing on metabolic root causes, GLP-1/SGLT2 therapy, cardioprotection, and structured lifestyle remission strategies.",
    category: "Diabetes & Metabolism",
    lastReviewed: "2025-01-22",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Persistent thirst (polydipsia) and frequent urination (polyuria)",
      "Post-meal energy crashes and severe brain fog",
      "Slow-healing cuts or frequent skin infections",
      "Darkened skin patches around neck or armpits (Acanthosis Nigricans)",
      "Unexplained blurry vision"
    ],
    diagnosticTests: [
      "Hemoglobin A1c (HbA1c) and Fasting Blood Glucose",
      "Fasting Serum Insulin and HOMA-IR Calculation",
      "Continuous Glucose Monitoring 14-Day Pattern Trial",
      "Comprehensive Kidney & Cardiovascular Panel (Urine Albumin-to-Creatinine Ratio, eGFR)"
    ],
    treatmentTradeoffs: [
      {
        option: "GLP-1 / GIP Receptor Agonists (Tirzepatide / Semaglutide)",
        pros: "Profound HbA1c reduction, significant weight loss, kidney protection, low hypoglycemia risk.",
        cons: "Transient nausea or gastrointestinal side effects during dose escalation; insurance prior-authorization required.",
        clinicalNote: "First-line disease-modifying therapy for insulin resistant type 2 diabetes."
      },
      {
        option: "SGLT2 Inhibitors (Empagliflozin / Dapagliflozin)",
        pros: "Promotes urinary glucose excretion, lowers blood pressure, strong heart failure and kidney protection.",
        cons: "Increased risk of mycotic genital infections; requires adequate hydration.",
        clinicalNote: "Invaluable addition for patients with co-existing cardiac or renal risk factors."
      }
    ],
    urgentCareRedFlags: [
      "Blood sugar exceeding 300 mg/dL with severe confusion, vomiting, or deep rapid breathing (Hyperosmolar Hyperglycemic State)",
      "Severe low blood sugar below 50 mg/dL unresponsive to oral glucose"
    ],
    citations: [
      {
        title: "Standards of Care in Diabetes—2024: American Diabetes Association",
        publication: "Diabetes Care",
        year: 2024,
        doiUrl: "https://doi.org/10.2337/dc24-S002"
      }
    ],
    seo: {
      description: "Comprehensive Type 2 Diabetes specialist in Austin, TX. Dr. Ameena Patel offers GLP-1 optimization, continuous glucose monitoring, and remission pathways.",
      keywords: ["type 2 diabetes doctor austin", "glp1 endocrinologist austin", "hba1c reduction clinic", "insulin resistance doctor"]
    },
    content: `
## Reimagining Type 2 Diabetes Management

Type 2 Diabetes is primarily a disorder of severe insulin resistance and metabolic dysfunction. For decades, traditional care focused solely on pushing higher doses of insulin to force glucose into resistant cells. Modern clinical endocrinology takes a fundamentally superior approach: restoring insulin sensitivity, preserving pancreatic beta-cell function, and protecting cardiovascular and renal health.

### Comprehensive Metabolic Workup

In our Austin practice, we look beyond basic fasting glucose. We calculate **HOMA-IR** (Homeostatic Model Assessment for Insulin Resistance), track 14-day continuous glucose patterns, and assess microvascular risk factors early.

### Personalized Therapy & Remission

Utilizing non-insulin therapies like GLP-1/GIP agonists and SGLT2 inhibitors alongside structured macronutrient modification, many patients achieve dramatic HbA1c drops, significant weight reduction, and in early-stage cases, complete glycemic remission without lifelong medication reliance.
`
  },
  {
    slug: 'type-1-diabetes-cgm.md',
    title: "Type 1 Diabetes & Continuous Glucose Monitoring (CGM)",
    subtitle: "Advanced Diabetes Technology, Time-in-Range, and Pump Optimization",
    summary: "Specialized care for Type 1 Diabetes adults in Austin. Expert implementation of Dexcom G7, Freestyle Libre 3, and automated insulin pump delivery systems (Omnipod 5, Tandem Control-IQ).",
    category: "Diabetes & Metabolism",
    lastReviewed: "2025-01-25",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Unexplained glycemic variability and frequent unexpected low blood sugars",
      "Nocturnal hypoglycemia causing exhaustion or morning headaches",
      "High HbA1c despite frequent fingerstick testing",
      "Frustration with manual insulin calculations and carb counting"
    ],
    diagnosticTests: [
      "Continuous Glucose Monitor (CGM) AGP (Ambulatory Glucose Profile) Analysis",
      "Serum C-Peptide and Autoantibody Verification (GAD65, IA-2, ZNT8)",
      "Basal-to-Bolus Insulin Ratio and Correction Factor Evaluation",
      "Annual Microvascular Screening (Microalbumin, Diabetic Eye Exam Review)"
    ],
    treatmentTradeoffs: [
      {
        option: "Automated Insulin Delivery (AID) / Hybrid Closed-Loop Pump",
        pros: "Automatically adjusts basal insulin every 5 minutes based on CGM trends; dramatically increases Time-in-Range (70-180 mg/dL); mitigates severe night lows.",
        cons: "Requires wearing physical pump site and sensor; initial device training investment.",
        clinicalNote: "The gold standard for T1D management, customized directly in our clinic."
      },
      {
        option: "Multiple Daily Injections (MDI) with CGM Integration",
        pros: "No attached pump device; low hardware complexity.",
        cons: "Requires manual basal/bolus injections 4+ times daily; higher risk of nocturnal hypoglycemia.",
        clinicalNote: "Paired with Dexcom G7, MDI can be highly effective with proper ratio tuning."
      }
    ],
    urgentCareRedFlags: [
      "Blood sugar above 250 mg/dL with positive urine/blood ketones, nausea, vomiting, or fruity breath (Diabetic Ketoacidosis - DKA Emergency)",
      "Unconsciousness or seizure due to severe hypoglycemia"
    ],
    citations: [
      {
        title: "Clinical Targets for Continuous Glucose Monitoring Data Interpretation: Recommendations From the International Consensus on Time in Range",
        publication: "Diabetes Care",
        year: 2019,
        doiUrl: "https://doi.org/10.2337/dci19-0028"
      }
    ],
    seo: {
      description: "Type 1 Diabetes and CGM specialist in Austin, TX. Dr. Ameena Patel optimizes Dexcom G7, Tandem Control-IQ, and Omnipod 5 for maximum Time-in-Range.",
      keywords: ["type 1 diabetes specialist austin", "dexcom g7 doctor austin", "omnipod 5 endocrinologist", "time in range t1d"]
    },
    content: `
## Empowering Type 1 Diabetes with Precision Technology

Managing Type 1 Diabetes requires making over 180 extra health decisions every single day. Modern diabetes technology—specifically Continuous Glucose Monitors (CGM) and Automated Insulin Delivery (AID) systems—has revolutionized T1D care by automating routine decisions and preventing severe blood sugar spikes and drops.

### Focusing on Time-in-Range (TIR)

In our Austin practice, we move beyond HbA1c alone. A patient with extreme swings between 40 mg/dL and 300 mg/dL might have an "ideal" HbA1c of 6.8%, yet feel miserable and face severe risk. We evaluate your **Ambulatory Glucose Profile (AGP)** to optimize your **Time-in-Range (70–180 mg/dL)** target above 70%, while reducing low blood sugar time below 4%.

### Direct Technology Optimization

Dr. Ameena provides hands-on setup, sensor application, and custom algorithm tuning for:
- **Dexcom G7** and **Freestyle Libre 3**
- **Omnipod 5 Automated Insulin Delivery**
- **Tandem t:slim X2 with Control-IQ Technology**
`
  },
  {
    slug: 'pcos-metabolic-health.md',
    title: "Polycystic Ovary Syndrome (PCOS) & Metabolic Health",
    subtitle: "Targeting Hyperinsulinemia, Androgen Excess, and Hormonal Balance",
    summary: "Comprehensive endocrinological management of PCOS. Addressing the metabolic root cause of insulin resistance, irregular cycles, hirsutism, and fertility preparation.",
    category: "Hormones & Reproductive Health",
    lastReviewed: "2025-01-28",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Irregular, infrequent, or completely absent menstrual periods",
      "Excess facial or body hair growth (hirsutism) and hormonal jawline acne",
      "Central abdominal weight gain resistant to standard diet and exercise",
      "Scalp hair thinning (androgenic alopecia)",
      "Difficulty conceiving due to anovulation"
    ],
    diagnosticTests: [
      "Rotterdam Criteria Clinical Assessment",
      "Serum Total and Free Testosterone, DHEAS, and Androstenedione",
      "Fasting Insulin and 2-Hour Oral Glucose Tolerance Test (OGTT)",
      "LH to FSH Ratio, Prolactin, and Thyroid Screening (to rule out mimic conditions)"
    ],
    treatmentTradeoffs: [
      {
        option: "Insulin Sensitizers (Metformin) + GLP-1 Therapy",
        pros: "Directly treats underlying hyperinsulinemia, aids weight management, restores natural ovulation, protects against metabolic syndrome.",
        cons: "Mild initial GI side effects requiring slow dose titration.",
        clinicalNote: "The primary endocrine strategy for metabolic PCOS phenotypes."
      },
      {
        option: "Anti-Androgen Therapy (Spironolactone)",
        pros: "Effectively blocks hair follicle androgen receptors, reducing facial hair growth and clearing hormonal acne within 3-6 months.",
        cons: "Requires reliable contraception (cannot be taken during pregnancy); mild diuretic effect.",
        clinicalNote: "Highly beneficial for dermatological androgen symptoms."
      }
    ],
    urgentCareRedFlags: [
      "Severe, sudden lower abdominal or pelvic pain (risk of ovarian torsion or ruptured cyst)"
    ],
    citations: [
      {
        title: "Recommendations from the International Evidence-Based Guideline for the Assessment and Management of Polycystic Ovary Syndrome 2023",
        publication: "Fertility and Sterility",
        year: 2023,
        doiUrl: "https://doi.org/10.1016/j.fertnstert.2023.07.025"
      }
    ],
    seo: {
      description: "PCOS specialist endocrinologist in Austin, TX. Dr. Ameena Patel targets insulin resistance, androgen excess, and ovulation restoration.",
      keywords: ["pcos endocrinologist austin", "pcos doctor austin tx", "insulin resistance pcos", "spironolactone acne austin"]
    },
    content: `
## Treating PCOS as a Primary Metabolic Disorder

Polycystic Ovary Syndrome (PCOS) is the most common endocrine disorder in women of reproductive age, affecting over 10% of women. Too often, patients are simply handed birth control pills and told to "come back when you want to get pregnant."

As a specialist endocrinologist, Dr. Ameena treats PCOS at its core driver: **hyperinsulinemia and insulin resistance**. Excess circulating insulin stimulates the ovarian teca cells to produce excessive androgens (testosterone), inhibiting normal follicle maturation and causing systemic inflammatory symptoms.

### Comprehensive Rotterdam Diagnosis

We perform thorough diagnostic testing using the **Rotterdam Criteria**, ensuring we differentiate PCOS from thyroid dysfunction, hyperprolactinemia, or non-classical congenital adrenal hyperplasia.

### Personalized Metabolic Care Plans

By combining insulin sensitizing medications, anti-androgen therapy, tailored dietary protocols, and ovulation restoration support, we help patients achieve clear skin, regular cycles, weight control, and long-term cardiovascular health.
`
  },
  {
    slug: 'osteoporosis-bone-health.md',
    title: "Osteoporosis & Bone Density Loss",
    subtitle: "Advanced Bone Preservation, Fracture Risk Reduction, and Anabolic Therapy",
    summary: "Expert metabolic bone disorder care in Austin. FRAX risk calculation, DEXA scan interpretation, bisphosphonate management, and advanced anabolic bone builders (Evenity, Tymlos, Forteo).",
    category: "Bone & Mineral",
    lastReviewed: "2025-01-30",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Fragility fracture occurring from a fall from standing height or lower",
      "Unexplained loss of height over time (1 inch or more)",
      "Stooped posture or kyphosis (dowager's hump)",
      "Sudden severe middle or lower back pain (possible compression fracture)"
    ],
    diagnosticTests: [
      "Dual-Energy X-Ray Absorptiometry (DEXA) Scan with Trabecular Bone Score (TBS)",
      "FRAX (Fracture Risk Assessment Tool) 10-Year Probability Calculation",
      "Bone Turnover Markers (Serum CTX for resorption, P1NP for formation)",
      "Secondary Osteoporosis Panel (Serum Calcium, Parathyroid Hormone, Vitamin D 25-OH, 24-Hour Urine Calcium)"
    ],
    treatmentTradeoffs: [
      {
        option: "Antiresorptive Therapy (Bisphosphonates / Denosumab)",
        pros: "Slows osteoclast bone breakdown, significantly reduces spine and hip fracture risk, convenient oral or bi-annual injection options.",
        cons: "Requires dental clearance before initiation; small risk of atypical femur fracture after 5+ years of continuous use.",
        clinicalNote: "First-line protection for moderate fracture risk scores."
      },
      {
        option: "Anabolic Bone-Forming Agents (Romosozumab / Abaloparatide / Teriparatide)",
        pros: "Directly stimulates osteoblast bone building, rapidly increases bone mineral density in severe osteoporosis.",
        cons: "Requires daily or monthly injection protocol; strictly limited to 12-24 months duration.",
        clinicalNote: "Transformative for patients with existing fractures or T-scores lower than -3.0."
      }
    ],
    urgentCareRedFlags: [
      "Sudden intense back pain following minor stress, lifting, or coughing (acute vertebral fracture)",
      "Inability to bear weight on hip after a fall"
    ],
    citations: [
      {
        title: "American Association of Clinical Endocrinologists Medical Guidelines for Clinical Practice for the Diagnosis and Treatment of Postmenopausal Osteoporosis",
        publication: "Endocrine Practice",
        year: 2020,
        doiUrl: "https://doi.org/10.4158/GL-2020-0524"
      }
    ],
    seo: {
      description: "Osteoporosis and bone density specialist in Austin, TX. Dr. Ameena Patel offers DEXA interpretation, Evenity, Tymlos, and fracture prevention.",
      keywords: ["osteoporosis specialist austin", "dexa scan doctor austin", "evenity bone builder austin", "bone density endocrinologist"]
    },
    content: `
## Silent Bone Loss and Fracture Prevention

Osteoporosis is often termed a "silent disease" because bone loss occurs gradually without symptoms until a painful fragility fracture occurs. Bone is dynamic living tissue constantly being broken down (resorption) and rebuilt (formation). After age 50 or menopause, bone resorption frequently outpaces formation, leading to fragile bone architecture.

### Precision Diagnostics Beyond DEXA

In our Central Austin office, we evaluate DEXA scans with advanced **Trabecular Bone Score (TBS)** technology to assess bone micro-architecture quality alongside density. We calculate your personalized **FRAX 10-Year Fracture Risk** and test serum CTX/P1NP markers to determine active bone turnover rates.

### Sequential Treatment Sequencing

We specialize in structured **bone medication sequencing**—initiating rapid anabolic bone builders (Evenity, Tymlos) for high-risk patients, followed by consolidation antiresorptive therapy to permanently lock in new bone density.
`
  },
  {
    slug: 'adrenal-fatigue-insufficiency.md',
    title: "Adrenal Insufficiency vs. Stress Fatigue",
    subtitle: "Clinical Diagnosis of Addison's Disease and Cortisol Disorders",
    summary: "Clear endocrinological distinction between physiological Adrenal Insufficiency (Addison's disease) and stress fatigue. Cosyntropin stimulation testing and hydrocortisone management.",
    category: "Hormones & Reproductive Health",
    lastReviewed: "2025-02-01",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Profound, incapacitating fatigue unalleviated by sleep",
      "Unexplained low blood pressure (hypotension) and dizziness upon standing",
      "Hyperpigmentation (darkening of skin creases, scars, or gums)",
      "Salt cravings and nausea or unexplained abdominal pain",
      "Unintended weight loss and muscle weakness"
    ],
    diagnosticTests: [
      "8:00 AM Serum Cortisol and Plasma ACTH",
      "Cosyntropin (ACTH) Stimulation Test (Gold Standard)",
      "21-Hydroxylase Adrenal Autoantibodies",
      "Adrenal Gland High-Resolution CT Imaging"
    ],
    treatmentTradeoffs: [
      {
        option: "Targeted Physiological Hydrocortisone / Fludrocortisone Replacement",
        pros: "Life-saving hormone restoration, reverses hypotension and weakness, mimics natural circadian cortisol rhythm.",
        cons: "Requires strict adherence to daily dosing schedules and sick-day stress dosing protocols.",
        clinicalNote: "Essential for verified primary or secondary adrenal insufficiency."
      }
    ],
    urgentCareRedFlags: [
      "Severe abdominal pain, persistent vomiting, confusion, severe hypotension, or high fever (Adrenal Crisis Emergency — requires immediate IM Hydrocortisone/Solu-Cortef and ER care)"
    ],
    citations: [
      {
        title: "Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline",
        publication: "The Journal of Clinical Endocrinology & Metabolism",
        year: 2016,
        doiUrl: "https://doi.org/10.1210/jc.2015-1710"
      }
    ],
    seo: {
      description: "Adrenal specialist in Austin, TX. Dr. Ameena Patel provides Cosyntropin stimulation testing for Addison's disease and true adrenal insufficiency.",
      keywords: ["adrenal insufficiency doctor austin", "addisons disease endocrinologist", "acth stimulation test austin", "cortisol testing clinic"]
    },
    content: `
## Navigating Cortisol Disorders with Medical Clarity

Many patients arrive at our clinic feeling completely exhausted and searching for answers after reading online about "adrenal fatigue." As a board-certified endocrinologist, Dr. Ameena provides clear, evidence-based medical distinction between non-specific stress fatigue and true, physiological **Adrenal Insufficiency (Addison's Disease)**.

### The Science of Adrenal Insufficiency

True adrenal insufficiency occurs when the adrenal glands produce inadequate cortisol due to autoimmune destruction (Primary) or pituitary dysfunction (Secondary). Cortisol is vital for maintaining blood pressure, vascular tone, glucose control, and stress response.

### Gold Standard Cosyntropin Testing

We perform in-clinic **Cosyntropin (ACTH) Stimulation Testing**—measuring baseline cortisol, administering synthetic ACTH, and re-checking cortisol at 30 and 60 minutes. If your adrenal glands respond normally, true adrenal insufficiency is definitively ruled out, and we redirect investigation toward thyroid, metabolic, sleep, or auto-immune causes.
`
  },
  {
    slug: 'pituitary-adenomas-prolactin.md',
    title: "Pituitary Adenomas & Prolactin Elevation",
    subtitle: "Expert Management of Prolactinomas and Pituitary Hormone Balance",
    summary: "Specialized care for pituitary tumors, elevated prolactin (hyperprolactinemia), Cushing's disease, and acromegaly. Medical management with dopamine agonists and neurosurgical co-care.",
    category: "Hormones & Reproductive Health",
    lastReviewed: "2025-02-03",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Unexplained nipple discharge (galactorrhea) in women or men",
      "Irregular periods, absence of menstruation, or low testosterone",
      "Persistent unexplained headaches",
      "Visual field loss (peripheral vision constriction)",
      "Unexplained rapid facial changes or hand/foot enlargement"
    ],
    diagnosticTests: [
      "Serum Prolactin Level (with Macroprolactin dilution to rule out hook effect)",
      "Dedicated Pituitary MRI with Contrast (3-Tesla)",
      "Anterior Pituitary Function Panel (TSH, ACTH, IGF-1, LH, FSH)",
      "Formal Visual Field Ophthalmology Testing"
    ],
    treatmentTradeoffs: [
      {
        option: "Dopamine Agonist Pharmacotherapy (Cabergoline)",
        pros: "Highly effective at shrinking prolactin-secreting adenomas (prolactinomas) and normalizing prolactin levels without surgery; non-invasive.",
        cons: "Requires bi-annual echocardiogram screening for high-dose long-term use; occasional mild nausea or lightheadedness.",
        clinicalNote: "First-line therapy for micro- and macro-prolactinomas."
      },
      {
        option: "Transsphenoidal Neurosurgical Resection",
        pros: "Definitive surgical removal for non-functioning adenomas, macroadenomas compressing the optic chiasm, or medication-resistant tumors.",
        cons: "Surgical risks; potential need for post-operative hormone replacement.",
        clinicalNote: "Coordinated directly with top Austin neurosurgical teams."
      }
    ],
    urgentCareRedFlags: [
      "Sudden severe 'thunderclap' headache, rapid visual loss, and double vision (Pituitary Apoplexy emergency)"
    ],
    citations: [
      {
        title: "Diagnosis and Treatment of Hyperprolactinemia: An Endocrine Society Clinical Practice Guideline",
        publication: "The Journal of Clinical Endocrinology & Metabolism",
        year: 2011,
        doiUrl: "https://doi.org/10.1210/jc.2010-1692"
      }
    ],
    seo: {
      description: "Pituitary tumor and elevated prolactin specialist in Austin, TX. Dr. Ameena Patel offers Cabergoline management, pituitary MRI reviews, and neurosurgical co-care.",
      keywords: ["prolactinoma doctor austin", "pituitary specialist austin", "cabergoline endocrinologist", "elevated prolactin clinic"]
    },
    content: `
## The Master Gland: Comprehensive Pituitary Care

The pituitary gland, located at the base of the brain, is known as the "master gland" because it regulates thyroid, adrenal, reproductive, and growth hormones throughout the body. Benign pituitary adenomas (tumors) can cause health issues either by overproducing specific hormones (like prolactin or ACTH) or by physically pressing on adjacent structures like the optic nerve.

### Prolactinoma Management

The most common functioning pituitary adenoma is a **prolactinoma**. Elevated prolactin suppresses gonadotropin secretion, causing menstrual cessation, galactorrhea, low libido, or male infertility.

Through targeted **Cabergoline** therapy, over 80% of prolactinomas shrink significantly, restoring normal hormonal and reproductive balance without brain surgery.

### Multidisciplinary Coordination

For larger macroadenomas requiring surgical intervention, Dr. Ameena works closely with Austin's leading neurosurgeons to provide pre-operative hormonal optimization and post-operative pituitary recovery tracking.
`
  },
  {
    slug: 'metabolic-syndrome-weight.md',
    title: "Metabolic Syndrome & Medical Weight Loss",
    subtitle: "Evidence-Based Cardiometabolic Health and GLP-1 Protocol",
    summary: "Root-cause treatment of metabolic syndrome, visceral adiposity, and fatty liver disease in Austin. Combining GLP-1/GIP medications, HOMA-IR tracking, and muscle preservation plans.",
    category: "Diabetes & Metabolism",
    lastReviewed: "2025-02-05",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Elevated waist circumference (abdominal obesity)",
      "High blood pressure or elevated fasting triglycerides",
      "Low HDL ('good') cholesterol levels",
      "Fasting blood glucose above 100 mg/dL (prediabetes)",
      "Fatigue and elevated liver enzymes (suspected fatty liver / MASH)"
    ],
    diagnosticTests: [
      "Advanced Lipid Panel (ApoB, Triglyceride-to-HDL ratio)",
      "Fasting Glucose, Insulin, and HOMA-IR Score",
      "Comprehensive Liver Function and FibroScan Referral",
      "Body Composition DEXA (Visceral Fat Mass Analysis)"
    ],
    treatmentTradeoffs: [
      {
        option: "Physician-Supervised GLP-1 / GIP Therapy (Tirzepatide / Semaglutide)",
        pros: "Significant reduction in visceral fat, lowered blood pressure, improved lipid markers, liver fat reduction, sustained appetite regulation.",
        cons: "Risk of lean muscle loss if protein intake and resistance training are neglected.",
        clinicalNote: "In our practice, all GLP-1 protocols include explicit protein and resistance guidelines to protect skeletal muscle mass."
      }
    ],
    urgentCareRedFlags: [
      "Severe right upper quadrant abdominal pain with fever and jaundice (acute gallbladder or biliary tract obstruction)"
    ],
    citations: [
      {
        title: "Endocrine Society Clinical Practice Guideline on Medical Management of Obesity",
        publication: "The Journal of Clinical Endocrinology & Metabolism",
        year: 2015,
        doiUrl: "https://doi.org/10.1210/jc.2014-3415"
      }
    ],
    seo: {
      description: "Medical weight management and metabolic syndrome endocrinologist in Austin, TX. Dr. Ameena Patel offers GLP-1 protocols with muscle preservation monitoring.",
      keywords: ["metabolic syndrome doctor austin", "glp1 medical weight loss austin", "tirzepatide doctor austin", "fatty liver endocrinologist"]
    },
    content: `
## Reversing Metabolic Dysfunction

Metabolic Syndrome is a cluster of conditions—increased blood pressure, high blood sugar, excess body fat around the waist, and abnormal cholesterol levels—that occur together, dramatically increasing your risk of heart disease, stroke, and Type 2 diabetes.

Rather than viewing weight management purely as a willpower issue, clinical endocrinology recognizes that visceral adiposity triggers chronic inflammation, leptin resistance, and hyperinsulinemia.

### Evidence-Led GLP-1 Protocols

Dr. Ameena provides physician-directed cardiometabolic protocols. When prescribing modern GLP-1 or GIP receptor agonists, we focus on **quality of weight loss**:
- **Visceral Fat Reduction**: Targeting the dangerous fat surrounding internal organs.
- **Muscle Preservation**: Monitoring body composition and enforcing high protein targets alongside resistance exercise.
- **Cardiovascular Protection**: Lowering blood pressure, ApoB, and systemic inflammation markers.
`
  },
  {
    slug: 'hyperparathyroidism-calcium.md',
    title: "Hyperparathyroidism & Calcium Imbalance",
    subtitle: "In-Office PTH Evaluation and Localization for High Blood Calcium",
    summary: "Expert evaluation of elevated serum calcium and parathyroid hormone (PTH). Rapid identification of parathyroid adenomas, bone loss protection, and surgical referral coordination.",
    category: "Bone & Mineral",
    lastReviewed: "2025-02-08",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Incidental discovery of high calcium on routine blood work",
      "Chronic bone and joint aching ('painful bones')",
      "Recurrent kidney stones ('kidney stones')",
      "Unexplained abdominal pain, constipation, or nausea ('abdominal groans')",
      "Brain fog, depression, and memory changes ('psychic moans')"
    ],
    diagnosticTests: [
      "Intact Parathyroid Hormone (iPTH) and Ionized Calcium Panel",
      "24-Hour Urine Calcium and Creatinine Clearance (to rule out FHH)",
      "Serum 25-OH Vitamin D and 1,25-Dihydroxyvitamin D",
      "High-Resolution Parathyroid Neck Ultrasound and Sestamibi Scan Referral"
    ],
    treatmentTradeoffs: [
      {
        option: "Minimally Invasive Parathyroidectomy (Surgical Cure)",
        pros: "Definitive cure rate over 95%; rapidly normalizes calcium, relieves brain fog, and halts progressive bone loss.",
        cons: "Surgical procedure requiring experienced endocrine surgeon.",
        clinicalNote: "The treatment of choice for primary hyperparathyroidism caused by a single adenoma."
      },
      {
        option: "Medical Management / Calcimimetics (Cinacalcet)",
        pros: "Lowers serum calcium without surgery.",
        cons: "Does not cure underlying adenoma; ongoing medication requirement.",
        clinicalNote: "Reserved for non-surgical candidates or high surgical risk patients."
      }
    ],
    urgentCareRedFlags: [
      "Severe nausea, confusion, lethargy, or heart rhythm abnormalities with calcium above 13 mg/dL (Hypercalcemic Crisis emergency)"
    ],
    citations: [
      {
        title: "Guidelines for the Management of Asymptomatic Primary Hyperparathyroidism: Summary Statement from the Fifth International Workshop",
        publication: "Journal of Bone and Mineral Research",
        year: 2022,
        doiUrl: "https://doi.org/10.1002/jbmr.4675"
      }
    ],
    seo: {
      description: "Hyperparathyroidism and high calcium specialist in Austin, TX. Dr. Ameena Patel provides in-office PTH testing and minimally invasive surgery coordination.",
      keywords: ["hyperparathyroidism doctor austin", "high calcium blood work specialist", "parathyroid adenoma austin", "pth testing clinic"]
    },
    content: `
## "Bones, Stones, Groans, and Psychic Moans"

Primary Hyperparathyroidism is a disorder caused by overactivity of one or more of the four tiny parathyroid glands located behind the thyroid. These glands act as the body's calcium thermostat. When an adenoma (benign tumor) develops, it continuously secretes **Parathyroid Hormone (PTH)**, pulling calcium out of your bones and pushing serum calcium levels above normal.

### Precise Diagnostic Differentiation

High serum calcium should never be ignored. In our Central Austin clinic, we perform a thorough workup to differentiate primary hyperparathyroidism from **Familial Hypocalciuric Hypercalcemia (FHH)**, secondary hyperparathyroidism due to Vitamin D deficiency, or renal disease.

### Pre-Operative Localization

Using specialized in-office neck ultrasounds and coordinating Sestamibi nuclear imaging, we precisely locate the overactive gland prior to surgery, enabling local high-volume endocrine surgeons to perform quick, minimally invasive outpatient procedures.
`
  },
  {
    slug: 'perimenopause-hormone-balance.md',
    title: "Perimenopause & Hormonal Balance",
    subtitle: "Evidence-Based Endocrine Evaluation of Midlife Hormonal Transitions",
    summary: "Navigating midlife hormonal fluctuations with evidence-based endocrinology. Differentiating perimenopause from thyroid dysfunction, bioidentical HRT guidance, and metabolic care.",
    category: "Hormones & Reproductive Health",
    lastReviewed: "2025-02-10",
    author: "Dr. Ameena Patel, MD, FACE",
    symptoms: [
      "Hot flashes, night sweats, and sleep disturbances",
      "Irregular, heavier, or skipped menstrual cycles",
      "Sudden weight gain around abdominal region despite unchanged diet",
      "Mood swings, anxiety, and severe midlife brain fog",
      "Joint stiffness and muscle aches"
    ],
    diagnosticTests: [
      "Thyroid Function Panel (to exclude thyroid perimenopause mimicry)",
      "Serum Estradiol, Progesterone, FSH, and LH Evaluation",
      "Metabolic Screening (Fasting Lipid, Glucose, HbA1c)",
      "DEXA Baseline Bone Density Scan"
    ],
    treatmentTradeoffs: [
      {
        option: "FDA-Approved Bioidentical Hormone Replacement Therapy (mHRT)",
        pros: "Transdermal 17β-estradiol and oral micronized progesterone provide profound relief from vasomotor hot flashes, protect bone density, and improve sleep quality.",
        cons: "Requires individual risk stratification regarding breast cancer and cardiovascular history.",
        clinicalNote: "Safe and highly beneficial when initiated within 10 years of menopause in appropriate candidates."
      }
    ],
    urgentCareRedFlags: [
      "Extremely heavy post-menopausal vaginal bleeding (requires urgent gynecological evaluation)"
    ],
    citations: [
      {
        title: "The 2022 Hormone Therapy Position Statement of The Menopause Society",
        publication: "Menopause",
        year: 2022,
        doiUrl: "https://doi.org/10.1097/GME.0000000000002028"
      }
    ],
    seo: {
      description: "Perimenopause and midlife hormone specialist in Austin, TX. Dr. Ameena Patel provides evidence-based HRT, thyroid overlap evaluation, and bone health care.",
      keywords: ["perimenopause endocrinologist austin", "hormone replacement therapy austin", "midlife hormone doctor", "bioidentical hrt austin"]
    },
    content: `
## Evidence-Based Midlife Hormonal Care

Perimenopause—the transitional phase leading up to menopause—can begin up to 8 to 10 years before the final menstrual period. Fluctuating estrogen and progesterone levels produce a wide array of symptoms that are frequently misdiagnosed as primary depression, severe stress, or age-related decline.

### Differentiating Thyroid from Menopause

Because thyroid symptoms (fatigue, brain fog, weight gain, heat/cold sensitivity) almost identically mirror perimenopause, Dr. Ameena performs a comprehensive dual evaluation. We ensure thyroid disorders are ruled out or treated simultaneously.

### FDA-Approved Bioidentical HRT

We offer evidence-based **Menopausal Hormone Therapy (mHRT)** using body-identical transdermal estradiol patches/gels and oral micronized progesterone. We prioritize FDA-approved regulated bioidenticals over unmonitored pellet implants, ensuring precise safety, bone protection, and symptom relief.
`
  }
];

const outDir = path.join(process.cwd(), 'src/content/conditions');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

conditions.forEach(item => {
  const filePath = path.join(outDir, item.slug);
  const fileContent = `---
title: "${item.title}"
subtitle: "${item.subtitle}"
summary: "${item.summary}"
category: "${item.category}"
lastReviewed: "${item.lastReviewed}"
author: "${item.author}"
symptoms: ${JSON.stringify(item.symptoms, null, 2)}
diagnosticTests: ${JSON.stringify(item.diagnosticTests, null, 2)}
treatmentTradeoffs: ${JSON.stringify(item.treatmentTradeoffs, null, 2)}
urgentCareRedFlags: ${JSON.stringify(item.urgentCareRedFlags, null, 2)}
citations: ${JSON.stringify(item.citations, null, 2)}
seo: ${JSON.stringify(item.seo, null, 2)}
---

${item.content.trim()}
`;
  fs.writeFileSync(filePath, fileContent);
  console.log('Created condition page:', item.slug);
});
