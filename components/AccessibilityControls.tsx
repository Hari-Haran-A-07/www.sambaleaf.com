'use client';

import React, { useState } from 'react';
import { Eye, Type, Sparkles, X, Keyboard, Contrast } from 'lucide-react';

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  const applyFontSize = (size: 'normal' | 'large' | 'xl') => {
    setFontSize(size);
    document.documentElement.classList.remove('text-size-normal', 'text-size-large', 'text-size-xl');
    document.documentElement.classList.add(`text-size-${size}`);
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.classList.add('high-contrast-mode');
    } else {
      document.documentElement.classList.remove('high-contrast-mode');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full bg-charcoal-deep/90 border border-cream/20 text-cream/70 hover:text-gold hover:border-gold shadow-2xl backdrop-blur-md transition-all"
        title="Accessibility & Display Options"
        aria-label="Accessibility & Display Options"
      >
        <Eye className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase font-bold tracking-widest text-gold">Accessibility (a11y)</span>
            </div>
            <h3 className="text-xl font-serif text-cream font-bold mb-1">Display & Reading Preferences</h3>
            <p className="text-xs text-cream/70 mb-6">Customize text clarity and contrast for effortless reading.</p>

            <div className="space-y-4">
              {/* Font Size Selector */}
              <div>
                <label className="text-xs font-semibold text-cream mb-2 block flex items-center gap-2">
                  <Type className="w-3.5 h-3.5 text-gold" />
                  <span>Text Sizing</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => applyFontSize('normal')}
                    className={`py-2 rounded-xl text-xs font-semibold border transition ${
                      fontSize === 'normal' ? 'bg-gold text-charcoal-pure border-gold font-bold' : 'bg-charcoal-near border-cream/10 text-cream/70'
                    }`}
                  >
                    Standard (A)
                  </button>
                  <button
                    onClick={() => applyFontSize('large')}
                    className={`py-2 rounded-xl text-sm font-semibold border transition ${
                      fontSize === 'large' ? 'bg-gold text-charcoal-pure border-gold font-bold' : 'bg-charcoal-near border-cream/10 text-cream/70'
                    }`}
                  >
                    Large (A+)
                  </button>
                  <button
                    onClick={() => applyFontSize('xl')}
                    className={`py-2 rounded-xl text-base font-semibold border transition ${
                      fontSize === 'xl' ? 'bg-gold text-charcoal-pure border-gold font-bold' : 'bg-charcoal-near border-cream/10 text-cream/70'
                    }`}
                  >
                    Extra (A++)
                  </button>
                </div>
              </div>

              {/* High Contrast Toggle */}
              <div className="pt-2">
                <button
                  onClick={toggleContrast}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-charcoal-near border border-cream/10 text-xs text-cream font-semibold hover:border-cream/20 transition"
                >
                  <div className="flex items-center gap-2">
                    <Contrast className="w-4 h-4 text-gold" />
                    <span>High Contrast Legibility Mode</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${highContrast ? 'bg-emerald-500 text-charcoal-pure' : 'bg-cream/10 text-cream/50'}`}>
                    {highContrast ? 'ENABLED' : 'OFF'}
                  </span>
                </button>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="pt-3 border-t border-cream/10">
                <div className="text-xs font-semibold text-cream mb-2 flex items-center gap-1.5">
                  <Keyboard className="w-3.5 h-3.5 text-gold" />
                  <span>Quick Keyboard Navigation</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-cream/70 font-mono">
                  <div className="bg-charcoal-near p-2 rounded-lg border border-cream/5">
                    <span className="text-gold font-bold">/</span> : Open Search
                  </div>
                  <div className="bg-charcoal-near p-2 rounded-lg border border-cream/5">
                    <span className="text-gold font-bold">Esc</span> : Close Dialogs
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-gold text-charcoal-pure font-bold text-xs"
              >
                Apply & Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
