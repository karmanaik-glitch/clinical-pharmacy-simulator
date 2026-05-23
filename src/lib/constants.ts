// ============================================================
// PharmD Clinical Simulator — Constants & Mappings
// ============================================================

import type { PCIDutyCategory, SubjectArea, GradeBand } from './types';

// ---- PCI Duty Categories ----
export const PCI_DUTIES: Record<PCIDutyCategory, { label: string; shortLabel: string; color: string; bgColor: string; icon: string }> = {
  prescription_review: {
    label: 'Prescription Review',
    shortLabel: 'Presc. Review',
    color: 'hsl(200, 80%, 50%)',
    bgColor: 'hsl(200, 80%, 50%, 0.15)',
    icon: 'FileText',
  },  
  treatment_chart_review: {
    label: 'Treatment Chart Review',
    shortLabel: 'Chart Review',
    color: 'hsl(210, 90%, 60%)',
    bgColor: 'hsl(210, 90%, 60%, 0.15)',
    icon: 'ClipboardList',
  },
  drug_therapy_monitoring: {
    label: 'Drug Therapy Monitoring',
    shortLabel: 'Therapy Monitor',
    color: 'hsl(160, 80%, 45%)',
    bgColor: 'hsl(160, 80%, 45%, 0.15)',
    icon: 'Activity',
  },
  adr_detection: {
    label: 'ADR Detection & Management',
    shortLabel: 'ADR Detection',
    color: 'hsl(0, 85%, 60%)',
    bgColor: 'hsl(0, 85%, 60%, 0.15)',
    icon: 'AlertTriangle',
  },
  drug_interaction: {
    label: 'Drug Interaction Identification',
    shortLabel: 'Drug Interaction',
    color: 'hsl(30, 90%, 55%)',
    bgColor: 'hsl(30, 90%, 55%, 0.15)',
    icon: 'Zap',
  },
  patient_counselling: {
    label: 'Patient Counselling',
    shortLabel: 'Counselling',
    color: 'hsl(270, 70%, 60%)',
    bgColor: 'hsl(270, 70%, 60%, 0.15)',
    icon: 'MessageCircle',
  },
  drug_poison_info: {
    label: 'Drug & Poison Information',
    shortLabel: 'Drug Info',
    color: 'hsl(190, 80%, 50%)',
    bgColor: 'hsl(190, 80%, 50%, 0.15)',
    icon: 'BookOpen',
  },
  medication_reconciliation: {
    label: 'Medication Reconciliation',
    shortLabel: 'Reconciliation',
    color: 'hsl(120, 60%, 50%)',
    bgColor: 'hsl(120, 60%, 50%, 0.15)',
    icon: 'GitCompare',
  },
  ward_round_participation: {
    label: 'Ward Round Participation',
    shortLabel: 'Ward Round',
    color: 'hsl(330, 75%, 55%)',
    bgColor: 'hsl(330, 75%, 55%, 0.15)',
    icon: 'Stethoscope',
  },
};

// ---- Subject Areas ----
export const SUBJECT_AREAS: Record<SubjectArea, { label: string; icon: string }> = {
  cardiovascular: { label: 'Cardiovascular', icon: 'Heart' },
  endocrine: { label: 'Endocrine (DM, Thyroid)', icon: 'Droplets' },
  infectious_diseases: { label: 'Infectious Diseases', icon: 'Bug' },
  respiratory: { label: 'Respiratory', icon: 'Wind' },
  neurology_psychiatry: { label: 'Neurology & Psychiatry', icon: 'Brain' },
  git_hepatology: { label: 'GIT & Hepatology', icon: 'Apple' },
  nephrology: { label: 'Nephrology', icon: 'Beaker' },
  clinical_toxicology: { label: 'Clinical Toxicology', icon: 'Skull' },
  hospital_pharmacy: { label: 'Hospital Pharmacy', icon: 'Building2' },
  pharmacokinetics_tdm: { label: 'Pharmacokinetics / TDM', icon: 'LineChart' },
  oncology_hematology: { label: 'Oncology & Hematology', icon: 'Microscope' },
  community_pharmacy: { label: 'Community Pharmacy', icon: 'Store' },
};

// ---- Grade Bands ----
export const GRADE_BANDS: GradeBand[] = [
  { grade: 'Distinction', message: 'Ready for independent clinical practice', color: '#fbbf24', minScore: 90 },
  { grade: 'Pass with Credit', message: 'Good clinical reasoning, review missed topics', color: '#34d399', minScore: 75 },
  { grade: 'Pass', message: 'Adequate. Focus on weak categories before APPE', color: '#60a5fa', minScore: 60 },
  { grade: 'Needs Review', message: 'Review the subject module and retry', color: '#f87171', minScore: 0 },
];

// ---- Difficulty Config ----
export const DIFFICULTY_CONFIG: Record<string, { label: string; color: string; bgColor: string; xpMultiplier: number }> = {
  easy: { label: 'Easy', color: '#34d399', bgColor: 'rgba(52, 211, 153, 0.15)', xpMultiplier: 1 },
  medium: { label: 'Medium', color: '#fbbf24', bgColor: 'rgba(251, 191, 36, 0.15)', xpMultiplier: 1.5 },
  hard: { label: 'Hard', color: '#f87171', bgColor: 'rgba(248, 113, 113, 0.15)', xpMultiplier: 2 },
};

// ---- Utility ----
export function getGradeBand(score: number): GradeBand {
  for (const band of GRADE_BANDS) {
    if (score >= band.minScore) return band;
  }
  return GRADE_BANDS[GRADE_BANDS.length - 1];
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}
