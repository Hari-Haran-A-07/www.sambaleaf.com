'use client';

import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HalalSection() {
  return (
    <section id="halal" className="relative py-28 sm:py-36 bg-charcoal-near text-cream overflow-hidden border-t border-cream/10">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-leaf-deep/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Sophisticated Circular Seal Emblem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 border border-gold-soft/30 bg-gradient-to-br from-charcoal-warm via-charcoal-deep to-charcoal-near flex items-center justify-center shadow-2xl shadow-gold-soft/5 group">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-3 rounded-full border border-dashed border-gold-soft/40 animate-spin-slow pointer-events-none" />

              {/* Inner Seal Content */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-charcoal-deep border border-gold-soft/60 flex flex-col items-center justify-center text-center p-6 shadow-inner">
                <ShieldCheck className="w-10 h-10 text-gold-soft mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-display text-2xl sm:text-3xl tracking-[0.15em] text-cream font-medium">
                  100%
                </span>
                <span className="font-display text-xl sm:text-2xl tracking-[0.25em] text-gold-soft uppercase font-semibold">
                  HALAL
                </span>
                <span className="font-tamil text-xs text-cream/70 mt-1">
                  ஹலால் உறுதிமொழி
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-cream/40 uppercase mt-2">
                  SAMBALEAF • KARUR
                </span>
              </div>
            </div>
          </div>

          {/* Right: Trust Statement & Commitment */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
              06 / TRUST &amp; PURITY
            </span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium mb-6">
              100% <span className="italic text-gold-soft font-normal">HALAL.</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-cream/80 font-light leading-relaxed mb-8">
              Our kitchen is unconditionally committed to serving 100% Halal food. We ensure that every piece of poultry and mutton is sourced from trusted suppliers following strict Halal principles.
            </p>

            <div className="space-y-4 pt-4 border-t border-cream/10">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-soft flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-base text-cream">Clean &amp; Traceable Sourcing</h4>
                  <p className="font-body text-xs sm:text-sm text-cream/70 font-light">
                    Meats are procured fresh daily with clear provenance and strict Halal adherence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-soft flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-base text-cream">Pure Ingredients &amp; Ghee</h4>
                  <p className="font-body text-xs sm:text-sm text-cream/70 font-light">
                    Cooked with pure country ghee and authentic spices without artificial preservatives or unverified additives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-soft flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-base text-cream">Hygienic Cloud Kitchen Protocol</h4>
                  <p className="font-body text-xs sm:text-sm text-cream/70 font-light">
                    Every batch is slow-steamed under sealed dum standards, handled with culinary pride in Karur.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-sm bg-cream/5 border border-cream/10 text-xs font-mono text-cream/60">
              Note: Prepared in strict accordance with the brand&apos;s Halal culinary guidelines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
