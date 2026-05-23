// ============================================================
// PharmD Clinical Simulator — TypeScript Interfaces
// ============================================================

export type Difficulty = 'easy' | 'medium' | 'hard';
export type CorrectOption = 'A' | 'B' | 'C' | 'D';
export type SessionStatus = 'in_progress' | 'completed';

export type PCIDutyCategory =
  | 'treatment_chart_review'
  | 'prescription_review'
  | 'drug_therapy_monitoring'
  | 'adr_detection'
  | 'drug_interaction'
  | 'patient_counselling'
  | 'drug_poison_info'
  | 'medication_reconciliation'
  | 'ward_round_participation';

export type SubjectArea =
  | 'cardiovascular'
  | 'endocrine'
  | 'infectious_diseases'
  | 'respiratory'
  | 'neurology_psychiatry'
  | 'git_hepatology'
  | 'nephrology'
  | 'clinical_toxicology'
  | 'hospital_pharmacy'
  | 'pharmacokinetics_tdm'
  | 'oncology_hematology'
  | 'community_pharmacy';

export interface Medication {
  drug: string;
  dose: string;
  frequency: string;
  route: string;
}

export interface LabValue {
  name: string;
  value: string;
  unit: string;
  reference: string;
  is_abnormal: boolean;
}

export interface PatientSnapshot {
  name: string;
  age: number;
  sex: 'M' | 'F';
  ward: string;
  bed: string;
  presenting_complaint: string;
  pmh: string[];
  medications: Medication[];
  allergies: string[];
  labs: LabValue[];
}

export interface Question {
  id: string;
  case_id: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_option: CorrectOption;
  pci_duty_category: PCIDutyCategory;
  explanation_text: string;
  subject_reference: string;
  question_type?: 'mcq' | 'mar_action';
  target_drug?: string;
}

export interface CasePhase {
  id: string;
  title: string;
  description: string;
  patient_snapshot: PatientSnapshot;
  questions: Question[];
}

export interface StudyGuideGuideline {
  title: string;
  organization: string;
  text: string;
}

export interface StudyGuideCalculation {
  name: string;
  formula: string;
  explanation: string;
}

export interface StudyGuideReasoning {
  question_text: string;
  rationale: string;
}

export interface StudyGuideMnemonic {
  name: string;
  concept: string;
  bullets: string[];
}

export interface StudyGuideContent {
  guidelines: StudyGuideGuideline[];
  calculations: StudyGuideCalculation[];
  reasoning: StudyGuideReasoning[];
  mnemonics: StudyGuideMnemonic[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  pci_duty?: PCIDutyCategory;
  unlocked_at: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  subject_area: SubjectArea;
  difficulty: Difficulty;
  patient_snapshot: PatientSnapshot;
  questions: Question[];
  phases?: CasePhase[];
  study_guide?: StudyGuideContent;
  tags: string[];
  source: 'seed' | 'imported';
  created_at: string;
}

export interface SessionAnswer {
  question_id: string;
  selected_option: CorrectOption;
  is_correct: boolean;
}

export interface Session {
  id: string;
  case_id: string;
  case_title: string;
  answers: SessionAnswer[];
  score_percent: number;
  grade: string;
  grade_message: string;
  time_taken_sec: number;
  completed_at: string;
  domain_scores: DomainScore[];
}

export interface DomainScore {
  pci_duty: PCIDutyCategory;
  correct: number;
  total: number;
  accuracy: number;
}

export interface CompetencyScore {
  pci_duty: PCIDutyCategory;
  total_questions: number;
  total_correct: number;
  accuracy_percent: number;
}

export interface GradeBand {
  grade: string;
  message: string;
  color: string;
  minScore: number;
}

export interface ReviewItem {
  question_id: string;
  case_id: string;
  case_title: string;
  question_text: string;
  flagged_at: string;
  times_reviewed: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
  joined_at: string;
}
