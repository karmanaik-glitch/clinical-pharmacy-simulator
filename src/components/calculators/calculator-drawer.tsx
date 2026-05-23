import React, { useState } from 'react';
import { X, Calculator, HelpCircle, RefreshCw } from 'lucide-react';

interface CalculatorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'crcl' | 'naranjo' | 'anion_gap';

export function CalculatorDrawer({ isOpen, onClose }: CalculatorDrawerProps) {
  const [activeTab, setActiveTab] = useState<Tab>('crcl');

  // Cockcroft-Gault state
  const [age, setAge] = useState<string>('');
  const [sex, setSex] = useState<'M' | 'F'>('M');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [scr, setScr] = useState<string>('');

  // Naranjo state
  const [naranjoAnswers, setNaranjoAnswers] = useState<Record<number, number>>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0
  });

  // Anion Gap state
  const [na, setNa] = useState<string>('');
  const [cl, setCl] = useState<string>('');
  const [hco3, setHco3] = useState<string>('');

  if (!isOpen) return null;

  // Cockcroft-Gault Calculations
  const calculateCrCl = () => {
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const scrNum = parseFloat(scr);

    if (isNaN(ageNum) || isNaN(weightNum) || isNaN(scrNum) || scrNum <= 0) return null;

    // Ideal Body Weight (IBW) calculation
    let ibw = 0;
    if (!isNaN(heightNum) && heightNum > 152.4) {
      const inchesOver5Foot = (heightNum - 152.4) / 2.54;
      ibw = sex === 'M' ? 50.0 + 2.3 * inchesOver5Foot : 45.5 + 2.3 * inchesOver5Foot;
    } else {
      ibw = sex === 'M' ? 50.0 : 45.5; // fallback
    }

    // Determine weight for dosing
    let dosingWeight = weightNum;
    let weightTypeUsed = 'Actual Body Weight';

    if (weightNum > 1.3 * ibw && ibw > 0) {
      // Obese: Use Adjusted Body Weight
      dosingWeight = ibw + 0.4 * (weightNum - ibw);
      weightTypeUsed = 'Adjusted Body Weight (Obese)';
    } else if (weightNum > ibw && ibw > 0) {
      // Overweight: Use Ideal Body Weight
      dosingWeight = ibw;
      weightTypeUsed = 'Ideal Body Weight (Overweight)';
    } else {
      weightTypeUsed = 'Actual Body Weight (Underweight/Normal)';
    }

    // Cockcroft-Gault Formula
    let crcl = ((140 - ageNum) * dosingWeight) / (72 * scrNum);
    if (sex === 'F') {
      crcl *= 0.85;
    }

    return {
      crcl: Math.round(crcl * 10) / 10,
      ibw: Math.round(ibw * 10) / 10,
      dosingWeight: Math.round(dosingWeight * 10) / 10,
      weightTypeUsed
    };
  };

  const crclResult = calculateCrCl();

  const resetCrCl = () => {
    setAge('');
    setSex('M');
    setWeight('');
    setHeight('');
    setScr('');
  };

  // Naranjo Calculations
  const NaranjoQuestions = [
    { id: 1, text: 'Are there previous conclusive reports on this reaction?', options: [{ text: 'Yes (+1)', val: 1 }, { text: 'No (0)', val: 0 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 2, text: 'Did the adverse event appear after the suspected drug was administered?', options: [{ text: 'Yes (+2)', val: 2 }, { text: 'No (-1)', val: -1 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 3, text: 'Did the adverse reaction improve when the drug was discontinued or a specific antagonist was administered?', options: [{ text: 'Yes (+1)', val: 1 }, { text: 'No (0)', val: 0 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 4, text: 'Did the adverse event reappear when the drug was readministered?', options: [{ text: 'Yes (+2)', val: 2 }, { text: 'No (-1)', val: -1 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 5, text: 'Are there alternative causes (other than the drug) that could on their own have caused the reaction?', options: [{ text: 'Yes (-1)', val: -1 }, { text: 'No (+2)', val: 2 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 6, text: 'Did the reaction reappear when a placebo was given?', options: [{ text: 'Yes (-1)', val: -1 }, { text: 'No (+1)', val: 1 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 7, text: 'Was the drug detected in blood (or other fluids) in toxic concentrations?', options: [{ text: 'Yes (+1)', val: 1 }, { text: 'No (0)', val: 0 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 8, text: 'Was the reaction more severe when the dose was increased, or less severe when the dose was decreased?', options: [{ text: 'Yes (+1)', val: 1 }, { text: 'No (0)', val: 0 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 9, text: 'Did the patient have a similar reaction to the same or similar drugs in any previous exposure?', options: [{ text: 'Yes (+1)', val: 1 }, { text: 'No (0)', val: 0 }, { text: 'Unknown (0)', val: 0 }] },
    { id: 10, text: 'Was the adverse event confirmed by any objective evidence?', options: [{ text: 'Yes (+1)', val: 1 }, { text: 'No (0)', val: 0 }, { text: 'Unknown (0)', val: 0 }] }
  ];

  const handleNaranjoSelect = (qId: number, val: number) => {
    setNaranjoAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const calculateNaranjoScore = () => {
    return Object.values(naranjoAnswers).reduce((sum, current) => sum + current, 0);
  };

  const naranjoScore = calculateNaranjoScore();
  const getNaranjoInterpretation = (score: number) => {
    if (score >= 9) return { label: 'Definite ADR', color: 'text-red-700 bg-red-100 border-red-200' };
    if (score >= 5) return { label: 'Probable ADR', color: 'text-orange-700 bg-orange-100 border-orange-200' };
    if (score >= 1) return { label: 'Possible ADR', color: 'text-yellow-700 bg-yellow-100 border-yellow-200' };
    return { label: 'Doubtful ADR', color: 'text-slate-700 bg-slate-100 border-slate-200' };
  };

  const naranjoInterpretation = getNaranjoInterpretation(naranjoScore);

  const resetNaranjo = () => {
    setNaranjoAnswers({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 });
  };

  // Anion Gap Calculations
  const calculateAnionGap = () => {
    const naNum = parseFloat(na);
    const clNum = parseFloat(cl);
    const hco3Num = parseFloat(hco3);

    if (isNaN(naNum) || isNaN(clNum) || isNaN(hco3Num)) return null;

    const gap = naNum - (clNum + hco3Num);
    return Math.round(gap * 10) / 10;
  };

  const anionGapResult = calculateAnionGap();

  const resetAnionGap = () => {
    setNa('');
    setCl('');
    setHco3('');
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-250">
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator size={20} className="text-blue-400" />
            <h2 className="font-bold text-lg">Clinical Calculator Suite</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button
            onClick={() => setActiveTab('crcl')}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition-all ${
              activeTab === 'crcl' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Cockcroft-Gault (CrCl)
          </button>
          <button
            onClick={() => setActiveTab('naranjo')}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition-all ${
              activeTab === 'naranjo' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Naranjo ADR Scale
          </button>
          <button
            onClick={() => setActiveTab('anion_gap')}
            className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition-all ${
              activeTab === 'anion_gap' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Anion Gap (Tox)
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tab 1: Cockcroft-Gault */}
          {activeTab === 'crcl' && (
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Renal Clearance & Dosing Weight</h3>
                <button onClick={resetCrCl} className="text-xs font-semibold text-red-600 flex items-center gap-1 hover:underline">
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Age (Years)</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 58"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Sex</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSex('M')}
                      className={`flex-1 py-2 text-sm font-bold border rounded transition-colors ${
                        sex === 'M' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setSex('F')}
                      className={`flex-1 py-2 text-sm font-bold border rounded transition-colors ${
                        sex === 'F' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 170"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Serum Creatinine (mg/dL)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={scr}
                    onChange={(e) => setScr(e.target.value)}
                    placeholder="e.g. 1.8"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Calculator Output */}
              {crclResult ? (
                <div className="p-5 bg-blue-50 border border-blue-100 rounded-lg space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-slate-600 font-medium">Estimated CrCl:</span>
                    <span className="text-3xl font-extrabold text-blue-700">{crclResult.crcl} <span className="text-sm font-semibold text-blue-500">mL/min</span></span>
                  </div>
                  <hr className="border-blue-200" />
                  <div className="text-xs text-slate-700 space-y-1">
                    <div className="flex justify-between">
                      <span>Ideal Body Weight (IBW):</span>
                      <span className="font-semibold">{crclResult.ibw} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight Category Used:</span>
                      <span className="font-semibold">{crclResult.weightTypeUsed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dosing Weight:</span>
                      <span className="font-semibold">{crclResult.dosingWeight} kg</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 leading-relaxed">
                  Enter age, weight, and serum creatinine to compute clearance. Standard clinical guidelines recommend using Ideal Body Weight (IBW) for normal/overweight dosing, Adjusted Body Weight for obese dosing, and Actual Body Weight for underweight dosing.
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Naranjo ADR Probability Scale */}
          {activeTab === 'naranjo' && (
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-800">Naranjo Algorithm</h3>
                  <p className="text-xs text-slate-500">Adverse Drug Reaction Probability Scale</p>
                </div>
                <button onClick={resetNaranjo} className="text-xs font-semibold text-red-600 flex items-center gap-1 hover:underline">
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              {/* Interpretation Box */}
              <div className={`p-4 border rounded-lg flex items-center justify-between ${naranjoInterpretation.color}`}>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider block opacity-75">ADR Causality Staging</span>
                  <span className="text-lg font-bold">{naranjoInterpretation.label}</span>
                </div>
                <div className="text-2xl font-extrabold px-3 py-1 rounded bg-white/60">
                  Score: {naranjoScore}
                </div>
              </div>

              {/* Questions List */}
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg bg-white overflow-hidden">
                {NaranjoQuestions.map((q) => (
                  <div key={q.id} className="p-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                      {q.id}. {q.text}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = naranjoAnswers[q.id] === opt.val;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleNaranjoSelect(q.id, opt.val)}
                            className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${
                              isSelected ? 'bg-blue-600 border-blue-600 text-white font-semibold' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {opt.text}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Anion Gap / Toxicology */}
          {activeTab === 'anion_gap' && (
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Anion Gap Calculator</h3>
                <button onClick={resetAnionGap} className="text-xs font-semibold text-red-600 flex items-center gap-1 hover:underline">
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Sodium (Na+)</label>
                  <input
                    type="number"
                    value={na}
                    onChange={(e) => setNa(e.target.value)}
                    placeholder="mEq/L"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Chloride (Cl-)</label>
                  <input
                    type="number"
                    value={cl}
                    onChange={(e) => setCl(e.target.value)}
                    placeholder="mEq/L"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Bicarb (HCO3-)</label>
                  <input
                    type="number"
                    value={hco3}
                    onChange={(e) => setHco3(e.target.value)}
                    placeholder="mEq/L"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Calculator Output */}
              {anionGapResult !== null ? (
                <div className="p-5 bg-blue-50 border border-blue-100 rounded-lg space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-slate-600 font-medium">Anion Gap:</span>
                    <span className="text-3xl font-extrabold text-blue-700">{anionGapResult} <span className="text-sm font-semibold text-blue-500">mEq/L</span></span>
                  </div>
                  <hr className="border-blue-200" />
                  <div className="text-xs text-slate-700">
                    <p className="font-semibold mb-1">Interpretation:</p>
                    {anionGapResult > 12 ? (
                      <p className="text-red-700">
                        Elevated Anion Gap (&gt;12 mEq/L) indicating High Anion Gap Metabolic Acidosis (HAGMA). Common toxicology differentials include **MUDPILES**: Methanol, Uremia, DKA, Paraldehyde, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates.
                      </p>
                    ) : (
                      <p className="text-slate-600">
                        Normal Anion Gap (Reference range: 8–12 mEq/L).
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 leading-relaxed">
                  Enter Sodium, Chloride, and Bicarbonate levels to compute the Anion Gap. This is an essential calculation in toxicology workups (e.g., organophosphate, metformin-associated acidosis, or aspirin overdoses).
                </div>
              )}

              {/* Mnemonic Info card */}
              <div className="clean-card p-4 space-y-2 bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                  <HelpCircle size={14} className="text-blue-500" /> Clinical Mnemonic: MUDPILES
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  For Elevated Anion Gap Metabolic Acidosis causes:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-medium text-slate-700">
                  <div>• **M** — Methanol</div>
                  <div>• **U** — Uremia (Kidney failure)</div>
                  <div>• **D** — Diabetic Ketoacidosis</div>
                  <div>• **P** — Paraldehyde / Propylene glycol</div>
                  <div>• **I** — Isoniazid / Iron toxicity</div>
                  <div>• **L** — Lactic Acidosis (e.g., Metformin)</div>
                  <div>• **E** — Ethylene Glycol</div>
                  <div>• **S** — Salicylates (Aspirin)</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button onClick={onClose} className="btn-secondary">
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}
