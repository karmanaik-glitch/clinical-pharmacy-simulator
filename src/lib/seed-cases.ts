import type { ClinicalCase } from './types';

export const seedCases: ClinicalCase[] = [
  // CASE 1: ENDOCRINE / NEPHROLOGY
  {
    id: 'seed-001',
    title: 'Uncontrolled Diabetes with Renal Decline',
    subject_area: 'endocrine',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Ramesh Kumar',
      age: 58,
      sex: 'M',
      ward: 'General Medicine',
      bed: '12',
      presenting_complaint: 'Severe pain in both knees due to osteoarthritis for the past month; complains of chest tightness and mild dyspnea for 2 days. Social History: 15 pack-year smoker. Compliance: Admits to missing Metformin doses due to dyspepsia.',
      pmh: ['Type 2 Diabetes Mellitus (10 years)', 'Hypertension (5 years)', 'Osteoarthritis (3 years)'],
      medications: [
        { drug: 'Metformin (Glycomet)', dose: '500 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Glibenclamide (Daonil)', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Amlodipine (Amlong)', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Pantoprazole (Pan-40)', dose: '40 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Diclofenac (Voveran)', dose: '50 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'IV Normal Saline', dose: '80 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: ['Penicillin (rash)'],
      labs: [
        { name: 'FBS', value: '210', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
        { name: 'HbA1c', value: '9.2', unit: '%', reference: '<7.0', is_abnormal: true },
        { name: 'SCr', value: '1.8', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
        { name: 'eGFR', value: '38', unit: 'mL/min', reference: '>60', is_abnormal: true },
        { name: 'K+', value: '4.8', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-001-1', case_id: 'seed-001',
        question_text: 'Which action should you take on Metformin given Ramesh\'s renal function (eGFR 38 mL/min)?',
        option_a: 'Continue unchanged',
        option_b: 'Hold / Temporarily Suspend',
        option_c: 'Discontinue',
        option_d: 'Modify Dose / Frequency',
        correct_option: 'D',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mar_action',
        target_drug: 'Metformin (Glycomet)',
        explanation_text: 'Metformin requires dose reduction when eGFR is 30-45 mL/min due to risk of renal accumulation and lactic acidosis. At eGFR 38, the dose should be reduced by 50% (to 250 mg BD or 500 mg OD). It is only discontinued completely if eGFR falls below 30 mL/min.',
        subject_reference: 'Pharmacotherapeutics II - Diabetes',
      },
      {
        id: 'q-001-2', case_id: 'seed-001',
        question_text: 'What is the primary monitoring concern with Glibenclamide in a patient with eGFR of 38 mL/min?',
        option_a: 'Hepatotoxicity',
        option_b: 'Hypoglycaemia',
        option_c: 'Peripheral oedema',
        option_d: 'Constipation',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Glibenclamide (a sulphonylurea) has active metabolites that accumulate in renal impairment, significantly increasing hypoglycaemia risk. In CKD Stage 3b (eGFR 30-44), switching to glipizide or gliclazide (hepatically cleared) is preferred. Blood glucose monitoring frequency should be increased.',
        subject_reference: 'Pharmacotherapeutics II - Diabetes',
      },
      {
        id: 'q-001-5', case_id: 'seed-001',
        question_text: 'Ramesh has been self-administering Diclofenac 50mg BD for right knee osteoarthritis pain. What is the clinical pharmacist recommendation regarding this medication?',
        option_a: 'Continue Diclofenac as it is effective for pain',
        option_b: 'Discontinue Diclofenac due to severe risk of nephrotoxicity in CKD (renal prostaglandin inhibition) and switch to oral Paracetamol 650mg TDS PRN',
        option_c: 'Increase Diclofenac to 75mg BD to treat knee pain aggressively',
        option_d: 'Switch to Ibuprofen 400mg TDS',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mar_action',
        target_drug: 'Diclofenac (Voveran)',
        explanation_text: 'NSAIDs (Diclofenac) block cyclooxygenase (COX) enzymes, reducing renal prostaglandin synthesis. Prostaglandins are critical to maintaining afferent arteriolar vasodilation. In a patient with renal decline (eGFR 38), NSAID use causes afferent vasoconstriction, precipitously dropping GFR and triggering acute-on-chronic kidney injury. Recommending discontinuation and switching to Paracetamol is a key pharmacist duty.',
        subject_reference: 'Pharmacotherapeutics II - Drug Safety',
      },
      {
        id: 'q-001-6', case_id: 'seed-001',
        question_text: 'What is the risk of keeping the patient on both Diclofenac and an ACE inhibitor if they develop renal decline?',
        option_a: 'Increased liver enzymes',
        option_b: 'Acute Kidney Injury (Triple Whammy effect)',
        option_c: 'Hypokalemia',
        option_d: 'Tachycardia',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'NSAIDs (Diclofenac) constrict the afferent arteriole, while ACE inhibitors dilate the efferent arteriole. Together, they severely drop glomerular filtration pressure, leading to acute kidney injury, especially when the patient is already renally compromised.',
        subject_reference: 'Pharmacotherapeutics II - Drug Interactions',
      },
    ],
    phases: [
      {
        id: 'seed-001-phase-1',
        title: 'Day 1: Ward Round Admission',
        description: 'Mr. Ramesh Kumar is admitted to the general medicine ward with uncontrolled hyperglycemia and secondary chest pain. Review his baseline profile, labs, and active chart.',
        patient_snapshot: {
          name: 'Ramesh Kumar',
          age: 58,
          sex: 'M',
          ward: 'General Medicine',
          bed: '12',
          presenting_complaint: 'Chest pain, breathlessness for 2 days. Worsening knee pain.',
          pmh: ['T2DM (10 years)', 'Hypertension (5 years)'],
          medications: [
            { drug: 'Metformin (Glycomet)', dose: '500 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Glibenclamide (Daonil)', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Amlodipine (Amlong)', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pantoprazole (Pan-40)', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Diclofenac (Voveran)', dose: '50 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'IV Normal Saline', dose: '80 mL/h', frequency: 'Continuous', route: 'IV' },
          ],
          allergies: ['Penicillin (rash)'],
          labs: [
            { name: 'FBS', value: '210', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
            { name: 'HbA1c', value: '9.2', unit: '%', reference: '<7.0', is_abnormal: true },
            { name: 'SCr', value: '1.8', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'eGFR', value: '38', unit: 'mL/min', reference: '>60', is_abnormal: true },
            { name: 'K+', value: '4.8', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: false },
          ],
        },
        questions: [
          {
            id: 'q-001-1', case_id: 'seed-001',
            question_text: 'Which action should you take on Metformin given Ramesh\'s renal function (eGFR 38 mL/min)?',
            option_a: 'Continue unchanged',
            option_b: 'Hold / Temporarily Suspend',
            option_c: 'Discontinue',
            option_d: 'Modify Dose / Frequency',
            correct_option: 'D',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'Metformin (Glycomet)',
            explanation_text: 'Metformin requires dose reduction when eGFR is 30-45 mL/min due to risk of renal accumulation and lactic acidosis. At eGFR 38, the dose should be reduced by 50% (to 250 mg BD or 500 mg OD). It is only discontinued completely if eGFR falls below 30 mL/min.',
            subject_reference: 'Pharmacotherapeutics II - Diabetes',
          },
          {
            id: 'q-001-2', case_id: 'seed-001',
            question_text: 'What is the primary monitoring concern with Glibenclamide in a patient with eGFR of 38 mL/min?',
            option_a: 'Hepatotoxicity',
            option_b: 'Hypoglycaemia',
            option_c: 'Peripheral oedema',
            option_d: 'Constipation',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Glibenclamide (a sulphonylurea) has active metabolites that accumulate in renal impairment, significantly increasing hypoglycaemia risk. In CKD Stage 3b (eGFR 30-44), switching to glipizide or gliclazide (hepatically cleared) is preferred. Blood glucose monitoring frequency should be increased.',
            subject_reference: 'Pharmacotherapeutics II - Diabetes',
          },
          {
            id: 'q-001-5', case_id: 'seed-001',
            question_text: 'Ramesh has been self-administering Diclofenac 50mg BD for right knee osteoarthritis pain. What is the clinical pharmacist recommendation regarding this medication?',
            option_a: 'Continue Diclofenac as it is effective for pain',
            option_b: 'Discontinue Diclofenac due to severe risk of nephrotoxicity in CKD (renal prostaglandin inhibition) and switch to oral Paracetamol 650mg TDS PRN',
            option_c: 'Increase Diclofenac to 75mg BD to treat knee pain aggressively',
            option_d: 'Switch to Ibuprofen 400mg TDS',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'Diclofenac (Voveran)',
            explanation_text: 'NSAIDs (Diclofenac) block cyclooxygenase (COX) enzymes, reducing renal prostaglandin synthesis. Prostaglandins are critical to maintaining afferent arteriolar vasodilation. In a patient with renal decline (eGFR 38), NSAID use causes afferent vasoconstriction, precipitously dropping GFR and triggering acute-on-chronic kidney injury. Recommending discontinuation and switching to Paracetamol is a key pharmacist duty.',
            subject_reference: 'Pharmacotherapeutics II - Drug Safety',
          },
        ]
      },
      {
        id: 'seed-001-phase-2',
        title: 'Day 3: Clinical Deterioration & Therapy Change',
        description: 'To control blood pressure, the attending team starts Ramesh on Enalapril 5mg OD. Two days later, he complains of a persistent dry cough. Labs reveal worsening renal parameters and hyperkalemia. He is still taking Diclofenac.',
        patient_snapshot: {
          name: 'Ramesh Kumar',
          age: 58,
          sex: 'M',
          ward: 'General Medicine',
          bed: '12',
          presenting_complaint: 'Dry persistent cough, fatigue, mild muscle weakness',
          pmh: ['T2DM (10 years)', 'Hypertension (5 years)'],
          medications: [
            { drug: 'Metformin (Glycomet)', dose: '250 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Glibenclamide (Daonil)', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Amlodipine (Amlong)', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Enalapril', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pantoprazole (Pan-40)', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Diclofenac (Voveran)', dose: '50 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'IV Normal Saline', dose: '80 mL/h', frequency: 'Continuous', route: 'IV' },
          ],
          allergies: ['Penicillin (rash)'],
          labs: [
            { name: 'FBS', value: '145', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
            { name: 'SCr', value: '2.3', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'eGFR', value: '28', unit: 'mL/min', reference: '>60', is_abnormal: true },
            { name: 'K+', value: '5.4', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
          ],
        },
        questions: [ {
        id: 'q-001-6', case_id: 'seed-001',
        question_text: 'What is the risk of keeping the patient on both Diclofenac and an ACE inhibitor if they develop renal decline?',
        option_a: 'Increased liver enzymes',
        option_b: 'Acute Kidney Injury (Triple Whammy effect)',
        option_c: 'Hypokalemia',
        option_d: 'Tachycardia',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'NSAIDs (Diclofenac) constrict the afferent arteriole, while ACE inhibitors dilate the efferent arteriole. Together, they severely drop glomerular filtration pressure, leading to acute kidney injury, especially when the patient is already renally compromised.',
        subject_reference: 'Pharmacotherapeutics II - Drug Interactions',
      },
          {
            id: 'q-001-3', case_id: 'seed-001',
            question_text: 'The patient developed a dry persistent cough after starting Enalapril. What is the most appropriate action to take on Enalapril?',
            option_a: 'Continue unchanged',
            option_b: 'Hold / Temporarily Suspend',
            option_c: 'Discontinue',
            option_d: 'Modify Dose / Frequency',
            correct_option: 'C',
            pci_duty_category: 'adr_detection',
            question_type: 'mar_action',
            target_drug: 'Enalapril',
            explanation_text: 'ACE inhibitor-induced cough occurs in 5-20% of patients due to bradykinin accumulation and is a class effect — dose reduction will not help. The appropriate intervention is to discontinue the ACEi (Enalapril) and recommend switching to an ARB (e.g., Losartan).',
            subject_reference: 'Pharmacotherapeutics I - Cardiovascular',
          },
          {
            id: 'q-001-4', case_id: 'seed-001',
            question_text: 'Given the rise in Serum Creatinine (to 2.3 mg/dL) and Potassium (to 5.4 mEq/L), what should be the monitoring frequency?',
            option_a: 'Discharge patient; no further labs needed',
            option_b: 'Check serum potassium and creatinine within 3-5 days',
            option_c: 'Repeat CBC weekly',
            option_d: 'Monitor thyroid panel tomorrow',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'ARBs and ACE inhibitors can cause hyperkalaemia and worsen renal function. A rise in creatinine up to 30% is acceptable. However, since the patient\'s eGFR is now 28 mL/min and K+ is elevated, close monitoring within 3-5 days is mandatory. Metformin must also now be discontinued as eGFR has fallen below 30.',
            subject_reference: 'Pharmacotherapeutics I - Cardiovascular',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ADA Standards of Care in Diabetes (2024)',
          organization: 'ADA',
          text: 'Metformin dosing must be adjusted based on renal function. Do not initiate Metformin if eGFR is <45 mL/min. If eGFR is 30-44 mL/min, evaluate the risk-benefit and consider a 50% dose reduction (max 1000mg/day). Discontinue Metformin if eGFR falls below 30 mL/min due to the increased risk of metformin-associated lactic acidosis (MALA).'
        },
        {
          title: 'KDIGO Clinical Practice Guideline for Diabetes Management in CKD (2023)',
          organization: 'KDIGO',
          text: 'RAAS blockade (ACEi or ARB) is first-line therapy for patients with diabetes, hypertension, and albuminuria. Check serum creatinine and potassium within 1-2 weeks of initiation. A rise in creatinine of up to 30% from baseline is expected and acceptable; discontinue or reduce dose only if creatinine increases >30% or potassium rises >5.5 mEq/L.'
        }
      ],
      calculations: [
        {
          name: 'Cockcroft-Gault Creatinine Clearance',
          formula: 'CrCl (mL/min) = [ (140 - Age) × Weight (kg) ] / [ 72 × Serum Creatinine (mg/dL) ]  (× 0.85 if Female)',
          explanation: 'This equation estimates renal function to guide drug dosing. Crucially, in obese patients, Ideal Body Weight (IBW) or Adjusted Body Weight should be used instead of actual weight to prevent drug overdosing, especially for highly hydrophilic drugs like aminoglycosides.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Metformin need adjustments in renal decline?',
          rationale: 'Metformin is renally cleared by glomerular filtration and active tubular secretion. In renal impairment, metformin accumulates in the body. High levels can inhibit mitochondrial respiration, leading to increased anaerobic glycolysis, excess lactic acid production, and life-threatening Metformin-Associated Lactic Acidosis (MALA).'
        },
        {
          question_text: 'Why switch from Enalapril to Losartan instead of reducing the dose?',
          rationale: 'Dry cough is a class-wide Adverse Drug Reaction of ACE inhibitors. It is caused by the accumulation of bradykinin and substance P in the respiratory tract due to ACE inhibition. It is not dose-dependent. Switching to an ARB (like Losartan) resolves the cough because ARBs block angiotensin receptors without inhibiting the kinase enzyme that degrades bradykinin.'
        }
      ],
      mnemonics: [
        {
          name: 'ACEi Side Effects (CAPTOPRIL)',
          concept: 'Remembering ACE inhibitor adverse effects',
          bullets: [
            'C — Cough (dry, persistent)',
            'A — Angioedema (life-threatening airway swelling)',
            'P — Potassium elevation (hyperkalemia)',
            'T — Taste alteration (metallic taste)',
            'O — Orthostatic hypotension (first-dose effect)',
            'P — Pregnancy contraindication (teratogenicity)',
            'R — Renal function decline (acute kidney injury)',
            'I — Indomethacin/NSAID interaction (blunts antihypertensive effect)',
            'L — Leukopenia (rare neutropenia risk)'
          ]
        }
      ]
    },
    tags: ['diabetes', 'CKD', 'renal impairment', 'metformin', 'sulphonylurea', 'triple-whammy'],
    source: 'seed',
    created_at: '2025-01-01T00:00:00Z',
  },

  // CASE 2: INFECTIOUS DISEASES
  {
    id: 'seed-002',
    title: 'Pulmonary TB — DOTS Drug Interactions',
    subject_area: 'infectious_diseases',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Lakshmi Devi',
      age: 45,
      sex: 'F',
      ward: 'Pulmonology',
      bed: '8',
      presenting_complaint: 'Chronic cough with blood-streaked sputum for 3 months, night sweats, and unintentional weight loss of 8 kg. Also reports fatigue and cold intolerance. Home medications include Levothyroxine 100 mcg daily for hypothyroidism (diagnosed 5 years ago). Compliance: Takes all medications together with breakfast.',
      pmh: ['Pulmonary Tuberculosis (newly diagnosed)', 'Hypothyroidism (5 years)'],
      medications: [
        { drug: 'Isoniazid (INH)', dose: '300 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Rifampicin', dose: '450 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Pyrazinamide', dose: '1500 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Ethambutol', dose: '800 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Pyridoxine (Vitamin B6)', dose: '40 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Levothyroxine', dose: '100 mcg', frequency: 'OD', route: 'Oral' },
        { drug: 'Ferrous Sulfate', dose: '325 mg', frequency: 'OD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Sputum AFB', value: 'Positive (2+)', unit: '', reference: 'Negative', is_abnormal: true },
        { name: 'TSH', value: '12.5', unit: 'mIU/L', reference: '0.5-4.5', is_abnormal: true },
        { name: 'ALT', value: '35', unit: 'U/L', reference: '7-56', is_abnormal: false },
        { name: 'AST', value: '30', unit: 'U/L', reference: '10-40', is_abnormal: false },
        { name: 'Hb', value: '9.8', unit: 'g/dL', reference: '12-16', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-002-1', case_id: 'seed-002',
        question_text: 'Lakshmi\'s TSH is elevated at 12.5 mIU/L despite being on Levothyroxine 100 mcg daily. She reports taking all her medications together with breakfast. What is the most likely cause and pharmacist recommendation?',
        option_a: 'Her Levothyroxine dose is too low; increase to 200 mcg',
        option_b: 'Rifampicin increases Levothyroxine metabolism via CYP3A4 induction AND concurrent iron/food impairs absorption. Counsel to take Levothyroxine on an empty stomach 30-60 minutes before other medications, and check if TSH dose adjustment is needed.',
        option_c: 'Isoniazid inhibits Levothyroxine absorption',
        option_d: 'The TSH level is within normal range',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'Rifampicin is a potent CYP3A4 inducer that accelerates hepatic metabolism of Levothyroxine, reducing its serum levels. Additionally, Ferrous Sulfate chelates Levothyroxine in the gut if taken together, further reducing absorption. Levothyroxine must be taken on an empty stomach, 30-60 minutes before breakfast and at least 4 hours apart from iron supplements.',
        subject_reference: 'Pharmacotherapeutics - Drug Interactions',
      },
      {
        id: 'q-002-2', case_id: 'seed-002',
        question_text: 'Why is Pyridoxine (Vitamin B6) co-prescribed with Isoniazid?',
        option_a: 'To enhance the bactericidal activity of INH',
        option_b: 'To prevent Isoniazid-induced peripheral neuropathy by replenishing Pyridoxine depleted by INH',
        option_c: 'To reduce hepatotoxicity of Rifampicin',
        option_d: 'To improve iron absorption',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Isoniazid inhibits Pyridoxine Phosphokinase and also increases renal excretion of Pyridoxine, leading to B6 deficiency and peripheral neuropathy (tingling, numbness). Supplementation with 10-50 mg/day of Pyridoxine prevents this.',
        subject_reference: 'Pharmacotherapeutics - TB Treatment',
      },
      {
        id: 'q-002-4', case_id: 'seed-002',
        question_text: 'What is the most important hepatotoxicity monitoring parameter for this ATT regimen, and which drugs are most commonly implicated?',
        option_a: 'Monitor serum creatinine monthly; Ethambutol is the primary offender',
        option_b: 'Monitor ALT/AST at baseline, 2 weeks, and monthly; Isoniazid, Rifampicin, and Pyrazinamide are all hepatotoxic',
        option_c: 'Monitor CBC weekly; Rifampicin causes myelosuppression',
        option_d: 'No monitoring is needed for standard ATT',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'INH, Rifampicin, and Pyrazinamide are all hepatotoxic. LFTs (ALT/AST) should be checked at baseline, 2 weeks, and then monthly or with symptoms. If ALT rises to >3x ULN with symptoms or >5x ULN without symptoms, ATT must be stopped.',
        subject_reference: 'Pharmacotherapeutics - TB Treatment',
      },
      {
        id: 'q-002-5', case_id: 'seed-002',
        question_text: 'Which visual side effect must be specifically monitored in patients taking Ethambutol?',
        option_a: 'Yellow-green halos around lights',
        option_b: 'Optic neuritis causing red-green color blindness and decreased visual acuity',
        option_c: 'Cataracts',
        option_d: 'Macular degeneration',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'Ethambutol causes dose-dependent retrobulbar optic neuritis. Patients should have baseline visual acuity and color vision testing before starting therapy and be counseled to report any changes in vision immediately.',
        subject_reference: 'Pharmacotherapeutics - TB Treatment',
      },
    ],
    phases: [
      {
        id: 'seed-002-phase-1',
        title: 'Day 1: ATT Initiation',
        description: 'Lakshmi is newly started on HRZE therapy. Review the medication chart for drug interactions with her home Levothyroxine and iron supplement.',
        patient_snapshot: {
          name: 'Lakshmi Devi', age: 45, sex: 'F', ward: 'Pulmonology', bed: '8',
          presenting_complaint: 'Newly diagnosed pulmonary TB. Home meds: Levothyroxine, Ferrous Sulfate.',
          pmh: ['Pulmonary TB', 'Hypothyroidism'],
          medications: [
            { drug: 'Isoniazid', dose: '300 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Rifampicin', dose: '450 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Levothyroxine', dose: '100 mcg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ferrous Sulfate', dose: '325 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'TSH', value: '12.5', unit: 'mIU/L', reference: '0.5-4.5', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-002-1', case_id: 'seed-002',
            question_text: 'Lakshmi\'s TSH is elevated at 12.5 mIU/L despite being on Levothyroxine 100 mcg daily. She reports taking all her medications together with breakfast. What is the most likely cause and pharmacist recommendation?',
            option_a: 'Her Levothyroxine dose is too low; increase to 200 mcg',
            option_b: 'Rifampicin increases Levothyroxine metabolism AND concurrent iron/food impairs absorption. Counsel to separate administration.',
            option_c: 'Isoniazid inhibits Levothyroxine absorption',
            option_d: 'The TSH level is within normal range',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'Rifampicin induces CYP3A4 metabolism of Levothyroxine AND Ferrous Sulfate chelates it.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
          {
            id: 'q-002-2', case_id: 'seed-002',
            question_text: 'Why is Pyridoxine (Vitamin B6) co-prescribed with Isoniazid?',
            option_a: 'To enhance the bactericidal activity of INH',
            option_b: 'To prevent Isoniazid-induced peripheral neuropathy',
            option_c: 'To reduce hepatotoxicity',
            option_d: 'To improve iron absorption',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'INH depletes Pyridoxine, causing peripheral neuropathy.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          },
        ]
      },
      {
        id: 'seed-002-phase-2',
        title: 'Week 2: LFT Monitoring',
        description: 'Follow-up visit to monitor hepatotoxicity and visual function.',
        patient_snapshot: {
          name: 'Lakshmi Devi', age: 45, sex: 'F', ward: 'Pulmonology', bed: '8',
          presenting_complaint: 'Routine follow-up on ATT.',
          pmh: ['Pulmonary TB', 'Hypothyroidism'],
          medications: [
            { drug: 'Isoniazid', dose: '300 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Rifampicin', dose: '450 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pyrazinamide', dose: '1500 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ethambutol', dose: '800 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'ALT', value: '35', unit: 'U/L', reference: '7-56', is_abnormal: false },
          ],
        },
        questions: [
          {
            id: 'q-002-4', case_id: 'seed-002',
            question_text: 'What is the most important hepatotoxicity monitoring parameter for ATT?',
            option_a: 'Serum creatinine monthly',
            option_b: 'ALT/AST at baseline, 2 weeks, and monthly; INH, Rifampicin, and PZA are hepatotoxic',
            option_c: 'CBC weekly',
            option_d: 'No monitoring needed',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'INH, Rifampicin, and PZA are all hepatotoxic.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          },
          {
            id: 'q-002-5', case_id: 'seed-002',
            question_text: 'Which visual side effect must be monitored with Ethambutol?',
            option_a: 'Yellow-green halos',
            option_b: 'Optic neuritis causing red-green color blindness',
            option_c: 'Cataracts',
            option_d: 'Macular degeneration',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Ethambutol causes dose-dependent retrobulbar optic neuritis.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'NTEP Tuberculosis Treatment Guidelines (2024)',
          organization: 'NTEP',
          text: 'First-line TB therapy comprises 2 months of HRZE (Intensive Phase) followed by 4 months of HRE (Continuation Phase). Fixed Dose Combinations (FDCs) based on patient weight bands should be used. Sputum analysis is repeated at completion of the intensive phase.'
        },
        {
          title: 'ILAE Antiepileptic Dosing and TDM Guidelines',
          organization: 'ILAE',
          text: 'Phenytoin has a narrow therapeutic index (target total serum levels 10-20 mcg/mL). Since it exhibits non-linear (Michaelis-Menten) kinetics, small changes in bioavailability or metabolism can lead to disproportionate changes in serum concentration.'
        }
      ],
      calculations: [
        {
          name: 'Phenytoin Correction for Hypoalbuminemia',
          formula: 'Corrected Phenytoin = Measured Phenytoin / [ (0.2 × Albumin) + 0.1 ]',
          explanation: 'Phenytoin is 90% protein-bound. In patients with low albumin, the free (active) fraction of phenytoin increases. Standard TDM measures total phenytoin, which can appear normal even if the active fraction is toxic. This calculation adjusts the value for a true clinical reading.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Rifampicin affect Phenytoin levels?',
          rationale: 'Rifampicin is a highly potent inducer of hepatic cytochrome P450 enzymes (specifically CYP2C9 and CYP3A4). Since Phenytoin is metabolized primarily by CYP2C9, co-administration of Rifampicin increases phenytoin clearance, dropping serum levels below the therapeutic window and risking status epilepticus.'
        }
      ],
      mnemonics: [
        {
          name: 'First-Line ATT Adverse Profiles (R-I-P-E)',
          concept: 'Remembering first-line tuberculosis drugs and their toxicities',
          bullets: [
            'R — Rifampicin: Red/orange discoloration of body fluids, RNA polymerase inhibitor.',
            'I — Isoniazid: Injury to nerves (peripheral neuropathy - prevent with Pyridoxine/B6), Insufficient B6.',
            'P — Pyrazinamide: Pain in joints (hyperuricemia/gout), Portal hepatotoxicity.',
            'E — Ethambutol: Eye damage (retrobulbar optic neuritis, loss of red-green color discrimination).'
          ]
        }
      ]
    },
    tags: ['tuberculosis', 'NTEP', 'dots', 'phenytoin', 'interaction', 'levothyroxine'],
    source: 'seed',
    created_at: '2025-01-02T00:00:00Z',
  },

  // CASE 3: CLINICAL TOXICOLOGY
  {
    id: 'seed-003',
    title: 'OPC Poisoning — Emergency Management',
    subject_area: 'clinical_toxicology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Venkatesh R',
      age: 35,
      sex: 'M',
      ward: 'Emergency / Toxicology ICU',
      bed: 'ER-02',
      presenting_complaint: 'Brought in by family after intentional ingestion of an organophosphate insecticide (Chlorpyrifos) approximately 1 hour ago. Profuse sweating, salivation, lacrimation, miosis, bradycardia, and muscle fasciculations. Garlic-like odor on breath.',
      pmh: [],
      medications: [
        { drug: 'Atropine IV', dose: '2 mg', frequency: 'Q5min until atropinization', route: 'IV Bolus' },
        { drug: 'Pralidoxime (2-PAM)', dose: '1 g', frequency: 'Loading then 500 mg/hr', route: 'IV Infusion' },
        { drug: 'IV Normal Saline', dose: '100 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Serum Cholinesterase', value: '450', unit: 'U/L', reference: '5320-12920', is_abnormal: true },
        { name: 'HR', value: '48', unit: 'bpm', reference: '60-100', is_abnormal: true },
        { name: 'SpO2', value: '88%', unit: '', reference: '>95%', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-003-1', case_id: 'seed-003',
        question_text: 'What are the clinical signs of adequate atropinization that the pharmacist should monitor for?',
        option_a: 'Miosis, bradycardia, and diaphoresis',
        option_b: 'Clear lungs (dry secretions), heart rate 80-100 bpm, dry axillae, and pupil dilation',
        option_c: 'Hypertension and tachycardia above 120 bpm',
        option_d: 'Complete cessation of all muscle fasciculations',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'The endpoint of atropinization is drying of bronchial secretions (clear lungs), heart rate of 80-100 bpm, and dry skin. Atropine does NOT reverse nicotinic effects (fasciculations, paralysis) — only muscarinic effects.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-003-2', case_id: 'seed-003',
        question_text: 'Why must Pralidoxime (2-PAM) be administered within the first 24-48 hours of OPC poisoning?',
        option_a: 'It directly binds acetylcholine and prevents receptor overstimulation',
        option_b: 'After 24-48 hours, the OP-AChE bond undergoes "aging" (irreversible phosphorylation), making 2-PAM unable to reactivate the enzyme',
        option_c: 'It loses its chemical potency after 24 hours in solution',
        option_d: 'It is renally cleared too quickly after 48 hours',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'Pralidoxime works by nucleophilically attacking the phosphorus atom on the OP-AChE complex, cleaving the bond and reactivating AChE. Once the OP-AChE bond "ages" (loses an alkyl group), it becomes irreversible, and 2-PAM is ineffective. This aging occurs over 24-48 hours depending on the specific OPC.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-003-3', case_id: 'seed-003',
        question_text: 'The treating physician asks if Ondansetron can be given for the patient\'s nausea and vomiting. What is your recommendation?',
        option_a: 'Give Ondansetron 4 mg IV stat — it is the safest antiemetic',
        option_b: 'Use Metoclopramide instead as it is a prokinetic',
        option_c: 'Ondansetron is safe; however, avoid Metoclopramide as it has prokinetic (cholinergic) properties which could worsen the cholinergic crisis',
        option_d: 'Give Domperidone orally',
        correct_option: 'C',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Ondansetron (5-HT3 antagonist) is safe in OPC poisoning. Metoclopramide has cholinergic (prokinetic) properties that could exacerbate the existing cholinergic excess in OPC poisoning.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-003-5', case_id: 'seed-003',
        question_text: 'Which of the following is an absolute contraindication in organophosphate poisoning?',
        option_a: 'IV Normal Saline',
        option_b: 'Morphine or Succinylcholine',
        option_c: 'Paracetamol for headache',
        option_d: 'Oxygen supplementation',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Morphine causes respiratory depression (dangerous with secretion overload). Succinylcholine is metabolized by pseudocholinesterase (already inhibited by OPC) → prolonged apnea. Both are absolutely contraindicated.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
    ],
    phases: [
      {
        id: 'seed-003-phase-1',
        title: 'Hour 1: ER Resuscitation',
        description: 'Venkatesh arrives in cholinergic crisis. Review the atropinization protocol and Pralidoxime timing.',
        patient_snapshot: {
          name: 'Venkatesh R', age: 35, sex: 'M', ward: 'Emergency', bed: 'ER-02',
          presenting_complaint: 'OPC poisoning — cholinergic crisis.',
          pmh: [],
          medications: [
            { drug: 'Atropine IV', dose: '2 mg', frequency: 'Q5min', route: 'IV' },
            { drug: 'Pralidoxime (2-PAM)', dose: '1 g', frequency: 'Loading', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Serum Cholinesterase', value: '450', unit: 'U/L', reference: '5320-12920', is_abnormal: true },
            { name: 'HR', value: '48', unit: 'bpm', reference: '60-100', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-003-1', case_id: 'seed-003',
            question_text: 'What are the clinical signs of adequate atropinization?',
            option_a: 'Miosis and bradycardia',
            option_b: 'Clear lungs, HR 80-100 bpm, dry axillae, pupil dilation',
            option_c: 'Hypertension and tachycardia above 120',
            option_d: 'Cessation of all muscle fasciculations',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Endpoints of atropinization: dry secretions, HR 80-100, dry skin.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-003-2', case_id: 'seed-003',
            question_text: 'Why must Pralidoxime be given within 24-48 hours?',
            option_a: 'It directly binds acetylcholine',
            option_b: 'After aging, the OP-AChE bond becomes irreversible',
            option_c: 'It loses potency in solution',
            option_d: 'It is renally cleared too quickly',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Aging makes the bond irreversible; 2-PAM cannot reactivate aged AChE.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-003-3', case_id: 'seed-003',
            question_text: 'Can Ondansetron be given for nausea in OPC poisoning?',
            option_a: 'Ondansetron is the safest antiemetic',
            option_b: 'Use Metoclopramide instead',
            option_c: 'Ondansetron is safe; avoid Metoclopramide (prokinetic/cholinergic worsening)',
            option_d: 'Give Domperidone orally',
            correct_option: 'C',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Metoclopramide has prokinetic (cholinergic) properties — contraindicated.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-003-5', case_id: 'seed-003',
            question_text: 'Which is absolutely contraindicated in OPC poisoning?',
            option_a: 'IV Normal Saline',
            option_b: 'Morphine or Succinylcholine',
            option_c: 'Paracetamol',
            option_d: 'Oxygen supplementation',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Morphine causes respiratory depression; Succinylcholine causes prolonged apnea.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'WHO Guidelines for the Management of Organophosphate Poisoning',
          organization: 'WHO',
          text: 'Step 1: Ensure safety of healthcare workers — use gloves, gowns, and remove patient clothing. Step 2: Airway management (early intubation if SpO2 <90% or GCS <8). Step 3: Atropine is the cornerstone antidote — give 1.8-3 mg IV bolus, double the dose every 5 minutes until full atropinisation (cessation of bronchorrhoea and bronchospasm, HR >80 bpm, pupils midsize). Doses up to 100+ mg may be required. Step 4: Pralidoxime (PAM) 1-2 g IV over 15-30 minutes, followed by infusion at 200-500 mg/h for 24-48 hours — most effective within the first 24 hours before AChE undergoes irreversible "aging". Step 5: Diazepam 10-20 mg IV for seizures and hyperstimulation of nicotinic receptors causing fasciculations. Step 6: Activated charcoal (50g via NG) within 1 hour of ingestion if airway is protected. Step 7: Monitor serum cholinesterase activity, ABG, and ECG continuously.'
        },
        {
          title: 'Toxicology Rapid Sequence Intubation in OPC Poisoning',
          organization: 'Emergency Toxicology Consensus',
          text: 'Succinylcholine, a depolarizing neuromuscular blocker, is degraded by pseudocholinesterase (plasma cholinesterase). Since OPC inhibits cholinesterases, succinylcholine produces dangerously prolonged neuromuscular blockade (from 3-5 minutes up to 60+ minutes), causing prolonged apnoea. Non-depolarizing agents (Rocuronium 1 mg/kg, Vecuronium 0.1 mg/kg) must be used for RSI. Note: Atropine does NOT reverse neuromuscular blockade — it only blocks muscarinic receptors.'
        },
        {
          title: 'Target Endpoints of Atropinisation in OPC Poisoning',
          organization: 'WHO / ICU Clinical Protocols',
          text: 'Adequate atropinisation is confirmed when ALL of the following are present: (1) Cessation of secretions — dry mucous membranes (mouth, trachea) with resolution of bronchorrhoea, (2) Heart rate >80 bpm, (3) Systolic BP >80 mmHg, (4) Pupils mid-size to dilated. Do NOT target pupil dilation alone — it is not a reliable endpoint. Avoid over-atropinisation (tachycardia >140 bpm, agitation, fever, urinary retention, ileus) as these signs indicate toxicity.'
        }
      ],
      calculations: [
        {
          name: 'Anion Gap Calculation',
          formula: 'Anion Gap = Na+ - (Cl- + HCO3-); Reference: 8-12 mEq/L',
          explanation: 'In OPC poisoning, severe bronchospasm and respiratory depression lead to hypoxia and lactic acidosis, raising the anion gap. A high-AG metabolic acidosis (>12 mEq/L) in a toxicology patient suggests significant metabolic compromise. ABG monitoring guides ventilatory support and bicarbonate therapy decisions.'
        },
        {
          name: 'Serum Cholinesterase Activity as % of Normal',
          formula: 'Activity (%) = (Patient AChE / Reference AChE) × 100. Mild: 50-75%. Moderate: 20-50%. Severe: <20%.',
          explanation: 'Ravi\'s serum cholinesterase is 1200 U/L vs. reference of 5320-12920 U/L, giving approximately 10-14% activity — indicating severe poisoning. Serial cholinesterase measurements guide Pralidoxime therapy duration. Activity recovering toward 50% of normal suggests effective oxime reactivation.'
        }
      ],
      reasoning: [
        {
          question_text: 'What is the molecular mechanism of Organophosphate toxicity?',
          rationale: 'Organophosphates covalently phosphorylate the active serine residue (Ser-203) at the catalytic site of Acetylcholinesterase (AChE), irreversibly blocking it. This prevents hydrolysis of acetylcholine (ACh). ACh accumulates at all cholinergic synapses: (1) Muscarinic (glands, smooth muscle, heart) → SLUDGE/BBB symptoms; (2) Nicotinic (neuromuscular junction, autonomic ganglia) → muscle fasciculations, paralysis, tachycardia; (3) CNS (brain ACh receptors) → seizures, coma. The hallmark feature is that symptoms occur via EXCESS ACh, not receptor blockade.'
        },
        {
          question_text: 'Why must Pralidoxime (PAM) be given early — before "aging"?',
          rationale: 'Pralidoxime reactivates AChE by displacing the phosphate group from the serine active site (nucleophilic substitution). However, over time (hours to days, depending on the OP compound), the phosphorylated enzyme undergoes irreversible dealkylation called "aging" — where the OP-serine bond becomes permanently stabilized. Once aging occurs, PAM cannot reactivate the enzyme. Early administration (within 24-48 hours) is critical. Short-chain alkyl OPs (e.g., dichlorvos) age faster than longer-chain ones (e.g., chlorpyrifos).'
        },
        {
          question_text: 'Why is Atropine given before Pralidoxime?',
          rationale: 'Atropine blocks muscarinic receptors throughout the body, immediately reversing life-threatening bronchospasm, bronchorrhoea, and bradycardia, which are the most immediately fatal manifestations. Pralidoxime takes 15-30 minutes to prepare and infuse and acts slowly. The sequence is: Atropine (life-saving FIRST) → Pralidoxime (enzyme reactivation SECOND). Atropine has NO effect on nicotinic symptoms (muscle paralysis, fasciculations) — these require Pralidoxime and supportive ventilation.'
        }
      ],
      mnemonics: [
        {
          name: 'Cholinergic Toxidrome (DUMBBELS)',
          concept: 'Remembering the symptoms of muscarinic overstimulation in OPC poisoning',
          bullets: [
            'D — Diarrhea (explosive, uncontrolled)',
            'U — Urination (incontinence from bladder smooth muscle stimulation)',
            'M — Miosis (pinpoint pupils — hallmark of OPC poisoning)',
            'B — Bradycardia (SA node suppression via M2 receptors)',
            'B — Bronchospasm + Bronchorrhoea (life-threatening respiratory failure)',
            'E — Emesis (vomiting from GI hypermotility)',
            'L — Lacrimation (excessive tearing)',
            'S — Salivation (hypersalivation, drooling) + Sweating (diaphoresis) — NOTE: Atropine reverses ALL of these'
          ]
        }
      ]
    },
    tags: ['OPC', 'toxicology', 'atropine', 'ondansetron', 'succinylcholine'],
    source: 'seed',
    created_at: '2025-01-03T00:00:00Z',
  },

  // CASE 4: CARDIOVASCULAR / TDM
  {
    id: 'seed-004',
    title: 'Acute Heart Failure & Digoxin Toxicity',
    subject_area: 'cardiovascular',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Suresh Menon',
      age: 72,
      sex: 'M',
      ward: 'Cardiology / CCU',
      bed: 'CCU-06',
      presenting_complaint: 'Worsening dyspnea on exertion, orthopnea (3-pillow), bilateral pedal edema, and weight gain of 4 kg over 2 weeks. Currently experiencing nausea, anorexia, and visual disturbances (yellow-green halos around lights).',
      pmh: ['Chronic Heart Failure (HFrEF, EF 30%)', 'Atrial Fibrillation', 'Type 2 DM', 'CKD Stage 3b (eGFR 35)'],
      medications: [
        { drug: 'Digoxin', dose: '0.25 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Furosemide', dose: '40 mg', frequency: 'BD', route: 'IV' },
        { drug: 'Enalapril', dose: '5 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Metoprolol Succinate', dose: '25 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Spironolactone', dose: '25 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'IV Dextrose 5% + KCl 20 mEq', dose: '500 mL', frequency: 'Over 4 hours', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Digoxin Level', value: '3.2', unit: 'ng/mL', reference: '0.5-2.0', is_abnormal: true },
        { name: 'K+', value: '3.0', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
        { name: 'SCr', value: '2.0', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
        { name: 'eGFR', value: '35', unit: 'mL/min', reference: '>60', is_abnormal: true },
        { name: 'BNP', value: '1200', unit: 'pg/mL', reference: '<100', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-004-1', case_id: 'seed-004',
        question_text: 'Suresh presents with nausea, anorexia, and yellow-green halos. His serum Digoxin level is 3.2 ng/mL and K+ is 3.0 mEq/L. What is the pharmacist\'s assessment?',
        option_a: 'The digoxin level is therapeutic; continue current dose',
        option_b: 'Digoxin toxicity exacerbated by hypokalemia; hold Digoxin, correct K+ cautiously, and consider Digoxin Immune Fab if arrhythmias develop',
        option_c: 'Increase the Digoxin dose to control atrial fibrillation rate',
        option_d: 'Add Amiodarone for rate control',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Digoxin has a narrow therapeutic index (0.5-2.0 ng/mL). At 3.2 ng/mL with classic GI and visual symptoms, this is Digoxin toxicity. Hypokalemia (K+ 3.0, likely from Furosemide) amplifies Digoxin toxicity because Digoxin and K+ compete for the same binding site on the Na+/K+ ATPase. Low K+ = more Digoxin binding = more toxicity.',
        subject_reference: 'Pharmacotherapeutics - Cardiology',
      },
      {
        id: 'q-004-2', case_id: 'seed-004',
        question_text: 'Review the IV fluid order: "Dextrose 5% + KCl 20 mEq over 4 hours." Is this appropriate for a patient in acute decompensated heart failure?',
        option_a: 'Yes, Dextrose 5% is the standard fluid for heart failure patients',
        option_b: 'No — Dextrose 5% is hypotonic and provides free water that worsens fluid overload and hyponatremia. Use concentrated KCl in a small volume (e.g., 20 mEq in 100 mL NS via infusion pump)',
        option_c: 'Switch to Ringer\'s Lactate at 200 mL/h',
        option_d: 'Give KCl as a rapid IV push',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'In heart failure, free water administration (D5W) exacerbates volume overload and dilutional hyponatremia. KCl should be given in concentrated form in minimal volume. IV KCl rate must not exceed 10-20 mEq/hr through a peripheral line (40 mEq/hr via central line) with continuous cardiac monitoring.',
        subject_reference: 'Pharmacotherapeutics - Electrolyte Safety',
      },
      {
        id: 'q-004-3', case_id: 'seed-004',
        question_text: 'Given Suresh\'s eGFR of 35, what dose adjustment is needed for Digoxin once toxicity resolves?',
        option_a: 'Continue at 0.25 mg OD — no adjustment needed',
        option_b: 'Reduce to 0.125 mg OD or every other day, as Digoxin is 70% renally cleared and accumulates in CKD',
        option_c: 'Switch to IV Digoxin for better bioavailability',
        option_d: 'Double the dose to maintain therapeutic levels',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Digoxin is primarily excreted by the kidneys (70%). In CKD (eGFR 35), the dose must be reduced to 0.0625-0.125 mg/day and levels monitored closely. Target therapeutic level is now 0.5-0.9 ng/mL for heart failure.',
        subject_reference: 'Pharmacotherapeutics - Renal Dosing',
      },
    ],
    phases: [
      {
        id: 'seed-004-phase-1',
        title: 'Day 1: CCU Admission',
        description: 'Suresh is admitted with acute decompensated HF and Digoxin toxicity. Review his medication chart and electrolyte corrections.',
        patient_snapshot: {
          name: 'Suresh Menon', age: 72, sex: 'M', ward: 'CCU', bed: 'CCU-06',
          presenting_complaint: 'ADHF with digoxin toxicity symptoms.',
          pmh: ['HFrEF (EF 30%)', 'AF', 'CKD 3b'],
          medications: [
            { drug: 'Digoxin', dose: '0.25 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Furosemide', dose: '40 mg', frequency: 'BD', route: 'IV' },
            { drug: 'IV Dextrose 5% + KCl 20 mEq', dose: '500 mL', frequency: 'Over 4 hours', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Digoxin Level', value: '3.2', unit: 'ng/mL', reference: '0.5-2.0', is_abnormal: true },
            { name: 'K+', value: '3.0', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-004-1', case_id: 'seed-004',
            question_text: 'What is the pharmacist\'s assessment of the Digoxin level and symptoms?',
            option_a: 'Therapeutic; continue dose',
            option_b: 'Digoxin toxicity worsened by hypokalemia; hold Digoxin, correct K+',
            option_c: 'Increase Digoxin for AF control',
            option_d: 'Add Amiodarone',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Digoxin 3.2 ng/mL with hypokalemia = toxicity.',
            subject_reference: 'Pharmacotherapeutics - Cardiology',
          },
          {
            id: 'q-004-2', case_id: 'seed-004',
            question_text: 'Is D5W + KCl appropriate in ADHF?',
            option_a: 'Yes — standard fluid',
            option_b: 'No — D5W provides free water worsening overload; use concentrated KCl in minimal volume',
            option_c: 'Switch to RL at 200 mL/h',
            option_d: 'Give KCl as rapid IV push',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'D5W worsens fluid overload in HF.',
            subject_reference: 'Pharmacotherapeutics - Electrolyte Safety',
          },
          {
            id: 'q-004-3', case_id: 'seed-004',
            question_text: 'What Digoxin dose adjustment for eGFR 35?',
            option_a: 'Continue 0.25 mg OD',
            option_b: 'Reduce to 0.125 mg OD (70% renally cleared)',
            option_c: 'Switch to IV Digoxin',
            option_d: 'Double the dose',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Digoxin is 70% renally cleared; reduce in CKD.',
            subject_reference: 'Pharmacotherapeutics - Renal Dosing',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA/ACC/HFSA Heart Failure Guidelines (2022) — Digoxin Use',
          organization: 'AHA/ACC',
          text: 'Guideline-Directed Medical Therapy (GDMT) for HFrEF consists of four evidence-based pillars: (1) ARNI (Sacubitril/Valsartan) or ACEi/ARB, (2) Beta-blocker (Carvedilol, Metoprolol Succinate, or Bisoprolol), (3) Mineralocorticoid Receptor Antagonist (Spironolactone/Eplerenone), and (4) SGLT2 inhibitor (Dapagliflozin/Empagliflozin). Digoxin is NOT first-line and does not reduce mortality. It is reserved for patients with persistent symptoms on GDMT, or for rate control in AF with HFrEF when beta-blockers are insufficient. Target serum digoxin level for HF is 0.5-0.9 ng/mL (not the older range of 0.5-2.0 ng/mL). Levels >2.0 ng/mL indicate toxicity.'
        },
        {
          title: 'Digoxin Immune Fab (Digibind/DigiFab) for Severe Toxicity',
          organization: 'AHA / Toxicology Guidelines',
          text: 'Digoxin-specific antibody fragments (Digibind / DigiFab) are indicated for: (1) Serum digoxin level >10 ng/mL, (2) K+ >5.0 mEq/L in acute digoxin toxicity, (3) Life-threatening arrhythmias (third-degree AV block, ventricular tachycardia/fibrillation), (4) Ingestion of >10 mg in adults. Dosing: Number of vials = Serum Digoxin Level (ng/mL) × Weight (kg) / 100. After Digibind administration, serum digoxin levels will RISE dramatically because the assay measures both bound and free digoxin — do not re-dose based on post-Digibind levels.'
        },
        {
          title: 'Electrolyte Management in Digoxin Toxicity',
          organization: 'Clinical Toxicology Consensus',
          text: 'Hypokalemia MUST be corrected in digoxin toxicity as it dramatically potentiates cardiac toxicity. IV Potassium Chloride (KCl) is given cautiously — limit to 10 mEq/h through peripheral lines, up to 20 mEq/h through central lines with continuous ECG monitoring. Target K+ 4.0-5.0 mEq/L. AVOID calcium administration in digoxin toxicity: IV calcium (including Ringer\'s Lactate which contains Ca2+) synergizes with elevated intracellular calcium from Na+/K+ ATPase inhibition, potentially causing irreversible cardiac arrest ("stone heart"). Switch IV fluid to D5W or 0.9% Normal Saline immediately.'
        }
      ],
      calculations: [
        {
          name: 'Digoxin Volume of Distribution & Loading Dose',
          formula: 'Loading Dose (mcg) = [ Target Concentration (ng/mL) × Vd (L/kg) × Weight (kg) ] / Bioavailability (F); Vd_normal = 7 L/kg; Vd_CKD = 4 L/kg (reduced due to decreased skeletal muscle binding)',
          explanation: 'Digoxin has an extremely large Vd (~7 L/kg in normal renal function) because it extensively partitions into skeletal muscle. In renal impairment, muscle uptake is reduced (Vd drops to ~4 L/kg), and clearance (which is 60-80% renal) drops proportionally. For Gopal: Vd ~4 L/kg (CKD), weight ~70 kg. For a target of 0.7 ng/mL: Loading dose = 0.7 × 4 × 70 / 0.7 (oral bioavailability) = 280 mcg — compare with standard 250 mcg tablet, confirming standard dose is at the upper limit for this patient.'
        },
        {
          name: 'Digibind (Digoxin Fab Antibody) Dose Calculation',
          formula: 'Number of vials = [Serum Digoxin Level (ng/mL) × Weight (kg)] / 100; Each vial neutralizes ~0.5 mg of digoxin',
          explanation: 'For Gopal: Level = 2.8 ng/mL, Weight = 70 kg. Vials = (2.8 × 70) / 100 = 1.96 → Round up to 2 vials. Since this is chronic toxicity (not acute ingestion), dose can be guided by serum levels. For acute ingestion without known level, empiric 10-20 vials may be given. Each vial (40 mg) binds approximately 0.6 mg of digoxin.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Hypokalemia potentiate Digoxin toxicity?',
          rationale: 'Digoxin works by reversibly inhibiting the alpha subunit of the Na+/K+ ATPase pump on cardiac myocytes. Potassium and digoxin compete for the SAME binding site on this pump. When extracellular K+ is low (hypokalemia from Furosemide), there is less competition, causing digoxin to bind more avidly and persist longer on the pump. This leads to: (1) Excessive intracellular Na+ accumulation → (2) Na+/Ca2+ exchanger reversal → (3) Intracellular Ca2+ overload → (4) Increased cardiac automaticity, triggered arrhythmias, and reduced conduction velocity. Every 0.5 mEq/L drop in serum K+ approximately doubles digoxin\'s cardiac effect.'
        },
        {
          question_text: 'Why does Renal Impairment worsen Digoxin toxicity?',
          rationale: 'Digoxin is eliminated 60-80% unchanged in the urine via glomerular filtration and P-glycoprotein-mediated tubular secretion. When GFR drops (as in Gopal\'s CKD, SCr 1.6 mg/dL), digoxin clearance drops proportionally. Additionally, Vd decreases in CKD due to reduced muscle uptake. The net result is: lower clearance + lower Vd = disproportionate accumulation of drug. Standard doses (0.25 mg/day) that are safe in normal renal function rapidly become toxic in CKD. Doses should be halved or the frequency extended (e.g., every 2 days) in significant renal impairment.'
        },
        {
          question_text: 'Why is Calcium-containing Ringer\'s Lactate dangerous in Digoxin Toxicity?',
          rationale: 'Digoxin inhibits Na+/K+ ATPase → intracellular Na+ rises → Na+/Ca2+ exchanger is inhibited → intracellular Ca2+ rises abnormally high. The cardiac myocyte is already calcium-overloaded. Administering exogenous calcium (present in Ringer\'s Lactate: ~1.5 mEq/L Ca2+, or via direct IV calcium gluconate) floods the cell with even more calcium, triggering sustained maximal cardiac contraction called "stone heart" — an irreversible systolic arrest. Normal Saline or D5W must be used exclusively in digoxin toxicity.'
        }
      ],
      mnemonics: [
        {
          name: 'Digoxin Toxicity Signs (V-I-S-U-A-L)',
          concept: 'Remembering the clinical symptoms of digoxin toxicity — target level for HF: 0.5-0.9 ng/mL; toxic: >2.0 ng/mL',
          bullets: [
            'V — Visual changes (xanthopsia = yellow-green halos, photophobia, blurry vision — pathognomonic sign)',
            'I — Irregular heartbeats: Brady-arrhythmias (1st/2nd/3rd-degree AV block), PVCs, ventricular tachycardia, atrial tachycardia with block',
            'S — Stomach upset (nausea, vomiting, anorexia — often the FIRST symptom)',
            'U — Urinary output drop (renal clearance decline accumulates more drug — vicious cycle)',
            'A — Abdominal pain (GI smooth muscle hyperstimulation)',
            'L — Lethargy, confusion, depression (CNS toxicity at high levels)'
          ]
        }
      ]
    },
    tags: ['heart-failure', 'digoxin-toxicity', 'ringers-lactate', 'hypokalemia', 'furosemide'],
    source: 'seed',
    created_at: '2025-01-04T00:00:00Z',
  },

  // CASE 5: PHARMACOKINETICS / TDM / INFECTIOUS DISEASES
  {
    id: 'seed-005',
    title: 'Infective Endocarditis & Gentamicin TDM',
    subject_area: 'pharmacokinetics_tdm',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Simran Jeet',
      age: 28,
      sex: 'F',
      ward: 'Cardiac Ward',
      bed: 'Bed 24',
      presenting_complaint: 'High-grade fever, chills, and lethargy for 10 days. Splinter hemorrhages noted on fingernails. Mitral vegetation seen on TEE. History of IV drug abuse.',
      pmh: ['Intravenous Drug Abuse (active)', 'Mitral Valve Prolapse'],
      medications: [
        { drug: 'Ampicillin IV', dose: '2 g', frequency: 'Q4H', route: 'IV' },
        { drug: 'Gentamicin IV', dose: '80 mg', frequency: 'Q8H', route: 'IV (over 30 min)' },
        { drug: 'Pantoprazole IV', dose: '40 mg', frequency: 'OD', route: 'IV' },
        { drug: 'Paracetamol', dose: '650 mg', frequency: 'TDS PRN', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Blood Culture', value: 'Enterococcus faecalis', unit: '', reference: 'No growth', is_abnormal: true },
        { name: 'Gentamicin Trough', value: '3.8', unit: 'mcg/mL', reference: '<1.0', is_abnormal: true },
        { name: 'SCr', value: '1.0', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: false },
        { name: 'BUN', value: '18', unit: 'mg/dL', reference: '7-20', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-005-1', case_id: 'seed-005',
        question_text: 'Simran\'s Gentamicin trough is 3.8 mcg/mL (target <1 mcg/mL for synergistic dosing in endocarditis). What intervention is required?',
        option_a: 'Continue current dosing; the level is acceptable',
        option_b: 'Extend the dosing interval (e.g., Q12H) and recheck the trough before the next dose',
        option_c: 'Increase the dose to 120 mg Q8H for better efficacy',
        option_d: 'Switch to oral Gentamicin',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'In synergistic dosing for Enterococcal endocarditis, Gentamicin is given in low doses (1 mg/kg Q8H) targeting a trough <1 mcg/mL to minimize nephrotoxicity and ototoxicity. A trough of 3.8 indicates dangerous accumulation. The interval should be extended and trough rechecked.',
        subject_reference: 'Pharmacokinetics / TDM',
      },
      {
        id: 'q-005-2', case_id: 'seed-005',
        question_text: 'When should the Gentamicin trough level be drawn?',
        option_a: 'Immediately after the infusion ends',
        option_b: '30 minutes before the NEXT scheduled dose',
        option_c: '1 hour after the infusion starts',
        option_d: 'Any time during the dosing interval',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'A trough level must be drawn 30 minutes before the next dose to assess the lowest concentration in the dosing interval. Drawing at any other time gives an inaccurate measure of drug clearance.',
        subject_reference: 'Pharmacokinetics / TDM',
      },
      {
        id: 'q-005-3', case_id: 'seed-005',
        question_text: 'What key monitoring parameters must the clinical pharmacist track weekly during prolonged Gentamicin therapy for endocarditis?',
        option_a: 'Liver function tests only',
        option_b: 'Serum creatinine, BUN (nephrotoxicity) and audiometry (ototoxicity)',
        option_c: 'Complete blood count and INR',
        option_d: 'Blood glucose levels',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Aminoglycosides cause both nephrotoxicity (reversible tubular damage) and ototoxicity (irreversible vestibular and cochlear damage). Weekly SCr/BUN and periodic audiometry are mandatory during prolonged courses.',
        subject_reference: 'Pharmacokinetics / TDM',
      },
    ],
    phases: [
      {
        id: 'seed-005-phase-1',
        title: 'Day 5: TDM Review',
        description: 'Simran\'s Gentamicin trough has come back elevated. Review the TDM results and recommend dosing adjustments.',
        patient_snapshot: {
          name: 'Simran Jeet', age: 28, sex: 'F', ward: 'Cardiac Ward', bed: '24',
          presenting_complaint: 'Endocarditis on Ampicillin + Gentamicin.',
          pmh: ['IVDA', 'MVP'],
          medications: [
            { drug: 'Ampicillin IV', dose: '2 g', frequency: 'Q4H', route: 'IV' },
            { drug: 'Gentamicin IV', dose: '80 mg', frequency: 'Q8H', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Gentamicin Trough', value: '3.8', unit: 'mcg/mL', reference: '<1.0', is_abnormal: true },
            { name: 'SCr', value: '1.0', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: false },
          ],
        },
        questions: [
          {
            id: 'q-005-1', case_id: 'seed-005',
            question_text: 'Gentamicin trough is 3.8 mcg/mL (target <1). What intervention?',
            option_a: 'Continue; level is acceptable',
            option_b: 'Extend interval to Q12H and recheck trough',
            option_c: 'Increase dose to 120 mg Q8H',
            option_d: 'Switch to oral Gentamicin',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Trough 3.8 is dangerously high; extend interval.',
            subject_reference: 'Pharmacokinetics / TDM',
          },
          {
            id: 'q-005-2', case_id: 'seed-005',
            question_text: 'When should the Gentamicin trough be drawn?',
            option_a: 'After infusion ends',
            option_b: '30 minutes before the next dose',
            option_c: '1 hour after infusion starts',
            option_d: 'Any time',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Trough = 30 min before next dose.',
            subject_reference: 'Pharmacokinetics / TDM',
          },
          {
            id: 'q-005-3', case_id: 'seed-005',
            question_text: 'What weekly monitoring for prolonged Gentamicin?',
            option_a: 'LFTs only',
            option_b: 'SCr/BUN (nephro) + audiometry (oto)',
            option_c: 'CBC and INR',
            option_d: 'Blood glucose',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Aminoglycosides: nephrotoxicity + ototoxicity monitoring.',
            subject_reference: 'Pharmacokinetics / TDM',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA Guidelines for Infective Endocarditis (2015)',
          organization: 'AHA',
          text: 'Treatment of Enterococcal Infective Endocarditis (Enterococcus faecalis) requires 4-6 weeks of combination therapy. First-line options: (1) Ampicillin 2g IV Q4H + Gentamicin 1 mg/kg IV Q8H (synergy combination) for 4-6 weeks; or (2) Ampicillin 2g IV Q4H + Ceftriaxone 2g IV Q12H for 6 weeks (preferred when aminoglycoside toxicity is a concern, especially in patients with pre-existing renal impairment). Vancomycin 15-20 mg/kg IV Q12H is used if the patient is penicillin-allergic. Native valve IE with S. aureus: 6 weeks of oxacillin or vancomycin (MRSA). Prosthetic valve IE: 6-8 weeks plus rifampin synergy. Blood cultures should be repeated to verify sterility within 72 hours of initiating treatment.'
        },
        {
          title: 'TDM Parameters for Gentamicin in Endocarditis',
          organization: 'AHA / ASHP',
          text: 'For thrice-daily (Q8H) traditional gentamicin synergy dosing in endocarditis: Peak serum levels (drawn 30 min after end of infusion) should be 3.0-5.0 mcg/mL (lower than monotherapy peaks because the goal is synergy, not standalone killing). Trough levels (drawn within 30 minutes before the next dose) should be <1.0 mcg/mL to prevent accumulation. Once-daily extended-interval aminoglycoside dosing (EIAD) is NOT appropriate for endocarditis synergy due to the need for sustained bactericidal concentrations. Check first peak and trough after the 3rd dose (at steady state). Recheck every 48-72 hours in patients with renal impairment.'
        },
        {
          title: 'ASHP Drug Administration Guidelines — Vancomycin vs Gentamicin Monitoring',
          organization: 'ASHP',
          text: 'For Vancomycin (alternative for penicillin-allergic patients): Target AUC24/MIC ratio of 400-600 mg·h/L (preferred over trough-only monitoring per updated 2020 ASHP/IDSA/SIDP consensus). Trough-only target of 15-20 mcg/mL is the older, still widely used clinical endpoint. Infuse vancomycin over at least 60 minutes per gram to prevent Red Man Syndrome (non-immune histamine release causing facial flushing, erythema, and chest tightness). For Gentamicin in the context of endocarditis: weekly monitoring of SCr, BUN, and urine output; audiometry baseline recommended for prolonged courses.'
        }
      ],
      calculations: [
        {
          name: 'Aminoglycoside Dosing Interval (Tau) Based on Pharmacokinetics',
          formula: 'Tau (hours) = ln(Peak_target / Trough_target) / Kel  where Kel = 0.693 / t½ and t½ ≈ (0.693 × Vd) / Cl; Cl_aminoglycoside ≈ 0.8 × CrCl',
          explanation: 'For Simran: CrCl (Cockcroft-Gault) = [(140-28) × 55] / (72 × 1.4) = 6160/100.8 = 61 mL/min. Aminoglycoside Cl ≈ 0.8 × 61 = 49 mL/min. Vd ≈ 0.25 L/kg × 55 kg = 13.75 L. Kel = 49/(1000×13.75/60) = 0.214/h. t½ = 0.693/0.214 = 3.2 h. Tau = ln(5/1)/0.214 = 7.5 hours → Round to Q8H appropriate, but with trough of 2.4, extend to Q12H until renal function improves.'
        },
        {
          name: 'Cockcroft-Gault for Gentamicin Dose Adjustment',
          formula: 'CrCl (mL/min) = [(140 - Age) × IBW] / (72 × SCr) × 0.85 (female); IBW female = 45.5 + 2.3 × (height in inches - 60)',
          explanation: 'Simran: 28 years, female, height ~162 cm (64 inches). IBW = 45.5 + 2.3 × (64-60) = 45.5 + 9.2 = 54.7 kg ≈ 55 kg. CrCl = [(140-28) × 55] / (72 × 1.4) × 0.85 = (6160/100.8) × 0.85 = 61.1 × 0.85 = 51.9 mL/min. This CrCl of ~52 mL/min indicates mild renal impairment — standard Q8H dosing is borderline, and the high trough (2.4 mcg/mL) confirms interval extension to Q12H is needed.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is a high Gentamicin trough level dangerous?',
          rationale: 'Aminoglycosides are taken up into proximal tubular cells via the megalin receptor on the brush border. Inside lysosomes, they accumulate and cause membrane rupture → acute tubular necrosis (ATN). The critical point is that renal uptake of aminoglycosides is SATURABLE — once the renal cortex is saturated, excess drug has nowhere to go and begins to destroy cells. High trough levels indicate persistent drug exposure between doses, preventing cellular recovery. Clinical markers: rising SCr, falling urine output, renal casts in urinalysis.'
        },
        {
          question_text: 'Why is the Ampicillin + Ceftriaxone combination preferred over Gentamicin in renally impaired patients?',
          rationale: 'Ampicillin + Ceftriaxone achieves synergistic killing against Enterococcus faecalis through a different mechanism: Ampicillin binds PBP4 and PBP5, while Ceftriaxone binds PBP2 and PBP3 — together they overwhelm the organism\'s ability to repair its cell wall. This dual beta-lactam regimen avoids aminoglycoside nephrotoxicity and ototoxicity entirely. It has been validated by the SERENA study (NEJM 2013) showing comparable outcomes to Ampicillin + Gentamicin. It is now increasingly preferred in patients with CKD, age >70, or pre-existing hearing loss.'
        },
        {
          question_text: 'What is the difference between Ototoxicity (cochlear) and Ototoxicity (vestibular)?',
          rationale: 'Aminoglycosides preferentially damage the outer hair cells of the basal turn of the cochlea (high-frequency hearing) first, causing high-pitched tinnitus and progressive hearing loss. Cochlear toxicity is permanent and irreversible. Vestibular toxicity (balance organ damage) presents as dizziness, ataxia, and oscillopsia (objects appearing to oscillate with head movement). Neomycin > Gentamicin > Tobramycin for cochlear toxicity; Gentamicin = Tobramycin for vestibular toxicity. Streptomycin primarily causes vestibular damage.'
        }
      ],
      mnemonics: [
        {
          name: 'Aminoglycoside Toxicity (O-T-O)',
          concept: 'Remembering the primary toxicities of aminoglycosides and when they occur',
          bullets: [
            'O — Ototoxicity: Cochlear (hearing loss, tinnitus) and Vestibular (balance impairment) — IRREVERSIBLE. Predisposed by high troughs, cumulative dose, and duration >7 days.',
            'T — Tubular Necrosis (Nephrotoxicity): ATN of proximal tubule. REVERSIBLE upon drug discontinuation. Predisposed by: volume depletion, hypokalemia, loop diuretics, contrast agents, and high trough levels.',
            'O — Ocular / Neuromuscular Blockade: Inhibits presynaptic ACh release at motor endplate — can cause respiratory arrest in patients receiving neuromuscular blocking agents (dangerous in ICU).',
            'CLINICAL RULE: Monitor SCr every 48-72h. If SCr rises >0.5 mg/dL from baseline, or trough >1.0 mcg/mL, extend interval or switch to dual beta-lactam.'
          ]
        }
      ]
    },
    tags: ['endocarditis', 'gentamicin-tdm', 'nephrotoxicity', 'synergy', 'tramadol'],
    source: 'seed',
    created_at: '2025-01-05T00:00:00Z',
  },

  // CASE 6: RESPIRATORY / DRUG INTERACTIONS
  {
    id: 'seed-006',
    title: 'COPD Exacerbation & Theophylline Toxicity',
    subject_area: 'respiratory',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Harish Chandra',
      age: 65,
      sex: 'M',
      ward: 'Pulmonology',
      bed: '18',
      presenting_complaint: 'Acute worsening of dyspnea with productive purulent sputum for 3 days. Home medications: Tiotropium Respimat 2.5 mcg 2 puffs daily, Salbutamol MDI PRN. 35 pack-year smoking history.',
      pmh: ['COPD (GOLD Stage III)', 'Benign Prostatic Hyperplasia'],
      medications: [
        { drug: 'Salbutamol Nebulization', dose: '2.5 mg', frequency: 'Q4H', route: 'Nebulization' },
        { drug: 'Ipratropium Nebulization', dose: '500 mcg', frequency: 'Q6H', route: 'Nebulization' },
        { drug: 'Methylprednisolone IV', dose: '40 mg', frequency: 'OD', route: 'IV' },
        { drug: 'Azithromycin', dose: '500 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Oxygen via Nasal Cannula', dose: '4 L/min', frequency: 'Continuous', route: 'Inhalation' },
        { drug: 'Tiotropium Respimat', dose: '2.5 mcg (2 puffs)', frequency: 'OD', route: 'Inhalation' },
      ],
      allergies: [],
      labs: [
        { name: 'SpO2', value: '86%', unit: '', reference: '>88%', is_abnormal: true },
        { name: 'ABG pH', value: '7.32', unit: '', reference: '7.35-7.45', is_abnormal: true },
        { name: 'pCO2', value: '58', unit: 'mmHg', reference: '35-45', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-006-1', case_id: 'seed-006',
        question_text: 'What is the target SpO2 for controlled oxygen therapy in an acute COPD exacerbation, and why is high-flow oxygen dangerous?',
        option_a: 'Target SpO2 99-100% — maximize oxygenation',
        option_b: 'Target SpO2 88-92% — high-flow O2 may suppress hypoxic drive, worsen CO2 retention, and cause respiratory acidosis/arrest',
        option_c: 'Target SpO2 75-80% — COPD patients tolerate hypoxia well',
        option_d: 'No oxygen should be given in COPD',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'In chronic CO2 retainers (COPD), the respiratory drive shifts from CO2 to hypoxia. Giving high-flow O2 suppresses this hypoxic drive, causing further CO2 accumulation, respiratory acidosis, and potential respiratory arrest. Target SpO2 88-92%.',
        subject_reference: 'Pharmacotherapeutics - Respiratory',
      },
      {
        id: 'q-006-2', case_id: 'seed-006',
        question_text: 'Harish has BPH. Which inhaled medication in his regimen requires monitoring for urinary retention, and what should the pharmacist counsel?',
        option_a: 'Salbutamol — beta-2 agonists cause urinary retention',
        option_b: 'Ipratropium and Tiotropium — anticholinergics relax bladder detrusor muscle, worsening urinary retention in BPH patients. Monitor symptoms and counsel to report difficulty urinating.',
        option_c: 'Azithromycin — macrolides cause urinary retention',
        option_d: 'Methylprednisolone — steroids cause urinary retention',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'Anticholinergics (Ipratropium, Tiotropium) block muscarinic receptors on the bladder detrusor muscle, reducing contractility and worsening urinary retention in BPH. Patients should be counseled to report difficulty urinating immediately.',
        subject_reference: 'Pharmacotherapeutics - Respiratory',
      },
      {
        id: 'q-006-3', case_id: 'seed-006',
        question_text: 'What is the recommended duration and tapering strategy for systemic corticosteroids in an acute COPD exacerbation?',
        option_a: '2-3 weeks of high-dose steroids with a slow taper',
        option_b: '5-7 days of oral prednisolone 40 mg (or IV equivalent); no taper required for courses under 2 weeks',
        option_c: 'Indefinite low-dose prednisone maintenance',
        option_d: '1 day of IV methylprednisolone only',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'GOLD guidelines recommend 5-7 days of systemic corticosteroids for acute COPD exacerbations. Courses under 2 weeks do not require tapering as HPA axis suppression has not occurred. Prolonged courses increase risks of hyperglycemia, infection, and adrenal suppression.',
        subject_reference: 'Pharmacotherapeutics - Respiratory',
      },
    ],
    phases: [
      {
        id: 'seed-006-phase-1',
        title: 'Day 1: COPD Exacerbation',
        description: 'Harish is admitted with an acute exacerbation. Review oxygen targets and anticholinergic safety in BPH.',
        patient_snapshot: {
          name: 'Harish Chandra', age: 65, sex: 'M', ward: 'Pulmonology', bed: '18',
          presenting_complaint: 'Acute COPD exacerbation with CO2 retention.',
          pmh: ['COPD GOLD III', 'BPH'],
          medications: [
            { drug: 'Salbutamol Neb', dose: '2.5 mg', frequency: 'Q4H', route: 'Neb' },
            { drug: 'Ipratropium Neb', dose: '500 mcg', frequency: 'Q6H', route: 'Neb' },
            { drug: 'Oxygen', dose: '4 L/min', frequency: 'Continuous', route: 'NC' },
          ],
          allergies: [],
          labs: [
            { name: 'SpO2', value: '86%', unit: '', reference: '>88%', is_abnormal: true },
            { name: 'pCO2', value: '58', unit: 'mmHg', reference: '35-45', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-006-1', case_id: 'seed-006',
            question_text: 'What is the target SpO2 in COPD?',
            option_a: '99-100%',
            option_b: '88-92% — high-flow O2 suppresses hypoxic drive',
            option_c: '75-80%',
            option_d: 'No oxygen in COPD',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Target 88-92% to avoid CO2 narcosis.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          },
          {
            id: 'q-006-2', case_id: 'seed-006',
            question_text: 'Which inhaled medication needs BPH monitoring?',
            option_a: 'Salbutamol',
            option_b: 'Ipratropium and Tiotropium — anticholinergics worsen urinary retention',
            option_c: 'Azithromycin',
            option_d: 'Methylprednisolone',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Anticholinergics relax bladder detrusor, worsening BPH retention.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          },
          {
            id: 'q-006-3', case_id: 'seed-006',
            question_text: 'Steroid duration for acute COPD exacerbation?',
            option_a: '2-3 weeks with taper',
            option_b: '5-7 days; no taper for courses under 2 weeks',
            option_c: 'Indefinite low-dose maintenance',
            option_d: '1 day only',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: '5-7 days per GOLD guidelines; no taper needed.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'GOLD Strategy for COPD — Exacerbation Management (2024)',
          organization: 'GOLD',
          text: 'An acute exacerbation of COPD (AECOPD) is defined as an acute worsening of respiratory symptoms requiring additional therapy. Management: (1) Bronchodilators: SABA (Salbutamol 2.5 mg nebulised Q4-6H) and SAMA (Ipratropium 0.5 mg nebulised Q4-6H) are first-line. Combination use is additive. (2) Systemic Corticosteroids: Prednisolone 40 mg orally for 5 days reduces duration of hospitalization and relapse rate. IV Methylprednisolone 40 mg Q24H if oral not possible. Longer courses (>5 days) offer no additional benefit and increase ADR risk. (3) Antibiotics: Indicated if patient has increased sputum volume, increased sputum purulence, or requires mechanical ventilation. Choice: Amoxicillin, Doxycycline, or Azithromycin (NOT ciprofloxacin in patients on theophylline). (4) Oxygen Therapy: Target SpO2 88-92% in known COPD (NOT >95%) to avoid hypercapnic respiratory failure. (5) Theophylline: Not recommended as first-line. Consider as third-line agent. Serum level monitoring is MANDATORY.'
        },
        {
          title: 'Controlled Oxygen Therapy in COPD — Hypercapnia Risk',
          organization: 'British Thoracic Society (BTS)',
          text: 'Administering high-flow oxygen to COPD patients (SpO2 target >95%) removes the hypoxic drive in CO2-retaining patients, suppressing respiratory drive and causing life-threatening hypercapnic respiratory failure. Target SpO2 of 88-92% is mandatory for hospitalized COPD patients. Mechanism: In severe COPD with chronic CO2 retention, the respiratory center becomes desensitized to CO2 (loss of central chemoreceptor drive). Peripheral chemoreceptors (carotid body) sensing hypoxemia become the primary ventilatory drive. Correcting hypoxemia too aggressively eliminates this drive → hypoventilation → CO2 retention → respiratory acidosis → coma. MUST: titrate nasal prong oxygen (1-2 L/min) guided by serial ABG measurements.'
        },
        {
          title: 'Theophylline TDM and Toxicity Management Guidelines',
          organization: 'ACCP / Clinical Pharmacokinetics Guidelines',
          text: 'Theophylline therapeutic range: 10-20 mcg/mL for bronchodilation. 5-10 mcg/mL in the elderly to minimize toxicity. Toxicity: (1) Mild (20-25 mcg/mL): Nausea, vomiting, headache, tremors, insomnia; (2) Moderate (25-35 mcg/mL): Tachycardia, PVCs, hypokalemia, hyperglycemia; (3) Severe (>35 mcg/mL): Seizures, ventricular arrhythmias — often fatal. Management of toxicity: Stop theophylline, give activated charcoal (50g orally/NG if patient is alert), treat seizures with IV benzodiazepines (NOT phenytoin — ineffective for theophylline-induced seizures), and monitor ECG continuously. Hemodialysis is effective for severe cases. Half-life: 8-9 hours in non-smokers; 4-5 hours in smokers (CYP1A2 induced by cigarette smoke). Dose must be increased 50% in smokers.'
        }
      ],
      calculations: [
        {
          name: 'Theophylline Clearance and CYP1A2 Inhibition by Ciprofloxacin',
          formula: 'Cl_new = Cl_baseline × (1 - Fraction inhibited by CYP1A2 inhibitor). t½_new = 0.693 × Vd / Cl_new',
          explanation: 'Theophylline Vd = 0.5 L/kg. For a 70 kg patient: Vd = 35 L. Baseline Cl (non-smoker) = 0.04 L/h/kg × 70 = 2.8 L/h. t½ = 0.693 × 35 / 2.8 = 8.6 h. Ciprofloxacin inhibits CYP1A2 by ~50%: Cl_new = 2.8 × 0.5 = 1.4 L/h. t½_new = 0.693 × 35 / 1.4 = 17.3 h. This DOUBLES the half-life, causing steady-state levels to double — from 24.2 mcg/mL to potentially 48+ mcg/mL = severely toxic. This calculation justifies the URGENT need to discontinue ciprofloxacin and switch antibiotics.'
        },
        {
          name: 'Theophylline Serum Concentration Correction for Smoking Status',
          formula: 'Cl_smoker = 1.5 × Cl_non-smoker; Therefore t½_smoker ≈ 5 hours vs. 8-9 hours in non-smokers',
          explanation: 'Cigarette smoking induces CYP1A2 by polycyclic aromatic hydrocarbons (PAHs) in smoke. Mohammad Yusuf is 65 years old — if he was a former smoker who recently quit, CYP1A2 induction declines over 1-3 months, causing theophylline levels to rise (as clearance drops back to non-smoker rates). This is a clinical trap: a patient on stable theophylline who quits smoking can develop toxicity even without adding new drugs.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why are methylxanthines (theophylline) prone to drug interactions?',
          rationale: 'Theophylline is metabolized via hepatic CYP1A2 (primary, ~95%) and CYP3A4 (minor). It has a narrow therapeutic index AND follows first-order kinetics at therapeutic concentrations but approaches zero-order at toxic concentrations, meaning clearance saturates and concentrations rise disproportionately with increasing dose. Any inhibitor of CYP1A2 dramatically raises levels. Conversely, inducers (rifampicin, carbamazepine, barbiturates, cigarette smoke) lower levels, risking therapeutic failure.'
        },
        {
          question_text: 'Why is Ciprofloxacin specifically dangerous with Theophylline, but Azithromycin is safer?',
          rationale: 'Ciprofloxacin is a potent CYP1A2 inhibitor. It can raise theophylline levels by 50-100% (doubling toxic risk). In contrast, Azithromycin does NOT inhibit CYP1A2. It is a weak inhibitor of CYP3A4, causing only minor (10-15%) increases in theophylline levels — clinically insignificant. Amoxicillin-Clavulanate is similarly CYP-neutral. Among fluoroquinolones: Ciprofloxacin > Levofloxacin > Moxifloxacin in terms of CYP1A2 inhibition; hence Levofloxacin can be used with careful monitoring as an alternative.'
        },
        {
          question_text: 'Why should selective beta-1 blockers (e.g., Metoprolol) be preferred over non-selective ones (e.g., Propranolol) in COPD patients with hypertension?',
          rationale: 'Non-selective beta-blockers (Propranolol, Carvedilol) block beta-2 receptors in bronchial smooth muscle, causing bronchospasm — a potentially fatal complication in COPD patients. Selective beta-1 blockers (Metoprolol, Bisoprolol, Atenolol) have minimal beta-2 activity at standard doses and can be used cautiously in COPD patients who need them for cardiovascular indications (hypertension, post-MI, HF). However, even selective agents carry risk in severe COPD and must be introduced at very low doses with monitoring of spirometry and peak flow.'
        }
      ],
      mnemonics: [
        {
          name: 'CYP1A2 Inhibitors (C-A-M-P-S) — Theophylline Interaction Risk',
          concept: 'Drugs that inhibit CYP1A2 and cause dangerous theophylline accumulation',
          bullets: [
            'C — Ciprofloxacin (HIGHEST risk — inhibits by 50-75%; avoid in theophylline patients)',
            'A — Amiodarone (inhibits CYP1A2 and CYP2D6; also extends QT with some bronchodilators)',
            'M — Macrolides: Erythromycin and Clarithromycin (moderate risk); Azithromycin safe',
            'P — Propranolol (inhibits CYP1A2 AND causes bronchospasm — doubly dangerous in COPD)',
            'S — SSRIs: Fluvoxamine (strongest SSRI CYP1A2 inhibitor — avoid combination)',
            'REMEMBER: Theophylline target: 10-20 mcg/mL; toxicity begins at >20; check levels after ANY CYP1A2 inhibitor is added'
          ]
        }
      ]
    },
    tags: ['COPD', 'theophylline-toxicity', 'ciprofloxacin', 'cyp1a2-inhibitor', 'respiratory'],
    source: 'seed',
    created_at: '2025-01-06T00:00:00Z',
  },

  // CASE 7: CLINICAL TOXICOLOGY
  {
    id: 'seed-007',
    title: 'Paracetamol Overdose & NAC Protocol',
    subject_area: 'clinical_toxicology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Deepa Sharma',
      age: 22,
      sex: 'F',
      ward: 'Emergency / Toxicology',
      bed: 'ER-07',
      presenting_complaint: 'Brought to ER after intentional ingestion of 30 tablets of Paracetamol 500 mg (~15 g total) approximately 6 hours ago. Currently experiencing nausea, vomiting, and right upper quadrant pain.',
      pmh: [],
      medications: [
        { drug: 'N-Acetylcysteine (NAC) IV', dose: '150 mg/kg in 200 mL D5W', frequency: 'Loading over 1 hour', route: 'IV' },
        { drug: 'Ondansetron', dose: '4 mg', frequency: 'PRN', route: 'IV' },
        { drug: 'IV Normal Saline', dose: '100 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Serum Paracetamol (at 4h)', value: '250', unit: 'mcg/mL', reference: '<150 at 4h (Rumack-Matthew)', is_abnormal: true },
        { name: 'ALT', value: '48', unit: 'U/L', reference: '7-56', is_abnormal: false },
        { name: 'INR', value: '1.1', unit: '', reference: '<1.3', is_abnormal: false },
        { name: 'SCr', value: '0.8', unit: 'mg/dL', reference: '0.6-1.2', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-007-1', case_id: 'seed-007',
        question_text: 'What is the correct IV NAC (N-Acetylcysteine) 3-bag protocol for Paracetamol overdose?',
        option_a: 'Single 150 mg/kg bolus and discharge',
        option_b: 'Bag 1: 150 mg/kg in 200 mL D5W over 1 hour. Bag 2: 50 mg/kg in 500 mL D5W over 4 hours. Bag 3: 100 mg/kg in 1000 mL D5W over 16 hours.',
        option_c: '100 mg/kg IV push over 10 minutes',
        option_d: '50 mg/kg orally every 4 hours for 72 hours',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'The standard IV NAC protocol consists of 3 sequential infusions totaling 300 mg/kg over 21 hours. The loading dose (150 mg/kg over 1 hour) is most commonly associated with anaphylactoid reactions (flushing, urticaria, bronchospasm).',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-007-2', case_id: 'seed-007',
        question_text: 'During the first NAC infusion (loading dose), Deepa develops flushing, urticaria, and mild bronchospasm. What is the correct management?',
        option_a: 'Stop NAC permanently — the patient is allergic',
        option_b: 'Temporarily pause the infusion, treat symptoms with IV antihistamine and bronchodilator, then resume NAC at a slower rate',
        option_c: 'Switch to activated charcoal only',
        option_d: 'Give IM epinephrine immediately',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'NAC causes anaphylactoid (non-IgE mediated) reactions in up to 15-20% of patients, especially during the loading dose. These are rate-dependent and NOT true allergies. The infusion should be paused, symptoms treated (antihistamines, salbutamol), and then restarted at a slower rate. NAC must not be permanently discontinued as it is life-saving.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-007-3', case_id: 'seed-007',
        question_text: 'What is the mechanism by which NAC prevents hepatotoxicity from Paracetamol overdose?',
        option_a: 'NAC directly neutralizes Paracetamol in the stomach',
        option_b: 'NAC replenishes hepatic glutathione, which conjugates the toxic metabolite NAPQI (N-acetyl-p-benzoquinone imine) preventing it from causing oxidative liver damage',
        option_c: 'NAC inhibits CYP2E1 enzyme to prevent Paracetamol metabolism',
        option_d: 'NAC enhances renal excretion of Paracetamol',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'At therapeutic doses, Paracetamol is safely conjugated. In overdose, conjugation pathways saturate, and CYP2E1 produces excess NAPQI. Normally, glutathione detoxifies NAPQI. In overdose, glutathione is depleted, and NAPQI causes oxidative hepatocellular necrosis. NAC serves as a glutathione precursor (provides cysteine) to replenish stores.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
    ],
    phases: [
      {
        id: 'seed-007-phase-1',
        title: 'Hour 6: ER NAC Protocol',
        description: 'Deepa arrives 6 hours post-ingestion. Her 4-hour Paracetamol level plots above the treatment line on the Rumack-Matthew nomogram. NAC has been initiated.',
        patient_snapshot: {
          name: 'Deepa Sharma', age: 22, sex: 'F', ward: 'Emergency', bed: 'ER-07',
          presenting_complaint: '15g Paracetamol overdose 6 hours ago.',
          pmh: [],
          medications: [
            { drug: 'NAC IV', dose: '150 mg/kg in 200 mL D5W', frequency: 'Loading over 1h', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Serum Paracetamol (4h)', value: '250', unit: 'mcg/mL', reference: '<150 at 4h', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-007-1', case_id: 'seed-007',
            question_text: 'What is the correct IV NAC protocol?',
            option_a: 'Single 150 mg/kg bolus',
            option_b: '3-bag: 150 mg/kg over 1h, 50 mg/kg over 4h, 100 mg/kg over 16h',
            option_c: '100 mg/kg IV push',
            option_d: '50 mg/kg oral Q4H',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Standard 3-bag IV NAC protocol over 21 hours.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-007-2', case_id: 'seed-007',
            question_text: 'Flushing and bronchospasm during NAC loading — what to do?',
            option_a: 'Stop NAC permanently',
            option_b: 'Pause, treat symptoms, resume at slower rate',
            option_c: 'Switch to charcoal only',
            option_d: 'IM epinephrine immediately',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Anaphylactoid reaction — rate-dependent, not true allergy.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-007-3', case_id: 'seed-007',
            question_text: 'How does NAC prevent liver damage?',
            option_a: 'Neutralizes Paracetamol in stomach',
            option_b: 'Replenishes glutathione to conjugate toxic NAPQI',
            option_c: 'Inhibits CYP2E1',
            option_d: 'Enhances renal excretion',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'NAC provides cysteine for glutathione synthesis.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'MHRA Clinical Guideline — IV N-Acetylcysteine (NAC) Protocol for Paracetamol Overdose',
          organization: 'MHRA / FDA',
          text: 'Intravenous N-acetylcysteine (NAC) is the definitive antidote for paracetamol overdose. The 3-bag protocol (21 hours total): Bag 1: 150 mg/kg in 200 mL Glucose 5% over 60 minutes (LOADING DOSE). Bag 2: 50 mg/kg in 500 mL Glucose 5% over 4 hours. Bag 3: 100 mg/kg in 1000 mL Glucose 5% over 16 hours (MAINTENANCE). Total dose = 300 mg/kg over 21 hours. CRITICAL: Use Glucose 5% (D5W) as the diluent — NOT Normal Saline (NAC in Normal Saline is associated with increased anaphylactoid reactions). NAC should be continued beyond 21 hours if: INR >2.0, creatinine rising, or clinical encephalopathy. Oral NAC (Effervescent formulation 600 mg) can be used if IV is unavailable — dose: 140 mg/kg loading, then 70 mg/kg Q4H for 17 doses. The sulfurous odor of NAC causes severe nausea/vomiting — pretreat with Ondansetron 8mg IV.'
        },
        {
          title: 'Rumack-Matthew Nomogram — Interpreting Paracetamol Levels',
          organization: 'Clinical Toxicology Consensus / AAPCC',
          text: 'The Rumack-Matthew Nomogram determines NAC treatment need based on serum paracetamol concentration and time post-ingestion. Standard treatment line: 150 mcg/mL at 4 hours, declining to 37.5 mcg/mL at 8 hours, 9.4 mcg/mL at 12 hours, 4.7 mcg/mL at 16 hours. Treatment is indicated if level falls ABOVE the line. For patients presenting after 8 hours without a serum level: Start NAC EMPIRICALLY — do not wait for a level. For staggered overdoses or unknown time of ingestion: treat empirically if >75 mg/kg ingested. Do NOT use the nomogram for modified-release paracetamol overdose (e.g., Tylenol ER) — levels can be deceptively low early then rise later.'
        },
        {
          title: 'King\'s College Criteria for Liver Transplant in Acute Liver Failure (Paracetamol)',
          organization: 'King\'s College Hospital',
          text: 'Patients with paracetamol-induced acute liver failure are referred for emergency liver transplantation using the King\'s College Criteria: (1) Arterial pH <7.30 AFTER adequate fluid resuscitation (most accurate single criterion), OR all 3 of: (2) INR >6.5, AND (3) Serum Creatinine >300 mcmol/L (>3.4 mg/dL), AND (4) Grade III or IV encephalopathy. The MELD score (Model for End-stage Liver Disease) is also used to prioritize transplant listing. Prognosis without transplant when all 3 criteria are met is <10% survival. Even with King\'s criteria met, NAC should be continued until transplant as it may still improve hepatic microcirculation.'
        }
      ],
      calculations: [
        {
          name: 'Rumack-Matthew Nomogram Treatment Threshold',
          formula: 'Treatment Threshold (mcg/mL at time t) = 150 × e^[-0.173 × (t - 4)]; t = hours post-ingestion',
          explanation: 'Anjali\'s level at 6 hours = 165 mcg/mL. Threshold at 6 hours = 150 × e^[-0.173 × (6-4)] = 150 × e^(-0.346) = 150 × 0.707 = 106 mcg/mL. Since 165 > 106 mcg/mL, she is ABOVE the treatment line → NAC is mandatory. The nomogram assumes a constant elimination half-life of 4 hours for paracetamol. In patients with hepatic enzyme induction (chronic alcoholics, epileptics on enzyme inducers), toxicity can occur at LOWER serum levels because more NAPQI is generated.'
        },
        {
          name: 'NAC Dose Calculation (Weight-Based, Patient Anjali 60 kg)',
          formula: 'Bag 1: 150 mg/kg × 60 = 9000 mg = 9g in 200 mL D5W; Bag 2: 50 mg/kg × 60 = 3000 mg = 3g in 500 mL D5W; Bag 3: 100 mg/kg × 60 = 6000 mg = 6g in 1000 mL D5W',
          explanation: 'Total NAC = 300 mg/kg × 60 kg = 18g over 21 hours. Stock NAC concentration: 200 mg/mL (20% solution). Volume of NAC for each bag: Bag 1 = 9000/200 = 45 mL; Bag 2 = 3000/200 = 15 mL; Bag 3 = 6000/200 = 30 mL. Infusion rates: Bag 1: 200+45=245 mL over 60 min = 245 mL/h; Bag 2: 515 mL over 4h = 128.8 mL/h; Bag 3: 1030 mL over 16h = 64.4 mL/h. ALWAYS verify infusion rates with pharmacy — this is a high-alert medication.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is NAC treatment highly effective if given within 8 hours?',
          rationale: 'NAC is virtually 100% hepatoprotective if started within 8 hours of ingestion. Mechanism: NAC acts as a glutathione precursor (cysteine donor), replenishing glutathione stores before NAPQI depletes them. NAPQI (N-acetyl-p-benzoquinone imine) is the hepatotoxic metabolite formed by CYP2E1. When glutathione exceeds NAPQI production, NAPQI is detoxified. NAC also acts as a direct NAPQI scavenger and improves hepatic microcirculation. Efficacy drops to ~70% at 10 hours and ~30% at 24 hours but remains beneficial even beyond 24 hours (especially in improving microcirculation).'
        },
        {
          question_text: 'What is the mechanism by which Paracetamol causes hepatotoxicity?',
          rationale: 'At therapeutic doses, paracetamol is metabolized >95% by glucuronidation (55%) and sulfation (45%), with only 5% going through CYP2E1 to form NAPQI. NAPQI is neutralized by conjugation with glutathione → mercapturic acid → excreted in urine. In overdose: glucuronidation and sulfation become SATURATED, shunting >50% through CYP2E1. NAPQI production exceeds glutathione capacity. Unbound NAPQI covalently binds to hepatocyte proteins (particularly mitochondrial proteins) → lipid peroxidation, mitochondrial dysfunction, and centrilobular (Zone 3) hepatocyte necrosis. Zone 3 is most affected because CYP2E1 is most concentrated there.'
        },
        {
          question_text: 'Why is anaphylactoid reaction different from anaphylaxis with NAC, and how should it be managed?',
          rationale: 'NAC commonly causes a pseudo-anaphylactoid reaction (in 5-15% of patients) — characterized by flushing, urticaria, bronchospasm, and sometimes hypotension. This is NOT IgE-mediated (true anaphylaxis) — it is a direct histamine-releasing effect from rapid NAC infusion. Management: (1) STOP the infusion, (2) Give IV Chlorphenamine (Chlorpheniramine) 10mg + IV Hydrocortisone 200mg, (3) Once symptoms resolve, RESTART the infusion at a slower rate. Do NOT permanently stop NAC because of this reaction — the risk of fatal hepatotoxicity outweighs the risk of the anaphylactoid reaction.'
        }
      ],
      mnemonics: [
        {
          name: 'Paracetamol Stages of Toxicity (1-4) — Full Clinical Progression',
          concept: 'Staging the progression of acute liver injury from paracetamol — critical for timing NAC and assessing prognosis',
          bullets: [
            'Stage 1 (0-24h): Nausea, vomiting, sweating, malaise — often ASYMPTOMATIC despite very high levels. This is the best window to start NAC.',
            'Stage 2 (24-72h): Right upper quadrant pain → liver tenderness, early AST/ALT rise (to 1000-10,000 U/L), early INR elevation. NAC still beneficial.',
            'Stage 3 (72-96h): PEAK hepatotoxicity. Jaundice, fulminant hepatic failure, coagulopathy (INR >6), encephalopathy, hepatorenal syndrome. Check King\'s College Criteria for transplant.',
            'Stage 4 (4 days-3 weeks): Recovery of liver function in survivors OR progression to multi-organ failure and death in non-survivors. MELD score for transplant prioritization.'
          ]
        }
      ]
    },
    tags: ['acetaminophen', 'paracetamol-overdose', 'nac-protocol', 'metoclopramide', 'toxicology'],
    source: 'seed',
    created_at: '2025-01-07T00:00:00Z',
  },

  // CASE 8: NEUROLOGY / MEDICATION RECONCILIATION
  {
    id: 'seed-008',
    title: 'Acute Stroke & Anticoagulant Reconciliation',
    subject_area: 'neurology_psychiatry',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Kamala Prasad',
      age: 74,
      sex: 'F',
      ward: 'Neurology / Stroke Unit',
      bed: 'SU-03',
      presenting_complaint: 'Acute onset left-sided weakness and slurred speech 3 hours ago. CT head rules out hemorrhage. Diagnosed with acute ischemic stroke with concurrent atrial fibrillation. Home medications include Warfarin (often non-compliant) and Atenolol.',
      pmh: ['Atrial Fibrillation (3 years)', 'Hypertension', 'Type 2 DM'],
      medications: [
        { drug: 'Alteplase (tPA)', dose: '0.9 mg/kg', frequency: 'Once (10% bolus, 90% over 1h)', route: 'IV' },
        { drug: 'Aspirin', dose: '325 mg', frequency: 'OD (started 24h after tPA)', route: 'Oral' },
        { drug: 'Atenolol', dose: '50 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Enoxaparin DVT Prophylaxis', dose: '40 mg', frequency: 'OD', route: 'SC' },
      ],
      allergies: [],
      labs: [
        { name: 'INR (on admission)', value: '1.3', unit: '', reference: '2.0-3.0 (on Warfarin)', is_abnormal: true },
        { name: 'BP', value: '180/95', unit: 'mmHg', reference: '<140/90', is_abnormal: true },
        { name: 'HbA1c', value: '8.1', unit: '%', reference: '<7.0', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-008-1', case_id: 'seed-008',
        question_text: 'Kamala\'s admission INR is 1.3 while on Warfarin for AF. Her CHA2DS2-VASc score is high. What does this indicate and what is the pharmacist\'s recommendation post-stroke?',
        option_a: 'The INR is therapeutic; continue Warfarin at the same dose',
        option_b: 'The INR is sub-therapeutic (target 2.0-3.0), indicating non-compliance or inadequate dosing — this likely contributed to the cardioembolic stroke. Post-acute phase, transition to a DOAC (e.g., Apixaban) for better compliance.',
        option_c: 'Stop all anticoagulation permanently',
        option_d: 'Double the Warfarin dose immediately',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'An INR of 1.3 in a patient on Warfarin for AF is sub-therapeutic and indicates poor anticoagulation, which is the likely cause of the cardioembolic stroke. DOACs like Apixaban offer fixed dosing without routine INR monitoring, improving compliance.',
        subject_reference: 'Pharmacotherapeutics - Neurology / Anticoagulation',
      },
      {
        id: 'q-008-2', case_id: 'seed-008',
        question_text: 'When should anticoagulation for AF be restarted after an acute ischemic stroke treated with tPA?',
        option_a: 'Immediately after tPA infusion is complete',
        option_b: 'Typically 4 to 14 days post-stroke after repeat brain imaging confirms no hemorrhagic transformation',
        option_c: 'After 3 months',
        option_d: 'Never — stroke is a contraindication to anticoagulation',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Anticoagulation is typically restarted 4-14 days post-ischemic stroke, depending on stroke severity and after repeat imaging excludes hemorrhagic transformation. Aspirin bridges the gap in the interim.',
        subject_reference: 'Pharmacotherapeutics - Neurology / Anticoagulation',
      },
      {
        id: 'q-008-3', case_id: 'seed-008',
        question_text: 'Which of Kamala\'s home medications should have been held before tPA administration?',
        option_a: 'Atenolol — beta-blockers are contraindicated with tPA',
        option_b: 'None — all current medications are safe',
        option_c: 'Any anticoagulants or antiplatelets must be held; tPA is contraindicated if INR > 1.7',
        option_d: 'Pantoprazole must be stopped before tPA',
        correct_option: 'C',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'tPA carries a high bleeding risk. Concurrent anticoagulants or antiplatelets increase this risk. tPA is contraindicated if INR > 1.7. In this case, INR is 1.3, so tPA is safe to administer, but Aspirin must be withheld until 24 hours post-tPA.',
        subject_reference: 'Pharmacotherapeutics - Neurology',
      },
    ],
    phases: [
      {
        id: 'seed-008-phase-1',
        title: 'Day 1: Acute Stroke',
        description: 'Kamala is admitted with acute ischemic stroke. Review anticoagulation history and tPA safety.',
        patient_snapshot: {
          name: 'Kamala Prasad', age: 74, sex: 'F', ward: 'Stroke Unit', bed: 'SU-03',
          presenting_complaint: 'Acute ischemic stroke with AF.',
          pmh: ['AF', 'HTN', 'T2DM'],
          medications: [
            { drug: 'Alteplase', dose: '0.9 mg/kg', frequency: 'Once', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'INR', value: '1.3', unit: '', reference: '2.0-3.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-008-1', case_id: 'seed-008',
            question_text: 'INR 1.3 on Warfarin — assessment?',
            option_a: 'INR is therapeutic',
            option_b: 'Sub-therapeutic; likely caused cardioembolic stroke. Transition to DOAC post-acute.',
            option_c: 'Stop anticoagulation permanently',
            option_d: 'Double Warfarin immediately',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'INR 1.3 = sub-therapeutic = likely stroke cause.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
          {
            id: 'q-008-2', case_id: 'seed-008',
            question_text: 'When to restart anticoagulation post-stroke?',
            option_a: 'Immediately after tPA',
            option_b: '4-14 days post-stroke after repeat imaging',
            option_c: 'After 3 months',
            option_d: 'Never',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Restart 4-14 days after excluding hemorrhagic transformation.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
          {
            id: 'q-008-3', case_id: 'seed-008',
            question_text: 'What must be held before tPA?',
            option_a: 'Atenolol',
            option_b: 'None',
            option_c: 'Anticoagulants/antiplatelets; tPA contraindicated if INR >1.7',
            option_d: 'Pantoprazole',
            correct_option: 'C',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Anticoagulants increase tPA bleeding risk.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke (2019)',
          organization: 'AHA/ASA',
          text: 'IV Alteplase (tPA) 0.9 mg/kg (max 90 mg): 10% given as IV bolus over 1 minute, remaining 90% infused over 60 minutes. Time window: 3-4.5 hours from onset (extended from earlier 3-hour window). ABSOLUTE CONTRAINDICATIONS: (1) Head CT showing hemorrhage, (2) Platelet count <100,000/mcL, (3) Recent major surgery/trauma within 14 days, (4) INR >1.7 on anticoagulants, (5) Blood pressure >185/110 mmHg (must be lowered BEFORE tPA using IV Labetalol or Nicardipine), (6) Blood glucose <50 or >400 mg/dL. Blood pressure must be maintained <180/105 mmHg for 24 hours AFTER tPA to reduce hemorrhagic transformation risk. Heparin must NOT be given for 24 hours post-tPA.'
        },
        {
          title: 'AHA/ASA Secondary Stroke Prevention — Anticoagulation in AF',
          organization: 'AHA/ASA',
          text: 'Anticoagulation for secondary stroke prevention in non-valvular AF: DOACs are preferred over Warfarin (Level IB recommendation). Apixaban 5 mg BD (or 2.5 mg BD if ≥2 of: age ≥80, weight ≤60kg, SCr ≥1.5 mg/dL). Rivaroxaban 20 mg OD with evening meal. Dabigatran 150 mg BD (110 mg BD if age ≥80 or GFR 30-50). Timing of DOAC initiation after stroke: Minor stroke → 1 day; Moderate stroke → 3 days; Major stroke → 5-7 days ("1-3-6-12 Rule"). Reasons to prefer DOACs: (1) Fixed dosing without INR monitoring, (2) Fewer food/drug interactions, (3) Lower risk of intracranial hemorrhage (30-40% RRR vs. Warfarin), (4) Specific reversal agents available (Idarucizumab for Dabigatran, Andexanet alfa for anti-Xa agents).'
        },
        {
          title: 'HAS-BLED Score — Assessing Bleeding Risk Before Anticoagulation',
          organization: 'ESC',
          text: 'HAS-BLED Score: H=Hypertension (uncontrolled SBP>160), A=Abnormal renal/liver function (1-2 pts), S=Stroke history, B=Bleeding history/predisposition, L=Labile INRs (<60% TTR), E=Elderly (>65 years), D=Drugs (antiplatelet/NSAID use) or alcohol (1-2 pts). Score 0-2: Low bleeding risk; proceed with anticoagulation. Score ≥3: High bleeding risk; but this does NOT mean to withhold anticoagulation — it means to manage correctable risk factors (e.g., control BP, stop NSAIDs, adjust dose). In AF, the thromboembolic risk (CHA2DS2-VASc) almost always outweighs bleeding risk. Virender\'s HAS-BLED: Stroke=1, Age>65=1, Hypertension=1 → Score 3 (high risk) but CHA2DS2-VASc is 4 → anticoagulation is strongly indicated.'
        }
      ],
      calculations: [
        {
          name: 'CHA2DS2-VASc Stroke Risk Score in Atrial Fibrillation',
          formula: 'C=CHF(1) + H=Hypertension(1) + A2=Age≥75(2) + D=Diabetes(1) + S2=Stroke/TIA(2) + V=Vascular disease(1) + A=Age65-74(1) + Sc=Sex category(female=1)',
          explanation: 'Virender\'s score: Age 67 (1 point) + Stroke history (2 points) + Hypertension (1 point) = 4 points. Annual stroke risk with score of 4 ≈ 4% per year without anticoagulation. Anticoagulation is indicated when score ≥2 in males, ≥3 in females. At score 4, the absolute stroke risk reduction with anticoagulation is approximately 3-4% per year — strongly justifying treatment despite bleeding risk.'
        },
        {
          name: 'Alteplase (tPA) Dose Calculation for Virender',
          formula: 'Dose = 0.9 mg/kg × Weight; Max = 90 mg; Bolus = 10% IV over 1 min; Infusion = 90% over 60 min',
          explanation: 'Virender weighs ~75 kg. Dose = 0.9 × 75 = 67.5 mg. Bolus = 6.75 mg (≈7 mL of 1 mg/mL solution) IV over 1 minute. Infusion = 60.75 mg (≈61 mL) over 60 minutes = 61 mL/h. Monitor closely for hemorrhagic transformation: any neurological deterioration during/after infusion → STOP infusion immediately and order urgent repeat CT head. Do NOT give antiplatelet or anticoagulant therapy for 24 hours post-tPA.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why transition from Warfarin to Apixaban after this stroke?',
          rationale: 'Warfarin requires strict INR monitoring (target 2.0-3.0 for AF). Virender\'s INR of 1.4 is subtherapeutic, suggesting poor warfarin management (missed doses, dietary vitamin K fluctuations, or drug interactions). DOACs (particularly Apixaban) provide more predictable anticoagulation: (1) Fixed twice-daily dosing without INR monitoring, (2) 59% fewer intracranial hemorrhages vs. Warfarin (ARISTOTLE trial), (3) 21% reduction in stroke/embolism vs. Warfarin, (4) No food-drug interactions with vitamin K. Unlike Warfarin which takes 3-5 days to stabilize, Apixaban reaches therapeutic levels within 3-4 hours of first dose.'
        },
        {
          question_text: 'Why is Tramadol a concerning drug in this patient with Atrial Fibrillation?',
          rationale: 'Tramadol inhibits serotonin and norepinephrine reuptake, which can cause QT prolongation and tachyarrhythmias. In patients with pre-existing AF on anticoagulants, there is also concern that Tramadol interacts with Warfarin: Tramadol inhibits CYP2D6 (which metabolizes codeine but also affects some warfarin metabolism pathways) and may interact with serotonergic pathways important for platelet aggregation. More critically, Tramadol at high doses can cause seizures, which could mimic stroke or confound neurological assessment in this vulnerable patient. Safe alternatives for pain: Paracetamol 650-1000 mg Q6H, or Celecoxib with caution (COX-2 selectivity reduces GI bleeds vs. non-selective NSAIDs).'
        },
        {
          question_text: 'Why is Blood Pressure management critical in the first 24 hours after tPA?',
          rationale: 'After tPA thrombolysis, the blood-brain barrier is disrupted and the ischemic penumbra is vulnerable. Elevated BP (>180/105 mmHg) increases the risk of hemorrhagic transformation — bleeding into the infarcted area, which can cause devastating cerebral edema and herniation. However, permissive hypertension (allowing BP 140-160 mmHg) is beneficial in the first hours of stroke because higher perfusion pressure can rescue the ischemic penumbra. The clinical protocol: (1) BEFORE tPA: aggressively lower BP to <185/110 with IV Labetalol or Nicardipine; (2) During and 24 hours AFTER tPA: maintain <180/105; (3) After 24 hours: target <140/90 for secondary prevention.'
        }
      ],
      mnemonics: [
        {
          name: 'Stroke Detection (F-A-S-T) and tPA Contraindications',
          concept: 'Acute stroke recognition and thrombolysis eligibility criteria',
          bullets: [
            'F — Face Drooping (unilateral facial droop, asymmetric smile)',
            'A — Arm Weakness (pronator drift test: patient holds both arms forward, one drifts down)',
            'S — Speech Difficulty (aphasia, dysarthria — "You can\'t teach an old dog new tricks")',
            'T — Time to call Emergency (every minute without treatment = 1.9 million neurons lost)',
            'tPA CONTRAINDICATIONS (mnemonic A-B-C-H-I): A=Active bleeding, B=BP>185/110, C=Coagulopathy (INR>1.7), H=Hemorrhage on CT, I=Ischemic stroke in last 3 months'
          ]
        }
      ]
    },
    tags: ['stroke', 'atrial-fibrillation', 'warfarin', 'thrombolysis', 'tramadol'],
    source: 'seed',
    created_at: '2025-01-08T00:00:00Z',
  },

  // CASE 9: GIT / HEPATOLOGY
  {
    id: 'seed-009',
    title: 'Hepatic Cirrhosis & Portal Hypertension',
    subject_area: 'git_hepatology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Prakash Rao',
      age: 55,
      sex: 'M',
      ward: 'Gastroenterology',
      bed: '22',
      presenting_complaint: 'Progressive abdominal distension and bilateral pedal edema for 2 weeks. History of alcohol-related cirrhosis. Also reports confusion and sleep-wake reversal (Day 2 of admission).',
      pmh: ['Alcoholic Liver Cirrhosis (Child-Pugh C)', 'Portal Hypertension', 'Esophageal Varices (Grade II)'],
      medications: [
        { drug: 'Spironolactone', dose: '100 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Furosemide', dose: '40 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Propranolol', dose: '40 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Lactulose', dose: '30 mL', frequency: 'TDS', route: 'Oral' },
        { drug: 'Rifaximin', dose: '550 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'IV Albumin 20%', dose: '100 mL', frequency: 'Post-paracentesis', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Serum Albumin', value: '2.2', unit: 'g/dL', reference: '3.5-5.0', is_abnormal: true },
        { name: 'Na+', value: '128', unit: 'mEq/L', reference: '135-145', is_abnormal: true },
        { name: 'NH3 (Ammonia)', value: '95', unit: 'mcmol/L', reference: '15-45', is_abnormal: true },
        { name: 'INR', value: '1.8', unit: '', reference: '<1.3', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-009-1', case_id: 'seed-009',
        question_text: 'What is the correct diuretic ratio for ascites management in cirrhosis, and why?',
        option_a: 'Give Furosemide alone at high doses',
        option_b: 'Maintain a Spironolactone:Furosemide ratio of 100:40 (approximately 2.5:1) to balance natriuresis while minimizing hypokalemia',
        option_c: 'Use Hydrochlorothiazide instead of both',
        option_d: 'Only use IV Albumin for fluid removal',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'AASLD guidelines recommend the "100:40 rule" — Spironolactone 100 mg: Furosemide 40 mg OD. Spironolactone (potassium-sparing) counteracts Furosemide\'s potassium wasting, maintaining potassium balance. Both can be titrated together maintaining this ratio.',
        subject_reference: 'Pharmacotherapeutics - Hepatology',
      },
      {
        id: 'q-009-2', case_id: 'seed-009',
        question_text: 'Prakash is confused with elevated ammonia (95 mcmol/L). Which combination is first-line for hepatic encephalopathy?',
        option_a: 'Lactulose (titrate to 2-3 soft stools/day) + Rifaximin 550 mg BD',
        option_b: 'Neomycin IV + Metronidazole',
        option_c: 'Activated charcoal + IV antibiotics',
        option_d: 'Mannitol + Dexamethasone',
        correct_option: 'A',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Lactulose is an osmotic laxative that traps ammonia as ammonium (NH4+) in the colon by lowering colonic pH, preventing systemic absorption. Rifaximin is a non-absorbable antibiotic that reduces ammonia-producing gut flora. Together they are the gold standard for hepatic encephalopathy.',
        subject_reference: 'Pharmacotherapeutics - Hepatology',
      },
      {
        id: 'q-009-3', case_id: 'seed-009',
        question_text: 'Which target heart rate should Propranolol be titrated to for portal hypertension / variceal bleed prophylaxis?',
        option_a: 'Target resting HR 100-110 bpm',
        option_b: 'Target resting HR 55-60 bpm (25% reduction from baseline)',
        option_c: 'No heart rate target is needed',
        option_d: 'Target systolic BP < 100 mmHg',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Non-selective beta-blockers (Propranolol, Nadolol) reduce portal pressure by blocking beta-1 (cardiac output reduction) and beta-2 (splanchnic vasoconstriction). The clinical endpoint is a resting heart rate of 55-60 bpm or 25% reduction from baseline.',
        subject_reference: 'Pharmacotherapeutics - Hepatology',
      },
    ],
    phases: [
      {
        id: 'seed-009-phase-1',
        title: 'Day 1: Ascites Management',
        description: 'Prakash is admitted with tense ascites and hepatic encephalopathy. Review the diuretic regimen and encephalopathy treatment.',
        patient_snapshot: {
          name: 'Prakash Rao', age: 55, sex: 'M', ward: 'Gastroenterology', bed: '22',
          presenting_complaint: 'Ascites and hepatic encephalopathy.',
          pmh: ['Cirrhosis Child-Pugh C', 'Portal HTN'],
          medications: [
            { drug: 'Spironolactone', dose: '100 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Furosemide', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Lactulose', dose: '30 mL', frequency: 'TDS', route: 'Oral' },
            { drug: 'Propranolol', dose: '40 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'NH3', value: '95', unit: 'mcmol/L', reference: '15-45', is_abnormal: true },
            { name: 'Na+', value: '128', unit: 'mEq/L', reference: '135-145', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-009-1', case_id: 'seed-009',
            question_text: 'What is the correct Spironolactone:Furosemide ratio for ascites?',
            option_a: 'Furosemide alone',
            option_b: '100:40 (2.5:1) ratio',
            option_c: 'HCTZ instead',
            option_d: 'Albumin only',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'AASLD 100:40 ratio.',
            subject_reference: 'Pharmacotherapeutics - Hepatology',
          },
          {
            id: 'q-009-2', case_id: 'seed-009',
            question_text: 'First-line HE treatment?',
            option_a: 'Lactulose + Rifaximin',
            option_b: 'Neomycin + Metronidazole',
            option_c: 'Charcoal + IV abx',
            option_d: 'Mannitol + Dexa',
            correct_option: 'A',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Lactulose + Rifaximin = gold standard.',
            subject_reference: 'Pharmacotherapeutics - Hepatology',
          },
          {
            id: 'q-009-3', case_id: 'seed-009',
            question_text: 'Propranolol target HR for portal HTN?',
            option_a: '100-110 bpm',
            option_b: '55-60 bpm (25% reduction)',
            option_c: 'No target',
            option_d: 'SBP < 100',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Target resting HR 55-60 bpm.',
            subject_reference: 'Pharmacotherapeutics - Hepatology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AASLD Practice Guidance on Portal Hypertension and Esophageal Varices (2022)',
          organization: 'AASLD',
          text: 'Acute variceal hemorrhage management: (1) Vasoactive therapy with IV Octreotide (50 mcg bolus then 50 mcg/h for 3-5 days) or Terlipressin must be started IMMEDIATELY on clinical suspicion before endoscopy. (2) Prophylactic antibiotics (Ceftriaxone 1g IV Q24H for 7 days) are mandatory in ALL cirrhotic patients with GI bleeding — reduces infection, re-bleeding, and 6-week mortality by 22%. (3) Urgent upper GI endoscopy within 12 hours for band ligation. (4) After bleeding control: start non-selective beta-blockers (Propranolol or Carvedilol) for secondary prophylaxis. (5) TIPS (Transjugular Intrahepatic Portosystemic Shunt) for refractory bleeding. Pre-primary prophylaxis: NSBB in Child-Pugh B/C patients with varices.'
        },
        {
          title: 'EASL Clinical Practice Guidelines — Decompensated Cirrhosis Ascites Management (2018)',
          organization: 'EASL',
          text: 'First-line treatment for ascites in cirrhosis: (1) Sodium restriction to 80-120 mEq/day (no-added-salt diet). (2) Spironolactone 100 mg OD starting dose with Furosemide 40 mg OD, maintaining a 100:40 ratio to preserve normokalemia. Maximum doses: Spironolactone 400 mg + Furosemide 160 mg. Target weight loss 0.5 kg/day (no peripheral edema) or 1 kg/day (with edema). (3) Therapeutic paracentesis for tense ascites — drain 4-6 L with IV Albumin replacement (8g per liter drained >5L). (4) Spontaneous Bacterial Peritonitis (SBP) prophylaxis: Norfloxacin 400 mg OD long-term if ascitic protein <1.5 g/dL plus Child-Pugh C or renal impairment. Avoid NSAIDs (cause renal failure), aminoglycosides, and nephrotoxic drugs.'
        },
        {
          title: 'EASL Guidelines — Hepatic Encephalopathy Management (2018)',
          organization: 'EASL',
          text: 'Hepatic Encephalopathy (HE) — Grading (West Haven): Grade 0 (covert), Grade I (trivial lack of awareness), Grade II (lethargy, subtle personality change), Grade III (somnolence but arousable), Grade IV (coma). First-line treatment: Lactulose 25 mL Q4-6H titrated to 2-3 soft stools daily. Mechanism: acidifies colon (pH <6) converting NH3 to NH4+ which is non-absorbable. If inadequate response, add Rifaximin 550 mg BD — a gut-selective antibiotic that reduces ammonia-producing gut bacteria. Contraindicated drugs: Opioids, benzodiazepines, sedatives (worsen HE). Metoclopramide crosses BBB and worsens EPS. Remove all precipitants (infection, constipation, GI bleed, hypokalemia, hyponatremia, sedatives).'
        }
      ],
      calculations: [
        {
          name: 'Child-Pugh Score for Cirrhosis Severity',
          formula: 'Score based on 5 parameters (each 1-3 points): (1) Bilirubin <2/2-3/>3 mg/dL (1/2/3), (2) Albumin >3.5/2.8-3.5/<2.8 g/dL (1/2/3), (3) INR <1.7/1.7-2.3/>2.3 (1/2/3), (4) Ascites: None/Mild/Moderate-severe (1/2/3), (5) Encephalopathy: None/Grade1-2/Grade3-4 (1/2/3)',
          explanation: 'Balaji\'s Child-Pugh: Bilirubin 4.2 mg/dL (3 pts) + Albumin 2.2 g/dL (3 pts) + INR 2.1 (2 pts) + Ascites moderate (2 pts) + Encephalopathy Grade II (2 pts) = 12 points = Class C (severe, 1-year survival 35%). Class C indicates all hepatically metabolized drugs require dose reduction. Avoid NSAIDs, aminoglycosides, high-dose opioids. Lorazepam preferred over diazepam if sedation needed (direct glucuronidation, not CYP-dependent).'
        },
        {
          name: 'MELD Score (Model for End-Stage Liver Disease)',
          formula: 'MELD = 3.78 × ln(Bilirubin) + 11.2 × ln(INR) + 9.57 × ln(Creatinine) + 6.43',
          explanation: 'Balaji: Bilirubin 4.2, INR 2.1, SCr ~1.2 (assumed from context). MELD = 3.78×ln(4.2) + 11.2×ln(2.1) + 9.57×ln(1.2) + 6.43 = 3.78×1.435 + 11.2×0.742 + 9.57×0.182 + 6.43 = 5.42 + 8.31 + 1.74 + 6.43 = 21.9 ≈ MELD 22. A MELD score >15 qualifies for transplant listing; >25 carries 3-month mortality >40%. Used by UNOS for organ allocation priority.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Ceftriaxone specifically used as antibiotic prophylaxis in variceal bleeding rather than oral Norfloxacin?',
          rationale: 'Bacterial infections occur in 35-66% of cirrhotic patients with GI bleeding, primarily due to gut bacterial translocation into the peritoneum and bloodstream. In patients admitted with variceal bleeding, IV Ceftriaxone (1g Q24H) is superior to oral Norfloxacin for inpatient prophylaxis — particularly in patients with advanced cirrhosis, prior quinolone use, or inability to take oral medications. The MICROBIOTA study (NEJM 2006) showed Ceftriaxone significantly reduced proven/probable infections versus Norfloxacin. After discharge, Norfloxacin 400 mg OD or Rifaximin 550 mg BD is used for chronic SBP prophylaxis.'
        },
        {
          question_text: 'Why is Normal Saline restricted in decompensated cirrhosis with ascites?',
          rationale: 'Patients with cirrhotic ascites are in a state of total body sodium EXCESS (despite paradoxically low serum sodium). The renin-angiotensin-aldosterone system is maximally activated due to reduced effective arterial blood volume. Administering sodium-containing fluids (Normal Saline: 154 mEq/L Na) exacerbates sodium retention, worsening ascites and peripheral edema. The preferred fluid in cirrhosis is albumin (for large paracentesis or SBP) or dilute dextrose solutions. If hydration is unavoidable, 5% Dextrose (sodium-free) is preferred over NS.'
        },
        {
          question_text: 'Why is Lactulose preferred over Neomycin for long-term hepatic encephalopathy management?',
          rationale: 'Lactulose (non-absorbable disaccharide) works by: (1) Osmotic catharsis — accelerating colonic transit, reducing time for ammonia absorption; (2) Colonic acidification — converting NH3 (absorbable gas) to NH4+ (non-absorbable ammonium) which is trapped in the gut and excreted. Neomycin (oral aminoglycoside) kills ammonia-producing gut bacteria but has 1-3% systemic absorption that accumulates in renal impairment, causing ototoxicity and nephrotoxicity with long-term use. Rifaximin (550 mg BD) is now the preferred adjunct to Lactulose — gut-selective, virtually zero systemic absorption, no significant drug interactions.'
        }
      ],
      mnemonics: [
        {
          name: 'Hepatic Encephalopathy Precipitants (H-E-P-A-T-I-C)',
          concept: 'Identifying and removing precipitating factors of HE — every episode must have a trigger identified and corrected',
          bullets: [
            'H — Hemorrhage: GI bleed dumps protein load into gut → ↑ammonia (most common trigger)',
            'E — Electrolytes: Hypokalemia (worsens NH3 production), Hyponatremia (<120 mEq/L causes cerebral edema)',
            'P — Protein excess: Dietary animal protein overload (30-35g/day from plant-based sources preferred)',
            'A — Alcohol/Active infections: New SBP, UTI, pneumonia — always check ascitic fluid and cultures',
            'T — Toxins/Therapeutics: Benzodiazepines, opioids, sedatives, and METOCLOPRAMIDE (worsens EPS in cirrhosis)',
            'I — Increasing urea/renal failure: Hepatorenal syndrome dramatically ↑ammonia',
            'C — Constipation: Prolongs intestinal transit → ↑ammonia absorption; Lactulose titrated to 2-3 stools/day'
          ]
        }
      ]
    },
    tags: ['cirrhosis', 'ascites', 'hepatic-encephalopathy', 'octreotide', 'lactulose'],
    source: 'seed',
    created_at: '2025-01-09T00:00:00Z',
  },

  // CASE 10: RHEUMATOLOGY / COMMUNITY PHARMACY
  {
    id: 'seed-010',
    title: 'Rheumatoid Arthritis & Methotrexate Toxicity',
    subject_area: 'community_pharmacy',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Meera Joshi',
      age: 52,
      sex: 'F',
      ward: 'Rheumatology',
      bed: '11',
      presenting_complaint: 'Severe oral ulcers, pancytopenia, and diarrhea. She has been taking Methotrexate for rheumatoid arthritis. On detailed questioning, she admits to taking Methotrexate 10 mg DAILY instead of WEEKLY for the past 2 weeks due to confusion about instructions.',
      pmh: ['Rheumatoid Arthritis (8 years)', 'CKD Stage 2'],
      medications: [
        { drug: 'Methotrexate', dose: '10 mg', frequency: 'DAILY (ERROR — should be WEEKLY)', route: 'Oral' },
        { drug: 'Folic Acid', dose: '5 mg', frequency: 'OD (except MTX day)', route: 'Oral' },
        { drug: 'Prednisolone', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Naproxen', dose: '250 mg', frequency: 'BD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'WBC', value: '1.5', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
        { name: 'Hb', value: '8.2', unit: 'g/dL', reference: '12-16', is_abnormal: true },
        { name: 'Platelets', value: '45', unit: 'x10^3/uL', reference: '150-450', is_abnormal: true },
        { name: 'SCr', value: '1.5', unit: 'mg/dL', reference: '0.6-1.2', is_abnormal: true },
        { name: 'ALT', value: '120', unit: 'U/L', reference: '7-56', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-010-1', case_id: 'seed-010',
        question_text: 'What is the most critical immediate intervention for Methotrexate toxicity (accidental daily dosing)?',
        option_a: 'Increase the Folic Acid dose to 10 mg daily',
        option_b: 'Stop Methotrexate immediately and administer Leucovorin (Folinic Acid) rescue — 10-25 mg IV/PO every 6 hours until cell counts recover',
        option_c: 'Continue Methotrexate at the same dose and add antibiotics',
        option_d: 'Give activated charcoal',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'Methotrexate inhibits dihydrofolate reductase (DHFR), depleting tetrahydrofolate (THF) needed for DNA synthesis. Leucovorin (folinic acid = 5-formyl THF) bypasses the DHFR block, directly providing reduced folate to rescue normal cells. Folic acid alone is insufficient because it still requires DHFR for activation.',
        subject_reference: 'Pharmacotherapeutics - Rheumatology',
      },
      {
        id: 'q-010-2', case_id: 'seed-010',
        question_text: 'Which drug in Meera\'s regimen likely worsened her Methotrexate toxicity by reducing its renal clearance?',
        option_a: 'Prednisolone',
        option_b: 'Folic Acid',
        option_c: 'Naproxen',
        option_d: 'None of her medications interact with Methotrexate',
        correct_option: 'C',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'NSAIDs reduce renal blood flow via prostaglandin inhibition and compete with Methotrexate for renal tubular secretion, significantly increasing serum MTX levels and toxicity risk. This is a critical drug interaction that pharmacists must identify.',
        subject_reference: 'Pharmacotherapeutics - Drug Interactions',
      },
      {
        id: 'q-010-3', case_id: 'seed-010',
        question_text: 'What specific patient counseling point should a pharmacist emphasize to prevent future Methotrexate dosing errors?',
        option_a: 'Take Methotrexate with a full glass of milk',
        option_b: 'Methotrexate is taken ONCE A WEEK on the same day each week. Never take it daily. Mark the specific day clearly on the calendar/pill box.',
        option_c: 'Take Methotrexate only when symptoms flare',
        option_d: 'Methotrexate can be taken with any NSAID for better effect',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Accidental daily dosing of weekly Methotrexate is a well-known cause of fatal medication errors. Pharmacists must clearly counsel patients, label the medication prominently as "WEEKLY — Take only on [specific day]," and document the dosing schedule.',
        subject_reference: 'Pharmacotherapeutics - Patient Safety',
      },
    ],
    phases: [
      {
        id: 'seed-010-phase-1',
        title: 'Day 1: Methotrexate Toxicity',
        description: 'Meera presents with pancytopenia from accidental daily Methotrexate. Identify the error, initiate rescue, and identify the exacerbating drug interaction.',
        patient_snapshot: {
          name: 'Meera Joshi', age: 52, sex: 'F', ward: 'Rheumatology', bed: '11',
          presenting_complaint: 'Pancytopenia, oral ulcers from accidental daily MTX.',
          pmh: ['RA', 'CKD Stage 2'],
          medications: [
            { drug: 'Methotrexate', dose: '10 mg', frequency: 'DAILY (ERROR)', route: 'Oral' },
            { drug: 'Naproxen', dose: '250 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'WBC', value: '1.5', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
            { name: 'Platelets', value: '45', unit: 'x10^3/uL', reference: '150-450', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-010-1', case_id: 'seed-010',
            question_text: 'Critical immediate intervention for MTX toxicity?',
            option_a: 'Increase Folic Acid to 10 mg',
            option_b: 'Stop MTX + Leucovorin rescue 10-25 mg IV Q6H',
            option_c: 'Continue MTX + add antibiotics',
            option_d: 'Activated charcoal',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Leucovorin bypasses the DHFR block to rescue normal cells.',
            subject_reference: 'Pharmacotherapeutics - Rheumatology',
          },
          {
            id: 'q-010-2', case_id: 'seed-010',
            question_text: 'Which drug worsened MTX toxicity?',
            option_a: 'Prednisolone',
            option_b: 'Folic Acid',
            option_c: 'Naproxen (reduces renal clearance)',
            option_d: 'None',
            correct_option: 'C',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'NSAIDs compete with MTX for renal tubular secretion.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
          {
            id: 'q-010-3', case_id: 'seed-010',
            question_text: 'Key counseling point to prevent future MTX errors?',
            option_a: 'Take with milk',
            option_b: 'ONCE A WEEK on the same day; never daily',
            option_c: 'Take only during flares',
            option_d: 'Combine with any NSAID',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Accidental daily dosing is a known fatal error.',
            subject_reference: 'Pharmacotherapeutics - Patient Safety',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ACR Guideline for Treatment of Rheumatoid Arthritis — DMARD Use and Monitoring (2021)',
          organization: 'ACR',
          text: 'Methotrexate (MTX) is the anchor DMARD for Rheumatoid Arthritis (RA). Prescribed as a ONCE-WEEKLY dose (NOT daily) — range: 7.5 to 25 mg per week. This is a common source of lethal medication errors. Folic acid 1-5 mg daily (or 5 mg once weekly, NOT on the day of MTX) reduces oral ulcers, GI upset, and hepatotoxicity without diminishing efficacy. Baseline and periodic monitoring: CBC, LFTs (AST/ALT), albumin, SCr, and chest X-ray (baseline for pulmonary toxicity). Hold MTX if: WBC <3.5 × 10³/μL, Platelet <100,000/μL, SCr increase >50% from baseline, ALT/AST >3× ULN, active infection, or active TB. MTX is contraindicated in pregnancy (FDA Category X) — requires 3-month washout before conception in both males and females.'
        },
        {
          title: 'Leucovorin Rescue Protocol for MTX Toxicity',
          organization: 'Clinical Oncology / Rheumatology Toxicity Guidelines',
          text: 'Leucovorin (Folinic acid) rescue for MTX toxicity: IV Leucovorin 15 mg Q6H (for moderate-high toxicity) or 7.5 mg Q6H (for mild) — continue until MTX levels fall <0.05 micromol/L or clinical improvement. Leucovorin dose must be at LEAST equal to the MTX dose in mg (molar equivalence). Hydration: Aggressive IV fluid hydration (2-3 L/day) to maintain urine output >100 mL/h and urinary alkalinization (urine pH >7) with IV Sodium Bicarbonate — this prevents MTX precipitation in renal tubules (MTX is less soluble in acidic urine). If MTX level remains >10 micromol/L at 24h, consider glucarpidase (carboxypeptidase G2) — enzymatic cleavage of MTX to inactive metabolites.'
        },
        {
          title: 'Critical Drug Interactions with Methotrexate — NSAIDs, PPIs, TMP-SMX',
          organization: 'Clinical Pharmacology Consensus / FDA Drug Safety',
          text: 'Drugs that increase MTX toxicity by reducing renal clearance: (1) NSAIDs (Diclofenac, Ibuprofen): Inhibit renal prostaglandin synthesis → reduce renal blood flow → impair GFR and tubular secretion of MTX. Risk is HIGHEST with high-dose MTX (oncology) but significant even at RA doses. (2) PPIs (Omeprazole, Pantoprazole): Inhibit OAT3 (Organic Anion Transporter 3) in renal tubules, the primary secretory pathway for MTX → 50-100% increase in MTX levels. Especially dangerous with renal impairment. (3) TMP-SMX (Co-trimoxazole): Inhibits DHFR synergistically with MTX AND competes for OAT3 → severe pancytopenia. Avoid ALL three classes in MTX patients, especially those with CKD.'
        }
      ],
      calculations: [
        {
          name: 'Cockcroft-Gault CrCl for Kamla to Assess MTX Clearance Risk',
          formula: 'CrCl (mL/min) = [(140 - Age) × IBW] / (72 × SCr) × 0.85 (female); IBW (F) = 45.5 + 2.3 × (Ht in inches - 60)',
          explanation: 'Kamla: Age 62, female, SCr 1.5 mg/dL, approximate weight 55 kg, height ~155 cm (61 in). IBW = 45.5 + 2.3×(61-60) = 47.8 kg. CrCl = [(140-62) × 47.8] / (72 × 1.5) × 0.85 = [78 × 47.8] / 108 × 0.85 = 3728.4/108 × 0.85 = 34.5 × 0.85 = 29.3 mL/min. This indicates Stage 4 CKD (eGFR <30) — MTX should be CONTRAINDICATED or used at maximum 25% of dose with close monitoring. Kamla\'s CrCl of 29 mL/min combined with daily dosing explains the catastrophic accumulation.'
        },
        {
          name: 'Leucovorin Rescue Dose Equivalence',
          formula: 'Leucovorin dose (mg) ≥ MTX dose (mg); give Q6H until MTX level <0.05 micromol/L',
          explanation: 'Kamla was inadvertently taking MTX 7.5 mg/day × 14 days = 105 mg total cumulative dose. Minimum Leucovorin rescue: 15 mg Q6H IV (60 mg/day) until clinical recovery. Standard leucovorin for oncology high-dose MTX rescue: 15 mg/m² Q6H for 10 doses. Monitor: CBC daily, SCr Q12-24h, MTX level at 24-48h. Goal: MTX serum level <0.1 micromol/L before stopping leucovorin.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Leucovorin rescue work while standard Folic Acid does not in MTX toxicity?',
          rationale: 'MTX is a structural analog of folic acid that competitively and tightly binds to dihydrofolate reductase (DHFR), the enzyme that converts dietary folic acid (dihydrofolate) to its active form (tetrahydrofolate/THF). With DHFR blocked, even abundant dietary folate cannot be converted to THF. Leucovorin (5-formyltetrahydrofolate / folinic acid) is a PRE-REDUCED folate that BYPASSES DHFR entirely — it enters the folate pathway directly as an active cofactor for thymidylate synthase and other enzymes. Leucovorin rescues normal cells (bone marrow, GI mucosa) from folate depletion WITHOUT reversing MTX\'s anti-tumor or anti-inflammatory effects significantly (cancer cells have lower rescue capacity).'
        },
        {
          question_text: 'Why does OAT3 inhibition by PPIs increase MTX toxicity specifically?',
          rationale: 'Methotrexate is primarily eliminated by renal tubular secretion via OAT3 (Organic Anion Transporter 3) on the basolateral membrane of proximal tubular cells. OAT3 secretes MTX from blood into tubular lumen for urinary excretion. PPIs (Omeprazole, Pantoprazole) compete with MTX for OAT3 binding — acting as competitive inhibitors of this transporter. When OAT3 is inhibited, MTX tubular secretion drops dramatically, and the drug accumulates in plasma. In Kamla\'s case, the combination of NSAIDs (reduced GFR) + PPI (reduced tubular secretion) + CKD baseline = complete failure of MTX elimination at any dose.'
        },
        {
          question_text: 'What patient education must be given at every MTX prescription to prevent this error?',
          rationale: 'Every MTX prescription for RA must include: (1) Explicit verbal and written instruction: "This medication is taken ONCE PER WEEK, not every day." (2) Mark the specific day of the week on packaging. (3) Dispense only 4-5 tablets at a time (weekly dispensing). (4) Provide a wallet card or SAFERMEDS leaflet listing danger signs: mouth sores (first sign), fever, sore throat, unusual bruising. (5) Emergency instructions: "Stop immediately and go to emergency if you develop fever, sore throat, or severe mouth sores." (6) Inform: Do NOT take NSAIDs, TMP-SMX, or aspirin without pharmacist consultation. This is a WHO High Alert Medication — pharmacist verification of dose frequency is mandatory before dispensing.'
        }
      ],
      mnemonics: [
        {
          name: 'Methotrexate Toxicity Monitoring (M-U-C-O-S-A)',
          concept: 'Clinical signs of MTX toxicity — remember WEEKLY dosing is mandatory for RA',
          bullets: [
            'M — Mucositis: Painful oral ulcers, stomatitis (EARLIEST sign — appears within days of overdose)',
            'U — Urine: Decreased output, rising SCr (MTX precipitates in acidic urine → crystal nephropathy)',
            'C — CBC suppression: Pancytopenia — WBC↓, platelets↓, Hb↓ (marrow most sensitive)',
            'O — Omission error: MTX for RA = ONCE WEEKLY. Daily dosing is a life-threatening prescription error',
            'S — Sore throat/Fever: Signals neutropenic fever — requires blood cultures + empiric antibiotics immediately',
            'A — Alveolitis: MTX-induced interstitial pneumonitis — new dry cough + dyspnea = STOP MTX and check CXR/CT',
            'AVOID WITH MTX: NSAIDs (renal blood flow↓), PPIs (OAT3 inhibition), TMP-SMX (DHFR inhibition + OAT3 competition)'
          ]
        }
      ]
    },
    tags: ['methotrexate', 'toxicity', 'leucovorin', 'NSAID-interaction', 'weekly-dosing'],
    source: 'seed',
    created_at: '2025-01-10T00:00:00Z',
  },

  // CASE 11: ONCOLOGY / INFECTIOUS DISEASES
  {
    id: 'seed-011',
    title: 'Post-Chemotherapy Febrile Neutropenia',
    subject_area: 'oncology_hematology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Priya Sharma',
      age: 45,
      sex: 'F',
      ward: 'Oncology',
      bed: '5A',
      presenting_complaint: 'Fever (39.2°C) and profound fatigue 10 days after receiving CHOP chemotherapy.',
      pmh: ['Non-Hodgkin Lymphoma', 'Hypertension'],
      medications: [
        { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Paracetamol', dose: '650 mg', frequency: 'TDS PRN', route: 'Oral' },
        { drug: 'Filgrastim (G-CSF)', dose: '300 mcg', frequency: 'OD', route: 'SC' }
      ],
      allergies: ['Penicillin (Anaphylaxis)'],
      labs: [
        { name: 'Temp', value: '39.2', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
        { name: 'WBC', value: '0.8', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
        { name: 'ANC', value: '300', unit: 'cells/mm3', reference: '>1500', is_abnormal: true }
      ]
    },
    questions: [
      {
        id: 'q-011-1', case_id: 'seed-011',
        question_text: 'Which empiric antibiotic is most appropriate for this patient with high-risk febrile neutropenia and a severe Penicillin allergy?',
        option_a: 'Piperacillin-Tazobactam',
        option_b: 'Cefepime',
        option_c: 'Meropenem',
        option_d: 'Aztreonam plus Vancomycin',
        correct_option: 'D',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Aztreonam covers Pseudomonas safely in penicillin anaphylaxis, and Vancomycin covers Gram-positives.',
        subject_reference: 'Oncology Pharmacy'
      },
      {
        id: 'q-011-2', case_id: 'seed-011',
        question_text: 'What is a key counseling point or timing consideration for Filgrastim (G-CSF)?',
        option_a: 'Give immediately simultaneously with chemotherapy',
        option_b: 'Administer at least 24 hours after completion of chemotherapy',
        option_c: 'Administer only orally on an empty stomach',
        option_d: 'Avoid in patients with solid tumors',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'G-CSF should not be given within 24 hours before or after cytotoxic chemotherapy.',
        subject_reference: 'Oncology Pharmacy'
      },
      {
        id: 'q-011-3', case_id: 'seed-011',
        question_text: 'What is the most critical infection control measure for a patient with an ANC of 300?',
        option_a: 'Reverse isolation and strict hand hygiene',
        option_b: 'Airborne isolation in a negative pressure room',
        option_c: 'Standard precautions only',
        option_d: 'Prophylactic daily platelet transfusions',
        correct_option: 'A',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Neutropenic precautions include reverse isolation (positive pressure) and strict hygiene.',
        subject_reference: 'Clinical Pharmacy'
      }
    ],
    phases: [
      {
        id: 'seed-011-phase-1',
        title: 'Day 1: Febrile Neutropenia',
        description: 'Patient presents with fever 10 days post-chemo.',
        patient_snapshot: {
          name: 'Priya Sharma',
          age: 45,
          sex: 'F',
          ward: 'Oncology',
          bed: '5A',
          presenting_complaint: 'Fever 10 days after chemo.',
          pmh: ['Non-Hodgkin Lymphoma', 'Hypertension'],
          medications: [
            { drug: 'Filgrastim (G-CSF)', dose: '300 mcg', frequency: 'OD', route: 'SC' }
          ],
          allergies: ['Penicillin (Anaphylaxis)'],
          labs: [
            { name: 'Temp', value: '39.2', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
            { name: 'ANC', value: '300', unit: 'cells/mm3', reference: '>1500', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-011-1', case_id: 'seed-011',
            question_text: 'Which empiric antibiotic is most appropriate for this patient with high-risk febrile neutropenia and a severe Penicillin allergy?',
            option_a: 'Piperacillin-Tazobactam',
            option_b: 'Cefepime',
            option_c: 'Meropenem',
            option_d: 'Aztreonam plus Vancomycin',
            correct_option: 'D',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Aztreonam provides Gram-negative coverage safely in penicillin anaphylaxis.',
            subject_reference: 'Oncology Pharmacy'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'IDSA Clinical Practice Guidelines for Antimicrobials in Neutropenic Patients with Cancer (2010, updated 2018)',
          organization: 'IDSA',
          text: 'DEFINITION: Fever = single oral temp ≥38.3°C OR ≥38.0°C sustained ≥1 hour. Neutropenia = ANC <500 cells/μL or expected to drop <500 within 48h. MASCC Risk Stratification: High-risk (score <21) — IV hospitalization mandatory. EMPIRIC THERAPY must start WITHIN 1 HOUR: (1) Monotherapy with antipseudomonal beta-lactam: Piperacillin-Tazobactam 4.5g IV Q6H (preferred at most centers), OR Cefepime 2g IV Q8H, OR Meropenem 1g IV Q8H (for beta-lactam-allergic or ESBL suspected). (2) Add Vancomycin 15 mg/kg IV Q12H ONLY if: hemodynamic instability, known MRSA colonization, skin/soft tissue infection, or positive blood culture with gram-positive cocci. (3) Duration: continue until afebrile for ≥48h AND ANC >500 cells/μL on 2 consecutive days.'
        },
        {
          title: 'ASCO Guidelines on Myeloid Growth Factors (G-CSF) in Cancer — 2015',
          organization: 'ASCO',
          text: 'Primary prophylactic G-CSF (Filgrastim 5 mcg/kg SC daily) is recommended when febrile neutropenia risk is >20% based on regimen (Cisplatin + Etoposide = 15-20% risk — borderline, consider G-CSF). Therapeutic G-CSF in ESTABLISHED febrile neutropenia: beneficial in high-risk patients (age >65, profound neutropenia ANC <100, sepsis, invasive fungal infection, prior fungal infection). NOT recommended as routine adjunct in all neutropenic fever episodes. Continue until ANC recovers to >10,000 cells/μL post-nadir or ≥2 consecutive days above 1000 cells/μL. Filgrastim must NOT be given within 24 hours before or after chemotherapy administration.'
        },
        {
          title: 'ASCO/ESMO Antiemetic Guidelines — CINV Prophylaxis for Highly Emetogenic Chemotherapy (2020)',
          organization: 'ASCO/ESMO',
          text: 'Cisplatin is a HIGHLY EMETOGENIC agent (HEC, >90% emetogenicity). Standard 4-drug antiemetic prophylaxis for HEC: (1) NK1 Receptor Antagonist: Aprepitant 125 mg Day 1, then 80 mg Days 2-3 OR IV Fosaprepitant 150 mg Day 1 alone; (2) 5-HT3 Antagonist: Ondansetron 8 mg IV or Palonosetron 0.25 mg IV before chemo; (3) Dexamethasone 12 mg IV Day 1, then 8 mg OD Days 2-4 (synergizes with all antiemetics); (4) Olanzapine 10 mg OD Days 1-4 (blocks D2, 5-HT2, H1, M receptors — excellent for refractory nausea). Acute CINV (0-24h): primarily 5-HT3 driven. Delayed CINV (24-120h): primarily NK1/substance P driven — Aprepitant critical for this phase.'
        }
      ],
      calculations: [
        {
          name: 'Absolute Neutrophil Count (ANC)',
          formula: 'ANC (cells/μL) = WBC (cells/μL) × [(%Segmented neutrophils + %Bands) / 100]',
          explanation: 'Narendra: WBC = 400 cells/μL; Neutrophils = 45%. ANC = 400 × 0.45 = 180 cells/μL. Classification: Mild neutropenia: 1000-1500; Moderate: 500-1000; Severe: 100-500 (Narendra\'s = 180); Profound: <100. An ANC of 180 cells/μL with fever = HIGH-RISK febrile neutropenia requiring immediate IV hospitalization and empiric antipseudomonal antibiotics within 60 minutes of fever identification.'
        },
        {
          name: 'MASCC (Multinational Association of Supportive Care in Cancer) Score',
          formula: 'Score: Burden of illness (5=none/mild, 3=moderate), Age <60 (2), Outpatient (3), No hypotension (5), No COPD (4), Solid tumor/lymphoma (4), No dehydration (3). Total ≥21 = low risk',
          explanation: 'Narendra\'s MASCC estimate: Outpatient (3) + Age 48 (2) + No COPD (4) + No hypotension (5) + Solid tumor (4) + No dehydration (3) + moderate illness burden (3) = 24. MASCC ≥21 suggests low-risk, potentially eligible for oral antibiotics at home (Ciprofloxacin + Amoxicillin-Clavulanate). However, given SCLC Stage IV and ANC <100 cells/μL (actual profound), most oncologists would treat as high-risk. Use MASCC as a tool, not a rigid rule.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Pseudomonas aeruginosa specifically targeted in neutropenic fever empiric therapy?',
          rationale: 'Pseudomonas aeruginosa is an opportunistic gram-negative pathogen with multiple virulence factors: endotoxin, proteases, and exotoxins. In neutropenic hosts (ANC <500), it can rapidly progress from bacteremia to septic shock and death within 24-48 hours. Historical data showed pseudomonal bacteremia in neutropenic cancer patients carried 80% mortality before the antipseudomonal antibiotic era. Even today, delayed appropriate antibiotics for pseudomonal sepsis carries >40% mortality. Ceftriaxone, Amoxicillin, and first/second-gen cephalosporins lack anti-pseudomonal activity — this is why Pip-Taz, Cefepime, or carbapenems are mandatory as FIRST-CHOICE agents.'
        },
        {
          question_text: 'Why is the Dexamethasone component of the CINV regimen critical yet often omitted?',
          rationale: 'Dexamethasone is arguably the single most effective antiemetic for CINV — its mechanism is unclear but likely involves: (1) Prostaglandin synthesis inhibition in the chemoreceptor trigger zone; (2) Modulation of 5-HT3 receptor sensitivity; (3) Anti-inflammatory effects reducing GI mucosal irritation. Multiple RCTs confirm that adding Dexamethasone to any combination significantly improves complete response rates. However, it is frequently omitted due to concerns about hyperglycemia, fluid retention, and insomnia. In diabetic patients, short-course Dex can be used with insulin correction protocols. Missing Dexamethasone from the regimen is a pharmacist-identifiable prescribing omission.'
        },
        {
          question_text: 'Why is Tramadol inappropriate for pain management in a neutropenic oncology patient?',
          rationale: 'Tramadol has multiple risks in this patient: (1) Serotonergic effects — combined with ondansetron (weak serotonergic) and potential SSRIs raises serotonin syndrome risk; (2) Lowers seizure threshold — problematic with Cisplatin-induced neurotoxicity; (3) QT prolongation risk — additive with Ondansetron (which also prolongs QTc); (4) CYP2D6-dependent activation — variable efficacy depending on CYP2D6 phenotype; (5) Nausea is a side effect — counterproductive in already highly emetogenic chemotherapy setting. Preferred analgesia: Paracetamol 650 mg Q6H (mild-moderate pain), Morphine IR or Oxycodone (moderate-severe cancer pain, WHO Step 3 analgesic ladder).'
        }
      ],
      mnemonics: [
        {
          name: 'Antipseudomonal Beta-Lactams (P-I-P-E-R) for Neutropenic Fever',
          concept: 'First-line empiric antibiotic options for febrile neutropenia — all must have antipseudomonal activity',
          bullets: [
            'P — Piperacillin-Tazobactam 4.5g IV Q6H (most commonly used; broad gram-negative + anaerobic coverage)',
            'I — Imipenem-Cilastatin 500 mg IV Q6H or Meropenem 1g IV Q8H (carbapenems — for ESBL suspicion or beta-lactam allergic alternative)',
            'P — Penems + Vancomycin: Add Vancomycin 15-20 mg/kg Q12H ONLY for hemodynamic instability or gram-positive focus',
            'E — Cefepime 2g IV Q8H (4th gen cephalosporin — excellent pseudomonal + gram-positive coverage)',
            'R — Ceftazidime 2g IV Q8H (3rd gen cephalosporin — pseudomonal coverage but poor gram-positive)',
            'NEVER USE as sole therapy: Ceftriaxone (no pseudomonal coverage), Metronidazole alone, or Ciprofloxacin alone',
            'ANC GOAL before stopping antibiotics: ≥500 cells/μL on rising trend + afebrile ≥48h'
          ]
        }
      ]
    },
    tags: ['febrile-neutropenia', 'oncology', 'G-CSF', 'Pseudomonas', 'aprepitant'],
    source: 'seed',
    created_at: '2025-01-11T00:00:00Z',
  },

  // CASE 12: CRITICAL CARE / INFECTIONS
  {
    id: 'seed-012',
    title: 'Septic Shock & Intensive Care Management',
    subject_area: 'infectious_diseases',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Ravi Kumar',
      age: 62,
      sex: 'M',
      ward: 'ICU',
      bed: '2',
      presenting_complaint: 'Hypotension and altered sensorium. Septic shock.',
      pmh: ['Type 2 Diabetes'],
      medications: [
        { drug: 'Meropenem', dose: '1 g', frequency: 'TDS', route: 'IV' },
        { drug: 'Vancomycin', dose: '1 g', frequency: 'BD', route: 'IV' },
        { drug: 'Norepinephrine', dose: '0.1 mcg/kg/min', frequency: 'Continuous', route: 'IV' }
      ],
      allergies: ['None'],
      labs: [
        { name: 'BP', value: '80/50', unit: 'mmHg', reference: '120/80', is_abnormal: true },
        { name: 'Lactate', value: '4.5', unit: 'mmol/L', reference: '<2.0', is_abnormal: true }
      ]
    },
    questions: [
      {
        id: 'q-012-1', case_id: 'seed-012',
        question_text: 'To optimize the pharmacodynamics of Meropenem in septic shock, which administration strategy is preferred?',
        option_a: 'Rapid IV push',
        option_b: 'Extended infusion over 3-4 hours',
        option_c: 'Once daily dosing',
        option_d: 'IM route',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Beta-lactams are time-dependent; extended infusions maximize T>MIC.',
        subject_reference: 'Pharmacokinetics'
      },
      {
        id: 'q-012-2', case_id: 'seed-012',
        question_text: 'What is the target trough level for Vancomycin in complicated sepsis?',
        option_a: '5-10 mg/L',
        option_b: '10-15 mg/L',
        option_c: '15-20 mg/L',
        option_d: '25-30 mg/L',
        correct_option: 'C',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Target is 15-20 mg/L for severe complicated infections.',
        subject_reference: 'Pharmacokinetics'
      },
      {
        id: 'q-012-3', case_id: 'seed-012',
        question_text: 'Which is a critical safety consideration for Norepinephrine administration?',
        option_a: 'Only peripheral IV',
        option_b: 'Must be central venous catheter',
        option_c: 'Mix with sodium bicarbonate',
        option_d: 'Rapid IV bolus',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Extravasation causes tissue necrosis; central line is required.',
        subject_reference: 'Critical Care'
      }
    ],
    phases: [
      {
        id: 'seed-012-phase-1',
        title: 'Day 1: Septic Shock',
        description: 'Patient in septic shock requiring vasopressors.',
        patient_snapshot: {
          name: 'Ravi Kumar',
          age: 62,
          sex: 'M',
          ward: 'ICU',
          bed: '2',
          presenting_complaint: 'Septic shock',
          pmh: ['Type 2 Diabetes'],
          medications: [
            { drug: 'Norepinephrine', dose: '0.1 mcg/kg/min', frequency: 'Continuous', route: 'IV' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'BP', value: '80/50', unit: 'mmHg', reference: '120/80', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-012-3', case_id: 'seed-012',
            question_text: 'Which is a critical safety consideration for Norepinephrine administration?',
            option_a: 'Only peripheral IV',
            option_b: 'Must be central venous catheter',
            option_c: 'Mix with sodium bicarbonate',
            option_d: 'Rapid IV bolus',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Extravasation causes tissue necrosis; central line is required.',
            subject_reference: 'Critical Care'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Surviving Sepsis Campaign (SSC) — International Guidelines 2021',
          organization: 'SSC/SCCM/ESICM',
          text: 'Sepsis-3 Definition: Life-threatening organ dysfunction caused by a dysregulated host response to infection. Septic shock = sepsis + vasopressor requirement to maintain MAP ≥65 mmHg AND serum lactate >2 mmol/L. THE 1-HOUR BUNDLE: (1) Measure serum lactate; (2) Obtain blood cultures BEFORE antibiotics (at least 2 sets, aerobic + anaerobic); (3) Administer BROAD-SPECTRUM IV antibiotics within 1 HOUR of recognition; (4) Start 30 mL/kg IV crystalloid bolus (RL or NS) for hypotension or lactate ≥4 mmol/L; (5) Vasopressors: Norepinephrine (NE) 0.01-3 mcg/kg/min via central line if MAP remains <65 after fluids. Vasopressin 0.03 units/min can be added to NE when NE dose ≥0.25 mcg/kg/min. Hydrocortisone 200 mg/day IV infusion for refractory septic shock not responding to NE ≥0.25 mcg/kg/min.'
        },
        {
          title: 'SSC 2021 — Antibiotic Stewardship and Pharmacokinetic Optimization in Sepsis',
          organization: 'SSC/ESCMID',
          text: 'Empiric antimicrobial selection in septic shock must cover all likely pathogens based on source: Intra-abdominal source (post-surgical) → gram-negatives (Enterobacterales, Pseudomonas) + anaerobes: Meropenem 1g Q8H (extended infusion 3h) + Metronidazole 500mg Q8H. Add MRSA coverage (Vancomycin) for ICU patients with hospital-acquired infection, skin source, or known MRSA. De-escalation principle: once culture sensitivities available, narrow antibiotics within 48-72 hours. Beta-lactam Extended Infusion (EI): For time-dependent bactericidal drugs, maintaining T>MIC >50% of the dosing interval is the PD target. EI (3-4 hour infusion) achieves T>MIC >80-100%, optimizing bactericidal activity — especially critical for resistant organisms and in critically ill patients with augmented renal clearance.'
        },
        {
          title: 'DVT/VTE Prophylaxis in ICU Patients — ACCP Guidelines 2016',
          organization: 'ACCP',
          text: 'All ICU patients without contraindications should receive pharmacological VTE prophylaxis. Preferred: LMWH (Enoxaparin 40 mg SC OD) over UFH. RENAL DOSING: If CrCl <30 mL/min, Enoxaparin dose should be reduced to 20-30 mg SC OD OR switch to Unfractionated Heparin (UFH) 5000 units SC TDS (UFH is not renally eliminated, preferred in severe AKI). Monitoring: Anti-Xa levels 4 hours post-dose for Enoxaparin if dose adjustment needed (target prophylactic: 0.2-0.5 IU/mL). Mechanical VTE prophylaxis (compression stockings, pneumatic compression) should always be used in addition to pharmacological prophylaxis for ICU patients.'
        }
      ],
      calculations: [
        {
          name: 'Mean Arterial Pressure (MAP) Calculation',
          formula: 'MAP = [SBP + 2(DBP)] / 3; TARGET in septic shock: MAP ≥65 mmHg',
          explanation: 'Manish\'s vitals: BP 82/48 mmHg. MAP = [82 + 2(48)] / 3 = [82 + 96] / 3 = 178/3 = 59.3 mmHg. This is BELOW the SSC target of ≥65 mmHg — confirming vasopressor need. After 30 mL/kg fluid (30 × 70 = 2100 mL = 2.1L given), if MAP still <65, initiate Norepinephrine at 0.01 mcg/kg/min and titrate to MAP target. Current Norepinephrine at 0.1 mcg/kg/min in 70 kg patient = 7 mcg/min. This is a moderate dose — requires central line. Reassess MAP every 30 minutes.'
        },
        {
          name: 'Enoxaparin Dose Adjustment for Manish\'s eGFR (AKI)',
          formula: 'Standard dose: Enoxaparin 40 mg SC OD (eGFR ≥30). Adjusted: 20-30 mg SC OD (eGFR <30). Alternative: UFH 5000 units SC Q8H (if eGFR <15 or on HD)',
          explanation: 'Manish\'s eGFR = 42 mL/min (impaired, on rising trajectory in AKI). Using Cockcroft-Gault: CrCl = [(140-60) × 70] / (72 × 1.8) = [80×70]/129.6 = 5600/129.6 = 43.2 mL/min. Standard dose 40 mg OD is borderline — if SCr continues to rise (eGFR approaching <30), must reduce to 20-30 mg OD OR switch to UFH. Check anti-Xa levels. Note: the pharmacist should flag this now and set up a monitoring plan for SCr Q12H with auto-escalation to UFH if eGFR drops below 30.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Norepinephrine preferred over Dopamine as first-line vasopressor in septic shock?',
          rationale: 'The SOAP II trial (NEJM 2010, n=1679) directly compared Norepinephrine vs. Dopamine in shock states. Dopamine produced significantly higher rates of cardiac arrhythmias (24.1% vs 12.4%) — particularly atrial fibrillation — due to its beta-1 stimulatory effect at higher doses. In septic shock subgroup, dopamine was associated with higher 28-day mortality. Norepinephrine acts predominantly on alpha-1 receptors (vasoconstriction) with minimal beta-1 effect at standard doses, raising SVR and MAP without significant tachycardia. Phenylephrine (pure alpha-1) is used when tachycardia is a concern. Vasopressin (V1 receptor) reduces NE requirements when added as adjunct.'
        },
        {
          question_text: 'What is the PK/PD rationale for extended-infusion (EI) meropenem in this patient?',
          rationale: 'Beta-lactam antibiotics (penicillins, cephalosporins, carbapenems) demonstrate TIME-DEPENDENT bactericidal killing. Their efficacy is best correlated with the percentage of the dosing interval during which free drug concentration exceeds the bacterial MIC (T>MIC target: ≥40% for bacteriostasis, ≥70% for bactericidal effect against resistant organisms). Standard 30-minute bolus infusion of Meropenem 1g achieves peak levels of ~30-50 mcg/mL but falls below MIC for susceptible organisms (MIC ≤2) for 40-50% of the dosing interval. Extended 3-hour infusion of the same dose maintains free drug >MIC for >80% of the interval — significantly improving PD target attainment against intermediate-resistant organisms (MIC 4-8). Critical in ICU patients where augmented renal clearance can reduce drug exposure.'
        },
        {
          question_text: 'Why is blood lactate the key marker for sepsis severity and treatment response?',
          rationale: 'Serum lactate (>2 mmol/L = abnormal; >4 mmol/L = shock definition regardless of BP) reflects tissue oxygen debt — anaerobic metabolism from inadequate tissue perfusion. In septic shock, lactate rises due to: (1) Impaired oxygen delivery (low cardiac output, microcirculatory shunting); (2) Mitochondrial dysfunction (impaired pyruvate oxidation despite adequate O2 delivery). Lactate-guided resuscitation (targeting lactate clearance ≥10% per 2 hours) outperforms BP-guided resuscitation alone in reducing mortality. SSC recommends lactate measurement at 0h and 2h — if lactate ≥4 mmol/L, give 30 mL/kg crystalloid bolus regardless of initial BP. Manish\'s lactate of 3.8 mmol/L indicates severe tissue hypoperfusion — aggressive resuscitation with vasopressors and fluids is mandatory.'
        }
      ],
      mnemonics: [
        {
          name: 'Sepsis 1-Hour Bundle (L-C-A-F-V)',
          concept: 'The SSC 2021 mandated 1-hour bundle — measurable and time-bound interventions',
          bullets: [
            'L — Lactate: Measure serum lactate immediately. If >2 = sepsis; if >4 = septic shock. Re-measure at 2h to assess resuscitation response',
            'C — Cultures: Blood cultures (2 sets, aerobic+anaerobic) BEFORE antibiotics. Also urine, wound, sputum as indicated. Takes <5 min. Never delays antibiotics by >45 min',
            'A — Antibiotics: Broad-spectrum IV within 1 HOUR of sepsis recognition. Every hour delay = 7% increase in mortality (Kumar 2006). De-escalate within 48-72h based on culture results',
            'F — Fluids: 30 mL/kg IV crystalloid for hypotension (MAP<65) or lactate ≥4 mmol/L. Balanced crystalloids (RL/PlasmaLyte) preferred over NS (hyperchloremic metabolic acidosis risk with large-volume NS)',
            'V — Vasopressors: Start Norepinephrine 0.01-0.5 mcg/kg/min if MAP <65 after adequate fluids. Central line preferred. Arterial line for continuous MAP monitoring',
            'REMEMBER: Steroids (Hydrocortisone 200 mg/day IV) for vasopressor-refractory shock (NE ≥0.25 mcg/kg/min). Glucose target: 140-180 mg/dL with insulin infusion protocol'
          ]
        }
      ]
    },
    tags: ['sepsis', 'norepinephrine', 'meropenem', 'enoxaparin', 'icu'],
    source: 'seed',
    created_at: '2025-01-12T00:00:00Z',
  },

  // CASE 13: NEUROLOGY / PSYCHIATRY
  {
    id: 'seed-013',
    title: 'Major Depressive Disorder & Serotonin Syndrome',
    subject_area: 'neurology_psychiatry',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Anjali Verma',
      age: 28,
      sex: 'F',
      ward: 'Emergency',
      bed: '4',
      presenting_complaint: 'Agitation, confusion, diaphoresis, shivering, muscle twitching.',
      pmh: ['MDD'],
      medications: [
        { drug: 'Fluoxetine', dose: '40 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Tramadol', dose: '50 mg', frequency: 'TDS', route: 'Oral' },
        { drug: 'Ondansetron', dose: '8 mg', frequency: 'BD PRN', route: 'Oral' }
      ],
      allergies: ['None'],
      labs: [
        { name: 'Temp', value: '38.5', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
        { name: 'Reflexes', value: 'Hyperreflexia and Clonus', unit: '', reference: 'Normal', is_abnormal: true }
      ]
    },
    questions: [
      {
        id: 'q-013-1', case_id: 'seed-013',
        question_text: 'The combination of Fluoxetine, Tramadol, and Ondansetron has precipitated which condition?',
        option_a: 'Neuroleptic Malignant Syndrome',
        option_b: 'Serotonin Syndrome',
        option_c: 'Malignant Hyperthermia',
        option_d: 'Anticholinergic Toxicity',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'All three drugs increase serotonergic activity, causing Serotonin Syndrome.',
        subject_reference: 'Toxicology'
      },
      {
        id: 'q-013-2', case_id: 'seed-013',
        question_text: 'What is the pharmacological antidote of choice for severe Serotonin Syndrome?',
        option_a: 'Flumazenil',
        option_b: 'Cyproheptadine',
        option_c: 'Dantrolene',
        option_d: 'Naloxone',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'Cyproheptadine is a serotonin antagonist used as an antidote.',
        subject_reference: 'Toxicology'
      },
      {
        id: 'q-013-3', case_id: 'seed-013',
        question_text: 'How does Serotonin Syndrome neuromuscular presentation differ from NMS?',
        option_a: 'SS causes "lead-pipe" rigidity',
        option_b: 'SS causes hyperreflexia and clonus, NMS causes "lead-pipe" rigidity',
        option_c: 'Only SS causes high fever',
        option_d: 'NMS causes miosis',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'SS has hyperkinesia (clonus), while NMS has bradykinesia (rigidity).',
        subject_reference: 'Toxicology'
      }
    ],
    phases: [
      {
        id: 'seed-013-phase-1',
        title: 'Day 1: Toxicology Emergency',
        description: 'Patient with hyperreflexia and fever.',
        patient_snapshot: {
          name: 'Anjali Verma',
          age: 28,
          sex: 'F',
          ward: 'Emergency',
          bed: '4',
          presenting_complaint: 'Agitation, diaphoresis, clonus.',
          pmh: ['MDD'],
          medications: [
            { drug: 'Fluoxetine', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Tramadol', dose: '50 mg', frequency: 'TDS', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'Temp', value: '38.5', unit: '°C', reference: '36.5-37.5', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-013-2', case_id: 'seed-013',
            question_text: 'What is the pharmacological antidote of choice for severe Serotonin Syndrome?',
            option_a: 'Flumazenil',
            option_b: 'Cyproheptadine',
            option_c: 'Dantrolene',
            option_d: 'Naloxone',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Cyproheptadine is a serotonin antagonist used as an antidote.',
            subject_reference: 'Toxicology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Hunter Serotonin Toxicity Criteria — Diagnosis of Serotonin Syndrome',
          organization: 'Clinical Toxicology Consensus (Boyer & Shannon)',
          text: 'Serotonin toxicity is diagnosed if a patient has taken a serotonergic agent AND presents with AT LEAST ONE of: (1) SPONTANEOUS CLONUS (ankle or ocular) alone; (2) INDUCIBLE CLONUS PLUS agitation OR diaphoresis; (3) OCULAR CLONUS PLUS agitation OR diaphoresis; (4) TREMOR PLUS HYPERREFLEXIA; (5) HYPERTONIA PLUS temperature >38°C PLUS ocular clonus OR inducible clonus. The Hunter Criteria have 84% sensitivity and 97% specificity for serotonin toxicity confirmed by clinical toxicologist. NOTE: Clonus (rhythmic muscle contractions with passive stretch) is the key distinguishing feature from NMS (which has "lead-pipe" rigidity WITHOUT clonus). Severity grading: Mild (tremor, hyperreflexia, diaphoresis), Moderate (temp <41°C, clonus, agitation), Severe (temp >41°C, rhabdomyolysis, seizures, multi-organ failure).'
        },
        {
          title: 'Management Protocol for Serotonin Syndrome — Toxicology Guidelines',
          organization: 'American College of Medical Toxicology (ACMT)',
          text: 'MILD SS: Discontinue all serotonergic drugs. Benzodiazepines (Lorazepam 1-2 mg IV Q2-4H PRN) for agitation and muscle rigidity. Monitor vitals, temperature, and clonus. MODERATE SS: All of above PLUS Cyproheptadine 12 mg PO/NG loading, then 2-4 mg Q4-6H (max 32 mg/day) — 5-HT1A and 5-HT2 antagonist. SEVERE SS (temp >41°C, muscle breakdown, hemodynamic instability): ICU admission, immediate cooling (ice packs, cooling blankets), aggressive IV fluids for rhabdomyolysis and hyperkalemia risk, Cyproheptadine, Lorazepam infusion. Neuromuscular blockade (Vecuronium) + intubation if temperature uncontrolled. Do NOT use Succinylcholine (causes fatal hyperkalemia in rhabdomyolysis). Avoid physical restraints (worsen hyperthermia). Monitor: CK, BMP, CBC, coagulation (DIC risk in severe cases).'
        },
        {
          title: 'Serotonin Syndrome vs Neuroleptic Malignant Syndrome — Differential Diagnosis',
          organization: 'Clinical Toxicology / Neurology Consensus',
          text: 'SS vs NMS key differences: (1) ONSET: SS is RAPID (minutes-hours after drug addition/dose change); NMS is INSIDIOUS (days-weeks after antipsychotic initiation). (2) MOTOR FINDINGS: SS = hyperreflexia, clonus, myoclonus; NMS = "lead-pipe" rigidity, no clonus. (3) TEMPERATURE: Both can be extremely high, but SS-induced hyperthermia is from muscle activity (clonus/shivering) — NOT thermoregulatory failure. (4) CAUSATIVE DRUGS: SS = serotonergic agents (SSRIs, SNRIs, Tramadol, Triptans, Linezolid, Fentanyl, Dextromethorphan); NMS = dopamine antagonists (Haloperidol, Risperidone, Metoclopramide, Promethazine, Droperidol). (5) TREATMENT: SS = Cyproheptadine (5-HT antagonist); NMS = Bromocriptine/Cabergoline (D2 agonist), Dantrolene (for hyperthermia from rigidity).'
        }
      ],
      calculations: [
        {
          name: 'Naranjo ADR Causality Algorithm — Sertraline/Tramadol-Induced Serotonin Syndrome',
          formula: '10 questions scored: Yes(+)/No(-)/Unknown(0). Score ≥9=Definite, 5-8=Probable, 1-4=Possible, 0=Doubtful',
          explanation: 'For Rohan\'s case: Previous conclusive report (Q1)=+1; Adverse event appeared after drug given (Q2)=+2; Improved on withdrawal (Q3)=+1; Confirmed by objective evidence/re-challenge (Q4)=+2; Alternative causes excluded (Q5)=+1; Drug detected in blood (Q6)=0; Dose-related severity (Q7)=0; Reaction reported previously for this drug (Q8)=+1; Total estimate ≈ 8 = PROBABLE ADR. This documents the causal relationship for pharmacovigilance reporting (PVPI/Yellow Card). Both Sertraline AND Tramadol should be listed as suspected drugs.'
        },
        {
          name: 'Temperature Correction for Hyperthermia Management',
          formula: 'Target cooling rate: Reduce core temperature to <38.5°C within 30 minutes in severe SS (temp >41°C)',
          explanation: 'Rohan\'s temp = 38.9°C — moderate elevation. Immediate non-pharmacological cooling: remove clothing, apply cool wet towels to neck/axilla/groin, position fan cooling. If temp >41°C: aggressive evaporative cooling (misted water + fans) targeting 0.1-0.2°C/min reduction. Dantrolene (1-2.5 mg/kg IV) reduces hyperthermia from muscle rigidity in NMS but has limited evidence in SS. Ice bath immersion achieves fastest cooling (0.35°C/min) but poses aspiration risk in agitated patients — prefer misting + fans in conscious patients.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Tramadol specifically cause serotonergic toxicity despite being an opioid?',
          rationale: 'Tramadol is a DUAL-MECHANISM analgesic: (1) Weak mu-opioid receptor agonist (via active metabolite O-desmethyltramadol, generated by CYP2D6 — approximately 200× more potent than tramadol itself at mu-opioid receptor); (2) SNRI activity — inhibits BOTH serotonin (5-HT) AND norepinephrine (NE) reuptake transporters (SERT and NET) in the presynaptic nerve terminal. This SNRI activity means tramadol DIRECTLY increases synaptic serotonin — the same mechanism as Sertraline. The COMBINATION: Sertraline blocks SERT (preventing 5-HT reuptake) → Tramadol ALSO blocks SERT → serotonin floods the synapse → excessive activation of 5-HT1A (brainstem) and 5-HT2A (spinal cord, limbic) receptors → serotonin toxicity triad.'
        },
        {
          question_text: 'Why is Ondansetron (a 5-HT3 BLOCKER) paradoxically involved in causing Serotonin Syndrome?',
          rationale: 'This is a common pharmacology misconception. Ondansetron is a 5-HT3 antagonist — it BLOCKS 5-HT3 receptors in the GI tract and CTZ (mechanism of antiemesis). It should theoretically REDUCE serotonin effects. However: (1) Ondansetron has WEAK AGONIST properties at 5-HT3 in the brainstem/spinal cord at high doses; (2) More critically, it has no effect on 5-HT1A or 5-HT2A receptors — which are the receptors responsible for SS symptoms (hyperreflexia, clonus, hyperthermia). A 5-HT3 antagonist cannot prevent SS mediated by 5-HT1A/2A activation. Additionally, some data suggests Ondansetron may mildly impair serotonin metabolism via sigma receptor effects. Ondansetron is contraindicated in known serotonin syndrome risk situations with strong serotoninergic drugs.'
        },
        {
          question_text: 'How does Cyproheptadine work as an antidote in serotonin syndrome?',
          rationale: 'Cyproheptadine is a first-generation antihistamine (H1 blocker) that ALSO has potent ANTAGONIST properties at 5-HT1A and 5-HT2A/2C serotonin receptors. By blocking these postsynaptic receptors, it prevents serotonin from triggering the neurotoxic cascade regardless of how much serotonin accumulates in the synapse. Loading dose: 12 mg PO/NG immediately, then 2-4 mg Q4-6H (max 32 mg/day). Duration: continue until patient afebrile and free of clonus for ≥24 hours. Limitations: (1) Only available as an oral formulation — requires NG tube in intubated patients; (2) H1 blockade can cause sedation (actually beneficial in agitated patients); (3) Anticholinergic effects (urinary retention, ileus) at high doses. No IV formulation available globally. Response usually seen within 30-60 minutes of first dose.'
        }
      ],
      mnemonics: [
        {
          name: 'Serotonin Syndrome vs NMS (S-H-I-V-E-R vs S-L-O-W)',
          concept: 'Key differentiating features between SS and NMS — clinically critical distinction',
          bullets: [
            'S-S (Serotonin Syndrome): SHIVER — Shivering/Sweating; Hyperreflexia+Clonus (KEY!); Instability vitals; Vomiting/GI sx; Excited/Agitated; Rapid onset (hours)',
            'N-M-S (Neuroleptic Malignant Syndrome): SLOW — Slow onset (days-weeks); Lead-pipe rigidity (NO clonus); Obtunded/Stupor; Waxy rigidity',
            'CAUSATIVE DRUGS: SS = Serotonergic (SSRI + Tramadol + Ondansetron = this case); NMS = Antipsychotics (Haloperidol, Risperidone), Metoclopramide',
            'TREATMENT: SS → Cyproheptadine + Benzodiazepines + STOP all serotonergic agents',
            'TREATMENT: NMS → Bromocriptine (D2 agonist) + Dantrolene + STOP antipsychotic',
            'TEMPERATURE: Both can reach 41°C+. SS from muscle hyperactivity; NMS from hypothalamic dysregulation',
            'CLONUS TEST: Dorsiflex ankle passively — rhythmic beats = CLONUS = SS (not NMS). Critical bedside test.'
          ]
        }
      ]
    },
    tags: ['serotonin-syndrome', 'sertraline', 'tramadol', 'cyproheptadine', 'psychiatry'],
    source: 'seed',
    created_at: '2025-01-13T00:00:00Z',
  },

  // CASE 14: NEPHROLOGY
  {
    id: 'seed-014',
    title: 'Drug-Induced AKI (The Triple Whammy)',
    subject_area: 'nephrology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Mohammad Ali',
      age: 70,
      sex: 'M',
      ward: 'Nephrology',
      bed: '10',
      presenting_complaint: 'Oliguria and rising serum creatinine. Recently had a bout of gastroenteritis with severe diarrhea.',
      pmh: ['Heart Failure', 'Hypertension', 'Osteoarthritis'],
      medications: [
        { drug: 'Enalapril', dose: '10 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Furosemide', dose: '40 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Ibuprofen', dose: '400 mg', frequency: 'TDS', route: 'Oral' },
        { drug: 'Potassium Gluconate', dose: '20 mEq', frequency: 'OD', route: 'Oral' }
      ],
      allergies: ['None'],
      labs: [
        { name: 'SCr', value: '3.5', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
        { name: 'K+', value: '6.2', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true }
      ]
    },
    questions: [
      {
        id: 'q-014-1', case_id: 'seed-014',
        question_text: 'What is the "Triple Whammy" effect causing this patient\'s Acute Kidney Injury (AKI)?',
        option_a: 'Furosemide (volume depletion) + Enalapril (efferent vasodilation) + Ibuprofen (afferent vasoconstriction)',
        option_b: 'Three nephrotoxic antibiotics given together',
        option_c: 'Hypokalemia + Hypocalcemia + Hyponatremia',
        option_d: 'NSAID + Aminoglycoside + Contrast Dye',
        correct_option: 'A',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'The classic Triple Whammy of AKI involves a diuretic causing hypovolemia, an NSAID constricting the afferent arteriole, and an ACEi/ARB dilating the efferent arteriole, severely dropping GFR.',
        subject_reference: 'Nephrology'
      },
      {
        id: 'q-014-2', case_id: 'seed-014',
        question_text: 'Given the patient\'s hyperkalemia (K+ 6.2 mEq/L), what immediate medication changes are necessary?',
        option_a: 'Hold Potassium Gluconate and Enalapril',
        option_b: 'Increase Enalapril dose to improve renal blood flow',
        option_c: 'Discontinue Furosemide',
        option_d: 'Start Spironolactone',
        correct_option: 'A',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'ACE inhibitors cause potassium retention. In AKI with hyperkalemia, potassium supplements and ACE inhibitors must be immediately withheld.',
        subject_reference: 'Nephrology'
      },
      {
        id: 'q-014-3', case_id: 'seed-014',
        question_text: 'Which alternative pain medication should be recommended instead of Ibuprofen for this patient?',
        option_a: 'Naproxen',
        option_b: 'Celecoxib',
        option_c: 'Paracetamol',
        option_d: 'Diclofenac',
        correct_option: 'C',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'All NSAIDs (including COX-2 inhibitors) risk renal damage. Paracetamol is the safest choice.',
        subject_reference: 'Nephrology'
      }
    ],
    phases: [
      {
        id: 'seed-014-phase-1',
        title: 'Day 1: AKI Admission',
        description: 'Patient admitted with severe AKI and hyperkalemia.',
        patient_snapshot: {
          name: 'Mohammad Ali',
          age: 70,
          sex: 'M',
          ward: 'Nephrology',
          bed: '10',
          presenting_complaint: 'Oliguria',
          pmh: ['Heart Failure', 'Osteoarthritis'],
          medications: [
            { drug: 'Enalapril', dose: '10 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Furosemide', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ibuprofen', dose: '400 mg', frequency: 'TDS', route: 'Oral' },
            { drug: 'Potassium Gluconate', dose: '20 mEq', frequency: 'OD', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'SCr', value: '3.5', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'K+', value: '6.2', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-014-1', case_id: 'seed-014',
            question_text: 'What is the "Triple Whammy" effect causing this patient\'s Acute Kidney Injury (AKI)?',
            option_a: 'Furosemide (volume depletion) + Enalapril (efferent vasodilation) + Ibuprofen (afferent vasoconstriction)',
            option_b: 'Three nephrotoxic antibiotics given together',
            option_c: 'Hypokalemia + Hypocalcemia + Hyponatremia',
            option_d: 'NSAID + Aminoglycoside + Contrast Dye',
            correct_option: 'A',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'The classic Triple Whammy of AKI.',
            subject_reference: 'Nephrology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012) — Staging and Management',
          organization: 'KDIGO',
          text: 'AKI Definition and Staging: Stage 1 = SCr ≥0.3 mg/dL rise in 48h OR 1.5-1.9× baseline within 7 days. Stage 2 = SCr 2.0-2.9× baseline OR <0.5 mL/kg/h urine for 10-16h. Stage 3 = SCr ≥3× baseline OR ≥4.0 mg/dL OR initiation of RRT. Niranjan: Baseline SCr 1.3 mg/dL → current 3.6 mg/dL = 2.77× baseline = AKI Stage 2. Management principles: (1) IMMEDIATELY DISCONTINUE all nephrotoxic drugs (NSAIDs, ACEi, diuretics, aminoglycosides, contrast agents); (2) Restore and maintain euvolemia with IV crystalloids; (3) Target MAP >65 mmHg; (4) Avoid nephrotoxic drug combinations; (5) Adjust all drug doses for new eGFR; (6) Monitor: SCr and urine output every 4-8 hours. Renal replacement therapy indications: severe acidosis, hyperkalemia unresponsive to medical treatment, fluid overload, uremia symptoms.'
        },
        {
          title: 'NICE Guideline NG116 — AKI Prevention and Management (2019)',
          organization: 'NICE',
          text: 'Triple Whammy Combination — MUST AVOID: The concurrent use of a diuretic (HCTZ, Furosemide) + ACEi/ARB (Lisinopril, Losartan) + NSAID (Diclofenac, Ibuprofen) creates a critically dangerous pharmacodynamic interaction. UK Yellow Card database: this combination responsible for 12% of hospital-acquired AKI. NICE mandates that clinicians and pharmacists screen for this combination at EVERY medication review. If unavoidable: use lowest NSAID dose, restrict to 3 days maximum, ensure patient is well-hydrated, monitor SCr within 1 week. Hyperkalemia management protocol: mild (K+ 5.1-5.9 mEq/L) = dietary restriction; moderate (K+ 6.0-6.4) = Resonium/Patiromer; severe (K+ ≥6.5 or ECG changes) = IV Calcium Gluconate + Insulin/Dextrose + emergency dialysis if resistant.'
        },
        {
          title: 'Emergency Hyperkalemia Management — Clinical Protocol',
          organization: 'Renal Association / Emergency Medicine',
          text: 'Severe Hyperkalemia (K+ >6.0 mEq/L or >5.5 with ECG changes) — FOUR-STEP PROTOCOL: Step 1 — MEMBRANE STABILIZATION: IV Calcium Gluconate 10% 10-20 mL (1-2 g) over 5-10 min, repeat after 5 min if ECG abnormalities persist. Onset: 1-3 min; Duration: 30-60 min. Does NOT lower K+. Step 2 — SHIFT K+ INTO CELLS: Insulin 10 units IV + Dextrose 50% 50 mL (= 25g glucose). Onset 15-30 min; lowers K+ by 0.5-1.5 mEq/L for 4-6h. Add nebulized Salbutamol 10-20 mg (lowers K+ by additional 0.5-1 mEq/L). NaHCO3 1-2 mEq/kg IV if metabolic acidosis (shifts K+ intracellularly). Step 3 — REMOVE K+ FROM BODY: Furosemide 40 mg IV (if urine output present); Sodium Polystyrene Sulfonate (Kayexalate) 15-30g PO or Patiromer 8.4g PO (binds K+ in GI tract); Dialysis (most reliable and immediate). Step 4 — ECG MONITORING: Continuously until K+ <5.5 mEq/L — look for peaked T-waves, prolonged PR, wide QRS, sine wave.'
        }
      ],
      calculations: [
        {
          name: 'Triple Whammy — Quantifying GFR Impact',
          formula: 'Effective GFR = [Afferent blood flow × Afferent arteriole resistance] - [Efferent arteriole resistance]; FeNa (%) = [UNa × PCr] / [PNa × UCr] × 100',
          explanation: 'Pre-renal AKI: FeNa <1% (tubular function intact, kidneys avidly conserving Na). Intrinsic/Tubular AKI: FeNa >2% (tubular damage, cannot reabsorb Na). Niranjan\'s FeNa estimated <1% = pre-renal pattern. The triple whammy: HCTZ reduces effective circulating volume (reduced afferent flow) → Diclofenac inhibits prostaglandins that normally DILATE the afferent arteriole (restoring blood flow despite volume depletion) → Lisinopril blocks Ang II which normally CONSTRICTS efferent arteriole (maintaining GFR pressure gradient). All three mechanisms converge to drop hydrostatic pressure across the glomerulus to near-zero = severe GFR collapse.'
        },
        {
          name: 'Hyperkalemia Treatment — Insulin/Dextrose Dose for Niranjan',
          formula: 'Insulin 0.1 units/kg IV (or fixed 10 units) + Dextrose 50% 25g (50 mL of 50% solution). Expected K+ drop: 0.5-1.5 mEq/L within 15-30 min',
          explanation: 'Niranjan: Weight ~70 kg. Insulin dose = 10 units regular insulin IV (standard dose regardless of weight). Dextrose 50% 50 mL (25g glucose) immediately BEFORE or WITH insulin to prevent hypoglycemia. Monitor blood glucose at 30, 60, 120 min — hypoglycemia can occur in fasting patients with CKD (impaired insulin clearance). Follow-up: check K+ at 1h and 2h. If still >6.0 mEq/L, consider Resonium 15g TDS OR urgent nephrology consult for CVVH/dialysis given AKI Stage 2-3.'
        }
      ],
      reasoning: [
        {
          question_text: 'What is the precise mechanism by which each component of the Triple Whammy damages the kidney?',
          rationale: 'STEP 1 — HCTZ (Diuretic): Causes mild-moderate volume depletion. Under normal conditions, the kidney compensates by activating local prostaglandins (PGE2, PGI2) which DILATE the afferent arteriole, maintaining GFR despite reduced perfusion pressure. STEP 2 — Diclofenac (NSAID): Inhibits COX-1 and COX-2 → abolishes prostaglandin synthesis. Now the afferent arteriole CANNOT vasodilate to compensate for volume depletion — it constricts (due to unopposed sympathetic tone). GFR begins to fall. STEP 3 — Lisinopril (ACEi): Blocks formation of angiotensin II. Normally, Ang II constricts the EFFERENT arteriole more than the afferent, maintaining intraglomerular filtration pressure. Without Ang II, the efferent arteriole DILATES uncontrollably. GFR now effectively = 0 (no pressure gradient across the glomerulus). Result: Prerenal AKI → if prolonged, progresses to ischemic ATN (irreversible).'
        },
        {
          question_text: 'Why does IV Calcium Gluconate not lower potassium levels — yet is the FIRST drug given?',
          rationale: 'Calcium Gluconate does NOT affect serum potassium concentration at all. Its mechanism is entirely different: Hyperkalemia lowers the resting membrane potential (cell becomes more depolarized), making cells hyperexcitable — this causes the dangerous cardiac arrhythmias (peaked T-waves, VF, asystole). Calcium ions RAISE the threshold potential (the voltage required to trigger an action potential) back toward normal, restoring the safety margin between resting potential and threshold. This is called MEMBRANE STABILIZATION or Cardioprotection. The effect is seen within 1-3 minutes, lasts 30-60 minutes, and buys time to implement actual potassium-lowering therapies (Insulin/Dextrose, Resonium, Furosemide, dialysis).'
        },
        {
          question_text: 'Which common OTC medications should CKD patients be specifically warned about?',
          rationale: 'Patients with CKD are at dramatically higher risk from: (1) NSAIDs (Ibuprofen, Diclofenac, Naproxen) — OTC available, sold as "pain killers." Even 7 days of NSAIDs can precipitate AKI in CKD patients. These must be LISTED AS CONTRAINDICATED in all CKD stages ≥3. (2) COX-2 Inhibitors (Celecoxib) — slightly safer but still nephrotoxic. (3) Antacids containing Aluminium/Magnesium — accumulate in CKD causing toxicity. (4) Vitamin D supplements (cholecalciferol) — should only be taken as prescribed in CKD (calcitriol needed instead). (5) High-phosphate foods and supplements — in CKD stages 4-5. Pharmacist counseling at EVERY prescription review of CKD patients must address OTC NSAID avoidance — this is a critical public health intervention.'
        }
      ],
      mnemonics: [
        {
          name: 'Hyperkalemia Management Steps (C-B-I-G-K-D)',
          concept: 'Stepwise pharmacological management of hyperkalemia — sequence matters',
          bullets: [
            'C — Calcium Gluconate 10%: 10-20 mL IV over 5-10 min. MEMBRANE STABILIZER ONLY (does NOT lower K+). Repeat if ECG changes persist. Onset: 1-3 min',
            'B — Bicarbonate: IV NaHCO3 1 mEq/kg if metabolic acidosis (pH<7.2). Shifts K+ into cells. Effect onset 30-60 min. Avoid in fluid-overloaded patients',
            'I — Insulin + Dextrose: Regular Insulin 10 units IV + D50 50 mL. Most reliable cellular K+ shift. Onset 15-30 min; lowers K+ by 0.5-1.5 mEq/L',
            'G — Gas (Salbutamol): Nebulized Salbutamol 10-20 mg (beta-2 agonist → K+ cellular uptake). Lowers K+ by 0.5-1 mEq/L additively. Use alongside insulin',
            'K — Kayexalate/Resonium: GI K+ binder 15-30g TDS. Removes K+ from body. Slow onset (6-12h). Newer option: Patiromer 8.4g OD (better tolerated)',
            'D — Dialysis: IMMEDIATE K+ removal. Indicated for K+ >7 mEq/L, oliguria/anuria, or medical management failure. Emergency hemodialysis reduces K+ by 1-2 mEq/L per session'
          ]
        }
      ]
    },
    tags: ['acute-kidney-injury', 'triple-whammy', 'hyperkalemia', 'calcium-gluconate', 'diclofenac'],
    source: 'seed',
    created_at: '2025-01-14T00:00:00Z',
  },

  // CASE 15: ENDOCRINE / ADVERSE REACTIONS
  {
    id: 'seed-015',
    title: 'Graves\' Disease & Antithyroid-Induced Agranulocytosis',
    subject_area: 'endocrine',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Sunita Patel',
      age: 34,
      sex: 'F',
      ward: 'Endocrinology',
      bed: '6',
      presenting_complaint: 'High fever, severe sore throat, and mouth ulcers. Started Carbimazole 3 weeks ago for Graves disease.',
      pmh: ['Graves Disease'],
      medications: [
        { drug: 'Carbimazole', dose: '20 mg', frequency: 'TDS', route: 'Oral' },
        { drug: 'Propranolol', dose: '40 mg', frequency: 'TDS', route: 'Oral' }
      ],
      allergies: ['None'],
      labs: [
        { name: 'Temp', value: '39.0', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
        { name: 'WBC', value: '1.2', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
        { name: 'ANC', value: '150', unit: 'cells/mm3', reference: '>1500', is_abnormal: true }
      ]
    },
    questions: [
      {
        id: 'q-015-1', case_id: 'seed-015',
        question_text: 'What is the most likely diagnosis given the patient\'s symptoms and recent medication history?',
        option_a: 'Viral pharyngitis',
        option_b: 'Carbimazole-induced Agranulocytosis',
        option_c: 'Thyroid Storm',
        option_d: 'Propranolol toxicity',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'Carbimazole and PTU carry a black box warning for agranulocytosis. Patients must be counseled to immediately report fever or sore throat.',
        subject_reference: 'Endocrinology'
      },
      {
        id: 'q-015-2', case_id: 'seed-015',
        question_text: 'What is the most appropriate initial action regarding her Carbimazole?',
        option_a: 'Reduce the dose by 50%',
        option_b: 'Switch to Propylthiouracil (PTU)',
        option_c: 'Stop Carbimazole immediately',
        option_d: 'Continue Carbimazole and add antibiotics',
        correct_option: 'C',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'The offending agent must be stopped immediately. Switching to PTU is contraindicated due to cross-reactivity.',
        subject_reference: 'Endocrinology'
      },
      {
        id: 'q-015-3', case_id: 'seed-015',
        question_text: 'What immediate supportive measures are required for this patient?',
        option_a: 'Neutropenic precautions, broad-spectrum IV antibiotics, and G-CSF',
        option_b: 'Radioactive iodine ablation',
        option_c: 'High-dose aspirin',
        option_d: 'Outpatient oral amoxicillin',
        correct_option: 'A',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'With an ANC of 150, the patient is at extreme risk for overwhelming sepsis.',
        subject_reference: 'Endocrinology'
      }
    ],
    phases: [
      {
        id: 'seed-015-phase-1',
        title: 'Day 1: Agranulocytosis Presentation',
        description: 'Patient presents with severe sore throat and fever on Carbimazole.',
        patient_snapshot: {
          name: 'Sunita Patel',
          age: 34,
          sex: 'F',
          ward: 'Endocrinology',
          bed: '6',
          presenting_complaint: 'Sore throat and fever.',
          pmh: ['Graves Disease'],
          medications: [
            { drug: 'Carbimazole', dose: '20 mg', frequency: 'TDS', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'ANC', value: '150', unit: 'cells/mm3', reference: '>1500', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-015-1', case_id: 'seed-015',
            question_text: 'What is the most likely diagnosis given the patient\'s symptoms and recent medication history?',
            option_a: 'Viral pharyngitis',
            option_b: 'Carbimazole-induced Agranulocytosis',
            option_c: 'Thyroid Storm',
            option_d: 'Propranolol toxicity',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Carbimazole causes agranulocytosis.',
            subject_reference: 'Endocrinology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ATA Guidelines for Diagnosis and Management of Hyperthyroidism (2016)',
          organization: 'ATA',
          text: 'Antithyroid Drug (ATD) selection: Carbimazole (Methimazole) is PREFERRED over PTU in most adults with Graves\' disease due to better tolerability and once-daily dosing (Carbimazole 10-40 mg OD or BD; Methimazole 10-40 mg OD). PTU is preferred in: (1) First trimester pregnancy (teratogenicity risk of Methimazole — aplasia cutis, choanal atresia); (2) Thyroid storm; (3) True Methimazole allergy. Before starting ANY ATD: (1) Check CBC baseline; (2) Counsel patient on AGRANULOCYTOSIS warning signs (fever + sore throat = STOP DRUG immediately, seek emergency CBC); (3) Also counsel on hepatotoxicity (PTU-specific: fulminant liver failure), rash, and arthralgia. Once ATD confirmed causing agranulocytosis, NEITHER Carbimazole NOR PTU can be safely continued (cross-reactivity ~50%). Alternative: Radioiodine (I-131) therapy after euthyroid state achieved via Lugol\'s solution or Lithium carbonate; or total thyroidectomy.'
        },
        {
          title: 'Management of Antithyroid Drug-Induced Agranulocytosis — Clinical Protocol',
          organization: 'British Thyroid Association (BTA)',
          text: 'IMMEDIATE MANAGEMENT: (1) STOP Carbimazole/PTU immediately and permanently — cross-reactivity exists. (2) Hospitalize in ISOLATION (reverse isolation — protect patient from environmental pathogens). (3) Empiric broad-spectrum antibiotics: Piperacillin-Tazobactam 4.5g IV Q6H (antipseudomonal coverage for expected pathogens in severe neutropenia). (4) G-CSF (Filgrastim) 5 mcg/kg SC daily — accelerates neutrophil recovery, reduces duration of agranulocytosis from 8-22 days to 5-10 days. (5) Monitor: ANC daily until recovery above 1000 cells/μL. (6) Maintain thyroid control during agranulocytosis with Propranolol (controls heart rate), Lugol\'s Iodine (SSKI — blocks thyroid hormone release for 10-14 days), and cholestyramine (binds thyroid hormones in GI tract to reduce T3/T4 levels). Iodine: 5 drops (0.25 mL) Lugol\'s TDS for maximum 10-14 days only (escape phenomenon after 2 weeks).'
        },
        {
          title: 'Graves\' Disease Treatment Options — Comparative Guidelines',
          organization: 'ATA / ETA',
          text: 'Three definitive therapies for Graves\' hyperthyroidism: (1) Antithyroid Drugs (ATD) — 12-18 months course. 50% remission rate. Relapse rate 50-80% after stopping. Risk of agranulocytosis 0.1-0.5% (idiosyncratic, unpredictable, occurs within first 3 months in 70% of cases). (2) Radioiodine (I-131 therapy) — definitive. Risk of hypothyroidism (>90% lifetime). Contraindicated in pregnancy and breastfeeding. Worsens active thyroid eye disease (Graves\' ophthalmopathy) if not pretreated with steroids. (3) Total thyroidectomy — immediate and permanent cure. Risk of: permanent hypoparathyroidism (3%), recurrent laryngeal nerve injury (<1%), requires lifelong thyroid hormone replacement (Levothyroxine). Beta-blocker (Propranolol 40-80 mg TDS) used in ALL cases to control hyperthyroid symptoms (tachycardia, tremor, sweating) while awaiting definitive therapy.'
        }
      ],
      calculations: [
        {
          name: 'Absolute Neutrophil Count (ANC) Calculation',
          formula: 'ANC (cells/μL) = WBC (cells/μL) × [(%Segs + %Bands) / 100]; Agranulocytosis: ANC <500 cells/μL',
          explanation: 'Rekha: WBC = 800 cells/μL; neutrophils = 10% (from differential). ANC = 800 × 0.10 = 80 cells/μL. Classification: Normal ANC 1500-8000; Mild neutropenia 1000-1500; Moderate 500-1000; Severe (Agranulocytosis) <500 — Rekha\'s ANC of 80 cells/μL = PROFOUND agranulocytosis. Risk of septic death extremely high without isolation + antibiotics + G-CSF. Expected ANC recovery timeline with G-CSF: 5-10 days (vs 8-22 days without G-CSF).'
        },
        {
          name: 'Thyroid Hormone Level Interpretation',
          formula: 'Hyperthyroid: TSH suppressed (<0.01) + Free T4 elevated (>1.8 ng/dL) + Free T3 elevated (>4.2 pg/mL); Graves\': TSI (Thyroid Stimulating Immunoglobulin) positive',
          explanation: 'Rekha: TSH <0.01 (suppressed) + Free T4 2.8 ng/dL (elevated 1.56× normal max) = confirmed hyperthyroidism. While ATD cannot be continued, thyroid function must still be monitored and controlled using alternative measures (Propranolol, Lugol\'s Iodine, cholestyramine) until white cell recovery and definitive therapy planned. Target during recovery: Free T4 within normal range (0.8-1.8 ng/dL) and HR <80 bpm with Propranolol.'
        }
      ],
      reasoning: [
        {
          question_text: 'What is the immune mechanism of Carbimazole-induced agranulocytosis?',
          rationale: 'Carbimazole (a prodrug converted to Methimazole in vivo) causes agranulocytosis via TWO mechanisms: (1) IMMUNE-MEDIATED (majority ~70%): Drug or drug-protein complex acts as hapten, triggering formation of antibodies (IgG) against granulocyte precursors and circulating neutrophils. This is TYPE II hypersensitivity (complement-mediated cell destruction). Idiosyncratic — not dose-dependent and unpredictable. Occurs predominantly in the first 3 months of therapy (90% of cases). (2) DIRECT TOXIC (minority ~30%): At high doses, metabolites are directly toxic to myeloid precursor cells (granulotoxicity). PTU causes agranulocytosis by the same immune mechanism — explaining the ~50% cross-reactivity between the two ATDs. HLA-B*38:02 and HLA-DRB1*08:03 alleles increase risk (found in Asian populations).'
        },
        {
          question_text: 'Why is Propranolol an important adjunct therapy in hyperthyroidism and Graves\' crisis?',
          rationale: 'Thyroid hormones (T3/T4) sensitize the cardiovascular system to catecholamines by UPREGULATING beta-adrenergic receptors (increased receptor density and sensitivity). This explains the tachycardia, palpitations, tremor, anxiety, and heat intolerance of hyperthyroidism — these are ALL mediated through heightened sympathetic tone. Propranolol (non-selective beta-blocker) directly blocks beta-1 (heart: reduces heart rate, contractility) and beta-2 (peripheral vasodilation, tremor) receptors. Additionally, Propranolol at high doses INHIBITS peripheral conversion of T4 to the more potent T3 (by inhibiting type 1 deiodinase), providing an additional mild anti-thyroid benefit. Propranolol does NOT affect thyroid hormone synthesis or release — it only controls symptoms while waiting for ATD or definitive therapy to take effect.'
        },{
    id: 'seed-001',
    title: 'Uncontrolled Diabetes, CKD, and Polypharmacy',
    subject_area: 'endocrine',
    difficulty: 'hard',
    tags: ['Diabetes', 'CKD', 'Deprescribing', 'SGLT2i', 'Sick Day Rules'],
    source: 'seed',
    created_at: '2025-01-01T00:00:00Z',
    
    // ==========================================
    // PHASE 1: WARD ROUND ADMISSION (MED REC)
    // ==========================================
    phases: [
      {
        id: 'seed-001-phase-1',
        title: 'Day 1: Ward Round Admission',
        description: 'Mr. Ramesh Kumar is admitted to the general medicine ward with uncontrolled hyperglycemia and mild chest tightness. Review his baseline profile, labs, and active chart for immediate safety interventions.',
        patient_snapshot: {
          name: 'Ramesh Kumar',
          age: 58,
          sex: 'M',
          ward: 'General Medicine',
          bed: '12',
          presenting_complaint: 'Chest pain, breathlessness for 2 days. Worsening knee pain.',
          pmh: ['T2DM (10 years)', 'Hypertension (5 years)', 'Osteoarthritis (3 years)'],
          medications: [
            { drug: 'Metformin', dose: '500 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Glibenclamide', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pantoprazole', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Diclofenac', dose: '50 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: ['Penicillin (rash)'],
          labs: [
            { name: 'FBS', value: '210', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
            { name: 'HbA1c', value: '9.2', unit: '%', reference: '<7.0', is_abnormal: true },
            { name: 'SCr', value: '1.8', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'eGFR', value: '38', unit: 'mL/min', reference: '>60', is_abnormal: true },
            { name: 'K+', value: '4.8', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: false },
          ],
        },
        questions: [
          {
            id: 'q-001-1', case_id: 'seed-001',
            question_text: 'Ramesh has been self-administering Diclofenac 50mg BD for right knee osteoarthritis pain. Given his eGFR of 38 mL/min, what is the most appropriate clinical pharmacist intervention?',
            option_a: 'Continue Diclofenac as it is effective for pain, but add a PPI.',
            option_b: 'Discontinue Diclofenac due to severe risk of nephrotoxicity and switch to oral Paracetamol 650mg TDS PRN.',
            option_c: 'Increase Diclofenac to 75mg BD to treat knee pain aggressively so he can mobilize.',
            option_d: 'Switch to Ibuprofen 400mg TDS, as it is safer for the kidneys.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'Diclofenac',
            explanation_text: 'NSAIDs (Diclofenac) block cyclooxygenase (COX) enzymes, reducing renal prostaglandin synthesis. Prostaglandins are critical for maintaining afferent arteriolar vasodilation. In a patient with renal decline (eGFR 38), NSAID use causes afferent vasoconstriction, precipitously dropping GFR and triggering acute-on-chronic kidney injury.',
            subject_reference: 'Pharmacotherapeutics - Drug Safety',
          },
          {
            id: 'q-001-2', case_id: 'seed-001',
            question_text: 'Which action should you take regarding his home Metformin dose based on his current renal function?',
            option_a: 'Continue unchanged; Metformin is safe until eGFR < 15 mL/min.',
            option_b: 'Hold / Temporarily Suspend until SCr normalizes.',
            option_c: 'Discontinue permanently.',
            option_d: 'Reduce dose by 50% (e.g., to 500mg OD).',
            correct_option: 'D',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'Metformin',
            explanation_text: 'Metformin requires dose reduction when eGFR is 30-44 mL/min due to the risk of renal accumulation and lactic acidosis. At eGFR 38, the dose should be reduced by 50% (max 1000mg/day). It is only discontinued completely if eGFR falls below 30 mL/min.',
            subject_reference: 'Pharmacotherapeutics - Diabetes',
          }
        ]
      },
      
      // ==========================================
      // PHASE 2: WARD ROUND (ADRs & OPTIMIZATION)
      // ==========================================
      {
        id: 'seed-001-phase-2',
        title: 'Day 3: Clinical Deterioration & Therapy Change',
        description: 'To control his blood pressure and provide renoprotection, the attending team started Enalapril 5mg OD yesterday. Today, he complains of a persistent dry cough and experienced a hypoglycemic episode (Blood Glucose 54 mg/dL) overnight.',
        patient_snapshot: {
          name: 'Ramesh Kumar',
          age: 58,
          sex: 'M',
          ward: 'General Medicine',
          bed: '12',
          presenting_complaint: 'Dry persistent cough, fatigue, night sweats (hypoglycemia).',
          pmh: ['T2DM (10 years)', 'Hypertension (5 years)', 'Osteoarthritis (3 years)'],
          medications: [
            { drug: 'Metformin', dose: '500 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Glibenclamide', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Enalapril', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: ['Penicillin (rash)'],
          labs: [
            { name: 'FBS', value: '54', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
            { name: 'SCr', value: '2.0', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'K+', value: '5.1', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-001-3', case_id: 'seed-001',
            question_text: 'The patient developed a dry persistent cough after starting Enalapril. What is the most appropriate MAR action?',
            option_a: 'Reduce Enalapril to 2.5 mg OD.',
            option_b: 'Add Dextromethorphan syrup for the cough.',
            option_c: 'Discontinue Enalapril and switch to an ARB (e.g., Losartan).',
            option_d: 'Continue Enalapril; the cough will subside in a few days.',
            correct_option: 'C',
            pci_duty_category: 'adr_detection',
            question_type: 'mar_action',
            target_drug: 'Enalapril',
            explanation_text: 'ACE inhibitor-induced cough occurs in 5-20% of patients due to bradykinin accumulation and is a class effect — dose reduction will not help. The appropriate intervention is to discontinue the ACEi and switch to an ARB, which does not inhibit bradykinin breakdown.',
            subject_reference: 'Pharmacotherapeutics - Cardiovascular',
          },
          {
            id: 'q-001-4', case_id: 'seed-001',
            question_text: 'What is the most likely cause of his nocturnal hypoglycemia (FBS 54 mg/dL) given his clinical profile?',
            option_a: 'Metformin overdose.',
            option_b: 'Accumulation of active Glibenclamide metabolites due to his reduced eGFR.',
            option_c: 'Interaction between Amlodipine and Aspirin.',
            option_d: 'Enalapril-induced hyperinsulinemia.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Glibenclamide (a long-acting sulfonylurea) has active metabolites that are renally cleared. In patients with CKD (eGFR 38), these metabolites accumulate, significantly increasing the risk of severe, prolonged hypoglycemia. He should be switched to a safer agent like a DPP-4 inhibitor (e.g., Linagliptin) or a shorter-acting sulfonylurea (Glipizide).',
            subject_reference: 'Pharmacotherapeutics - Diabetes',
          }
        ]
      },

      // ==========================================
      // PHASE 3: DISCHARGE & COUNSELING
      // ==========================================
      {
        id: 'seed-001-phase-3',
        title: 'Day 5: Discharge & Counseling',
        description: 'Ramesh is stabilizing. His BP is well-controlled on Losartan, and his cough has resolved. The team is preparing his discharge prescriptions and asks for your input on long-term disease modification.',
        patient_snapshot: {
          name: 'Ramesh Kumar',
          age: 58,
          sex: 'M',
          ward: 'General Medicine',
          bed: '12',
          presenting_complaint: 'Ready for discharge.',
          pmh: ['T2DM', 'Hypertension', 'CKD Stage 3b'],
          medications: [
            { drug: 'Metformin', dose: '500 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Linagliptin', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Losartan', dose: '50 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: ['Penicillin (rash)', 'Enalapril (Cough)'],
          labs: [
            { name: 'FBS', value: '115', unit: 'mg/dL', reference: '70-110', is_abnormal: false },
            { name: 'SCr', value: '1.9', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'eGFR', value: '38', unit: 'mL/min', reference: '>60', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-001-5', case_id: 'seed-001',
            question_text: 'Per KDIGO/ADA guidelines, which medication class should be ADDED to his discharge regimen to slow CKD progression and reduce heart failure risk?',
            option_a: 'Thiazolidinedione (e.g., Pioglitazone)',
            option_b: 'SGLT2 Inhibitor (e.g., Dapagliflozin)',
            option_c: 'Loop Diuretic (e.g., Furosemide)',
            option_d: 'Alpha-blocker (e.g., Prazosin)',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'SGLT2 inhibitors (Dapagliflozin, Empagliflozin) have profound cardiorenal benefits independent of glycemic control. Guidelines mandate their use in patients with T2DM and CKD (eGFR ≥ 20 mL/min) to delay the progression to end-stage renal disease.',
            subject_reference: 'Pharmacotherapeutics - Nephrology',
          },
          {
            id: 'q-001-6', case_id: 'seed-001',
            question_text: 'You are counseling Ramesh on "Sick Day Rules." If he develops severe gastroenteritis (vomiting/diarrhea) at home, which medications must he temporarily suspend?',
            option_a: 'Amlodipine and Aspirin',
            option_b: 'Metformin, Losartan, and his new SGLT2 Inhibitor',
            option_c: 'Linagliptin only',
            option_d: 'He should not stop any medications without visiting the ER.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'During dehydrating illnesses, patients must hold medications that can cause AKI or metabolic complications (SADMANS mnemonic). Holding Metformin prevents lactic acidosis; holding Losartan prevents pre-renal AKI; holding SGLT2is prevents euglycemic DKA.',
            subject_reference: 'Pharmacy Practice - Patient Counseling',
          }
        ]
      }
    ],
    
    // ==========================================
    // COMPREHENSIVE STUDY GUIDE
    // ==========================================
    study_guide: {
      guidelines: [
        {
          title: 'ADA Standards of Care in Diabetes (2024)',
          organization: 'ADA',
          text: 'Metformin dosing must be adjusted based on renal function. Do not initiate Metformin if eGFR is <45 mL/min. If eGFR falls to 30-44 mL/min during therapy, evaluate the risk-benefit and consider a 50% dose reduction (max 1000mg/day). Discontinue Metformin if eGFR falls below 30 mL/min due to the increased risk of metformin-associated lactic acidosis (MALA).'
        },
        {
          title: 'KDIGO Clinical Practice Guideline for Diabetes Management in CKD (2023)',
          organization: 'KDIGO',
          text: 'First-line therapy for patients with T2DM and CKD includes Metformin and an SGLT2 inhibitor. SGLT2 inhibitors (like Dapagliflozin) reduce intraglomerular pressure, drastically slowing renal decline. RAAS blockade (ACEi or ARB) remains the cornerstone for hypertension and albuminuria. A rise in creatinine of up to 30% from baseline is expected and acceptable after starting an ACEi/ARB; discontinue only if it rises >30% or potassium exceeds 5.5 mEq/L.'
        }
      ],
      calculations: [
        {
          name: 'Cockcroft-Gault Creatinine Clearance',
          formula: 'CrCl (mL/min) = [ (140 - Age) × Weight (kg) ] / [ 72 × Serum Creatinine (mg/dL) ]  (× 0.85 if Female)',
          explanation: 'This equation estimates renal function to guide drug dosing. Crucially, in obese patients, Ideal Body Weight (IBW) or Adjusted Body Weight should be used instead of actual weight to prevent drug overdosing, especially for renally cleared agents.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does the combination of Diclofenac and an ACE Inhibitor cause Acute Kidney Injury (The Triple Whammy)?',
          rationale: 'Normally, renal blood flow is maintained by prostaglandins (which dilate the afferent arteriole) and Angiotensin II (which constricts the efferent arteriole). NSAIDs (Diclofenac) block prostaglandins, causing afferent constriction (less blood flows in). ACE inhibitors block Ang II, causing efferent dilation (blood flows out too fast). Together, they destroy glomerular hydrostatic pressure, leading to acute kidney injury, especially when the patient is already renally compromised.'
        },
        {
          question_text: 'Why switch from Enalapril to Losartan instead of reducing the dose?',
          rationale: 'Dry cough is a class-wide Adverse Drug Reaction of ACE inhibitors. It is caused by the accumulation of bradykinin and substance P in the respiratory tract due to ACE inhibition. It is not dose-dependent. Switching to an ARB (like Losartan) resolves the cough because ARBs block angiotensin receptors without inhibiting the kinase enzyme that degrades bradykinin.'
        }
      ],
      mnemonics: [
        {
          name: 'Sick Day Rules (S-A-D-M-A-N-S)',
          concept: 'Medications to temporarily HOLD during severe dehydrating illness (vomiting, diarrhea, high fever) to prevent AKI and metabolic crises.',
          bullets: [
            'S — Sulfonylureas (Risk of hypoglycemia if not eating)',
            'A — ACE Inhibitors (Risk of pre-renal AKI)',
            'D — Diuretics (Worsens dehydration)',
            'M — Metformin (Risk of lactic acidosis in AKI)',
            'A — ARBs (Risk of pre-renal AKI)',
            'N — NSAIDs (Risk of acute kidney injury)',
            'S — SGLT2 inhibitors (Risk of euglycemic DKA with poor oral intake)'
          ]
        },
        {
          name: 'ACEi Side Effects (CAPTOPRIL)',
          concept: 'Remembering ACE inhibitor adverse effects',
          bullets: [
            'C — Cough (dry, persistent)',
            'A — Angioedema (life-threatening airway swelling)',
            'P — Potassium elevation (hyperkalemia)',
            'T — Taste alteration (metallic taste)',
            'O — Orthostatic hypotension (first-dose effect)',
            'P — Pregnancy contraindication (teratogenicity)',
            'R — Renal function decline (acute kidney injury)',
            'I — Indomethacin/NSAID interaction (blunts antihypertensive effect)',
            'L — Leukopenia (rare neutropenia risk)'
          ]
        }
      ]
    }
  },
// CASE 2: INFECTIOUS DISEASES
  {
    id: 'seed-002',
    title: 'Pulmonary TB — DOTS Drug Interactions',
    subject_area: 'infectious_diseases',
    difficulty: 'hard',
    tags: ['Tuberculosis', 'NTEP', 'Drug Interactions', 'Hepatotoxicity'],
    source: 'seed',
    created_at: '2025-01-02T00:00:00Z',
    phases: [
      {
        id: 'seed-002-phase-1',
        title: 'Day 1: ATT Initiation & Med Rec',
        description: 'Lakshmi is newly started on HRZE therapy. Review the medication chart for drug interactions with her home Levothyroxine and iron supplement.',
        patient_snapshot: {
          name: 'Lakshmi Devi', age: 45, sex: 'F', ward: 'Pulmonology', bed: '8',
          presenting_complaint: 'Newly diagnosed pulmonary TB. Home meds: Levothyroxine, Ferrous Sulfate.',
          pmh: ['Pulmonary TB', 'Hypothyroidism'],
          medications: [
            { drug: 'Isoniazid', dose: '300 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Rifampicin', dose: '450 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pyrazinamide', dose: '1500 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ethambutol', dose: '800 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Levothyroxine', dose: '100 mcg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ferrous Sulfate', dose: '325 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'TSH', value: '12.5', unit: 'mIU/L', reference: '0.5-4.5', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-002-1', case_id: 'seed-002',
            question_text: 'Lakshmi reports taking all her medications together with breakfast. Her TSH is elevated. What is the cause and intervention?',
            option_a: 'Levothyroxine dose is too low; increase to 200 mcg.',
            option_b: 'Rifampicin induces metabolism AND Iron impairs absorption. Separate doses and monitor TSH.',
            option_c: 'Isoniazid directly inhibits Levothyroxine absorption.',
            option_d: 'TSH is falsely elevated by active TB infection.',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mar_action',
            target_drug: 'Levothyroxine',
            explanation_text: 'Rifampicin is a potent CYP inducer that clears Levothyroxine faster, while Iron chelates it in the gut. They must be separated by at least 4 hours, and TSH may require a Levothyroxine dose increase.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
          {
            id: 'q-002-2', case_id: 'seed-002',
            question_text: 'Which medication should be ADDED to her MAR to prevent a common neurological side effect of her regimen?',
            option_a: 'Vitamin B12 (Cyanocobalamin)',
            option_b: 'Vitamin B6 (Pyridoxine) 10-50 mg daily',
            option_c: 'Folic Acid 5 mg daily',
            option_d: 'Gabapentin 100 mg TDS',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Isoniazid depletes Pyridoxine (B6), leading to peripheral neuropathy. Prophylactic B6 must be co-prescribed.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          }
        ]
      },
      {
        id: 'seed-002-phase-2',
        title: 'Week 4: Hepatotoxicity & Visual Monitoring',
        description: 'Follow-up visit to monitor hepatotoxicity and visual function.',
        patient_snapshot: {
          name: 'Lakshmi Devi', age: 45, sex: 'F', ward: 'Pulmonology', bed: '8',
          presenting_complaint: 'Routine follow-up on ATT. Complains of mild nausea.',
          pmh: ['Pulmonary TB', 'Hypothyroidism'],
          medications: [
            { drug: 'Isoniazid', dose: '300 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Rifampicin', dose: '450 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pyrazinamide', dose: '1500 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ethambutol', dose: '800 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pyridoxine', dose: '40 mg', frequency: 'OD', route: 'Oral' }
          ],
          allergies: [],
          labs: [
            { name: 'ALT', value: '180', unit: 'U/L', reference: '7-56', is_abnormal: true },
            { name: 'AST', value: '165', unit: 'U/L', reference: '10-40', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-002-3', case_id: 'seed-002',
            question_text: 'Her ALT is >3x the upper limit of normal and she has nausea. What is the clinical action?',
            option_a: 'Continue therapy and recheck in 1 week.',
            option_b: 'Stop Ethambutol only.',
            option_c: 'Stop all hepatotoxic drugs (INH, RIF, PZA) immediately until LFTs normalize.',
            option_d: 'Add Ursodeoxycholic acid.',
            correct_option: 'C',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'ALT >3x ULN with symptoms (nausea) mandates immediate cessation of hepatotoxic ATT drugs to prevent fulminant liver failure. They are reintroduced sequentially once LFTs recover.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          },
          {
            id: 'q-002-4', case_id: 'seed-002',
            question_text: 'Which visual side effect must be specifically monitored due to Ethambutol?',
            option_a: 'Yellow-green halos around lights',
            option_b: 'Optic neuritis causing red-green color blindness',
            option_c: 'Cataracts',
            option_d: 'Macular degeneration',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Ethambutol causes dose-dependent retrobulbar optic neuritis affecting visual acuity and color vision.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          }
        ]
      },
      {
        id: 'seed-002-phase-3',
        title: 'Month 2: Transition Phase',
        description: 'Lakshmi returns after 2 months. Her LFTs recovered and ATT was successfully restarted. Sputum is now AFB negative.',
        patient_snapshot: {
          name: 'Lakshmi Devi', age: 45, sex: 'F', ward: 'Pulmonology', bed: '8',
          presenting_complaint: 'Joint pain in the big toe.',
          pmh: ['Pulmonary TB', 'Hypothyroidism'],
          medications: [
            { drug: 'Isoniazid', dose: '300 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Rifampicin', dose: '450 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Sputum AFB', value: 'Negative', unit: '', reference: 'Negative', is_abnormal: false },
            { name: 'Uric Acid', value: '9.5', unit: 'mg/dL', reference: '3.5-7.2', is_abnormal: true }
          ],
        },
        questions: [
          {
            id: 'q-002-5', case_id: 'seed-002',
            question_text: 'Based on the NTEP guidelines, what is the next step in her TB therapy now that she has completed 2 months of HRZE with a negative sputum?',
            option_a: 'Continue HRZE for 4 more months.',
            option_b: 'Transition to the Continuation Phase with HRE (Isoniazid, Rifampicin, Ethambutol) for 4 months.',
            option_c: 'Stop all medications as she is cured.',
            option_d: 'Transition to Monotherapy with Isoniazid.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'After the 2-month Intensive Phase (HRZE), patients transition to the 4-month Continuation Phase (HRE) to eliminate dormant bacilli.',
            subject_reference: 'Pharmacotherapeutics - TB Treatment',
          },
          {
            id: 'q-002-6', case_id: 'seed-002',
            question_text: 'She developed joint pain and elevated uric acid. Which drug from her intensive phase likely caused this?',
            option_a: 'Isoniazid',
            option_b: 'Rifampicin',
            option_c: 'Pyrazinamide',
            option_d: 'Ethambutol',
            correct_option: 'C',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Pyrazinamide inhibits renal excretion of uric acid, causing hyperuricemia and occasionally precipitating acute gout attacks.',
            subject_reference: 'Pharmacotherapeutics - ADRs',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'NTEP Tuberculosis Treatment Guidelines (2024)',
          organization: 'NTEP',
          text: 'First-line TB therapy comprises 2 months of HRZE (Intensive Phase) followed by 4 months of HRE (Continuation Phase). Fixed Dose Combinations (FDCs) based on patient weight bands should be used. Sputum analysis is repeated at completion of the intensive phase.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why does Rifampicin affect Levothyroxine levels?',
          rationale: 'Rifampicin is a highly potent inducer of hepatic cytochrome P450 enzymes and UDP-glucuronosyltransferases, accelerating the clearance of Levothyroxine.'
        }
      ],
      mnemonics: [
        {
          name: 'First-Line ATT Adverse Profiles (R-I-P-E)',
          concept: 'Remembering first-line tuberculosis drugs and their toxicities',
          bullets: [
            'R — Rifampicin: Red/orange discoloration of body fluids, RNA polymerase inhibitor.',
            'I — Isoniazid: Injury to nerves (peripheral neuropathy - prevent with Pyridoxine/B6).',
            'P — Pyrazinamide: Pain in joints (hyperuricemia/gout), Portal hepatotoxicity.',
            'E — Ethambutol: Eye damage (retrobulbar optic neuritis).'
          ]
        }
      ]
    }
  },

  // CASE 3: CLINICAL TOXICOLOGY
  {
    id: 'seed-003',
    title: 'OPC Poisoning — Emergency Management',
    subject_area: 'clinical_toxicology',
    difficulty: 'hard',
    tags: ['OPC', 'Atropine', 'Toxicology', 'Acetylcholinesterase'],
    source: 'seed',
    created_at: '2025-01-03T00:00:00Z',
    phases: [
      {
        id: 'seed-003-phase-1',
        title: 'Hour 1: ER Resuscitation',
        description: 'Venkatesh arrives in cholinergic crisis. Review the atropinization protocol and airway management.',
        patient_snapshot: {
          name: 'Venkatesh R', age: 35, sex: 'M', ward: 'Emergency', bed: 'ER-02',
          presenting_complaint: 'OPC poisoning — cholinergic crisis (sweating, salivation, bradycardia).',
          pmh: [],
          medications: [
            { drug: 'Atropine IV', dose: '2 mg', frequency: 'Q5min', route: 'IV' },
            { drug: 'Pralidoxime (2-PAM)', dose: '1 g', frequency: 'Loading', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Serum Cholinesterase', value: '450', unit: 'U/L', reference: '5320-12920', is_abnormal: true },
            { name: 'HR', value: '48', unit: 'bpm', reference: '60-100', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-003-1', case_id: 'seed-003',
            question_text: 'What are the clinical signs of adequate atropinization?',
            option_a: 'Miosis and bradycardia',
            option_b: 'Clear lungs, HR 80-100 bpm, dry axillae, pupil dilation',
            option_c: 'Hypertension and tachycardia above 120',
            option_d: 'Cessation of all muscle fasciculations',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Endpoints of atropinization: dry secretions, HR 80-100, dry skin. Atropine does not reverse nicotinic symptoms like fasciculations.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-003-2', case_id: 'seed-003',
            question_text: 'Which neuromuscular blocker is absolutely contraindicated if intubation is required?',
            option_a: 'Rocuronium',
            option_b: 'Vecuronium',
            option_c: 'Succinylcholine',
            option_d: 'Atracurium',
            correct_option: 'C',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Succinylcholine is metabolized by pseudocholinesterase, which is inhibited by OPCs. Use causes dangerously prolonged apnea.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          }
        ]
      },
      {
        id: 'seed-003-phase-2',
        title: 'Hour 6: Antidote Timing',
        description: 'Patient stabilized, but you are reviewing the Pralidoxime protocol and antiemetic choices.',
        patient_snapshot: {
          name: 'Venkatesh R', age: 35, sex: 'M', ward: 'ICU', bed: 'ICU-1',
          presenting_complaint: 'Nausea and persistent muscle weakness.',
          pmh: [],
          medications: [
            { drug: 'Pralidoxime (2-PAM)', dose: '500 mg/hr', frequency: 'Continuous', route: 'IV' },
            { drug: 'Ondansetron', dose: '4 mg', frequency: 'PRN', route: 'IV' }
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-003-3', case_id: 'seed-003',
            question_text: 'Why must Pralidoxime be given within 24-48 hours?',
            option_a: 'It directly binds acetylcholine.',
            option_b: 'After aging, the OP-AChE bond becomes irreversible.',
            option_c: 'It loses potency in solution.',
            option_d: 'It is renally cleared too quickly.',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Aging makes the bond irreversible; 2-PAM cannot reactivate aged AChE.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-003-4', case_id: 'seed-003',
            question_text: 'Why is Ondansetron preferred over Metoclopramide for his nausea?',
            option_a: 'Metoclopramide causes QT prolongation.',
            option_b: 'Metoclopramide has cholinergic/prokinetic properties that worsen OPC crisis.',
            option_c: 'Ondansetron acts faster.',
            option_d: 'Metoclopramide binds to Atropine.',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'Metoclopramide stimulates gut motility via cholinergic mechanisms, exacerbating the cholinergic toxidrome.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          }
        ]
      },
      {
        id: 'seed-003-phase-3',
        title: 'Day 3: Complications',
        description: 'Venkatesh develops sudden neck flexion weakness and respiratory distress despite initial recovery.',
        patient_snapshot: {
          name: 'Venkatesh R', age: 35, sex: 'M', ward: 'ICU', bed: 'ICU-1',
          presenting_complaint: 'Respiratory distress on Day 3.',
          pmh: [],
          medications: [
            { drug: 'Atropine IV', dose: '0.5 mg/hr', frequency: 'Continuous', route: 'IV' }
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-003-5', case_id: 'seed-003',
            question_text: 'What is the likely cause of respiratory failure 24-96 hours after OPC poisoning?',
            option_a: 'Intermediate Syndrome',
            option_b: 'Rebound Atropine toxicity',
            option_c: 'Organophosphate-induced delayed polyneuropathy (OPIDN)',
            option_d: 'Pralidoxime toxicity',
            correct_option: 'A',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Intermediate syndrome occurs 1-4 days post-exposure due to prolonged nicotinic receptor overstimulation, causing respiratory muscle paralysis requiring mechanical ventilation.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-003-6', case_id: 'seed-003',
            question_text: 'How should Atropine be discontinued to prevent rebound toxicity?',
            option_a: 'Stop abruptly once lungs are clear.',
            option_b: 'Taper slowly over days; abrupt cessation causes rebound cholinergic crisis.',
            option_c: 'Switch to oral Atropine.',
            option_d: 'Replace with Glycopyrrolate.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Due to depot release of highly lipophilic OPCs from fat stores, Atropine must be tapered slowly to prevent fatal rebound toxicity.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'WHO Guidelines for the Management of Organophosphate Poisoning',
          organization: 'WHO',
          text: 'Atropine is the cornerstone antidote — give 1.8-3 mg IV bolus, double the dose every 5 minutes until full atropinisation. Pralidoxime (PAM) 1-2 g IV over 15-30 minutes most effective within the first 24 hours.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'What is the molecular mechanism of Organophosphate toxicity?',
          rationale: 'Organophosphates covalently phosphorylate the active serine residue of Acetylcholinesterase, irreversibly blocking it and causing massive Acetylcholine accumulation.'
        }
      ],
      mnemonics: [
        {
          name: 'Cholinergic Toxidrome (DUMBBELS)',
          concept: 'Symptoms of muscarinic overstimulation',
          bullets: [
            'D — Diarrhea',
            'U — Urination',
            'M — Miosis',
            'B — Bradycardia',
            'B — Bronchospasm + Bronchorrhoea',
            'E — Emesis',
            'L — Lacrimation',
            'S — Salivation + Sweating'
          ]
        }
      ]
    }
  },

  // CASE 4: CARDIOVASCULAR
  {
    id: 'seed-004',
    title: 'Acute Heart Failure & Digoxin Toxicity',
    subject_area: 'cardiovascular',
    difficulty: 'hard',
    tags: ['Heart Failure', 'Digoxin Toxicity', 'Hypokalemia', 'TDM'],
    source: 'seed',
    created_at: '2025-01-04T00:00:00Z',
    phases: [
      {
        id: 'seed-004-phase-1',
        title: 'Day 1: CCU Admission',
        description: 'Suresh is admitted with acute decompensated HF, nausea, and visual halos. Review his medication chart and IV fluids.',
        patient_snapshot: {
          name: 'Suresh Menon', age: 72, sex: 'M', ward: 'CCU', bed: 'CCU-06',
          presenting_complaint: 'ADHF with yellow-green halos and nausea.',
          pmh: ['HFrEF (EF 30%)', 'AF', 'CKD 3b'],
          medications: [
            { drug: 'Digoxin', dose: '0.25 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Furosemide', dose: '40 mg', frequency: 'BD', route: 'IV' },
            { drug: 'IV Dextrose 5% + KCl 20 mEq', dose: '500 mL', frequency: 'Over 4 hours', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Digoxin Level', value: '3.2', unit: 'ng/mL', reference: '0.5-2.0', is_abnormal: true },
            { name: 'K+', value: '3.0', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-004-1', case_id: 'seed-004',
            question_text: 'What is the pharmacist\'s assessment of the Digoxin level and K+?',
            option_a: 'Therapeutic; continue dose.',
            option_b: 'Digoxin toxicity exacerbated by hypokalemia; hold Digoxin, correct K+.',
            option_c: 'Increase Digoxin for AF control.',
            option_d: 'Add Amiodarone.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Digoxin >2.0 ng/mL is toxic. Hypokalemia increases digoxin binding to the Na/K ATPase, amplifying toxicity.',
            subject_reference: 'Pharmacotherapeutics - Cardiology',
          },
          {
            id: 'q-004-2', case_id: 'seed-004',
            question_text: 'Is D5W + KCl appropriate in ADHF?',
            option_a: 'Yes, D5W is standard.',
            option_b: 'No, D5W provides free water worsening fluid overload; use concentrated KCl in minimal volume.',
            option_c: 'Switch to RL at 200 mL/h.',
            option_d: 'Give KCl as rapid IV push.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'IV Dextrose 5% + KCl 20 mEq',
            explanation_text: 'Free water worsens ADHF. KCl must be concentrated and infused slowly (max 10-20 mEq/hr peripherally).',
            subject_reference: 'Pharmacotherapeutics - Electrolyte Safety',
          }
        ]
      },
      {
        id: 'seed-004-phase-2',
        title: 'Day 2: Arrhythmia Development',
        description: 'Suresh develops frequent PVCs and a run of Ventricular Tachycardia.',
        patient_snapshot: {
          name: 'Suresh Menon', age: 72, sex: 'M', ward: 'CCU', bed: 'CCU-06',
          presenting_complaint: 'Ventricular Tachycardia.',
          pmh: ['HFrEF (EF 30%)'],
          medications: [
            { drug: 'Furosemide', dose: '40 mg', frequency: 'BD', route: 'IV' }
          ],
          allergies: [],
          labs: [
            { name: 'Digoxin Level', value: '3.0', unit: 'ng/mL', reference: '0.5-2.0', is_abnormal: true },
            { name: 'K+', value: '3.8', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: false },
          ],
        },
        questions: [
          {
            id: 'q-004-3', case_id: 'seed-004',
            question_text: 'What is the definitive treatment for life-threatening arrhythmias in Digoxin toxicity?',
            option_a: 'Amiodarone IV',
            option_b: 'Digoxin Immune Fab (Digibind)',
            option_c: 'Lidocaine IV',
            option_d: 'Dialysis',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Digoxin Immune Fab rapidly binds and neutralizes digoxin, reversing life-threatening arrhythmias.',
            subject_reference: 'Toxicology',
          },
          {
            id: 'q-004-4', case_id: 'seed-004',
            question_text: 'Which IV fluid/electrolyte is absolutely CONTRAINDICATED in Digoxin toxicity?',
            option_a: 'Normal Saline',
            option_b: 'Magnesium Sulfate',
            option_c: 'Calcium Gluconate',
            option_d: 'Potassium Chloride',
            correct_option: 'C',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Calcium administration synergizes with digoxin-induced intracellular calcium overload, precipitating irreversible "stone heart" (tetanic cardiac arrest).',
            subject_reference: 'Toxicology',
          }
        ]
      },
      {
        id: 'seed-004-phase-3',
        title: 'Day 5: Discharge Optimization',
        description: 'Toxicity resolved. Preparing discharge medications for his HFrEF.',
        patient_snapshot: {
          name: 'Suresh Menon', age: 72, sex: 'M', ward: 'CCU', bed: 'CCU-06',
          presenting_complaint: 'Ready for discharge.',
          pmh: ['HFrEF (EF 30%)', 'CKD 3b'],
          medications: [
            { drug: 'Enalapril', dose: '5 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Metoprolol Succinate', dose: '25 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Spironolactone', dose: '25 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'eGFR', value: '35', unit: 'mL/min', reference: '>60', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-004-5', case_id: 'seed-004',
            question_text: 'What dose adjustment is required if Digoxin is restarted, given his eGFR of 35?',
            option_a: 'Restart at 0.25 mg OD.',
            option_b: 'Reduce to 0.125 mg OD or every other day (70% renally cleared).',
            option_c: 'Double the dose.',
            option_d: 'Digoxin is safe without adjustment.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Digoxin is cleared by the kidneys. CKD requires drastic dose reduction to prevent re-toxicity.',
            subject_reference: 'Pharmacotherapeutics - Renal Dosing',
          },
          {
            id: 'q-004-6', case_id: 'seed-004',
            question_text: 'Which pillar of Guideline-Directed Medical Therapy (GDMT) is missing from his regimen?',
            option_a: 'SGLT2 Inhibitor (e.g., Dapagliflozin)',
            option_b: 'Calcium Channel Blocker',
            option_c: 'Alpha Blocker',
            option_d: 'Nitrate',
            correct_option: 'A',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'The 4 pillars of HFrEF are: ARNI/ACEi, Beta-Blocker, MRA (Spironolactone), and SGLT2i. He is missing an SGLT2i.',
            subject_reference: 'Pharmacotherapeutics - Cardiology',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA/ACC Heart Failure Guidelines (2022)',
          organization: 'AHA/ACC',
          text: 'Digoxin is NOT first-line and does not reduce mortality. Target serum digoxin level for HF is 0.5-0.9 ng/mL.'
        }
      ],
      calculations: [
        {
          name: 'Digibind Dose Calculation',
          formula: 'Number of vials = [Serum Digoxin Level (ng/mL) × Weight (kg)] / 100',
          explanation: 'Calculates the exact amount of antibody fragments needed to neutralize free digoxin.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Hypokalemia potentiate Digoxin toxicity?',
          rationale: 'Potassium and digoxin compete for the SAME binding site on the Na+/K+ ATPase pump. Low K+ equals more digoxin binding and toxicity.'
        }
      ],
      mnemonics: [
        {
          name: 'Digoxin Toxicity Signs (V-I-S-U-A-L)',
          concept: 'Clinical symptoms of digoxin toxicity',
          bullets: [
            'V — Visual changes (yellow-green halos)',
            'I — Irregular heartbeats',
            'S — Stomach upset (nausea/vomiting)',
            'U — Urinary output drop',
            'A — Abdominal pain',
            'L — Lethargy'
          ]
        }
      ]
    }
  },

  // CASE 5: PHARMACOKINETICS / TDM
  {
    id: 'seed-005',
    title: 'Infective Endocarditis & Gentamicin TDM',
    subject_area: 'pharmacokinetics_tdm',
    difficulty: 'hard',
    tags: ['Endocarditis', 'Gentamicin', 'TDM', 'Nephrotoxicity'],
    source: 'seed',
    created_at: '2025-01-05T00:00:00Z',
    phases: [
      {
        id: 'seed-005-phase-1',
        title: 'Day 5: TDM Review',
        description: 'Simran\'s Gentamicin trough has come back elevated. Review the TDM results and recommend dosing adjustments.',
        patient_snapshot: {
          name: 'Simran Jeet', age: 28, sex: 'F', ward: 'Cardiac Ward', bed: '24',
          presenting_complaint: 'Endocarditis on Ampicillin + Gentamicin.',
          pmh: ['IVDA', 'MVP'],
          medications: [
            { drug: 'Ampicillin IV', dose: '2 g', frequency: 'Q4H', route: 'IV' },
            { drug: 'Gentamicin IV', dose: '80 mg', frequency: 'Q8H', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Gentamicin Trough', value: '3.8', unit: 'mcg/mL', reference: '<1.0', is_abnormal: true },
            { name: 'SCr', value: '1.0', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: false },
          ],
        },
        questions: [
          {
            id: 'q-005-1', case_id: 'seed-005',
            question_text: 'Gentamicin trough is 3.8 mcg/mL (target <1). What intervention is required?',
            option_a: 'Continue current dosing.',
            option_b: 'Extend the interval to Q12H or Q24H and recheck trough.',
            option_c: 'Increase dose to 120 mg.',
            option_d: 'Switch to oral Gentamicin.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mar_action',
            target_drug: 'Gentamicin IV',
            explanation_text: 'Trough >1 mcg/mL indicates accumulation and high risk for nephrotoxicity. Extending the interval allows time for clearance.',
            subject_reference: 'Pharmacokinetics / TDM',
          },
          {
            id: 'q-005-2', case_id: 'seed-005',
            question_text: 'When exactly should a Gentamicin trough level be drawn?',
            option_a: 'After the infusion ends.',
            option_b: '30 minutes before the next scheduled dose.',
            option_c: '1 hour after infusion starts.',
            option_d: 'Randomly during the day.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Trough reflects the lowest concentration and is drawn 30 mins prior to the next dose to ensure complete clearance.',
            subject_reference: 'Pharmacokinetics / TDM',
          }
        ]
      },
      {
        id: 'seed-005-phase-2',
        title: 'Day 10: Toxicity Monitoring',
        description: 'Checking for organ damage from prolonged aminoglycoside use.',
        patient_snapshot: {
          name: 'Simran Jeet', age: 28, sex: 'F', ward: 'Cardiac Ward', bed: '24',
          presenting_complaint: 'Complains of tinnitus (ringing in ears).',
          pmh: ['IVDA'],
          medications: [
            { drug: 'Gentamicin IV', dose: '80 mg', frequency: 'Q12H', route: 'IV' }
          ],
          allergies: [],
          labs: [
            { name: 'SCr', value: '1.5', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-005-3', case_id: 'seed-005',
            question_text: 'Her SCr has risen to 1.5 and she has tinnitus. What are these signs of?',
            option_a: 'Aminoglycoside-induced Nephrotoxicity and Ototoxicity.',
            option_b: 'Ampicillin allergy.',
            option_c: 'Normal disease progression.',
            option_d: 'Heart failure.',
            correct_option: 'A',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Aminoglycosides cause reversible acute tubular necrosis (rising SCr) and irreversible ototoxicity (tinnitus, hearing loss).',
            subject_reference: 'Pharmacotherapeutics - ADRs',
          },
          {
            id: 'q-005-4', case_id: 'seed-005',
            question_text: 'Which alternative synergistic antibiotic regimen avoids aminoglycoside toxicity in Enterococcal endocarditis?',
            option_a: 'Vancomycin + Daptomycin',
            option_b: 'Ampicillin + Ceftriaxone',
            option_c: 'Linezolid alone',
            option_d: 'Azithromycin + Ciprofloxacin',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Ampicillin + Ceftriaxone provides double beta-lactam synergy against E. faecalis without nephrotoxicity, preferred in patients with rising SCr.',
            subject_reference: 'Infectious Diseases',
          }
        ]
      },
      {
        id: 'seed-005-phase-3',
        title: 'Day 28: Discharge Planning',
        description: 'Endocarditis treatment is completing. Validating duration.',
        patient_snapshot: {
          name: 'Simran Jeet', age: 28, sex: 'F', ward: 'Cardiac Ward', bed: '24',
          presenting_complaint: 'Ready to finish antibiotics.',
          pmh: [],
          medications: [
            { drug: 'Ampicillin IV', dose: '2 g', frequency: 'Q4H', route: 'IV' },
            { drug: 'Ceftriaxone IV', dose: '2 g', frequency: 'Q12H', route: 'IV' }
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-005-5', case_id: 'seed-005',
            question_text: 'What is the standard total duration of IV antibiotic therapy for native valve Enterococcal endocarditis?',
            option_a: '7-14 days',
            option_b: '4 to 6 weeks',
            option_c: '3 months',
            option_d: '6 months oral',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Endocarditis requires prolonged high-dose IV bactericidal therapy (4-6 weeks) to penetrate valve vegetations.',
            subject_reference: 'Infectious Diseases',
          },
          {
            id: 'q-005-6', case_id: 'seed-005',
            question_text: 'Unlike nephrotoxicity, what characterizes Gentamicin-induced ototoxicity?',
            option_a: 'It is highly reversible.',
            option_b: 'It is permanent and irreversible due to hair cell destruction.',
            option_c: 'It only affects balance, not hearing.',
            option_d: 'It resolves with hydration.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Cochlear damage from aminoglycosides is permanent, making audiometry monitoring vital for long courses.',
            subject_reference: 'Pharmacotherapeutics - ADRs',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA Guidelines for Infective Endocarditis (2015)',
          organization: 'AHA',
          text: 'Treatment of Enterococcal IE requires Ampicillin + Gentamicin OR Ampicillin + Ceftriaxone (preferred if renal risk) for 4-6 weeks.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why is Ampicillin + Ceftriaxone synergistic?',
          rationale: 'Ampicillin binds PBP4 and PBP5, while Ceftriaxone binds PBP2 and PBP3 — together they overwhelm the organism\'s ability to repair its cell wall.'
        }
      ],
      mnemonics: [
        {
          name: 'Aminoglycoside Toxicity (O-T-O)',
          concept: 'Primary toxicities of aminoglycosides',
          bullets: [
            'O — Ototoxicity (irreversible)',
            'T — Tubular Necrosis (reversible nephrotoxicity)',
            'O — Ocular/Neuromuscular Blockade'
          ]
        }
      ]
    }
  },

  // CASE 6: RESPIRATORY / TOXICOLOGY
  {
    id: 'seed-006',
    title: 'COPD Exacerbation & Theophylline Toxicity',
    subject_area: 'respiratory',
    difficulty: 'medium',
    tags: ['COPD', 'Theophylline', 'Oxygen Therapy', 'Drug Interaction'],
    source: 'seed',
    created_at: '2025-01-06T00:00:00Z',
    phases: [
      {
        id: 'seed-006-phase-1',
        title: 'Day 1: Acute Exacerbation',
        description: 'Harish is admitted with an acute exacerbation. Review oxygen targets and anticholinergic safety in BPH.',
        patient_snapshot: {
          name: 'Harish Chandra', age: 65, sex: 'M', ward: 'Pulmonology', bed: '18',
          presenting_complaint: 'Acute COPD exacerbation with CO2 retention.',
          pmh: ['COPD GOLD III', 'BPH'],
          medications: [
            { drug: 'Salbutamol Neb', dose: '2.5 mg', frequency: 'Q4H', route: 'Neb' },
            { drug: 'Ipratropium Neb', dose: '500 mcg', frequency: 'Q6H', route: 'Neb' },
            { drug: 'Oxygen', dose: '4 L/min', frequency: 'Continuous', route: 'NC' },
          ],
          allergies: [],
          labs: [
            { name: 'SpO2', value: '86%', unit: '', reference: '>88%', is_abnormal: true },
            { name: 'pCO2', value: '58', unit: 'mmHg', reference: '35-45', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-006-1', case_id: 'seed-006',
            question_text: 'What is the target SpO2 in COPD and why is high-flow dangerous?',
            option_a: '99-100%',
            option_b: '88-92% — high-flow O2 suppresses the hypoxic drive, worsening CO2 retention.',
            option_c: '75-80%',
            option_d: 'No oxygen in COPD',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'In chronic CO2 retainers, giving high O2 removes the hypoxic drive, causing hypoventilation and fatal respiratory acidosis.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          },
          {
            id: 'q-006-2', case_id: 'seed-006',
            question_text: 'Which inhaled medication needs BPH monitoring?',
            option_a: 'Salbutamol',
            option_b: 'Ipratropium — anticholinergics worsen urinary retention.',
            option_c: 'Oxygen',
            option_d: 'Steroids',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Anticholinergics relax bladder detrusor, worsening BPH retention.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          }
        ]
      },
      {
        id: 'seed-006-phase-2',
        title: 'Day 3: Drug Interaction',
        description: 'Patient started on Theophylline and Ciprofloxacin for pneumonia. Develops tremors and tachycardia.',
        patient_snapshot: {
          name: 'Harish Chandra', age: 65, sex: 'M', ward: 'Pulmonology', bed: '18',
          presenting_complaint: 'Tremors and tachycardia.',
          pmh: ['COPD'],
          medications: [
            { drug: 'Theophylline', dose: '300 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Ciprofloxacin', dose: '500 mg', frequency: 'BD', route: 'Oral' }
          ],
          allergies: [],
          labs: [
            { name: 'Theophylline Level', value: '28', unit: 'mcg/mL', reference: '10-20', is_abnormal: true }
          ],
        },
        questions: [
          {
            id: 'q-006-3', case_id: 'seed-006',
            question_text: 'Why is the Theophylline level toxic (28 mcg/mL)?',
            option_a: 'Ciprofloxacin is a potent CYP1A2 inhibitor, halting Theophylline metabolism.',
            option_b: 'Renal failure.',
            option_c: 'Theophylline is taken with food.',
            option_d: 'Salbutamol interaction.',
            correct_option: 'A',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'Ciprofloxacin inhibits CYP1A2, which doubles Theophylline levels, leading to toxic tremors and arrhythmias.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
          {
            id: 'q-006-4', case_id: 'seed-006',
            question_text: 'Which safer antibiotic covers respiratory pathogens without inhibiting CYP1A2?',
            option_a: 'Fluvoxamine',
            option_b: 'Azithromycin',
            option_c: 'Erythromycin',
            option_d: 'Clarithromycin',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Azithromycin does not inhibit CYP1A2 (unlike Erythromycin/Clarithromycin) and is safe with Theophylline.',
            subject_reference: 'Infectious Diseases',
          }
        ]
      },
      {
        id: 'seed-006-phase-3',
        title: 'Day 5: Discharge & Counseling',
        description: 'Discharge planning. Patient mentions he quit smoking 2 weeks ago.',
        patient_snapshot: {
          name: 'Harish Chandra', age: 65, sex: 'M', ward: 'Pulmonology', bed: '18',
          presenting_complaint: 'Ready for discharge.',
          pmh: ['COPD'],
          medications: [
            { drug: 'Theophylline', dose: '300 mg', frequency: 'BD', route: 'Oral' }
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-006-5', case_id: 'seed-006',
            question_text: 'How does smoking cessation impact his Theophylline dose?',
            option_a: 'No impact.',
            option_b: 'Smoking induces CYP1A2; quitting removes this induction, so his Theophylline dose must be REDUCED to prevent toxicity.',
            option_c: 'Dose must be increased.',
            option_d: 'Stop the drug entirely.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Polycyclic aromatic hydrocarbons in smoke induce CYP1A2. Quitting smoking slows metabolism, causing levels to rise if the dose isn\'t lowered.',
            subject_reference: 'Pharmacokinetics',
          },
          {
            id: 'q-006-6', case_id: 'seed-006',
            question_text: 'What preventative vaccines should be verified prior to discharge for a COPD patient?',
            option_a: 'Yellow fever',
            option_b: 'Pneumococcal and Annual Influenza vaccines',
            option_c: 'Rabies',
            option_d: 'Typhoid',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Pneumococcal and flu vaccines are critical to prevent viral/bacterial COPD exacerbations.',
            subject_reference: 'Preventative Medicine',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'GOLD Strategy for COPD (2024)',
          organization: 'GOLD',
          text: 'Target SpO2 88-92%. Short courses of steroids (5-7 days) without taper. Antibiotics indicated for increased sputum purulence/volume.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why are methylxanthines prone to drug interactions?',
          rationale: 'Narrow therapeutic index and primary CYP1A2 metabolism make them highly susceptible to toxicity via inhibitors (Cipro) or sub-therapeutic levels via inducers (Smoking).'
        }
      ],
      mnemonics: [
        {
          name: 'CYP1A2 Inhibitors (C-A-M-P-S)',
          concept: 'Drugs that inhibit CYP1A2 causing Theophylline toxicity',
          bullets: [
            'C — Ciprofloxacin',
            'A — Amiodarone',
            'M — Macrolides (Erythromycin)',
            'P — Propranolol',
            'S — SSRIs (Fluvoxamine)'
          ]
        }
      ]
    }
  },
// CASE 7: CLINICAL TOXICOLOGY
  {
    id: 'seed-007',
    title: 'Paracetamol Overdose & NAC Protocol',
    subject_area: 'clinical_toxicology',
    difficulty: 'hard',
    tags: ['Paracetamol', 'Toxicology', 'N-Acetylcysteine', 'Liver Failure'],
    source: 'seed',
    created_at: '2025-01-07T00:00:00Z',
    phases: [
      {
        id: 'seed-007-phase-1',
        title: 'Hour 6: ER NAC Protocol',
        description: 'Deepa arrives 6 hours post-ingestion of 15g Paracetamol. Review the NAC protocol.',
        patient_snapshot: {
          name: 'Deepa Sharma', age: 22, sex: 'F', ward: 'Emergency', bed: 'ER-07',
          presenting_complaint: '15g Paracetamol overdose 6 hours ago.',
          pmh: [],
          medications: [
            { drug: 'NAC IV', dose: '150 mg/kg', frequency: 'Loading over 1h', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Serum Paracetamol (4h)', value: '250', unit: 'mcg/mL', reference: '<150 at 4h', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-007-1', case_id: 'seed-007',
            question_text: 'What is the correct IV NAC 3-bag protocol for Paracetamol overdose?',
            option_a: 'Single 150 mg/kg bolus.',
            option_b: '150 mg/kg over 1h, 50 mg/kg over 4h, 100 mg/kg over 16h.',
            option_c: '100 mg/kg IV push.',
            option_d: '50 mg/kg oral Q4H.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Standard 3-bag IV NAC protocol over 21 hours is required to replenish glutathione stores.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-007-2', case_id: 'seed-007',
            question_text: 'How does NAC prevent liver damage?',
            option_a: 'Neutralizes Paracetamol in stomach.',
            option_b: 'Provides cysteine to replenish glutathione, conjugating toxic NAPQI.',
            option_c: 'Inhibits CYP2E1.',
            option_d: 'Enhances renal excretion.',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'NAC replenishes glutathione, preventing the toxic metabolite NAPQI from destroying hepatocytes.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          }
        ]
      },
      {
        id: 'seed-007-phase-2',
        title: 'Hour 7: Adverse Reaction',
        description: 'During the loading dose, she develops flushing and bronchospasm.',
        patient_snapshot: {
          name: 'Deepa Sharma', age: 22, sex: 'F', ward: 'Emergency', bed: 'ER-07',
          presenting_complaint: 'Flushing and wheezing during NAC infusion.',
          pmh: [],
          medications: [
            { drug: 'NAC IV', dose: '150 mg/kg', frequency: 'Loading', route: 'IV' }
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-007-3', case_id: 'seed-007',
            question_text: 'Flushing and bronchospasm during NAC loading — what is the immediate action?',
            option_a: 'Stop NAC permanently.',
            option_b: 'Pause, treat symptoms with antihistamines, resume at a slower rate.',
            option_c: 'Switch to charcoal only.',
            option_d: 'Give IM Epinephrine.',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'This is a rate-dependent anaphylactoid reaction (non-IgE), not a true allergy. Resume slowly to save the liver.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-007-4', case_id: 'seed-007',
            question_text: 'If she had taken Modified-Release Paracetamol, how does it alter the Rumack-Matthew nomogram use?',
            option_a: 'No change.',
            option_b: 'The nomogram is invalid; check levels at 4h, 6h, and 8h to catch delayed peaks.',
            option_c: 'Multiply the level by 2.',
            option_d: 'Do not use NAC.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Extended-release preparations have delayed absorption, rendering the standard single-point 4h nomogram inaccurate.',
            subject_reference: 'Pharmacotherapeutics - Toxicology',
          }
        ]
      },
      {
        id: 'seed-007-phase-3',
        title: 'Day 3: Liver Failure Criteria',
        description: 'Her liver enzymes spike and she becomes encephalopathic.',
        patient_snapshot: {
          name: 'Deepa Sharma', age: 22, sex: 'F', ward: 'ICU', bed: 'ICU-3',
          presenting_complaint: 'Encephalopathy and jaundice.',
          pmh: [],
          medications: [
            { drug: 'NAC IV', dose: '100 mg/kg', frequency: 'Maintenance', route: 'IV' }
          ],
          allergies: [],
          labs: [
            { name: 'Arterial pH', value: '7.28', unit: '', reference: '7.35-7.45', is_abnormal: true },
            { name: 'INR', value: '7.0', unit: '', reference: '<1.2', is_abnormal: true }
          ],
        },
        questions: [
          {
            id: 'q-007-5', case_id: 'seed-007',
            question_text: 'What criteria indicate the need for emergency liver transplantation in Paracetamol overdose?',
            option_a: 'MELD Score > 10.',
            option_b: 'King\'s College Criteria (pH < 7.30 OR INR > 6.5 + SCr > 3.4 + Grade 3/4 HE).',
            option_c: 'ALT > 1000 U/L.',
            option_d: 'Rumack-Matthew level > 300.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'The King\'s College Criteria identify patients with irreversible acute liver failure requiring transplant.',
            subject_reference: 'Hepatology',
          },
          {
            id: 'q-007-6', case_id: 'seed-007',
            question_text: 'Given her severe liver failure, should NAC be continued beyond the standard 21 hours?',
            option_a: 'No, maximum duration is 21 hours.',
            option_b: 'Yes, continue until INR < 2.0 or transplant occurs, as it improves hepatic microcirculation.',
            option_c: 'Switch to oral NAC.',
            option_d: 'Give Fresh Frozen Plasma instead.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'In fulminant hepatic failure, IV NAC is continued indefinitely to support antioxidant defense and blood flow until recovery or transplant.',
            subject_reference: 'Toxicology',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'MHRA Clinical Guideline — IV NAC Protocol',
          organization: 'MHRA',
          text: 'Use D5W as the diluent — NOT Normal Saline (associated with increased anaphylactoid reactions).'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'What is the mechanism by which Paracetamol causes hepatotoxicity?',
          rationale: 'In overdose, safe glucuronidation pathways saturate, shunting >50% through CYP2E1. NAPQI production exceeds glutathione capacity, causing hepatocyte necrosis.'
        }
      ],
      mnemonics: [
        {
          name: 'King\'s College Criteria for Paracetamol (pH-I-C-E)',
          concept: 'Criteria for liver transplant',
          bullets: [
            'pH < 7.30 (Strongest single indicator)',
            'INR > 6.5',
            'Creatinine > 3.4 mg/dL',
            'Encephalopathy Grade III/IV'
          ]
        }
      ]
    }
  },

  // CASE 8: NEUROLOGY
  {
    id: 'seed-008',
    title: 'Acute Stroke & Anticoagulant Reconciliation',
    subject_area: 'neurology_psychiatry',
    difficulty: 'hard',
    tags: ['Stroke', 'tPA', 'Atrial Fibrillation', 'Anticoagulation'],
    source: 'seed',
    created_at: '2025-01-08T00:00:00Z',
    phases: [
      {
        id: 'seed-008-phase-1',
        title: 'Day 1: Acute Stroke',
        description: 'Kamala is admitted with acute ischemic stroke. Review anticoagulation history and tPA safety.',
        patient_snapshot: {
          name: 'Kamala Prasad', age: 74, sex: 'F', ward: 'Stroke Unit', bed: 'SU-03',
          presenting_complaint: 'Acute ischemic stroke with AF.',
          pmh: ['AF', 'HTN', 'T2DM'],
          medications: [
            { drug: 'Alteplase', dose: '0.9 mg/kg', frequency: 'Once', route: 'IV' },
            { drug: 'Warfarin', dose: '5 mg', frequency: 'OD', route: 'Oral' }
          ],
          allergies: [],
          labs: [
            { name: 'INR', value: '1.3', unit: '', reference: '2.0-3.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-008-1', case_id: 'seed-008',
            question_text: 'Her admission INR is 1.3 while on Warfarin for AF. What is your assessment?',
            option_a: 'Therapeutic.',
            option_b: 'Sub-therapeutic; inadequate dosing likely caused the cardioembolic stroke.',
            option_c: 'Stop anticoagulation permanently.',
            option_d: 'Double Warfarin immediately.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'INR 1.3 is below the 2.0-3.0 target, meaning she was unprotected from AF-induced clots.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
          {
            id: 'q-008-2', case_id: 'seed-008',
            question_text: 'Is it safe to administer tPA given she is on Warfarin?',
            option_a: 'No, any Warfarin use is an absolute contraindication.',
            option_b: 'Yes, because her INR is ≤ 1.7.',
            option_c: 'Only if reversed with Vitamin K first.',
            option_d: 'Yes, give full dose tPA and Aspirin simultaneously.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'tPA is contraindicated if INR > 1.7. At 1.3, she is eligible for thrombolysis.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          }
        ]
      },
      {
        id: 'seed-008-phase-2',
        title: 'Day 2: Post-tPA Care',
        description: 'Monitoring post-thrombolysis parameters.',
        patient_snapshot: {
          name: 'Kamala Prasad', age: 74, sex: 'F', ward: 'Stroke Unit', bed: 'SU-03',
          presenting_complaint: 'Recovering post-tPA.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'BP', value: '185/100', unit: 'mmHg', reference: '<140/90', is_abnormal: true }
          ],
        },
        questions: [
          {
            id: 'q-008-3', case_id: 'seed-008',
            question_text: 'What must be held for 24 hours post-tPA?',
            option_a: 'Atenolol',
            option_b: 'Anticoagulants and antiplatelets (e.g., Aspirin, Heparin)',
            option_c: 'Insulin',
            option_d: 'Statins',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'To prevent hemorrhagic transformation, all blood thinners are held for 24 hours post-tPA.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
          {
            id: 'q-008-4', case_id: 'seed-008',
            question_text: 'Her BP is 185/100 post-tPA. What is the goal?',
            option_a: 'Drop it to 120/80 immediately.',
            option_b: 'Maintain < 180/105 mmHg using IV Labetalol or Nicardipine.',
            option_c: 'Allow permissive hypertension up to 220/120.',
            option_d: 'Stop all BP meds.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'BP > 180/105 post-tPA drastically increases the risk of brain hemorrhage.',
            subject_reference: 'Neurology',
          }
        ]
      },
      {
        id: 'seed-008-phase-3',
        title: 'Day 5: Discharge Secondary Prevention',
        description: 'Preparing for discharge and restarting AF stroke prophylaxis.',
        patient_snapshot: {
          name: 'Kamala Prasad', age: 74, sex: 'F', ward: 'Stroke Unit', bed: 'SU-03',
          presenting_complaint: 'Ready for discharge.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-008-5', case_id: 'seed-008',
            question_text: 'When should therapeutic anticoagulation for AF be restarted?',
            option_a: 'Immediately.',
            option_b: '4-14 days post-stroke after repeat imaging rules out hemorrhage.',
            option_c: '3 months later.',
            option_d: 'Never.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'The "1-3-6-12" rule guides restarting anticoagulants to balance stroke prevention with bleeding risk.',
            subject_reference: 'Neurology',
          },
          {
            id: 'q-008-6', case_id: 'seed-008',
            question_text: 'Why transition from Warfarin to a DOAC (Apixaban) in this patient?',
            option_a: 'DOACs don\'t cause bleeding.',
            option_b: 'DOACs offer fixed dosing without INR monitoring, improving compliance and lowering intracranial hemorrhage risk.',
            option_c: 'DOACs are cheaper.',
            option_d: 'DOACs reverse tPA.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Sub-therapeutic Warfarin caused her stroke. DOACs solve compliance issues and lower brain bleed risk.',
            subject_reference: 'Pharmacotherapeutics',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA/ASA Guidelines for Acute Ischemic Stroke (2019)',
          organization: 'AHA/ASA',
          text: 'Alteplase (tPA) 0.9 mg/kg (max 90 mg). CONTRAINDICATIONS: INR >1.7, Platelets <100k, BP >185/110. Maintain BP <180/105 for 24h post-tPA.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why is BP management critical post-tPA?',
          rationale: 'Elevated BP increases the risk of bleeding into the infarcted area (hemorrhagic transformation).'
        }
      ],
      mnemonics: [
        {
          name: 'Stroke Detection (F-A-S-T)',
          concept: 'Acute stroke recognition',
          bullets: [
            'F — Face Drooping',
            'A — Arm Weakness',
            'S — Speech Difficulty',
            'T — Time to call Emergency'
          ]
        }
      ]
    }
  },

  // CASE 9: GIT / HEPATOLOGY
  {
    id: 'seed-009',
    title: 'Hepatic Cirrhosis & Portal Hypertension',
    subject_area: 'git_hepatology',
    difficulty: 'hard',
    tags: ['Cirrhosis', 'Ascites', 'Hepatic Encephalopathy', 'Diuretics'],
    source: 'seed',
    created_at: '2025-01-09T00:00:00Z',
    phases: [
      {
        id: 'seed-009-phase-1',
        title: 'Day 1: Ascites Management',
        description: 'Prakash is admitted with tense ascites and hepatic encephalopathy.',
        patient_snapshot: {
          name: 'Prakash Rao', age: 55, sex: 'M', ward: 'Gastroenterology', bed: '22',
          presenting_complaint: 'Ascites and hepatic encephalopathy.',
          pmh: ['Cirrhosis Child-Pugh C', 'Portal HTN'],
          medications: [
            { drug: 'Spironolactone', dose: '100 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Furosemide', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Lactulose', dose: '30 mL', frequency: 'TDS', route: 'Oral' }
          ],
          allergies: [],
          labs: [
            { name: 'NH3', value: '95', unit: 'mcmol/L', reference: '15-45', is_abnormal: true },
            { name: 'Na+', value: '128', unit: 'mEq/L', reference: '135-145', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-009-1', case_id: 'seed-009',
            question_text: 'What is the correct Spironolactone:Furosemide ratio for ascites management?',
            option_a: 'Furosemide alone',
            option_b: '100:40 (2.5:1) ratio to balance natriuresis and prevent hypokalemia.',
            option_c: 'HCTZ instead',
            option_d: 'Albumin only',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'AASLD guidelines mandate the 100:40 ratio to offset potassium wasting.',
            subject_reference: 'Pharmacotherapeutics - Hepatology',
          },
          {
            id: 'q-009-2', case_id: 'seed-009',
            question_text: 'What is the combination treatment for Hepatic Encephalopathy?',
            option_a: 'Lactulose (trap ammonia in gut) + Rifaximin (kill ammonia-producing flora).',
            option_b: 'Neomycin + Metronidazole',
            option_c: 'Charcoal + IV abx',
            option_d: 'Mannitol + Dexa',
            correct_option: 'A',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Lactulose converts NH3 to non-absorbable NH4+. Rifaximin suppresses gut bacteria.',
            subject_reference: 'Pharmacotherapeutics - Hepatology',
          }
        ]
      },
      {
        id: 'seed-009-phase-2',
        title: 'Day 3: Variceal Prophylaxis',
        description: 'Ascites improving, adjusting meds for portal hypertension.',
        patient_snapshot: {
          name: 'Prakash Rao', age: 55, sex: 'M', ward: 'Gastroenterology', bed: '22',
          presenting_complaint: 'Optimizing portal HTN meds.',
          pmh: [],
          medications: [
            { drug: 'Propranolol', dose: '40 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Heart Rate', value: '75', unit: 'bpm', reference: '60-100', is_abnormal: false }
          ],
        },
        questions: [
          {
            id: 'q-009-3', case_id: 'seed-009',
            question_text: 'What is the target heart rate for Propranolol in portal hypertension?',
            option_a: '100-110 bpm',
            option_b: 'Resting HR 55-60 bpm (or 25% reduction from baseline).',
            option_c: 'No target',
            option_d: 'SBP < 100',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Non-selective beta-blockers reduce portal pressure; efficacy is measured by achieving HR 55-60.',
            subject_reference: 'Pharmacotherapeutics - Hepatology',
          },
          {
            id: 'q-009-4', case_id: 'seed-009',
            question_text: 'If he undergoes large-volume paracentesis (>5L drained), what IV fluid is required?',
            option_a: 'Normal Saline',
            option_b: 'IV Albumin (8g per liter of ascites removed) to prevent circulatory dysfunction.',
            option_c: 'Dextrose 5%',
            option_d: 'Ringer\'s Lactate',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Albumin maintains oncotic pressure, preventing post-paracentesis circulatory dysfunction and renal failure.',
            subject_reference: 'Hepatology',
          }
        ]
      },
      {
        id: 'seed-009-phase-3',
        title: 'Day 6: Discharge Caution',
        description: 'Counseling on discharge medications.',
        patient_snapshot: {
          name: 'Prakash Rao', age: 55, sex: 'M', ward: 'Gastroenterology', bed: '22',
          presenting_complaint: 'Ready for home.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-009-5', case_id: 'seed-009',
            question_text: 'Which class of over-the-counter medication must be absolutely avoided in cirrhosis?',
            option_a: 'Paracetamol (in normal doses)',
            option_b: 'NSAIDs (e.g., Ibuprofen) due to risk of precipitating Hepatorenal Syndrome and GI bleeds.',
            option_c: 'Antacids',
            option_d: 'Vitamin C',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'NSAIDs inhibit renal prostaglandins, destroying GFR in cirrhotics and causing hepatorenal syndrome.',
            subject_reference: 'Pharmacotherapeutics - Safety',
          },
          {
            id: 'q-009-6', case_id: 'seed-009',
            question_text: 'What fluid and dietary restriction is critical for ascites management?',
            option_a: 'High protein diet.',
            option_b: 'Sodium restriction (<2g/day) is more critical than fluid restriction.',
            option_c: 'Total fluid restriction to 500 mL/day.',
            option_d: 'No restrictions.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Ascites is driven by sodium retention. Salt restriction is primary; fluid restriction is only for severe hyponatremia.',
            subject_reference: 'Hepatology',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'EASL Guidelines on Decompensated Cirrhosis (2018)',
          organization: 'EASL',
          text: 'Spironolactone 100 mg : Furosemide 40 mg ratio. Avoid NSAIDs. Lactulose is first-line for HE.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why Lactulose over Neomycin?',
          rationale: 'Lactulose is non-absorbable and safe long-term. Neomycin has systemic absorption causing ototoxicity and nephrotoxicity.'
        }
      ],
      mnemonics: [
        {
          name: 'Hepatic Encephalopathy Precipitants (H-E-P-A-T-I-C)',
          concept: 'Triggers of HE',
          bullets: [
            'H — Hemorrhage (GI bleed)',
            'E — Electrolytes (Hypokalemia)',
            'P — Protein excess',
            'A — Alcohol/Infection',
            'T — Toxins (Sedatives/NSAIDs)',
            'I — Increasing urea (AKI)',
            'C — Constipation'
          ]
        }
      ]
    }
  },

  // CASE 10: RHEUMATOLOGY
  {
    id: 'seed-010',
    title: 'Rheumatoid Arthritis & Methotrexate Toxicity',
    subject_area: 'community_pharmacy',
    difficulty: 'medium',
    tags: ['Methotrexate', 'Rheumatoid Arthritis', 'Medication Error', 'Leucovorin'],
    source: 'seed',
    created_at: '2025-01-10T00:00:00Z',
    phases: [
      {
        id: 'seed-010-phase-1',
        title: 'Day 1: Toxicity Presentation',
        description: 'Meera presents with pancytopenia from accidental daily Methotrexate.',
        patient_snapshot: {
          name: 'Meera Joshi', age: 52, sex: 'F', ward: 'Rheumatology', bed: '11',
          presenting_complaint: 'Pancytopenia, oral ulcers from daily MTX.',
          pmh: ['RA', 'CKD Stage 2'],
          medications: [
            { drug: 'Methotrexate', dose: '10 mg', frequency: 'DAILY (ERROR)', route: 'Oral' },
            { drug: 'Naproxen', dose: '250 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'WBC', value: '1.5', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
            { name: 'Platelets', value: '45', unit: 'x10^3/uL', reference: '150-450', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-010-1', case_id: 'seed-010',
            question_text: 'Critical immediate intervention for MTX toxicity?',
            option_a: 'Increase Folic Acid.',
            option_b: 'Stop MTX + Administer Leucovorin (Folinic Acid) rescue 10-25 mg IV Q6H.',
            option_c: 'Continue MTX + add antibiotics.',
            option_d: 'Activated charcoal.',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Leucovorin bypasses the DHFR block to directly rescue normal cells from folate depletion.',
            subject_reference: 'Pharmacotherapeutics - Rheumatology',
          },
          {
            id: 'q-010-2', case_id: 'seed-010',
            question_text: 'Which home drug worsened her MTX toxicity by reducing renal clearance?',
            option_a: 'Prednisolone',
            option_b: 'Folic Acid',
            option_c: 'Naproxen (NSAIDs compete for tubular secretion)',
            option_d: 'None',
            correct_option: 'C',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'NSAIDs reduce renal blood flow and block tubular secretion, raising MTX to toxic levels.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          }
        ]
      },
      {
        id: 'seed-010-phase-2',
        title: 'Day 3: Rescue Monitoring',
        description: 'Monitoring bone marrow recovery and preventing renal crystallization.',
        patient_snapshot: {
          name: 'Meera Joshi', age: 52, sex: 'F', ward: 'Rheumatology', bed: '11',
          presenting_complaint: 'Recovering from toxicity.',
          pmh: [],
          medications: [
            { drug: 'Leucovorin', dose: '15 mg', frequency: 'Q6H', route: 'IV' }
          ],
          allergies: [],
          labs: [
            { name: 'Urine pH', value: '5.5', unit: '', reference: '6.5-8.0', is_abnormal: true }
          ],
        },
        questions: [
          {
            id: 'q-010-3', case_id: 'seed-010',
            question_text: 'To prevent MTX from precipitating in the kidneys, what IV fluid strategy is used?',
            option_a: 'Fluid restriction.',
            option_b: 'Aggressive hydration with IV Sodium Bicarbonate to alkalinize the urine (pH > 7).',
            option_c: 'IV Furosemide.',
            option_d: 'Normal Saline only.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'MTX precipitates in acidic urine. Alkalinization keeps it soluble for excretion.',
            subject_reference: 'Pharmacokinetics',
          },
          {
            id: 'q-010-4', case_id: 'seed-010',
            question_text: 'Which drug class inhibits OAT3, further spiking MTX levels?',
            option_a: 'Beta-blockers',
            option_b: 'Proton Pump Inhibitors (PPIs)',
            option_c: 'Statins',
            option_d: 'Antihistamines',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'PPIs compete with MTX at the OAT3 transporter, preventing its renal excretion.',
            subject_reference: 'Drug Interactions',
          }
        ]
      },
      {
        id: 'seed-010-phase-3',
        title: 'Discharge & Counseling',
        description: 'Counseling to prevent future fatal errors.',
        patient_snapshot: {
          name: 'Meera Joshi', age: 52, sex: 'F', ward: 'Rheumatology', bed: '11',
          presenting_complaint: 'Discharge counseling.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-010-5', case_id: 'seed-010',
            question_text: 'Key counseling point to prevent future MTX errors?',
            option_a: 'Take with milk.',
            option_b: 'ONCE A WEEK on the same day; never daily.',
            option_c: 'Take only during flares.',
            option_d: 'Combine with any NSAID.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Accidental daily dosing of weekly MTX is a frequent fatal error requiring explicit counseling.',
            subject_reference: 'Pharmacotherapeutics - Patient Safety',
          },
          {
            id: 'q-010-6', case_id: 'seed-010',
            question_text: 'What is the REMS/pregnancy status of MTX?',
            option_a: 'Safe in all trimesters.',
            option_b: 'Category X teratogen; requires strict contraception and 3-month washout before conception.',
            option_c: 'Safe in males only.',
            option_d: 'Causes gestational diabetes.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'MTX is highly teratogenic. Both males and females need a 3-month washout before planned conception.',
            subject_reference: 'Reproductive Health',
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ACR Guideline for Treatment of Rheumatoid Arthritis (2021)',
          organization: 'ACR',
          text: 'MTX is the anchor DMARD. Prescribed ONCE-WEEKLY. Folic acid 1-5 mg daily reduces ADRs.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why does Leucovorin rescue work while standard Folic Acid does not?',
          rationale: 'MTX blocks DHFR. Folic acid needs DHFR to activate. Leucovorin is PRE-REDUCED and bypasses DHFR completely.'
        }
      ],
      mnemonics: [
        {
          name: 'MTX Toxicity (M-U-C-O-S-A)',
          concept: 'Toxicity signs',
          bullets: [
            'M — Mucositis (First sign)',
            'U — Urine precipitation',
            'C — CBC suppression',
            'O — Omission error (Daily instead of weekly)',
            'S — Sore throat (Neutropenia)',
            'A — Alveolitis'
          ]
        }
      ]
    }
  },

  // CASE 11: ONCOLOGY / INFECTIOUS DISEASES
  {
    id: 'seed-011',
    title: 'Post-Chemotherapy Febrile Neutropenia',
    subject_area: 'oncology_hematology',
    difficulty: 'hard',
    tags: ['Febrile Neutropenia', 'Oncology', 'G-CSF', 'Pseudomonas'],
    source: 'seed',
    created_at: '2025-01-11T00:00:00Z',
    phases: [
      {
        id: 'seed-011-phase-1',
        title: 'Day 1: Febrile Neutropenia',
        description: 'Patient presents with fever 10 days post-chemo. Penicillin allergy.',
        patient_snapshot: {
          name: 'Priya Sharma', age: 45, sex: 'F', ward: 'Oncology', bed: '5A',
          presenting_complaint: 'Fever 10 days after chemo.',
          pmh: ['Non-Hodgkin Lymphoma'],
          medications: [
            { drug: 'Filgrastim (G-CSF)', dose: '300 mcg', frequency: 'OD', route: 'SC' }
          ],
          allergies: ['Penicillin (Anaphylaxis)'],
          labs: [
            { name: 'Temp', value: '39.2', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
            { name: 'ANC', value: '300', unit: 'cells/mm3', reference: '>1500', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-011-1', case_id: 'seed-011',
            question_text: 'Which empiric antibiotic is most appropriate given severe Penicillin anaphylaxis?',
            option_a: 'Piperacillin-Tazobactam',
            option_b: 'Cefepime',
            option_c: 'Meropenem',
            option_d: 'Aztreonam plus Vancomycin',
            correct_option: 'D',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Aztreonam provides anti-pseudomonal coverage with zero cross-reactivity to penicillins. Vancomycin covers the gram-positives.',
            subject_reference: 'Oncology Pharmacy'
          },
          {
            id: 'q-011-2', case_id: 'seed-011',
            question_text: 'What is a critical timing rule for administering Filgrastim (G-CSF)?',
            option_a: 'Give simultaneously with chemo.',
            option_b: 'Must not be given within 24 hours before or after cytotoxic chemotherapy.',
            option_c: 'Give only orally.',
            option_d: 'Only give if ANC is normal.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'G-CSF stimulates rapidly dividing myeloid cells, making them susceptible to the cytotoxic effects of chemotherapy if given simultaneously.',
            subject_reference: 'Oncology Pharmacy'
          }
        ]
      },
      {
        id: 'seed-011-phase-2',
        title: 'Day 3: Antibiotic Escalation',
        description: 'Persistent fever despite 48h of Aztreonam. Blood culture shows Gram-positive cocci.',
        patient_snapshot: {
          name: 'Priya Sharma', age: 45, sex: 'F', ward: 'Oncology', bed: '5A',
          presenting_complaint: 'Persistent fever, central line port looks red.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'Blood Culture', value: 'Gram-positive cocci', unit: '', reference: 'Negative', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-011-3', case_id: 'seed-011',
            question_text: 'Based on IDSA guidelines, what is an explicit indication to add Vancomycin to the empiric regimen?',
            option_a: 'All febrile neutropenia patients get Vancomycin.',
            option_b: 'Suspected catheter-related infection, hemodynamic instability, or positive gram-positive culture.',
            option_c: 'Only if Pseudomonas is found.',
            option_d: 'Never use Vancomycin in oncology.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Routine Vancomycin is not recommended unless specific criteria like central line infection, MRSA colonization, or shock are present.',
            subject_reference: 'Infectious Diseases'
          },
          {
            id: 'q-011-4', case_id: 'seed-011',
            question_text: 'What infection control precautions are mandatory for her?',
            option_a: 'Reverse isolation (positive pressure room) and strict hand hygiene.',
            option_b: 'Airborne isolation (negative pressure).',
            option_c: 'Standard precautions only.',
            option_d: 'No isolation needed.',
            correct_option: 'A',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Neutropenic patients need protection from external environmental pathogens (Reverse Isolation).',
            subject_reference: 'Clinical Pharmacy'
          }
        ]
      },
      {
        id: 'seed-011-phase-3',
        title: 'Day 8: Resolution & Future Prep',
        description: 'ANC recovered. Preparing for next cycle of highly emetogenic chemotherapy.',
        patient_snapshot: {
          name: 'Priya Sharma', age: 45, sex: 'F', ward: 'Oncology', bed: '5A',
          presenting_complaint: 'Recovered. Discussing antiemetics.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'ANC', value: '2500', unit: 'cells/mm3', reference: '>1500', is_abnormal: false }
          ]
        },
        questions: [
          {
            id: 'q-011-5', case_id: 'seed-011',
            question_text: 'When can empiric antibiotics be safely stopped?',
            option_a: 'After exactly 7 days.',
            option_b: 'Afebrile for ≥48h AND ANC > 500 cells/μL on two consecutive days.',
            option_c: 'Once the fever breaks.',
            option_d: 'When blood culture is negative at 24h.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Both clinical resolution (afebrile) and immune recovery (ANC > 500) are required to safely stop antibiotics.',
            subject_reference: 'Infectious Diseases'
          },
          {
            id: 'q-011-6', case_id: 'seed-011',
            question_text: 'For her next Highly Emetogenic cycle, what 4-drug antiemetic prophylaxis is standard?',
            option_a: 'Ondansetron only.',
            option_b: 'NK1 Antagonist (Aprepitant) + 5-HT3 Antagonist + Dexamethasone + Olanzapine.',
            option_c: 'Metoclopramide + Dexamethasone.',
            option_d: 'Promethazine + Lorazepam.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'ASCO guidelines recommend a 4-drug combination to cover both acute (5-HT3) and delayed (NK1) nausea pathways.',
            subject_reference: 'Oncology Pharmacy'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'IDSA Guidelines for Febrile Neutropenia (2018)',
          organization: 'IDSA',
          text: 'Empiric therapy must start within 1 hour. Monotherapy with antipseudomonal beta-lactam is standard.'
        }
      ],
      calculations: [
        {
          name: 'Absolute Neutrophil Count (ANC)',
          formula: 'ANC = WBC × [(%Segs + %Bands) / 100]',
          explanation: 'ANC < 500 defines severe neutropenia risk.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why target Pseudomonas?',
          rationale: 'Pseudomonas progresses from bacteremia to fatal septic shock in neutropenic hosts within 24-48 hours.'
        }
      ],
      mnemonics: [
        {
          name: 'Anti-Pseudomonal Beta-Lactams (P-I-P-E-R)',
          concept: 'Empiric options',
          bullets: [
            'P — Piperacillin-Tazobactam',
            'I — Imipenem/Meropenem',
            'P — Penems + Vanc (if specific indications)',
            'E — Cefepime',
            'R — Ceftazidime'
          ]
        }
      ]
    }
  }
export const phaseTwoCases = [
  // CASE 12: CRITICAL CARE / INFECTIONS
  {
    id: 'seed-012',
    title: 'Septic Shock & Intensive Care Management',
    subject_area: 'infectious_diseases',
    difficulty: 'hard',
    tags: ['Sepsis', 'Norepinephrine', 'Meropenem', 'Pharmacokinetics', 'ICU'],
    phases: [
      {
        id: 'seed-012-phase-1',
        title: 'Hour 1: Septic Shock Bundle',
        description: 'Patient in septic shock requiring immediate resuscitation.',
        patient_snapshot: {
          name: 'Ravi Kumar', age: 62, sex: 'M', ward: 'ICU', bed: '2',
          presenting_complaint: 'Septic shock, BP 80/50 despite fluids.',
          pmh: ['Type 2 Diabetes'],
          medications: [
            { drug: 'Norepinephrine', dose: '0.1 mcg/kg/min', frequency: 'Continuous', route: 'IV' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'BP', value: '80/50', unit: 'mmHg', reference: '120/80', is_abnormal: true },
            { name: 'Lactate', value: '4.5', unit: 'mmol/L', reference: '<2.0', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-012-1', case_id: 'seed-012',
            question_text: 'Which is a critical safety consideration for Norepinephrine administration?',
            option_a: 'Only give via peripheral IV.',
            option_b: 'Must be administered via a central venous catheter due to severe extravasation necrosis risk.',
            option_c: 'Mix with sodium bicarbonate.',
            option_d: 'Give as rapid IV bolus.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Vasopressors like Norepinephrine cause severe tissue necrosis if they extravasate. A central line is mandatory.',
            subject_reference: 'Critical Care'
          },
          {
            id: 'q-012-2', case_id: 'seed-012',
            question_text: 'According to the SSC 1-Hour Bundle, which action must precede empiric antibiotics if possible?',
            option_a: 'CT Scan of the abdomen.',
            option_b: 'Obtaining 2 sets of blood cultures (aerobic and anaerobic).',
            option_c: 'Foley catheter placement.',
            option_d: 'Echocardiogram.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Blood cultures must be drawn before antibiotics to ensure pathogen yield, provided it does not delay antibiotics by >45 minutes.',
            subject_reference: 'Infectious Diseases'
          }
        ]
      },
      {
        id: 'seed-012-phase-2',
        title: 'Hour 6: Pharmacokinetic Optimization',
        description: 'Antibiotics are ordered. Optimizing PK/PD for severe sepsis.',
        patient_snapshot: {
          name: 'Ravi Kumar', age: 62, sex: 'M', ward: 'ICU', bed: '2',
          presenting_complaint: 'Optimizing antimicrobial dosing.',
          pmh: [],
          medications: [
            { drug: 'Meropenem', dose: '1 g', frequency: 'Q8H', route: 'IV' },
            { drug: 'Vancomycin', dose: '15 mg/kg', frequency: 'Q12H', route: 'IV' }
          ],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-012-3', case_id: 'seed-012',
            question_text: 'To optimize the pharmacodynamics of Meropenem in septic shock, which administration strategy is preferred?',
            option_a: 'Rapid IV push over 5 minutes.',
            option_b: 'Extended infusion over 3-4 hours to maximize Time > MIC.',
            option_c: 'Once daily dosing.',
            option_d: 'IM administration.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Beta-lactams are time-dependent. Extended infusions maintain levels above the MIC longer, improving outcomes in critically ill patients.',
            subject_reference: 'Pharmacokinetics'
          },
          {
            id: 'q-012-4', case_id: 'seed-012',
            question_text: 'What is the standard target trough level for Vancomycin in complicated sepsis (e.g., suspected MRSA pneumonia/bacteremia)?',
            option_a: '5-10 mg/L',
            option_b: '10-15 mg/L',
            option_c: '15-20 mg/L',
            option_d: '25-30 mg/L',
            correct_option: 'C',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'For severe infections like sepsis/pneumonia, target troughs are 15-20 mg/L (or AUC/MIC 400-600) to ensure tissue penetration and avoid resistance.',
            subject_reference: 'Pharmacokinetics'
          }
        ]
      },
      {
        id: 'seed-012-phase-3',
        title: 'Day 2: VTE Prophylaxis & Complications',
        description: 'Reviewing supportive ICU care.',
        patient_snapshot: {
          name: 'Ravi Kumar', age: 62, sex: 'M', ward: 'ICU', bed: '2',
          presenting_complaint: 'Day 2 ICU management.',
          pmh: [],
          medications: [
            { drug: 'Enoxaparin', dose: '40 mg', frequency: 'OD', route: 'SC' }
          ],
          allergies: [],
          labs: [
            { name: 'eGFR', value: '25', unit: 'mL/min', reference: '>60', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-012-5', case_id: 'seed-012',
            question_text: 'His eGFR has dropped to 25 mL/min (AKI). How should his VTE prophylaxis be adjusted?',
            option_a: 'Stop VTE prophylaxis.',
            option_b: 'Reduce Enoxaparin to 30 mg OD or switch to Unfractionated Heparin 5000 units SC Q8H.',
            option_c: 'Double the Enoxaparin dose.',
            option_d: 'Switch to Warfarin.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Enoxaparin accumulates in severe renal impairment (eGFR <30). UFH is preferred in AKI as it is hepatically cleared.',
            subject_reference: 'Critical Care'
          },
          {
            id: 'q-012-6', case_id: 'seed-012',
            question_text: 'If he requires intubation, why should Etomidate be used cautiously?',
            option_a: 'It causes severe hypertension.',
            option_b: 'It can cause adrenal suppression, which is detrimental in septic shock.',
            option_c: 'It causes hyperkalemia.',
            option_d: 'It triggers malignant hyperthermia.',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Etomidate inhibits 11-beta-hydroxylase, causing transient adrenal suppression. In sepsis, this can worsen shock.',
            subject_reference: 'Critical Care'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Surviving Sepsis Campaign Guidelines (2021)',
          organization: 'SSC/SCCM',
          text: 'The 1-hour bundle: Measure lactate, get blood cultures, start broad-spectrum antibiotics, administer 30 mL/kg crystalloids, start vasopressors (Norepinephrine first-line) if MAP <65 mmHg.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why Extended Infusion Meropenem?',
          rationale: 'Maximizes Time > MIC, crucial for clearing resistant Gram-negative organisms.'
        }
      ],
      mnemonics: [
        {
          name: 'Sepsis 1-Hour Bundle (L-C-A-F-V)',
          concept: 'Measurable, time-bound interventions',
          bullets: [
            'L — Lactate (re-measure if >2)',
            'C — Cultures (before Abx)',
            'A — Antibiotics (broad-spectrum within 1 hour)',
            'F — Fluids (30mL/kg crystalloids)',
            'V — Vasopressors (Norepinephrine target MAP >65)'
          ]
        }
      ]
    }
  },

  // CASE 13: NEUROLOGY/PSYCHIATRY
  {
    id: 'seed-013',
    title: 'Major Depressive Disorder & Serotonin Syndrome',
    subject_area: 'neurology_psychiatry',
    difficulty: 'medium',
    tags: ['Serotonin Syndrome', 'Tramadol', 'Ondansetron', 'Cyproheptadine', 'Toxicology'],
    phases: [
      {
        id: 'seed-013-phase-1',
        title: 'Hour 1: Toxidrome Recognition',
        description: 'Patient presents with agitation, fever, and clonus.',
        patient_snapshot: {
          name: 'Anjali Verma', age: 28, sex: 'F', ward: 'Emergency', bed: '4',
          presenting_complaint: 'Agitation, diaphoresis, clonus.',
          pmh: ['MDD'],
          medications: [
            { drug: 'Fluoxetine', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Tramadol', dose: '50 mg', frequency: 'TDS', route: 'Oral' },
            { drug: 'Ondansetron', dose: '8 mg', frequency: 'BD PRN', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'Temp', value: '38.5', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
            { name: 'Reflexes', value: 'Hyperreflexia and Clonus', unit: '', reference: 'Normal', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-013-1', case_id: 'seed-013',
            question_text: 'The combination of Fluoxetine, Tramadol, and Ondansetron has precipitated which condition?',
            option_a: 'Neuroleptic Malignant Syndrome',
            option_b: 'Serotonin Syndrome',
            option_c: 'Malignant Hyperthermia',
            option_d: 'Anticholinergic Toxicity',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'All three drugs increase serotonergic activity, causing Serotonin Syndrome characterized by hyperreflexia, clonus, and fever.',
            subject_reference: 'Toxicology'
          },
          {
            id: 'q-013-2', case_id: 'seed-013',
            question_text: 'How does Serotonin Syndrome\'s neuromuscular presentation differ from NMS?',
            option_a: 'SS causes "lead-pipe" rigidity.',
            option_b: 'SS causes hyperreflexia and clonus; NMS causes "lead-pipe" rigidity and bradykinesia.',
            option_c: 'Only SS causes high fever.',
            option_d: 'NMS causes miosis.',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'SS has hyperkinesia (clonus, hyperreflexia), while NMS features severe muscle rigidity without clonus.',
            subject_reference: 'Toxicology'
          }
        ]
      },
      {
        id: 'seed-013-phase-2',
        title: 'Hour 2: Antidote Administration',
        description: 'Symptoms worsening. Considering targeted antidote therapy.',
        patient_snapshot: {
          name: 'Anjali Verma', age: 28, sex: 'F', ward: 'ICU', bed: '3',
          presenting_complaint: 'Severe clonus and hyperthermia.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-013-3', case_id: 'seed-013',
            question_text: 'What is the pharmacological antidote of choice for severe Serotonin Syndrome?',
            option_a: 'Flumazenil',
            option_b: 'Cyproheptadine (5-HT2A antagonist)',
            option_c: 'Dantrolene',
            option_d: 'Naloxone',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Cyproheptadine blocks serotonin receptors (specifically 5-HT2A) reversing the toxicity.',
            subject_reference: 'Toxicology'
          },
          {
            id: 'q-013-4', case_id: 'seed-013',
            question_text: 'Which medication should be used for acute agitation and muscle rigidity control in this patient?',
            option_a: 'Haloperidol',
            option_b: 'IV Lorazepam (Benzodiazepines)',
            option_c: 'Morphine',
            option_d: 'Propofol',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Benzodiazepines are front-line for controlling agitation and muscle hypertonicity in SS.',
            subject_reference: 'Toxicology'
          }
        ]
      },
      {
        id: 'seed-013-phase-3',
        title: 'Day 3: Alternative Analgesia',
        description: 'SS resolved. Patient requires pain control for an unrelated sprain.',
        patient_snapshot: {
          name: 'Anjali Verma', age: 28, sex: 'F', ward: 'General', bed: '4',
          presenting_complaint: 'Recovered, needs analgesia.',
          pmh: [],
          medications: [
            { drug: 'Fluoxetine', dose: '40 mg', frequency: 'OD', route: 'Oral' }
          ],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-013-5', case_id: 'seed-013',
            question_text: 'Which analgesic is safe to use with her Fluoxetine?',
            option_a: 'Tramadol',
            option_b: 'Paracetamol / Ibuprofen',
            option_c: 'Fentanyl',
            option_d: 'Meperidine',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'NSAIDs and Paracetamol do not have serotonergic activity.',
            subject_reference: 'Pharmacotherapeutics'
          },
          {
            id: 'q-013-6', case_id: 'seed-013',
            question_text: 'If switching her off Fluoxetine to an MAOI, how long is the required washout period?',
            option_a: '2 days',
            option_b: '5 weeks',
            option_c: '14 days',
            option_d: 'No washout needed',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Fluoxetine has a very long half-life (including its active metabolite). A 5-week washout is required before starting an MAOI.',
            subject_reference: 'Psychiatry'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Hunter Serotonin Toxicity Criteria',
          organization: 'ACMT',
          text: 'Diagnosis requires serotonergic agent + clonus (spontaneous, inducible, or ocular) OR tremor + hyperreflexia.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why does Tramadol cause SS?',
          rationale: 'Tramadol is an SNRI in addition to a weak mu-opioid agonist, directly increasing synaptic serotonin.'
        }
      ],
      mnemonics: [
        {
          name: 'SS vs NMS (SHIVER vs SLOW)',
          concept: 'Differentiating toxidromes',
          bullets: [
            'S-S: SHIVER (Shivering, Hyperreflexia/Clonus, Instability, Vomiting, Excited, Rapid onset)',
            'N-M-S: SLOW (Slow onset, Lead-pipe rigidity, Obtunded, Waxy rigidity)'
          ]
        }
      ]
    }
  },

  // CASE 14: NEPHROLOGY
  {
    id: 'seed-014',
    title: 'Drug-Induced AKI (The Triple Whammy)',
    subject_area: 'nephrology',
    difficulty: 'hard',
    tags: ['AKI', 'Triple Whammy', 'Hyperkalemia', 'Calcium Gluconate', 'NSAIDs'],
    phases: [
      {
        id: 'seed-014-phase-1',
        title: 'Day 1: AKI Recognition',
        description: 'Patient admitted with oliguria and hyperkalemia.',
        patient_snapshot: {
          name: 'Mohammad Ali', age: 70, sex: 'M', ward: 'Nephrology', bed: '10',
          presenting_complaint: 'Oliguria and rising SCr.',
          pmh: ['Heart Failure', 'Osteoarthritis'],
          medications: [
            { drug: 'Enalapril', dose: '10 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Furosemide', dose: '40 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Ibuprofen', dose: '400 mg', frequency: 'TDS', route: 'Oral' },
            { drug: 'Potassium Gluconate', dose: '20 mEq', frequency: 'OD', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'SCr', value: '3.5', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'K+', value: '6.2', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-014-1', case_id: 'seed-014',
            question_text: 'What is the "Triple Whammy" causing this AKI?',
            option_a: 'Furosemide (volume depletion) + Enalapril (efferent vasodilation) + Ibuprofen (afferent vasoconstriction)',
            option_b: 'Three nephrotoxic antibiotics given together',
            option_c: 'Hypokalemia + Hypocalcemia + Hyponatremia',
            option_d: 'NSAID + Aminoglycoside + Contrast Dye',
            correct_option: 'A',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'The classic Triple Whammy involves a diuretic, an NSAID, and an ACEi/ARB, severely dropping glomerular filtration pressure.',
            subject_reference: 'Nephrology'
          },
          {
            id: 'q-014-2', case_id: 'seed-014',
            question_text: 'Given K+ 6.2 mEq/L, what immediate MAR changes are necessary?',
            option_a: 'Hold Potassium Gluconate and Enalapril immediately.',
            option_b: 'Increase Enalapril to improve renal flow.',
            option_c: 'Discontinue Furosemide only.',
            option_d: 'Start Spironolactone.',
            correct_option: 'A',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'Potassium Gluconate',
            explanation_text: 'ACEi and K+ supplements must be stopped immediately in hyperkalemic AKI.',
            subject_reference: 'Nephrology'
          }
        ]
      },
      {
        id: 'seed-014-phase-2',
        title: 'Hour 2: Hyperkalemia Emergency',
        description: 'ECG shows peaked T-waves. Emergency treatment required.',
        patient_snapshot: {
          name: 'Mohammad Ali', age: 70, sex: 'M', ward: 'Nephrology', bed: '10',
          presenting_complaint: 'Peaked T-waves on ECG.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'K+', value: '6.5', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-014-3', case_id: 'seed-014',
            question_text: 'What is the FIRST IV medication to administer for hyperkalemia with ECG changes?',
            option_a: 'IV Regular Insulin + Dextrose',
            option_b: 'IV Calcium Gluconate (10%) to stabilize the cardiac membrane.',
            option_c: 'Nebulized Salbutamol',
            option_d: 'Oral Sodium Polystyrene Sulfonate',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Calcium directly stabilizes the myocardium, preventing fatal arrhythmias. It does not lower K+ levels.',
            subject_reference: 'Critical Care'
          },
          {
            id: 'q-014-4', case_id: 'seed-014',
            question_text: 'Which medication shifts potassium INTO the cells to temporarily lower serum levels?',
            option_a: 'Calcium Gluconate',
            option_b: 'IV Regular Insulin (+ Dextrose to prevent hypoglycemia).',
            option_c: 'Furosemide',
            option_d: 'Patiromer',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Insulin activates the Na+/K+ ATPase, pushing potassium intracellularly.',
            subject_reference: 'Nephrology'
          }
        ]
      },
      {
        id: 'seed-014-phase-3',
        title: 'Day 5: Discharge Analgesia',
        description: 'AKI resolved. Planning pain management for OA.',
        patient_snapshot: {
          name: 'Mohammad Ali', age: 70, sex: 'M', ward: 'Nephrology', bed: '10',
          presenting_complaint: 'Needs safe OA pain relief.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'SCr', value: '1.4', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-014-5', case_id: 'seed-014',
            question_text: 'Which alternative pain medication should be recommended instead of Ibuprofen?',
            option_a: 'Naproxen',
            option_b: 'Celecoxib',
            option_c: 'Paracetamol (Acetaminophen)',
            option_d: 'Diclofenac',
            correct_option: 'C',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'All NSAIDs (including COX-2s) carry renal risk. Paracetamol is the safest choice.',
            subject_reference: 'Nephrology'
          },
          {
            id: 'q-014-6', case_id: 'seed-014',
            question_text: 'If he requires chronic management of his hyperkalemia at home, which novel K-binder could be used?',
            option_a: 'Kayexalate',
            option_b: 'Patiromer or Sodium Zirconium Cyclosilicate.',
            option_c: 'Lactulose',
            option_d: 'Sevelamer',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Patiromer and SZC are newer, safer chronic K-binders in the GI tract.',
            subject_reference: 'Nephrology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'NICE Guideline NG116 — AKI',
          organization: 'NICE',
          text: 'Triple Whammy (Diuretic + ACEi + NSAID) must be avoided to prevent AKI.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why does Calcium Gluconate not lower K+?',
          rationale: 'It only raises the action potential threshold, restoring the safety margin against arrhythmias.'
        }
      ],
      mnemonics: [
        {
          name: 'Hyperkalemia Tx (C-B-I-G-K-D)',
          concept: 'Stepwise management',
          bullets: [
            'C — Calcium Gluconate (Stabilize)',
            'B — Bicarbonate (Shift)',
            'I — Insulin + Dextrose (Shift)',
            'G — Gas (Salbutamol nebulized) (Shift)',
            'K — Kayexalate/Patiromer (Eliminate)',
            'D — Dialysis (Eliminate)'
          ]
        }
      ]
    }
  },

  // CASE 15: ENDOCRINE / ADRs
  {
    id: 'seed-015',
    title: 'Graves\' Disease & Antithyroid-Induced Agranulocytosis',
    subject_area: 'endocrine',
    difficulty: 'medium',
    tags: ['Agranulocytosis', 'Carbimazole', 'Graves Disease', 'G-CSF'],
    phases: [
      {
        id: 'seed-015-phase-1',
        title: 'Day 1: Agranulocytosis Presentation',
        description: 'Patient presents with severe sore throat and fever on Carbimazole.',
        patient_snapshot: {
          name: 'Sunita Patel', age: 34, sex: 'F', ward: 'Endocrinology', bed: '6',
          presenting_complaint: 'Sore throat and fever.',
          pmh: ['Graves Disease'],
          medications: [
            { drug: 'Carbimazole', dose: '20 mg', frequency: 'TDS', route: 'Oral' },
            { drug: 'Propranolol', dose: '40 mg', frequency: 'TDS', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'Temp', value: '39.0', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
            { name: 'ANC', value: '150', unit: 'cells/mm3', reference: '>1500', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-015-1', case_id: 'seed-015',
            question_text: 'What is the most likely diagnosis?',
            option_a: 'Viral pharyngitis',
            option_b: 'Carbimazole-induced Agranulocytosis',
            option_c: 'Thyroid Storm',
            option_d: 'Propranolol toxicity',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Carbimazole and PTU carry a black box warning for agranulocytosis. Fever + sore throat = stop drug.',
            subject_reference: 'Endocrinology'
          },
          {
            id: 'q-015-2', case_id: 'seed-015',
            question_text: 'What is the most appropriate MAR action regarding Carbimazole?',
            option_a: 'Reduce dose by 50%.',
            option_b: 'Switch to PTU.',
            option_c: 'Stop Carbimazole immediately and permanently.',
            option_d: 'Continue Carbimazole and add Abx.',
            correct_option: 'C',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'Carbimazole',
            explanation_text: 'The offending agent must be stopped. Switching to PTU is contraindicated due to cross-reactivity.',
            subject_reference: 'Endocrinology'
          }
        ]
      },
      {
        id: 'seed-015-phase-2',
        title: 'Day 2: Neutropenia Care',
        description: 'Managing the life-threatening neutropenia.',
        patient_snapshot: {
          name: 'Sunita Patel', age: 34, sex: 'F', ward: 'Isolation', bed: '2',
          presenting_complaint: 'Neutropenia management.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-015-3', case_id: 'seed-015',
            question_text: 'What immediate supportive pharmacological measures are required?',
            option_a: 'Broad-spectrum IV antibiotics and Filgrastim (G-CSF).',
            option_b: 'Radioactive iodine ablation.',
            option_c: 'High-dose aspirin.',
            option_d: 'Oral amoxicillin.',
            correct_option: 'A',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'With an ANC of 150, IV Abx + G-CSF are required to prevent fatal sepsis and accelerate neutrophil recovery.',
            subject_reference: 'Endocrinology'
          },
          {
            id: 'q-015-4', case_id: 'seed-015',
            question_text: 'How should her hyperthyroid symptoms be managed while ATDs are held?',
            option_a: 'Levothyroxine',
            option_b: 'Continue Propranolol for symptom control; use Lugol\'s iodine short-term.',
            option_c: 'Restart Carbimazole at a lower dose.',
            option_d: 'Amiodarone',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Propranolol controls sympathetic symptoms. Iodine temporarily blocks thyroid release.',
            subject_reference: 'Endocrinology'
          }
        ]
      },
      {
        id: 'seed-015-phase-3',
        title: 'Day 10: Definitive Therapy',
        description: 'ANC recovered. Planning definitive hyperthyroid treatment.',
        patient_snapshot: {
          name: 'Sunita Patel', age: 34, sex: 'F', ward: 'Endocrinology', bed: '6',
          presenting_complaint: 'Planning next steps.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'ANC', value: '2500', unit: 'cells/mm3', reference: '>1500', is_abnormal: false }
          ]
        },
        questions: [
          {
            id: 'q-015-5', case_id: 'seed-015',
            question_text: 'Since she can never take ATDs again, what is the definitive treatment?',
            option_a: 'Lifelong Propranolol.',
            option_b: 'Radioactive Iodine (I-131) ablation or Thyroidectomy.',
            option_c: 'Prednisone.',
            option_d: 'Restart PTU.',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Ablation or surgery are the only definitive cures once ATDs are permanently contraindicated.',
            subject_reference: 'Endocrinology'
          },
          {
            id: 'q-015-6', case_id: 'seed-015',
            question_text: 'If she undergoes I-131 ablation, what lifelong medication will she likely require?',
            option_a: 'Carbimazole',
            option_b: 'Levothyroxine (for resulting hypothyroidism)',
            option_c: 'Prednisone',
            option_d: 'Propranolol',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'I-131 destroys the thyroid gland, leading to permanent hypothyroidism requiring lifelong Levothyroxine replacement.',
            subject_reference: 'Endocrinology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ATA Guidelines for Graves Disease',
          organization: 'ATA',
          text: 'Agranulocytosis is a black box warning for ATDs. Cross-reactivity between Methimazole/Carbimazole and PTU is ~50%. Never re-challenge.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why does Propranolol help?',
          rationale: 'Blocks beta-receptors upregulated by thyroid hormones, stopping tachycardia and tremor. Also weakly inhibits peripheral T4 to T3 conversion.'
        }
      ],
      mnemonics: [
        {
          name: 'ATD ADRs (A-T-H-E-N-A)',
          concept: 'Side effects of ATDs',
          bullets: [
            'A — Agranulocytosis',
            'T — Teratogenicity (Methimazole Q1)',
            'H — Hepatotoxicity (PTU)',
            'E — Embryopathy',
            'N — Neutropenia',
            'A — Arthralgia/Rash'
          ]
        }
      ]
    }
  },

  // CASE 16: TOXICOLOGY / OBSTETRICS
  {
    id: 'seed-016',
    title: 'Preeclampsia & Seizure Prophylaxis',
    subject_area: 'clinical_toxicology',
    difficulty: 'medium',
    tags: ['Preeclampsia', 'Magnesium Sulfate', 'Calcium Gluconate', 'Labetalol'],
    phases: [
      {
        id: 'seed-016-phase-1',
        title: 'Hour 2: Toxicity Recognition',
        description: 'Patient on MgSO4 develops respiratory depression and absent reflexes.',
        patient_snapshot: {
          name: 'Aisha Khan', age: 26, sex: 'F', ward: 'Obstetrics', bed: '1',
          presenting_complaint: 'Severe preeclampsia. Now lethargic.',
          pmh: ['Primigravida (36 wks)'],
          medications: [
            { drug: 'Labetalol', dose: '200 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Magnesium Sulfate', dose: '2g/hr', frequency: 'Continuous', route: 'IV' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'BP', value: '170/110', unit: 'mmHg', reference: '<140/90', is_abnormal: true },
            { name: 'DTRs', value: 'Absent', unit: '', reference: '2+', is_abnormal: true },
            { name: 'Respiratory Rate', value: '10', unit: 'bpm', reference: '12-20', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-016-1', case_id: 'seed-016',
            question_text: 'Absent deep tendon reflexes (DTRs) and RR of 10 indicate what?',
            option_a: 'Eclampsia onset',
            option_b: 'Magnesium Sulfate toxicity',
            option_c: 'Normal response',
            option_d: 'HELLP syndrome',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Loss of DTRs is the first sign of Mg toxicity, followed by respiratory depression.',
            subject_reference: 'Obstetrics'
          },
          {
            id: 'q-016-2', case_id: 'seed-016',
            question_text: 'What is the immediate pharmacological antidote?',
            option_a: 'Calcium Gluconate 10% IV',
            option_b: 'Flumazenil IV',
            option_c: 'Naloxone IV',
            option_d: 'Potassium Chloride IV',
            correct_option: 'A',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Calcium directly antagonizes magnesium at the neuromuscular junction.',
            subject_reference: 'Obstetrics'
          }
        ]
      },
      {
        id: 'seed-016-phase-2',
        title: 'Hour 4: Dose Adjustment',
        description: 'Toxicity reversed. Reviewing why MgSO4 accumulated.',
        patient_snapshot: {
          name: 'Aisha Khan', age: 26, sex: 'F', ward: 'Obstetrics', bed: '1',
          presenting_complaint: 'Recovering. Adjusting MgSO4.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'Urine Output', value: '15', unit: 'mL/hr', reference: '>30', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-016-3', case_id: 'seed-016',
            question_text: 'Which parameter is critical to monitor during MgSO4 infusion to prevent toxicity?',
            option_a: 'Urine output (must be >30 mL/hr)',
            option_b: 'Blood glucose',
            option_c: 'Liver enzymes',
            option_d: 'WBC',
            correct_option: 'A',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Mg is excreted exclusively by the kidneys. Oliguria leads to rapid accumulation and toxicity.',
            subject_reference: 'Obstetrics'
          },
          {
            id: 'q-016-4', case_id: 'seed-016',
            question_text: 'What is the ultimate cure for severe preeclampsia?',
            option_a: 'High-dose Labetalol',
            option_b: 'Delivery of the fetus and placenta',
            option_c: 'Magnesium Sulfate',
            option_d: 'Bed rest',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Medications only prevent seizures/strokes; delivery is the only definitive cure.',
            subject_reference: 'Obstetrics'
          }
        ]
      },
      {
        id: 'seed-016-phase-3',
        title: 'Discharge & Contraception',
        description: 'Post-delivery BP management.',
        patient_snapshot: {
          name: 'Aisha Khan', age: 26, sex: 'F', ward: 'Obstetrics', bed: '1',
          presenting_complaint: 'BP still 150/95 post-delivery.',
          pmh: [],
          medications: [
            { drug: 'Labetalol', dose: '200 mg', frequency: 'BD', route: 'Oral' }
          ],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-016-5', case_id: 'seed-016',
            question_text: 'Which antihypertensive class is absolutely CONTRAINDICATED in pregnancy/breastfeeding?',
            option_a: 'Beta-blockers',
            option_b: 'ACE Inhibitors / ARBs',
            option_c: 'Calcium Channel Blockers',
            option_d: 'Methyldopa',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'ACEi/ARBs cause severe fetal renal dysgenesis (oligohydramnios) and are contraindicated.',
            subject_reference: 'Obstetrics'
          },
          {
            id: 'q-016-6', case_id: 'seed-016',
            question_text: 'When can MgSO4 be safely discontinued?',
            option_a: 'Immediately after delivery.',
            option_b: '24 hours post-delivery, as eclampsia risk remains high.',
            option_c: '7 days post-delivery.',
            option_d: 'When BP normalizes.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Seizure risk persists into the postpartum period; prophylaxis continues for 24h.',
            subject_reference: 'Obstetrics'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ACOG Practice Bulletin 222 (2020)',
          organization: 'ACOG',
          text: 'MgSO4 indicated for severe features. Monitor DTRs, RR, and UO hourly. Calcium Gluconate is the antidote.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why MgSO4 over Phenytoin?',
          rationale: 'MgSO4 blocks NMDA receptors and causes cerebral vasodilation, specifically targeting the ischemic pathophysiology of eclampsia.'
        }
      ],
      mnemonics: [
        {
          name: 'Severe Preeclampsia (PREECLAMPSIA)',
          concept: 'Severe features',
          bullets: [
            'P — Proteinuria/Pulmonary edema',
            'R — Renal impairment',
            'E — Epigastric pain',
            'E — Eyes (visual changes)',
            'S — SBP ≥160 or DBP ≥110'
          ]
        }
      ]
    }
  },

  // CASE 17: PEDIATRICS
  {
    id: 'seed-017',
    title: 'Neonatal Sepsis & Dosing Calculations',
    subject_area: 'infectious_diseases',
    difficulty: 'medium',
    tags: ['Neonatal Sepsis', 'Ampicillin', 'Gentamicin', 'Ceftriaxone Contraindication'],
    phases: [
      {
        id: 'seed-017-phase-1',
        title: 'Day 1: Empiric Antibiotics',
        description: 'Baby born at 34 weeks develops sepsis. Starting empiric Abx.',
        patient_snapshot: {
          name: 'Baby Boy Sharma', age: 0.1, sex: 'M', ward: 'NICU', bed: '3',
          presenting_complaint: 'Lethargy, poor feeding, Temp 35.5°C.',
          pmh: ['Prematurity (34 weeks)'],
          medications: [
            { drug: 'Ampicillin', dose: '100 mg/kg', frequency: 'Q12H', route: 'IV' },
            { drug: 'Gentamicin', dose: '4 mg/kg', frequency: 'Q24H', route: 'IV' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'CRP', value: '45', unit: 'mg/L', reference: '<5', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-017-1', case_id: 'seed-017',
            question_text: 'Why is Ampicillin included in the empiric regimen for neonatal sepsis?',
            option_a: 'To cover Pseudomonas.',
            option_b: 'To cover Listeria monocytogenes and Group B Strep.',
            option_c: 'To cover MRSA.',
            option_d: 'To cover Candida.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Ampicillin specifically targets Listeria and GBS, common deadly neonatal pathogens.',
            subject_reference: 'Pediatrics'
          },
          {
            id: 'q-017-2', case_id: 'seed-017',
            question_text: 'Why is Ceftriaxone absolutely contraindicated in neonates?',
            option_a: 'It causes Grey Baby Syndrome.',
            option_b: 'It displaces bilirubin causing Kernicterus and precipitates with IV calcium.',
            option_c: 'It causes tooth discoloration.',
            option_d: 'It does not cross the BBB.',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Ceftriaxone displaces bilirubin from albumin (kernicterus risk) and forms fatal precipitates with calcium-containing IV fluids.',
            subject_reference: 'Pediatrics'
          }
        ]
      },
      {
        id: 'seed-017-phase-2',
        title: 'Day 2: PK/PD Monitoring',
        description: 'Monitoring Gentamicin clearance.',
        patient_snapshot: {
          name: 'Baby Boy Sharma', age: 0.1, sex: 'M', ward: 'NICU', bed: '3',
          presenting_complaint: 'TDM check.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-017-3', case_id: 'seed-017',
            question_text: 'What is the rationale for extended-interval (Q24H or Q36H) dosing of Gentamicin in neonates?',
            option_a: 'Neonates have faster renal clearance.',
            option_b: 'Maximizes concentration-dependent killing (high peak) while allowing the immature kidneys time to clear the trough, minimizing toxicity.',
            option_c: 'Neonates cannot tolerate frequent IV fluids.',
            option_d: 'To prevent Red Man Syndrome.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Neonates have lower GFRs. Extending the interval ensures troughs drop below 1 mcg/mL before the next dose.',
            subject_reference: 'Pharmacokinetics'
          },
          {
            id: 'q-017-4', case_id: 'seed-017',
            question_text: 'Which drug causes "Grey Baby Syndrome" if used inappropriately in neonates?',
            option_a: 'Gentamicin',
            option_b: 'Ampicillin',
            option_c: 'Chloramphenicol',
            option_d: 'Ceftriaxone',
            correct_option: 'C',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Neonates lack UDP-glucuronyl transferase to metabolize Chloramphenicol, causing toxic accumulation and cardiovascular collapse.',
            subject_reference: 'Pediatrics'
          }
        ]
      },
      {
        id: 'seed-017-phase-3',
        title: 'Day 3: Fluid Management',
        description: 'Adjusting maintenance fluids.',
        patient_snapshot: {
          name: 'Baby Boy Sharma', age: 0.1, sex: 'M', ward: 'NICU', bed: '3',
          presenting_complaint: 'Fluid adjustment.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'Blood Glucose', value: '42', unit: 'mg/dL', reference: '45-100', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-017-5', case_id: 'seed-017',
            question_text: 'What is the preferred maintenance IV fluid for a neonate on Day 1-3?',
            option_a: 'Normal Saline 0.9%',
            option_b: 'Dextrose 10% in Water (D10W) to prevent hypoglycemia.',
            option_c: 'Ringer\'s Lactate',
            option_d: 'Dextrose 5%',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Neonates have high glucose requirements and poor glycogen stores. D10W prevents fatal hypoglycemia.',
            subject_reference: 'Pediatrics'
          },
          {
            id: 'q-017-6', case_id: 'seed-017',
            question_text: 'If cultures return negative at 48 hours and the baby is clinically well, what is the action?',
            option_a: 'Complete 7 days of antibiotics.',
            option_b: 'Stop antibiotics immediately.',
            option_c: 'Switch to oral antibiotics.',
            option_d: 'Continue Ampicillin, stop Gentamicin.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Antibiotic stewardship rules dictate stopping empiric Abx at 48h if cultures are negative and symptoms resolved.',
            subject_reference: 'Infectious Diseases'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'NICE Neonatal Infection Guidelines',
          organization: 'NICE',
          text: 'Empiric therapy: Benzylpenicillin/Ampicillin + Gentamicin. Avoid Ceftriaxone. Stop at 48h if negative.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why higher mg/kg doses for Gentamicin in neonates?',
          rationale: 'Neonates have higher total body water (larger Vd). Hydrophilic drugs like Gentamicin require higher doses to reach peak levels.'
        }
      ],
      mnemonics: [
        {
          name: 'Neonatal Sepsis Signs (BABY-SEPSIS)',
          concept: 'Non-specific signs',
          bullets: [
            'B — Breathing (tachypnea/grunting)',
            'A — Activity (lethargy)',
            'B — Blood glucose instability',
            'Y — Yellow (early jaundice)'
          ]
        }
      ]
    }
  },

  // CASE 18: GERIATRICS
  {
    id: 'seed-018',
    title: 'Geriatric Polypharmacy & Beers Criteria Delirium',
    subject_area: 'community_pharmacy',
    difficulty: 'medium',
    tags: ['Beers Criteria', 'Delirium', 'Anticholinergic', 'Deprescribing'],
    phases: [
      {
        id: 'seed-018-phase-1',
        title: 'Day 1: Polypharmacy Review',
        description: 'Elderly patient admitted after a fall, exhibiting acute delirium and dry mouth.',
        patient_snapshot: {
          name: 'Ramesh Patel', age: 82, sex: 'M', ward: 'Geriatrics', bed: '14',
          presenting_complaint: 'Confusion, dry mouth, urinary retention, fall.',
          pmh: ['Neuropathy', 'Insomnia', 'Hypertension'],
          medications: [
            { drug: 'Amitriptyline', dose: '50 mg', frequency: 'ON', route: 'Oral' },
            { drug: 'Diphenhydramine', dose: '25 mg', frequency: 'ON', route: 'Oral' },
            { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: []
        },
        questions: [
          {
            id: 'q-018-1', case_id: 'seed-018',
            question_text: 'Which tool is most appropriate for identifying potentially inappropriate medications (PIMs) in this elderly patient?',
            option_a: 'Child-Pugh Score',
            option_b: 'Beers Criteria',
            option_c: 'HAS-BLED Score',
            option_d: 'Cockcroft-Gault Equation',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'The AGS Beers Criteria identifies medications that should be avoided in older adults due to high risk of adverse events.',
            subject_reference: 'Geriatrics'
          },
          {
            id: 'q-018-2', case_id: 'seed-018',
            question_text: 'Which medications in the MAR are contributing to his high anticholinergic burden (confusion, dry mouth, urinary retention)?',
            option_a: 'Amlodipine only',
            option_b: 'Amitriptyline and Diphenhydramine',
            option_c: 'None of them',
            option_d: 'Amlodipine and Diphenhydramine',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mar_action',
            target_drug: 'Amitriptyline',
            explanation_text: 'Both amitriptyline (TCA) and diphenhydramine (1st-gen antihistamine) are highly anticholinergic and Beers Criteria violators.',
            subject_reference: 'Geriatrics'
          }
        ]
      },
      {
        id: 'seed-018-phase-2',
        title: 'Day 2: Deprescribing',
        description: 'Managing the withdrawal of inappropriate drugs.',
        patient_snapshot: {
          name: 'Ramesh Patel', age: 82, sex: 'M', ward: 'Geriatrics', bed: '14',
          presenting_complaint: 'Agitated.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-018-3', case_id: 'seed-018',
            question_text: 'How should Amitriptyline be discontinued?',
            option_a: 'Stop abruptly.',
            option_b: 'Taper gradually to prevent cholinergic rebound and withdrawal symptoms.',
            option_c: 'Increase dose.',
            option_d: 'Switch to Doxepin.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'TCAs must be tapered to prevent withdrawal (nausea, headache, sleep disturbance).',
            subject_reference: 'Geriatrics'
          },
          {
            id: 'q-018-4', case_id: 'seed-018',
            question_text: 'If a pharmacological sleep aid is absolutely required, which is safest in the elderly?',
            option_a: 'Diazepam',
            option_b: 'Melatonin',
            option_c: 'Zolpidem',
            option_d: 'Flurazepam',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Melatonin avoids the fall risk, cognitive impairment, and dependency associated with Z-drugs and Benzodiazepines.',
            subject_reference: 'Geriatrics'
          }
        ]
      },
      {
        id: 'seed-018-phase-3',
        title: 'Day 3: Delirium Management',
        description: 'Non-pharmacological management of acute delirium.',
        patient_snapshot: {
          name: 'Ramesh Patel', age: 82, sex: 'M', ward: 'Geriatrics', bed: '14',
          presenting_complaint: 'Delirium clearing.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-018-5', case_id: 'seed-018',
            question_text: 'What is the first-line intervention for delirium in hospitalized older adults?',
            option_a: 'Haloperidol IV',
            option_b: 'Lorazepam IV',
            option_c: 'Non-pharmacological: hydration, orientation, mobilization, and removing offending drugs.',
            option_d: 'Physical restraints',
            correct_option: 'C',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Antipsychotics/Benzos worsen outcomes. The HELP protocol (non-pharm) is first-line.',
            subject_reference: 'Geriatrics'
          },
          {
            id: 'q-018-6', case_id: 'seed-018',
            question_text: 'What is the antidote for severe central anticholinergic toxicity?',
            option_a: 'Naloxone',
            option_b: 'Physostigmine',
            option_c: 'Flumazenil',
            option_d: 'Atropine',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Physostigmine is a reversible cholinesterase inhibitor that crosses the BBB, reversing central anticholinergic delirium.',
            subject_reference: 'Toxicology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AGS Beers Criteria (2023)',
          organization: 'AGS',
          text: 'Avoid TCAs, 1st-gen antihistamines, and short-acting benzos due to severe anticholinergic and fall risks.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why are elderly vulnerable to anticholinergics?',
          rationale: 'Decreased cholinergic neurons, increased BBB permeability, and reduced hepatic/renal clearance.'
        }
      ],
      mnemonics: [
        {
          name: 'Anticholinergic Toxidrome',
          concept: 'Symptoms',
          bullets: [
            'Hot as a hare',
            'Dry as a bone',
            'Blind as a bat',
            'Red as a beet',
            'Mad as a hatter'
          ]
        }
      ]
    }
  },

  // CASE 19: INFECTIOUS DISEASES / HIV
  {
    id: 'seed-019',
    title: 'HIV / AIDS & Pneumocystis Pneumonia (PJP)',
    subject_area: 'infectious_diseases',
    difficulty: 'hard',
    tags: ['HIV', 'PJP', 'Cotrimoxazole', 'Corticosteroids', 'IRIS'],
    phases: [
      {
        id: 'seed-019-phase-1',
        title: 'Day 1: Severe PJP Treatment',
        description: 'HIV patient with severe PJP and hypoxia. PaO2 60 mmHg.',
        patient_snapshot: {
          name: 'John Doe', age: 40, sex: 'M', ward: 'Infectious Diseases', bed: '2',
          presenting_complaint: 'Progressive exertional dyspnea, dry cough, fever.',
          pmh: ['Newly diagnosed HIV (CD4 45)'],
          medications: [
            { drug: 'Trimethoprim-Sulfamethoxazole', dose: '15 mg/kg/day', frequency: 'Q6H', route: 'IV' }
          ],
          allergies: ['None'],
          labs: [
            { name: 'PaO2', value: '60', unit: 'mmHg', reference: '75-100', is_abnormal: true },
            { name: 'CD4 Count', value: '45', unit: 'cells/mm3', reference: '500-1500', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-019-1', case_id: 'seed-019',
            question_text: 'The patient has PJP with a PaO2 of 60 mmHg. What adjunctive therapy must be added immediately?',
            option_a: 'Azithromycin',
            option_b: 'Corticosteroids (e.g., Prednisone 40mg BD)',
            option_c: 'Antiretroviral therapy (ART) immediately',
            option_d: 'Fluconazole',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Adjunctive corticosteroids are mandatory in severe PJP (PaO2 < 70 mmHg) to prevent worsening hypoxia from the inflammatory response to dying organisms.',
            subject_reference: 'Infectious Diseases'
          },
          {
            id: 'q-019-2', case_id: 'seed-019',
            question_text: 'When should Antiretroviral Therapy (ART) be initiated?',
            option_a: 'Immediately alongside TMP-SMX.',
            option_b: 'Within 2 weeks of starting PJP treatment.',
            option_c: 'After 6 months.',
            option_d: 'Only when CD4 > 200.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'ART is started within 2 weeks of OI treatment to balance immune recovery with the risk of IRIS.',
            subject_reference: 'Infectious Diseases'
          }
        ]
      },
      {
        id: 'seed-019-phase-2',
        title: 'Day 5: TMP-SMX ADRs',
        description: 'Monitoring for high-dose TMP-SMX toxicities.',
        patient_snapshot: {
          name: 'John Doe', age: 40, sex: 'M', ward: 'Infectious Diseases', bed: '2',
          presenting_complaint: 'Monitoring labs.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'K+', value: '5.8', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-019-3', case_id: 'seed-019',
            question_text: 'His potassium is 5.8 mEq/L. Why does high-dose TMP-SMX cause hyperkalemia?',
            option_a: 'Sulfamethoxazole causes hemolysis.',
            option_b: 'Trimethoprim acts like amiloride, blocking the ENaC channel in the distal nephron, reducing K+ excretion.',
            option_c: 'It causes acute liver failure.',
            option_d: 'It releases K+ from the lungs.',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'TMP is a potassium-sparing diuretic at high doses, leading to hyperkalemia.',
            subject_reference: 'Pharmacotherapeutics'
          },
          {
            id: 'q-019-4', case_id: 'seed-019',
            question_text: 'Why are HIV patients more prone to Sulfamethoxazole hypersensitivity (rash/fever)?',
            option_a: 'High CD4 count.',
            option_b: 'Altered metabolism (CYP2C9 shunt) and glutathione depletion causing toxic hydroxylamine accumulation.',
            option_c: 'Concomitant steroid use.',
            option_d: 'Viral mutations.',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'HIV patients have depleted glutathione and altered acetylation, leading to toxic sulfonamide metabolites.',
            subject_reference: 'Pharmacotherapeutics'
          }
        ]
      },
      {
        id: 'seed-019-phase-3',
        title: 'Day 21: Discharge Prophylaxis',
        description: 'PJP resolved. Arranging long-term prophylaxis.',
        patient_snapshot: {
          name: 'John Doe', age: 40, sex: 'M', ward: 'Infectious Diseases', bed: '2',
          presenting_complaint: 'Ready for discharge.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-019-5', case_id: 'seed-019',
            question_text: 'When can secondary PJP prophylaxis (TMP-SMX 1 DS tab OD) be safely discontinued?',
            option_a: 'After 1 year.',
            option_b: 'When CD4 count remains >200 cells/μL for at least 3 months on ART.',
            option_c: 'It is lifelong.',
            option_d: 'When viral load is undetectable for 1 week.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Prophylaxis can stop once immune reconstitution (CD4 >200) is sustained for 3 months.',
            subject_reference: 'Infectious Diseases'
          },
          {
            id: 'q-019-6', case_id: 'seed-019',
            question_text: 'What other prophylaxis is indicated for him since his CD4 is 45?',
            option_a: 'Azithromycin for MAC (if not on ART) and Fluconazole.',
            option_b: 'No other prophylaxis needed.',
            option_c: 'Acyclovir.',
            option_d: 'Rifampin.',
            correct_option: 'A',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'CD4 <50 warrants MAC prophylaxis (Azithromycin) if ART is delayed, and often fungal prophylaxis depending on guidelines.',
            subject_reference: 'Infectious Diseases'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'NIH/CDC OI Guidelines (2020)',
          organization: 'NIH/CDC',
          text: 'Steroids mandatory for PJP if PaO2 <70 mmHg or A-a gradient ≥35. ART start within 2 weeks.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'What is IRIS?',
          rationale: 'Immune Reconstitution Inflammatory Syndrome: Exaggerated inflammatory response to dead/dying organisms upon rapidly starting ART.'
        }
      ],
      mnemonics: [
        {
          name: 'CD4 Thresholds',
          concept: 'When to start prophylaxis',
          bullets: [
            '<200: PJP (TMP-SMX)',
            '<100: Toxoplasma (TMP-SMX)',
            '<50: MAC (Azithromycin)'
          ]
        }
      ]
    }
  },

  // CASE 20: CARDIOVASCULAR
  {
    id: 'seed-020',
    title: 'Acute STEMI & Secondary Prevention',
    subject_area: 'cardiovascular',
    difficulty: 'hard',
    tags: ['STEMI', 'DAPT', 'Ticagrelor', 'Secondary Prevention'],
    phases: [
      {
        id: 'seed-020-phase-1',
        title: 'Hour 1: ER Presentation',
        description: 'Patient presents with inferior STEMI. Needs DAPT loading.',
        patient_snapshot: {
          name: 'Vikram Singh', age: 55, sex: 'M', ward: 'ER', bed: '1',
          presenting_complaint: 'Crushing chest pain. ST-elevation II, III, aVF.',
          pmh: ['GERD', 'Hypertension'],
          medications: [
            { drug: 'Omeprazole', dose: '40 mg', frequency: 'OD', route: 'Oral' }
          ],
          allergies: ['None'],
          labs: []
        },
        questions: [
          {
            id: 'q-020-1', case_id: 'seed-020',
            question_text: 'Which DAPT loading dose is appropriate for Primary PCI?',
            option_a: 'Aspirin 300mg + Ticagrelor 180mg (or Clopidogrel 600mg).',
            option_b: 'Aspirin 75mg + Clopidogrel 75mg.',
            option_c: 'Warfarin + Aspirin.',
            option_d: 'Heparin + Alteplase.',
            correct_option: 'A',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'High-dose loading of Aspirin and a P2Y12 inhibitor is required immediately prior to PCI to prevent stent thrombosis.',
            subject_reference: 'Cardiology'
          },
          {
            id: 'q-020-2', case_id: 'seed-020',
            question_text: 'If Clopidogrel is chosen, what major drug interaction exists with his home meds?',
            option_a: 'Amlodipine inhibits Clopidogrel.',
            option_b: 'Omeprazole strongly inhibits CYP2C19, preventing conversion of Clopidogrel to its active metabolite.',
            option_c: 'No interaction.',
            option_d: 'Omeprazole increases bleeding.',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'Clopidogrel is a prodrug requiring CYP2C19. Omeprazole blocks this, causing therapeutic failure and stent thrombosis.',
            subject_reference: 'Pharmacotherapeutics'
          }
        ]
      },
      {
        id: 'seed-020-phase-2',
        title: 'Day 2: Post-PCI Care',
        description: 'Optimizing medications post-stenting.',
        patient_snapshot: {
          name: 'Vikram Singh', age: 55, sex: 'M', ward: 'CCU', bed: '8',
          presenting_complaint: 'Recovering post-PCI.',
          pmh: [],
          medications: [
            { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Clopidogrel', dose: '75 mg', frequency: 'OD', route: 'Oral' }
          ],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-020-3', case_id: 'seed-020',
            question_text: 'Which PPI should be substituted for Omeprazole to safely protect his stomach?',
            option_a: 'Esomeprazole',
            option_b: 'Pantoprazole (least CYP2C19 inhibition).',
            option_c: 'Lansoprazole',
            option_d: 'Cimetidine',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Pantoprazole does not significantly inhibit CYP2C19, making it the PPI of choice with Clopidogrel.',
            subject_reference: 'Pharmacotherapeutics'
          },
          {
            id: 'q-020-4', case_id: 'seed-020',
            question_text: 'Why is routine high-flow oxygen no longer recommended for normoxic STEMI patients?',
            option_a: 'It wastes hospital resources.',
            option_b: 'Hyperoxia causes coronary vasoconstriction and increases free radical damage, worsening the infarct size.',
            option_c: 'It causes COPD.',
            option_d: 'It suppresses breathing.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'The AVOID trial showed routine oxygen in non-hypoxic patients actually increases myocardial injury.',
            subject_reference: 'Cardiology'
          }
        ]
      },
      {
        id: 'seed-020-phase-3',
        title: 'Day 4: Discharge GDMT',
        description: 'Ensuring all pillars of secondary prevention are prescribed.',
        patient_snapshot: {
          name: 'Vikram Singh', age: 55, sex: 'M', ward: 'General', bed: '12',
          presenting_complaint: 'Ready for discharge.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-020-5', case_id: 'seed-020',
            question_text: 'Which class of medications must be added to prevent adverse ventricular remodeling post-MI?',
            option_a: 'ACE Inhibitor (e.g., Ramipril) or ARB.',
            option_b: 'Calcium Channel Blocker.',
            option_c: 'Digoxin.',
            option_d: 'Nitrates.',
            correct_option: 'A',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'ACE inhibitors prevent the heart from dilating and failing after an infarct (remodeling).',
            subject_reference: 'Cardiology'
          },
          {
            id: 'q-020-6', case_id: 'seed-020',
            question_text: 'What is the target LDL cholesterol for this patient post-STEMI on high-intensity statin therapy?',
            option_a: '< 100 mg/dL',
            option_b: '< 70 mg/dL or < 55 mg/dL per newest ESC guidelines.',
            option_c: '< 130 mg/dL',
            option_d: 'Statins aren\'t needed if cholesterol is normal.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Very strict LDL control (<55 mg/dL) is mandated for secondary prevention post-ACS.',
            subject_reference: 'Cardiology'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ESC Guidelines for STEMI (2017/2023)',
          organization: 'ESC',
          text: 'Primary PCI <120 mins. DAPT loading required. Secondary prevention: DAPT, Beta-blocker, High-intensity Statin, ACEi.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why chew aspirin?',
          rationale: 'Buccal absorption bypasses GI tract for immediate platelet inhibition (5 mins vs 60 mins).'
        }
      ],
      mnemonics: [
        {
          name: 'Post-MI Secondary Prevention (B-A-S-E-S)',
          concept: 'Discharge meds',
          bullets: [
            'B — Beta-blocker',
            'A — Antiplatelet (Dual)',
            'S — Statin (High-Intensity)',
            'E — ACE inhibitor',
            'S — Spironolactone (if EF <40%)'
          ]
        }
      ]
    }
  },
  
  // CASE 21: ENDOCRINE — DKA
  {
    id: 'seed-021',
    title: 'Diabetic Ketoacidosis (DKA) Management',
    subject_area: 'endocrine',
    difficulty: 'hard',
    tags: ['DKA', 'Insulin Infusion', 'Hypokalemia', 'Anion Gap'],
    phases: [
      {
        id: 'seed-021-phase-1',
        title: 'Hour 1: DKA Resuscitation',
        description: 'Ravi is in DKA. Check the potassium threshold before insulin and plan fluid transitions.',
        patient_snapshot: {
          name: 'Ravi Shankar', age: 32, sex: 'M', ward: 'MICU', bed: 'MICU-05',
          presenting_complaint: 'DKA with Kussmaul breathing.',
          pmh: ['Type 1 DM'],
          medications: [
            { drug: 'IV NS 0.9%', dose: '1 L/hr', frequency: 'First 2 hours', route: 'IV' },
            { drug: 'IV Regular Insulin', dose: '0.1 units/kg/hr', frequency: 'Continuous', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Blood Glucose', value: '480', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
            { name: 'K+', value: '5.5', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
            { name: 'pH', value: '7.15', unit: '', reference: '7.35-7.45', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-021-1', case_id: 'seed-021',
            question_text: 'What K+ threshold must be met before starting insulin?',
            option_a: 'K+ > 2.5',
            option_b: 'K+ > 3.3 mEq/L — hold insulin and replete K+ first if below.',
            option_c: 'K+ > 5.0',
            option_d: 'K+ is irrelevant.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mar_action',
            target_drug: 'IV Regular Insulin',
            explanation_text: 'Insulin drives K+ intracellularly. If K+ is <3.3, starting insulin will cause fatal hypokalemia.',
            subject_reference: 'Pharmacotherapeutics - Endocrine',
          },
          {
            id: 'q-021-2', case_id: 'seed-021',
            question_text: 'Why is Routine Sodium Bicarbonate NOT recommended for his pH of 7.15?',
            option_a: 'It is too expensive.',
            option_b: 'Bicarbonate is only indicated for pH < 6.9; otherwise it worsens hypokalemia and causes paradoxical CNS acidosis.',
            option_c: 'It causes hypoglycemia.',
            option_d: 'It destroys insulin.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'Bicarb shifts K+ into cells and converts to CO2, which crosses the BBB and worsens brain acidosis. Use only in severe life-threatening acidemia.',
            subject_reference: 'Pharmacotherapeutics - Endocrine'
          }
        ]
      },
      {
        id: 'seed-021-phase-2',
        title: 'Hour 6: Fluid Transition',
        description: 'Blood glucose drops to 220 mg/dL, but anion gap is still 18.',
        patient_snapshot: {
          name: 'Ravi Shankar', age: 32, sex: 'M', ward: 'MICU', bed: 'MICU-05',
          presenting_complaint: 'Glucose resolving, still acidotic.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: [
            { name: 'Blood Glucose', value: '220', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
            { name: 'Anion Gap', value: '18', unit: 'mEq/L', reference: '8-12', is_abnormal: true }
          ]
        },
        questions: [
          {
            id: 'q-021-3', case_id: 'seed-021',
            question_text: 'What fluid change is required now that glucose is ~200 mg/dL?',
            option_a: 'Stop all IV fluids.',
            option_b: 'Switch to Dextrose 5% in 0.45% NaCl (D5 half-NS) to prevent hypoglycemia while keeping insulin running.',
            option_c: 'Switch to RL.',
            option_d: 'Oral glucose.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Glucose corrects faster than ketosis. You must add dextrose to allow continuous insulin infusion to close the anion gap.',
            subject_reference: 'Pharmacotherapeutics - Endocrine',
          },
          {
            id: 'q-021-4', case_id: 'seed-021',
            question_text: 'What happens if you stop the insulin infusion right now because glucose is normal?',
            option_a: 'Patient is cured.',
            option_b: 'Rebound ketoacidosis, because the anion gap is still open (ketones are still present).',
            option_c: 'Hypoglycemia.',
            option_d: 'Hypokalemia.',
            correct_option: 'B',
            pci_duty_category: 'evaluate',
            question_type: 'mcq',
            explanation_text: 'DKA resolution is defined by ketone clearance (closed anion gap), not just euglycemia.',
            subject_reference: 'Endocrinology'
          }
        ]
      },
      {
        id: 'seed-021-phase-3',
        title: 'Day 2: Transition to SC Insulin',
        description: 'Anion gap is closed (10). Ready for subcutaneous insulin.',
        patient_snapshot: {
          name: 'Ravi Shankar', age: 32, sex: 'M', ward: 'MICU', bed: 'MICU-05',
          presenting_complaint: 'Ready to eat.',
          pmh: [],
          medications: [],
          allergies: [],
          labs: []
        },
        questions: [
          {
            id: 'q-021-5', case_id: 'seed-021',
            question_text: 'What criteria must be met before transitioning from IV to SC insulin?',
            option_a: 'Glucose < 200 alone.',
            option_b: 'pH > 7.30, HCO3- > 18, Anion Gap < 12, AND patient is able to eat.',
            option_c: 'Nausea resolved.',
            option_d: 'After 24h regardless.',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'These indicate true resolution of ketoacidosis.',
            subject_reference: 'Pharmacotherapeutics - Endocrine',
          },
          {
            id: 'q-021-6', case_id: 'seed-021',
            question_text: 'How should the IV to SC transition be physically managed?',
            option_a: 'Stop IV immediately, give SC.',
            option_b: 'Overlap the SC basal insulin dose with the IV infusion for 1-2 hours before stopping the IV pump.',
            option_c: 'Wait 4 hours after stopping IV.',
            option_d: 'Give double SC dose.',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'IV insulin has a 5-minute half-life. Without a 1-2 hour overlap with SC insulin, the patient will experience an insulin gap and relapse.',
            subject_reference: 'Pharmacotherapeutics'
          }
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ADA Standards of Care — DKA (2023)',
          organization: 'ADA',
          text: 'Fluid first, check K+, then insulin. Switch to D5NS when BG <200. Never stop basal insulin if already on it.'
        }
      ],
      calculations: [],
      reasoning: [
        {
          question_text: 'Why does DKA cause pseudohyponatremia?',
          rationale: 'Hyperglycemia pulls water from cells into blood, diluting serum sodium. Corrected Na = Measured Na + 1.6 * (Glucose-100)/100.'
        }
      ],
      mnemonics: [
        {
          name: 'DKA Algorithm (3-I-F-B)',
          concept: 'DKA Sequence',
          bullets: [
            '3 — 3 Criteria (High BG, Low pH, Ketones)',
            'I — IV access + Check K+',
            'F — Fluids first (NS)',
            'B — Bicarbonate only if pH <6.9'
          ]
        }
      ]
    }
  }
];
        },        
  // CASE 22: ONCOLOGY/HEMATOLOGY — HIT
  {
    id: 'seed-022',
    title: 'Heparin-Induced Thrombocytopenia (HIT) Management',
    subject_area: 'oncology_hematology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Savita Gupta',
      age: 60,
      sex: 'F',
      ward: 'Orthopedics / Hematology',
      bed: '15',
      presenting_complaint: 'Post total knee replacement (Day 7). Platelet count has dropped from 250 to 85 x10^3/uL. New swelling in left calf (DVT confirmed on Doppler). Has been on prophylactic Enoxaparin since surgery.',
      pmh: ['Osteoarthritis', 'Hypertension'],
      medications: [
        { drug: 'Enoxaparin', dose: '40 mg', frequency: 'OD', route: 'SC' },
        { drug: 'Paracetamol', dose: '650 mg', frequency: 'TDS', route: 'Oral' },
        { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Platelets (Day 1)', value: '250', unit: 'x10^3/uL', reference: '150-450', is_abnormal: false },
        { name: 'Platelets (Day 7)', value: '85', unit: 'x10^3/uL', reference: '150-450', is_abnormal: true },
        { name: 'Anti-PF4/Heparin Antibody', value: 'Positive', unit: '', reference: 'Negative', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-022-1', case_id: 'seed-022',
        question_text: 'What is the 4Ts score assessment for this patient, and what does a >50% platelet drop on Day 5-10 of heparin with new thrombosis suggest?',
        option_a: 'Drug-induced immune thrombocytopenia from Paracetamol',
        option_b: 'Heparin-Induced Thrombocytopenia Type II (HIT) — an immune-mediated, prothrombotic condition requiring immediate cessation of ALL heparin products',
        option_c: 'Normal post-surgical platelet consumption',
        option_d: 'Disseminated intravascular coagulation (DIC)',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'HIT Type II is characterized by a >50% platelet drop, timing 5-10 days after heparin initiation, and paradoxical thrombosis (DVT/PE). It is antibody-mediated (anti-PF4/heparin) and is treated by stopping ALL heparin products and starting a non-heparin anticoagulant.',
        subject_reference: 'Pharmacotherapeutics - Hematology',
      },
      {
        id: 'q-022-2', case_id: 'seed-022',
        question_text: 'What is the appropriate alternative anticoagulant for HIT, and why is Warfarin contraindicated initially?',
        option_a: 'Start Warfarin immediately as a replacement',
        option_b: 'Start Argatroban (direct thrombin inhibitor) infusion. Warfarin is contraindicated until platelets recover (>150 x10^3/uL) because Warfarin depletes Protein C, causing venous limb gangrene in the hypercoagulable HIT state.',
        option_c: 'Switch to a different LMWH brand',
        option_d: 'Give platelet transfusions',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Argatroban is a direct thrombin inhibitor that does not cross-react with HIT antibodies. Warfarin depletes Protein C rapidly (short half-life), causing a transient hypercoagulable state that, in HIT, can precipitate catastrophic venous limb gangrene. Warfarin may only be started once platelets have recovered.',
        subject_reference: 'Pharmacotherapeutics - Hematology',
      },
      {
        id: 'q-022-3', case_id: 'seed-022',
        question_text: 'Which of the following is critical to include in the patient\'s permanent medical record after a HIT diagnosis?',
        option_a: 'Document allergy to Aspirin',
        option_b: 'Document allergy/sensitivity to ALL heparin products (UFH and LMWH) with a description of HIT antibody positivity to prevent future re-exposure',
        option_c: 'No documentation needed once platelets recover',
        option_d: 'Document allergy to Argatroban',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'HIT antibodies can persist for months. Re-exposure to any heparin product (UFH, LMWH, or heparin flushes) can trigger a devastating recurrence. The pharmacist must ensure the allergy is documented in the electronic health record permanently.',
        subject_reference: 'Pharmacotherapeutics - Patient Safety',
      },
    ],
    phases: [
      {
        id: 'seed-022-phase-1',
        title: 'Day 7: HIT Diagnosis',
        description: 'Savita develops thrombocytopenia and DVT while on enoxaparin.',
        patient_snapshot: {
          name: 'Savita Gupta', age: 60, sex: 'F', ward: 'Orthopedics', bed: '15',
          presenting_complaint: 'Platelet drop + new DVT on enoxaparin Day 7.',
          pmh: ['Osteoarthritis'],
          medications: [
            { drug: 'Enoxaparin', dose: '40 mg', frequency: 'OD', route: 'SC' },
          ],
          allergies: [],
          labs: [
            { name: 'Platelets', value: '85', unit: 'x10^3/uL', reference: '150-450', is_abnormal: true },
            { name: 'Anti-PF4/Heparin Ab', value: 'Positive', unit: '', reference: 'Negative', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-022-1', case_id: 'seed-022',
            question_text: '>50% platelet drop Day 5-10 with new thrombosis on heparin — diagnosis?',
            option_a: 'Paracetamol-induced thrombocytopenia',
            option_b: 'HIT Type II — stop ALL heparin products',
            option_c: 'Normal post-surgical consumption',
            option_d: 'DIC',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'HIT II: immune-mediated prothrombotic condition.',
            subject_reference: 'Pharmacotherapeutics - Hematology',
          },
          {
            id: 'q-022-2', case_id: 'seed-022',
            question_text: 'Alternative anticoagulant and why no Warfarin?',
            option_a: 'Start Warfarin immediately',
            option_b: 'Argatroban infusion; Warfarin depletes Protein C causing limb gangrene',
            option_c: 'Different LMWH brand',
            option_d: 'Platelet transfusions',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Warfarin contraindicated until plts > 150k due to Protein C depletion.',
            subject_reference: 'Pharmacotherapeutics - Hematology',
          },
          {
            id: 'q-022-3', case_id: 'seed-022',
            question_text: 'What must be documented permanently?',
            option_a: 'Aspirin allergy',
            option_b: 'Allergy to ALL heparin products (UFH + LMWH)',
            option_c: 'Nothing once platelets recover',
            option_d: 'Argatroban allergy',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Prevent future re-exposure to heparin.',
            subject_reference: 'Pharmacotherapeutics - Patient Safety',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ASH Guidelines for Heparin-Induced Thrombocytopenia (HIT) — Diagnosis and Treatment (2018)',
          organization: 'ASH/ACCP',
          text: 'HIT DIAGNOSIS — The 4T Score (PRETEST PROBABILITY): Thrombocytopenia (2=fall >50%, nadir ≥20k; 1=fall 30-50%, nadir 10-19k; 0=fall <30%), Timing of platelet fall (2=days 5-10 or ≤1 day if prior heparin <30d; 1=days 5-10 unclear or >10d; 0=<4 days without prior heparin), Thrombosis or other sequelae (2=proven new thrombosis/skin necrosis; 1=progressive thrombosis/suspected; 0=none), Other causes for thrombocytopenia (2=none evident; 1=possible; 0=definite). Score ≥6 = HIGH probability HIT; 4-5 = INTERMEDIATE; 0-3 = LOW (HIT unlikely). HIT MANAGEMENT: (1) STOP ALL HEPARIN including flushes, heparin-coated catheters, and LMWH; (2) Start NON-HEPARIN anticoagulant IMMEDIATELY (even if no thrombosis present — HIT carries 30-50% thrombosis risk within 30 days without anticoagulation); (3) DO NOT give platelets (worsens thrombosis); (4) AVOID Warfarin until platelet recovery >150k (risk of warfarin-induced venous limb gangrene in HIT via Protein C deficiency).'
        },
        {
          title: 'Non-Heparin Anticoagulants for HIT — Selection and Dosing',
          organization: 'ACCP 2012 Chest Guidelines',
          text: 'ALTERNATIVE ANTICOAGULANTS FOR HIT: (1) ARGATROBAN: Direct thrombin inhibitor. Preferred if RENAL IMPAIRMENT (hepatically metabolized). Dose: 2 mcg/kg/min IV continuous infusion; reduce to 0.5-1.2 mcg/kg/min in hepatic impairment. Monitor: APTT 1.5-3× baseline (not too high — increases bleeding). (2) BIVALIRUDIN: Direct thrombin inhibitor. Short half-life (25 min). Dose: 0.15-0.2 mg/kg/h IV. Dose reduce in renal impairment. (3) FONDAPARINUX: Factor Xa inhibitor. Once-daily SC (Renally eliminated — AVOID if CrCl <30 mL/min). Not FDA-approved for HIT but widely used. (4) DANAPAROID: Heparinoid. Not available in all countries. After platelet recovery (>150k for ≥2 consecutive days): Can transition to Warfarin OR continue DOAC (Rivaroxaban, Apixaban — emerging evidence). PLATELET RECOVERY timeline: typically 5-14 days after heparin cessation. Heparin must be PERMANENTLY avoided — reexposure can trigger rapid-onset HIT.'
        },
        {
          title: 'Pathophysiology-Based Understanding of HIT — Antibody Detection',
          organization: 'Clinical Hematology Consensus',
          text: 'HIT MECHANISM: Heparin binds to Platelet Factor 4 (PF4), a protein released by activated platelets. This heparin-PF4 complex forms a neoantigen that triggers IgG antibody formation (IMMUNOLOGICAL HIT = Type II). These HIT antibodies (IgG anti-PF4/heparin) bind to the heparin-PF4 complex on platelet surfaces → activate platelets via FcγRIIa receptors → massive platelet aggregation and activation → (1) Thrombocytopenia (platelets consumed), (2) THROMBOSIS (not bleeding, paradoxically — activated platelets form arterial/venous thrombi). This explains the paradox of HIT: platelet count FALLS but CLOTTING (not bleeding) occurs. LABORATORY TESTING: (1) Immunoassay (ELISA for anti-PF4 antibodies): High sensitivity 97%, lower specificity 74% (many false positives). (2) Serotonin Release Assay (SRA): Gold standard, sensitivity 88-100%, specificity >95%. Do ELISA first; confirm positives with SRA. Start treatment based on clinical suspicion (4T score ≥4) while awaiting results.'
        }
      ],
      calculations: [
        {
          name: '4T Score Calculation for HIT Probability Assessment',
          formula: '4T Score = Thrombocytopenia (0-2) + Timing (0-2) + Thrombosis (0-2) + oTher causes (0-2). Max = 8. ≥6 = High probability HIT',
          explanation: 'Clinical example: Patient on UFH for 7 days. Platelets drop from 180k → 78k (fall >50% = 2 pts). Timing: Day 7 (within 5-10 days = 2 pts). New DVT discovered (2 pts). No obvious alternative cause (2 pts). Total 4T = 8 (HIGH PROBABILITY). Action: Stop all heparin immediately. Start Argatroban (or Fondaparinux if hepatic impairment). Order ELISA for HIT antibodies and SRA confirmatory test. DO NOT transfuse platelets (promotes thrombosis).'
        },
        {
          name: 'Argatroban Infusion Rate Calculation',
          formula: 'Start at 2 mcg/kg/min IV. Adjust to target APTT 1.5-3× baseline (typically 60-90 sec). Hepatic impairment: start at 0.5 mcg/kg/min',
          explanation: 'For 70 kg patient: Argatroban starting dose = 2 mcg/kg/min × 70 = 140 mcg/min = 8.4 mg/h. Standard preparation: Argatroban 250 mg in 250 mL D5W = 1 mg/mL. Rate = 8.4 mL/h. Check APTT 2 hours after starting or after each dose adjustment. If APTT <45 sec (sub-therapeutic): increase by 0.5 mcg/kg/min. If APTT >100 sec: reduce rate by 50% or hold for 2h. Note: Argatroban interferes with PT/INR measurement — when transitioning to Warfarin, target INR >4 on Argatroban (which gives a true Warfarin-equivalent INR of 2-3).'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does HIT cause THROMBOSIS rather than bleeding, despite low platelet count?',
          rationale: 'In HIT, the HIT-IgG antibody-PF4-heparin complex triggers: (1) PLATELET HYPERACTIVATION via FcγRIIa (CD32a) receptors — activated platelets release procoagulant microparticles, serotonin, and more PF4. This creates a prothrombotic storm; (2) Monocyte and endothelial cell activation — generates tissue factor (TF), initiating the extrinsic coagulation cascade; (3) Thrombin generation exceeds thrombin inhibition capacity — fibrin clots form despite low platelet count. The platelet count falls not from bleeding but from CONSUMPTION in thrombi. The paradox: lower platelet count = more HIT antibody activity = more thrombosis. This explains why 30-50% of HIT patients develop thromboembolism if untreated, and why anticoagulation (NOT platelet transfusion) is the treatment.'
        },
        {
          question_text: 'Why is LMWH (Enoxaparin) not safe in HIT?',
          rationale: 'LMWH and UFH share the heparin backbone that complexes with PF4. HIT antibodies generated against heparin-PF4 complexes demonstrate CROSS-REACTIVITY with LMWH-PF4 complexes in approximately 80-90% of cases (though less than UFH due to lower affinity binding of LMWH to PF4). Therefore, switching from UFH to Enoxaparin in established HIT is CONTRAINDICATED — it perpetuates platelet activation and thrombosis. The only safe alternatives are drugs with NO structural relationship to heparin: Argatroban (direct thrombin inhibitor), Bivalirudin (direct thrombin inhibitor), Fondaparinux (selective anti-Xa, synthetic pentasaccharide — minimal PF4 binding, cross-reactivity <1%), Danaparoid, or DOACs.'
        },
        {
          question_text: 'Why is Warfarin initiation specifically dangerous in active HIT (before platelet recovery)?',
          rationale: 'Warfarin inhibits synthesis of ALL vitamin K-dependent coagulation factors: II, VII, IX, X, Protein C, Protein S. In HIT, the coagulation system is massively activated (high thrombin generation). Warfarin\'s effect on Protein C and Protein S (the anticoagulant proteins with the shortest half-lives — 6-8 hours) occurs before its effect on the procoagulant factors (half-lives 6h to 60h). This creates a TRANSIENT HYPERCOAGULABLE STATE in the first 24-48 hours of Warfarin initiation. In HIT — where thrombin generation is already massively increased — this transient hypercoagulable state can cause WARFARIN-INDUCED VENOUS LIMB GANGRENE or SKIN NECROSIS. Protocol: Wait until platelets recover >150k × 2 consecutive days before introducing Warfarin, and overlap with the non-heparin anticoagulant for at least 5 days AND until INR is therapeutic for ≥2 consecutive days.'
        }
      ],
      mnemonics: [
        {
          name: '4T Score for HIT Probability (T-T-T-T)',
          concept: 'The 4 T criteria for HIT diagnosis — ≥6 = high probability, requires immediate action',
          bullets: [
            'T1 — Thrombocytopenia MAGNITUDE: >50% drop AND nadir ≥20k = 2pts; 30-50% drop = 1pt; <30% drop = 0pts',
            'T2 — TIMING of platelet fall: Onset days 5-10 after heparin start = 2pts (immune system takes 5-10 days to make antibodies); <4 days without prior heparin = 0pts; <1 day with prior heparin ≤30 days = 2pts (memory response)',
            'T3 — THROMBOSIS or sequelae: New proven thrombus, skin necrosis = 2pts; Progressive thrombosis = 1pt; None = 0pts',
            'T4 — oTher causes of thrombocytopenia: None apparent = 2pts; Possible other cause = 1pt; Definite other cause = 0pts',
            'ACTION: ≥6 = HIGH probability → STOP all heparin, start Argatroban/Fondaparinux, order HIT antibody assays',
            'DO NOT give platelets (worsens thrombosis). DO NOT start Warfarin until platelets >150k. Heparin PERMANENTLY avoided.',
            'ARGATROBAN doses: 2 mcg/kg/min; target APTT 1.5-3× baseline. Prefer if renal impairment (hepatic metabolism)'
          ]
        }
      ]
    },
    tags: ['HIT', 'heparin', 'argatroban', 'warfarin', 'thrombocytopenia'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 23: NEUROLOGY/PSYCHIATRY — PARKINSON'S INTERACTION
  {
    id: 'seed-023',
    title: 'Parkinson\'s Disease & Metoclopramide Interaction',
    subject_area: 'neurology_psychiatry',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Gopal Krishnan',
      age: 68,
      sex: 'M',
      ward: 'Neurology',
      bed: '7',
      presenting_complaint: 'Admitted for nausea and vomiting after a suspected food poisoning episode. Has Parkinson\'s disease on Levodopa/Carbidopa. The admitting physician ordered Metoclopramide 10 mg IV for nausea.',
      pmh: ['Parkinson\'s Disease (6 years)', 'GERD'],
      medications: [
        { drug: 'Levodopa/Carbidopa (Syndopa)', dose: '250/25 mg', frequency: 'TDS', route: 'Oral' },
        { drug: 'Metoclopramide (ordered)', dose: '10 mg', frequency: 'TDS PRN', route: 'IV' },
        { drug: 'Pantoprazole', dose: '40 mg', frequency: 'OD', route: 'IV' },
        { drug: 'IV Normal Saline', dose: '100 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Na+', value: '138', unit: 'mEq/L', reference: '135-145', is_abnormal: false },
        { name: 'K+', value: '3.8', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-023-1', case_id: 'seed-023',
        question_text: 'What critical drug interaction must the clinical pharmacist flag regarding the Metoclopramide order in this Parkinson\'s patient?',
        option_a: 'Metoclopramide interacts with Pantoprazole causing QT prolongation',
        option_b: 'Metoclopramide is a D2 receptor antagonist — it blocks the same dopamine receptors that Levodopa is trying to stimulate, worsening Parkinson\'s symptoms and potentially causing an acute crisis',
        option_c: 'Metoclopramide reduces Levodopa absorption by slowing gastric emptying',
        option_d: 'No significant interaction exists',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'Metoclopramide is a potent D2 antagonist in the CNS. In Parkinson\'s disease, where dopaminergic neurons are already depleted, adding a D2 blocker counteracts Levodopa\'s therapeutic benefit, causing severe rigidity, akinesia, and potentially neuroleptic malignant syndrome.',
        subject_reference: 'Pharmacotherapeutics - Neurology',
      },
      {
        id: 'q-023-2', case_id: 'seed-023',
        question_text: 'Which antiemetic should be recommended instead of Metoclopramide for this patient?',
        option_a: 'Prochlorperazine (Stemetil)',
        option_b: 'Domperidone — it is a D2 antagonist that does NOT cross the blood-brain barrier, so it controls nausea without worsening Parkinson\'s',
        option_c: 'Haloperidol',
        option_d: 'Chlorpromazine',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Domperidone acts on D2 receptors only in the chemoreceptor trigger zone (which is outside the BBB), providing antiemetic effect without central dopaminergic blockade. Prochlorperazine, Haloperidol, and Chlorpromazine are all centrally-acting D2 blockers and are contraindicated.',
        subject_reference: 'Pharmacotherapeutics - Neurology',
      },
      {
        id: 'q-023-3', case_id: 'seed-023',
        question_text: 'What is a critical counseling point about Levodopa/Carbidopa administration timing with meals?',
        option_a: 'Always take with a high-protein meal for better absorption',
        option_b: 'Take 30-60 minutes before meals. High-protein meals reduce Levodopa absorption because dietary amino acids compete for the same L-amino acid transporter in the gut and at the blood-brain barrier.',
        option_c: 'Take with milk for stomach protection',
        option_d: 'Timing with food does not matter',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Levodopa uses the Large Neutral Amino Acid (LNAA) transporter for both intestinal absorption and BBB crossing. Dietary amino acids from protein-rich meals compete for this transporter, reducing Levodopa bioavailability and brain penetration.',
        subject_reference: 'Pharmacotherapeutics - Neurology',
      },
    ],
    phases: [
      {
        id: 'seed-023-phase-1',
        title: 'Day 1: Antiemetic Safety',
        description: 'Gopal is admitted with nausea. Review the Metoclopramide order for D2 antagonist interaction.',
        patient_snapshot: {
          name: 'Gopal Krishnan', age: 68, sex: 'M', ward: 'Neurology', bed: '7',
          presenting_complaint: 'Nausea/vomiting; Parkinson\'s on Levodopa.',
          pmh: ['Parkinson\'s Disease'],
          medications: [
            { drug: 'Levodopa/Carbidopa', dose: '250/25 mg', frequency: 'TDS', route: 'Oral' },
            { drug: 'Metoclopramide (ordered)', dose: '10 mg', frequency: 'TDS PRN', route: 'IV' },
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-023-1', case_id: 'seed-023',
            question_text: 'Critical drug interaction with Metoclopramide in Parkinson\'s?',
            option_a: 'QT prolongation with Pantoprazole',
            option_b: 'D2 antagonist blocks Levodopa effect, worsening Parkinson\'s',
            option_c: 'Reduces Levodopa absorption',
            option_d: 'No interaction',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'D2 blockade counteracts Levodopa.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
          {
            id: 'q-023-2', case_id: 'seed-023',
            question_text: 'Safe antiemetic alternative?',
            option_a: 'Prochlorperazine',
            option_b: 'Domperidone (does not cross BBB)',
            option_c: 'Haloperidol',
            option_d: 'Chlorpromazine',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Domperidone acts peripherally only.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
          {
            id: 'q-023-3', case_id: 'seed-023',
            question_text: 'Levodopa timing with food?',
            option_a: 'With high-protein meals',
            option_b: '30-60 min before meals; protein competes for LNAA transporter',
            option_c: 'With milk',
            option_d: 'No food timing needed',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Amino acids compete with Levodopa for absorption.',
            subject_reference: 'Pharmacotherapeutics - Neurology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'International Parkinson and Movement Disorder Society (MDS) — Evidence-Based Medicine Review (2018)',
          organization: 'MDS',
          text: 'LEVODOPA-CARBIDOPA is the gold standard treatment for Parkinson\'s Disease motor symptoms. However, multiple drug interactions critically impair its efficacy or cause dangerous adverse effects: (1) METOCLOPRAMIDE: Dopamine D2 receptor antagonist — blocks the central therapeutic effect of Levodopa in the substantia nigra AND can precipitate acute Parkinsonian crisis (severe rigidity, tremor). ABSOLUTELY CONTRAINDICATED in PD. Alternative antiemetics: Domperidone (acts peripherally, does not cross BBB), Ondansetron 4 mg IV. (2) ANTIPSYCHOTICS (Haloperidol, Risperidone, Chlorpromazine): Block D2 receptors — worsen all PD motor symptoms. If antipsychotic required for PD psychosis: use CLOZAPINE or QUETIAPINE (lowest D2 affinity). (3) PROTEIN MEAL: Large neutral amino acids in dietary protein compete with Levodopa for intestinal (LAT1) and blood-brain barrier transport — reducing L-DOPA brain entry. Counsel: Take Levodopa 30-60 min BEFORE meals; protein-redistribute diet (eat most protein at evening meal).'
        },
        {
          title: 'Parkinson\'s Disease Foundation Clinical Guidelines — Drug-Induced Parkinsonism',
          organization: 'PDF/AAN',
          text: 'DRUG-INDUCED PARKINSONISM (DIP) is the second most common cause of parkinsonism after PD. Offending drugs: (1) DOPAMINE ANTAGONISTS: Metoclopramide (most common outpatient cause globally), Prochlorperazine, Domperidone (at high doses), Antipsychotics (FGA > SGA). (2) CALCIUM CHANNEL BLOCKERS: Cinnarizine, Flunarizine (block striatal dopamine receptors). (3) VALPROATE: 5-10% incidence of drug-induced tremor/parkinsonism (mechanism unclear — possibly mitochondrial dysfunction). (4) AMIODARONE: Rare, via dopaminergic neurotoxicity. DIP PRESENTATION: Symmetrical bradykinesia + rigidity (unlike idiopathic PD which is asymmetric initially). RESOLUTION: Stop offending drug — typically resolves within 6-18 months. Levodopa is ineffective for DIP (unlike idiopathic PD).'
        },
        {
          title: 'NICE Guideline NG71 — Parkinson\'s Disease in Adults (2017)',
          organization: 'NICE',
          text: 'MEDICATION MANAGEMENT IN PARKINSON\'S: (1) NEVER abruptly stop antiparkinsonian medications in a hospitalized patient — can cause life-threatening Parkinson\'s-Hyperpyrexia Syndrome (similar to NMS). Continue Levodopa/MAO-B inhibitors/Dopamine agonists even when NBM. Use dispersible/oral solution forms, NG tube administration, or Apomorphine SC pump if oral route unavailable. (2) ROTIGOTINE PATCH (Neupro): Can be used when patient is NBM (transdermal delivery). (3) APOMORPHINE SC: Rescue medication for acute off-states or hospital setting when oral medications cannot be given. (4) ENTACAPONE: COMT inhibitor — must be taken WITH each Levodopa dose (not separately). Avoid tyramine-rich foods when on Selegiline (MAO-B inhibitor has some MAO-A affinity at high doses). (5) Hospital pharmacists should flag ALL drug-drug interactions with PD medications at admission.'
        }
      ],
      calculations: [
        {
          name: 'Levodopa Equivalent Dose (LED) Calculation',
          formula: 'LED = Levodopa dose (mg) × 1.0 + Pramipexole (mg) × 100 + Ropinirole (mg) × 20 + Rotigotine patch (mg) × 33 + Entacapone co-administration × 1.33',
          explanation: 'Patient on Levodopa 125 mg TDS + Carbidopa (co-administered): LED from Levodopa = 375 mg/day. If Entacapone added (prolongs L-DOPA action): multiply by 1.33 = 375 × 1.33 = 498.75 mg LED. This calculation is critical when converting a patient from one route or formulation to another (e.g., to Rotigotine patch during hospitalization). Higher LED = higher efficacy but also higher risk of dyskinesias, hallucinations, and orthostatic hypotension.'
        },
        {
          name: 'Timing Interval for Metoclopramide Interaction Assessment',
          formula: 'Metoclopramide half-life = 4-6 hours. Wash-out = 5 half-lives = 20-30 hours for D2 blockade to resolve',
          explanation: 'If a PD patient received Metoclopramide 10 mg IV TDS for 3 days (typical hospital order), the cumulative D2 receptor blockade may persist for 24-30 hours after the last dose. During this period, Levodopa response will be blunted. Clinical sign: increased off-time, rigidity, and bradykinesia despite usual L-DOPA doses. Management: Stop Metoclopramide, switch to Domperidone 10 mg TDS (peripheral D2 blocker — no CNS penetration) or Ondansetron 4 mg IV as antiemetic alternative.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Metoclopramide absolutely contraindicated in Parkinson\'s Disease?',
          rationale: 'Parkinson\'s Disease is caused by progressive loss of dopaminergic neurons in the substantia nigra (nigrostriatal pathway), resulting in dopamine deficiency in the striatum. Levodopa works by replacing this deficient dopamine. Metoclopramide is a dopamine D2 RECEPTOR ANTAGONIST — it competitively blocks D2 receptors in the brain. By blocking the same receptors that dopamine (from Levodopa) needs to stimulate, Metoclopramide: (1) Reverses the therapeutic benefit of Levodopa, worsening all motor symptoms (tremor, rigidity, bradykinesia); (2) Can precipitate acute Parkinsonian CRISIS (sudden severe deterioration mimicking end-stage PD); (3) With chronic use, worsens overall motor control permanently (may unmask subclinical PD in at-risk individuals). SAFE ALTERNATIVES: Domperidone (peripheral D2 blocker, does not cross BBB), Ondansetron (5-HT3 antagonist, no D2 activity), Trimethobenzamide.'
        },
        {
          question_text: 'Why should Levodopa never be abruptly stopped in hospitalized PD patients?',
          rationale: 'Abrupt cessation of Levodopa (or other dopaminergic drugs) in PD patients can cause PARKINSONISM-HYPERPYREXIA SYNDROME (PHS) — a life-threatening emergency clinically identical to Neuroleptic Malignant Syndrome (NMS). PHS features: Hyperthermia (>39°C), Severe rigidity ("lead-pipe"), Altered consciousness, Autonomic instability (BP fluctuations, tachycardia, diaphoresis), Rhabdomyolysis (CK markedly elevated), AKI. PHS occurs because abrupt dopamine withdrawal in a dopamine-deficient system causes: dopaminergic pathway collapse → hypothalamic thermoregulation failure → peripheral muscle rigidity generating heat. MORTALITY: 4-15% without treatment. PREVENTION: Continue PD medications even when NBM (use NG tube, dispersible formulations, transdermal rotigotine patch, or SC apomorphine). This is a critical pharmacist-led intervention in every PD hospital admission.'
        },
        {
          question_text: 'Why does dietary protein reduce the effectiveness of Levodopa?',
          rationale: 'Levodopa is a large neutral amino acid (LNAA) that is absorbed from the small intestine via the L-type amino acid transporter (LAT1/2) and crosses the blood-brain barrier via the same carrier system. Large neutral amino acids from dietary protein (phenylalanine, leucine, isoleucine, valine, tyrosine, tryptophan, threonine) COMPETE with Levodopa for both: (1) Intestinal absorption (reducing plasma Levodopa levels); (2) Blood-brain barrier entry (reducing CNS Levodopa delivery even when plasma levels are adequate). Clinical consequence: Patients may notice increased motor fluctuations (more "off" time) when they eat a high-protein meal with their Levodopa dose. Management: Protein redistribution diet — take Levodopa 30-45 minutes BEFORE meals; restrict protein at breakfast and lunch; take majority of daily protein at dinner when motor function is less critical (patient typically sleeping afterward).'
        }
      ],
      mnemonics: [
        {
          name: 'Drugs Contraindicated in Parkinson\'s Disease (M-A-D-R-O-C-K-S)',
          concept: 'Common drugs that worsen Parkinson\'s or block dopaminergic therapy — pharmacist must screen at EVERY admission',
          bullets: [
            'M — Metoclopramide (D2 antagonist — most common iatrogenic worsening; use Domperidone/Ondansetron instead)',
            'A — Antipsychotics — FGAs (Haloperidol, Chlorpromazine): strongly block D2. SGAs vary: Clozapine/Quetiapine SAFE; Risperidone/Olanzapine AVOID',
            'D — Domperidone (safe in standard doses — peripheral D2 only, does not cross BBB)',
            'R — Reserpine (depletes presynaptic dopamine stores — historical drug, still occasionally used for tardive dyskinesia)',
            'O — Opioids (can worsen constipation and urinary retention common in PD; avoid routine use)',
            'C — Cinnarizine/Flunarizine (calcium channel blockers with D2 antagonism — avoid in PD patients)',
            'K — (Never stop antiparkinsonian drugs abruptly — Killer: Parkinsonism-Hyperpyrexia Syndrome = medical emergency)',
            'S — SSRIs/SNRIs (mild risk of drug-induced extrapyramidal symptoms, especially with high-dose use)'
          ]
        }
      ]
    },
    tags: ['Parkinsons', 'metoclopramide', 'ondansetron', 'drug-interaction', 'dopamine-antagonist'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 24: NEUROLOGY/PSYCHIATRY — STATUS EPILEPTICUS
  {
    id: 'seed-024',
    title: 'Status Epilepticus Emergency Management',
    subject_area: 'neurology_psychiatry',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Arjun Das',
      age: 30,
      sex: 'M',
      ward: 'Neurology ICU',
      bed: 'NICU-02',
      presenting_complaint: 'Ongoing generalized tonic-clonic seizures for 15 minutes unresponsive to two doses of IV Lorazepam. Known epilepsy on oral Phenytoin. The nurse asks which IV fluid to mix the Phenytoin loading dose in.',
      pmh: ['Epilepsy (5 years)'],
      medications: [
        { drug: 'Lorazepam IV', dose: '4 mg', frequency: 'Two doses given', route: 'IV' },
        { drug: 'Phenytoin IV Loading', dose: '20 mg/kg', frequency: 'Once', route: 'IV infusion' },
        { drug: 'IV Dextrose 5%', dose: '500 mL', frequency: 'Continuous', route: 'IV (currently running)' },
      ],
      allergies: [],
      labs: [
        { name: 'Phenytoin Level', value: '5', unit: 'mcg/mL', reference: '10-20', is_abnormal: true },
        { name: 'Albumin', value: '2.5', unit: 'g/dL', reference: '3.5-5.0', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-024-1', case_id: 'seed-024',
        question_text: 'The nurse asks: "Can I mix the IV Phenytoin loading dose in the D5W bag that\'s already running?" What is the pharmacist\'s response?',
        option_a: 'Yes — D5W is the standard diluent for Phenytoin',
        option_b: 'NO — Phenytoin is highly alkaline (pH ~12) and precipitates in Dextrose solutions. It must ONLY be diluted in Normal Saline (0.9% NaCl) and infused through a dedicated line with an in-line filter.',
        option_c: 'Mix it in Ringer\'s Lactate instead',
        option_d: 'Give it as an undiluted IV push',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Phenytoin sodium is formulated at pH ~12 with propylene glycol. Dextrose solutions (acidic pH ~4) cause immediate precipitation of Phenytoin crystals, risking fatal IV line occlusion and crystalline emboli. Only Normal Saline is compatible.',
        subject_reference: 'Pharmacotherapeutics - Neurology / IV Safety',
      },
      {
        id: 'q-024-2', case_id: 'seed-024',
        question_text: 'What is the maximum safe infusion rate for IV Phenytoin, and what adverse effects occur if exceeded?',
        option_a: 'No rate limit — infuse as fast as possible during active seizures',
        option_b: 'Maximum rate: 50 mg/min in adults. Exceeding this causes cardiovascular toxicity: hypotension, bradycardia, and cardiac arrest (due to the propylene glycol diluent)',
        option_c: '200 mg/min to terminate seizures quickly',
        option_d: '10 mg/min to prevent any side effects',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'IV Phenytoin must be infused at ≤50 mg/min in adults (≤25 mg/min in elderly). Rapid infusion of the propylene glycol vehicle causes cardiovascular depression: hypotension, QT prolongation, bradycardia, and cardiac arrest. Continuous ECG and BP monitoring during infusion is mandatory.',
        subject_reference: 'Pharmacotherapeutics - Neurology / IV Safety',
      },
      {
        id: 'q-024-3', case_id: 'seed-024',
        question_text: 'Arjun\'s total Phenytoin level is 5 mcg/mL (sub-therapeutic) but his albumin is 2.5 g/dL. Should the pharmacist recommend a dose increase based on this level?',
        option_a: 'Yes — the level is clearly sub-therapeutic; double the dose',
        option_b: 'The reported level must be corrected for hypoalbuminemia using the Sheiner-Tozer equation before making dose changes, as the FREE (unbound) Phenytoin fraction may actually be therapeutic',
        option_c: 'Albumin does not affect Phenytoin levels',
        option_d: 'Switch to Carbamazepine',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Phenytoin is 90% protein-bound (mainly to albumin). In hypoalbuminemia, less Phenytoin is bound, so more is free (active). The total level appears low, but the free level may be therapeutic. Corrected Phenytoin = Measured / (0.2 × Albumin + 0.1). For this patient: 5 / (0.2 × 2.5 + 0.1) = 5 / 0.6 = 8.3 mcg/mL — still low but much closer to therapeutic.',
        subject_reference: 'Pharmacokinetics / TDM',
      },
    ],
    phases: [
      {
        id: 'seed-024-phase-1',
        title: 'Hour 1: Status Epilepticus',
        description: 'Arjun is in refractory status epilepticus. Phenytoin loading is ordered. Review IV compatibility and infusion rate safety.',
        patient_snapshot: {
          name: 'Arjun Das', age: 30, sex: 'M', ward: 'Neurology ICU', bed: 'NICU-02',
          presenting_complaint: 'Refractory status epilepticus.',
          pmh: ['Epilepsy'],
          medications: [
            { drug: 'Phenytoin IV', dose: '20 mg/kg', frequency: 'Loading', route: 'IV' },
            { drug: 'IV D5W', dose: '500 mL', frequency: 'Running', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Phenytoin Level', value: '5', unit: 'mcg/mL', reference: '10-20', is_abnormal: true },
            { name: 'Albumin', value: '2.5', unit: 'g/dL', reference: '3.5-5.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-024-1', case_id: 'seed-024',
            question_text: 'Can Phenytoin be mixed in D5W?',
            option_a: 'Yes — standard diluent',
            option_b: 'NO — precipitates in dextrose; use Normal Saline only',
            option_c: 'Use RL instead',
            option_d: 'Give undiluted',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Phenytoin precipitates in dextrose.',
            subject_reference: 'Pharmacotherapeutics - IV Safety',
          },
          {
            id: 'q-024-2', case_id: 'seed-024',
            question_text: 'Maximum IV Phenytoin rate?',
            option_a: 'No limit during seizures',
            option_b: '50 mg/min max; faster causes hypotension/cardiac arrest',
            option_c: '200 mg/min',
            option_d: '10 mg/min',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Propylene glycol vehicle causes CV toxicity.',
            subject_reference: 'Pharmacotherapeutics - IV Safety',
          },
          {
            id: 'q-024-3', case_id: 'seed-024',
            question_text: 'Phenytoin 5 mcg/mL with albumin 2.5 — interpretation?',
            option_a: 'Sub-therapeutic; double dose',
            option_b: 'Correct for hypoalbuminemia (Sheiner-Tozer); free fraction may be therapeutic',
            option_c: 'Albumin irrelevant',
            option_d: 'Switch to Carbamazepine',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Use corrected Phenytoin formula for hypoalbuminemia.',
            subject_reference: 'Pharmacokinetics / TDM',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'NCS and AES Guideline on Status Epilepticus Treatment (2016)',
          organization: 'Neurocritical Care Society (NCS) / AES',
          text: 'STATUS EPILEPTICUS (SE) DEFINITION: Continuous seizure >5 minutes OR ≥2 discrete seizures without return to baseline consciousness. TREATMENT PHASES: PHASE 1 — IMMEDIATE (0-5 min): Stabilize airway, IV access, glucose check (10 mL D50 + Thiamine 100 mg if hypoglycemia). PHASE 2 — EMERGENT INITIAL THERAPY (5-20 min): FIRST-LINE: Benzodiazepines — IV Lorazepam 0.1 mg/kg (max 4 mg per dose, repeat once after 5 min); OR IM Midazolam 10 mg (IM if no IV access — FASTEST route for pre-hospital). PHASE 3 — URGENT CONTROL THERAPY (20-40 min): SECOND-LINE (all equally recommended, one chosen): Levetiracetam 60 mg/kg IV (max 4500 mg); OR Fosphenytoin 20 mg PE/kg IV (max rate 150 mg PE/min); OR Valproate 40 mg/kg IV (max rate 6 mg/kg/min). PHASE 4 — REFRACTORY SE (>40 min): Intubation + continuous EEG. Anesthetic infusions: Midazolam 0.2 mg/kg bolus then 0.05-2 mg/kg/h; OR Propofol 1-2 mg/kg bolus then 2-12 mg/kg/h (watch for Propofol Infusion Syndrome in prolonged use >48h); OR Pentobarbital/Thiopental for super-refractory SE.'
        },
        {
          title: 'Phenytoin / Fosphenytoin — Administration Safety and Monitoring',
          organization: 'AES / Epilepsy Foundation',
          text: 'PHENYTOIN IV: Maximum infusion rate 50 mg/min (SLOWER in elderly/cardiac patients: max 25 mg/min). MUST be given in NS only (precipitates in dextrose-containing solutions). Causes: Purple Glove Syndrome (subcutaneous extravasation — use large vein, stop infusion if extravasation occurs). Cardiac monitoring mandatory during IV infusion (causes bradycardia, hypotension, and QT prolongation especially at high rates). FOSPHENYTOIN: Water-soluble prodrug (converted to Phenytoin in blood by phosphatases). Can be given IV or IM. Rate up to 150 mg PE/min IV. Expressed in PHENYTOIN EQUIVALENTS (PE). Avoid in: Second/third-degree AV block. LEVETIRACETAM ADVANTAGES: No significant drug interactions, no hepatic metabolism (renal excretion), no cardiac monitoring needed, no enzyme induction. Preferred in: liver disease, patients on multiple AEDs, elderly. Dose adjust in renal impairment (CrCl <30 → reduce dose 50%).'
        },
        {
          title: 'Benzodiazepine Pharmacology — Route-Specific Onset in Status Epilepticus',
          organization: 'Clinical Neuropharmacology Consensus',
          text: 'SEIZURE TERMINATION SPEED by benzodiazepine route: (1) IV Lorazepam: Onset 2-3 min. Duration 12-24h (high CNS binding). PREFERRED if IV access available. (2) IM Midazolam: Onset 3-5 min (superior for pre-hospital as no IV needed). RAMPART trial: IM Midazolam ≥ IV Lorazepam in children. (3) Rectal Diazepam (Diastat): Onset 10-15 min. Used in community settings (schools, home). (4) Intranasal Midazolam: Onset 5 min. Non-invasive, useful in children. (5) Buccal Midazolam: Onset 5-10 min. LORAZEPAM advantages over DIAZEPAM IV: Longer duration (12-24h vs 20-30 min for Diazepam — Diazepam rapidly redistributes from brain to fat). Lorazepam provides true anticonvulsant duration; Diazepam requires second-line AED immediately after. CAUTIONS with ALL benzodiazepines: Respiratory depression (especially in opioid-naïve or respiratory-compromised patients — keep Flumazenil available but use with extreme caution in seizures as Flumazenil itself can lower seizure threshold).'
        }
      ],
      calculations: [
        {
          name: 'Lorazepam Dosing in Status Epilepticus',
          formula: 'Lorazepam 0.1 mg/kg IV (max 4 mg per dose). May repeat ONCE after 5 min if seizure continues.',
          explanation: 'For 70 kg adult: 0.1 × 70 = 7 mg — but maximum single dose is 4 mg. Give 4 mg IV over 2 min. If still seizing at 5 min: repeat 4 mg IV. Total max Lorazepam = 8 mg in acute phase. THEN proceed to second-line (Levetiracetam, Fosphenytoin, or Valproate) regardless of whether seizure stopped. Do NOT give a third Lorazepam dose (increases respiratory depression without better seizure control). Monitor: Blood pressure (hypotension), respiratory rate, oxygen saturation continuously. Have Flumazenil 0.2 mg IV available for respiratory depression (but use cautiously).'
        },
        {
          name: 'Levetiracetam Loading Dose Calculation',
          formula: 'Levetiracetam 60 mg/kg IV (maximum 4500 mg). Infuse in NS or D5W over 15 minutes.',
          explanation: 'For 70 kg adult: 60 × 70 = 4200 mg IV — within the 4500 mg max. Infuse 4200 mg in 100 mL NS over 15 min. Advantages: Can be given at faster rate than Phenytoin (15 min vs 20+ min), no cardiac monitoring needed, no significant drug interactions. Renal dose reduction: CrCl 30-50 → max 3000 mg/day. CrCl <30 → max 2000 mg/day. No hepatic dose adjustment needed. Post-loading dose: Levetiracetam 500-1500 mg BD PO/IV for maintenance. TDM: trough target 12-46 mcg/mL (routine TDM not universally required unlike Phenytoin).'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Diazepam IV less preferred than Lorazepam IV for status epilepticus?',
          rationale: 'Both Diazepam and Lorazepam are benzodiazepines that work by enhancing GABA-A receptor activity, terminating seizures. The critical difference is DURATION OF ACTION after IV administration: DIAZEPAM has very high lipophilicity — it enters the brain rapidly (onset 1-3 min) causing rapid seizure cessation, BUT it ALSO rapidly redistributes from brain into peripheral fat stores. This redistribution reduces brain Diazepam concentrations within 20-30 minutes — seizure recurrence is common within this window. A second-line AED MUST be given immediately after Diazepam. LORAZEPAM is less lipophilic — enters brain slightly slower but binds GABA-A receptors with higher affinity (less redistribution). Brain concentrations remain therapeutic for 12-24 hours. This prolonged CNS effect makes Lorazepam the superior choice when IV access is available — single dose provides sustained seizure protection while awaiting second-line AED.'
        },
        {
          question_text: 'Why must Phenytoin NEVER be mixed with dextrose-containing IV fluids?',
          rationale: 'Phenytoin sodium has a high pH (approximately 10-12). In dextrose solutions (D5W, D10W, D5NS), phenytoin rapidly forms insoluble PHENYTOIN CRYSTALS (precipitate) due to pH changes and electrostatic interactions between phenytoin anions and glucose molecules. This precipitation: (1) BLOCKS the IV catheter/tubing; (2) If infused despite precipitate, causes crystalline emboli in pulmonary vasculature; (3) The precipitate represents LOST DRUG (patient receives less than ordered dose → underdosing → seizure recurrence). RULE: Phenytoin IV ONLY in Normal Saline (0.9% NaCl). Use a separate IV line or flush line with NS before and after. Fosphenytoin (the water-soluble prodrug) can be given in ANY compatible IV fluid including dextrose solutions — a major safety advantage.'
        },
        {
          question_text: 'What is Propofol Infusion Syndrome (PRIS) and why is it relevant in refractory SE?',
          rationale: 'Propofol Infusion Syndrome (PRIS) is a rare but potentially fatal complication of prolonged or high-dose propofol infusion (>5 mg/kg/h for >48h). MECHANISM: Propofol impairs mitochondrial respiratory chain (complex II/III) and fatty acid beta-oxidation, causing: Severe metabolic lactic acidosis, Cardiac failure (new-onset arrhythmias, ECG changes — peaked T-waves, prolonged QRS), Rhabdomyolysis (elevated CK), Hyperkalemia, Hepatomegaly. RISK FACTORS: High doses (>5 mg/kg/h), prolonged duration (>48h), young age (children especially vulnerable), concurrent catecholamine or corticosteroid infusion. MONITORING: Daily BMP, lactate, LFTs, CK, ECG during prolonged propofol infusion. If PRIS suspected: STOP propofol immediately, switch to Midazolam or Pentobarbital, hemodynamic support. This is why Midazolam infusion (safer long-term profile) is often preferred over Propofol for refractory SE >48h in ICU.'
        }
      ],
      mnemonics: [
        {
          name: 'Status Epilepticus Treatment Timeline (0-20-40-60)',
          concept: 'Time-based algorithm for SE management — MUST be memorized and acted upon, every minute = more neuron death',
          bullets: [
            '0-5 min — STABILIZE: ABC. IV access. Check glucose (D50 + Thiamine if hypoglycemic). Position lateral to prevent aspiration. O2 by mask.',
            '5-20 min — FIRST LINE (Benzodiazepines): IV Lorazepam 0.1 mg/kg (max 4mg, repeat × 1). OR IM Midazolam 10mg if no IV. Goal: STOP SEIZURE.',
            '20-40 min — SECOND LINE (if still seizing): Levetiracetam 60 mg/kg IV (preferred — fewest interactions); OR Fosphenytoin 20 mg PE/kg IV; OR Valproate 40 mg/kg IV. ONE agent only.',
            '40-60 min — REFRACTORY SE: Anaesthesia + intubation. Midazolam infusion 0.2 mg/kg bolus then 0.05-2 mg/kg/h. OR Propofol (watch PRIS >48h). Continuous EEG monitoring mandatory.',
            '>60 min — SUPER-REFRACTORY SE: Pentobarbital/Thiopental coma. Ketamine. Consider Ketogenic diet, magnesium, hypothermia, immunotherapy (if autoimmune encephalitis suspected).',
            'PHENYTOIN: Only in NS (never dextrose). Max rate 50 mg/min (25 mg/min in elderly). Continuous cardiac monitoring.',
            'VALPROATE: Avoid in liver disease, mitochondrial disorders, women of childbearing potential (teratogenic), urea cycle disorders.'
          ]
        }
      ]
    },
    tags: ['status-epilepticus', 'lorazepam', 'phenytoin', 'seizure', 'anticonvulsant'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 25: COMMUNITY PHARMACY — GOUT IN CKD
  {
    id: 'seed-025',
    title: 'Acute Gout Flare in Chronic Kidney Disease',
    subject_area: 'community_pharmacy',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Rajesh Verma',
      age: 63,
      sex: 'M',
      ward: 'Rheumatology',
      bed: '9',
      presenting_complaint: 'Acute right first MTP joint pain, redness, and swelling (podagra). Also known CKD Stage 4 (eGFR 22). Taking Hydrochlorothiazide for hypertension.',
      pmh: ['Gout', 'CKD Stage 4 (eGFR 22)', 'Hypertension'],
      medications: [
        { drug: 'Hydrochlorothiazide', dose: '25 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Losartan', dose: '50 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Uric Acid', value: '10.5', unit: 'mg/dL', reference: '3.5-7.2', is_abnormal: true },
        { name: 'eGFR', value: '22', unit: 'mL/min', reference: '>60', is_abnormal: true },
        { name: 'SCr', value: '3.2', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-025-1', case_id: 'seed-025',
        question_text: 'Rajesh is having an acute gout flare with CKD Stage 4 (eGFR 22). Why are NSAIDs contraindicated, and what is the safest acute treatment?',
        option_a: 'Indomethacin 50 mg TDS — standard first-line for gout',
        option_b: 'NSAIDs are contraindicated in severe CKD due to nephrotoxicity. Use low-dose Prednisolone (30-35 mg/day for 5 days) or intra-articular corticosteroid injection for the acute flare.',
        option_c: 'Allopurinol 300 mg stat to lower uric acid',
        option_d: 'Colchicine 1.2 mg followed by 0.6 mg Q1H until pain resolves',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'NSAIDs inhibit renal prostaglandins and worsen GFR. In CKD Stage 4, even short courses can precipitate AKI. Corticosteroids (oral or intra-articular) are the safest option for acute gout flares in CKD.',
        subject_reference: 'Pharmacotherapeutics - Rheumatology',
      },
      {
        id: 'q-025-2', case_id: 'seed-025',
        question_text: 'The physician wants to start Colchicine for the acute flare. What dose adjustment is required in CKD Stage 4?',
        option_a: 'No adjustment — Colchicine is safe in CKD',
        option_b: 'Colchicine dose must be significantly reduced (e.g., 0.3 mg once or twice daily) and closely monitored, as it accumulates in renal impairment causing fatal myelosuppression and neuromyopathy',
        option_c: 'Double the Colchicine dose for faster relief',
        option_d: 'Give Colchicine IV for better absorption',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Colchicine is partially renally cleared. In CKD Stage 4-5, accumulation leads to severe toxicity: pancytopenia, rhabdomyolysis, neuropathy, and multi-organ failure. Dose must be reduced and high-dose regimens avoided.',
        subject_reference: 'Pharmacotherapeutics - Renal Dosing',
      },
      {
        id: 'q-025-3', case_id: 'seed-025',
        question_text: 'Which of Rajesh\'s current medications may be contributing to his hyperuricemia?',
        option_a: 'Amlodipine',
        option_b: 'Hydrochlorothiazide — thiazide diuretics increase uric acid reabsorption in the proximal tubule',
        option_c: 'Losartan',
        option_d: 'None of his medications affect uric acid',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'Thiazide diuretics compete with uric acid for secretion in the proximal tubule, increasing serum uric acid and precipitating gout. Interestingly, Losartan has a mild uricosuric effect and may actually be beneficial in this patient.',
        subject_reference: 'Pharmacotherapeutics - Drug Interactions',
      },
    ],
    phases: [
      {
        id: 'seed-025-phase-1',
        title: 'Day 1: Acute Gout in CKD',
        description: 'Rajesh presents with acute podagra and severe CKD. Review safe anti-gout options.',
        patient_snapshot: {
          name: 'Rajesh Verma', age: 63, sex: 'M', ward: 'Rheumatology', bed: '9',
          presenting_complaint: 'Acute gout flare with CKD Stage 4.',
          pmh: ['Gout', 'CKD Stage 4'],
          medications: [
            { drug: 'Hydrochlorothiazide', dose: '25 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Uric Acid', value: '10.5', unit: 'mg/dL', reference: '3.5-7.2', is_abnormal: true },
            { name: 'eGFR', value: '22', unit: 'mL/min', reference: '>60', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-025-1', case_id: 'seed-025',
            question_text: 'Safest acute gout treatment in CKD Stage 4?',
            option_a: 'Indomethacin TDS',
            option_b: 'Low-dose Prednisolone or intra-articular steroid',
            option_c: 'Allopurinol stat',
            option_d: 'High-dose Colchicine',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'NSAIDs contraindicated; steroids are safest.',
            subject_reference: 'Pharmacotherapeutics - Rheumatology',
          },
          {
            id: 'q-025-2', case_id: 'seed-025',
            question_text: 'Colchicine dose adjustment in CKD?',
            option_a: 'No adjustment',
            option_b: 'Significantly reduce dose; accumulation causes fatal toxicity',
            option_c: 'Double dose',
            option_d: 'Give IV',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Colchicine accumulates in CKD → pancytopenia, rhabdo.',
            subject_reference: 'Pharmacotherapeutics - Renal Dosing',
          },
          {
            id: 'q-025-3', case_id: 'seed-025',
            question_text: 'Which med contributes to hyperuricemia?',
            option_a: 'Amlodipine',
            option_b: 'Hydrochlorothiazide',
            option_c: 'Losartan',
            option_d: 'None',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Thiazides increase uric acid reabsorption.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ACR Guideline for the Management of Gout (2020)',
          organization: 'American College of Rheumatology (ACR)',
          text: 'ACUTE GOUT FLARE TREATMENT — CKD CONSIDERATIONS: (1) NSAIDs (Indomethacin, Naproxen, Diclofenac): AVOID if eGFR <30 mL/min (CKD Stage 4-5). Risk: Acute-on-chronic kidney injury, sodium retention (edema), hyperkalemia, increased cardiovascular risk. Even short-term NSAIDs (3-5 days) cause significant GFR reduction in CKD patients. (2) COLCHICINE: Requires dose adjustment in CKD. eGFR 30-60: Use 0.6 mg BD (not TDS). eGFR <30: Use 0.6 mg once ONLY — do not repeat dose for 14 days. eGFR <10 or Dialysis: AVOID colchicine (accumulates → neuromuscular toxicity, pancytopenia, multi-organ failure). Major interaction: CYP3A4 + P-glycoprotein inhibitors (Clarithromycin, Cyclosporine, Fluconazole) dramatically increase colchicine exposure → fatal toxicity. (3) CORTICOSTEROIDS: SAFEST option in advanced CKD. Prednisolone 30-40 mg OD × 5-7 days, then taper. No dose adjustment needed for eGFR. Monitor glucose (hyperglycemia common, especially in diabetics). Consider Intra-articular Triamcinolone 40 mg for single-joint involvement (avoids systemic steroid effects). URATE-LOWERING THERAPY (ULT): Allopurinol starting dose in CKD: 50-100 mg OD (not 300 mg standard). Titrate by 50 mg every 4 weeks. Target uric acid <6 mg/dL (<5 mg/dL if tophi). Febuxostat preferred if Allopurinol intolerant (SJS risk, especially HLA-B*58:01 carriers — screen Asians before Allopurinol).'
        },
        {
          title: 'EULAR Recommendations for Gout Management (2016)',
          organization: 'EULAR',
          text: 'LONG-TERM URATE-LOWERING THERAPY (ULT): Start ULT during acute flare ONLY if patient is already on ULT (no initiation during acute attack — rapid urate change worsens inflammation). If initiating ULT after flare resolution: CO-PRESCRIBE anti-inflammatory prophylaxis (Colchicine 0.5-1 mg/day or low-dose NSAID) for 3-6 months to prevent ULT-induced flares (paradoxical worsening from urate crystal mobilization). TARGET: Serum uric acid <6 mg/dL (360 μmol/L) for all gout patients; <5 mg/dL (300 μmol/L) for patients with tophi. ALLOPURINOL in CKD: Start at 1.5 mg/mg of eGFR as a guide (Allopurinol starting dose = eGFR × 1.5 mg = 22 × 1.5 = 33 mg → round to 50 mg OD for Ananth). FEBUXOSTAT: No renal dose adjustment needed for CrCl >15 mL/min — advantage over Allopurinol in CKD. However: increased cardiovascular events vs Allopurinol in CARES trial — avoid in patients with established ASCVD.'
        },
        {
          title: 'Gout Prophylaxis During ULT Initiation — Colchicine and Steroid Regimens',
          organization: 'ACR / BSR',
          text: 'PARADOXICAL GOUT FLARES during ULT initiation occur in up to 30% of patients within first 6 months: As urate-lowering therapy dissolves existing urate crystal deposits in tissues, crystals mobilize into the joint space, triggering new inflammatory episodes. This is NOT drug failure — but must be explained to patients at the outset to prevent premature ULT discontinuation. ANTI-FLARE PROPHYLAXIS REGIMENS during ULT: (1) Colchicine 0.5 mg OD (preferred, lowest effective dose) for 3-6 months; reduce to 0.5 mg every other day in eGFR 30-60; AVOID in eGFR <30 (use option 2). (2) Low-dose NSAID (Naproxen 250 mg BD) if eGFR adequate. (3) Low-dose Prednisolone 5 mg OD — useful in CKD where colchicine and NSAIDs are problematic. (4) IL-1 inhibitors (Canakinumab, Anakinra) for refractory cases or those intolerant to conventional prophylaxis.'
        }
      ],
      calculations: [
        {
          name: 'Allopurinol Starting Dose for Ananth (CKD Stage 4, eGFR 22 mL/min)',
          formula: 'Allopurinol starting dose = eGFR (mL/min) × 1.5 mg/day (ACR recommendation for CKD patients)',
          explanation: 'Ananth\'s eGFR = 22 mL/min. Starting Allopurinol dose = 22 × 1.5 = 33 mg/day → round to NEAREST AVAILABLE TABLET = 50 mg OD (split 100 mg tablet). Titrate by 50 mg every 4 weeks based on serum urate response. MAX dose in CKD varies — monitor for Allopurinol Hypersensitivity Syndrome (AHS): severe skin rash (SJS/TEN), hepatitis, fever. HLA-B*58:01 carriers (South Asian, Thai, Han Chinese descent) have 100× higher risk — screen before prescribing. If HLA-B*58:01 positive: use FEBUXOSTAT 40 mg OD instead (no cross-reactivity). Febuxostat dose: 40 mg OD → increase to 80 mg OD if urate not at target after 2-4 weeks. No renal dose adjustment needed for eGFR >15 mL/min.'
        },
        {
          name: 'Colchicine Dose Adjustment for Ananth\'s eGFR (22 mL/min)',
          formula: 'eGFR >60: Full dose (0.5-0.6 mg TDS-QDS). eGFR 30-60: 0.5-0.6 mg BD max. eGFR 15-30: 0.5 mg OD only. eGFR <15/Dialysis: CONTRAINDICATED',
          explanation: 'Ananth\'s eGFR = 22 mL/min → Maximum safe colchicine dose = 0.5 mg ONCE. Do not repeat for at least 14 days. At this eGFR, colchicine clearance is severely reduced (colchicine is 50% renally eliminated; remainder via P-glycoprotein/CYP3A4). Accumulation causes: Neuromuscular toxicity (weakness, myopathy), Myelosuppression (pancytopenia), GI toxicity. PREFERRED treatment for Ananth\'s acute flare: Prednisolone 30 mg OD × 5 days (no renal dose adjustment needed, most practical and safe option in CKD Stage 4).'
        }
      ],
      reasoning: [
        {
          question_text: 'Why are NSAIDs absolutely avoided in CKD patients with acute gout?',
          rationale: 'In CKD patients, residual renal blood flow is critically dependent on renal prostaglandin (PGE2, PGI2) production, which vasodilates the afferent arteriole and maintains GFR. NSAIDs inhibit COX-1 and COX-2 → suppress prostaglandin synthesis → afferent arteriole vasoconstriction → acute-on-chronic kidney injury. In CKD Stage 4 (eGFR 15-29 mL/min): even 3-5 days of NSAID therapy can: (1) Drop eGFR by 10-30%, possibly pushing the patient to Stage 5 (dialysis threshold); (2) Cause sodium and water retention → fluid overload → heart failure exacerbation; (3) Hyperkalemia (via reduced aldosterone secretion and impaired K+ excretion); (4) Hypertension worsening (antagonizes antihypertensive medications). Additionally, NSAIDs compete for protein binding sites with Allopurinol metabolites, potentially increasing Allopurinol toxicity. PHARMACIST ROLE: Flag any NSAID order in a patient with eGFR <30 as a critical clinical intervention.'
        },
        {
          question_text: 'Why should urate-lowering therapy NOT be initiated during an acute gout flare?',
          rationale: 'Initiating or changing urate-lowering therapy (Allopurinol, Febuxostat) during an acute gout flare causes PARADOXICAL WORSENING of inflammation. Mechanism: Rapid changes in serum urate concentration destabilize existing urate crystal deposits in joint cartilage and synovium. As crystals partially dissolve, fragments are shed into the synovial fluid → triggering neutrophil activation → worsening the acute inflammatory cascade → prolonged or more severe flare. Clinical trial data: Starting Allopurinol during an acute flare prolongs attack duration without improving outcomes. EXCEPTION: Continue existing ULT without change if the patient was already on therapy before the flare (stopping causes even larger urate fluctuations). Begin NEW ULT only after complete flare resolution (≥2-4 weeks after symptom resolution).'
        },
        {
          question_text: 'What is Allopurinol Hypersensitivity Syndrome (AHS) and how does the pharmacist prevent it?',
          rationale: 'AHS (Allopurinol Hypersensitivity Syndrome) is a rare but potentially fatal drug reaction affecting 0.1-0.4% of Allopurinol users. Features: Severe skin reactions (toxic epidermal necrolysis, SJS, DRESS), hepatitis, eosinophilia, nephritis. Mortality: 20-25% in severe cases. RISK FACTORS: (1) HLA-B*58:01 allele: 100-fold increased risk in carriers — prevalent in Han Chinese (6.8%), Thai (8.0%), Korean (12%), Vietnamese (6-8%) and Indians (~1-2%); (2) Renal impairment (delayed oxypurinol clearance, the active metabolite); (3) Starting at high doses (>100 mg/day). PREVENTION STRATEGIES: (1) Screen HLA-B*58:01 before prescribing in high-risk ethnic groups; (2) Start at the LOWEST effective dose (50 mg OD in CKD, 100 mg OD in normal renal function); (3) Titrate slowly (50 mg increments every 4 weeks); (4) Counsel patient to IMMEDIATELY STOP if any rash develops; (5) Use Febuxostat as alternative if HLA-B*58:01 positive.'
        }
      ],
      mnemonics: [
        {
          name: 'Acute Gout Flare Management in CKD (STOP HURT)',
          concept: 'Acute gout treatment selection based on renal function — pharmacist CKD drug screening',
          bullets: [
            'S — Steroids (SAFEST in CKD): Prednisolone 30-40 mg OD × 5-7 days. Intra-articular if monoarticular (Triamcinolone 40 mg). No renal dose adjustment needed.',
            'T — Tophi (chronic tophaceous gout): Requires ULT. Target uric acid <5 mg/dL. Takes months of ULT to dissolve tophi.',
            'O — Only Colchicine with extreme caution in CKD: eGFR 15-30 = 0.5 mg ONCE only. eGFR <15 = CONTRAINDICATED.',
            'P — Probenecid (uricosuric): AVOID in CKD (eGFR <30) — works by blocking urate renal reabsorption, ineffective when GFR is low.',
            'H — HLA-B*58:01 screening before Allopurinol in Asian patients (Han Chinese, Thai, Korean, Indians).',
            'U — ULT (Urate-lowering therapy): START ONLY after acute flare fully resolved. Allopurinol: start 50 mg OD in CKD4, titrate monthly. Febuxostat 40-80 mg OD: no renal dose adjustment (but avoid in ASCVD).',
            'R — NSAID PROHIBITED: Absolutely avoid all NSAIDs (Indomethacin, Diclofenac, Naproxen) in eGFR <30 — acute-on-CKD risk.',
            'T — Target SUA <6 mg/dL (all gout) or <5 mg/dL (tophi). Monitor uric acid monthly until stable, then every 3-6 months.'
          ]
        }
      ]
    },
    tags: ['gout', 'CKD', 'NSAIDs', 'allopurinol', 'colchicine'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 26: COMMUNITY PHARMACY — SLE FLARE
  {
    id: 'seed-026',
    title: 'Lupus Nephritis Induction Management',
    subject_area: 'community_pharmacy',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Nisha Reddy',
      age: 29,
      sex: 'F',
      ward: 'Rheumatology / Nephrology',
      bed: '4',
      presenting_complaint: 'Facial butterfly rash, joint pains, proteinuria (3.5 g/day), and declining renal function. Diagnosed with Lupus Nephritis Class IV. Planning to start Mycophenolate Mofetil (MMF).',
      pmh: ['Systemic Lupus Erythematosus (4 years)'],
      medications: [
        { drug: 'Hydroxychloroquine', dose: '200 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Methylprednisolone IV pulse', dose: '500 mg', frequency: 'OD x 3 days', route: 'IV' },
        { drug: 'Mycophenolate Mofetil (to start)', dose: '1 g', frequency: 'BD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Urine Protein', value: '3.5', unit: 'g/day', reference: '<0.15', is_abnormal: true },
        { name: 'SCr', value: '1.6', unit: 'mg/dL', reference: '0.6-1.2', is_abnormal: true },
        { name: 'C3', value: '45', unit: 'mg/dL', reference: '90-180', is_abnormal: true },
        { name: 'Anti-dsDNA', value: 'Positive (high titer)', unit: '', reference: 'Negative', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-026-1', case_id: 'seed-026',
        question_text: 'What critical patient safety counseling must the pharmacist provide before starting Mycophenolate Mofetil (MMF) in this 29-year-old woman?',
        option_a: 'MMF causes hair loss; counsel on wigs',
        option_b: 'MMF is a teratogen (FDA Pregnancy Category X / REMS program). The patient MUST use two forms of effective contraception and have a negative pregnancy test before initiation. MMF must be stopped at least 6 weeks before planned conception.',
        option_c: 'MMF causes diabetes; monitor glucose',
        option_d: 'No special counseling is needed',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'MMF is a potent teratogen causing first-trimester pregnancy loss and congenital malformations (microtia, cleft palate, cardiac defects). It is subject to a REMS program requiring pregnancy testing, contraception counseling, and informed consent. Women of childbearing potential must use two reliable contraceptive methods.',
        subject_reference: 'Pharmacotherapeutics - Rheumatology / Safety',
      },
      {
        id: 'q-026-2', case_id: 'seed-026',
        question_text: 'What is the critical long-term monitoring required for Hydroxychloroquine therapy?',
        option_a: 'Annual liver biopsy',
        option_b: 'Baseline and annual ophthalmologic examination (retinal screening) for irreversible retinal toxicity (bull\'s eye maculopathy) after 5 years of use',
        option_c: 'Monthly chest X-ray',
        option_d: 'Weekly CBC',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Hydroxychloroquine accumulates in the retinal pigment epithelium and can cause irreversible retinopathy. Risk increases after 5 years of use, with cumulative doses >1000g, and with renal impairment. Annual retinal screening (OCT + visual fields) is recommended.',
        subject_reference: 'Pharmacotherapeutics - Rheumatology',
      },
      {
        id: 'q-026-3', case_id: 'seed-026',
        question_text: 'During the methylprednisolone IV pulse therapy, what electrolyte and metabolic parameter must be closely monitored?',
        option_a: 'Serum magnesium only',
        option_b: 'Blood glucose (steroid-induced hyperglycemia), potassium (hypokalemia from renal K+ wasting), and blood pressure',
        option_c: 'Serum calcium only',
        option_d: 'No monitoring needed for short courses',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'High-dose IV corticosteroids cause significant hyperglycemia (even in non-diabetics), hypokalemia (via mineralocorticoid effect), and hypertension. Blood glucose should be monitored Q6H during pulse therapy.',
        subject_reference: 'Pharmacotherapeutics - Corticosteroid Safety',
      },
    ],
    phases: [
      {
        id: 'seed-026-phase-1',
        title: 'Day 1: Lupus Nephritis Induction',
        description: 'Nisha is starting induction therapy with MMF and pulse steroids. Review REMS requirements and monitoring.',
        patient_snapshot: {
          name: 'Nisha Reddy', age: 29, sex: 'F', ward: 'Rheumatology', bed: '4',
          presenting_complaint: 'Lupus Nephritis Class IV flare.',
          pmh: ['SLE'],
          medications: [
            { drug: 'Mycophenolate Mofetil', dose: '1 g', frequency: 'BD', route: 'Oral' },
            { drug: 'Methylprednisolone pulse', dose: '500 mg', frequency: 'OD x3', route: 'IV' },
            { drug: 'Hydroxychloroquine', dose: '200 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Urine Protein', value: '3.5', unit: 'g/day', reference: '<0.15', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-026-1', case_id: 'seed-026',
            question_text: 'Critical MMF counseling for 29-year-old woman?',
            option_a: 'Hair loss counseling',
            option_b: 'Teratogen — 2 forms contraception, negative pregnancy test, stop 6 weeks before conception',
            option_c: 'Diabetes risk',
            option_d: 'None needed',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'MMF is Category X teratogen under REMS.',
            subject_reference: 'Pharmacotherapeutics - Safety',
          },
          {
            id: 'q-026-2', case_id: 'seed-026',
            question_text: 'Long-term HCQ monitoring?',
            option_a: 'Annual liver biopsy',
            option_b: 'Annual retinal screening after 5 years for irreversible retinopathy',
            option_c: 'Monthly CXR',
            option_d: 'Weekly CBC',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'HCQ causes irreversible bull\'s eye maculopathy.',
            subject_reference: 'Pharmacotherapeutics - Rheumatology',
          },
          {
            id: 'q-026-3', case_id: 'seed-026',
            question_text: 'Monitoring during methylprednisolone pulse?',
            option_a: 'Magnesium only',
            option_b: 'Blood glucose, potassium, and BP',
            option_c: 'Calcium only',
            option_d: 'Nothing for short courses',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Pulse steroids: hyperglycemia, hypokalemia, HTN.',
            subject_reference: 'Pharmacotherapeutics - Corticosteroid Safety',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases (2024) — Lupus Nephritis',
          organization: 'KDIGO',
          text: 'LUPUS NEPHRITIS (LN) TREATMENT: Class I-II (mild): Hydroxychloroquine (HCQ) + steroid taper only. Class III/IV (proliferative — most common, highest risk for ESRD): INDUCTION THERAPY — PULSE IV Methylprednisolone 500 mg daily × 3 days → Oral Prednisolone 0.5-1 mg/kg/day (max 60 mg OD) tapered over 6 months PLUS Mycophenolate Mofetil (MMF) 2-3 g/day (preferred per ALMS trial) OR low-dose IV Cyclophosphamide (Euro-Lupus protocol: 500 mg IV Q2 weeks × 6 doses). MAINTENANCE THERAPY (after 3-6 months of induction): MMF 1-2 g/day + low-dose steroids (Prednisolone 5-7.5 mg OD). Continue for MINIMUM 3-5 years. Class V (membranous LN): MMF preferred. BELIMUMAB (anti-BAFF monoclonal antibody) or VOCLOSPORIN approved as add-on to standard induction for Class III/IV LN (BLISS-LN trial 2020). HYDROXYCHLOROQUINE: Continue in ALL SLE patients (Class I-V) — reduces lupus flares by 50%, ESRD risk by 30%, cardiovascular events, and mortality. Monitor with annual ophthalmology exam for HCQ retinopathy (dose-dependent, cumulative >5 mg/kg/day or >10 years risk).'
        },
        {
          title: 'MMF (Mycophenolate Mofetil) — Mechanisms, Interactions, and REMS Program',
          organization: 'FDA / Transplant Society',
          text: 'MECHANISM: MMF is a prodrug hydrolyzed to Mycophenolic Acid (MPA). MPA selectively and reversibly inhibits inosine monophosphate dehydrogenase (IMPDH), blocking de novo purine synthesis. Lymphocytes (B and T cells) RELY EXCLUSIVELY on de novo purine synthesis (unlike other cells that can use the salvage pathway). Therefore, MMF selectively suppresses lymphocyte proliferation → reduces antibody production (B cells) and T-cell-mediated inflammation. FDA BLACK BOX WARNINGS for MMF: (1) EMBRYOFETAL TOXICITY: First-trimester pregnancy loss rate 45-49% and congenital malformations (external ear/auditory canal defects, facial anomalies, cardiac defects) in 23-27% of pregnancies. REMS PROGRAM: Providers, pharmacies, and patients must enroll. Negative pregnancy test required before starting. Two forms of contraception during therapy AND 6 weeks after stopping. (2) MALIGNANCY: Increased risk of skin cancers and lymphoma (immunosuppression). (3) SERIOUS INFECTIONS: Opportunistic infections including PML (JC virus). DRUG INTERACTIONS: Antacids (Al/Mg hydroxide) and proton pump inhibitors reduce MMF absorption by 25-30% — give MMF 2 hours before or 4 hours after. Cyclosporine reduces MPA enterohepatic recirculation → 40-50% lower MPA exposure.'
        },
        {
          title: 'Cyclophosphamide in Lupus Nephritis — Euro-Lupus vs NIH Protocol',
          organization: 'EULAR / ACR',
          text: 'CYCLOPHOSPHAMIDE PROTOCOLS FOR CLASS III/IV LN: NIH HIGH-DOSE PROTOCOL (traditional): 0.5-1 g/m² IV every month × 6 doses. Euro-Lupus LOW-DOSE PROTOCOL: 500 mg IV every 2 weeks × 6 doses (total 3 g). BLISS-LN trial (2020) showed Euro-Lupus protocol NON-INFERIOR to high-dose with fewer infections and gonadotoxicity. CYCLOPHOSPHAMIDE TOXICITY PREVENTION: (1) Haemorrhagic Cystitis: Acrolein (toxic metabolite) causes bladder inflammation → MESNA (sodium 2-mercaptoethane sulfonate) co-administration mandatory. Mesna: 20% of Cyclophosphamide dose IV immediately, then at 4h and 8h post-dose. Adequate hydration: ≥3L IV fluids on day of therapy. (2) Gonadotoxicity: Premature ovarian failure in women. Consider GnRH agonist (Leuprolide) co-administration for ovarian protection. Sperm cryopreservation in males before therapy. (3) Nausea/Vomiting (high emetogenicity): Ondansetron + Dexamethasone prophylaxis. (4) Alopecia: Reversible. (5) Secondary malignancy (bladder cancer, lymphoma): Long-term monitoring with urinalysis annually.'
        }
      ],
      calculations: [
        {
          name: 'MMF Dose and Renal Dose Adjustment for Sunita',
          formula: 'MMF induction: 2-3 g/day in divided doses (1g BD or 1.5g BD). MMF maintenance: 1-2 g/day. No specific dose reduction for mild CKD (SCr 1.65) but dose-reduce if eGFR <25.',
          explanation: 'Sunita\'s SCr = 1.65 mg/dL, eGFR (CKD-EPI for 34F): ≈ 42 mL/min. Induction MMF: 1g BD (2g/day total) — standard dose. No significant dose reduction needed at this eGFR. However, if SCr worsens: consider reduced MMF to 750 mg BD. Monitor: CBC weekly for 4 weeks (MMF causes dose-dependent leukopenia and anemia), then monthly. Target: WBC >3.5 × 10³/μL, Neutrophils >1.5 × 10³/μL. If WBC <3.0 or neutropenia develops: hold or reduce MMF. MPA trough level (TDM): Target 1-3.5 mg/L (optional but useful if response suboptimal or toxicity suspected).'
        },
        {
          name: 'Lupus Nephritis Activity Monitoring Parameters',
          formula: 'Disease activity: Anti-dsDNA antibody titer, C3/C4 complement levels, urine protein:creatinine ratio, serum creatinine',
          explanation: 'Sunita\'s baseline: Anti-dsDNA 180 IU/mL (↑), C3 45 mg/dL (↓), C4 6 mg/dL (↓↓), urine protein 3.4 g/24h, SCr 1.65 mg/dL. Response targets at 6-12 months: Anti-dsDNA declining toward <30 IU/mL, C3/C4 rising toward normal, proteinuria <0.5 g/24h (complete renal response = CR) or <0.5-3 g/24h with 25% SCr improvement (partial response = PR). If no CR/PR at 6 months: reassess biopsy, consider switching induction agent (e.g., add Voclosporin or Belimumab). Persistent active LN (no response at 12 months): Consider high-dose Cyclophosphamide (NIH protocol) or clinical trial enrollment.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Hydroxychloroquine (HCQ) continued even during active lupus nephritis requiring immunosuppression?',
          rationale: 'Multiple lines of evidence support continuing HCQ in ALL stages of SLE, even during active organ involvement: (1) LUPUS FLARE PREVENTION: HCQ reduces overall lupus flare frequency by 50% and time to first flare. Stopping HCQ triples the risk of flare within 6 months. (2) RENAL PROTECTION: Long-term HCQ reduces progression to ESRD by 30% and mortality in lupus nephritis patients. (3) ANTI-THROMBOTIC: HCQ has mild anti-platelet and anti-lipid effects — reduces thrombotic events (important as SLE patients have 3-4× increased cardiovascular risk). (4) ANTI-CANCER: Reduces lymphoma risk in SLE patients. MECHANISM: HCQ inhibits toll-like receptor (TLR) signaling by raising lysosomal/endosomal pH, blocking nucleic acid recognition (key driver of lupus autoimmunity). It is NOT an immunosuppressant — it modulates innate immune signaling without significant infection risk. MONITORING: Annual dilated ophthalmology exam for HCQ retinopathy (dose >5 mg/kg/day or >10 years cumulative exposure = higher risk). Standard safe dose: 5 mg/kg/day (400 mg for ≥80 kg; 200-300 mg for <60 kg).'
        },
        {
          question_text: 'Why does MMF require a REMS program and what must the pharmacist counsel Sunita about?',
          rationale: 'The MYCOPHENOLATE REMS PROGRAM was initiated by FDA in 2012 after post-marketing data confirmed a 45-49% rate of first-trimester pregnancy loss and 23% rate of congenital malformations in exposed pregnancies. COUNSELING POINTS for Sunita (34F, reproductive age): (1) PREGNANCY TESTING: Negative serum pregnancy test REQUIRED before starting MMF and at 8-10 days after starting. (2) CONTRACEPTION: Two forms of effective contraception during MMF therapy AND for 6 WEEKS after stopping. Acceptable: IUD + condom, oral contraceptive + barrier method, etc. (3) TIMING: Plan pregnancy only with specialist guidance — SLE can be managed during pregnancy using Hydroxychloroquine, Azathioprine, low-dose Prednisolone (all safer in pregnancy). (4) PATERNITY: Male partners of women of childbearing potential should use condoms during MMF therapy and 90 days after stopping (MMF affects sperm DNA). (5) REGISTRATION: Sunita must be enrolled in the MYCOPHENOLATE REMS program. Failure to enroll = dispensing refusal by pharmacy.'
        },
        {
          question_text: 'What is the role of complement levels (C3, C4) in monitoring lupus nephritis activity?',
          rationale: 'Complement proteins C3 and C4 are CONSUMED during active SLE through immune complex deposition: In active lupus nephritis, auto-antibodies (anti-dsDNA IgG) bind nuclear antigens → form circulating immune complexes → deposit in renal glomeruli → activate the CLASSICAL COMPLEMENT PATHWAY → consuming C1, C4, C2, and C3. The more active the disease, the more complement is consumed, and the LOWER the serum C3/C4 levels. Therefore: LOW C3/C4 + HIGH anti-dsDNA = ACTIVE DISEASE. As treatment suppresses autoimmunity: immune complex formation decreases → complement consumption decreases → C3/C4 RISE toward normal. C3/C4 normalization is a RESPONSE MARKER. PRACTICAL MONITORING: Check C3, C4, anti-dsDNA, CBC, SCr, and urinalysis monthly for first 3 months of induction, then every 3 months during maintenance. Sudden rise in anti-dsDNA + drop in C3/C4 (even before symptoms worsen) = IMPENDING FLARE → can trigger pre-emptive steroid increase.'
        }
      ],
      mnemonics: [
        {
          name: 'Lupus Nephritis Induction Regimen (CHIME)',
          concept: 'Key components of Class III/IV lupus nephritis treatment and monitoring',
          bullets: [
            'C — Corticosteroids: Pulse IV Methylprednisolone 500 mg × 3 days → Prednisolone 0.5-1 mg/kg/day PO (max 60 mg). Taper over 6 months. Cover with Pantoprazole + Calcium + Vitamin D.',
            'H — HydroxyChloroquine: Continue in ALL stages. 5 mg/kg/day. Annual eye exam for retinopathy. Reduces flares by 50%.',
            'I — Immunosuppressant (CHOICE): MMF 2-3 g/day preferred (ALMS trial) OR Euro-Lupus IV Cyclophosphamide 500 mg Q2 weeks × 6. Add Belimumab or Voclosporin for refractory or more severe cases.',
            'M — Monitoring: Anti-dsDNA (↓ = good), C3/C4 (↑ = good), urine protein:creatinine (target <0.5 g/g = CR), SCr, CBC, LFTs monthly.',
            'E — Embryofetal toxicity of MMF: REMS program. Mandatory 2-form contraception. Negative pregnancy test. Counsel every visit.'
          ]
        }
      ]
    },
    tags: ['lupus-nephritis', 'SLE', 'mycophenolate', 'cyclophosphamide', 'prednisolone'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 27: GIT/HEPATOLOGY — ACUTE PANCREATITIS
  {
    id: 'seed-027',
    title: 'Acute Pancreatitis Supportive Care',
    subject_area: 'git_hepatology',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Sunil Mehra',
      age: 48,
      sex: 'M',
      ward: 'Gastroenterology / Surgical ICU',
      bed: 'SICU-04',
      presenting_complaint: 'Severe epigastric pain radiating to the back, vomiting. Lipase 1200 U/L. Heavy alcohol use history. CT shows pancreatic necrosis.',
      pmh: ['Alcohol Use Disorder', 'Dyslipidemia'],
      medications: [
        { drug: 'IV Normal Saline 0.9%', dose: '250-500 mL/hr', frequency: 'Aggressive resuscitation', route: 'IV' },
        { drug: 'Morphine PCA', dose: '1-2 mg', frequency: 'Q10min PRN', route: 'IV' },
        { drug: 'Pantoprazole', dose: '40 mg', frequency: 'OD', route: 'IV' },
        { drug: 'Ondansetron', dose: '4 mg', frequency: 'Q8H PRN', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Lipase', value: '1200', unit: 'U/L', reference: '0-160', is_abnormal: true },
        { name: 'WBC', value: '16.5', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
        { name: 'Calcium', value: '7.8', unit: 'mg/dL', reference: '8.5-10.5', is_abnormal: true },
        { name: 'BUN', value: '32', unit: 'mg/dL', reference: '7-20', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-027-1', case_id: 'seed-027',
        question_text: 'Which IV fluid is recommended by guidelines for early aggressive resuscitation in acute pancreatitis?',
        option_a: 'Dextrose 5% at 50 mL/hr',
        option_b: 'Ringer\'s Lactate (Lactated Ringer\'s) is preferred over Normal Saline due to its anti-inflammatory properties and lower risk of hyperchloremic acidosis',
        option_c: 'Colloids (Hetastarch) at 500 mL/hr',
        option_d: 'Dextrose 10% for caloric support',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'AGA guidelines recommend Ringer\'s Lactate for aggressive fluid resuscitation (250-500 mL/hr for the first 12-24h) in acute pancreatitis. RL reduces systemic inflammatory response compared to NS and avoids hyperchloremic metabolic acidosis.',
        subject_reference: 'Pharmacotherapeutics - GI/Hepatology',
      },
      {
        id: 'q-027-2', case_id: 'seed-027',
        question_text: 'Is Morphine safe for pain control in acute pancreatitis? The surgeon is concerned about Sphincter of Oddi spasm.',
        option_a: 'Morphine is absolutely contraindicated; use only Diclofenac',
        option_b: 'Morphine IS safe for pancreatitis pain. The historic concern about Sphincter of Oddi spasm is NOT supported by clinical evidence. Adequate pain control is paramount, and opioids (including Morphine) are appropriate.',
        option_c: 'Only Meperidine (Pethidine) should be used for pancreatitis pain',
        option_d: 'Use only Paracetamol regardless of pain severity',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'The old teaching that Morphine worsens pancreatitis via Sphincter of Oddi spasm is a myth not supported by clinical trials. AGA/ACG guidelines state that opioids (including Morphine) are the mainstay of pain management in acute pancreatitis. Meperidine should be AVOIDED due to neurotoxic metabolite (normeperidine) accumulation.',
        subject_reference: 'Pharmacotherapeutics - GI/Hepatology',
      },
      {
        id: 'q-027-3', case_id: 'seed-027',
        question_text: 'When should enteral nutrition be initiated in acute pancreatitis, and via which route?',
        option_a: 'Keep the patient NPO for at least 2 weeks to "rest the pancreas"',
        option_b: 'Early enteral nutrition (within 24-48 hours) via oral or nasogastric/nasojejunal tube is recommended as it maintains gut mucosal integrity and reduces infectious complications',
        option_c: 'Start total parenteral nutrition (TPN) immediately',
        option_d: 'Wait until lipase normalizes before any feeding',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Early enteral nutrition within 24-48 hours is strongly recommended by AGA guidelines. Prolonged NPO status leads to gut mucosal atrophy, bacterial translocation, and increased risk of infected pancreatic necrosis. TPN is only used if enteral feeding is not tolerated.',
        subject_reference: 'Pharmacotherapeutics - GI/Hepatology',
      },
    ],
    phases: [
      {
        id: 'seed-027-phase-1',
        title: 'Day 1: Acute Pancreatitis',
        description: 'Sunil is admitted with severe acute pancreatitis. Review fluid choice and pain management.',
        patient_snapshot: {
          name: 'Sunil Mehra', age: 48, sex: 'M', ward: 'SICU', bed: 'SICU-04',
          presenting_complaint: 'Severe acute pancreatitis.',
          pmh: ['Alcohol Use Disorder'],
          medications: [
            { drug: 'IV NS 0.9%', dose: '250-500 mL/hr', frequency: 'Aggressive', route: 'IV' },
            { drug: 'Morphine PCA', dose: '1-2 mg', frequency: 'Q10min PRN', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Lipase', value: '1200', unit: 'U/L', reference: '0-160', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-027-1', case_id: 'seed-027',
            question_text: 'Preferred IV fluid for pancreatitis resuscitation?',
            option_a: 'D5W at 50 mL/hr',
            option_b: 'Ringer\'s Lactate — anti-inflammatory, avoids hyperchloremic acidosis',
            option_c: 'Hetastarch',
            option_d: 'D10%',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'RL preferred per AGA guidelines.',
            subject_reference: 'Pharmacotherapeutics - GI',
          },
          {
            id: 'q-027-2', case_id: 'seed-027',
            question_text: 'Is Morphine safe in pancreatitis?',
            option_a: 'Absolutely contraindicated',
            option_b: 'YES — Sphincter of Oddi spasm concern is a myth; Morphine is appropriate',
            option_c: 'Only Meperidine',
            option_d: 'Only Paracetamol',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Morphine is safe; avoid Meperidine (neurotoxic metabolite).',
            subject_reference: 'Pharmacotherapeutics - GI',
          },
          {
            id: 'q-027-3', case_id: 'seed-027',
            question_text: 'When to start enteral nutrition?',
            option_a: 'NPO for 2 weeks',
            option_b: 'Early enteral within 24-48 hours',
            option_c: 'TPN immediately',
            option_d: 'Wait for normal lipase',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Early enteral maintains gut integrity and reduces infection.',
            subject_reference: 'Pharmacotherapeutics - GI',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AGA Guidelines on Initial Management of Acute Pancreatitis (2018)',
          organization: 'American Gastroenterological Association (AGA)',
          text: 'ACUTE PANCREATITIS MANAGEMENT: FLUID RESUSCITATION — Goal-directed therapy with RINGER\'S LACTATE preferred over Normal Saline. EVIDENCE (Wu 2011 trial): RL reduces incidence of SIRS by 84% vs NS. Mechanism: NS causes hyperchloremic metabolic acidosis which worsens pancreatic inflammation; RL is pH-neutral and contains lactate (converted to bicarbonate, buffering acidosis). Rate: 250-500 mL/h for first 12-24h; then titrate to urine output >0.5 mL/kg/h, BUN declining, HR <120 bpm. Do NOT over-resuscitate: Excessive fluid (>4L in 24h) associated with abdominal compartment syndrome, ARDS, and mortality. PAIN MANAGEMENT: Adequate analgesia is essential (pain increases sympathetic drive → worsens pancreatic blood flow). IV Morphine or Fentanyl — historical concern about sphincter of Oddi spasm from Morphine is clinically insignificant in modern evidence. Fentanyl preferred in renal impairment (no active metabolite accumulation). NUTRITION: Early oral feeding as tolerated (within 24h) is SAFE and SUPERIOR to NPO + NG feeding. Soft diet, not clear liquids only. Reduces length of stay. Parenteral nutrition (TPN) is last resort. ANTIBIOTICS: NOT recommended prophylactically in sterile pancreatitis (including necrotizing pancreatitis without infection). Reserve antibiotics for CONFIRMED infected necrosis (clinical, CT evidence of gas in necrotic collection, or positive FNA culture).'
        },
        {
          title: 'REVISED ATLANTA CLASSIFICATION and Severity Stratification (2012)',
          organization: 'Revised Atlanta Classification Working Group',
          text: 'SEVERITY CLASSIFICATION: Mild AP: No organ failure, no local/systemic complications. Majority (80%) — full recovery expected. Moderately Severe AP: Transient organ failure (<48h) or local complications (peripancreatic fluid, acute necrotic collection). Severe AP: Persistent organ failure (>48h) — carry 30-50% mortality. ORGAN FAILURE DEFINITION (Marshall Scoring System): Respiratory (PaO2/FiO2 <300), Renal (SCr >1.9 mg/dL), Cardiovascular (SBP <90 mmHg despite fluid). PROGNOSTIC SCORES: BISAP Score (at admission): BUN >25 mg/dL (1pt), Impaired mental status (1pt), SIRS criteria met (1pt), Age >60 (1pt), Pleural effusion on imaging (1pt). Score ≥3 = severe AP, high risk for organ failure. RANSON\'S CRITERIA: 11 parameters (5 at admission, 6 at 48h). Score ≥3 = severe. HEMATOCRIT: Hemoconcentration (Hct >44% on admission) is a RED FLAG for severe AP — indicates significant third-space fluid losses → aggressive fluid resuscitation needed.'
        },
        {
          title: 'Metoclopramide Avoidance in GI/Hepatology — Pharmacist Alert',
          organization: 'Clinical Pharmacology / GI Consensus',
          text: 'METOCLOPRAMIDE IN PANCREATITIS: Clinical pharmacists reviewing pancreatitis cases must flag Metoclopramide as PROBLEMATIC: (1) Metoclopramide increases lower esophageal sphincter tone and promotes gastric emptying (prokinetic effect) — potentially beneficial for GERD but UNSAFE in pancreatitis-related ileus. In pancreatitis, GI motility is unpredictable — prokinetics can cause abdominal cramps and worsen ileus in some patients. (2) Metoclopramide D2 receptor antagonism causes EXTRAPYRAMIDAL SYMPTOMS (acute dystonia, akathisia) in up to 10% of patients — including oculogyric crises and torticollis — particularly dangerous if the patient has pre-existing neurological conditions. (3) In pancreatitis with severe pain, patients often receive Morphine — Metoclopramide DOES NOT reverse opioid-induced nausea effectively in this context. PREFERRED ANTIEMETICS in pancreatitis: Ondansetron 4 mg IV TDS (5-HT3 antagonist, no D2 activity, no EPS risk), Promethazine 12.5 mg IV/IM PRN (if Ondansetron insufficient), or adequate opioid analgesia itself reduces nausea by controlling pain.'
        }
      ],
      calculations: [
        {
          name: 'BISAP Score for Vikram\'s Acute Pancreatitis Severity',
          formula: 'BISAP: BUN>25 (1) + Impaired mental status (1) + SIRS criteria (≥2 of 4) (1) + Age>60 (1) + Pleural effusion (1). Score 0-5; ≥3 = severe',
          explanation: 'Vikram: BUN not specified — assume normal (0). Mental status: intact (0). SIRS criteria: HR, Temp, WBC 14.2k (WBC>12k = 1 SIRS criterion). Temperature and RR not specified — assume at least 1 SIRS criterion met = 1pt. Age 45 (0). Pleural effusion: not mentioned (0). BISAP estimate: 1-2 (MILD-MODERATE). CRP >150 mg/L at 48h = additional marker of severity. Management: Monitor closely for 48h, reassess. If CRP rises >150 or any organ dysfunction develops → consider ICU transfer. Current management: RL 250 mL/h, Fentanyl PCA for pain, early oral diet as tolerated, no antibiotics unless infection confirmed.'
        },
        {
          name: 'Fluid Resuscitation Rate Calculation for Acute Pancreatitis',
          formula: 'Initial rate: 250-500 mL/h Ringer\'s Lactate. Reassess at 6h: Target UO >0.5 mL/kg/h, BUN declining, HR <120, Hct 35-44%',
          explanation: 'Vikram (70 kg): Initial RL at 300 mL/h (moderate AP). Monitoring parameters: (1) Urine output: Target >0.5 mL/kg/h = >35 mL/h. If UO <35 mL/h at 6h: increase rate. (2) BUN: rising BUN suggests ongoing hemoconcentration → more fluid needed. (3) Heart rate: >120 bpm = tachycardia from volume depletion or pain. (4) Hematocrit: rising Hct (>44%) = hemoconcentration → aggressive resuscitation needed. Reduced rate to 150-200 mL/h after 24h if SIRS resolving and patient hemodynamically stable. AVOID: excessive fluids if pulmonary edema, heart failure, or abdominal compartment pressure >20 mmHg develops.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Ringer\'s Lactate preferred over Normal Saline in acute pancreatitis?',
          rationale: 'Normal Saline (0.9% NaCl) contains 154 mEq/L of BOTH sodium AND chloride. When large volumes are administered (as needed in pancreatitis resuscitation), the supraphysiological chloride load overwhelms the kidney\'s ability to excrete it → HYPERCHLOREMIC METABOLIC ACIDOSIS (non-anion gap). In pancreatitis, this iatrogenic acidosis: (1) Worsens pancreatic and systemic inflammation (acidosis activates NF-κB pathway, promoting cytokine release); (2) Impairs tissue oxygen delivery (Bohr effect); (3) Worsens coagulopathy (coagulation enzymes are pH-sensitive). Ringer\'s Lactate (RL) composition: Na 130, K 4, Ca 2.7, Cl 109, Lactate 28 mEq/L — physiologically balanced. Lactate is metabolized to bicarbonate in the liver → mildly alkalinizing. RCT (Wu et al. 2011): RL reduced SIRS criteria meeting from 84% (NS group) to 0% (RL group) at 24h. Meta-analysis confirms RL reduces organ failure and length of stay vs NS in acute pancreatitis.'
        },
        {
          question_text: 'Why are prophylactic antibiotics NOT recommended in necrotizing pancreatitis without proven infection?',
          rationale: 'Multiple high-quality RCTs (Isenmann 2004, Dellinger 2007, Jafri 2009) and meta-analyses have consistently shown that prophylactic antibiotics do NOT reduce: (1) Rate of infected pancreatic necrosis; (2) Surgical intervention rate; (3) Mortality; (4) Non-pancreatic infection rate. Furthermore, prophylactic antibiotics CAUSE: (1) Superinfection with resistant organisms (MRSA, VRE, Candida) — complicating subsequent management; (2) Drug toxicity (aminoglycoside nephrotoxicity, C. difficile from broad-spectrum antibiotics); (3) Drive antibiotic resistance. Mechanism why prophylaxis fails: Pancreatic necrosis infection occurs via gut bacterial translocation over days to weeks — no prophylactic agent maintains adequate tissue penetration in avascular necrotic tissue for this duration. WHEN to give antibiotics: ONLY when infection confirmed clinically (fever + CT showing gas in necrosis = 95% specific for infected necrosis) or by FNA culture. Antibiotic choice for infected necrosis: Imipenem 500 mg Q8H IV or Meropenem 1g Q8H IV (best pancreatic tissue penetration).'
        },
        {
          question_text: 'Why is early oral feeding preferred over NPO in acute pancreatitis?',
          rationale: 'The traditional "rest the pancreas" approach (NPO/NBM) was based on the idea that food stimulates pancreatic secretion → worsens autodigestion. However: (1) In established pancreatitis, pancreatic enzyme secretion is already MAXIMALLY SUPPRESSED by the ongoing inflammation — stopping food adds no additional benefit; (2) Prolonged NPO leads to intestinal mucosal atrophy → INCREASED gut bacterial translocation → higher risk of infected necrosis (the most dreaded complication); (3) Malnutrition develops rapidly in severe pancreatitis (high catabolic state) → impairs immune function and wound healing; (4) Early oral feeding maintains the gut mucosal barrier (enterocytes require luminal nutrition). EVIDENCE: Multiple RCTs show early oral feeding (within 24h) significantly reduces: infections (by 50%), length of stay, hospital costs, and need for surgical intervention. Soft solid diet is as safe as clear liquids only. NPO should be reserved only for patients with: severe vomiting, ileus, or respiratory compromise requiring intubation.'
        }
      ],
      mnemonics: [
        {
          name: 'Acute Pancreatitis Management (F-A-N-S-B)',
          concept: 'Core clinical pharmacy interventions in acute pancreatitis — evidence-based',
          bullets: [
            'F — FLUIDS: Ringer\'s Lactate 250-500 mL/h (NOT Normal Saline). Target UO >0.5 mL/kg/h. BUN declining. Hct 35-44%. Reassess every 6h.',
            'A — ANALGESIA: Fentanyl IV (preferred) or Morphine IV. Adequate pain control reduces sympathetic stress and improves pancreatic blood flow. Avoid NSAIDs (prostaglandin inhibition worsens pancreatic ischemia). Avoid Metoclopramide (no EPS risk with Ondansetron).',
            'N — NUTRITION: Early oral feeding within 24h if tolerated. Soft diet (not just clear liquids). Enteral nutrition via NG/NJ tube if oral not tolerated in 48-72h. TPN = last resort (highest infection risk).',
            'S — SEVERITY ASSESSMENT: BISAP score at admission. CRP at 48h (>150 = severe). Contrast CT at 72h if deteriorating or BISAP ≥3 (for necrosis assessment).',
            'B — BACTERIA (Antibiotics): ONLY for CONFIRMED infected necrosis. CT + clinical signs + positive FNA culture. Carbapenems (Meropenem 1g Q8H) for best pancreatic penetration. NO prophylactic antibiotics.'
          ]
        }
      ]
    },
    tags: ['pancreatitis', 'ringers-lactate', 'fluid-resuscitation', 'fentanyl', 'pain-management'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 28: ENDOCRINE — THYROID STORM
  {
    id: 'seed-028',
    title: 'Thyroid Storm Emergency Treatment',
    subject_area: 'endocrine',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Kavita Sharma',
      age: 38,
      sex: 'F',
      ward: 'Endocrinology ICU',
      bed: 'EICU-01',
      presenting_complaint: 'Severe agitation, hyperthermia (40.2°C), tachycardia (HR 160), and confusion. History of Graves\' disease with poor medication compliance. Precipitated by urinary tract infection.',
      pmh: ['Graves\' Disease (non-compliant with Carbimazole)'],
      medications: [
        { drug: 'Propylthiouracil (PTU)', dose: '200 mg', frequency: 'Q4H', route: 'Oral/NG' },
        { drug: 'Lugol\'s Iodine (SSKI)', dose: '5 drops', frequency: 'Q8H', route: 'Oral' },
        { drug: 'Propranolol', dose: '60 mg', frequency: 'Q6H', route: 'Oral' },
        { drug: 'Hydrocortisone', dose: '100 mg', frequency: 'Q8H', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Free T4', value: '7.8', unit: 'ng/dL', reference: '0.8-1.8', is_abnormal: true },
        { name: 'TSH', value: '<0.01', unit: 'mIU/L', reference: '0.5-4.5', is_abnormal: true },
        { name: 'HR', value: '160', unit: 'bpm', reference: '60-100', is_abnormal: true },
        { name: 'Temp', value: '40.2', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-028-1', case_id: 'seed-028',
        question_text: 'Why must PTU (Propylthiouracil) be given AT LEAST 1 hour BEFORE Lugol\'s Iodine in thyroid storm?',
        option_a: 'PTU takes longer to dissolve',
        option_b: 'PTU must first block thyroid hormone synthesis (by inhibiting TPO). If iodine is given before PTU, the thyroid gland will use the iodine substrate to synthesize MORE thyroid hormone, worsening the storm.',
        option_c: 'PTU and iodine react chemically if given together',
        option_d: 'The sequence does not matter',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'In thyroid storm, PTU must be given first to block the thyroid peroxidase (TPO) enzyme. Only after synthesis is blocked should iodine be given — iodine then acts via the Wolff-Chaikoff effect to inhibit release of preformed hormone. Giving iodine before PTU provides raw material for MORE hormone synthesis.',
        subject_reference: 'Pharmacotherapeutics - Endocrine',
      },
      {
        id: 'q-028-2', case_id: 'seed-028',
        question_text: 'Why is Hydrocortisone included in the thyroid storm protocol?',
        option_a: 'To treat the underlying UTI',
        option_b: 'Thyroid storm increases cortisol metabolism, causing relative adrenal insufficiency. Hydrocortisone also inhibits peripheral T4→T3 conversion.',
        option_c: 'To reduce fever directly',
        option_d: 'To prevent allergic reactions to PTU',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'The hypermetabolic state of thyroid storm accelerates cortisol clearance, creating relative adrenal insufficiency. Additionally, Hydrocortisone inhibits the peripheral conversion of T4 to the more active T3 by deiodinase enzymes, helping to reduce thyroid hormone activity.',
        subject_reference: 'Pharmacotherapeutics - Endocrine',
      },
      {
        id: 'q-028-3', case_id: 'seed-028',
        question_text: 'Why is PTU preferred over Carbimazole/Methimazole in thyroid storm specifically?',
        option_a: 'PTU has fewer side effects than Carbimazole',
        option_b: 'PTU has a unique dual mechanism: it blocks TPO-mediated hormone synthesis AND inhibits peripheral T4→T3 conversion. Carbimazole only blocks synthesis.',
        option_c: 'PTU is available IV while Carbimazole is not',
        option_d: 'No difference between the two',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'PTU\'s advantage in thyroid storm is its additional action of inhibiting type 1 deiodinase (D1), which converts T4 to the more potent T3. This dual action makes it uniquely suited for the acute crisis. Outside of thyroid storm, Carbimazole/Methimazole is preferred due to PTU\'s hepatotoxicity risk.',
        subject_reference: 'Pharmacotherapeutics - Endocrine',
      },
    ],
    phases: [
      {
        id: 'seed-028-phase-1',
        title: 'Hour 1: Thyroid Storm',
        description: 'Kavita presents with thyroid storm. Review the drug sequencing protocol.',
        patient_snapshot: {
          name: 'Kavita Sharma', age: 38, sex: 'F', ward: 'EICU', bed: 'EICU-01',
          presenting_complaint: 'Thyroid storm: hyperthermia, tachycardia, agitation.',
          pmh: ['Graves\' Disease'],
          medications: [
            { drug: 'PTU', dose: '200 mg', frequency: 'Q4H', route: 'Oral/NG' },
            { drug: 'Lugol\'s Iodine', dose: '5 drops', frequency: 'Q8H', route: 'Oral' },
            { drug: 'Hydrocortisone', dose: '100 mg', frequency: 'Q8H', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Free T4', value: '7.8', unit: 'ng/dL', reference: '0.8-1.8', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-028-1', case_id: 'seed-028',
            question_text: 'Why must PTU be given BEFORE iodine?',
            option_a: 'PTU dissolves slowly',
            option_b: 'PTU blocks synthesis first; iodine given early provides substrate for MORE hormone',
            option_c: 'Chemical reaction',
            option_d: 'Sequence doesn\'t matter',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'PTU blocks TPO first, then iodine blocks release.',
            subject_reference: 'Pharmacotherapeutics - Endocrine',
          },
          {
            id: 'q-028-2', case_id: 'seed-028',
            question_text: 'Why Hydrocortisone in thyroid storm?',
            option_a: 'UTI treatment',
            option_b: 'Relative adrenal insufficiency + inhibits T4→T3 conversion',
            option_c: 'Antipyretic',
            option_d: 'PTU allergy prevention',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Cortisol clearance increased; also blocks peripheral T4→T3.',
            subject_reference: 'Pharmacotherapeutics - Endocrine',
          },
          {
            id: 'q-028-3', case_id: 'seed-028',
            question_text: 'Why PTU over Carbimazole in thyroid storm?',
            option_a: 'Fewer side effects',
            option_b: 'PTU also blocks peripheral T4→T3 conversion (dual mechanism)',
            option_c: 'PTU available IV',
            option_d: 'No difference',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'PTU blocks both synthesis and peripheral conversion.',
            subject_reference: 'Pharmacotherapeutics - Endocrine',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ATA Guidelines for the Management of Thyroid Storm (2016)',
          organization: 'American Thyroid Association (ATA)',
          text: 'THYROID STORM (Thyrotoxic Crisis): A life-threatening endocrine emergency. BURCH-WARTOFSKY POINT SCALE (BWPS): Points for temperature (37.2-37.7°C = 5, >40°C = 30), CNS effects (agitation = 10, psychosis = 20, coma = 30), GI (diarrhea/vomiting = 10, jaundice = 20), HR (100-109 = 5, >140 = 25), Heart failure (mild = 5, refractory = 25), precipitating event (yes = 10). Score ≥45 = thyroid storm; 25-44 = impending storm. KAVITA\'S BWPS: Temp 103.8°F = 39.9°C = 25pts + HR 148 bpm = 25pts + Agitation/delirium = 20pts + No GI (0pts) = 70pts → CONFIRMED THYROID STORM. TREATMENT SEQUENCE — CRITICAL TIMING (block → wait → block release → beta-block → supportive): (1) PTU 500-1000 mg PO/NG loading → 200-250 mg Q4H. Mechanism: Blocks thyroid peroxidase (new hormone synthesis) + blocks peripheral T4→T3 conversion. (2) Wait 1-2 HOURS after PTU. (3) Lugol\'s Iodine (SSKI) 5 drops TDS or KI 500 mg BD — blocks hormone RELEASE (Wolff-Chaikoff effect). Given AFTER PTU to prevent Iodine being used as substrate for new hormone synthesis. (4) Propranolol 60-80 mg oral Q4H or IV 0.5-1 mg slow push for HR control. Blocks beta-adrenergic effects of thyroid hormones AND inhibits peripheral T4→T3 conversion. (5) Hydrocortisone 100 mg IV Q8H — blocks T4→T3 peripheral conversion + treats relative adrenal insufficiency. (6) COOLING: Paracetamol (NOT Aspirin — displaces T4 from TBG, worsening storm); cooling blanket.'
        },
        {
          title: 'Wolff-Chaikoff Effect and Escape — Iodine Use in Thyroid Storm',
          organization: 'Clinical Endocrinology / Thyroidology',
          text: 'WOLFF-CHAIKOFF EFFECT: Large doses of inorganic iodine TRANSIENTLY suppress thyroid hormone synthesis and release — the gland temporarily becomes unable to organify iodine. This effect is used therapeutically in thyroid storm and pre-operative preparation for thyroidectomy. MECHANISM: High intrathyroidal iodine concentration blocks thyroid peroxidase activity → blocks organification of iodide into thyroglobulin → suppresses T3/T4 synthesis. Duration: 10-14 days (escape phenomenon begins after 10-14 days as the gland adapts by downregulating iodine uptake transporters). CRITICAL SAFETY RULE: Iodine MUST be given AFTER antithyroid drugs (PTU or Carbimazole): If iodine is given first, the gland uses the large iodine load as substrate for massive new hormone synthesis → WORSENS thyroid storm. In clinical practice: give PTU at time 0 → give Iodine at time 0+1 to 2 hours. ROUTE: Oral (Lugol\'s solution 5-10 drops TDS = ~130 mg iodine/day) OR NG tube. If oral/NG unavailable: IV sodium iodide (not available in all countries) or rectal administration. CHOLESTYRAMINE: As adjunct — binds thyroid hormones in GI tract, reducing enterohepatic recirculation → faster T3/T4 reduction.'
        },
        {
          title: 'PTU vs Carbimazole/Methimazole in Thyroid Storm — Choice and Pharmacology',
          organization: 'ATA / ETA / Clinical Endocrinology',
          text: 'PTU (Propylthiouracil) is PREFERRED over Carbimazole/Methimazole in thyroid storm due to its DUAL mechanism: (1) Blocks thyroid peroxidase (TPO): Prevents organification of iodide into thyroglobulin → blocks de novo T3/T4 synthesis. This is also Carbimazole\'s mechanism (equivalent efficacy for this step). (2) UNIQUE TO PTU: Inhibits TYPE 1 DEIODINASE in peripheral tissues — the enzyme that converts T4 (relatively inactive) to T3 (3-4× more potent, main active form). This peripheral conversion blockade is CRITICAL in thyroid storm where high circulating T3 drives the life-threatening adrenergic symptoms. Carbimazole/Methimazole do NOT significantly inhibit peripheral T4→T3 conversion. ONSET of action: Both PTU and Carbimazole begin blocking new hormone synthesis within 1-2 hours, but existing preformed thyroid hormone (stored in follicles) continues to be released for days. Hence the complementary role of iodine (blocks release) and steroids/Propranolol (blocks peripheral conversion and adrenergic effects). DOSING: PTU loading 500-1000 mg PO → 200-250 mg Q4H until euthyroid. Once stable (usually 1-2 weeks): transition to Carbimazole for long-term maintenance (better adherence — once or twice daily dosing, less hepatotoxicity than PTU with chronic use).'
        }
      ],
      calculations: [
        {
          name: 'Burch-Wartofsky Point Scale (BWPS) Score for Kavita',
          formula: 'Temperature: 37.2-37.7°C=5, 37.8-38.3°C=10, 38.4-38.8°C=15, 38.9-39.4°C=20, 39.5-39.9°C=25, ≥40°C=30. CNS: absent=0, mild(agitation)=10, moderate(delirium)=20, severe(coma)=30. HR: 90-109=5, 110-119=10, 120-129=15, 130-139=20, ≥140=25. GI: absent=0, mod=10, jaundice=20. CHF: absent=0, mild=5, mod=10, severe=20, refractory=25. Precipitant: absent=0, present=10',
          explanation: 'Kavita: Temperature 103.8°F = 39.9°C → 25pts. HR 148 bpm → 25pts. CNS: delirium/severe agitation → 20pts. GI: nausea/vomiting likely → 10pts. CHF: absent (no pulmonary edema) → 0pts. Precipitant (non-compliance with Carbimazole) → 10pts. TOTAL: 25+25+20+10+10 = 90 pts → CONFIRMED THYROID STORM (≥45). Management priority: Confirm PTU given, Iodine scheduled 1-2h later, Propranolol IV for HR control, Hydrocortisone IV, Paracetamol + cooling for fever. AVOID ASPIRIN (displaces T4 from TBG → transiently worsens storm).'
        },
        {
          name: 'Propranolol IV Dose for Tachycardia Control in Thyroid Storm',
          formula: 'Propranolol IV: 0.5-1 mg slow IV push over 5 min. Repeat every 5-10 min to target HR <100 bpm. Max single dose 10 mg. Oral: 60-80 mg Q4-6H',
          explanation: 'Kavita: HR 148 bpm, BP 142/88 (from case). IV Propranolol 0.5 mg slow push. Recheck HR in 5 min. If HR still >120: repeat 0.5 mg. Target: HR <100 bpm. Once oral route possible: switch to oral Propranolol 60-80 mg Q4-6H (equivalent to ~10-20 mg IV/day). CAUTION: Propranolol is CONTRAINDICATED in: Acute bronchospasm/COPD (use Cardioselective beta-blocker Atenolol 25-50 mg OD instead), Acute decompensated heart failure, 2nd/3rd degree AV block, Severe bradycardia. If Propranolol contraindicated: Diltiazem IV (non-DHP calcium channel blocker) for rate control. Propranolol ALSO inhibits peripheral T4→T3 conversion — contributing therapeutically beyond just rate control.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why must Iodine (Lugol\'s) be given AFTER and not BEFORE the antithyroid drug in thyroid storm?',
          rationale: 'This timing rule (antithyroid drug FIRST → iodine AFTER 1-2h) is one of the most critical sequencing rules in clinical pharmacy. The thyroid gland uses iodine as the primary substrate for thyroid hormone (T3/T4) synthesis: iodide + thyroglobulin → organification by thyroid peroxidase → thyroid hormone. If Lugol\'s iodine is administered WITHOUT prior antithyroid drug blockade: The gland receives a large iodine load → dramatically accelerates hormone synthesis → thyroid storm WORSENS. Antithyroid drugs (PTU/Carbimazole) FIRST inhibit thyroid peroxidase, blocking organification → the subsequent iodine load CANNOT be used as substrate for synthesis. Iodine then exerts its Wolff-Chaikoff effect (blocks hormone release) SAFELY. The window: PTU begins blocking peroxidase within 1 hour → Iodine given at 1-2h post-PTU. This is testable pharmacist clinical decision-making on the wards.'
        },
        {
          question_text: 'Why is Aspirin contraindicated in thyroid storm despite being an antipyretic?',
          rationale: 'The fever of thyroid storm requires antipyretic therapy. Paracetamol is SAFE and preferred. Aspirin (salicylates) must be AVOIDED because: Thyroid hormones (T3/T4) circulate largely protein-bound to Thyroid Binding Globulin (TBG), Thyroid Binding Pre-Albumin, and Albumin. Bound hormone is inactive; only FREE hormone is physiologically active. Aspirin and high-dose salicylates COMPETE with T3/T4 for TBG binding sites (salicylates have higher TBG affinity than T4). When aspirin displaces T4 from TBG: (1) Free T4 levels surge transiently; (2) Free T3 levels surge (from T4→T3 conversion); (3) Already maximal adrenergic stimulation worsens significantly; (4) Potentially fatal cardiovascular deterioration. This is a pharmacist-critical drug safety alert: a well-meaning nurse giving "aspirin for fever" to a thyroid storm patient could be fatal.'
        },
        {
          question_text: 'Why does Hydrocortisone play multiple therapeutic roles in thyroid storm?',
          rationale: 'Hydrocortisone 100 mg IV Q8H provides three simultaneous therapeutic benefits in thyroid storm: (1) PERIPHERAL CONVERSION INHIBITION: Glucocorticoids inhibit type 1 and type 2 deiodinase enzymes → reduce peripheral conversion of T4 to the more active T3 by 30-50%. This is additive to Propranolol\'s T4→T3 inhibition. (2) RELATIVE ADRENAL INSUFFICIENCY: Thyroid storm creates a state of HYPERMETABOLISM — dramatically increasing cortisol clearance rate. The adrenal glands cannot keep up with the demand → relative adrenal insufficiency develops (cortisol levels may appear normal but are functionally insufficient for the degree of physiological stress). Hydrocortisone replacement prevents adrenal crisis superimposed on thyroid storm. (3) ANTI-INFLAMMATORY: Glucocorticoids reduce the systemic inflammatory cascade that accompanies thyroid storm, potentially stabilizing the blood-brain barrier and reducing CNS manifestations. DOSE AND DURATION: Continue Hydrocortisone 100 mg Q8H until clinical improvement (HR <100, temperature normalized, mental status improving), then taper over 1-2 weeks.'
        }
      ],
      mnemonics: [
        {
          name: 'Thyroid Storm Treatment Sequence (B-P-I-P-H-S)',
          concept: 'Critical treatment sequence for thyroid storm — MUST follow this ORDER',
          bullets: [
            'B — BURCH-WARTOFSKY score: Score ≥45 = confirmed storm. Confirm diagnosis and call ICU.',
            'P (1st) — PTU loading: 500-1000 mg PO/NG IMMEDIATELY. Then 200-250 mg Q4H. Blocks TPO (synthesis) AND peripheral T4→T3 conversion. MUST come first.',
            'I — IODINE (wait 1-2h after PTU): Lugol\'s 5 drops TDS or SSKI 500 mg BD. Blocks hormone RELEASE (Wolff-Chaikoff). Fatal if given before PTU.',
            'P (2nd) — PROPRANOLOL: 60-80 mg PO Q4-6H or IV 0.5-1 mg slow push. Blocks adrenergic effects + T4→T3 conversion. If COPD: use Diltiazem. Avoid if severe HF.',
            'H — HYDROCORTISONE: 100 mg IV Q8H. Inhibits peripheral T4→T3 + treats relative adrenal insufficiency.',
            'S — SUPPORTIVE CARE: Paracetamol (NOT aspirin) + cooling blankets for fever. IV fluid resuscitation (high insensible losses). Treat precipitant (infection, surgery, contrast → workup). ICU monitoring.',
            'AVOID: Aspirin (displaces T4 from TBG → worsens storm). Iodine before ATD (provides substrate for synthesis). Delay (every hour worsens mortality).'
          ]
        }
      ]
    },
    tags: ['thyroid-storm', 'PTU', 'lugols-solution', 'propranolol', 'hydrocortisone'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 29: NEPHROLOGY — PD PERITONITIS
  {
    id: 'seed-029',
    title: 'Peritoneal Dialysis Peritonitis',
    subject_area: 'nephrology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Devi Prasad',
      age: 56,
      sex: 'M',
      ward: 'Nephrology',
      bed: '6',
      presenting_complaint: 'Cloudy peritoneal dialysis effluent, abdominal pain, and fever (38.5°C). Has been on CAPD for 2 years. Effluent WBC > 100 cells/mm3 with >50% neutrophils.',
      pmh: ['ESRD on CAPD (2 years)', 'Hypertension', 'Type 2 DM'],
      medications: [
        { drug: 'Cefazolin IP', dose: '1 g', frequency: 'One exchange daily (loading)', route: 'Intraperitoneal' },
        { drug: 'Ceftazidime IP', dose: '1 g', frequency: 'One exchange daily (loading)', route: 'Intraperitoneal' },
        { drug: 'Amlodipine', dose: '10 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Insulin Glargine', dose: '18 units', frequency: 'ON', route: 'SC' },
      ],
      allergies: [],
      labs: [
        { name: 'PD Effluent WBC', value: '450', unit: 'cells/mm3', reference: '<100', is_abnormal: true },
        { name: 'Effluent Gram Stain', value: 'Gram-positive cocci', unit: '', reference: 'No organisms', is_abnormal: true },
        { name: 'Effluent Culture', value: 'Pending', unit: '', reference: 'No growth', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-029-1', case_id: 'seed-029',
        question_text: 'What is the correct method of intraperitoneal (IP) antibiotic administration in CAPD peritonitis?',
        option_a: 'Add antibiotics to a short 30-minute dwell exchange and drain immediately',
        option_b: 'Add antibiotics to the dialysate bag and allow a minimum dwell time of 6 hours to ensure adequate peritoneal drug exposure and systemic absorption',
        option_c: 'Give antibiotics IV only; IP route is not effective',
        option_d: 'Inject antibiotics directly into the peritoneal catheter without dialysate',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Per ISPD (International Society for Peritoneal Dialysis) guidelines, IP antibiotics must dwell for at least 6 hours to achieve therapeutic peritoneal and systemic levels. For continuous dosing (preferred), antibiotics are added to every exchange. For intermittent dosing, the antibiotic is added to one long-dwell exchange daily.',
        subject_reference: 'Pharmacotherapeutics - Nephrology',
      },
      {
        id: 'q-029-2', case_id: 'seed-029',
        question_text: 'The Gram stain shows Gram-positive cocci. What empiric IP antibiotic covers this, and what should also be started empirically to cover Gram-negatives?',
        option_a: 'Vancomycin IP only',
        option_b: 'Cefazolin (or Vancomycin) for Gram-positives + Ceftazidime (or Gentamicin) for Gram-negatives — dual coverage as per ISPD guidelines until culture results',
        option_c: 'Oral Amoxicillin only',
        option_d: 'IV Meropenem only',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'ISPD guidelines recommend empiric dual coverage: a first-generation cephalosporin (Cefazolin) or Vancomycin for Gram-positives, AND a third-generation cephalosporin (Ceftazidime) or aminoglycoside (Gentamicin) for Gram-negatives. Therapy is then narrowed based on culture and sensitivity.',
        subject_reference: 'Pharmacotherapeutics - Nephrology',
      },
      {
        id: 'q-029-3', case_id: 'seed-029',
        question_text: 'Devi is on insulin for diabetes. How does peritoneal dialysis affect his glucose control?',
        option_a: 'PD has no effect on glucose',
        option_b: 'PD dialysate contains dextrose (1.5-4.25%) which is absorbed systemically, causing significant hyperglycemia. Insulin doses often need to be increased, and some patients add insulin directly to the PD bags.',
        option_c: 'PD causes hypoglycemia requiring dose reduction',
        option_d: 'Only affects glucose if using icodextrin-based solutions',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Standard PD solutions contain dextrose (glucose) as the osmotic agent. Approximately 60-80% of this glucose is absorbed systemically during each dwell, contributing 300-600 extra calories per day and worsening glycemic control. The pharmacist should monitor blood glucose closely and recommend insulin dose adjustments.',
        subject_reference: 'Pharmacotherapeutics - Nephrology / Endocrine',
      },
    ],
    phases: [
      {
        id: 'seed-029-phase-1',
        title: 'Day 1: PD Peritonitis',
        description: 'Devi presents with cloudy PD effluent. Review IP antibiotic administration and glucose concerns.',
        patient_snapshot: {
          name: 'Devi Prasad', age: 56, sex: 'M', ward: 'Nephrology', bed: '6',
          presenting_complaint: 'CAPD peritonitis with cloudy effluent.',
          pmh: ['ESRD on CAPD', 'T2DM'],
          medications: [
            { drug: 'Cefazolin IP', dose: '1 g', frequency: 'One exchange daily', route: 'IP' },
            { drug: 'Ceftazidime IP', dose: '1 g', frequency: 'One exchange daily', route: 'IP' },
          ],
          allergies: [],
          labs: [
            { name: 'PD Effluent WBC', value: '450', unit: 'cells/mm3', reference: '<100', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-029-1', case_id: 'seed-029',
            question_text: 'IP antibiotic dwell time requirement?',
            option_a: '30-minute short exchange',
            option_b: 'Minimum 6 hours dwell for adequate absorption',
            option_c: 'IV route only',
            option_d: 'Direct catheter injection',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Min 6 hours per ISPD guidelines.',
            subject_reference: 'Pharmacotherapeutics - Nephrology',
          },
          {
            id: 'q-029-2', case_id: 'seed-029',
            question_text: 'Empiric PD peritonitis coverage?',
            option_a: 'Vancomycin only',
            option_b: 'Cefazolin + Ceftazidime (dual GP/GN coverage per ISPD)',
            option_c: 'Oral Amoxicillin',
            option_d: 'IV Meropenem',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'ISPD: dual coverage until cultures.',
            subject_reference: 'Pharmacotherapeutics - Nephrology',
          },
          {
            id: 'q-029-3', case_id: 'seed-029',
            question_text: 'How does PD affect glucose?',
            option_a: 'No effect',
            option_b: 'Dextrose in dialysate is absorbed, causing hyperglycemia — adjust insulin',
            option_c: 'Causes hypoglycemia',
            option_d: 'Only with icodextrin',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Dextrose PD solutions add 300-600 kcal/day.',
            subject_reference: 'Pharmacotherapeutics - Nephrology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'ISPD Guidelines for Peritoneal Dialysis-Related Peritonitis (2022)',
          organization: 'International Society for Peritoneal Dialysis (ISPD)',
          text: 'PD PERITONITIS DIAGNOSIS: Cloudy PD effluent (most sensitive sign) + effluent WBC ≥100 cells/μL with ≥50% neutrophils + positive effluent culture. Two of three criteria = peritonitis. EMPIRIC TREATMENT (before cultures): Must cover BOTH gram-positive (Staph, Strep, Enterococcus) and gram-negative organisms INTRAPERITONEALLY. Gram-positive coverage: Vancomycin 15-30 mg/kg IP (intraperitoneal) every 5-7 days (dosing interval based on residual renal function and serum vancomycin trough levels). OR Cefazolin 15-20 mg/kg IP Q24H. Gram-negative coverage: Ceftazidime 15-20 mg/kg IP Q24H OR Gentamicin 0.6 mg/kg IP Q24H. ROUTE: Intraperitoneal (IP) route is MANDATORY — systemic IV antibiotics achieve inadequate peritoneal concentrations. DURATION: 14 days minimum (21 days for Staph aureus, Pseudomonas, fungi). CATHETER REMOVAL: Indicated if: fungal peritonitis (ALWAYS), refractory peritonitis at 5 days, relapsing peritonitis, Mycobacterial infection. Prophylaxis: Intranasal Mupirocin BD + exit-site Mupirocin OD for Staph aureus exit-site infections (MRSA prevention).'
        },
        {
          title: 'Vancomycin IP Dosing in PD Peritonitis — TDM and Redosing',
          organization: 'ISPD / Clinical Pharmacy',
          text: 'INTRAPERITONEAL VANCOMYCIN PHARMACOKINETICS: Vancomycin given intraperitoneally is absorbed systemically (50-80% bioavailability from peritoneum). After IP Vancomycin: Serum levels rise over 6-12h (absorption from peritoneum into systemic circulation) → distributes into tissue → excreted in residual urine and dialysate. DOSING: Initial dose: 15-30 mg/kg IP in the LONG DWELL bag (overnight, 6-12h dwell — maximizes absorption). Redosing: Check serum Vancomycin trough before each subsequent IP dose. Redose when trough <15 mcg/mL (typically every 5-7 days in anuric patients — these patients rely solely on dialysate clearance of vancomycin). TARGET SERUM LEVEL: Trough 15-20 mcg/mL for gram-positive peritonitis (AUC/MIC target 400-600 for Staph aureus). MONITORING: Serum Vancomycin 4-6h post-dose (peak), and before next dose (trough). Ototoxicity monitoring (tinnitus, vertigo) — especially with concurrent loop diuretics. CEFTAZIDIME for gram-negatives: No TDM required; 15-20 mg/kg IP Q24H in each exchange (can be mixed with Vancomycin in same bag — COMPATIBLE).'
        },
        {
          title: 'Drug Compatibility for Intraperitoneal Antibiotic Mixing',
          organization: 'ISPD / Pharmacy Compounding Standards',
          text: 'COMPATIBLE for mixing in same PD bag: Vancomycin + Ceftazidime, Vancomycin + Cefazolin, Ceftazidime + Heparin. INCOMPATIBLE: Gentamicin + Penicillins (precipitation); Aminoglycosides + Cephalosporins with certain β-lactam formulations; Amphotericin B with most drugs. HEPARIN: Add heparin 500-1000 units/L to all PD bags during peritonitis to prevent fibrin clot formation and catheter occlusion. STORAGE: IP antibiotic-containing bags: use within 24h at room temperature; up to 72h refrigerated. PREPARATION: Strictly aseptic technique (peritonitis is a needle-stick and compounding-associated risk). FUNGAL PERITONITIS: IP Amphotericin B is irritating and poorly absorbed; systemic Fluconazole 200-400 mg IV OD preferred + MANDATORY CATHETER REMOVAL within 24h (fungal peritonitis catheter salvage rate <5% and risk of death is high).'
        }
      ],
      calculations: [
        {
          name: 'IP Vancomycin Dose for PD Patient (Assume 70 kg, Anuric)',
          formula: 'Vancomycin IP: 15-30 mg/kg initial dose. For 70 kg: 15 × 70 = 1050 mg → round to 1000 mg IP in long dwell.',
          explanation: 'Reconstitute Vancomycin: Add 1000 mg (1g) to 2L PD bag. Allow 6-12h dwell (overnight exchange is ideal for maximum absorption). Serum level check: 4-6h post-dose for peak (monitor for acute toxicity), then trough before next dose. In anuric patient: Vancomycin clearance via dialysis only = slow elimination. Typical redosing interval: every 5-7 days in anuric PD patients (when trough falls <15 mcg/mL). If patient has residual renal function (urine >100 mL/day): may need more frequent redosing (every 3-5 days). CEFTAZIDIME co-administration: Add Ceftazidime 1000-1500 mg (15-20 mg/kg) to a DIFFERENT daily bag exchange (or same bag — compatible). Continue Q24H until Gram-negative organisms excluded by culture.'
        },
        {
          name: 'Peritoneal Effluent Cell Count Interpretation',
          formula: 'PD peritonitis: Effluent WBC ≥100 cells/μL with ≥50% neutrophils = PERITONITIS (even with clear effluent if culture positive)',
          explanation: 'Normal PD effluent: WBC <100 cells/μL, predominantly mononuclear. Peritonitis: ≥100 cells/μL, ≥50% PMNs (polymorphonuclear = neutrophils). Cloudy bag is the CLINICAL ALERT. Lab confirmation needed but treatment should not await culture results. Send: (1) Effluent cell count and differential; (2) Effluent Gram stain (sensitivity only 9% but guides initial coverage); (3) Effluent culture (50 mL spun, inoculate into blood culture bottles — increases sensitivity to 80-90% vs 40% with direct plating). Empiric treatment START TIME: Within 6 hours of recognizing cloudy bag. Delay increases risk of catheter loss and peritoneal membrane damage.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why must antibiotics for PD peritonitis be given intraperitoneally rather than intravenously?',
          rationale: 'The peritoneal cavity functions as a PHARMACOKINETIC SANCTUARY during peritonitis. IV antibiotics must cross from systemic circulation into the peritoneal cavity via inflamed peritoneal capillaries. Studies show: Systemic IV Vancomycin achieves peritoneal fluid concentrations only 10-30% of serum levels (minimal penetration through the peritoneal membrane). Systemic IV Ceftazidime achieves peritoneal levels 20-40% of serum levels — also subtherapeutic for killing high bacterial burdens. When antibiotics are administered intraperitoneally (IP): Concentrations in peritoneal fluid exceed MIC by 100-1000× — optimal for bactericidal killing. Simultaneously, IP-administered antibiotics are absorbed into systemic circulation (50-80% bioavailability for most drugs), providing systemic coverage. Therefore IP route achieves BOTH local AND systemic concentrations simultaneously — superior to IV alone. EXCEPTION: IV Vancomycin is sometimes used as ADJUNCT to IP Vancomycin in severe systemic sepsis (bacteremia), not as a replacement.'
        },
        {
          question_text: 'Why is fungal peritonitis always managed with immediate catheter removal?',
          rationale: 'Fungal (Candida) peritonitis carries 40-53% mortality — far higher than bacterial peritonitis (5-15%). The reasons catheter removal is mandatory: (1) BIOFILM: Candida species rapidly form thick biofilms on the catheter surface (Dacron cuffs and silicone) that are IMPENETRABLE to systemic antifungals. Even high-dose Fluconazole or Amphotericin B cannot achieve MIC within biofilm — fungus persists and continuously reseeds the peritoneum. (2) NO EFFECTIVE IP ANTIFUNGAL: IP Amphotericin B causes severe chemical peritonitis (pain, inflammation) and poor absorption. (3) OUTCOME DATA: Multiple cohort studies show catheter removal within 24h of fungal peritonitis diagnosis reduces mortality by 50% compared to delayed removal or catheter salvage attempts. MANAGEMENT: Catheter removal + IV Fluconazole 400 mg loading → 200-400 mg OD for 14 days after catheter removal. Alternative: Caspofungin (for fluconazole-resistant Candida). Restart PD 4-6 weeks after resolution if peritoneum is intact; otherwise transition to hemodialysis.'
        },
        {
          question_text: 'What is the pharmacist\'s role in preventing PD peritonitis recurrence?',
          rationale: 'PD peritonitis prevention involves multiple pharmacist-led interventions: (1) MUPIROCIN PROPHYLAXIS: Nasal carriage of Staph aureus is a risk factor. Screen all PD patients for nasal MRSA. Intranasal Mupirocin 2% ointment BD for 5 days monthly reduces peritonitis by 75% in carriers. Also apply to PD catheter exit site daily. (2) ANTIFUNGAL PROPHYLAXIS during antibiotic therapy: If patient receives systemic or IP antibiotics, add Fluconazole 200 mg OD or Nystatin 500,000 units QDS orally — prevents Candida peritonitis from antibiotic-induced gut dysbiosis (fungal breakthrough is most common after antibiotic courses). (3) PATIENT EDUCATION: Strict aseptic technique training for all PD patients, caregivers, and nursing staff. Handwashing before every exchange. Mask wearing during bag connections. Report any cloudy bag IMMEDIATELY to the dialysis unit. (4) CATHETER EXIT SITE CARE: Daily cleaning with chlorhexidine or povidone-iodine + topical Mupirocin or Gentamicin cream (reduces Pseudomonas exit-site infections).'
        }
      ],
      mnemonics: [
        {
          name: 'PD Peritonitis Management (C-A-T-C-H)',
          concept: 'Essential clinical pharmacist actions in PD peritonitis — IP route is key',
          bullets: [
            'C — CLOUDY BAG: Clinical diagnosis. Send effluent cell count, Gram stain, culture (in blood culture bottles). Start treatment without waiting for results.',
            'A — ANTIBIOTICS IP (Intraperitoneal): Vancomycin 15-30 mg/kg IP in long dwell (overnight) + Ceftazidime 15-20 mg/kg IP Q24H. BOTH routes must be IP (not IV). Add Heparin 500-1000 units/L to prevent fibrin.',
            'T — TROUGH MONITORING: Vancomycin trough before each IP dose. Target >15 mcg/mL. Redose in anuric patient every 5-7 days.',
            'C — CATHETER REMOVAL: Mandatory for fungal peritonitis, refractory at 5 days, or relapsing peritonitis. Also for Pseudomonas, MRSA, Mycobacteria.',
            'H — HEPARIN + ANTIFUNGAL PROPHYLAXIS: Add heparin to PD bags during peritonitis. Give oral Fluconazole or Nystatin during antibiotic course to prevent Candida breakthrough peritonitis.'
          ]
        }
      ]
    },
    tags: ['peritonitis', 'CAPD', 'intraperitoneal-antibiotics', 'vancomycin', 'ceftazidime'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 30: NEPHROLOGY — TACROLIMUS TOXICITY
  {
    id: 'seed-030',
    title: 'Post-Transplant Tacrolimus Toxicity',
    subject_area: 'nephrology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Salim Sheikh',
      age: 48,
      sex: 'M',
      ward: 'Nephrology Ward',
      bed: 'N-09',
      presenting_complaint: 'Worsening hand tremors, headache, and fatigue for 3 days. Elevated serum creatinine on routine clinic follow-up.',
      pmh: ['Post-deceased donor renal transplant (6 months ago)', 'Hypertension'],
      medications: [
        { drug: 'Tacrolimus (Prograf)', dose: '3.5 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Mycophenolate Sodium (Myfortic)', dose: '720 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Prednisolone', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Clarithromycin', dose: '500 mg', frequency: 'BD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Serum Creatinine (Baseline)', value: '1.20', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: false },
        { name: 'Serum Creatinine (Current)', value: '1.95', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
        { name: 'Tacrolimus Trough Level', value: '24.2', unit: 'ng/mL', reference: '5.0-10.0', is_abnormal: true },
        { name: 'WBC', value: '8.4', unit: '10^3/uL', reference: '4.0-11.0', is_abnormal: false },
        { name: 'K+', value: '5.2', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-030-1', case_id: 'seed-030',
        question_text: 'What drug-drug interaction is responsible for Salim\'s acute Tacrolimus toxicity and elevated creatinine?',
        option_a: 'Prednisolone increases tacrolimus excretion',
        option_b: 'Clarithromycin is a potent inhibitor of CYP3A4 and P-glycoprotein, reducing Tacrolimus metabolism and significantly elevating its blood concentrations',
        option_c: 'Mycophenolate sodium and Tacrolimus compete for renal organic anion transporters',
        option_d: 'Amlodipine blocks the absorption of Tacrolimus in the duodenum',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'Tacrolimus is a calcineurin inhibitor metabolized extensively by CYP3A4 and is a substrate of P-glycoprotein. Clarithromycin is a potent CYP3A4 inhibitor. Co-administration leads to accumulation of Tacrolimus, causing acute nephrotoxicity (afferent arteriole constriction) and neurotoxicity (tremors). Macrolides like Azithromycin are preferred as they do not inhibit CYP3A4.',
        subject_reference: 'Pharmacotherapeutics II - Drug Interactions',
      },
      {
        id: 'q-030-2', case_id: 'seed-030',
        question_text: 'How should the Tacrolimus therapeutic drug monitoring (TDM) sample be collected, and what is the target range for a patient 6 months post-transplant?',
        option_a: 'Draw a random plasma sample at any time; target range 15-20 ng/mL',
        option_b: 'Draw a whole blood trough sample immediately before the morning dose (12 hours post-dose); target range 5-10 ng/mL',
        option_c: 'Draw a urine sample; target range 50-100 mcg/L',
        option_d: 'Draw a serum sample 2 hours after the morning dose; target range 2-5 ng/mL',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Tacrolimus TDM must be performed using whole blood (as it concentrates in erythrocytes) rather than serum or plasma. Troughs (C0) must be drawn immediately before the next dose (typically 12 hours after the last dose). At 6 months post-renal transplant, the target trough level is 5-10 ng/mL (lower than the initial post-op target of 10-15 ng/mL).',
        subject_reference: 'Clinical Pharmacokinetics - TDM',
      },
      {
        id: 'q-030-3', case_id: 'seed-030',
        question_text: 'What action should you take on Salim\'s medication chart to resolve the Tacrolimus toxicity?',
        option_a: 'Increase the Tacrolimus dose',
        option_b: 'Discontinue Clarithromycin, hold Tacrolimus temporarily until levels drop into the therapeutic range, and then resume Tacrolimus at a lower dose with close monitoring',
        option_c: 'Discontinue Prednisolone and Amlodipine',
        option_d: 'Initiate continuous hemodialysis immediately',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mar_action',
        target_drug: 'Clarithromycin',
        explanation_text: 'The offending drug, Clarithromycin, must be discontinued and replaced with a non-CYP3A4 inhibiting antibiotic if therapy is still needed (e.g., Azithromycin or Amoxicillin). Tacrolimus must be held for 1-2 doses, and daily trough levels checked. Once levels drop below 10 ng/mL and kidney function recovers, Tacrolimus can be restarted at its baseline dose.',
        subject_reference: 'Pharmacotherapeutics II - Transplant Medicine',
      },
    ],
    phases: [
      {
        id: 'seed-030-phase-1',
        title: 'Day 1: Post-Transplant Clinic Follow-up',
        description: 'Salim presents with tremors. His creatinine has risen, and his Tacrolimus level is toxic at 24.2 ng/mL. He started taking Clarithromycin 4 days ago. Review his drug-drug interactions and decide on management.',
        patient_snapshot: {
          name: 'Salim Sheikh',
          age: 48,
          sex: 'M',
          ward: 'Nephrology Ward',
          bed: 'N-09',
          presenting_complaint: 'Tremors, elevated creatinine.',
          pmh: ['Post-deceased donor renal transplant'],
          medications: [
            { drug: 'Tacrolimus (Prograf)', dose: '3.5 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Mycophenolate Sodium (Myfortic)', dose: '720 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Prednisolone', dose: '5 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Clarithromycin', dose: '500 mg', frequency: 'BD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Serum Creatinine (Baseline)', value: '1.20', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: false },
            { name: 'Serum Creatinine (Current)', value: '1.95', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
            { name: 'Tacrolimus Trough Level', value: '24.2', unit: 'ng/mL', reference: '5.0-10.0', is_abnormal: true },
          ],
        },
        questions: [ {
        id: 'q-030-2', case_id: 'seed-030',
        question_text: 'How should the Tacrolimus therapeutic drug monitoring (TDM) sample be collected, and what is the target range for a patient 6 months post-transplant?',
        option_a: 'Draw a random plasma sample at any time; target range 15-20 ng/mL',
        option_b: 'Draw a whole blood trough sample immediately before the morning dose (12 hours post-dose); target range 5-10 ng/mL',
        option_c: 'Draw a urine sample; target range 50-100 mcg/L',
        option_d: 'Draw a serum sample 2 hours after the morning dose; target range 2-5 ng/mL',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Tacrolimus TDM must be performed using whole blood (as it concentrates in erythrocytes) rather than serum or plasma. Troughs (C0) must be drawn immediately before the next dose (typically 12 hours after the last dose). At 6 months post-renal transplant, the target trough level is 5-10 ng/mL (lower than the initial post-op target of 10-15 ng/mL).',
        subject_reference: 'Clinical Pharmacokinetics - TDM',
      }, {
        id: 'q-030-3', case_id: 'seed-030',
        question_text: 'What action should you take on Salim\'s medication chart to resolve the Tacrolimus toxicity?',
        option_a: 'Increase the Tacrolimus dose',
        option_b: 'Discontinue Clarithromycin, hold Tacrolimus temporarily until levels drop into the therapeutic range, and then resume Tacrolimus at a lower dose with close monitoring',
        option_c: 'Discontinue Prednisolone and Amlodipine',
        option_d: 'Initiate continuous hemodialysis immediately',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mar_action',
        target_drug: 'Clarithromycin',
        explanation_text: 'The offending drug, Clarithromycin, must be discontinued and replaced with a non-CYP3A4 inhibiting antibiotic if therapy is still needed (e.g., Azithromycin or Amoxicillin). Tacrolimus must be held for 1-2 doses, and daily trough levels checked. Once levels drop below 10 ng/mL and kidney function recovers, Tacrolimus can be restarted at its baseline dose.',
        subject_reference: 'Pharmacotherapeutics II - Transplant Medicine',
      },
          {
            id: 'q-030-1', case_id: 'seed-030',
            question_text: 'What drug-drug interaction is responsible for Salim\'s acute Tacrolimus toxicity and elevated creatinine?',
            option_a: 'Prednisolone increases tacrolimus excretion',
            option_b: 'Clarithromycin is a potent inhibitor of CYP3A4 and P-glycoprotein, reducing Tacrolimus metabolism and significantly elevating its blood concentrations',
            option_c: 'Mycophenolate sodium and Tacrolimus compete for renal organic anion transporters',
            option_d: 'Amlodipine blocks the absorption of Tacrolimus in the duodenum',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'Tacrolimus is a calcineurin inhibitor metabolized extensively by CYP3A4 and is a substrate of P-glycoprotein. Clarithromycin is a potent CYP3A4 inhibitor. Co-administration leads to accumulation of Tacrolimus, causing acute nephrotoxicity (afferent arteriole constriction) and neurotoxicity (tremors). Macrolides like Azithromycin are preferred as they do not inhibit CYP3A4.',
            subject_reference: 'Pharmacotherapeutics II - Drug Interactions',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients (2009)',
          organization: 'KDIGO',
          text: 'TACROLIMUS: CNI (Calcineurin Inhibitor) immunosuppressant. Mechanism: Binds FK-binding protein 12 (FKBP12) → inhibits calcineurin → prevents nuclear translocation of NFAT → suppresses IL-2 gene transcription → blocks T-cell proliferation and activation. TARGET TROUGH LEVELS: Early post-transplant (0-3 months): 10-15 ng/mL. Late (>12 months): 5-10 ng/mL (3-7 ng/mL in low-risk patients). TDM METHOD: 12-hour trough level (C0) drawn IMMEDIATELY BEFORE the morning dose. Whole blood sample (EDTA tube). Collected at STEADY STATE (after ≥3 days on same dose). NEPHROTOXICITY: Acute CNI nephrotoxicity is dose-related — trough >20 ng/mL frequently associated with AKI from afferent arteriolar vasoconstriction. Reduce dose immediately. Chronic CNI nephrotoxicity: irreversible arteriolopathy with fibrosis. NEUROTOXICITY: Tremor (most common), headache, posterior reversible encephalopathy syndrome (PRES) at high levels. METABOLIC: New-onset diabetes after transplant (NODAT) — occurs in 20-40% within first year (T-cell suppression + beta-cell toxicity). DRUG INTERACTIONS: Critical CYP3A4 inhibitors dramatically increase levels: Azithromycin (mild), Erythromycin (moderate), Clarithromycin/Itraconazole/Voriconazole/Fluconazole (strong — 2-4× increase). CYP3A4 inducers markedly decrease levels: Rifampicin (can drop levels by 80%), Carbamazepine, Phenytoin, St. John\'s Wort.'
        },
        {
          title: 'Tacrolimus Drug Interactions — CYP3A4 and P-gp Pharmacokinetics',
          organization: 'Transplant Pharmacology Consensus',
          text: 'TACROLIMUS METABOLISM: Extensively metabolized by CYP3A4/5 in liver and intestinal wall. Also a P-glycoprotein (P-gp) substrate. High bioavailability variability (5-67%) — reason why TDM is essential. CRITICAL INTERACTIONS CAUSING TOXIC LEVELS: Strong CYP3A4 inhibitors: Voriconazole (3-5× increase), Itraconazole, Ketoconazole, Posaconazole, Clarithromycin (2-3× increase), Fluconazole (1.5-2× increase), Diltiazem and Verapamil (1.5-2×). Interactions with antifungals are PARTICULARLY dangerous — antifungals are frequently used in immunosuppressed transplant patients who are also on tacrolimus. Management: When starting antifungal, empirically reduce tacrolimus dose by 50-75% (Voriconazole) or 30-50% (Fluconazole) and check trough 2-3 days after. CRITICAL INTERACTIONS CAUSING LOW LEVELS (Rejection risk): Rifampicin (decreases tacrolimus levels 80%), Carbamazepine (40-60% decrease), Phenytoin, St. John\'s Wort (50% decrease — OTC supplement). FOOD: Grapefruit and grapefruit juice increase tacrolimus levels (CYP3A4 inhibition in gut). HIGH-FAT MEAL: Reduces absorption of tacrolimus extended-release formulation (Advagraf/Astagraf XL) by 25% — take consistently in a fasted state.'
        },
        {
          title: 'Tacrolimus Toxicity Management — PRES and Acute Nephrotoxicity',
          organization: 'Transplant Society Clinical Consensus',
          text: 'POSTERIOR REVERSIBLE ENCEPHALOPATHY SYNDROME (PRES): CNS complication of tacrolimus toxicity. Features: Headache, visual disturbances, seizures, encephalopathy. MRI: characteristic T2-FLAIR hyperintensities in posterior cerebral white matter (parieto-occipital distribution). Mechanism: CNI-induced endothelial dysfunction → breakdown of cerebrovascular autoregulation → vasogenic edema predominantly in posterior white matter. MANAGEMENT: Reduce or stop tacrolimus immediately, aggressive BP control. PROGNOSIS: Largely reversible if tacrolimus stopped promptly. ACUTE TACROLIMUS NEPHROTOXICITY: Afferent arteriolar vasoconstriction (mediated by endothelin-1 and thromboxane) → decreased renal blood flow → rising creatinine. Distinguish from acute rejection (which also raises creatinine) using biopsy and tacrolimus level: High trough + rising SCr = TOXICITY (reduce dose). Normal/low trough + rising SCr = REJECTION (increase immunosuppression). Tacrolimus TDM is therefore a CRITICAL daily pharmacist function in any transplant ICU or nephrology ward.'
        }
      ],
      calculations: [
        {
          name: 'Tacrolimus Dose Adjustment After Drug Interaction Detection',
          formula: 'New dose = Current dose ÷ Interaction magnitude; For Voriconazole: reduce tacrolimus by 2/3 to 3/4 (50-75%). For Fluconazole: reduce by 30-50%.',
          explanation: 'Scenario: Post-transplant patient on Tacrolimus 3 mg BD (steady-state trough 8 ng/mL — therapeutic) develops invasive aspergillosis requiring Voriconazole 4 mg/kg BD. Voriconazole is a potent CYP3A4 inhibitor — expected 3-5× increase in tacrolimus exposure. Predicted new trough without dose adjustment: 8 × 4 = 32 ng/mL (TOXIC — nephrotoxicity and neurotoxicity certain). Action: Reduce tacrolimus to 1 mg BD (approximately 70% reduction from 3 mg BD) or even 0.5 mg BD. Check trough 2-3 days after Voriconazole initiation. Target trough: 8-12 ng/mL during early post-transplant period on antifungal. Adjust further based on result. This is a CRITICAL pharmacist-led drug interaction management intervention.'
        },
        {
          name: 'Steady-State Tacrolimus Trough Timing',
          formula: 'Steady state achieved at 5 × half-life. Tacrolimus half-life = 12 hours → steady state at ~60h = 3 days. TDM sample: 12h post-dose trough (C0), BEFORE morning dose.',
          explanation: 'Clinical scenario: Patient started Tacrolimus 3 mg BD on Day 1. First reliable TDM: Day 4 (after 3 days at same dose = steady state). Draw blood at 6-7 AM, BEFORE the 7 AM morning dose. Sample in EDTA tube (whole blood — tacrolimus distributes 75% into red blood cells, 25% plasma). If trough checked too early (e.g., Day 2), it will underestimate true steady-state levels. If dose changed: wait another 3 days before checking new trough. Documentation: Record exact dose, exact draw time, and exact previous dose time on all TDM requests. Inaccurate timing = inaccurate result = wrong dose decision.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does tacrolimus cause new-onset diabetes mellitus after transplant (NODAT)?',
          rationale: 'Tacrolimus-induced NODAT (New-Onset Diabetes After Transplantation) has a complex mechanism with three components: (1) DIRECT BETA-CELL TOXICITY: Tacrolimus accumulates in pancreatic beta cells (which highly express FK-binding protein 12). CNI-bound calcineurin inhibition → impairs insulin gene transcription (NFAT-dependent) → reduced insulin synthesis and secretion; (2) PERIPHERAL INSULIN RESISTANCE: Tacrolimus → impairs downstream insulin receptor signaling in muscle and adipose tissue → reduced glucose uptake; (3) ENHANCED BY CORTICOSTEROIDS: Post-transplant patients receive high-dose steroids (Prednisolone) concurrently → gluconeogenesis increases → hyperglycemia amplified. Risk factors: African American or Hispanic ethnicity, BMI >25, family history of T2DM, older age, Tacrolimus trough >10 ng/mL, higher steroid doses. Management of NODAT: (1) Try minimizing tacrolimus dose if safe (reduce target trough if low rejection risk); (2) Consider conversion from Tacrolimus to Cyclosporine (less diabetogenic) in select patients; (3) Insulin therapy as first-line for glucose control in NODAT (Metformin contraindicated if eGFR <45 in transplant patients).'
        },
        {
          question_text: 'How should the clinical pharmacist approach a patient on Tacrolimus who is started on Clarithromycin for a respiratory infection?',
          rationale: 'This is a HIGH-PRIORITY drug interaction that requires IMMEDIATE pharmacist intervention. Clarithromycin is a POTENT inhibitor of CYP3A4 (the primary enzyme metabolizing tacrolimus) AND P-glycoprotein (the efflux transporter). Both mechanisms dramatically increase tacrolimus bioavailability and systemic exposure. Expected effect: 2-4× increase in tacrolimus AUC within 24-48h of starting Clarithromycin. PHARMACIST INTERVENTION CHECKLIST: (1) ALERT the prescriber immediately; (2) Discuss ANTIBIOTIC ALTERNATIVE: Azithromycin (Z-pack) is a much weaker CYP3A4 inhibitor — use if clinically equivalent; (3) If Clarithromycin is necessary: reduce tacrolimus dose by 50-75% immediately before starting; (4) CHECK TACROLIMUS TROUGH: 2 days after starting Clarithromycin; (5) REVERSE PLAN: When Clarithromycin is stopped, tacrolimus levels will fall — anticipate need to increase dose back to baseline; check trough 3 days after stopping antibiotic. (6) DOCUMENT: All pharmacist-prescriber communications in the medication reconciliation notes. This interaction has caused multiple tacrolimus toxicity deaths in transplant patients.'
        },
        {
          question_text: 'What distinguishes acute tacrolimus nephrotoxicity from acute rejection clinically and pharmacologically?',
          rationale: 'Both acute tacrolimus nephrotoxicity and acute rejection present with RISING SERUM CREATININE in a transplant patient. The critical distinction: TACROLIMUS NEPHROTOXICITY: (1) Tacrolimus TROUGH LEVEL is elevated (>15-20 ng/mL). (2) Onset: insidious or acute after drug interaction/dose change. (3) Urinalysis: may show mild proteinuria, no significant casts. (4) Biopsy (if done): afferent arteriolar hyalinosis, striped interstitial fibrosis. (5) RESPONSE TO DOSE REDUCTION: SCr improves within 3-7 days of reducing tacrolimus dose. ACUTE REJECTION: (1) Tacrolimus trough is LOW or INADEQUATE (patient non-compliant or drug interaction reducing levels). (2) Onset: typically 5-14 days post-transplant or after drug non-adherence. (3) Urinalysis: proteinuria, possible hematuria. (4) Biopsy (Gold Standard): tubulitis, intimal arteritis (T-cell mediated). (5) RESPONSE TO IMMUNOSUPPRESSION INCREASE: methylprednisolone pulses (500 mg × 3 days) improve SCr. CLINICAL RULE: High trough + Rising SCr = Toxicity (reduce). Low trough + Rising SCr = Rejection (increase + augment). Normal trough + Rising SCr = BIOPSY NEEDED.'
        }
      ],
      mnemonics: [
        {
          name: 'Tacrolimus TDM and Drug Interactions (T-A-C-R-O-L-I-M-U-S)',
          concept: 'Key pharmacist monitoring parameters for Tacrolimus — transplant pharmacy essentials',
          bullets: [
            'T — TROUGH LEVEL: 12h post-dose, BEFORE morning dose. Steady state after 3 days. Target: 10-15 ng/mL (early), 5-10 ng/mL (late maintenance).',
            'A — AZOLES increase levels dramatically: Voriconazole (3-5×), Itraconazole, Posaconazole, Fluconazole (1.5-2×). Reduce tacrolimus dose by 50-75% when adding antifungal.',
            'C — CYP3A4 inducers DECREASE levels: Rifampicin (80% decrease!), Carbamazepine, Phenytoin, Phenobarbitone. Anticipate rejection risk.',
            'R — RENAL function monitor: Daily SCr. High trough + ↑SCr = nephrotoxicity. Low trough + ↑SCr = rejection. Biopsy needed if ambiguous.',
            'O — OPPORTUNISTIC INFECTIONS: Deep immunosuppression → PCP, CMV, EBV, Candida, Aspergillus. TMP-SMX prophylaxis for PCP mandatory in first 6 months.',
            'L — LIPID and GLUCOSE monitoring: Tacrolimus + steroids = NODAT in 20-40%. Weekly glucose for 3 months post-transplant.',
            'I — INTERACTIONS: Grapefruit (↑), Clarithromycin (↑), Erythromycin (↑), Diltiazem (↑), St. John\'s Wort (↓). Review all new prescriptions against tacrolimus.',
            'M — MACROLIDES: Azithromycin minimal interaction (preferred). Clarithromycin/Erythromycin: reduce tacrolimus 50% immediately.',
            'U — URINE protein monitoring: Spot urine protein:creatinine ratio every 3 months.',
            'S — SAMPLE timing: WHOLE BLOOD in EDTA tube. Draw at EXACTLY 12h post-dose. Record dose time on request form.'
          ]
        }
      ]
    },
    tags: ['tacrolimus', 'toxicity', 'clarithromycin', 'drug-interaction', 'nephrotoxicity'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 31: CLINICAL TOXICOLOGY — SNAKE BITE
  {
    id: 'seed-031',
    title: 'Russell\'s Viper Snake Bite Envenomation',
    subject_area: 'clinical_toxicology',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Ramaiah K',
      age: 42,
      sex: 'M',
      ward: 'Emergency / Medicine ICU',
      bed: 'ER-01',
      presenting_complaint: 'Bitten by an unidentified snake on the right foot 2 hours ago while working in a rice paddy. Progressive swelling of the right leg, bleeding from the bite site that won\'t stop, and gum bleeding. 20-min Whole Blood Clotting Test (20WBCT) shows no clot formation.',
      pmh: [],
      medications: [
        { drug: 'Polyvalent Anti-Snake Venom (ASV)', dose: '10 vials in 200 mL NS', frequency: 'Infusion over 1 hour', route: 'IV' },
        { drug: 'Adrenaline (Epinephrine)', dose: '0.5 mg IM', frequency: 'PRN for anaphylaxis', route: 'IM (ready at bedside)' },
        { drug: 'Tetanus Toxoid', dose: '0.5 mL', frequency: 'Once', route: 'IM' },
        { drug: 'IV Normal Saline', dose: '100 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: '20WBCT', value: 'Non-clotting at 20 min', unit: '', reference: 'Clot in <20 min', is_abnormal: true },
        { name: 'INR', value: '>6', unit: '', reference: '<1.3', is_abnormal: true },
        { name: 'Platelets', value: '65', unit: 'x10^3/uL', reference: '150-450', is_abnormal: true },
        { name: 'Hb', value: '8.5', unit: 'g/dL', reference: '13-17', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-031-1', case_id: 'seed-031',
        question_text: 'What are the two major types of envenomation syndromes in Indian snakebites, and how does the clinical presentation differentiate them?',
        option_a: 'No clinical differentiation is possible',
        option_b: 'Hemotoxic (Viper) — coagulopathy, bleeding, swelling; Neurotoxic (Cobra/Krait) — ptosis, respiratory paralysis, minimal swelling. This patient\'s coagulopathy indicates hemotoxic (viper) envenomation.',
        option_c: 'All snakebites cause only local swelling',
        option_d: 'Only neurotoxic bites require ASV',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'In India, vipers (Russell\'s, Saw-scaled) cause hemotoxic syndrome with VICC (venom-induced consumption coagulopathy), DIC, swelling, and bleeding. Cobras and Kraits cause neurotoxic syndrome with descending paralysis. The 20WBCT is a bedside test for coagulopathy — non-clotting confirms hemotoxic envenomation.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-031-2', case_id: 'seed-031',
        question_text: 'During ASV infusion, the patient develops urticaria, bronchospasm, and hypotension (anaphylactoid reaction). What is the correct management?',
        option_a: 'Stop ASV permanently — the patient is allergic',
        option_b: 'Temporarily pause ASV. Give IM Adrenaline 0.5 mg, IV antihistamine, and IV corticosteroid. Once stabilized, RESTART ASV at a slower rate — it is life-saving and must not be permanently discontinued.',
        option_c: 'Give more ASV faster to overcome the reaction',
        option_d: 'Switch to oral antihistamines and discharge',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'ASV reactions are anaphylactoid (not IgE-mediated) and are rate-dependent. They occur in 20-40% of patients. Treatment: IM Adrenaline + antihistamine + hydrocortisone. ASV must be restarted at a slower rate because without it, the coagulopathy will progress to fatal hemorrhage.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-031-3', case_id: 'seed-031',
        question_text: 'How should ASV response be monitored, and when are repeat doses needed?',
        option_a: 'Check the platelet count after 1 hour',
        option_b: 'Repeat the 20WBCT 6 hours after ASV. If blood still fails to clot, administer another 10 vials. Repeat this cycle until clotting is restored.',
        option_c: 'Monitor swelling only — if it stops spreading, ASV is working',
        option_d: 'One dose of ASV is always sufficient',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'The 20WBCT is repeated 6 hours after the initial ASV dose. Persistent non-clotting indicates residual circulating venom and requires repeat dosing. ASV neutralizes free venom but does not reverse existing coagulation factor depletion, which takes 24-48 hours to recover.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
    ],
    phases: [
      {
        id: 'seed-031-phase-1',
        title: 'Hour 1: Snake Bite ER',
        description: 'Ramaiah presents with hemotoxic envenomation. Review ASV administration and reaction management.',
        patient_snapshot: {
          name: 'Ramaiah K', age: 42, sex: 'M', ward: 'ER', bed: 'ER-01',
          presenting_complaint: 'Snake bite with coagulopathy.',
          pmh: [],
          medications: [
            { drug: 'Polyvalent ASV', dose: '10 vials in NS', frequency: 'Over 1 hour', route: 'IV' },
            { drug: 'Adrenaline', dose: '0.5 mg', frequency: 'PRN', route: 'IM (bedside)' },
          ],
          allergies: [],
          labs: [
            { name: '20WBCT', value: 'Non-clotting', unit: '', reference: 'Clot <20 min', is_abnormal: true },
            { name: 'INR', value: '>6', unit: '', reference: '<1.3', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-031-1', case_id: 'seed-031',
            question_text: 'Hemotoxic vs Neurotoxic envenomation?',
            option_a: 'No differentiation possible',
            option_b: 'Hemotoxic (Viper) = coagulopathy/bleeding; Neurotoxic (Cobra/Krait) = paralysis',
            option_c: 'All cause local swelling only',
            option_d: 'Only neurotoxic needs ASV',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Non-clotting 20WBCT = hemotoxic (viper).',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-031-2', case_id: 'seed-031',
            question_text: 'Anaphylactoid reaction during ASV — management?',
            option_a: 'Stop ASV permanently',
            option_b: 'Pause ASV, give Adrenaline + antihistamine, then RESTART slower',
            option_c: 'Give more ASV faster',
            option_d: 'Oral antihistamine and discharge',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Rate-dependent reaction; ASV is life-saving, must restart.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-031-3', case_id: 'seed-031',
            question_text: 'How to monitor ASV response?',
            option_a: 'Platelet count at 1 hour',
            option_b: 'Repeat 20WBCT at 6 hours; if non-clotting, give another 10 vials',
            option_c: 'Monitor swelling only',
            option_d: 'One dose is always enough',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: '20WBCT at 6h intervals to guide repeat dosing.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'WHO Guidelines for the Clinical Management of Snake Bite in Southeast Asia (2016)',
          organization: 'WHO / National Health Mission (India)',
          text: 'SNAKE BITE MANAGEMENT: Indian common snakes: Cobra (Naja naja — neurotoxic + cytotoxic), Krait (Bungarus caeruleus — neurotoxic), Russell\'s Viper (Daboia russelii — hemotoxic, nephrotoxic), Saw-scaled Viper (Echis carinatus — hemotoxic). IDENTIFY BITE TYPE: Neurotoxic (cobra, krait): Ptosis, diplopia, dysphagia, respiratory muscle paralysis — LIFE-THREATENING. Hemotoxic (Russell\'s viper, saw-scaled viper): Coagulopathy, bleeding from gums/bite site, DIC, hemorrhage, AKI. POLYVALENT ANTI-SNAKE VENOM (ASV): Indian Polyvalent ASV covers all 4 common species. DOSE: Initial 10 vials (50 mL) IV over 30-60 minutes for any systemic envenomation. Repeat 10 vials if no improvement at 1-2h or bleeding continues after 6h. MAXIMUM: No defined maximum — repeat until clinical improvement (coagulopathy corrects, ptosis improves). INDICATIONS for ASV: Systemic envenomation (coagulopathy, neurotoxicity, AKI, cardiotoxicity), severe local envenomation (tissue necrosis, swelling to trunk). DO NOT GIVE ASV for: Dry bites (no envenomation), local reactions only without systemic signs. ANAPHYLAXIS PROPHYLAXIS: Pre-treat with SC Epinephrine 0.25 mg + IV Hydrocortisone 200 mg + IV Chlorpheniramine 10 mg before ASV to reduce anaphylaxis risk (occurs in 15-40%).'
        },
        {
          title: 'Hematological Effects of Viper Venom and Treatment',
          organization: 'Indian Medical Association / Clinical Toxicology',
          text: 'VIPER VENOM COAGULOPATHY (Venom-Induced Consumption Coagulopathy — VICC): Russell\'s Viper venom contains: Prothrombin activators, phospholipases, L-amino acid oxidases, kallikrein-like enzymes. Mechanism: Direct prothrombin activation → massive thrombin generation → fibrinogen consumption → depletion of all clotting factors → complete defibrination (DIC-like state). Paradox: Massive thrombin generation → initial micro-clot formation consuming clotting factors → then BLEEDING from depleted factors (not from thrombi). DIAGNOSTIC TEST: 20-Minute Whole Blood Clotting Test (20WBCT): Place 2 mL fresh venous blood in clean glass tube → leave undisturbed 20 min → invert tube. If blood does NOT clot (remains liquid) = coagulopathy confirmed = ASV INDICATED. Sensitivity >90% for VICC. PT/INR and APTT are prolonged in VICC. TREATMENT: (1) ASV is the DEFINITIVE treatment for VICC — reverses venom-induced prothrombin activation. FFP/platelets/cryoprecipitate are TEMPORIZING (do not address root cause). (2) After giving ASV: Wait 6h before checking 20WBCT again — coagulopathy usually corrects by 6-12h post-ASV. If still abnormal at 6h: Give 10 more vials ASV. (3) Renal protection: Aggressive IV fluids (RL 2-3L/day) for AKI prevention in viper bites.'
        },
        {
          title: 'Neostigmine and Atropine for Neurotoxic Snake Bite',
          organization: 'WHO / Indian National Guidelines',
          text: 'COBRA BITE NEUROTOXICITY MANAGEMENT: Cobra venom is POST-SYNAPTIC — binds nicotinic ACh receptors at the neuromuscular junction (NMJ) → prevents ACh from binding → blocks neuromuscular transmission → flaccid paralysis. NEOSTIGMINE TEST (for neurotoxic envenomation): Neostigmine 0.01-0.02 mg/kg IM (max 1.5 mg) AFTER Atropine 0.6 mg IV (given FIRST to prevent Neostigmine muscarinic effects: bradycardia, bronchospasm, excess secretions). If clinical improvement in ptosis/diplopia after 20-30 minutes: Continue Neostigmine + Atropine. Mechanism: Neostigmine inhibits acetylcholinesterase → ACh accumulates at NMJ → outcompetes cobra venom for nicotinic receptor binding → restores neuromuscular transmission. NOTE: Neostigmine only works for POST-SYNAPTIC neurotoxins (Cobra — Naja naja). DOES NOT work for PRE-SYNAPTIC neurotoxins (Krait — Bungarus caeruleus). Krait venom prevents ACh release at presynaptic membrane → Neostigmine (which increases ACh release) is INEFFECTIVE. Manage Krait bite with ASV + mechanical ventilation. RESPIRATORY MONITORING: Vital capacity <1L or FVC<20 mL/kg = impending respiratory failure → ELECTIVE INTUBATION before crisis. Do not wait for O2 desaturation.'
        }
      ],
      calculations: [
        {
          name: 'Anti-Snake Venom (ASV) Initial Dose Calculation',
          formula: 'Initial ASV: 10 vials IV over 30-60 min. Each vial = 10 mL. Total = 100 mL. Repeat 10 vials if: No WBCT correction at 6h OR ongoing bleeding OR neurological deterioration',
          explanation: 'Reconstitute each ASV vial (lyophilized) with 10 mL sterile water = 10 mL liquid. Pool 10 vials = 100 mL total. Dilute in 250 mL NS. Infuse over 30-60 minutes. Pre-treatment (10 min before ASV): Epinephrine 0.25 mg SC + Hydrocortisone 200 mg IV + Chlorpheniramine 10 mg IV. Monitor during infusion: BP, HR, SpO2, signs of anaphylaxis every 10 min. If anaphylaxis occurs: STOP ASV. Give Epinephrine 0.5 mg IM. Restart at slower rate after stabilization. Total vials used in severe cases: can reach 50-100 vials over first 24h. No evidence that more than 20 vials achieves additional benefit in most cases — decision to repeat based on clinical parameters.'
        },
        {
          name: '20-Minute Whole Blood Clotting Test (20WBCT)',
          formula: 'Draw 2 mL fresh venous blood in CLEAN DRY glass tube → leave undisturbed at room temperature × 20 min → tilt tube',
          explanation: 'Interpretation: Blood that clots and tube can be inverted without spilling = NORMAL (no significant coagulopathy). Blood that does not clot (remains liquid, pours out when tilted) = COAGULOPATHY CONFIRMED = systemic envenomation = ASV INDICATED. Repeat 20WBCT: 6 hours after ASV (to confirm correction). If still not clotting at 6h: repeat 10 vials ASV. 20WBCT MUST be done in clean, dry glass tube (not plastic — plastic surface does not trigger contact activation required for coagulation). Plastic or pre-siliconized tubes will show FALSE POSITIVE non-clotting. This simple bedside test is the cornerstone of snake bite management in resource-limited settings.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is ASV the only definitive treatment for viper-induced coagulopathy — and why do FFP and platelets alone fail?',
          rationale: 'Viper venom (Russell\'s Viper, Saw-scaled Viper) contains PROTHROMBIN ACTIVATORS (Group C phospholipase-like enzymes) that continuously activate prothrombin → thrombin → fibrin → defibrination. GIVING FFP (which contains clotting factors including fibrinogen): Temporarily replenishes consumed factors → BUT the venom is still present and continues to activate prothrombin → factors consumed again within hours. GIVING PLATELETS: Platelet count drops in VICC not from thrombocytopenia primarily, but from consumption in microthrombi. Transfusing platelets into an environment with active venom → rapid consumption of transfused platelets. ASV (Polyvalent Anti-Snake Venom): Specific antibody fragments (Fab/F(ab\')2) that bind and NEUTRALIZE the venom enzymes (prothrombin activators, phospholipases). Once venom is neutralized, the body\'s natural clotting factor production (hepatic synthesis) can replenish consumed factors. TIMELINE: Prothrombin recovery: 6-12h after ASV (hepatic synthesis). Fibrinogen recovery: 12-24h (fibrinogen takes longer to synthesize). This is why 20WBCT corrects 6-12h after adequate ASV — not immediately.'
        },
        {
          question_text: 'Why must Atropine always be given BEFORE Neostigmine in neurotoxic snake bite?',
          rationale: 'Neostigmine is an ANTICHOLINESTERASE INHIBITOR — it prevents breakdown of acetylcholine (ACh) at ALL cholinergic synapses simultaneously. This means Neostigmine increases ACh levels at: (1) NICOTINIC synapses (NMJ) — desired therapeutic effect in cobra bite (increases ACh competing with venom at NMJ); (2) MUSCARINIC synapses (parasympathetic): heart (bradycardia, even cardiac arrest), lungs (bronchoconstriction + excessive secretions), GI (diarrhea, cramps), bladder (urinary incontinence), eyes (miosis), salivary glands (hypersalivation), sweat glands (diaphoresis). If Neostigmine is given WITHOUT prior Atropine: Massive muscarinic overstimulation causes LIFE-THREATENING BRADYCARDIA and BRONCHOSPASM — potentially more dangerous than the snake bite itself. Atropine (muscarinic antagonist) blocks ALL muscarinic effects of the Neostigmine-induced ACh excess, allowing the nicotinic (NMJ) therapeutic effect to dominate. DOSE SEQUENCE: Atropine 0.6 mg IV FIRST → wait 2 min → THEN Neostigmine 0.5-1.5 mg IM. Repeat combined Atropine-Neostigmine every 30 min if needed.'
        },
        {
          question_text: 'What are the contraindications to specific snake bite treatments that a pharmacist must know?',
          rationale: 'Several commonly ordered treatments are HARMFUL in snake bite: (1) ASPIRIN/NSAIDs: Absolutely contraindicated in viper bites (already have coagulopathy → platelet inhibition worsens bleeding). Use Paracetamol for pain. (2) HEPARIN: Contraindicated in viper bites — coagulopathy is from CONSUMPTION of factors (not thrombus formation). Heparin worsens bleeding. (3) FASCIOTOMY for swelling: Rarely indicated (pressure in compartment usually <30 mmHg in snake bite). Most swelling is from tissue edema and inflammation, not compartment syndrome. Premature fasciotomy in a coagulopathic patient can be fatal. (4) STEROIDS: No evidence of benefit. Do NOT give for snake bite-induced coagulopathy, neurotoxicity, or local swelling. Only use for ASV anaphylaxis management (Hydrocortisone 200 mg IV). (5) ICE/TOURNIQUETS: Tourniquets worsen tissue ischemia and necrosis. Ice causes frostbite. (6) SUCKING/INCISION at bite site: Risk of oral infection, worsens local necrosis. (7) ELECTRIC SHOCK: Historically used — absolutely no evidence; causes burns and cardiac arrhythmias.'
        }
      ],
      mnemonics: [
        {
          name: 'Snake Bite Assessment and Management (A-S-V-I-P-E-R)',
          concept: 'Clinical pharmacist checklist for snake bite management — critical life-saving interventions',
          bullets: [
            'A — ANAPHYLAXIS PREVENTION before ASV: SC Epinephrine 0.25 mg + IV Hydrocortisone 200 mg + IV Chlorpheniramine 10 mg. Given 10 minutes before ASV infusion.',
            'S — SPECIES IDENTIFICATION: Neurotoxic (Cobra/Krait) → ptosis, respiratory paralysis. Hemotoxic (Russell\'s Viper/Saw-scaled) → coagulopathy, AKI, bleeding.',
            'V — VENOM TEST: 20WBCT (blood does not clot in 20 min = coagulopathy = systemic envenomation = ASV indicated).',
            'I — IV ASV: 10 vials (100 mL) in 250 mL NS over 30-60 min. Repeat 10 vials if 20WBCT uncorrected at 6h or ongoing neurological deterioration.',
            'P — PTOSIS TREATMENT (neurotoxic): Atropine 0.6 mg IV FIRST → then Neostigmine 0.5-1.5 mg IM for cobra bite (NOT krait — presynaptic mechanism).',
            'E — EMERGENCY AIRWAY: FVC <20 mL/kg or signs of respiratory muscle fatigue = INTUBATE early (before hypoxia). Ventilatory failure can occur within 30 min in Krait bite.',
            'R — RENAL PROTECTION: IV Ringer\'s Lactate 2-3L/day for viper bites. Monitor urine output hourly. AKI common from microthrombi + hypotension + direct nephrotoxicity. Early dialysis if needed.'
          ]
        }
      ]
    },
    tags: ['snake-bite', 'ASV', 'envenomation', 'coagulopathy', 'toxicology'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 32: CLINICAL TOXICOLOGY — IRON POISONING
  {
    id: 'seed-032',
    title: 'Pediatric Iron Poisoning',
    subject_area: 'clinical_toxicology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Baby Ananya',
      age: 3,
      sex: 'F',
      ward: 'Pediatric Emergency',
      bed: 'PED-ER-02',
      presenting_complaint: 'Brought by parents after accidental ingestion of approximately 15 tablets of Ferrous Sulfate 325 mg (65 mg elemental iron each) about 2 hours ago. Presenting with vomiting, bloody diarrhea, and lethargy.',
      pmh: [],
      medications: [
        { drug: 'Deferoxamine', dose: '15 mg/kg/hr', frequency: 'Continuous IV infusion', route: 'IV' },
        { drug: 'IV Normal Saline', dose: 'Bolus 20 mL/kg', frequency: 'Repeat PRN', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Serum Iron (at 4h)', value: '650', unit: 'mcg/dL', reference: '60-170', is_abnormal: true },
        { name: 'TIBC', value: '350', unit: 'mcg/dL', reference: '250-400', is_abnormal: false },
        { name: 'pH', value: '7.25', unit: '', reference: '7.35-7.45', is_abnormal: true },
        { name: 'WBC', value: '18', unit: 'x10^9/L', reference: '5.0-15.0', is_abnormal: true },
        { name: 'Glucose', value: '250', unit: 'mg/dL', reference: '70-110', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-032-1', case_id: 'seed-032',
        question_text: 'Calculate the estimated elemental iron ingested (mg/kg) for a 15 kg child who took 15 tablets of Ferrous Sulfate 325 mg (elemental iron = 65 mg per tablet). Is this a toxic dose?',
        option_a: '20 mg/kg — below toxic threshold',
        option_b: '65 mg/kg — severely toxic. Elemental iron > 60 mg/kg is potentially lethal. Calculation: 15 tablets × 65 mg = 975 mg ÷ 15 kg = 65 mg/kg.',
        option_c: '325 mg/kg',
        option_d: '10 mg/kg — non-toxic',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'The critical calculation in iron poisoning uses ELEMENTAL iron, not salt weight. Ferrous Sulfate = 20% elemental iron. 325 mg × 0.20 = 65 mg elemental per tablet. Toxic dose: >20 mg/kg (GI symptoms), >60 mg/kg (potentially lethal systemic toxicity). This child ingested 65 mg/kg — a medical emergency.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-032-2', case_id: 'seed-032',
        question_text: 'What is the mechanism by which Deferoxamine acts as an antidote, and what clinical sign confirms it is working?',
        option_a: 'Deferoxamine neutralizes iron in the stomach',
        option_b: 'Deferoxamine chelates free serum iron into ferrioxamine (water-soluble complex excreted renally). The urine turns a characteristic "vin rosé" (pinkish-red) color, confirming iron chelation.',
        option_c: 'Deferoxamine enhances hepatic iron storage',
        option_d: 'Deferoxamine increases GI iron excretion',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Deferoxamine (DFO) binds free iron (Fe3+) with extremely high affinity, forming ferrioxamine which is water-soluble and renally excreted. "Vin rosé" urine color is the classic clinical sign of active chelation. DFO infusion continues until urine color normalizes and metabolic acidosis resolves.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-032-3', case_id: 'seed-032',
        question_text: 'Why is activated charcoal NOT effective in iron poisoning?',
        option_a: 'Charcoal is too harsh for children',
        option_b: 'Iron is not adsorbed by activated charcoal because iron ions are too small and polar for the charcoal binding sites. Whole bowel irrigation with polyethylene glycol is the preferred GI decontamination method for iron tablets.',
        option_c: 'Charcoal is only effective for liquid poisons',
        option_d: 'Charcoal works, but only if given within 10 minutes',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'Activated charcoal is ineffective for metals/ions (iron, lithium, potassium), alcohols (methanol, ethylene glycol), and acids/alkalis. Whole bowel irrigation (PEG-electrolyte solution at 500 mL/hr for children) physically flushes undissolved iron tablets from the GI tract.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
    ],
    phases: [
      {
        id: 'seed-032-phase-1',
        title: 'Hour 2: Pediatric Iron Poisoning',
        description: 'Baby Ananya has ingested a toxic dose of iron. Calculate elemental iron dose and manage chelation.',
        patient_snapshot: {
          name: 'Baby Ananya', age: 3, sex: 'F', ward: 'PED-ER', bed: 'PED-ER-02',
          presenting_complaint: 'Accidental iron ingestion — bloody vomiting.',
          pmh: [],
          medications: [
            { drug: 'Deferoxamine', dose: '15 mg/kg/hr', frequency: 'Continuous', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Serum Iron', value: '650', unit: 'mcg/dL', reference: '60-170', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-032-1', case_id: 'seed-032',
            question_text: 'Elemental iron ingested for 15 kg child taking 15 tablets FS 325mg?',
            option_a: '20 mg/kg — not toxic',
            option_b: '65 mg/kg — potentially lethal (>60 mg/kg)',
            option_c: '325 mg/kg',
            option_d: '10 mg/kg',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: '15 × 65mg ÷ 15kg = 65 mg/kg. Lethal range.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-032-2', case_id: 'seed-032',
            question_text: 'Deferoxamine mechanism and monitoring?',
            option_a: 'Neutralizes stomach iron',
            option_b: 'Chelates free iron → ferrioxamine; vin rosé urine confirms it works',
            option_c: 'Enhances hepatic storage',
            option_d: 'GI excretion',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Vin rosé urine = active chelation.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-032-3', case_id: 'seed-032',
            question_text: 'Why not activated charcoal for iron?',
            option_a: 'Too harsh for children',
            option_b: 'Iron not adsorbed by charcoal; use whole bowel irrigation',
            option_c: 'Only for liquid poisons',
            option_d: 'Only works within 10 min',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Charcoal cannot bind metal ions.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Management of Acute Iron Poisoning',
          organization: 'American College of Medical Toxicology',
          text: 'Acute iron poisoning occurs in 5 stages: 1) GI phase (0-6h): nausea, vomiting, hematemesis, abdominal pain. 2) Latent phase (6-24h): apparent recovery but cellular toxicity continues. 3) Shock/Metabolic phase (12-24h): profound metabolic acidosis, coagulopathy, cardiogenic shock. 4) Hepatotoxicity (2-3 days). 5) Bowel obstruction (weeks). Treatment: Assess elemental iron ingested. <20 mg/kg is subtoxic. 20-40 mg/kg requires observation. >40 mg/kg is potentially toxic. >60 mg/kg is severe. Deferoxamine is the specific antidote for severe toxicity (serum iron >500 mcg/dL or presence of severe symptoms like shock, lethargy, or metabolic acidosis). Give Deferoxamine IV continuous infusion at 15 mg/kg/hr. Stop when urine loses vin rosé color and patient is clinically stable.'
        },
        {
          title: 'Role of Whole Bowel Irrigation in Iron Toxicity',
          organization: 'Clinical Toxicology Guidelines',
          text: 'Activated charcoal does NOT bind iron. Gastric lavage is generally ineffective as pills clump. Whole Bowel Irrigation (WBI) using Polyethylene Glycol (PEG) electrolyte solution is the preferred GI decontamination method for significant iron ingestions. Rate: 1-2 L/hr in adults via NG tube until rectal effluent is clear. Perform KUB x-ray to visualize radiopaque iron tablets before and after WBI.'
        },
        {
          title: 'Calculating Elemental Iron',
          organization: 'Pharmacotherapeutics',
          text: 'Different iron salts contain different percentages of elemental iron. Ferrous Sulfate = 20% elemental iron. Ferrous Gluconate = 12%. Ferrous Fumarate = 33%. Toxicity is based strictly on the elemental iron dose ingested per kg of body weight.'
        }
      ],
      calculations: [
        {
          name: 'Elemental Iron Calculation',
          formula: 'Elemental Iron (mg) = Total pills ingested × (mg per pill) × (% elemental iron)',
          explanation: 'Example: 10 pills of 325 mg ferrous sulfate. 10 × 325 mg = 3250 mg total salt. Ferrous sulfate is 20% elemental. 3250 × 0.20 = 650 mg elemental iron. For a 20 kg child: 650 mg / 20 kg = 32.5 mg/kg.'
        },
        {
          name: 'Deferoxamine Dosing',
          formula: 'Continuous IV Infusion: 15 mg/kg/hr',
          explanation: 'Max rate is 15 mg/kg/hr due to risk of hypotension. Max daily dose is generally 6 grams. Stop when clinical symptoms resolve and serum iron drops.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does Deferoxamine cause "vin rosé" urine?',
          rationale: 'Deferoxamine binds free ferric iron (Fe3+) in the blood to form ferrioxamine, a water-soluble complex that is renally excreted. This ferrioxamine complex has a characteristic reddish-pink color, colloquially known as "vin rosé" urine. The presence and clearing of this color is used as a clinical marker for ongoing excretion of iron.'
        },
        {
          question_text: 'Why is activated charcoal contraindicated in iron poisoning?',
          rationale: 'Activated charcoal does not adsorb heavy metals, including iron, lithium, and lead. Administering it provides no benefit and may complicate the use of Whole Bowel Irrigation or endoscopic interventions.'
        },
        {
          question_text: 'What causes the metabolic acidosis in stage 3 of iron toxicity?',
          rationale: 'Free circulating iron acts as a cellular toxin, uncoupling oxidative phosphorylation and poisoning mitochondrial respiration. This forces cells into anaerobic metabolism, generating massive amounts of lactic acid. Additionally, iron-induced venodilation and fluid loss cause hypovolemic shock and hypoperfusion.'
        }
      ],
      mnemonics: [
        {
          name: 'Elemental Iron Content (S-G-F)',
          concept: 'Percentage of elemental iron in salts',
          bullets: [
            'Sulfate: 20% (approx 1/5)',
            'Gluconate: 12% (approx 1/8 - the lowest)',
            'Fumarate: 33% (approx 1/3 - the highest)'
          ]
        }
      ]
    },
    tags: ['iron-poisoning', 'deferoxamine', 'chelation', 'vin-rose', 'pediatric-toxicology'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 33: CLINICAL TOXICOLOGY — METHANOL POISONING
  {
    id: 'seed-033',
    title: 'Methanol Toxicity & Acidosis',
    subject_area: 'clinical_toxicology',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Ramu Yadav',
      age: 38,
      sex: 'M',
      ward: 'Medical ICU',
      bed: 'MICU-07',
      presenting_complaint: 'Found disoriented after consuming illicit country liquor 18 hours ago. Complains of blurred vision and "snowfield" visual disturbance. Severe metabolic acidosis with high anion gap.',
      pmh: ['Alcohol Use Disorder'],
      medications: [
        { drug: 'Fomepizole (4-MP)', dose: '15 mg/kg loading', frequency: 'Then 10 mg/kg Q12H', route: 'IV' },
        { drug: 'IV Sodium Bicarbonate', dose: '150 mEq in 1L D5W', frequency: 'Titrate to pH >7.3', route: 'IV' },
        { drug: 'Folic Acid (Leucovorin)', dose: '50 mg', frequency: 'Q4-6H', route: 'IV' },
        { drug: 'Hemodialysis', dose: 'Urgent', frequency: '', route: '' },
      ],
      allergies: [],
      labs: [
        { name: 'Methanol Level', value: '45', unit: 'mg/dL', reference: '<0', is_abnormal: true },
        { name: 'pH', value: '7.10', unit: '', reference: '7.35-7.45', is_abnormal: true },
        { name: 'HCO3-', value: '6', unit: 'mEq/L', reference: '22-28', is_abnormal: true },
        { name: 'Osmolar Gap', value: '35', unit: 'mOsm/kg', reference: '<10', is_abnormal: true },
        { name: 'Anion Gap', value: '32', unit: 'mEq/L', reference: '8-12', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-033-1', case_id: 'seed-033',
        question_text: 'What is the mechanism of Fomepizole (4-Methylpyrazole) in methanol poisoning?',
        option_a: 'It directly neutralizes methanol',
        option_b: 'Fomepizole competitively inhibits Alcohol Dehydrogenase (ADH), blocking the conversion of methanol to its toxic metabolite formaldehyde (and then formic acid). Ethanol can be used as an alternative if Fomepizole is unavailable.',
        option_c: 'It enhances renal excretion of methanol',
        option_d: 'It binds formic acid directly',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'Methanol itself is not highly toxic. The toxicity comes from its metabolite formic acid, which causes retinal/optic nerve damage (blindness) and metabolic acidosis. Fomepizole blocks ADH with much higher affinity than ethanol, preventing toxic metabolite formation while allowing time for methanol to be eliminated unchanged via kidneys or dialysis.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-033-2', case_id: 'seed-033',
        question_text: 'Why is Folic Acid (or Leucovorin) given as an adjunctive therapy in methanol poisoning?',
        option_a: 'To prevent anemia',
        option_b: 'Folic acid is a cofactor for the enzyme that converts formic acid (the toxic metabolite) to carbon dioxide and water, accelerating its detoxification and reducing optic nerve damage',
        option_c: 'To improve renal clearance of methanol',
        option_d: 'To prevent lactic acidosis',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Formic acid is metabolized to CO2 and H2O by 10-formyl-tetrahydrofolate synthetase, a folate-dependent enzyme. Supplementing with Folic Acid (or its active form Leucovorin) enhances formate metabolism and reduces accumulation, potentially limiting optic nerve injury.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-033-3', case_id: 'seed-033',
        question_text: 'What are the absolute indications for hemodialysis in methanol poisoning?',
        option_a: 'Dialysis is never needed if Fomepizole is given',
        option_b: 'pH < 7.25, visual disturbances, methanol level > 50 mg/dL, renal failure, or deterioration despite Fomepizole. Hemodialysis rapidly clears both methanol and formic acid.',
        option_c: 'Dialysis only if the patient is unconscious',
        option_d: 'Dialysis only for ethylene glycol, not methanol',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Hemodialysis removes methanol and formic acid directly from the blood. Indications include severe acidosis (pH <7.25), visual symptoms (indicating formic acid accumulation in the retina), very high methanol levels (>50 mg/dL), renal failure (which impairs methanol/formate excretion), and clinical deterioration.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
    ],
    phases: [
      {
        id: 'seed-033-phase-1',
        title: 'Hour 18: Methanol Emergency',
        description: 'Ramu presents with methanol poisoning, visual symptoms, and severe acidosis. Review ADH inhibition and dialysis criteria.',
        patient_snapshot: {
          name: 'Ramu Yadav', age: 38, sex: 'M', ward: 'MICU', bed: 'MICU-07',
          presenting_complaint: 'Methanol poisoning with visual disturbance.',
          pmh: ['Alcohol Use Disorder'],
          medications: [
            { drug: 'Fomepizole', dose: '15 mg/kg loading', frequency: 'Then Q12H', route: 'IV' },
            { drug: 'Folic Acid', dose: '50 mg', frequency: 'Q4-6H', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'Methanol', value: '45', unit: 'mg/dL', reference: '<0', is_abnormal: true },
            { name: 'pH', value: '7.10', unit: '', reference: '7.35-7.45', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-033-1', case_id: 'seed-033',
            question_text: 'Fomepizole mechanism?',
            option_a: 'Neutralizes methanol',
            option_b: 'Inhibits ADH, blocks methanol → formaldehyde → formic acid',
            option_c: 'Enhances renal excretion',
            option_d: 'Binds formic acid',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Blocks toxic metabolite formation.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-033-2', case_id: 'seed-033',
            question_text: 'Why Folic Acid in methanol poisoning?',
            option_a: 'Prevent anemia',
            option_b: 'Cofactor for formic acid → CO2+H2O conversion',
            option_c: 'Renal clearance',
            option_d: 'Prevent lactic acidosis',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Folate enhances formate metabolism.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-033-3', case_id: 'seed-033',
            question_text: 'Hemodialysis indications?',
            option_a: 'Never needed with Fomepizole',
            option_b: 'pH <7.25, visual symptoms, methanol >50, renal failure',
            option_c: 'Only if unconscious',
            option_d: 'Only for ethylene glycol',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'HD rapidly clears methanol and formic acid.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Management of Toxic Alcohol Poisoning',
          organization: 'American Academy of Clinical Toxicology',
          text: 'Methanol is rapidly absorbed and metabolized by alcohol dehydrogenase (ADH) into formaldehyde, and then by aldehyde dehydrogenase into formic acid. Formic acid is highly toxic, causing severe high anion gap metabolic acidosis and retinal damage (blindness). Symptoms include "snowstorm" vision, nausea, and coma. Treatment relies on blocking ADH to prevent formation of formic acid. Fomepizole is the first-line antidote; it competitively inhibits ADH with much higher affinity than methanol. Ethanol can be used if fomepizole is unavailable. Hemodialysis is indicated for severe acidosis (pH < 7.25), visual symptoms, or very high methanol levels (>50 mg/dL).'
        },
        {
          title: 'Adjunctive Therapies in Methanol Poisoning',
          organization: 'Toxicology Guidelines',
          text: 'Formic acid is detoxified to carbon dioxide and water via a folate-dependent pathway. Therefore, Folinic Acid (Leucovorin) or Folic Acid (1 mg/kg up to 50 mg IV q6h) should be administered to enhance the elimination of formic acid. Sodium bicarbonate is given to correct severe metabolic acidosis, which also helps keep formic acid in its ionized (formate) state, preventing it from crossing into the CNS and eyes.'
        },
        {
          title: 'Osmolal Gap and Anion Gap',
          organization: 'Clinical Chemistry',
          text: 'Methanol ingestion causes an elevated Osmolal Gap early on (due to unmeasured alcohol in blood) and an elevated Anion Gap later (due to accumulation of formic acid/formate). As methanol is metabolized, the osmolal gap falls and the anion gap rises.'
        }
      ],
      calculations: [
        {
          name: 'Osmolal Gap',
          formula: 'Measured Osmolality - Calculated Osmolality',
          explanation: 'Calculated Osm = (2 × Na) + (BUN / 2.8) + (Glucose / 18). Normal gap is < 10. A high gap suggests presence of toxic alcohols (methanol, ethylene glycol, isopropanol).'
        },
        {
          name: 'Fomepizole Dosing',
          formula: 'Loading dose: 15 mg/kg IV. Maintenance: 10 mg/kg q12h for 4 doses, then 15 mg/kg q12h.',
          explanation: 'Fomepizole induces its own metabolism over time, requiring the dose to be increased to 15 mg/kg after 48 hours.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is visual impairment the hallmark of methanol toxicity?',
          rationale: 'Methanol is metabolized to formic acid, which accumulates in the optic nerve and retina. Formic acid inhibits cytochrome oxidase, leading to ATP depletion and stasis of axoplasmic flow in the optic disc, resulting in classic "snow field" vision and eventual blindness.'
        },
        {
          question_text: 'Why does hemodialysis require adjustment of fomepizole dosing?',
          rationale: 'Both methanol and the antidote fomepizole are dialyzable. During hemodialysis, fomepizole is cleared rapidly, so its dosing frequency must be increased to every 4 hours during dialysis to maintain ADH inhibition.'
        },
        {
          question_text: 'Why is sodium bicarbonate used aggressively in methanol poisoning?',
          rationale: 'Acidosis shifts the equilibrium of formic acid toward its un-ionized state. Un-ionized formic acid readily crosses lipid membranes, entering the CNS and ocular tissues. Administering bicarbonate alkalinizes the blood, trapping it as ionized formate, which is less toxic and more easily excreted.'
        }
      ],
      mnemonics: [
        {
          name: 'Causes of High Anion Gap Metabolic Acidosis (MUDPILES)',
          concept: 'Differential diagnosis for HAGMA',
          bullets: [
            'M - Methanol',
            'U - Uremia',
            'D - Diabetic Ketoacidosis',
            'P - Propylene Glycol / Paracetamol',
            'I - Iron / Isoniazid',
            'L - Lactic Acidosis',
            'E - Ethylene Glycol',
            'S - Salicylates'
          ]
        }
      ]
    },
    tags: ['methanol', 'fomepizole', 'ethanol', 'metabolic-acidosis', 'hemodialysis'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 34: CARDIOVASCULAR — NITRATE TOLERANCE
  {
    id: 'seed-034',
    title: 'Angina & Nitrate Tolerance',
    subject_area: 'cardiovascular',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Mohan Lal',
      age: 62,
      sex: 'M',
      ward: 'Cardiology',
      bed: '12',
      presenting_complaint: 'Recurrent angina despite being on continuous GTN patch (Nitroderm TTS 10 mg/24h). No patch-free interval has been maintained. Also on Metoprolol Succinate 50 mg OD.',
      pmh: ['Chronic Stable Angina', 'Hypertension', 'Dyslipidemia'],
      medications: [
        { drug: 'GTN Patch (Nitroderm TTS)', dose: '10 mg/24h', frequency: 'Continuous (no patch-free interval)', route: 'Transdermal' },
        { drug: 'Metoprolol Succinate', dose: '50 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Atorvastatin', dose: '40 mg', frequency: 'ON', route: 'Oral' },
        { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Isosorbide Mononitrate (Monotrate)', dose: '20 mg', frequency: 'BD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'BP', value: '140/88', unit: 'mmHg', reference: '<130/80', is_abnormal: true },
        { name: 'HR', value: '78', unit: 'bpm', reference: '60-100', is_abnormal: false },
        { name: 'LDL', value: '95', unit: 'mg/dL', reference: '<70', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-034-1', case_id: 'seed-034',
        question_text: 'Why is Mohan experiencing recurrent angina despite being on two nitrate preparations?',
        option_a: 'The nitrate doses are too low',
        option_b: 'Nitrate tolerance has developed due to continuous 24-hour exposure without a nitrate-free interval. A 10-12 hour patch-free period (usually overnight) is required to restore nitrate sensitivity.',
        option_c: 'Nitrates are ineffective for stable angina',
        option_d: 'Metoprolol is blocking nitrate efficacy',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Continuous nitrate exposure depletes vascular sulfhydryl groups needed for NO production, leading to tolerance within 24-48 hours. The patch should be applied for 12-14 hours and removed for 10-12 hours (usually overnight). Oral ISMN should be dosed asymmetrically (e.g., 8 AM and 2 PM) to create a nitrate-free interval.',
        subject_reference: 'Pharmacotherapeutics - Cardiology',
      },
      {
        id: 'q-034-2', case_id: 'seed-034',
        question_text: 'What is the target resting heart rate for Metoprolol in chronic stable angina, and is the current dose adequate?',
        option_a: 'HR 90-100 bpm is acceptable',
        option_b: 'Target resting HR is 55-60 bpm. Current HR of 78 bpm suggests suboptimal beta-blockade; the dose should be titrated upward.',
        option_c: 'HR does not matter with beta-blockers',
        option_d: 'Target HR is <50 bpm',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Beta-blockers reduce myocardial oxygen demand by lowering heart rate, contractility, and blood pressure. The target resting HR for anti-anginal efficacy is 55-60 bpm. Metoprolol Succinate should be titrated upward (to 100-200 mg) if HR remains above target and BP allows.',
        subject_reference: 'Pharmacotherapeutics - Cardiology',
      },
      {
        id: 'q-034-3', case_id: 'seed-034',
        question_text: 'What are the most important counseling points when discharging a patient on GTN patches?',
        option_a: 'Apply the patch to the same spot daily',
        option_b: 'Apply to a hairless area, rotate sites daily to prevent skin irritation. Remove the patch for 10-12 hours overnight (nitrate-free interval). Do NOT cut patches to adjust dose. Headache is a common initial side effect that usually resolves.',
        option_c: 'Keep the patch on continuously including during showers',
        option_d: 'GTN patches can be applied anywhere including the palms',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Key counseling: (1) Rotate application sites. (2) Remove for 10-12 hours daily to prevent tolerance. (3) Do not cut matrix patches. (4) Headache is expected initially (due to meningeal vasodilation) and usually diminishes. (5) SL GTN can still be used for breakthrough angina during the patch-free interval.',
        subject_reference: 'Pharmacotherapeutics - Patient Counseling',
      },
    ],
    phases: [
      {
        id: 'seed-034-phase-1',
        title: 'Day 1: Angina Review',
        description: 'Mohan has recurrent angina on dual nitrates. Identify tolerance and optimize regimen.',
        patient_snapshot: {
          name: 'Mohan Lal', age: 62, sex: 'M', ward: 'Cardiology', bed: '12',
          presenting_complaint: 'Recurrent angina on continuous nitrates.',
          pmh: ['Stable Angina'],
          medications: [
            { drug: 'GTN Patch', dose: '10 mg/24h', frequency: 'Continuous', route: 'Transdermal' },
            { drug: 'ISMN', dose: '20 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Metoprolol', dose: '50 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'HR', value: '78', unit: 'bpm', reference: '55-60 target', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-034-1', case_id: 'seed-034',
            question_text: 'Why recurrent angina on continuous nitrates?',
            option_a: 'Dose too low',
            option_b: 'Nitrate tolerance — need 10-12h patch-free interval',
            option_c: 'Nitrates ineffective',
            option_d: 'Metoprolol blocking nitrates',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Continuous exposure depletes sulfhydryl groups.',
            subject_reference: 'Pharmacotherapeutics - Cardiology',
          },
          {
            id: 'q-034-2', case_id: 'seed-034',
            question_text: 'Metoprolol target HR for angina?',
            option_a: '90-100 bpm',
            option_b: '55-60 bpm; HR 78 = suboptimal, titrate up',
            option_c: 'HR irrelevant',
            option_d: '<50 bpm',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Beta-blocker target: resting HR 55-60.',
            subject_reference: 'Pharmacotherapeutics - Cardiology',
          },
          {
            id: 'q-034-3', case_id: 'seed-034',
            question_text: 'GTN patch counseling points?',
            option_a: 'Same spot daily',
            option_b: 'Rotate sites, remove 10-12h overnight, don\'t cut, headache is normal initially',
            option_c: 'Keep on during showers',
            option_d: 'Apply to palms',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Nitrate-free interval prevents tolerance.',
            subject_reference: 'Pharmacotherapeutics - Patient Counseling',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'AHA/ACC Guidelines on Stable Ischemic Heart Disease',
          organization: 'American Heart Association / American College of Cardiology',
          text: 'Nitrates act by releasing nitric oxide (NO) in smooth muscle cells, causing vasodilation, primarily venodilation, which reduces preload and myocardial oxygen demand. A major clinical limitation of continuous nitrate therapy is the rapid development of pharmacological tolerance. To prevent tolerance, patients require a nitrate-free interval of 10 to 14 hours every day. For transdermal nitroglycerin patches, the patch should be applied in the morning and removed after 12-14 hours (usually removed at bedtime) to provide a nocturnal nitrate-free period.'
        },
        {
          title: 'Management of Nitrate Tolerance',
          organization: 'Clinical Cardiology Practice',
          text: 'If angina occurs during the nitrate-free interval (rebound angina), it should be managed with short-acting sublingual nitroglycerin. Alternative or concurrent antianginal therapies like Beta-blockers or Calcium Channel Blockers should be optimized to provide 24-hour coverage while still allowing the nitrate-free interval.'
        },
        {
          title: 'Contraindications and Drug Interactions',
          organization: 'FDA Safety Guidelines',
          text: 'Nitrates are strictly contraindicated in patients taking Phosphodiesterase-5 (PDE5) inhibitors (e.g., sildenafil, tadalafil, vardenafil) due to the risk of profound and potentially fatal hypotension. A minimum of 24 hours (for sildenafil) or 48 hours (for tadalafil) must separate the use of these drugs.'
        }
      ],
      calculations: [
        {
          name: 'Isosorbide Mononitrate Asymmetric Dosing',
          formula: 'IR dose at 08:00 and 15:00',
          explanation: 'Isosorbide mononitrate immediate release (IR) is dosed twice daily but NOT every 12 hours. It must be dosed 7 hours apart (e.g., 8 AM and 3 PM) to ensure a 17-hour nitrate-low interval to prevent tolerance.'
        },
        {
          name: 'Nitrate-Free Interval',
          formula: 'Target: 10-14 hours per 24 hours',
          explanation: 'For oral isosorbide dinitrate given TID, doses should be 08:00, 13:00, and 18:00 (14-hour gap overnight).'
        }
      ],
      reasoning: [
        {
          question_text: 'What is the biochemical mechanism of nitrate tolerance?',
          rationale: 'The exact mechanism is multifactorial but involves the depletion of sulfhydryl groups necessary for NO generation from nitrates, as well as an increase in systemic reactive oxygen species (ROS) which scavenge NO. Increased neurohormonal activation (RAAS) also plays a role in pseudotolerance.'
        },
        {
          question_text: 'Why does removing the nitrate patch at night prevent tolerance?',
          rationale: 'Removing the patch allows nitrate tissue levels to fall to zero. This permits the restoration of intracellular sulfhydryl donors and resets the downstream guanylyl cyclase sensitivity to nitric oxide, ensuring the medication will be effective again the next morning.'
        },
        {
          question_text: 'Why do patients get headaches with nitrates?',
          rationale: 'Nitrates cause potent vasodilation, including of the cerebral vasculature. This stretching of the meningeal vessels causes severe headaches, especially upon initiation of therapy. These headaches often diminish over a few days as mild tolerance develops without full loss of antianginal efficacy.'
        }
      ],
      mnemonics: [
        {
          name: 'Nitrate-Free Interval Rules (10-14 / 7-7)',
          concept: 'Dosing rules to prevent tolerance',
          bullets: [
            'Patches: 12h ON, 12h OFF.',
            'ISMN (IR): Dosed 7 hours apart (e.g., 8 AM & 3 PM).',
            'ISDN (TID): Dosed 08:00, 13:00, 18:00 (leave overnight clear).'
          ]
        }
      ]
    },
    tags: ['nitrate-tolerance', 'nitroglycerin-patch', 'metoprolol', 'angina', 'cardiovascular'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 35: RESPIRATORY — ASTHMA EXACERBATION
  {
    id: 'seed-035',
    title: 'Severe Acute Asthma Exacerbation',
    subject_area: 'respiratory',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Pooja Desai',
      age: 22,
      sex: 'F',
      ward: 'Emergency',
      bed: 'ER-10',
      presenting_complaint: 'Acute severe asthma exacerbation. Wheezing, dyspnea, and unable to complete sentences. SpO2 88% on room air. Has been overusing her Salbutamol inhaler for the past week.',
      pmh: ['Asthma (since childhood)'],
      medications: [
        { drug: 'Salbutamol MDI', dose: '2 puffs', frequency: 'PRN (overused)', route: 'Inhaled' },
        { drug: 'Budesonide/Formoterol', dose: '200/6 mcg', frequency: 'BD', route: 'Inhaled (non-compliant)' },
        { drug: 'Ipratropium/Salbutamol', dose: '500/2500 mcg', frequency: 'Stat', route: 'Nebulized' },
        { drug: 'Hydrocortisone', dose: '100 mg', frequency: 'Stat', route: 'IV' },
        { drug: 'Magnesium Sulfate', dose: '2 g', frequency: 'Over 20 mins', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'SpO2', value: '88', unit: '%', reference: '>94', is_abnormal: true },
        { name: 'PEFR', value: '120', unit: 'L/min', reference: '>380', is_abnormal: true },
        { name: 'K+', value: '3.1', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-035-1', case_id: 'seed-035',
        question_text: 'What is the role of IV Magnesium Sulfate in acute severe asthma, and what side effect should the clinical pharmacist monitor?',
        option_a: 'It acts as an anti-inflammatory; monitor for hyperglycemia',
        option_b: 'It is a smooth muscle relaxant that promotes bronchodilation by blocking calcium channels. Monitor for hypotension and loss of deep tendon reflexes.',
        option_c: 'It treats hypomagnesemia; no monitoring needed',
        option_d: 'It enhances corticosteroid absorption; monitor for hypokalemia',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'IV Magnesium Sulfate is indicated in acute severe asthma not responding to initial bronchodilators. It acts as a calcium antagonist, causing bronchial smooth muscle relaxation. Rapid infusion can cause hypotension, flushing, and in overdose, respiratory depression and loss of deep tendon reflexes.',
        subject_reference: 'Pharmacotherapeutics - Respiratory',
      },
      {
        id: 'q-035-2', case_id: 'seed-035',
        question_text: 'Why is the patient\'s potassium level low (3.1 mEq/L), and what intervention is required?',
        option_a: 'Asthma inherently causes hypokalemia',
        option_b: 'High doses of beta-2 agonists (Salbutamol) drive potassium intracellularly, causing hypokalemia. Concurrent IV corticosteroids worsen this. The pharmacist should recommend IV/oral potassium replacement and continuous ECG monitoring.',
        option_c: 'Magnesium Sulfate causes potassium excretion',
        option_d: 'It is an artifact; no action needed',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'Beta-2 agonists stimulate the Na+/K+-ATPase pump, shifting potassium into cells and causing transient but potentially dangerous hypokalemia. Systemic corticosteroids further contribute to renal potassium loss. Continuous ECG monitoring and potassium replacement are required during aggressive asthma resuscitation.',
        subject_reference: 'Pharmacotherapeutics - Respiratory / ADR',
      },
      {
        id: 'q-035-3', case_id: 'seed-035',
        question_text: 'Upon discharge, how should Pooja\'s asthma maintenance therapy be optimized per GINA guidelines?',
        option_a: 'Continue Salbutamol PRN only',
        option_b: 'Discontinue Salbutamol PRN. Switch to low-dose ICS-Formoterol (e.g., Budesonide/Formoterol) as Maintenance And Reliever Therapy (MART) to treat underlying inflammation whenever she needs symptom relief.',
        option_c: 'Add oral corticosteroids permanently',
        option_d: 'Start Tiotropium daily',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'GINA no longer recommends SABA (Salbutamol) only for asthma due to the risk of severe exacerbations. The preferred strategy is MART (Maintenance And Reliever Therapy) using a combination of an inhaled corticosteroid (ICS) and the rapid-onset LABA Formoterol, ensuring that every time the patient takes a reliever, they also get anti-inflammatory therapy.',
        subject_reference: 'Pharmacotherapeutics - Respiratory Guidelines',
      },
    ],
    phases: [
      {
        id: 'seed-035-phase-1',
        title: 'Day 1: Asthma Emergency',
        description: 'Pooja presents with severe asthma exacerbation. Review IV Magnesium use and ADRs.',
        patient_snapshot: {
          name: 'Pooja Desai', age: 22, sex: 'F', ward: 'ER', bed: 'ER-10',
          presenting_complaint: 'Severe asthma exacerbation.',
          pmh: ['Asthma'],
          medications: [
            { drug: 'Salbutamol', dose: 'PRN', frequency: 'Overused', route: 'Inhaled' },
            { drug: 'Magnesium Sulfate', dose: '2 g', frequency: 'Over 20 min', route: 'IV' },
          ],
          allergies: [],
          labs: [
            { name: 'K+', value: '3.1', unit: 'mEq/L', reference: '3.5-5.0', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-035-1', case_id: 'seed-035',
            question_text: 'Role of IV Magnesium and monitoring?',
            option_a: 'Anti-inflammatory; monitor glucose',
            option_b: 'Smooth muscle relaxant; monitor for hypotension and loss of reflexes',
            option_c: 'Treats hypomagnesemia only',
            option_d: 'Enhances steroids',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Calcium antagonist causing bronchodilation.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          },
          {
            id: 'q-035-2', case_id: 'seed-035',
            question_text: 'Why is K+ low (3.1)?',
            option_a: 'Asthma symptom',
            option_b: 'High-dose Salbutamol drives K+ intracellularly; need replacement + ECG',
            option_c: 'Magnesium side effect',
            option_d: 'Artifact',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Beta-2 agonists stimulate Na/K pump.',
            subject_reference: 'Pharmacotherapeutics - ADR',
          },
          {
            id: 'q-035-3', case_id: 'seed-035',
            question_text: 'Discharge optimization per GINA?',
            option_a: 'Salbutamol PRN',
            option_b: 'ICS-Formoterol as Maintenance And Reliever Therapy (MART)',
            option_c: 'Oral steroids',
            option_d: 'Tiotropium',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'GINA recommends MART to treat inflammation with every reliever use.',
            subject_reference: 'Pharmacotherapeutics - Respiratory',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'GINA Strategy for Asthma Management and Prevention',
          organization: 'Global Initiative for Asthma (GINA)',
          text: 'For acute severe asthma exacerbations in the ED, initial treatment includes high-dose inhaled short-acting beta2-agonists (SABA), early systemic corticosteroids, and oxygen to maintain SpO2 93-95%. Ipratropium bromide should be added to SABAs for severe exacerbations in the ED setting. Systemic corticosteroids (e.g., oral prednisone 40-50 mg/day or IV hydrocortisone) should be administered within 1 hour of presentation, as they take 4-6 hours to reduce airway inflammation.'
        },
        {
          title: 'Magnesium Sulfate in Severe Asthma',
          organization: 'GINA / ER Guidelines',
          text: 'Intravenous magnesium sulfate is not recommended for routine use in asthma exacerbations, but it should be considered in patients with severe exacerbations (FEV1 <25-30% predicted) who do not respond to initial treatment with salbutamol, ipratropium, and systemic corticosteroids. Dose is typically 2g IV infusion over 20 minutes.'
        },
        {
          title: 'Discharge Medications',
          organization: 'GINA',
          text: 'Patients discharged from the ED must be provided a short course of oral corticosteroids (e.g., Prednisolone 40-50mg for 5-7 days) and should be initiated or stepped up on Inhaled Corticosteroid (ICS) controller therapy to prevent relapse.'
        }
      ],
      calculations: [
        {
          name: 'Prednisolone Burst Dosing',
          formula: 'Adults: 40-50 mg/day for 5-7 days',
          explanation: 'Tapering is generally not needed if the duration of steroid therapy is less than 2 weeks, because HPA axis suppression does not typically occur in this short timeframe.'
        },
        {
          name: 'Salbutamol Nebulization Dosing',
          formula: 'Adults: 2.5 - 5 mg every 20 minutes for 3 doses, then 2.5 - 10 mg every 1-4 hours as needed.',
          explanation: 'Continuous nebulization (10-15 mg/hour) can be used for very severe cases unresponsive to intermittent nebulization.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why is Ipratropium only used in the ED and not typically upon discharge?',
          rationale: 'Ipratropium provides additive bronchodilation and reduces hospital admission rates when used with salbutamol in the initial ED management of severe asthma. However, studies show no continued benefit once the patient is hospitalized or discharged, and its continued use adds unnecessary cost and side effects (dry mouth).'
        },
        {
          question_text: 'What is the rationale for systemic corticosteroids over inhaled steroids in acute exacerbations?',
          rationale: 'During an acute severe exacerbation, massive airway edema, mucus plugging, and bronchoconstriction prevent inhaled medications from reaching the distal airways. Systemic corticosteroids are delivered via the bloodstream to all areas of the lung, aggressively down-regulating the inflammatory cascade.'
        },
        {
          question_text: 'Why monitor potassium in patients receiving frequent salbutamol nebulizations?',
          rationale: 'High-dose beta-2 agonists stimulate the Na+/K+ ATPase pump, driving potassium into the intracellular space and causing potentially severe hypokalemia. Concurrent use of corticosteroids can worsen this hypokalemia.'
        }
      ],
      mnemonics: [
        {
          name: 'Acute Asthma Management (O-S-H-I-M)',
          concept: 'Initial ER interventions',
          bullets: [
            'O - Oxygen (target SpO2 93-95%)',
            'S - Salbutamol (SABA) via nebulizer/MDI',
            'H - Hydrocortisone IV or Prednisone PO',
            'I - Ipratropium bromide (add to SABA in ED)',
            'M - Magnesium Sulfate IV (for severe refractory cases)'
          ]
        }
      ]
    },
    tags: ['asthma-exacerbation', 'salbutamol', 'ipratropium', 'magnesium-sulfate', 'respiratory'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 36: ONCOLOGY/HEMATOLOGY — DVT BRIDGE
  {
    id: 'seed-036',
    title: 'DVT Treatment & Warfarin Bridge',
    subject_area: 'oncology_hematology',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Anil Kumar',
      age: 55,
      sex: 'M',
      ward: 'General Medicine',
      bed: '14',
      presenting_complaint: 'Newly diagnosed unprovoked deep vein thrombosis (DVT) in the left leg. Started on Enoxaparin and Warfarin simultaneously.',
      pmh: ['Hypertension'],
      medications: [
        { drug: 'Enoxaparin', dose: '1 mg/kg (80 mg)', frequency: 'BD', route: 'SC' },
        { drug: 'Warfarin', dose: '5 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Baseline INR', value: '1.1', unit: '', reference: '0.8-1.2', is_abnormal: false },
        { name: 'Current INR (Day 3)', value: '1.8', unit: '', reference: '2.0-3.0 (Target)', is_abnormal: true },
        { name: 'Platelets', value: '250', unit: 'x10^3/uL', reference: '150-450', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-036-1', case_id: 'seed-036',
        question_text: 'Why is Enoxaparin co-administered ("bridged") with Warfarin initially, rather than starting Warfarin alone?',
        option_a: 'To enhance Warfarin absorption',
        option_b: 'Warfarin initially depletes Protein C and S (natural anticoagulants) before depleting clotting factors II, VII, IX, and X, creating a transient hypercoagulable state. Enoxaparin provides immediate anticoagulation and prevents paradoxical thrombosis.',
        option_c: 'Warfarin takes 2 weeks to start working',
        option_d: 'To prevent HIT',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'Warfarin inhibits Vitamin K-dependent clotting factors (II, VII, IX, X) AND natural anticoagulants Protein C and S. Because Protein C has a very short half-life (8 hours), it depletes first, leading to a temporary hypercoagulable state. A parenteral anticoagulant (Enoxaparin) is required to "bridge" this risky period.',
        subject_reference: 'Pharmacotherapeutics - Hematology',
      },
      {
        id: 'q-036-2', case_id: 'seed-036',
        question_text: 'When can Enoxaparin be safely discontinued?',
        option_a: 'After exactly 3 days',
        option_b: 'After a minimum of 5 days of overlap AND when the INR is therapeutic (≥ 2.0) for at least 24-48 hours (two consecutive readings)',
        option_c: 'When the INR reaches 1.5',
        option_d: 'After 14 days regardless of INR',
        correct_option: 'B',
        pci_duty_category: 'drug_therapy_monitoring',
        question_type: 'mcq',
        explanation_text: 'Bridging therapy must continue for at least 5 days (the time it takes for Factor II, which has a 60-72 hour half-life, to adequately deplete) AND until the INR has been therapeutic (2.0-3.0) for 24-48 hours.',
        subject_reference: 'Pharmacotherapeutics - Hematology',
      },
      {
        id: 'q-036-3', case_id: 'seed-036',
        question_text: 'What critical dietary counseling should the clinical pharmacist provide regarding Warfarin?',
        option_a: 'Completely avoid all green leafy vegetables',
        option_b: 'Maintain a CONSISTENT intake of Vitamin K-containing foods (e.g., spinach, broccoli). Sudden increases in intake will lower INR (increase clot risk); sudden decreases will raise INR (increase bleeding risk).',
        option_c: 'Take Vitamin K supplements daily',
        option_d: 'Diet does not affect Warfarin if the dose is correct',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Warfarin acts as a Vitamin K antagonist. Patients do not need to avoid Vitamin K, but they must keep their dietary intake consistent. Fluctuations in dietary Vitamin K will directly destabilize INR control.',
        subject_reference: 'Pharmacotherapeutics - Patient Counseling',
      },
    ],
    phases: [
      {
        id: 'seed-036-phase-1',
        title: 'Day 3: DVT Bridging',
        description: 'Anil is on Day 3 of Enoxaparin/Warfarin bridging. Review bridging rationale and INR targets.',
        patient_snapshot: {
          name: 'Anil Kumar', age: 55, sex: 'M', ward: 'Medicine', bed: '14',
          presenting_complaint: 'New DVT on Warfarin + Enoxaparin.',
          pmh: ['Hypertension'],
          medications: [
            { drug: 'Enoxaparin', dose: '80 mg', frequency: 'BD', route: 'SC' },
            { drug: 'Warfarin', dose: '5 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'INR', value: '1.8', unit: '', reference: '2.0-3.0 target', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-036-1', case_id: 'seed-036',
            question_text: 'Why bridge Warfarin with Enoxaparin?',
            option_a: 'Enhance absorption',
            option_b: 'Warfarin transiently depletes Protein C (hypercoagulable state); Enoxaparin prevents thrombosis',
            option_c: 'Warfarin takes 2 weeks',
            option_d: 'Prevent HIT',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Protein C has a short half-life.',
            subject_reference: 'Pharmacotherapeutics - Hematology',
          },
          {
            id: 'q-036-2', case_id: 'seed-036',
            question_text: 'When to stop Enoxaparin?',
            option_a: 'After 3 days',
            option_b: 'Min 5 days overlap AND INR ≥ 2.0 for 24-48 hours',
            option_c: 'INR 1.5',
            option_d: 'After 14 days',
            correct_option: 'B',
            pci_duty_category: 'drug_therapy_monitoring',
            question_type: 'mcq',
            explanation_text: 'Must ensure Factor II (t1/2 = 60-72h) is depleted.',
            subject_reference: 'Pharmacotherapeutics - Hematology',
          },
          {
            id: 'q-036-3', case_id: 'seed-036',
            question_text: 'Warfarin dietary counseling?',
            option_a: 'Avoid green vegetables',
            option_b: 'Maintain CONSISTENT Vitamin K intake',
            option_c: 'Take Vitamin K supplements',
            option_d: 'Diet doesn\'t matter',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Consistency is key for stable INR.',
            subject_reference: 'Pharmacotherapeutics - Patient Counseling',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'CHEST Guidelines on Antithrombotic Therapy for VTE Disease',
          organization: 'American College of Chest Physicians (ACCP)',
          text: 'In patients with acute DVT or PE who are treated with warfarin, parenteral anticoagulation (e.g., LMWH like enoxaparin or UFH) must be overlapped with warfarin for a minimum of 5 days AND until the INR is ≥ 2.0 for at least 24 hours (typically two consecutive daily INR readings). This "bridging" period is necessary because warfarin initially causes a procoagulant state before full anticoagulation is achieved.'
        },
        {
          title: 'DOACs vs Warfarin in Acute VTE',
          organization: 'CHEST Guidelines',
          text: 'Direct Oral Anticoagulants (DOACs) like apixaban or rivaroxaban are now preferred over warfarin for the treatment of acute VTE in non-pregnant patients without severe renal impairment or active cancer. If apixaban or rivaroxaban is chosen, no parenteral bridging is needed. If dabigatran or edoxaban is chosen, 5-10 days of parenteral anticoagulation must be given first.'
        },
        {
          title: 'Heparin-Induced Thrombocytopenia (HIT)',
          organization: 'Hematology Guidelines',
          text: 'If a patient develops HIT while on LMWH/UFH bridging to warfarin, warfarin is strictly contraindicated and must be discontinued, with reversal using Vitamin K if needed. Warfarin in HIT can cause venous limb gangrene due to severe depletion of Protein C.'
        }
      ],
      calculations: [
        {
          name: 'Enoxaparin Treatment Dosing for VTE',
          formula: '1 mg/kg subcutaneously every 12 hours OR 1.5 mg/kg once daily',
          explanation: 'Dose must be adjusted for renal impairment. If CrCl < 30 mL/min, the dose is reduced to 1 mg/kg once daily.'
        },
        {
          name: 'Warfarin Maintenance Dose adjustments',
          formula: 'Change weekly dose by 10-20%',
          explanation: 'Wait for steady state (typically 5-7 days after dose change) before rechecking INR, unless the INR is significantly high or low.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does warfarin cause an initial procoagulant state?',
          rationale: 'Warfarin inhibits Vitamin K-dependent clotting factors (II, VII, IX, X) AND the endogenous anticoagulant proteins C and S. Protein C has a very short half-life (8 hours) compared to prothrombin (Factor II, 72 hours). Thus, Protein C depletes quickly, leaving the patient temporarily hypercoagulable until Factor II also depletes. Bridging with LMWH covers this high-risk period.'
        },
        {
          question_text: 'Why must bridging last a MINIMUM of 5 days, even if the INR is therapeutic on Day 3?',
          rationale: 'The INR primarily reflects the depletion of Factor VII (half-life of 6 hours), which affects the PT. However, true antithrombotic protection is only achieved when prothrombin (Factor II, half-life 72 hours) is depleted. It takes at least 5 days (roughly 2 half-lives of Factor II) for Factor II levels to drop adequately, regardless of how quickly the INR rises.'
        },
        {
          question_text: 'Why is LMWH preferred over UFH for bridging?',
          rationale: 'LMWH has a more predictable dose-response relationship, longer half-life allowing once or twice daily SC dosing, does not require routine aPTT monitoring, and has a lower incidence of HIT compared to UFH.'
        }
      ],
      mnemonics: [
        {
          name: 'Warfarin Bridging Rule (5 and 2)',
          concept: 'When to stop the bridge',
          bullets: [
            '5: Minimum of 5 days of overlap with LMWH/UFH.',
            '2: AND until INR is > 2.0 for 24 hours.'
          ]
        }
      ]
    },
    tags: ['DVT', 'enoxaparin', 'warfarin', 'bridging-therapy', 'anticoagulation'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 37: NEUROLOGY/PSYCHIATRY — NMS
  {
    id: 'seed-037',
    title: 'Neuroleptic Malignant Syndrome (NMS)',
    subject_area: 'neurology_psychiatry',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Sunita Rao',
      age: 28,
      sex: 'F',
      ward: 'Psychiatry ICU',
      bed: 'PICU-01',
      presenting_complaint: 'Severe muscle rigidity ("lead-pipe"), hyperthermia (41.0°C), altered sensorium, and autonomic instability. Recently started on Haloperidol for acute schizophrenia.',
      pmh: ['Schizophrenia'],
      medications: [
        { drug: 'Haloperidol', dose: '10 mg', frequency: 'BD', route: 'Oral/IM (stopped now)' },
        { drug: 'Bromocriptine', dose: '2.5 mg', frequency: 'Q8H', route: 'Oral' },
        { drug: 'Dantrolene', dose: '1 mg/kg', frequency: 'Stat', route: 'IV' },
        { drug: 'IV Normal Saline', dose: '150 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Creatine Kinase (CK)', value: '15000', unit: 'U/L', reference: '22-198', is_abnormal: true },
        { name: 'WBC', value: '18', unit: 'x10^9/L', reference: '4.0-11.0', is_abnormal: true },
        { name: 'Temp', value: '41.0', unit: '°C', reference: '36.5-37.5', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-037-1', case_id: 'seed-037',
        question_text: 'What is the pathophysiological basis of Neuroleptic Malignant Syndrome (NMS)?',
        option_a: 'Excess serotonin in the CNS',
        option_b: 'Severe dopamine (D2) receptor blockade in the hypothalamus (causing hyperthermia) and nigrostriatal pathway (causing rigidity)',
        option_c: 'Allergic reaction to antipsychotics',
        option_d: 'Depletion of acetylcholine',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'NMS is a life-threatening complication of antipsychotic therapy (especially high-potency typicals like Haloperidol). It is caused by extreme D2 receptor blockade, leading to altered thermoregulation (hyperthermia) and severe extrapyramidal symptoms ("lead-pipe" rigidity).',
        subject_reference: 'Pharmacotherapeutics - Psychiatry',
      },
      {
        id: 'q-037-2', case_id: 'seed-037',
        question_text: 'What is the mechanism of Dantrolene in treating NMS?',
        option_a: 'It is a dopamine agonist',
        option_b: 'It is a direct-acting skeletal muscle relaxant that blocks the Ryanodine receptor (RyR1), inhibiting calcium release from the sarcoplasmic reticulum and reversing rigidity and hyperthermia',
        option_c: 'It acts centrally as a GABA agonist',
        option_d: 'It directly cools the blood',
        correct_option: 'B',
        pci_duty_category: 'drug_poison_info',
        question_type: 'mcq',
        explanation_text: 'Dantrolene uncouples the excitation-contraction process in skeletal muscle by blocking the Ryanodine receptor. This stops the massive calcium release, resolving the severe muscle rigidity and stopping the excessive heat production (hyperthermia) caused by sustained muscle contraction.',
        subject_reference: 'Pharmacotherapeutics - Psychiatry',
      },
      {
        id: 'q-037-3', case_id: 'seed-037',
        question_text: 'Why is aggressive IV hydration critical in NMS?',
        option_a: 'To treat concurrent dehydration only',
        option_b: 'The severe muscle breakdown (rhabdomyolysis, indicated by CK > 15,000) releases large amounts of myoglobin, which is highly toxic to renal tubules. Aggressive hydration prevents acute kidney injury.',
        option_c: 'To dilute the Haloperidol in the blood',
        option_d: 'To reduce fever',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'In NMS, extreme muscle rigidity leads to rhabdomyolysis and massive myoglobin release (myoglobinuria). Myoglobin precipitates in the renal tubules, causing acute tubular necrosis (ATN). Aggressive IV hydration (to maintain high urine output) is essential to flush the tubules and prevent AKI.',
        subject_reference: 'Pharmacotherapeutics - Nephrology/Psychiatry',
      },
    ],
    phases: [
      {
        id: 'seed-037-phase-1',
        title: 'Hour 1: NMS Recognition',
        description: 'Sunita presents with NMS from Haloperidol. Review pathophysiology and antidotes.',
        patient_snapshot: {
          name: 'Sunita Rao', age: 28, sex: 'F', ward: 'PICU', bed: 'PICU-01',
          presenting_complaint: 'Lead-pipe rigidity, hyperthermia on Haloperidol.',
          pmh: ['Schizophrenia'],
          medications: [
            { drug: 'Haloperidol', dose: 'Stopped', frequency: '', route: '' },
            { drug: 'Dantrolene', dose: '1 mg/kg', frequency: 'Stat', route: 'IV' },
            { drug: 'Bromocriptine', dose: '2.5 mg', frequency: 'Q8H', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'CK', value: '15000', unit: 'U/L', reference: '22-198', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-037-1', case_id: 'seed-037',
            question_text: 'Pathophysiology of NMS?',
            option_a: 'Serotonin excess',
            option_b: 'Severe Dopamine (D2) receptor blockade',
            option_c: 'Allergy',
            option_d: 'ACh depletion',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'D2 blockade causes hyperthermia and rigidity.',
            subject_reference: 'Pharmacotherapeutics - Psychiatry',
          },
          {
            id: 'q-037-2', case_id: 'seed-037',
            question_text: 'Dantrolene mechanism?',
            option_a: 'Dopamine agonist',
            option_b: 'Direct skeletal muscle relaxant (blocks RyR1 receptor, inhibiting calcium release)',
            option_c: 'GABA agonist',
            option_d: 'Cools blood',
            correct_option: 'B',
            pci_duty_category: 'drug_poison_info',
            question_type: 'mcq',
            explanation_text: 'Stops massive muscle contraction and heat production.',
            subject_reference: 'Pharmacotherapeutics - Psychiatry',
          },
          {
            id: 'q-037-3', case_id: 'seed-037',
            question_text: 'Why aggressive IV hydration in NMS?',
            option_a: 'Dehydration',
            option_b: 'Prevent myoglobinuric AKI from severe rhabdomyolysis (CK 15,000)',
            option_c: 'Dilute drug',
            option_d: 'Reduce fever',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Myoglobin is toxic to renal tubules; hydration flushes them.',
            subject_reference: 'Pharmacotherapeutics - Nephrology',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Management of Neuroleptic Malignant Syndrome',
          organization: 'American Psychiatric Association',
          text: 'NMS is a life-threatening neurologic emergency associated with the use of neuroleptic (antipsychotic) agents. It is characterized by a tetrad of altered mental status, autonomic instability, hyperthermia, and "lead-pipe" severe muscle rigidity. First step in management is the IMMEDIATE discontinuation of the offending agent. Supportive care (cooling, hydration) is critical. For moderate to severe cases, Dantrolene (direct-acting muscle relaxant) or Bromocriptine (dopamine agonist) can be used.'
        },
        {
          title: 'Differentiation from Serotonin Syndrome',
          organization: 'Neurology Guidelines',
          text: 'NMS is caused by dopamine blockade, while Serotonin Syndrome is caused by excess serotonin. Both feature hyperthermia and autonomic instability. However, NMS presents with "lead-pipe" rigidity and hyporeflexia, whereas Serotonin Syndrome presents with hyperreflexia, myoclonus, and GI symptoms.'
        },
        {
          title: 'Restarting Antipsychotics after NMS',
          organization: 'Clinical Psychiatry',
          text: 'If a patient requires antipsychotics after an NMS episode, wait at least 2 weeks before rechallenge. Choose an agent with lower dopamine affinity (like an atypical antipsychotic, e.g., quetiapine), start at a very low dose, and titrate extremely slowly.'
        }
      ],
      calculations: [
        {
          name: 'Dantrolene Dosing',
          formula: '1 to 2.5 mg/kg IV',
          explanation: 'Can be repeated up to a max of 10 mg/kg/day. Used to reduce extreme muscle rigidity and hyperthermia.'
        },
        {
          name: 'Creatine Kinase (CK) Elevation',
          formula: 'Monitor peak CK levels',
          explanation: 'Extreme muscle rigidity leads to rhabdomyolysis. CK levels > 1000 IU/L (often > 10,000) are highly suggestive of NMS and indicate risk for acute kidney injury.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does dopamine blockade cause hyperthermia and rigidity?',
          rationale: 'Blockade of D2 receptors in the hypothalamus causes a dysregulation of the body\'s temperature set point (hyperthermia). Blockade of D2 receptors in the nigrostriatal pathway causes severe Parkinsonian symptoms, leading to extreme "lead-pipe" muscle rigidity.'
        },
        {
          question_text: 'How does Dantrolene work in NMS?',
          rationale: 'Dantrolene binds to the ryanodine receptor (RyR1) on the sarcoplasmic reticulum in skeletal muscle, blocking the release of calcium. Without intracellular calcium, the muscle cannot contract, which rapidly reduces the life-threatening rigidity and heat production.'
        },
        {
          question_text: 'Why is hydration so critical in NMS?',
          rationale: 'The profound muscle rigidity causes massive rhabdomyolysis, releasing myoglobin into the bloodstream. Myoglobin is toxic to the renal tubules. Aggressive IV fluid hydration is necessary to flush the kidneys and prevent acute kidney injury (myoglobinuric renal failure).'
        }
      ],
      mnemonics: [
        {
          name: 'Features of NMS (F-E-V-E-R)',
          concept: 'Diagnostic tetrad + labs',
          bullets: [
            'F - Fever (Hyperthermia)',
            'E - Encephalopathy (Altered mental status)',
            'V - Vitals unstable (Autonomic instability)',
            'E - Elevated enzymes (High CK)',
            'R - Rigidity of muscles (Lead-pipe)'
          ]
        }
      ]
    },
    tags: ['NMS', 'haloperidol', 'dantrolene', 'bromocriptine', 'rhabdomyolysis'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 38: NEUROLOGY/PSYCHIATRY — LITHIUM TOXICITY
  {
    id: 'seed-038',
    title: 'Bipolar Disorder & Lithium Toxicity',
    subject_area: 'neurology_psychiatry',
    difficulty: 'hard',
    patient_snapshot: {
      name: 'Vikas Sharma',
      age: 45,
      sex: 'M',
      ward: 'Psychiatry / Medicine',
      bed: '2',
      presenting_complaint: 'Coarse tremors, ataxia, confusion, and vomiting. Known bipolar disorder on Lithium for 5 years. Recently started taking over-the-counter Ibuprofen for knee pain.',
      pmh: ['Bipolar Affective Disorder'],
      medications: [
        { drug: 'Lithium Carbonate', dose: '600 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Ibuprofen', dose: '400 mg', frequency: 'TDS (OTC)', route: 'Oral' },
        { drug: 'IV Normal Saline', dose: '150 mL/h', frequency: 'Continuous', route: 'IV' },
      ],
      allergies: [],
      labs: [
        { name: 'Lithium Level', value: '2.5', unit: 'mEq/L', reference: '0.6-1.2', is_abnormal: true },
        { name: 'SCr', value: '1.4', unit: 'mg/dL', reference: '0.7-1.3', is_abnormal: true },
        { name: 'Na+', value: '135', unit: 'mEq/L', reference: '135-145', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-038-1', case_id: 'seed-038',
        question_text: 'What drug interaction likely precipitated Vikas\'s Lithium toxicity?',
        option_a: 'None, Lithium levels fluctuate randomly',
        option_b: 'Ibuprofen (an NSAID) inhibits renal prostaglandins, reducing renal blood flow and dramatically decreasing lithium clearance, leading to accumulation and toxicity',
        option_c: 'Ibuprofen competes with Lithium for protein binding',
        option_d: 'Ibuprofen increases Lithium absorption in the gut',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'Lithium is 100% renally cleared and handled similarly to sodium in the proximal tubule. NSAIDs inhibit afferent arteriolar vasodilation (via prostaglandin block), reducing GFR and enhancing proximal tubular reabsorption of lithium. This causes rapid and dangerous lithium accumulation.',
        subject_reference: 'Pharmacotherapeutics - Psychiatry/Interactions',
      },
      {
        id: 'q-038-2', case_id: 'seed-038',
        question_text: 'What is the standard treatment for moderate Lithium toxicity (level 2.5 mEq/L) with preserved renal function?',
        option_a: 'Administer Fomepizole',
        option_b: 'Stop Lithium and NSAIDs, and administer aggressive IV Normal Saline hydration. Sodium competes with lithium for reabsorption, enhancing lithium excretion.',
        option_c: 'Immediate hemodialysis',
        option_d: 'Administer activated charcoal',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'For moderate toxicity (levels 1.5-2.5) without severe neurological signs, the primary treatment is 0.9% NaCl infusion. Sodium load increases GFR and decreases proximal tubular reabsorption of lithium. Hemodialysis is reserved for levels >4.0 mEq/L or severe neurotoxicity/renal failure. Charcoal does not bind lithium.',
        subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
      },
      {
        id: 'q-038-3', case_id: 'seed-038',
        question_text: 'Besides NSAIDs, which other common drug classes significantly increase Lithium levels and should be avoided?',
        option_a: 'Beta-blockers and Calcium Channel Blockers',
        option_b: 'Thiazide diuretics (e.g., Hydrochlorothiazide) and ACE Inhibitors/ARBs (e.g., Ramipril, Losartan)',
        option_c: 'Paracetamol and Aspirin',
        option_d: 'Statins',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'The "Holy Trinity" of Lithium interactions are NSAIDs, Thiazides, and ACEI/ARBs. Thiazides induce a mild sodium-depleted state, causing the kidneys to compensate by reabsorbing more sodium (and therefore more lithium) in the proximal tubule, spiking lithium levels by up to 40%.',
        subject_reference: 'Pharmacotherapeutics - Drug Interactions',
      },
    ],
    phases: [
      {
        id: 'seed-038-phase-1',
        title: 'Day 1: Lithium Toxicity',
        description: 'Vikas presents with Lithium toxicity. Review NSAID interactions and management.',
        patient_snapshot: {
          name: 'Vikas Sharma', age: 45, sex: 'M', ward: 'Medicine', bed: '2',
          presenting_complaint: 'Coarse tremors, confusion on Lithium.',
          pmh: ['Bipolar Disorder'],
          medications: [
            { drug: 'Lithium Carbonate', dose: '600 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Ibuprofen', dose: '400 mg', frequency: 'TDS', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Lithium Level', value: '2.5', unit: 'mEq/L', reference: '0.6-1.2', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-038-1', case_id: 'seed-038',
            question_text: 'What caused the Lithium toxicity?',
            option_a: 'Random fluctuation',
            option_b: 'Ibuprofen (NSAID) reduces renal blood flow, decreasing lithium clearance',
            option_c: 'Protein binding competition',
            option_d: 'Increased absorption',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'NSAIDs block prostaglandins, reducing GFR and lithium clearance.',
            subject_reference: 'Pharmacotherapeutics - Psychiatry',
          },
          {
            id: 'q-038-2', case_id: 'seed-038',
            question_text: 'Treatment for Lithium level 2.5 mEq/L?',
            option_a: 'Fomepizole',
            option_b: 'Aggressive IV Normal Saline (enhances renal excretion)',
            option_c: 'Immediate hemodialysis',
            option_d: 'Activated charcoal',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'Sodium load reduces proximal tubular reabsorption of lithium.',
            subject_reference: 'Pharmacotherapeutics - Clinical Toxicology',
          },
          {
            id: 'q-038-3', case_id: 'seed-038',
            question_text: 'Other drug classes that increase Lithium levels?',
            option_a: 'Beta-blockers',
            option_b: 'Thiazide diuretics and ACE Inhibitors/ARBs',
            option_c: 'Paracetamol',
            option_d: 'Statins',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Thiazides cause compensatory proximal Na/Lithium reabsorption.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Management of Lithium Toxicity',
          organization: 'American College of Medical Toxicology',
          text: 'Lithium has a narrow therapeutic index (0.6 - 1.2 mEq/L). Toxicity can be acute, acute-on-chronic, or chronic. Chronic toxicity often presents at lower serum levels due to tissue accumulation. Symptoms include tremor, ataxia, confusion, and eventually seizures and coma. Because lithium is handled by the kidneys similarly to sodium, dehydration or sodium depletion (e.g., from diuretics) leads to increased lithium reabsorption and toxicity. Treatment consists of aggressive IV fluid resuscitation with normal saline to enhance renal clearance. Hemodialysis is indicated for severe neurological symptoms, renal failure, or levels > 4.0 mEq/L.'
        },
        {
          title: 'Drug Interactions with Lithium',
          organization: 'Psychiatric Pharmacy Guidelines',
          text: 'Certain drugs significantly decrease lithium clearance, leading to toxicity. The classic offenders are Thiazide diuretics (reduce clearance by 25-40%), NSAIDs, and ACE Inhibitors/ARBs. These should be avoided or used with extreme caution and dosage adjustment in patients on lithium.'
        },
        {
          title: 'GI Decontamination',
          organization: 'Toxicology Guidelines',
          text: 'Activated charcoal does NOT bind lithium. Whole bowel irrigation (WBI) may be considered for massive acute ingestions of sustained-release lithium preparations, provided the patient can protect their airway.'
        }
      ],
      calculations: [
        {
          name: 'Lithium Clearance Estimation',
          formula: 'Lithium clearance = 0.2 × Creatinine Clearance',
          explanation: 'Lithium is exclusively cleared by the kidneys. Any decline in GFR directly and proportionally increases lithium levels.'
        },
        {
          name: 'Hemodialysis Threshold',
          formula: 'Li > 4.0 mEq/L (acute) or Li > 2.5 mEq/L with symptoms/renal failure',
          explanation: 'Hemodialysis rapidly clears lithium, but a "rebound" increase in serum levels often occurs after dialysis stops as lithium slowly shifts out of the intracellular compartment.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why do thiazide diuretics cause lithium toxicity?',
          rationale: 'Thiazides block sodium reabsorption in the distal convoluted tubule, causing mild sodium depletion. In response to volume/sodium loss, the kidney compensates by increasing sodium reabsorption in the proximal tubule. Because lithium is structurally similar to sodium, the proximal tubule reabsorbs massive amounts of lithium along with the sodium, leading to rapid toxicity.'
        },
        {
          question_text: 'Why is normal saline (0.9% NaCl) the IV fluid of choice?',
          rationale: 'Normal saline corrects both the volume depletion and the sodium deficit. Restoring the sodium balance signals the proximal tubule to stop aggressively reabsorbing sodium (and lithium), allowing the lithium to be excreted in the urine.'
        },
        {
          question_text: 'Why are neurological symptoms delayed in acute lithium overdose?',
          rationale: 'Lithium is a small ion, but it crosses the blood-brain barrier slowly. In an acute overdose, serum levels may be very high while brain tissue levels are still low. It takes time for the lithium to equilibrate into the CNS, which is why clinical toxicity correlates better with tissue/intracellular levels than a single acute serum peak.'
        }
      ],
      mnemonics: [
        {
          name: 'Drugs that INCREASE Lithium Levels (T-A-N)',
          concept: 'Major drug interactions',
          bullets: [
            'T - Thiazide diuretics',
            'A - ACE Inhibitors / ARBs',
            'N - NSAIDs (except Aspirin/Sulindac, which are safer)'
          ]
        }
      ]
    },
    tags: ['lithium-toxicity', 'ibuprofen', 'drug-interaction', 'bipolar-disorder', 'hemodialysis'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 39: COMMUNITY PHARMACY — IRON ANEMIA
  {
    id: 'seed-039',
    title: 'Iron Deficiency Anemia Counseling',
    subject_area: 'community_pharmacy',
    difficulty: 'easy',
    patient_snapshot: {
      name: 'Priya Patel',
      age: 26,
      sex: 'F',
      ward: 'Community Pharmacy',
      bed: 'Outpatient',
      presenting_complaint: 'Presents to the pharmacy with a new prescription for oral Ferrous Sulfate. She complains of fatigue, pale skin, and heavy menstrual bleeding. Wants to know how best to take her iron tablets.',
      pmh: ['Menorrhagia'],
      medications: [
        { drug: 'Ferrous Sulfate', dose: '325 mg', frequency: 'OD', route: 'Oral' },
        { drug: 'Calcium Carbonate', dose: '500 mg', frequency: 'OD (OTC supplement)', route: 'Oral' },
        { drug: 'Pantoprazole', dose: '40 mg', frequency: 'OD (OTC for dyspepsia)', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Hb', value: '9.2', unit: 'g/dL', reference: '12-16', is_abnormal: true },
        { name: 'Ferritin', value: '8', unit: 'ng/mL', reference: '15-150', is_abnormal: true },
        { name: 'MCV', value: '72', unit: 'fL', reference: '80-100', is_abnormal: true },
      ],
    },
    questions: [
      {
        id: 'q-039-1', case_id: 'seed-039',
        question_text: 'How should the pharmacist counsel Priya on the administration of Ferrous Sulfate to maximize absorption?',
        option_a: 'Take it with milk or tea',
        option_b: 'Take it on an empty stomach with a glass of orange juice (Vitamin C enhances absorption). Do not take with tea, coffee, or milk.',
        option_c: 'Take it with meals to prevent nausea, regardless of what the meal is',
        option_d: 'Crush the tablet for faster absorption',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Non-heme iron requires an acidic environment to remain in the absorbable ferrous (Fe2+) state. Vitamin C (ascorbic acid) keeps it reduced and enhances absorption. Tannins (tea), phytates (bran), and calcium (milk) profoundly inhibit iron absorption.',
        subject_reference: 'Pharmacotherapeutics - Hematology / Counseling',
      },
      {
        id: 'q-039-2', case_id: 'seed-039',
        question_text: 'What drug interactions from Priya\'s current medication list will significantly reduce her iron absorption?',
        option_a: 'None of them',
        option_b: 'Calcium Carbonate and Pantoprazole. Calcium physically blocks iron absorption, and Pantoprazole suppresses gastric acid which is required for iron solubility.',
        option_c: 'Only Calcium Carbonate',
        option_d: 'Only Pantoprazole',
        correct_option: 'B',
        pci_duty_category: 'drug_interaction',
        question_type: 'mcq',
        explanation_text: 'Calcium is a potent inhibitor of iron absorption; they should be separated by at least 2 hours. Pantoprazole (a PPI) increases gastric pH. Iron requires an acidic pH to dissolve and remain in the ferrous state. Long-term PPI use causes iron malabsorption.',
        subject_reference: 'Pharmacotherapeutics - Drug Interactions',
      },
      {
        id: 'q-039-3', case_id: 'seed-039',
        question_text: 'What common side effects of oral iron therapy should the pharmacist warn Priya about to ensure medication adherence?',
        option_a: 'Yellow discoloration of skin',
        option_b: 'Dark/black stools (which are harmless), constipation, and nausea. Recommend increasing dietary fiber and fluid intake.',
        option_c: 'Diarrhea and white stools',
        option_d: 'Tachycardia and insomnia',
        correct_option: 'B',
        pci_duty_category: 'patient_counselling',
        question_type: 'mcq',
        explanation_text: 'Unabsorbed iron in the gut causes GI irritation (nausea) and severe constipation. It also turns stools black or dark green, which can frighten patients into stopping therapy if not pre-warned. Emphasizing that this is harmless ensures adherence.',
        subject_reference: 'Pharmacotherapeutics - Patient Counseling',
      },
    ],
    phases: [
      {
        id: 'seed-039-phase-1',
        title: 'Day 1: Outpatient Iron Counseling',
        description: 'Priya presents to the community pharmacy with a new iron prescription. Review absorption and side effects.',
        patient_snapshot: {
          name: 'Priya Patel', age: 26, sex: 'F', ward: 'Outpatient', bed: '',
          presenting_complaint: 'Fatigue, new Ferrous Sulfate Rx.',
          pmh: ['Menorrhagia'],
          medications: [
            { drug: 'Ferrous Sulfate', dose: '325 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Calcium Carbonate', dose: '500 mg', frequency: 'OD', route: 'Oral' },
            { drug: 'Pantoprazole', dose: '40 mg', frequency: 'OD', route: 'Oral' },
          ],
          allergies: [],
          labs: [
            { name: 'Hb', value: '9.2', unit: 'g/dL', reference: '12-16', is_abnormal: true },
            { name: 'Ferritin', value: '8', unit: 'ng/mL', reference: '15-150', is_abnormal: true },
          ],
        },
        questions: [
          {
            id: 'q-039-1', case_id: 'seed-039',
            question_text: 'How to maximize Ferrous Sulfate absorption?',
            option_a: 'Take with milk/tea',
            option_b: 'Empty stomach with orange juice (Vitamin C); avoid tea/milk',
            option_c: 'With meals',
            option_d: 'Crush tablet',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Vitamin C enhances absorption; tannins/calcium inhibit it.',
            subject_reference: 'Pharmacotherapeutics - Counseling',
          },
          {
            id: 'q-039-2', case_id: 'seed-039',
            question_text: 'Which current meds reduce iron absorption?',
            option_a: 'None',
            option_b: 'Calcium Carbonate (blocks absorption) and Pantoprazole (reduces acid needed for solubility)',
            option_c: 'Calcium only',
            option_d: 'Pantoprazole only',
            correct_option: 'B',
            pci_duty_category: 'drug_interaction',
            question_type: 'mcq',
            explanation_text: 'Iron needs acidic environment and no competing minerals.',
            subject_reference: 'Pharmacotherapeutics - Drug Interactions',
          },
          {
            id: 'q-039-3', case_id: 'seed-039',
            question_text: 'Common side effects to warn about?',
            option_a: 'Yellow skin',
            option_b: 'Harmless dark/black stools, constipation, nausea',
            option_c: 'Diarrhea and white stools',
            option_d: 'Tachycardia',
            correct_option: 'B',
            pci_duty_category: 'patient_counselling',
            question_type: 'mcq',
            explanation_text: 'Pre-warning about black stools improves adherence.',
            subject_reference: 'Pharmacotherapeutics - Counseling',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Management of Iron Deficiency Anemia',
          organization: 'American Society of Hematology',
          text: 'Iron deficiency anemia (IDA) is treated with oral iron supplementation. The traditional dose of 150-200 mg elemental iron daily is increasingly being replaced by every-other-day dosing strategies. Recent evidence shows that alternating day dosing (e.g., 65 mg elemental iron every other day) increases fractional iron absorption and reduces GI side effects by minimizing the up-regulation of hepcidin.'
        },
        {
          title: 'Factors Affecting Iron Absorption',
          organization: 'Pharmacotherapeutics Guidelines',
          text: 'Iron is best absorbed in an acidic environment in the duodenum and upper jejunum. Therefore, taking iron on an empty stomach maximizes absorption. Co-administration with Vitamin C (ascorbic acid) enhances absorption. Conversely, antacids, PPIs, H2 blockers, calcium supplements, and foods high in phytates (tea, coffee, cereals) severely inhibit iron absorption.'
        },
        {
          title: 'Monitoring Response to Iron Therapy',
          organization: 'Hematology Practice',
          text: 'An early indicator of bone marrow response to iron is an increase in the reticulocyte count, which peaks at 7-10 days. Hemoglobin levels typically rise by 1-2 g/dL per month. Treatment should continue for 3-6 months after the anemia is corrected to replenish iron stores (ferritin).'
        }
      ],
      calculations: [
        {
          name: 'Elemental Iron Content',
          formula: 'Ferrous Sulfate 325 mg = 65 mg elemental iron',
          explanation: 'Ferrous sulfate is 20% elemental iron. Ferrous gluconate is 12% (325mg = 39mg). Ferrous fumarate is 33% (325mg = 106mg).'
        },
        {
          name: 'Expected Hemoglobin Rise',
          formula: '1 g/dL every 2-3 weeks',
          explanation: 'If Hb does not rise as expected, evaluate for non-adherence, poor absorption (celiac, PPI use), or ongoing blood loss.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why does alternate-day dosing improve iron absorption?',
          rationale: 'A high oral dose of iron triggers the liver to produce hepcidin, a hormone that degrades ferroportin channels in the gut, blocking further iron absorption for up to 48 hours. By dosing every other day, hepcidin levels have time to return to baseline, allowing the next dose to be efficiently absorbed. This also leaves less unabsorbed iron in the gut to cause constipation.'
        },
        {
          question_text: 'Why do PPIs reduce iron absorption?',
          rationale: 'Non-heme dietary and supplement iron is primarily in the ferric (Fe3+) state and must be reduced to the ferrous (Fe2+) state to be absorbed. This reduction process requires stomach acid. PPIs raise gastric pH, preventing this reduction and markedly decreasing iron absorption.'
        },
        {
          question_text: 'Why does iron cause dark stools?',
          rationale: 'Unabsorbed iron in the GI tract reacts with hydrogen sulfide produced by gut bacteria, forming iron sulfide. Iron sulfide is black, resulting in harmless dark or black stools. This is an expected side effect and can be used to gauge adherence.'
        }
      ],
      mnemonics: [
        {
          name: 'Iron Absorption Inhibitors (C-A-P-T)',
          concept: 'Substances to avoid with iron',
          bullets: [
            'C - Calcium (milk, antacids)',
            'A - Antacids / Acid suppressants (PPIs, H2RAs)',
            'P - Phytates (whole grains, cereals)',
            'T - Tannins (tea, coffee)'
          ]
        }
      ]
    },
    tags: ['anemia', 'ferrous-sulfate', 'patient-counselling', 'iron-absorption', 'hematology'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
  // CASE 40: COMMUNITY PHARMACY — GERIATRIC BENZODIAZEPINE
  {
    id: 'seed-040',
    title: 'Beers Criteria & Benzodiazepine Delirium',
    subject_area: 'community_pharmacy',
    difficulty: 'medium',
    patient_snapshot: {
      name: 'Ramesh Gupta',
      age: 78,
      sex: 'M',
      ward: 'Community Pharmacy',
      bed: 'Outpatient',
      presenting_complaint: 'Ramesh is picking up a refill for Diazepam 5 mg (BD) prescribed for anxiety and insomnia. His daughter mentions he has fallen twice this week and seems excessively drowsy during the day.',
      pmh: ['Anxiety', 'BPH', 'Hypertension'],
      medications: [
        { drug: 'Diazepam', dose: '5 mg', frequency: 'BD', route: 'Oral' },
        { drug: 'Tamsulosin', dose: '0.4 mg', frequency: 'ON', route: 'Oral' },
        { drug: 'Amlodipine', dose: '5 mg', frequency: 'OD', route: 'Oral' },
      ],
      allergies: [],
      labs: [
        { name: 'Creatinine Clearance', value: '45', unit: 'mL/min', reference: '>60', is_abnormal: true },
        { name: 'LFTs', value: 'Normal', unit: '', reference: 'Normal', is_abnormal: false },
      ],
    },
    questions: [
      {
        id: 'q-040-1', case_id: 'seed-040',
        question_text: 'Why is Diazepam particularly hazardous in this 78-year-old patient according to the Beers Criteria?',
        option_a: 'It causes severe hypertension',
        option_b: 'Diazepam is a long-acting benzodiazepine with active metabolites. In the elderly, reduced hepatic metabolism and increased fat volume significantly prolong its half-life (up to 100 hours), causing accumulation, excessive sedation, and falls.',
        option_c: 'It directly damages the kidneys',
        option_d: 'It interacts with Tamsulosin to cause urinary retention',
        correct_option: 'B',
        pci_duty_category: 'adr_detection',
        question_type: 'mcq',
        explanation_text: 'The Beers Criteria strongly recommends avoiding long-acting benzodiazepines (Diazepam, Flurazepam, Chlordiazepoxide) in older adults. Age-related changes (decreased oxidative hepatic metabolism, increased volume of distribution for lipid-soluble drugs) cause massive accumulation, leading to cognitive impairment and hip fractures.',
        subject_reference: 'Pharmacotherapeutics - Geriatrics',
      },
      {
        id: 'q-040-2', case_id: 'seed-040',
        question_text: 'If a benzodiazepine is absolutely necessary for an elderly patient, which ones are preferred (the "LOT" acronym)?',
        option_a: 'Lorazepam, Oxazepam, Temazepam',
        option_b: 'Lorazepam, Oxazepam, Temazepam — because they undergo simple Phase II glucuronidation (which is relatively preserved in aging) and have no active metabolites',
        option_c: 'Lisdexamfetamine, Olanzapine, Trazodone',
        option_d: 'Lithium, Oxcarbazepine, Topiramate',
        correct_option: 'B',
        pci_duty_category: 'treatment_chart_review',
        question_type: 'mcq',
        explanation_text: 'The LOT benzodiazepines (Lorazepam, Oxazepam, Temazepam) are preferred in the elderly or those with liver disease. They bypass Phase I CYP450 metabolism and go straight to Phase II conjugation, meaning their clearance is much less affected by age, avoiding toxic accumulation.',
        subject_reference: 'Pharmacotherapeutics - Geriatrics',
      },
      {
        id: 'q-040-3', case_id: 'seed-040',
        question_text: 'What action should the pharmacist take regarding this prescription?',
        option_a: 'Dispense the medication but tell the patient to take it only once daily',
        option_b: 'Contact the prescriber to discuss the recent falls, highlight the Beers Criteria warning, and recommend tapering Diazepam and potentially switching to a safer alternative (or non-pharmacologic therapy) for insomnia/anxiety.',
        option_c: 'Refuse to dispense the medication entirely',
        option_d: 'Dispense as written without comment',
        correct_option: 'B',
        pci_duty_category: 'prescription_review',
        question_type: 'mcq',
        explanation_text: 'The pharmacist has a duty of care to intervene when a prescription poses a high risk of harm. The recent falls are a major red flag for morbidity (e.g., subdural hematoma, hip fracture). The pharmacist must collaborate with the physician to implement a gradual taper (abrupt cessation causes withdrawal).',
        subject_reference: 'Pharmacy Practice - Interventions',
      },
    ],
    phases: [
      {
        id: 'seed-040-phase-1',
        title: 'Day 1: Geriatric Med Review',
        description: 'Ramesh is experiencing falls on Diazepam. Review Beers Criteria and safe alternatives.',
        patient_snapshot: {
          name: 'Ramesh Gupta', age: 78, sex: 'M', ward: 'Outpatient', bed: '',
          presenting_complaint: 'Daytime drowsiness and falls on Diazepam.',
          pmh: ['Anxiety', 'BPH'],
          medications: [
            { drug: 'Diazepam', dose: '5 mg', frequency: 'BD', route: 'Oral' },
            { drug: 'Tamsulosin', dose: '0.4 mg', frequency: 'ON', route: 'Oral' },
          ],
          allergies: [],
          labs: [],
        },
        questions: [
          {
            id: 'q-040-1', case_id: 'seed-040',
            question_text: 'Why is Diazepam hazardous in the elderly (Beers Criteria)?',
            option_a: 'Causes hypertension',
            option_b: 'Long half-life + active metabolites accumulate in elderly → sedation/falls',
            option_c: 'Renal damage',
            option_d: 'Urinary retention',
            correct_option: 'B',
            pci_duty_category: 'adr_detection',
            question_type: 'mcq',
            explanation_text: 'Decreased metabolism and increased fat cause massive accumulation.',
            subject_reference: 'Pharmacotherapeutics - Geriatrics',
          },
          {
            id: 'q-040-2', case_id: 'seed-040',
            question_text: 'Which benzos are safer in the elderly (LOT)?',
            option_a: 'Lorazepam, Oxazepam, Temazepam (Not an option but true)',
            option_b: 'Lorazepam, Oxazepam, Temazepam — undergo Phase II glucuronidation, no active metabolites',
            option_c: 'Lisdexamfetamine, Olanzapine, Trazodone',
            option_d: 'Lithium, Oxcarbazepine, Topiramate',
            correct_option: 'B',
            pci_duty_category: 'treatment_chart_review',
            question_type: 'mcq',
            explanation_text: 'LOT benzos bypass Phase I CYP450 metabolism.',
            subject_reference: 'Pharmacotherapeutics - Geriatrics',
          },
          {
            id: 'q-040-3', case_id: 'seed-040',
            question_text: 'Pharmacist action regarding the falls?',
            option_a: 'Tell patient to take OD',
            option_b: 'Contact prescriber to discuss falls, Beers Criteria, and recommend tapering',
            option_c: 'Refuse to dispense',
            option_d: 'Dispense as written',
            correct_option: 'B',
            pci_duty_category: 'prescription_review',
            question_type: 'mcq',
            explanation_text: 'Collaborate with MD to safely taper and reduce fall risk.',
            subject_reference: 'Pharmacy Practice - Interventions',
          },
        ]
      }
    ],
    study_guide: {
      guidelines: [
        {
          title: 'Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
          organization: 'American Geriatrics Society',
          text: 'Benzodiazepines are categorized as Potentially Inappropriate Medications (PIMs) in older adults (≥ 65 years). Older adults have increased sensitivity to benzodiazepines and decreased metabolism of long-acting agents. Use increases the risk of cognitive impairment, delirium, falls, fractures, and motor vehicle crashes. Benzodiazepines should be avoided for the treatment of insomnia, agitation, or delirium in this population.'
        },
        {
          title: 'Pharmacokinetic Changes in the Elderly',
          organization: 'Geriatric Pharmacology',
          text: 'Aging results in a relative increase in body fat and a decrease in lean body mass and total body water. Highly lipophilic drugs, like diazepam, have a significantly increased volume of distribution, leading to a drastically prolonged half-life (up to 90-100 hours for diazepam). Furthermore, hepatic Phase I metabolism (oxidation) declines with age, while Phase II (glucuronidation) remains relatively preserved.'
        },
        {
          title: 'Tapering Benzodiazepines',
          organization: 'Deprescribing Guidelines',
          text: 'Abrupt discontinuation of chronic benzodiazepines can precipitate severe withdrawal symptoms, including seizures and delirium. Tapering should be individualized and gradual (e.g., reducing the dose by 25% every 1-2 weeks), potentially converting a short-acting agent to a longer-acting agent to provide a smoother taper.'
        }
      ],
      calculations: [
        {
          name: 'Half-Life Rule of Thumb for Diazepam',
          formula: 'Half-life ≈ Patient Age (in hours)',
          explanation: 'In a 20-year-old, the half-life is ~20 hours. In an 80-year-old, the half-life can be ~80-100 hours due to increased fat distribution and reduced hepatic oxidation.'
        },
        {
          name: 'Time to Steady State / Elimination',
          formula: '4 to 5 half-lives',
          explanation: 'If diazepam has an 80-hour half-life in a geriatric patient, it takes over 16 days just to reach steady state, and over 2 weeks to be fully eliminated after discontinuation, leading to dangerous accumulation.'
        }
      ],
      reasoning: [
        {
          question_text: 'Why are LOT benzodiazepines preferred if one must be used in the elderly?',
          rationale: 'LOT stands for Lorazepam, Oxazepam, and Temazepam. Unlike diazepam or clonazepam, which undergo complex Phase I hepatic oxidation via CYP450 enzymes (which declines with age) and have active metabolites, the LOT agents are metabolized entirely via Phase II glucuronidation. Phase II metabolism is relatively preserved in the elderly and in liver disease, preventing unexpected drug accumulation.'
        },
        {
          question_text: 'Why does increased body fat in the elderly affect diazepam?',
          rationale: 'Diazepam is highly lipophilic. The increased proportion of body fat in older adults provides a massive tissue reservoir for the drug. The drug leaves the blood and hides in the fat, slowly leaching back out over days or weeks, massively increasing the Volume of Distribution and the terminal half-life.'
        },
        {
          question_text: 'What are the main risks of prescribing benzodiazepines for sleep in the elderly?',
          rationale: 'Beyond hangover sedation and cognitive clouding, the risk of falls is dramatically increased. Older adults often have baseline balance issues and nocturia (need to urinate at night). Waking up sedated and attempting to walk to the bathroom frequently leads to falls and hip fractures.'
        }
      ],
      mnemonics: [
        {
          name: 'Safer Benzos for Elderly / Liver Disease (L-O-T)',
          concept: 'Benzos metabolized only by Phase II glucuronidation',
          bullets: [
            'L - Lorazepam',
            'O - Oxazepam',
            'T - Temazepam',
            'Note: "Safer" means less pharmacokinetic accumulation; they STILL carry pharmacodynamic risks (falls, confusion) and should ideally be avoided.'
          ]
        }
      ]
    },
    tags: ['Beers-criteria', 'diazepam', 'tapering', 'geriatrics', 'falls'],
    source: 'seed',
    created_at: '2025-01-20T00:00:00Z',
  },
];


