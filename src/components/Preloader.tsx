import { useState, useEffect } from 'react';
import { preloaderConfig } from '../config';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  // Null check: if config is empty, complete immediately
  if (!preloaderConfig.brandName) {
    useEffect(() => { onComplete(); }, [onComplete]);
    return null;
  }

  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col items-center justify-center transition-opacity duration-600 ${phase === 'fading' ? 'opacity-0' : 'opacity-100'
        }`}
    >
      {/* Logo Icon */}
      <div className="preloader-text mb-6">
        <span className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-[#2C2417]">
          {preloaderConfig.brandName}
        </span>
      </div>

      {/* Subname */}
      <div className="preloader-text" style={{ animationDelay: '0.3s' }}>
        <span className="text-xs tracking-[0.4em] uppercase text-[#6B5D4D]">
          {preloaderConfig.brandSubname}
        </span>
      </div>

      {/* Loading Line */}
      <div className="mt-8 w-48 h-px bg-white/10 overflow-hidden">
        <div className="preloader-line h-full bg-gradient-to-r from-gold-500/50 via-gold-500 to-gold-500/50" />
      </div>

      {/* Year */}
      {preloaderConfig.yearText && (
        <p
          className="preloader-text mt-4 text-xs text-[#8A7B6B] uppercase tracking-[0.25em]"
          style={{ animationDelay: '0.4s' }}
        >
          {preloaderConfig.yearText}
        </p>
      )}
    </div>
  );
}
