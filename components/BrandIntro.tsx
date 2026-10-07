'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useStore } from '../lib/store';

export default function BrandIntro() {
  const { menuItems } = useStore();

  return (
    <section id="story" className="relative py-28 sm:py-36 bg-charcoal-deep text-cream overflow-hidden">
      {/* Background Subtle Grain & Warm Ambient Gradient */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20 sm:mb-28">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
              01 / BRAND MANIFESTO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-cream">
              FOUR DISHES. <br />
              <span className="italic text-gold-soft">ONE TRADITION.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-cream/10">
            <p className="font-body text-base sm:text-lg text-cream/75 leading-relaxed font-light mb-4">
              We don&apos;t believe a great kitchen needs a hundred dishes. We believe four exceptional, time-honoured dishes can tell an entire culinary story.
            </p>
            <p className="font-tamil text-sm text-gold-soft/80 font-light">
              திண்டுக்கல்லின் பாரம்பரியம், சீரக சம்பா அரிசி, 100% ஹலால் மற்றும் அளவற்ற அர்ப்பணிப்பு.
            </p>
          </div>
        </div>

        {/* The 4 Dishes Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => {
            const num = `0${index + 1}`;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="group relative flex flex-col justify-between p-8 rounded-sm bg-charcoal-warm/60 border border-cream/10 hover:border-gold-soft/40 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-gold-soft/5 hover:-translate-y-1"
              >
                {/* Background Image on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                <div className="relative z-10">
                  {/* Big Number */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-3xl sm:text-4xl text-cream/30 group-hover:text-gold-soft transition-colors font-light">
                      {num}
                    </span>
                    <span className="p-2 rounded-full bg-cream/5 group-hover:bg-gold-soft/20 text-cream/60 group-hover:text-gold-soft transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Dish Title & Tamil Name */}
                  <span className="font-mono text-[10px] tracking-[0.2em] text-gold-soft/80 uppercase block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-2xl text-cream font-medium mb-1 group-hover:text-gold-soft transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-tamil text-xs text-cream/50 mb-4 font-light">
                    {item.tamilName}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-cream/10">
                  <p className="font-body text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Editorial Footnote Strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between py-6 px-8 rounded-sm bg-leaf-deep/30 border border-leaf/30 text-cream/80 text-xs sm:text-sm">
          <div className="flex items-center space-x-3 mb-3 sm:mb-0">
            <span className="w-2 h-2 rounded-full bg-gold-soft" />
            <span className="font-mono uppercase tracking-[0.15em] text-cream">
              The SAMBALEAF Promise
            </span>
          </div>
          <p className="font-body font-light text-cream/75 text-center sm:text-right">
            Slow cooked in limited handi batches daily in Karur. Zero compromise on grains or Halal integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
