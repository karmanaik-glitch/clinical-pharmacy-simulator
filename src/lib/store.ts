// ============================================================
// PharmD Clinical Simulator — localStorage Store
// ============================================================

import type { ClinicalCase, Session, CompetencyScore, ReviewItem, PCIDutyCategory, Badge } from './types';
import { seedCases } from './seed-cases';

const KEYS = {
  CASES: 'pharmd_cases',
  SESSIONS: 'pharmd_sessions',
  COMPETENCY: 'pharmd_competency',
  REVIEW_DECK: 'pharmd_review',
  BADGES: 'pharmd_badges',
  INITIALIZED: 'pharmd_initialized',
  PROFILE: 'pharmd_profile',
} as const;

// ---- Generic helpers ----
function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// ---- Initialization (seed cases on first run) ----
export function initializeStore(): void {
  const cases = getItem<ClinicalCase[]>(KEYS.CASES, []);
  const hasOutdatedData = cases.length > 0 && (
    cases.length !== seedCases.length ||
    !cases.some(c => c.study_guide)
  );

  if (!localStorage.getItem(KEYS.INITIALIZED) || hasOutdatedData) {
    setItem(KEYS.CASES, seedCases);
    setItem(KEYS.SESSIONS, []);
    setItem(KEYS.COMPETENCY, []);
    setItem(KEYS.REVIEW_DECK, []);
    setItem(KEYS.BADGES, []);
    localStorage.setItem(KEYS.INITIALIZED, 'true');
  }

  // Initialize empty profile if none exists
  if (!localStorage.getItem(KEYS.PROFILE)) {
    setItem(KEYS.PROFILE, {
      name: 'Clinical Pharmacist',
      avatar: '👨‍⚕️',
      joined_at: new Date().toISOString()
    });
  }
}

// ---- User Profile ----
export function getUserProfile(): any {
  return getItem(KEYS.PROFILE, {
    name: 'Clinical Pharmacist',
    avatar: '👨‍⚕️',
    joined_at: new Date().toISOString()
  });
}

export function updateUserProfile(updates: any): void {
  const current = getUserProfile();
  setItem(KEYS.PROFILE, { ...current, ...updates });
}

// ---- Cases ----
export function getCases(): ClinicalCase[] {
  return getItem<ClinicalCase[]>(KEYS.CASES, []);
}

export function getCaseById(id: string): ClinicalCase | undefined {
  return getCases().find(c => c.id === id);
}

export function addCase(newCase: ClinicalCase): void {
  const cases = getCases();
  cases.push(newCase);
  setItem(KEYS.CASES, cases);
}

export function deleteCase(id: string): void {
  const cases = getCases().filter(c => c.id !== id);
  setItem(KEYS.CASES, cases);
}

// ---- Sessions ----
export function getSessions(): Session[] {
  return getItem<Session[]>(KEYS.SESSIONS, []);
}

export function getSessionsByCase(caseId: string): Session[] {
  return getSessions().filter(s => s.case_id === caseId);
}

export function getBestScoreForCase(caseId: string): number | null {
  const sessions = getSessionsByCase(caseId);
  if (sessions.length === 0) return null;
  return Math.max(...sessions.map(s => s.score_percent));
}

export function addSession(session: Session): void {
  const sessions = getSessions();
  sessions.unshift(session); // newest first
  setItem(KEYS.SESSIONS, sessions);
}

// ---- Competency Scores ----
export function getCompetencyScores(): CompetencyScore[] {
  return getItem<CompetencyScore[]>(KEYS.COMPETENCY, []);
}

export function updateCompetencyScores(domainResults: { pci_duty: PCIDutyCategory; correct: number; total: number }[]): void {
  const scores = getCompetencyScores();

  for (const result of domainResults) {
    const existing = scores.find(s => s.pci_duty === result.pci_duty);
    if (existing) {
      existing.total_questions += result.total;
      existing.total_correct += result.correct;
      existing.accuracy_percent = Math.round((existing.total_correct / existing.total_questions) * 100);
    } else {
      scores.push({
        pci_duty: result.pci_duty,
        total_questions: result.total,
        total_correct: result.correct,
        accuracy_percent: Math.round((result.correct / result.total) * 100),
      });
    }
  }

  setItem(KEYS.COMPETENCY, scores);
}
// ---- Review Deck ----
export function getReviewDeck(): ReviewItem[] {
  return getItem<ReviewItem[]>(KEYS.REVIEW_DECK, []);
}

export function addToReviewDeck(item: ReviewItem): void {
  const deck = getReviewDeck();
  if (!deck.find(d => d.question_id === item.question_id)) {
    deck.push(item);
    setItem(KEYS.REVIEW_DECK, deck);
  }
}

export function removeFromReviewDeck(questionId: string): void {
  const deck = getReviewDeck().filter(d => d.question_id !== questionId);
  setItem(KEYS.REVIEW_DECK, deck);
}

// ---- Badges ----
export function getBadges(): Badge[] {
  return getItem<Badge[]>(KEYS.BADGES, []);
}

export function unlockBadge(badgeId: string, title: string, description: string, icon: string, pciDuty?: PCIDutyCategory): Badge | null {
  const badges = getBadges();
  if (!badges.find(b => b.id === badgeId)) {
    const newBadge: Badge = {
      id: badgeId,
      title,
      description,
      icon,
      pci_duty: pciDuty,
      unlocked_at: new Date().toISOString(),
    };
    badges.push(newBadge);
    setItem(KEYS.BADGES, badges);
    return newBadge;
  }
  return null;
}

// ---- Stats ----
export function getOverallStats() {
  const sessions = getSessions();
  const competency = getCompetencyScores();
  const badges = getBadges();
  const totalSessions = sessions.length;
  const totalCorrect = sessions.reduce((sum, s) => sum + s.answers.filter(a => a.is_correct).length, 0);
  const totalQuestions = sessions.reduce((sum, s) => sum + s.answers.length, 0);
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const strongest = competency.length > 0
    ? competency.reduce((best, curr) => curr.accuracy_percent > best.accuracy_percent ? curr : best)
    : null;
  const weakest = competency.length > 0
    ? competency.reduce((worst, curr) => curr.accuracy_percent < worst.accuracy_percent ? curr : worst)
    : null;

  const totalXP = sessions.reduce((sum, s) => sum + Math.round(s.score_percent * s.answers.length * 0.1), 0);

  return { totalSessions, totalCorrect, totalQuestions, overallAccuracy, strongest, weakest, totalXP, badges };
}

// ---- Export / Import All Data ----
export function exportAllData(): string {
  return JSON.stringify({
    cases: getCases(),
    sessions: getSessions(),
    competency: getCompetencyScores(),
    reviewDeck: getReviewDeck(),
    badges: getBadges(),
  }, null, 2);
}

export function importAllData(json: string): void {
  const data = JSON.parse(json);
  if (data.cases) setItem(KEYS.CASES, data.cases);
  if (data.sessions) setItem(KEYS.SESSIONS, data.sessions);
  if (data.competency) setItem(KEYS.COMPETENCY, data.competency);
  if (data.reviewDeck) setItem(KEYS.REVIEW_DECK, data.reviewDeck);
  if (data.badges) setItem(KEYS.BADGES, data.badges);
}

export function clearAllData(): void {
  Object.values(KEYS).forEach(key => localStorage.removeItem(key));
  // Re-seed right after wipe to prevent broken app state
  initializeStore();
}
