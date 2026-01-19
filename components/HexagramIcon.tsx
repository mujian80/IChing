
import React from 'react';

interface HexagramIconProps {
  binary: string; // 6-bit string, bottom to top
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const HexagramIcon: React.FC<HexagramIconProps> = ({ binary, size = 'md', className = '' }) => {
  const lines = binary.split('').reverse(); // Visual display is usually top to bottom, but binary is bottom-up
  
  const sizeClasses = {
    sm: 'w-8 gap-0.5',
    md: 'w-16 gap-1',
    lg: 'w-24 gap-1.5',
    xl: 'w-48 gap-3'
  };

  const lineHeights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-6'
  };

  return (
    <div className={`flex flex-col-reverse items-center ${sizeClasses[size]} ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className={`w-full ${lineHeights[size]}`}>
          {line === '1' ? (
            <div className="w-full h-full bg-slate-800 rounded-sm shadow-sm" />
          ) : (
            <div className="w-full h-full flex justify-between">
              <div className="w-[45%] h-full bg-slate-800 rounded-sm shadow-sm" />
              <div className="w-[45%] h-full bg-slate-800 rounded-sm shadow-sm" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HexagramIcon;
