'use client';

import React, { useState } from 'react';
import { COOKING_STAGES } from '../lib/data';

export default function CookingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-28 sm:py-36 bg-charcoal-near text-cream overflow-hidden border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
            08 / STEP-BY-STEP MASTERY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium">
            THE COOKING <span className="italic text-gold-soft font-normal">TIMELINE</span>
          </h2>
          <p className="font-body text-base text-cream/70 font-light mt-4">
            Six deliberate stages in our kitchen that transform simple grains and spices into Dindigul royalty.
          </p>
        </div>

        {/* Horizontal Timeline Progress Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {COOKING_STAGES.map((st, idx) => (
            <button
              key={st.step}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-sm border transition-all duration-300 ${
                activeStep === idx
                  ? 'bg-charcoal-warm border-gold-soft shadow-lg shadow-gold-soft/10'
                  : 'bg-charcoal-deep/60 border-cream/10 hover:border-cream/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-lg font-light ${activeStep === idx ? 'text-gold-soft' : 'text-cream/30'}`}>
                  {st.step}
                </span>
                <span className="font-tamil text-xs text-cream/40">{st.tamilTitle}</span>
              </div>
              <span className={`block font-display text-base tracking-wider ${activeStep === idx ? 'text-cream font-medium' : 'text-cream/60'}`}>
                {st.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-charcoal-warm/50 border border-cream/15 rounded-sm p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 text-gold-soft mb-3">
              <span className="font-mono text-xs tracking-[0.2em] uppercase">
                PHASE {COOKING_STAGES[activeStep].step}
              </span>
              <span className="text-cream/20">•</span>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-cream/70">
                {COOKING_STAGES[activeStep].highlight}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-cream font-medium mb-3">
              {COOKING_STAGES[activeStep].title}: {COOKING_STAGES[activeStep].subtitle}
            </h3>

            <p className="font-body text-base sm:text-lg text-cream/80 font-light leading-relaxed">
              {COOKING_STAGES[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
