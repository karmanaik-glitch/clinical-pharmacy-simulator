import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CASE_GENERATION_PROMPT } from '@/lib/prompt-template';
import { addCase } from '@/lib/store';
import { generateId } from '@/lib/constants';
import type { ClinicalCase } from '@/lib/types';
import { Copy, Check, Upload, AlertCircle, FileJson } from 'lucide-react';

export default function ImportCase() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(CASE_GENERATION_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    setError(null);
    try {
      if (!jsonInput.trim()) {
        throw new Error('Please paste the JSON data.');
      }

      const parsed = JSON.parse(jsonInput);
      
      // Basic Validation
      if (!parsed.title || !parsed.subject_area || !parsed.questions || !Array.isArray(parsed.questions)) {
        throw new Error('Invalid JSON structure. Ensure it matches the requested schema.');
      }
      if (parsed.questions.length === 0) {
        throw new Error('Case must have at least 1 question.');
      }

      // Add missing fields to fit ClinicalCase interface
      const newCase: ClinicalCase = {
        ...parsed,
        id: `imported-${generateId()}`,
        source: 'imported',
        created_at: new Date().toISOString(),
      };

      // Ensure questions have IDs
      newCase.questions = newCase.questions.map((q: any) => ({
        ...q,
        id: `q-${generateId()}`,
        case_id: newCase.id,
      }));

      addCase(newCase);
      navigate(`/cases/${newCase.id}`);
    } catch (err: any) {
      setError(err.message || 'Failed to parse JSON. Please check the format.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">Import Case</h1>
          <p className="text-slate-600">Bring your own AI cases into the simulator</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Col: Prompt Instructions */}
        <div className="clean-card flex flex-col overflow-hidden h-[600px]">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-800">System Prompt</h2>
              <p className="text-xs text-slate-500 mt-0.5">Use in ChatGPT or Claude</p>
            </div>
            <button 
              onClick={handleCopyPrompt}
              className="btn-secondary text-sm py-1.5 px-3"
            >
              {copied ? <Check size={14} className="text-green-600 mr-1.5" /> : <Copy size={14} className="mr-1.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="p-6 flex-1 overflow-y-auto bg-slate-50 border-t border-slate-100">
            <pre className="text-xs font-mono leading-relaxed text-slate-700 whitespace-pre-wrap break-words">
              {CASE_GENERATION_PROMPT}
            </pre>
          </div>
        </div>

        {/* Right Col: JSON Import */}
        <div className="clean-card flex flex-col h-[600px]">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
            <FileJson size={18} className="text-slate-500" />
            <div>
              <h2 className="font-bold text-slate-800">Data Import</h2>
              <p className="text-xs text-slate-500 mt-0.5">Paste the JSON response below</p>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700 text-sm">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span className="font-medium">{error}</span>
              </div>
            )}
            
            <textarea 
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder={`{\n  "title": "Example Case",\n  "subject_area": "cardiovascular",\n  ...\n}`}
              className="flex-1 w-full border border-slate-300 rounded-lg p-4 font-mono text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-inner"
            />
            
            <button 
              onClick={handleImport}
              className="btn-primary w-full py-3 text-base"
            >
              <Upload size={18} className="mr-2" /> Load Scenario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
