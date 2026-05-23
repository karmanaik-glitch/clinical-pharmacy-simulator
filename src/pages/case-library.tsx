import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { getCases, getBestScoreForCase } from '@/lib/store';
import { SUBJECT_AREAS, DIFFICULTY_CONFIG } from '@/lib/constants';
import type { ClinicalCase, SubjectArea, Difficulty } from '@/lib/types';

export default function CaseLibrary() {
  const [cases, setCases] = useState<ClinicalCase[]>([]);
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState<SubjectArea | ''>('');
  const [diffFilter, setDiffFilter] = useState<Difficulty | ''>('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => { setCases(getCases()); }, []);

  const filtered = useMemo(() => {
    return cases.filter(c => {
      if (search && !c.title.toLowerCase().includes(search.toLowerCase()) && !c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))) return false;
      if (subjectFilter && c.subject_area !== subjectFilter) return false;
      if (diffFilter && c.difficulty !== diffFilter) return false;
      return true;
    });
  }, [cases, search, subjectFilter, diffFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Case Library</h1>
          <p className="text-slate-600">Browse and start clinical simulation scenarios</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search cases by condition, drug, or keyword..." 
            value={search} 
            onChange={e => setSearch(e.target.value)}
            className="form-input pl-10" 
          />
        </div>
        <button onClick={() => setShowFilters(!showFilters)}
          className={`shrink-0 px-4 py-2 rounded-lg border font-medium flex items-center justify-center gap-2 transition-colors ${showFilters ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Filter Expansion */}
      {showFilters && (
        <div className="clean-card p-5 flex flex-wrap gap-4 bg-slate-50">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject Area</label>
            <select value={subjectFilter} onChange={e => setSubjectFilter(e.target.value as SubjectArea | '')}
              className="form-input">
              <option value="">All Subjects</option>
              {Object.entries(SUBJECT_AREAS).map(([key, val]) => (
                <option key={key} value={key}>{val.label}</option>
              ))}
            </select>
          </div>
          <div className="min-w-[160px]">
            <label className="block text-sm font-medium text-slate-700 mb-1">Difficulty</label>
            <select value={diffFilter} onChange={e => setDiffFilter(e.target.value as Difficulty | '')}
              className="form-input">
              <option value="">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="flex items-end pb-0.5">
            <button onClick={() => { setSubjectFilter(''); setDiffFilter(''); setSearch(''); }}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 underline">
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => {
          const bestScore = getBestScoreForCase(c.id);
          const diff = DIFFICULTY_CONFIG[c.difficulty];
          return (
            <div key={c.id} className="clean-card flex flex-col hover:shadow-md transition-shadow">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold px-2 py-1 rounded uppercase tracking-wide border" style={{ color: diff.color, backgroundColor: `${diff.color}10`, borderColor: `${diff.color}30` }}>
                    {diff.label}
                  </span>
                  
                  {bestScore !== null ? (
                    <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                      bestScore >= 75 ? 'bg-green-100 text-green-700' : bestScore >= 60 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                    }`}>
                      <CheckCircle2 size={12} /> {bestScore}%
                    </span>
                  ) : (
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-500 rounded-full">Not Attempted</span>
                  )}
                </div>
                
                <h3 className="font-bold text-lg text-slate-900 mb-1 leading-tight">{c.title}</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">
                  {SUBJECT_AREAS[c.subject_area]?.label || c.subject_area}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {c.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">{tag}</span>
                  ))}
                  {c.tags.length > 3 && <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">+{c.tags.length - 3}</span>}
                </div>
                
                <div className="mt-auto space-y-2">
                  <Link to={`/cases/${c.id}`} className="btn-primary w-full text-sm py-2.5 text-center block">
                    Start Case Simulation
                  </Link>
                  <Link 
                    to={`/cases/${c.id}/study-guide`} 
                    className="w-full text-sm py-2 px-3 border border-slate-250 rounded-lg font-bold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <BookOpen size={14} className="text-blue-600" />
                    Reference Study Guide
                  </Link>
                  <div className="flex items-center justify-center gap-4 pt-1 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1"><BookOpen size={14} /> {c.questions.length} Questions</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> ~{c.questions.length * 2} mins</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="clean-card p-12 text-center flex flex-col items-center justify-center">
          <Search size={48} className="text-slate-300 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">No cases found</h3>
          <p className="text-slate-500">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
