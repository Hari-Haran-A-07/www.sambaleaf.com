'use client';

import React from 'react';
import { BRAND_VALUES } from '../lib/data';

export default function Manifesto() {
  return (
    <section className="relative py-28 sm:py-36 bg-charcoal-deep text-cream overflow-hidden border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Editorial Headline */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
            05 / CORE PRINCIPLES
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-cream">
            LESS MENU. <br />
            <span className="italic text-gold-soft">MORE CRAFT.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-cream/70 font-light mt-6 max-w-2xl">
            By dedicating our kitchen entirely to four signature dishes, we eliminate shortcuts and master every step of the authentic Dindigul biryani craft.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-sm bg-charcoal-warm/40 border border-cream/10 hover:border-gold-soft/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <span className="font-mono text-3xl sm:text-4xl text-cream/20 group-hover:text-gold-soft transition-colors font-light block mb-6">
                  {pillar.num}
                </span>

                <h3 className="font-display text-2xl text-cream mb-1">
                  {pillar.title}
                </h3>

                <p className="font-tamil text-xs text-gold-soft/80 mb-4 font-light">
                  {pillar.tamil}
                </p>
              </div>

              <div className="pt-6 border-t border-cream/10">
                <p className="font-body text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
