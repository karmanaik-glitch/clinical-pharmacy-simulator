// ============================================================
// PharmD Clinical Simulator — Scoring Engine
// ============================================================

import type { Question, SessionAnswer, DomainScore, PCIDutyCategory, CorrectOption } from './types';
import { getGradeBand, generateId } from './constants';

export interface UnlockedBadgeInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  pci_duty?: PCIDutyCategory;
}

export interface ScoreResult {
  sessionId: string;
  totalCorrect: number;
  totalQuestions: number;
  scorePercent: number;
  grade: string;
  gradeMessage: string;
  gradeColor: string;
  domainScores: DomainScore[];
  answers: SessionAnswer[];
  unlockedBadges: UnlockedBadgeInfo[];
}

export function calculateScore(
  questions: Question[],
  selectedAnswers: Record<string, CorrectOption>,
  caseId: string
): ScoreResult {
  // Build answer results
  const answers: SessionAnswer[] = questions.map(q => ({
    question_id: q.id,
    selected_option: selectedAnswers[q.id],
    is_correct: selectedAnswers[q.id] === q.correct_option,
  }));

  const totalCorrect = answers.filter(a => a.is_correct).length;
  const totalQuestions = answers.length;
  const scorePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Domain breakdown
  const domainMap = new Map<PCIDutyCategory, { correct: number; total: number }>();
  for (const q of questions) {
    const entry = domainMap.get(q.pci_duty_category) || { correct: 0, total: 0 };
    entry.total++;
    const answer = answers.find(a => a.question_id === q.id);
    if (answer?.is_correct) entry.correct++;
    domainMap.set(q.pci_duty_category, entry);
  }

  const domainScores: DomainScore[] = Array.from(domainMap.entries()).map(([duty, data]) => ({
    pci_duty: duty,
    correct: data.correct,
    total: data.total,
    accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
  }));

  const band = getGradeBand(scorePercent);

  // Badge Checks
  const unlockedBadges: UnlockedBadgeInfo[] = [];
  domainScores.forEach(ds => {
    if (ds.accuracy === 100 && ds.total > 0) {
      if (ds.pci_duty === 'treatment_chart_review') {
        unlockedBadges.push({
          id: 'badge_chart_review',
          title: 'Renal Dose Guardian',
          description: 'Achieved 100% accuracy in Treatment Chart Review.',
          icon: 'ShieldCheck',
          pci_duty: 'treatment_chart_review',
        });
      } else if (ds.pci_duty === 'adr_detection') {
        unlockedBadges.push({
          id: 'badge_adr_detection',
          title: 'ADR Sentinel',
          description: 'Achieved 100% accuracy in Adverse Drug Reaction Detection.',
          icon: 'AlertTriangle',
          pci_duty: 'adr_detection',
        });
      } else if (ds.pci_duty === 'drug_interaction') {
        unlockedBadges.push({
          id: 'badge_drug_interaction',
          title: 'Interactions Detective',
          description: 'Achieved 100% accuracy in Drug Interaction Identification.',
          icon: 'Zap',
          pci_duty: 'drug_interaction',
        });
      } else if (ds.pci_duty === 'patient_counselling') {
        unlockedBadges.push({
          id: 'badge_patient_counselling',
          title: 'Counselling Champion',
          description: 'Achieved 100% accuracy in Patient Counselling.',
          icon: 'MessageCircle',
          pci_duty: 'patient_counselling',
        });
      } else if (ds.pci_duty === 'drug_poison_info') {
        unlockedBadges.push({
          id: 'badge_toxicology',
          title: 'Toxicology Hero',
          description: 'Achieved 100% accuracy in Drug & Poison Information.',
          icon: 'Skull',
          pci_duty: 'drug_poison_info',
        });
      }
    }
  });

  if (scorePercent === 100) {
    unlockedBadges.push({
      id: `badge_master_${caseId}`,
      title: 'Master Clinician',
      description: 'Completed a simulation with a perfect 100% score.',
      icon: 'Award',
    });
  }

  return {
    sessionId: generateId(),
    totalCorrect,
    totalQuestions,
    scorePercent,
    grade: band.grade,
    gradeMessage: band.message,
    gradeColor: band.color,
    domainScores,
    answers,
    unlockedBadges,
  };
}
