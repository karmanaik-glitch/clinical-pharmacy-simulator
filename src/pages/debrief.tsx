import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getCaseById, updateCompetencyScores } from '@/lib/store';
import { PCI_DUTIES, getGradeBand } from '@/lib/constants';
import type { Session, ClinicalCase } from '@/lib/types';
import { ArrowLeft, RefreshCw, CheckCircle2, XCircle, LayoutDashboard, Info, BarChart3, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

export default function Debrief() {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [caseData, setCaseData] = useState<ClinicalCase | null>(null);
  const [newBadges, setNewBadges] = useState<any[]>([]);

  useEffect(() => {
    if (location.state?.session) {
      const s = location.state.session as Session;
      setSession(s);
      
      const c = getCaseById(s.case_id);
      if (c) {
        setCaseData(c);
        updateCompetencyScores(s.domain_scores);
      } else {
        navigate('/cases');
      }

      if (location.state?.newBadges) {
        setNewBadges(location.state.newBadges);
      }
    } else {
      navigate('/cases');
    }
  }, [location, navigate]);

  if (!session || !caseData) {
    return <div className="flex items-center justify-center min-h-[50vh] text-slate-500">Loading debrief data...</div>;
  }

  const gradeColor = getGradeBand(session.score_percent).color;

  const chartData = session.domain_scores.map(ds => ({
    name: PCI_DUTIES[ds.pci_duty].shortLabel,
    accuracy: ds.accuracy,
    color: PCI_DUTIES[ds.pci_duty].color,
    total: ds.total,
    correct: ds.correct
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-lg text-sm z-50">
          <p className="font-bold text-slate-900 mb-1">{data.name}</p>
          <p className="font-mono font-bold" style={{ color: data.color }}>{data.accuracy}%</p>
          <p className="text-xs text-slate-500 mt-1">{data.correct} out of {data.total} correct</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <button onClick={() => navigate('/cases')} className="text-sm font-medium flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Library
        </button>
        <div className="flex items-center gap-3">
          <Link to={`/cases/${caseData.id}/study-guide`} className="px-4 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm flex items-center gap-2 transition-all">
            <BookOpen size={16} /> Study Guide
          </Link>
          <button onClick={() => navigate(`/cases/${caseData.id}`)} className="btn-secondary">
            <RefreshCw size={16} className="mr-2" /> Retry Case
          </button>
          <button onClick={() => navigate('/dashboard')} className="btn-primary">
            <LayoutDashboard size={16} className="mr-2" /> Dashboard
          </button>
        </div>
      </div>

      {/* New Badges Celebratory Section */}
      {newBadges.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-250 p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 animate-in zoom-in-95 duration-300">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center text-2xl font-bold shrink-0 animate-bounce">
              🏆
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Special Recognition Earned!</h3>
              <p className="text-sm text-slate-600">Your clinical reasoning in this simulation round unlocked new professional badges.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {newBadges.map((badge, idx) => (
              <div key={idx} className="bg-white border border-amber-200 px-3.5 py-2 rounded-lg shadow-sm flex items-center gap-2">
                <span className="text-xl">
                  {badge.icon === 'ShieldCheck' ? '🛡️' :
                   badge.icon === 'AlertTriangle' ? '⚠️' :
                   badge.icon === 'Zap' ? '⚡' :
                   badge.icon === 'MessageCircle' ? '💬' :
                   badge.icon === 'Skull' ? '💀' : '🎓'}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">{badge.title}</h4>
                  <p className="text-[10px] text-slate-500">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Score Card */}
        <div className="clean-card p-8 flex flex-col items-center justify-center text-center md:col-span-1">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Final Score</h2>
          
          <div className="relative mb-6">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="56" fill="none" stroke="#f1f5f9" strokeWidth="12" />
              <circle cx="64" cy="64" r="56" fill="none" stroke={gradeColor} strokeWidth="12" 
                strokeDasharray="351.8" 
                strokeDashoffset={351.8 - (351.8 * session.score_percent) / 100} 
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-slate-900">
                {session.score_percent}%
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-bold border" style={{ color: gradeColor, borderColor: gradeColor, backgroundColor: `${gradeColor}10` }}>
              {session.grade}
            </span>
            <p className="text-sm text-slate-600 mt-2">{session.grade_message}</p>
          </div>
        </div>

        {/* Domain Breakdown Chart */}
        <div className="clean-card p-6 md:col-span-2 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={18} className="text-slate-400" />
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Domain Performance</h3>
          </div>
          <div className="flex-1 w-full min-h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="accuracy" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Question Review */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Detailed Case Review</h3>
        
        {caseData.questions.map((q, idx) => {
          const answer = session.answers.find(a => a.question_id === q.id);
          if (!answer) return null;
          
          const isCorrect = answer.is_correct;
          const userOptionText = q[`option_${answer.selected_option.toLowerCase()}` as keyof typeof q];
          const correctOptionText = q[`option_${q.correct_option.toLowerCase()}` as keyof typeof q];
          
          return (
            <div key={q.id} className="clean-card overflow-hidden">
              <div className={`h-1 w-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`} />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-base font-bold text-slate-900 pr-4">
                    <span className="text-slate-400 mr-2">Q{idx + 1}.</span>
                    {q.question_text}
                  </h4>
                  <span className="shrink-0 px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold border border-slate-200 uppercase">
                    {PCI_DUTIES[q.pci_duty_category].shortLabel}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* User's Answer */}
                  <div className={`p-4 rounded-lg border flex gap-3 ${
                    isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <div className={`shrink-0 mt-0.5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>Your Answer ({answer.selected_option})</p>
                      <p className="text-sm font-medium text-slate-800">{userOptionText}</p>
                    </div>
                  </div>
                  
                  {/* Correct Answer (if user was wrong) */}
                  {!isCorrect ? (
                    <div className="p-4 rounded-lg border bg-green-50 border-green-200 flex gap-3">
                      <div className="shrink-0 mt-0.5 text-green-600">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-1 text-green-700">Correct Answer ({q.correct_option})</p>
                        <p className="text-sm font-medium text-slate-800">{correctOptionText}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </div>
                
                {/* Clinical Explanation */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Info size={16} className="text-blue-600" />
                    <h5 className="text-xs font-bold text-slate-700 uppercase tracking-widest">Clinical Rationale</h5>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{q.explanation_text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
