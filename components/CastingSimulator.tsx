
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../i18n';

interface CastingSimulatorProps {
  onCastComplete: (binary: string) => void;
  currentLang?: Language;
}

const CastingSimulator: React.FC<CastingSimulatorProps> = ({ onCastComplete, currentLang = 'zh' }) => {
  const t = UI_STRINGS[currentLang];
  const [lines, setLines] = useState<number[]>([]);
  const [isCasting, setIsCasting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const castLine = () => {
    if (lines.length >= 6 || isCasting) return;
    setIsCasting(true);
    setTimeout(() => {
      const newLine = Math.random() > 0.5 ? 1 : 0;
      setLines(prev => [...prev, newLine]);
      setIsCasting(false);
    }, 800);
  };

  useEffect(() => {
    if (lines.length === 6 && !isCasting) {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [lines, isCasting]);

  const handleFinish = () => {
    const binary = [...lines].reverse().join('');
    onCastComplete(binary);
  };

  const reset = () => {
    setLines([]);
    setShowResult(false);
    setIsCasting(false);
  };

  const lineNames = currentLang === 'en' 
    ? ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Top']
    : ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-stone-200 flex flex-col items-center max-w-xl w-full mx-auto relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      <div className="text-center mb-8 z-10">
        <h2 className="text-3xl font-bold chinese-font text-stone-800 mb-2">{t.castTitle}</h2>
        <p className="text-stone-400 text-sm italic">{currentLang === 'en' ? '"Sincerity is the way of Heaven."' : '“无事不占，不动不占，不诚不占”'}</p>
      </div>
      
      <div className="w-full flex flex-col items-center justify-center mb-10 min-h-[300px] bg-stone-50/50 rounded-2xl p-8 border border-stone-100 shadow-inner relative">
        <div className="flex flex-col-reverse gap-4 w-48 md:w-64">
          {[0, 1, 2, 3, 4, 5].map((idx) => {
            const lineValue = lines[idx];
            const isPlaceholder = lineValue === undefined;
            const isLatest = !isPlaceholder && idx === lines.length - 1;

            return (
              <div 
                key={idx} 
                className={`h-5 md:h-7 w-full rounded-sm transition-all duration-700 relative
                  ${isPlaceholder ? 'bg-stone-200/20 border border-dashed border-stone-300/40' : ''}
                  ${isLatest ? 'animate-in fade-in slide-in-from-bottom-4 zoom-in-95' : ''}
                `}
              >
                {!isPlaceholder && (
                  <>
                    {lineValue === 1 ? (
                      <div className="w-full h-full bg-stone-800 rounded-sm shadow-md ring-1 ring-stone-900/10" />
                    ) : (
                      <div className="w-full h-full flex justify-between">
                        <div className="w-[44%] h-full bg-stone-800 rounded-sm shadow-md ring-1 ring-stone-900/10" />
                        <div className="w-[44%] h-full bg-stone-800 rounded-sm shadow-md ring-1 ring-stone-900/10" />
                      </div>
                    )}
                    <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-[10px] text-stone-300 font-bold uppercase tracking-tighter">
                      {lineNames[idx]}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
        
        {isCasting && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[1px] z-20 rounded-2xl">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-600 rounded-full animate-spin mb-3"></div>
              <span className="text-amber-700 font-bold chinese-font text-xl animate-pulse">{currentLang === 'en' ? 'Sensing...' : '感应中...'}</span>
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-center gap-6 z-10">
        {!showResult ? (
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-4">
              <button
                onClick={castLine}
                disabled={lines.length >= 6 || isCasting}
                className="group relative overflow-hidden px-10 py-4 bg-stone-900 text-amber-400 rounded-full font-bold text-lg hover:text-amber-300 transition-all shadow-xl disabled:bg-stone-300 disabled:text-stone-500 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className={`w-5 h-5 ${isCasting ? 'animate-bounce' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM6.464 13.536a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0z" />
                  </svg>
                  {lines.length === 0 ? (currentLang === 'en' ? "Begin Cast" : "掷爻起卦") : (currentLang === 'en' ? `Cast Line ${lines.length + 1}` : `掷第 ${lines.length + 1} 爻`)}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              {lines.length > 0 && (
                <button
                  onClick={reset}
                  className="p-4 text-stone-400 hover:text-stone-600 transition-colors"
                  title={t.reset}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357-2H15"/></svg>
                </button>
              )}
            </div>
            
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i < lines.length ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)] scale-110' : 'bg-stone-200'}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in zoom-in-90 fade-in duration-500 flex flex-col items-center gap-6 w-full">
            <div className="px-8 py-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800 font-bold text-center shadow-sm">
              {t.castReady}
            </div>
            <div className="flex gap-4 w-full">
              <button
                onClick={handleFinish}
                className="flex-grow py-5 bg-amber-600 text-white rounded-full font-bold text-lg hover:bg-amber-500 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                {t.castInterpret}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <button
                onClick={reset}
                className="px-8 py-5 border border-stone-200 text-stone-500 rounded-full font-medium hover:bg-stone-50 transition-all"
              >
                {t.reset}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CastingSimulator;
