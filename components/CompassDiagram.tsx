
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Hexagram, Language } from '../types';
import { HEXAGRAMS, SOLAR_TERMS, TRIGRAMS } from '../constants';
import { UI_STRINGS } from '../i18n';

interface CompassDiagramProps {
  onSelectHexagram: (h: Hexagram) => void;
  currentLang?: Language;
}

interface HoverState {
  type: 'circle' | 'square';
  h: Hexagram;
  angle?: number;
  x?: number;
  y?: number;
}

const CompassDiagram: React.FC<CompassDiagramProps> = ({ onSelectHexagram, currentLang = 'zh' }) => {
  const t = UI_STRINGS[currentLang];
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
  const [activeHover, setActiveHover] = useState<HoverState | null>(null);
  
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.8, rotation: 0 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const RADIUS_HEX = 340;  
  const RADIUS_TEXT = 395; 
  const CENTER = 600; 
  const CANVAS_SIZE = 1200;

  const trigramOrder = ["坤", "艮", "坎", "巽", "震", "离", "兑", "乾"];

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const initialScale = Math.min(containerWidth / CANVAS_SIZE, 1) * 0.9;
      setTransform(prev => ({ ...prev, scale: initialScale }));
    }
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(prev => ({
      ...prev,
      scale: Math.max(0.2, Math.min(prev.scale * delta, 5))
    }));
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const dx = clientX - lastMousePos.current.x;
    const dy = clientY - lastMousePos.current.y;
    setTransform(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handleMouseUp = () => { isDragging.current = false; };

  const resetView = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const initialScale = Math.min(containerWidth / CANVAS_SIZE, 1) * 0.9;
      setTransform({ x: 0, y: 0, scale: initialScale, rotation: 0 });
    }
  };

  const rotate = (dir: number) => {
    setTransform(prev => ({ ...prev, rotation: (prev.rotation + dir * 15) % 360 }));
  };

  const circleData = useMemo(() => {
    const hexMap = new Map<string, Hexagram>();
    HEXAGRAMS.forEach(h => hexMap.set(`${h.upperTrigram}-${h.lowerTrigram}`, h));
    const groupA: Hexagram[] = [];
    for (let r = 7; r >= 4; r--) {
      for (let c = 7; c >= 0; c--) {
        const h = hexMap.get(`${trigramOrder[c]}-${trigramOrder[r]}`);
        if (h) groupA.push(h);
      }
    }
    const groupB: Hexagram[] = [];
    for (let r = 0; r <= 3; r++) {
      for (let c = 0; c <= 7; c++) {
        const h = hexMap.get(`${trigramOrder[c]}-${trigramOrder[r]}`);
        if (h) groupB.push(h);
      }
    }
    const step = 180 / 32;
    const items: { h: Hexagram, angle: number }[] = [];
    groupA.forEach((h, i) => {
      const deg = 270 - (i + 0.5) * step;
      items.push({ h, angle: deg * (Math.PI / 180) });
    });
    groupB.forEach((h, i) => {
      const deg = 90 - (i + 0.5) * step;
      items.push({ h, angle: deg * (Math.PI / 180) });
    });
    return items;
  }, []);

  const renderHexLines = (binary: string, x: number, y: number, width: number, height: number, color: string = "#2d3436") => {
    if (!binary) return null;
    const lines = binary.split(''); 
    const lineHeight = height / 10;
    const gap = height / 12;
    return (
      <g transform={`translate(${x - width/2}, ${y - height/2})`}>
        {lines.map((line, idx) => {
          const yPos = idx * (lineHeight + gap);
          if (line === '1') {
            return <rect key={idx} x="0" y={yPos} width={width} height={lineHeight} fill={color} rx="0.5" />;
          } else {
            return (
              <g key={idx}>
                <rect x="0" y={yPos} width={width * 0.4} height={lineHeight} fill={color} rx="0.5" />
                <rect x={width * 0.6} y={yPos} width={width * 0.4} height={lineHeight} fill={color} rx="0.5" />
              </g>
            );
          }
        })}
      </g>
    );
  };

  const renderCircleHex = (h: Hexagram, angle: number, isHovered: boolean = false) => {
    const xHex = CENTER + RADIUS_HEX * Math.cos(angle);
    const yHex = CENTER + RADIUS_HEX * Math.sin(angle);
    const xText = CENTER + RADIUS_TEXT * Math.cos(angle);
    const yText = CENTER + RADIUS_TEXT * Math.sin(angle);
    const isSovereign = !!h.solarTerm;

    return (
      <g 
        key={`circle-${h.number}`} 
        className={`cursor-pointer group ${isHovered ? 'pointer-events-none' : ''}`}
        onClick={(e) => { e.stopPropagation(); onSelectHexagram(h); }}
        onMouseEnter={() => {
          const hexName = currentLang === 'en' ? h.nameEn : h.name;
          setHoveredInfo(`[${currentLang === 'en' ? 'Heaven' : '圆图'}] ${hexName} | ${h.upperTrigram}/${h.lowerTrigram}`);
          setActiveHover({ type: 'circle', h, angle });
        }}
        onMouseLeave={() => setActiveHover(null)}
      >
        <g 
          className="transition-all duration-300"
          style={{ transform: isHovered ? 'scale(3.0)' : 'scale(1)', transformOrigin: `${xHex}px ${yHex}px` }}
        >
          {isHovered && (
            <rect x={xHex - 12} y={yHex - 16} width={24} height={32} fill="#fdfaf2" fillOpacity="0.95" rx="2" transform={`rotate(${(angle * 180 / Math.PI) + 90}, ${xHex}, ${yHex})`} />
          )}
          <g transform={`rotate(${(angle * 180 / Math.PI) + 90}, ${xHex}, ${yHex})`}>
            {renderHexLines(h.binary, xHex, yHex, 16, 24, isSovereign ? "#7c2d12" : "#2d3436")}
          </g>
        </g>
        {!isHovered && (
          <text x={xText} y={yText} textAnchor="middle" alignmentBaseline="middle" className={`text-[18px] font-bold chinese-font transition-all duration-300 group-hover:text-amber-600 group-hover:text-[24px] ${isSovereign ? 'fill-amber-900' : 'fill-stone-700'}`} transform={`rotate(${(angle * 180 / Math.PI) + 90}, ${xText}, ${yText})`}>
            {currentLang === 'en' ? h.nameEn[0] : h.name}
          </text>
        )}
      </g>
    );
  };

  const renderSquareHex = (h: Hexagram, isHovered: boolean = false) => {
    const cIdx = trigramOrder.indexOf(h.upperTrigram); 
    const rIdx = trigramOrder.indexOf(h.lowerTrigram); 
    if (cIdx === -1 || rIdx === -1) return null;
    const posX = cIdx * 45;
    const posY = rIdx * 45;

    return (
      <g 
        key={`square-${h.number}`} transform={`translate(${posX}, ${posY})`} className={`cursor-pointer group ${isHovered ? 'pointer-events-none' : ''}`}
        onClick={(e) => { e.stopPropagation(); onSelectHexagram(h); }}
        onMouseEnter={() => {
          const hexName = currentLang === 'en' ? h.nameEn : h.name;
          setHoveredInfo(`[${currentLang === 'en' ? 'Earth' : '方图'}] ${hexName}`);
          setActiveHover({ type: 'square', h, x: posX, y: posY });
        }}
        onMouseLeave={() => setActiveHover(null)}
      >
        <g className="transition-all duration-300 origin-center" style={{ transform: isHovered ? 'scale(3.0)' : 'scale(1)', transformBox: 'fill-box' }}>
          <rect x="2" y="2" width="41" height="41" fill={isHovered ? "#fdfaf2" : (rIdx === cIdx ? "#fffbeb" : "#ffffff")} stroke={isHovered ? "#d4a373" : "#e5e5e5"} strokeWidth={isHovered ? "1.5" : "0.5"} rx="2" className="group-hover:stroke-amber-400 group-hover:fill-amber-50" />
          {renderHexLines(h.binary, 22.5, 15, 20, 22, "#2d3436")}
          <text x="22.5" y="40" textAnchor="middle" className="chinese-font text-[14px] font-bold fill-stone-900">{currentLang === 'en' ? h.nameEn.substring(0,2) : h.name}</text>
        </g>
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#fdfaf2] p-4 md:p-8 rounded-3xl shadow-2xl border border-stone-300 overflow-hidden relative touch-none">
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
        <button onClick={resetView} className="p-3 bg-white/90 backdrop-blur rounded-full shadow-lg border border-stone-200 hover:bg-amber-500 hover:text-white transition-all group" title={t.reset}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357-2H15"/></svg>
        </button>
        <div className="flex flex-col gap-2 bg-white/90 backdrop-blur p-1 rounded-full shadow-lg border border-stone-200">
          <button onClick={() => setTransform(p => ({ ...p, scale: p.scale * 1.2 }))} className="p-3 rounded-full hover:bg-stone-800 hover:text-white transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg></button>
          <button onClick={() => setTransform(p => ({ ...p, scale: p.scale * 0.8 }))} className="p-3 rounded-full hover:bg-stone-800 hover:text-white transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/></svg></button>
        </div>
        <div className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur py-4 px-3 rounded-full shadow-lg border border-stone-200">
          <button onClick={() => rotate(1)} className="p-1.5 bg-stone-100 rounded-lg hover:bg-amber-500 hover:text-white transition-all"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6"/></svg></button>
          <div className="h-40 flex items-center justify-center py-2"><input type="range" min="0" max="360" step="1" value={(transform.rotation % 360 + 360) % 360} onChange={(e) => setTransform(prev => ({ ...prev, rotation: parseInt(e.target.value) }))} style={{ WebkitAppearance: 'slider-vertical', writingMode: 'bt-lr', width: '8px', height: '100%' } as any} className="cursor-pointer accent-amber-500" /></div>
          <button onClick={() => rotate(-1)} className="p-1.5 bg-stone-100 rounded-lg hover:bg-amber-500 hover:text-white transition-all"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></button>
          <span className="text-xl font-black text-amber-600 chinese-font mt-1">{Math.round(transform.rotation)}°</span>
        </div>
      </div>

      <div className="mb-6 text-center z-10">
        <h3 className="text-3xl md:text-5xl font-bold chinese-font text-stone-900 tracking-[0.2em]">{t.compassTitle}</h3>
        <p className="text-stone-600 text-sm md:text-base mt-2 italic">{t.compassSub}</p>
      </div>

      <div ref={containerRef} className="relative w-full aspect-square md:aspect-auto md:h-[800px] flex justify-center items-center overflow-hidden cursor-move z-10" onWheel={handleWheel} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onTouchStart={handleMouseDown} onTouchMove={handleMouseMove} onTouchEnd={handleMouseUp}>
        <div style={{ transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale}) rotate(${transform.rotation}deg)`, transition: isDragging.current ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)' }} className="origin-center flex justify-center items-center">
          <svg width={CANVAS_SIZE} height={CANVAS_SIZE} viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`} className="drop-shadow-2xl overflow-visible">
            <circle cx={CENTER} cy={CENTER} r={RADIUS_TEXT + 80} fill="white" opacity="0.3" />
            <circle cx={CENTER} cy={CENTER} r={RADIUS_HEX} fill="none" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="4 4" />
            
            <g className="chinese-font font-bold text-4xl fill-stone-500 opacity-30">
              <text x={CENTER} y={CENTER - RADIUS_TEXT - 100} textAnchor="middle">{currentLang === 'en' ? 'South (Qian)' : '南 (乾)'}</text>
              <text x={CENTER} y={CENTER + RADIUS_TEXT + 120} textAnchor="middle">{currentLang === 'en' ? 'North (Kun)' : '北 (坤)'}</text>
              <text x={CENTER - RADIUS_TEXT - 120} y={CENTER + 12} textAnchor="middle">{currentLang === 'en' ? 'East (Li)' : '东 (离)'}</text>
              <text x={CENTER + RADIUS_TEXT + 120} y={CENTER + 12} textAnchor="middle">{currentLang === 'en' ? 'West (Kan)' : '西 (坎)'}</text>
            </g>

            {circleData.map(({ h, angle }) => renderCircleHex(h, angle))}
            <g transform={`translate(${CENTER - 180}, ${CENTER - 180})`}>
              <rect width="360" height="360" fill="white" fillOpacity="0.6" stroke="#d4a373" strokeWidth="1.5" rx="6" />
              {HEXAGRAMS.map((h) => renderSquareHex(h))}
            </g>

            {SOLAR_TERMS.map((term, i) => {
              const angle = (90 + (i / 24) * 360) * (Math.PI / 180);
              const x = CENTER + (RADIUS_TEXT + 55) * Math.cos(angle);
              const y = CENTER + (RADIUS_TEXT + 55) * Math.sin(angle);
              return (
                <g key={`solar-${term.en}`}>
                  <text x={x} y={y} textAnchor="middle" className="chinese-font text-[14px] fill-stone-500 font-bold" transform={`rotate(${(angle * 180 / Math.PI) + 90}, ${x}, ${y})`}>
                    {currentLang === 'en' ? term.en : term.zh}
                  </text>
                </g>
              );
            })}
            {activeHover && (
              <g className="pointer-events-none">
                {activeHover.type === 'circle' && activeHover.angle !== undefined && renderCircleHex(activeHover.h, activeHover.angle, true)}
                {activeHover.type === 'square' && <g transform={`translate(${CENTER - 180}, ${CENTER - 180})`}>{renderSquareHex(activeHover.h, true)}</g>}
              </g>
            )}
          </svg>
        </div>
        {hoveredInfo && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-stone-900/90 text-amber-100 px-6 py-2 rounded-full text-sm font-medium border border-amber-900/50 shadow-2xl z-50 backdrop-blur-lg whitespace-nowrap pointer-events-none">{hoveredInfo}</div>}
      </div>
    </div>
  );
};

export default CompassDiagram;
