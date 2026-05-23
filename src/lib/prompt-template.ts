export const CASE_GENERATION_PROMPT = `You are an expert clinical pharmacy educator specializing in the Indian PharmD curriculum (PCI-aligned). Generate a detailed clinical case for a PharmD student simulator.

REQUIREMENTS:
1. Use Indian patient names, Indian drug brand names (e.g., Glycomet not Glucophage, Crocin not Tylenol, Augmentin, Eptoin, Thyronorm, Ecosprin, etc.)
2. Set cases in Indian hospital context (Government Hospital, District Hospital, Medical College Hospital)
3. Use Indian-relevant disease patterns, resistance patterns, and treatment guidelines (NTEP for TB, Indian JNC adaptations for HTN, etc.)
4. Include detailed patient snapshot with medications, labs with reference ranges, and abnormal flags
5. Generate exactly 6 MCQs, each mapped to one of these 8 PCI duty categories:
   - treatment_chart_review (Identifying wrong drug, dose, or frequency)
   - drug_therapy_monitoring (Interpreting labs/vitals in context of therapy)
   - adr_detection (Recognizing adverse drug reactions)
   - drug_interaction (Spotting clinically significant DDIs)
   - patient_counselling (Choosing correct counselling points)
   - drug_poison_info (Answering clinical queries about drugs)
   - medication_reconciliation (Finding discrepancies across admission/discharge)
   - ward_round_participation (Priority intervention decisions)
6. Each MCQ must have exactly 4 options (A-D) with ONE correct answer
7. Each MCQ must have a 3-5 sentence clinical explanation

PARAMETERS (customize these before sending to AI):
- Topic/Disease: [e.g., Acute Coronary Syndrome, Asthma, CKD Stage 4]
- Difficulty: [easy / medium / hard]
- Subject Area: [cardiovascular / endocrine / infectious_diseases / respiratory / neurology_psychiatry / git_hepatology / nephrology / clinical_toxicology / hospital_pharmacy / pharmacokinetics_tdm / oncology_hematology / community_pharmacy]
- Patient Age/Sex: [e.g., 45M, 28F]
- Key Focus: [e.g., drug interactions with warfarin, renal dose adjustment]

OUTPUT FORMAT (return ONLY this JSON, no other text):
{
  "title": "Brief descriptive title",
  "subject_area": "one of the 12 subject areas listed above",
  "difficulty": "easy | medium | hard",
  "patient_snapshot": {
    "name": "Indian name",
    "age": 45,
    "sex": "M",
    "ward": "Ward name",
    "bed": "Bed number",
    "presenting_complaint": "Chief complaint with duration",
    "pmh": ["Past medical history item 1", "Item 2"],
    "medications": [
      {"drug": "Drug Name (Indian Brand)", "dose": "500 mg", "frequency": "BD", "route": "Oral"}
    ],
    "allergies": ["Allergy 1"],
    "labs": [
      {"name": "Lab Name", "value": "120", "unit": "mg/dL", "reference": "70-110", "is_abnormal": true}
    ]
  },
  "questions": [
    {
      "question_text": "Clinical question text?",
      "option_a": "Option A text",
      "option_b": "Option B text",
      "option_c": "Option C text",
      "option_d": "Option D text",
      "correct_option": "A",
      "pci_duty_category": "treatment_chart_review",
      "explanation_text": "3-5 sentence clinical explanation with reasoning.",
      "subject_reference": "e.g., Pharmacotherapeutics II - Diabetes"
    }
  ],
  "tags": ["tag1", "tag2", "tag3"]
}

IMPORTANT RULES:
- Explanations should be educational, referencing Indian guidelines where applicable
- Include at least 4-5 medications in the patient's chart to allow for interaction and review questions
- Labs must include reference ranges and is_abnormal flag
- Each question should test a DIFFERENT PCI duty category (use at least 4 different categories across 6 questions)
- Options should be plausible — avoid obviously wrong distractors
- For drug names, always include the Indian brand name in parentheses`;
