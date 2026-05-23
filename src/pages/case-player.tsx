import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCaseById, addSession, unlockBadge } from '@/lib/store';
import { calculateScore } from '@/lib/scoring';
import type { ClinicalCase, CorrectOption } from '@/lib/types';
import { PCI_DUTIES } from '@/lib/constants';
import { ArrowLeft, Clock, FileText, AlertCircle, Calendar, TrendingUp, Info, Activity, ChevronRight, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type LeftTab = 'snapshot' | 'mar' | 'labs';

export default function CasePlayer() {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState<ClinicalCase | null>(null);
  
  // Timeline State
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [leftTab, setLeftTab] = useState<LeftTab>('snapshot');
  const [activeLabName, setActiveLabName] = useState<string>('');
  
  // Scoring / Answers State
  const [answers, setAnswers] = useState<Record<string, CorrectOption>>({});
  const [startTime, setStartTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (caseId) {
      const data = getCaseById(caseId);
      if (data) {
        setCaseData(data);
        setStartTime(Date.now());
      } else {
        navigate('/cases');
      }
    }
  }, [caseId, navigate]);

  if (!caseData) {
    return <div className="flex items-center justify-center p-12 text-slate-500">Loading case data...</div>;
  }

  // Normalize phases
  const phases = caseData.phases && caseData.phases.length > 0
    ? caseData.phases
    : [{
        id: 'single-phase',
        title: 'Simulation Stage',
        description: 'Review the patient record and answer the clinical questions.',
        patient_snapshot: caseData.patient_snapshot,
        questions: caseData.questions
      }];

  const currentPhase = phases[currentPhaseIdx];
  const patient = currentPhase.patient_snapshot;
  const questions = currentPhase.questions;

  // Check if all questions in the CURRENT phase are answered
  const allCurrentAnswered = questions.every(q => answers[q.id]);
  
  // Check if all questions in ALL phases are answered
  const allQuestions = phases.flatMap(p => p.questions);
  const allAnswered = allQuestions.every(q => answers[q.id]);

  const handleSelectOption = (questionId: string, option: CorrectOption) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleNextPhase = () => {
    if (currentPhaseIdx < phases.length - 1) {
      setCurrentPhaseIdx(prev => prev + 1);
      setCurrentQuestionIdx(0);
      setLeftTab('snapshot'); // reset tab
      setActiveLabName('');
    }
  };

  const handlePrevPhase = () => {
    if (currentPhaseIdx > 0) {
      setCurrentPhaseIdx(prev => prev - 1);
      setCurrentQuestionIdx(0);
      setLeftTab('snapshot');
      setActiveLabName('');
    }
  };

  const handleSubmit = () => {
    if (!allAnswered || isSubmitting) return;
    setIsSubmitting(true);

    const timeTakenSec = Math.floor((Date.now() - startTime) / 1000);
    
    // Evaluate scores based on all questions across all phases
    const scoreResult = calculateScore(allQuestions, answers, caseData.id);

    const session = {
      id: scoreResult.sessionId,
      case_id: caseData.id,
      case_title: caseData.title,
      answers: scoreResult.answers,
      score_percent: scoreResult.scorePercent,
      grade: scoreResult.grade,
      grade_message: scoreResult.gradeMessage,
      time_taken_sec: timeTakenSec,
      completed_at: new Date().toISOString(),
      domain_scores: scoreResult.domainScores,
    };

    // Unlock badges earned
    scoreResult.unlockedBadges.forEach(badge => {
      unlockBadge(badge.id, badge.title, badge.description, badge.icon, badge.pci_duty);
    });

    addSession(session);
    
    // Pass session and unlocked badges to debrief page
    navigate(`/cases/${caseData.id}/debrief`, { 
      state: { 
        session,
        newBadges: scoreResult.unlockedBadges 
      } 
    });
  };

  // Find MAR action question for a specific drug in current phase
  const getMARQuestionForDrug = (drugName: string) => {
    return questions.find(q => q.question_type === 'mar_action' && q.target_drug === drugName);
  };

  // Gather history of clicked lab for trend charts
  const getLabTrendData = (labName: string) => {
    return phases.slice(0, currentPhaseIdx + 1).map((phase, idx) => {
      const lab = phase.patient_snapshot.labs.find(l => l.name === labName);
      return {
        name: `Day ${idx === 0 ? 1 : idx * 2 + 1}`, // Day 1, Day 3, etc.
        value: lab ? parseFloat(lab.value) : null,
      };
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top bar with back and title */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button onClick={() => navigate('/cases')} className="text-sm font-medium flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back to Library
        </button>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-md">
            <Clock size={16} className="animate-spin-slow" />
            <span>Active Simulation Round</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Patient Chart Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="clean-card overflow-hidden">
            {/* Left Header - Tab Selector */}
            <div className="bg-slate-800 p-1 flex">
              <button
                onClick={() => setLeftTab('snapshot')}
                className={`flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  leftTab === 'snapshot' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                Patient Chart
              </button>
              <button
                onClick={() => setLeftTab('mar')}
                className={`flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider rounded transition-all relative ${
                  leftTab === 'mar' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                Medication Chart (MAR)
                {/* Visual indicator if action is needed in MAR */}
                {questions.some(q => q.question_type === 'mar_action' && !answers[q.id]) && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping" />
                )}
              </button>
              <button
                onClick={() => setLeftTab('labs')}
                className={`flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  leftTab === 'labs' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                Lab Results
              </button>
            </div>

            {/* Left Content Area */}
            <div className="p-5 space-y-6 bg-white min-h-[500px]">
              {/* Tab 1: Snapshot */}
              {leftTab === 'snapshot' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="pb-4 border-b border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900">{patient.name}</h3>
                    <p className="text-slate-500 text-sm mt-1">
                      {patient.age}Y • {patient.sex === 'M' ? 'Male' : 'Female'} • {patient.ward} • Bed {patient.bed}
                    </p>
                    <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Chief Complaint</span>
                      <p className="text-sm text-slate-800 italic font-medium">" {patient.presenting_complaint} "</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Past Medical History</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-800 space-y-1.5">
                        {patient.pmh.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>

                    {patient.allergies.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <AlertCircle size={12} /> Allergies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {patient.allergies.map((item, i) => (
                            <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-red-55 border border-red-100 text-red-800">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 2: Interactive MAR */}
              {leftTab === 'mar' && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Active Inpatient Pharmacotherapy</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Click dropdown to suggest direct clinical changes to current drugs.</p>
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden bg-white divide-y divide-slate-200">
                    {patient.medications.map((med, i) => {
                      const marQ = getMARQuestionForDrug(med.drug);
                      const isActionRequired = !!marQ;
                      const currentAnswer = marQ ? answers[marQ.id] : null;

                      return (
                        <div key={i} className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                          isActionRequired ? (currentAnswer ? 'bg-green-50/20' : 'bg-orange-50/20') : 'hover:bg-slate-50'
                        }`}>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-900">{med.drug}</span>
                              {isActionRequired && !currentAnswer && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-orange-800 border border-orange-200 animate-pulse">Action Required</span>
                              )}
                              {isActionRequired && currentAnswer && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-800 border border-green-200 flex items-center gap-0.5">
                                  <Check size={8} /> Reviewed
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500">{med.dose} • {med.frequency} • {med.route}</p>
                          </div>

                          <div className="shrink-0 w-full sm:w-auto">
                            {isActionRequired ? (
                              <select
                                value={currentAnswer || ''}
                                onChange={(e) => handleSelectOption(marQ.id, e.target.value as CorrectOption)}
                                className={`w-full sm:w-44 px-3 py-1.5 text-xs font-semibold rounded border focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                                  currentAnswer 
                                    ? 'bg-green-50 border-green-300 text-green-800 focus:border-green-500 focus:ring-green-500' 
                                    : 'bg-white border-orange-300 text-orange-900 focus:border-orange-500 focus:ring-orange-500'
                                }`}
                              >
                                <option value="" disabled>Select Clinical Action...</option>
                                <option value="A">{marQ.option_a}</option>
                                <option value="B">{marQ.option_b}</option>
                                <option value="C">{marQ.option_c}</option>
                                <option value="D">{marQ.option_d}</option>
                              </select>
                            ) : (
                              <select disabled className="w-full sm:w-44 px-3 py-1.5 text-xs rounded border border-slate-200 bg-slate-50 text-slate-400">
                                <option>Continue Unchanged</option>
                              </select>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 3: Lab Results & Trends */}
              {leftTab === 'labs' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Key Laboratory Findings</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Click any lab result to plot history and trend.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Labs Table */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                          <tr>
                            <th className="px-3 py-2.5 font-bold">Parameter</th>
                            <th className="px-3 py-2.5 font-bold">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {patient.labs.map((lab, i) => (
                            <tr
                              key={i}
                              onClick={() => setActiveLabName(lab.name)}
                              className={`cursor-pointer transition-colors ${
                                activeLabName === lab.name ? 'bg-blue-50' : 
                                lab.is_abnormal ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-slate-50'
                              }`}
                            >
                              <td className="px-3 py-3 font-medium text-slate-800">{lab.name}</td>
                              <td className={`px-3 py-3 font-bold ${lab.is_abnormal ? 'text-red-700' : 'text-slate-900'}`}>
                                {lab.value} <span className="text-[10px] font-normal text-slate-500">{lab.unit}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Trend Graph Area */}
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col justify-center min-h-[220px]">
                      {activeLabName ? (
                        <div className="space-y-3 flex-1 flex flex-col">
                          <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <TrendingUp size={14} className="text-blue-500" /> Trend: {activeLabName}
                          </h4>
                          <div className="flex-1 w-full min-h-[140px] -ml-6">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={getLabTrendData(activeLabName)}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '4px' }} />
                                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-slate-400 space-y-2">
                          <TrendingUp size={24} className="mx-auto text-slate-300" />
                          <p className="text-xs">Click a laboratory parameter in the list to visualize trend charts.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Rounds & Question Interface */}
        <div className="lg:col-span-7 space-y-6">
          {/* Phase Navigation Bar */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded">
                Ward Round Stage
              </span>
              <span className="text-sm font-bold text-slate-500">
                Visit {currentPhaseIdx + 1} of {phases.length}
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">{currentPhase.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{currentPhase.description}</p>
            </div>

            {/* Stage Indicators */}
            {phases.length > 1 && (
              <div className="flex gap-2 pt-2">
                {phases.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 flex-1 rounded-full transition-all ${
                      idx === currentPhaseIdx ? 'bg-blue-600' :
                      idx < currentPhaseIdx ? 'bg-green-500' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Active Questions Container */}
          <div className="clean-card p-6 md:p-8 space-y-6 bg-white flex flex-col justify-between min-h-[460px]">
            {/* Top Question Header */}
            {(() => {
              const q = questions[currentQuestionIdx];
              if (!q) return null;
              
              const isMARType = q.question_type === 'mar_action';
              const answer = answers[q.id];

              return (
                <div className="space-y-6 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Intervention {currentQuestionIdx + 1} of {questions.length}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase">
                      {PCI_DUTIES[q.pci_duty_category].shortLabel}
                    </span>
                  </div>

                  {/* Question Text */}
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {q.question_text}
                  </h3>

                  {/* Options list */}
                  {isMARType ? (
                    <div className="p-4 bg-orange-50/30 border border-orange-105 rounded-lg flex gap-3 text-xs text-orange-800 items-start">
                      <Info size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold text-orange-955">Medication Chart Change Required</p>
                        <p className="leading-relaxed">
                          Suggest your intervention directly by using the active dropdown on the left: **"{q.target_drug}"** in the **Medication Chart (MAR)** tab.
                        </p>
                        {answer ? (
                          <p className="text-green-700 font-bold mt-2 flex items-center gap-1">
                            <Check size={12} /> Selection Logged: {q[`option_${answer.toLowerCase()}` as keyof typeof q]}
                          </p>
                        ) : (
                          <button
                            onClick={() => setLeftTab('mar')}
                            className="mt-2 text-xs font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 border border-orange-200 py-1.5 px-3 rounded transition-colors"
                          >
                            Open Medication Chart
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        { id: 'A', text: q.option_a },
                        { id: 'B', text: q.option_b },
                        { id: 'C', text: q.option_c },
                        { id: 'D', text: q.option_d },
                      ].map((opt) => {
                        const isSelected = answer === opt.id;
                        return (
                          <label
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id as CorrectOption)}
                            className={`flex items-start gap-3 p-3.5 rounded-lg border-2 cursor-pointer transition-all ${
                              isSelected 
                                ? 'border-blue-500 bg-blue-50/30' 
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center h-5">
                              <input
                                type="radio"
                                name={`question-${q.id}`}
                                checked={isSelected}
                                onChange={() => {}}
                                className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                              />
                            </div>
                            <span className={`text-xs font-semibold ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                              {opt.text}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Pagination Controls inside the Card */}
            <div className="space-y-4 pt-6 border-t border-slate-150">
              <div className="flex justify-between items-center">
                {/* Back / Prev Question */}
                <button
                  onClick={() => setCurrentQuestionIdx(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIdx === 0}
                  className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed text-xs py-2 px-4"
                >
                  Previous Question
                </button>

                {/* Next Question / Phase advance / Complete round */}
                {currentQuestionIdx < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                    disabled={!answers[questions[currentQuestionIdx].id]}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      answers[questions[currentQuestionIdx].id]
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-100'
                    }`}
                  >
                    Next Question
                  </button>
                ) : currentPhaseIdx < phases.length - 1 ? (
                  <button
                    onClick={handleNextPhase}
                    disabled={!allCurrentAnswered}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      allCurrentAnswered
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-100'
                    }`}
                  >
                    Next Stage (Advance Visit) <ChevronRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!allAnswered || isSubmitting}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all ${
                      allAnswered
                        ? 'bg-green-600 hover:bg-green-700 shadow-md'
                        : 'bg-slate-350 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Evaluating Decisions...' : 'Complete Ward Round'}
                  </button>
                )}
              </div>

              {/* Day Back navigation button (only if multiple phases exist and we are on question index 0) */}
              {phases.length > 1 && currentQuestionIdx === 0 && currentPhaseIdx > 0 && (
                <div className="flex justify-center">
                  <button
                    onClick={handlePrevPhase}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 underline transition-colors"
                  >
                    Go Back to Previous Stage
                  </button>
                </div>
              )}

              {/* Progress Indicators (Dots) */}
              <div className="flex gap-2 justify-center pt-2">
                {questions.map((q, i) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      const isClickable = i <= currentQuestionIdx || answers[questions[i - 1]?.id];
                      if (isClickable) {
                        setCurrentQuestionIdx(i);
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentQuestionIdx ? 'bg-blue-600 ring-4 ring-blue-100' :
                      answers[q.id] ? 'bg-slate-800' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to question ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
