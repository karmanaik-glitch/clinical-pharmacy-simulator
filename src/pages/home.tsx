import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Clock, Activity, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { getOverallStats, getSessions, getCompetencyScores } from '@/lib/store';
import { PCI_DUTIES } from '@/lib/constants';
import type { CompetencyScore, Session } from '@/lib/types';

// Rank helper
const getRank = (xp: number) => {
  if (xp >= 1000) return { title: 'Sr. Consultant', level: 5 };
  if (xp >= 500) return { title: 'Registrar', level: 4 };
  if (xp >= 250) return { title: 'Sr. Resident', level: 3 };
  if (xp >= 100) return { title: 'Resident', level: 2 };
  return { title: 'Intern', level: 1 };
};

export default function Home() {
  const [stats, setStats] = useState({ totalSessions: 0, totalCorrect: 0, totalQuestions: 0, overallAccuracy: 0, totalXP: 0 });
  const [recentSessions, setRecentSessions] = useState<Session[]>([]);
  const [weakAreas, setWeakAreas] = useState<CompetencyScore[]>([]);

  useEffect(() => {
    setStats(getOverallStats() as any);
    setRecentSessions(getSessions().slice(0, 5));
    setWeakAreas(getCompetencyScores().filter(c => c.accuracy_percent < 60));
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-2">
            <ShieldCheck size={16} /> PCI 2015 Compliant
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome to PharmD Simulator</h1>
          <p className="text-slate-600 max-w-2xl">
            Practice charting, monitoring, and clinical counselling with intelligent, high-fidelity virtual ward rounds.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link to="/cases" className="btn-primary w-full sm:w-auto">
            Start Simulation <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link to="/import" className="btn-secondary w-full sm:w-auto">
            Import Custom Case
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="clean-card p-6 flex flex-col">
          <div className="flex items-center gap-3 text-slate-500 font-medium mb-3">
            <BookOpen size={20} className="text-blue-500" /> Total Cases
          </div>
          <div className="text-3xl font-bold text-slate-900">{stats.totalSessions}</div>
        </div>
        <div className="clean-card p-6 flex flex-col">
          <div className="flex items-center gap-3 text-slate-500 font-medium mb-3">
            <Target size={20} className="text-green-500" /> Overall Accuracy
          </div>
          <div className="text-3xl font-bold text-slate-900">{stats.overallAccuracy}%</div>
        </div>
        <div className="clean-card p-6 flex flex-col">
          <div className="flex items-center gap-3 text-slate-500 font-medium mb-3">
            <Activity size={20} className="text-indigo-500" /> Questions Answered
          </div>
          <div className="text-3xl font-bold text-slate-900">{stats.totalQuestions}</div>
        </div>
        <div className="clean-card p-6 flex flex-col">
          <div className="flex items-center gap-3 text-slate-500 font-medium mb-3">
            <Award size={20} className="text-amber-500" /> Clinical Rank
          </div>
          <div className="text-lg font-black text-slate-950 leading-tight">
            {getRank(stats.totalXP).title}
          </div>
          <div className="text-xs font-semibold text-slate-500 mt-1 flex justify-between items-center">
            <span>Level {getRank(stats.totalXP).level}</span>
            <span>{stats.totalXP} XP</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Cases */}
        <div className="lg:col-span-2 clean-card flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800">Recent Simulations</h2>
            <Link to="/dashboard" className="text-sm font-medium text-blue-600 hover:text-blue-800">View All</Link>
          </div>
          
          <div className="p-0 flex-1">
            {recentSessions.length > 0 ? (
              <ul className="divide-y divide-slate-100">
                {recentSessions.map(s => (
                  <li key={s.id}>
                    <Link to={`/cases/${s.case_id}/debrief`} state={{ session: s }} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                      <div>
                        <p className="font-semibold text-slate-900">{s.case_title}</p>
                        <p className="text-sm text-slate-500 mt-1">
                          {new Date(s.completed_at).toLocaleDateString()} • {Math.floor(s.time_taken_sec / 60)}m {s.time_taken_sec % 60}s
                        </p>
                      </div>
                      <div className={`font-bold px-3 py-1 rounded text-sm ${
                        s.score_percent >= 75 ? 'bg-green-100 text-green-800' :
                        s.score_percent >= 60 ? 'bg-amber-100 text-amber-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {s.score_percent}%
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-slate-500 flex flex-col items-center">
                <BookOpen size={32} className="mb-3 text-slate-300" />
                <p>No recent simulations found.</p>
                <p className="text-sm mt-1">Start a case to see your history.</p>
              </div>
            )}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="clean-card flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="font-semibold text-slate-800">Areas for Improvement</h2>
          </div>
          <div className="p-6 flex-1">
            {weakAreas.length > 0 ? (
              <div className="space-y-6">
                {weakAreas.slice(0, 4).map(area => (
                  <div key={area.pci_duty}>
                    <div className="flex justify-between text-sm font-medium mb-1.5 text-slate-700">
                      <span>{PCI_DUTIES[area.pci_duty].shortLabel}</span>
                      <span className="text-red-600">{area.accuracy_percent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${area.accuracy_percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 py-8">
                <ShieldCheck size={32} className="mb-3 text-green-500" />
                <p className="font-medium text-slate-800">All domains optimal</p>
                <p className="text-sm mt-1">No major weaknesses identified yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
