import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSessions, getCompetencyScores, getOverallStats } from '@/lib/store';
import { PCI_DUTIES } from '@/lib/constants';
import type { Session, CompetencyScore } from '@/lib/types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Activity, Target, ShieldCheck, Award, Zap, BookOpen } from 'lucide-react';

// Rank helper
const getRank = (xp: number) => {
  if (xp >= 1000) return { title: 'Senior Clinical Consultant', level: 5, color: 'text-purple-700 bg-purple-50 border-purple-200', nextXP: null };
  if (xp >= 500) return { title: 'Clinical Registrar', level: 4, color: 'text-indigo-700 bg-indigo-50 border-indigo-200', nextXP: 1000 };
  if (xp >= 250) return { title: 'Senior Resident Pharmacist', level: 3, color: 'text-blue-700 bg-blue-50 border-blue-200', nextXP: 500 };
  if (xp >= 100) return { title: 'Resident Pharmacist', level: 2, color: 'text-green-700 bg-green-50 border-green-200', nextXP: 250 };
  return { title: 'Clinical Pharmacy Intern', level: 1, color: 'text-slate-700 bg-slate-50 border-slate-200', nextXP: 100 };
};

export default function Dashboard() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [competency, setCompetency] = useState<CompetencyScore[]>([]);
  const [stats, setStats] = useState({ totalSessions: 0, overallAccuracy: 0, totalXP: 0, badges: [] as any[] });

  useEffect(() => {
    setSessions(getSessions());
    setCompetency(getCompetencyScores());
    setStats(getOverallStats());
  }, []);

  const radarData = Object.keys(PCI_DUTIES).map(dutyKey => {
    const score = competency.find(c => c.pci_duty === dutyKey);
    return {
      subject: PCI_DUTIES[dutyKey as keyof typeof PCI_DUTIES].shortLabel,
      A: score ? score.accuracy_percent : 0,
      fullMark: 100,
    };
  });

  const trendData = [...sessions].reverse().map((s, i) => ({
    name: `S${i + 1}`,
    date: new Date(s.completed_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    score: s.score_percent,
  }));

  const weakAreas = competency.filter(c => c.accuracy_percent < 60).sort((a, b) => a.accuracy_percent - b.accuracy_percent);

  const CustomRadarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-slate-200 px-3 py-2 rounded shadow-md z-50">
          <p className="font-bold text-slate-800 text-xs mb-1">{payload[0].payload.subject}</p>
          <p className="text-blue-600 font-bold text-sm">{payload[0].value}% Accuracy</p>
        </div>
      );
    }
    return null;
  };

  const CustomLineTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-slate-200 px-3 py-2 rounded shadow-md z-50">
          <p className="font-bold text-slate-800 text-xs mb-1">{payload[0].payload.date}</p>
          <p className="text-blue-600 font-bold text-sm">Score: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  if (stats.totalSessions === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
        <Activity size={48} className="text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-800 mb-2">No Analytics Available</h2>
        <p className="text-slate-500 mb-6 max-w-md">Complete clinical cases to unlock your competency radar and performance history.</p>
        <Link to="/cases" className="btn-primary">Explore Cases</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Analytics Dashboard</h1>
          <p className="text-slate-600">Track your clinical competency and historical performance.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 border border-slate-200 rounded-lg shadow-sm">
          <Target size={20} className="text-blue-600" />
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Overall Accuracy</p>
            <p className="text-lg font-bold text-slate-900 leading-none mt-0.5">{stats.overallAccuracy}%</p>
          </div>
        </div>
      </div>
      {/* Rank and Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Professional Rank Card */}
        <div className="clean-card p-6 flex flex-col justify-between md:col-span-1">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
              <Award size={18} className="text-blue-600" /> Professional Credentials
            </h3>
            
            <div className={`p-4 rounded-lg border text-center ${getRank(stats.totalXP).color}`}>
              <span className="text-[10px] font-extrabold uppercase tracking-widest block opacity-75">Clinical Rank</span>
              <span className="text-lg font-black block mt-1">{getRank(stats.totalXP).title}</span>
              <span className="text-xs font-bold block mt-0.5">Level {getRank(stats.totalXP).level}</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Experience Points (XP)</span>
                <span>{stats.totalXP} XP</span>
              </div>
              {getRank(stats.totalXP).nextXP ? (
                <div className="space-y-1">
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min(100, (stats.totalXP / getRank(stats.totalXP).nextXP!) * 100)}%` }} 
                    />
                  </div>
                  <div className="flex justify-end text-[10px] font-medium text-slate-400">
                    <span>{getRank(stats.totalXP).nextXP! - stats.totalXP} XP to Level {getRank(stats.totalXP).level + 1}</span>
                  </div>
                </div>
              ) : (
                <div className="text-[10px] font-bold text-purple-600">🏆 Maximum Rank Achieved!</div>
              )}
            </div>
          </div>
        </div>

        {/* Badges List Card */}
        <div className="clean-card p-6 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
              <Zap size={18} className="text-amber-500" /> Specialty Badges ({stats.badges.length})
            </h3>
            
            {stats.badges.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[140px] overflow-y-auto pr-1">
                {stats.badges.map((badge: any, idx: number) => (
                  <div key={idx} className="border border-slate-200 p-2.5 rounded-lg bg-white shadow-sm flex items-center gap-2">
                    <span className="text-xl">
                      {badge.icon === 'ShieldCheck' ? '🛡️' :
                       badge.icon === 'AlertTriangle' ? '⚠️' :
                       badge.icon === 'Zap' ? '⚡' :
                       badge.icon === 'MessageCircle' ? '💬' :
                       badge.icon === 'Skull' ? '💀' : '🎓'}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-805 leading-tight">{badge.title}</h4>
                      <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 border border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center space-y-1">
                <span className="text-2xl">🎓</span>
                <p className="text-xs font-bold text-slate-700">No Badges Earned Yet</p>
                <p className="text-[10px] text-slate-400 max-w-xs leading-relaxed">
                  Unlock specialist credentials by scoring 100% in matching PCI domains on any simulation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competency Radar */}
        <div className="clean-card p-6 h-[400px] flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Activity size={18} className="text-blue-500" /> Competency Map
          </h3>
          <div className="flex-1 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Radar name="Student" dataKey="A" stroke="#2563eb" strokeWidth={2} fill="#3b82f6" fillOpacity={0.2} />
                <Tooltip content={<CustomRadarTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Score Trend */}
        <div className="clean-card p-6 h-[400px] flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target size={18} className="text-blue-500" /> Score Trend
          </h3>
          <div className="flex-1 w-full -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} dx={-10} ticks={[0, 25, 50, 75, 100]} />
                <Tooltip content={<CustomLineTooltip />} />
                <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#fff', strokeWidth: 2, stroke: '#2563eb' }} activeDot={{ r: 6, fill: '#2563eb' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Modern Table */}
      <div className="clean-card overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
          <BookOpen size={18} className="text-slate-500" />
          <h3 className="font-bold text-slate-800">Session History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-slate-200 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Case Title</th>
                <th className="px-6 py-3 font-semibold">Score</th>
                <th className="px-6 py-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sessions.map(s => (
                <tr key={s.id} className="hover:bg-slate-50 bg-white">
                  <td className="px-6 py-4 text-slate-600">
                    {new Date(s.completed_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {s.case_title}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-bold px-2.5 py-1 rounded-md ${
                      s.score_percent >= 75 ? 'bg-green-100 text-green-800' : 
                      s.score_percent >= 60 ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {s.score_percent}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/cases/${s.case_id}/debrief`} state={{ session: s }} className="text-blue-600 font-medium hover:text-blue-800 hover:underline">
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
