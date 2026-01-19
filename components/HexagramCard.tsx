
import React from 'react';
import { Hexagram, Language } from '../types';
import HexagramIcon from './HexagramIcon';

interface HexagramCardProps {
  hexagram: Hexagram;
  index: number;
  onClick: (h: Hexagram) => void;
  currentLang?: Language;
}

const HexagramCard: React.FC<HexagramCardProps> = ({ hexagram, index, onClick, currentLang = 'zh' }) => {
  const isEn = currentLang === 'en';
  return (
    <div 
      onClick={() => onClick(hexagram)}
      style={{ animationDelay: `${(index % 24) * 40}ms` }}
      className="animate-fade-in-up group bg-white p-3 md:p-4 rounded-xl border border-stone-200 shadow-sm hover:shadow-lg hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center"
    >
      <span className="text-[10px] md:text-xs text-stone-400 mb-1">{isEn ? `No. ${hexagram.number}` : `第 ${hexagram.number} 卦`}</span>
      <HexagramIcon binary={hexagram.binary} size="md" className="mb-2 md:mb-3 transition-transform group-hover:scale-110" />
      <h3 className={`text-sm md:text-base font-bold text-slate-800 leading-tight text-center h-10 flex items-center ${isEn ? 'font-serif italic' : 'chinese-font'}`}>
        {isEn ? hexagram.nameEn : `${hexagram.name}卦`}
      </h3>
      <p className="text-[9px] md:text-xs text-stone-500 uppercase tracking-widest">{hexagram.pinyin}</p>
    </div>
  );
};

export default HexagramCard;
