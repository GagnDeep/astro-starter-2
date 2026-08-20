import fs from 'fs';
import path from 'path';

const procedures = [
  {
    slug: 'thyroid-ultrasound-fna.md',
    title: "Ultrasound-Guided Fine Needle Aspiration (FNA) Thyroid Biopsy",
    subtitle: "Minimally Invasive In-Office Diagnostic Procedure",
    summary: "Same-week diagnostic evaluation for thyroid nodules. Performed in our Austin clinic under local anesthesia with real-time high-resolution ultrasound guidance.",
    durationMinutes: 20,
    inOffice: true,
    preparationSteps: [
      "No fasting required — eat and drink normally before your appointment.",
      "Inform Dr. Ameena if you are taking blood thinners (Coumadin, Eliquis, Plavix, or high-dose aspirin).",
      "Wear a comfortable open-neck or button-down shirt."
    ],
    whatToExpect: [
      "Comfortable position reclining with neck gently extended.",
      "Targeted ultrasound scan to locate exact nodule coordinates.",
      "Cleansing of neck skin with cold antiseptic solution and local numbing injection.",
      "Insertion of ultra-thin needle (smaller than a standard blood draw needle) under continuous ultrasound monitoring.",
      "Sampling completed within 3 to 5 minutes; total procedure duration under 20 minutes."
    ],
    aftercareNotes: "Apply an ice pack to the front of the neck for 15 minutes post-procedure. Minor tenderness can be managed with Tylenol (acetaminophen). You may resume driving and normal light daily activities immediately.",
    lastReviewed: "2025-01-20",
    author: "Dr. Ameena Patel, MD, FACE",
    citations: [
      {
        title: "Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Nodules",
        publication: "Thyroid",
        year: 2016,
        doiUrl: "https://doi.org/10.1089/thy.2015.0020"
      }
    ],
    seo: {
      description: "In-office ultrasound-guided thyroid biopsy (FNA) in Austin, TX by Dr. Ameena Patel. Quick 20-minute procedure with local anesthesia.",
      keywords: ["thyroid fna biopsy austin", "ultrasound guided thyroid biopsy", "thyroid nodule biopsy cost", "austin endocrinologist biopsy"]
    },
    content: `
## Why Perform an In-Office Ultrasound-Guided Biopsy?

Fine Needle Aspiration (FNA) is the most accurate, minimally invasive method to evaluate whether a thyroid nodule is benign or malignant. Unlike hospital radiology centers where biopsies are performed by rotating technicians, Dr. Ameena Patel conducts both the diagnostic ultrasound assessment and needle aspiration directly in our Central Austin procedure suite.

### Molecular Cytology Analysis

Specimens are sent directly to specialized cytopathology laboratories. For indeterminate results (Bethesda Class III or IV), we utilize advanced molecular genomic panels (Afirma Gene Expression Classifier or ThyroSeq) to analyze DNA/RNA markers, preventing unnecessary diagnostic thyroid surgery in over 70% of benign indeterminate cases.
`
  },
  {
    slug: 'continuous-glucose-monitoring.md',
    title: "Continuous Glucose Monitor (CGM) Placement & Review",
    subtitle: "Real-Time Glycemic Tracking and Trend Pattern Analysis",
    summary: "In-clinic setup, sensor application, custom alarm configuration, and comprehensive 14-day data interpretation for Dexcom G7 and Freestyle Libre 3.",
    durationMinutes: 30,
    inOffice: true,
    preparationSteps: [
      "Download the Dexcom Clarity or Freestyle Libre app on your smartphone prior to arrival.",
      "Clean skin over the back of the upper arm or abdomen without applying lotion or body oil.",
      "Bring any existing blood glucose meter and recent laboratory HbA1c results."
    ],
    whatToExpect: [
      "Painless automatic applicator places micro-filament sensor beneath the skin.",
      "Pairing sensor to smartphone app and setting custom glucose high/low alerts.",
      "Detailed education on reading trend arrows (rapid rise, steady, rapid drop) rather than isolated single numbers.",
      "Reviewing 14-day Ambulatory Glucose Profile (AGP) report with Dr. Ameena during follow-up."
    ],
    aftercareNotes: "Sensors are fully waterproof for showering and swimming. If sensor adhesive loosens before day 10/14, overpatch covers are provided free of charge.",
    lastReviewed: "2025-01-25",
    author: "Dr. Ameena Patel, MD, FACE",
    citations: [
      {
        title: "Clinical Targets for Continuous Glucose Monitoring Data Interpretation",
        publication: "Diabetes Care",
        year: 2019,
        doiUrl: "https://doi.org/10.2337/dci19-0028"
      }
    ],
    seo: {
      description: "Continuous Glucose Monitor (CGM) setup and data interpretation in Austin, TX. Dexcom G7 and Freestyle Libre 3 expert placement.",
      keywords: ["cgm placement doctor austin", "dexcom g7 setup clinic", "freestyle libre doctor austin", "agp report analysis"]
    },
    content: `
## Transforming Diabetes Care Through Real-Time Glucose Visibility

Fingerstick blood glucose measurements only provide a brief single snapshot in time. A Continuous Glucose Monitor (CGM) measures interstitial glucose every 1 to 5 minutes, providing 288 data points daily along with directional trend arrows.

### Personalized Alarm Customization

In our Austin practice, we help you set personalized alarm thresholds that prevent "alert fatigue." We configure urgent low alarms, high alerts tuned to your specific meal schedules, and rate-of-fall warnings so you can act before low blood sugar strikes.
`
  },
  {
    slug: 'in-office-thyroid-ultrasound.md',
    title: "In-Office Diagnostic Thyroid Ultrasound",
    subtitle: "High-Resolution Sonographic Neck Mapping",
    summary: "Real-time neck sonogram performed directly by Dr. Ameena to evaluate thyroid size, nodule vascularity, cyst characteristics, and cervical lymph node chains.",
    durationMinutes: 15,
    inOffice: true,
    preparationSteps: [
      "No special diet or fasting required.",
      "Avoid wearing high collared shirts or bulky necklaces.",
      "Bring copies of any previous off-site neck ultrasounds or CT scans on CD or paper."
    ],
    whatToExpect: [
      "Warm acoustic gel applied to the front of the neck.",
      "High-frequency linear probe maneuvered gently across thyroid lobes and isthmus.",
      "Real-time image review on high-definition monitor during the scan.",
      "Immediate discussion of results and TI-RADS scoring before you leave the office."
    ],
    aftercareNotes: "Gel is wiped clean; no downtime or activity restrictions.",
    lastReviewed: "2025-01-22",
    author: "Dr. Ameena Patel, MD, FACE",
    citations: [
      {
        title: "ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee",
        publication: "Journal of the American College of Radiology",
        year: 2017,
        doiUrl: "https://doi.org/10.1016/j.jacr.2017.01.046"
      }
    ],
    seo: {
      description: "In-office high-resolution thyroid ultrasound in Austin, TX with Dr. Ameena Patel. Immediate sonogram interpretation and ACR TI-RADS scoring.",
      keywords: ["thyroid ultrasound austin", "neck sonogram endocrinologist", "ti-rads thyroid scan austin", "in office thyroid imaging"]
    },
    content: `
## Immediate Diagnostic Clarity Without Waiting

When a primary doctor detects a neck lump, waiting weeks for a hospital imaging center slot and another week for the radiologist report creates tremendous anxiety.

By integrating high-resolution ultrasound directly into our consult visits, Dr. Ameena conducts the scan, explains the sonographic features on-screen, and establishes a clear management plan in a single visit.
`
  },
  {
    slug: 'insulin-pump-optimization.md',
    title: "Insulin Pump Therapy Optimization",
    subtitle: "Algorithm Tuning for Omnipod 5 & Tandem Control-IQ",
    summary: "Advanced programming for automated insulin delivery systems. Precise adjustments of basal rates, insulin-to-carbohydrate ratios, ISF, and target blood sugars.",
    durationMinutes: 45,
    inOffice: true,
    preparationSteps: [
      "Upload insulin pump data to Glooko or Transmitter software 24 hours prior to visit.",
      "Bring current pump, spare pod/infusion set, and quick-acting glucose source to appointment.",
      "Log 3 days of detailed meal carbohydrate estimates and actual bolus times."
    ],
    whatToExpect: [
      "Comprehensive review of 14-day overlay graphs showing basal delivery vs automatic algorithm corrections.",
      "Identification of unannounced snacks, over-corrected lows, or basal mismatch during exercise.",
      "Fine-tuning automated target thresholds and active insulin time (AIT) settings.",
      "Updating pump profile and testing bolus calculator settings."
    ],
    aftercareNotes: "Monitor CGM trends over the next 5 to 7 days. Our clinic nursing team reviews remote data uploads to confirm stability.",
    lastReviewed: "2025-01-28",
    author: "Dr. Ameena Patel, MD, FACE",
    citations: [
      {
        title: "Management of Type 1 Diabetes with Automated Insulin Delivery Systems",
        publication: "Endocrine Reviews",
        year: 2022,
        doiUrl: "https://doi.org/10.1210/endrev/bnac012"
      }
    ],
    seo: {
      description: "Insulin pump tuning and optimization in Austin, TX. Expert programming for Omnipod 5 and Tandem Control-IQ by Dr. Ameena Patel.",
      keywords: ["omnipod 5 doctor austin", "tandem control iq tuning", "insulin pump specialist austin", "t1d pump endocrinologist"]
    },
    content: `
## Maximizing Your Automated Insulin Delivery System

Hybrid closed-loop pumps like Omnipod 5 and Tandem Control-IQ are incredible technological achievements, but their performance depends heavily on accurate baseline settings. Incorrect basal rates, improper Active Insulin Times, or aggressive carb ratios can cause the algorithm to fight your body, leading to rebound high or low blood sugars.

Dr. Ameena specializes in fine-tuning pump parameters to maximize your Time-in-Range while minimizing manual interventions.
`
  }
];

const outDir = path.join(process.cwd(), 'src/content/procedures');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

procedures.forEach(item => {
  const filePath = path.join(outDir, item.slug);
  const fileContent = `---
title: "${item.title}"
subtitle: "${item.subtitle}"
summary: "${item.summary}"
durationMinutes: ${item.durationMinutes}
inOffice: ${item.inOffice}
preparationSteps: ${JSON.stringify(item.preparationSteps, null, 2)}
whatToExpect: ${JSON.stringify(item.whatToExpect, null, 2)}
aftercareNotes: "${item.aftercareNotes}"
lastReviewed: "${item.lastReviewed}"
author: "${item.author}"
citations: ${JSON.stringify(item.citations, null, 2)}
seo: ${JSON.stringify(item.seo, null, 2)}
---

${item.content.trim()}
`;
  fs.writeFileSync(filePath, fileContent);
  console.log('Created procedure page:', item.slug);
});
