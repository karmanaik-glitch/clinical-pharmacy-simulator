import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCaseById, getSessionsByCase } from '@/lib/store';
import type { ClinicalCase } from '@/lib/types';
import { ArrowLeft, Lock, BookOpen, Calculator, Brain, ListChecks, HelpCircle, ShieldCheck } from 'lucide-react';

type Tab = 'guidelines' | 'calculations' | 'reasoning' | 'mnemonics';

export default function StudyGuide() {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  
  const [caseData, setCaseData] = useState<ClinicalCase | null>(null);
  const [isLocked, setIsLocked] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('guidelines');

  useEffect(() => {
    if (caseId) {
      const data = getCaseById(caseId);
      if (data) {
        setCaseData(data);
        const sessions = getSessionsByCase(caseId);
        setIsLocked(sessions.length === 0);
      } else {
        navigate('/cases');
      }
    }
  }, [caseId, navigate]);

  if (!caseData) {
    return <div className="flex items-center justify-center p-12 text-slate-500">Loading case guide...</div>;
  }

  // Handle Locked State
  if (isLocked) {
    return (
      <div className="max-w-2xl mx-auto my-12 text-center p-8 bg-white border border-slate-200 rounded-xl shadow-sm space-y-6">
        <div className="w-16 h-16 bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center mx-auto text-amber-600 shadow-inner">
          <Lock size={28} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">Study Guide Locked</h2>
          <p className="text-slate-600 max-w-md mx-auto">
            To unlock the guidelines, clinical calculations, rationales, and study mnemonics for **"{caseData.title}"**, you must complete this simulation ward round at least once.
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={`/cases/${caseData.id}`} className="btn-primary">
            Start Simulation
          </Link>
          <Link to="/cases" className="btn-secondary">
            Back to Case Library
          </Link>
        </div>
      </div>
    );
  }

  const studyGuide = caseData.study_guide || { guidelines: [], calculations: [], reasoning: [], mnemonics: [] };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button onClick={() => navigate(-1)} className="text-sm font-medium flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-md">
          <ShieldCheck size={16} />
          <span>Unlocked Reference</span>
        </div>
      </div>

      {/* Case Details Card */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
          {caseData.subject_area.replace('_', ' ')}
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 pt-1">
          Study Guide: {caseData.title}
        </h1>
        <p className="text-sm text-slate-500">
          Guideline-based reference materials, pharmacology rationales, and high-yield equations.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
        {[
          { id: 'guidelines', label: 'Guidelines', icon: BookOpen },
          { id: 'calculations', label: 'Calculations', icon: Calculator },
          { id: 'reasoning', label: 'Clinical Reasoning', icon: Brain },
          { id: 'mnemonics', label: 'Mnemonics & Tips', icon: ListChecks },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex-1 min-w-[150px] py-4 px-4 text-sm font-bold flex items-center justify-center gap-2 border-r last:border-r-0 border-slate-200 transition-all ${
                isActive ? 'bg-white text-blue-600 border-b-2 border-b-blue-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="clean-card p-6 bg-white min-h-[300px]">
        {/* Guidelines Panel */}
        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 pb-2 border-b border-slate-100">Standard Treatment Guidelines</h2>
            {studyGuide.guidelines.length > 0 ? (
              <div className="space-y-6">
                {studyGuide.guidelines.map((g, i) => (
                  <div key={i} className="p-5 border border-slate-200 rounded-lg hover:border-slate-300 transition-all bg-slate-50/50">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-bold text-slate-900 text-base">{g.title}</h3>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-1 rounded bg-slate-800 text-white tracking-widest">{g.organization}</span>
                    </div>
                    <p className="text-slate-700 text-sm mt-3 leading-relaxed whitespace-pre-wrap">{g.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">No guideline resources defined for this case.</div>
            )}
          </div>
        )}

        {/* Calculations Panel */}
        {activeTab === 'calculations' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 pb-2 border-b border-slate-100">Equations & Medical Math</h2>
            {studyGuide.calculations.length > 0 ? (
              <div className="space-y-6">
                {studyGuide.calculations.map((calc, i) => (
                  <div key={i} className="space-y-4">
                    <div className="p-4 border border-slate-200 rounded-lg bg-blue-50/50">
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <Calculator size={16} className="text-blue-600" /> {calc.name}
                      </h3>
                      <div className="my-3 p-3 bg-white border border-blue-100 rounded text-sm font-mono text-blue-800 text-center font-bold break-words shadow-inner">
                        {calc.formula}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{calc.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">No equations defined for this case.</div>
            )}
          </div>
        )}

        {/* Clinical Reasoning Panel */}
        {activeTab === 'reasoning' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 pb-2 border-b border-slate-100">Differential Diagnosis & Pharmacotherapy Rationale</h2>
            {studyGuide.reasoning.length > 0 ? (
              <div className="space-y-6">
                {studyGuide.reasoning.map((r, i) => (
                  <div key={i} className="p-5 border border-slate-200 rounded-lg bg-white space-y-3">
                    <h3 className="font-bold text-slate-900 flex items-start gap-2.5">
                      <HelpCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{r.question_text}</span>
                    </h3>
                    <div className="text-slate-700 text-sm leading-relaxed pl-7 border-l-2 border-slate-100">
                      {r.rationale}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">No reasoning items defined for this case.</div>
            )}
          </div>
        )}

        {/* Mnemonics Panel */}
        {activeTab === 'mnemonics' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 pb-2 border-b border-slate-100">Clinical Mnemonics & Recall Aids</h2>
            {studyGuide.mnemonics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studyGuide.mnemonics.map((m, i) => (
                  <div key={i} className="p-5 border border-slate-200 rounded-lg bg-slate-50 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-200 pb-2 flex items-center gap-2">
                        <ListChecks size={16} className="text-green-600" /> {m.name}
                      </h3>
                      <p className="text-xs text-slate-500 italic mt-1.5 mb-3">{m.concept}</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {m.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">No memory aids defined for this case.</div>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 pt-4">
        <Link to="/cases" className="btn-secondary">
          Back to Case Library
        </Link>
        <Link to="/dashboard" className="btn-primary">
          View My Progress
        </Link>
      </div>
    </div>
  );
}
