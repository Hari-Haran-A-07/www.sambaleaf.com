'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { KITCHEN_JOURNEY } from '../lib/data';
import { ChevronLeft, ChevronRight, Sparkles, PackageCheck } from 'lucide-react';

export default function KitchenStory() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-28 sm:py-36 bg-charcoal-deep text-cream overflow-hidden border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream/10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
              07 / BEHIND THE CRAFT
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium">
              INSIDE <span className="italic text-gold-soft font-normal">SAMBALEAF</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-body text-sm text-cream/70 font-light max-w-md">
            A glimpse into the disciplined daily rhythms of our Karur cloud kitchen—from morning spice crushing to hot doorstep delivery.
          </p>
        </div>

        {/* Stage Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {KITCHEN_JOURNEY.map((stage, idx) => (
            <button
              key={stage.stage}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 flex-shrink-0 ${
                activeIdx === idx
                  ? 'bg-gold-soft text-charcoal-near font-semibold shadow-lg shadow-gold-soft/20'
                  : 'bg-cream/5 text-cream/60 hover:text-cream hover:bg-cream/10 border border-cream/10'
              }`}
            >
              {stage.stage}
            </button>
          ))}
        </div>

        {/* Featured Story Stage Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal-warm/50 border border-cream/15 rounded-sm p-6 sm:p-10">
          {/* Main Visual */}
          <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-cream/10">
            <Image
              src={KITCHEN_JOURNEY[activeIdx].image}
              alt={KITCHEN_JOURNEY[activeIdx].title}
              fill
              className="object-cover transition-all duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="font-mono text-xs tracking-widest text-gold-soft uppercase bg-charcoal-deep/80 px-3 py-1 rounded-sm border border-gold-soft/30">
                STAGE {activeIdx + 1} OF 5
              </span>
            </div>
          </div>

          {/* Text & Stage Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-gold-soft uppercase block mb-2">
                {KITCHEN_JOURNEY[activeIdx].stage}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-cream font-medium mb-4">
                {KITCHEN_JOURNEY[activeIdx].title}
              </h3>
              <p className="font-body text-base text-cream/80 font-light leading-relaxed mb-8">
                {KITCHEN_JOURNEY[activeIdx].detail}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-cream/10">
              <div className="flex space-x-2">
                {KITCHEN_JOURNEY.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIdx === i ? 'w-6 bg-gold-soft' : 'bg-cream/20 hover:bg-cream/40'
                    }`}
                    aria-label={`Go to stage ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setActiveIdx((prev) => (prev > 0 ? prev - 1 : KITCHEN_JOURNEY.length - 1))
                  }
                  className="p-2.5 rounded-full bg-cream/10 hover:bg-gold-soft/20 text-cream transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveIdx((prev) => (prev < KITCHEN_JOURNEY.length - 1 ? prev + 1 : 0))
                  }
                  className="p-2.5 rounded-full bg-cream/10 hover:bg-gold-soft/20 text-cream transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
