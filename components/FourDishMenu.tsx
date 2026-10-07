'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, ShieldCheck, Flame } from 'lucide-react';
import { useStore } from '../lib/store';

export default function FourDishMenu() {
  const { menuItems, addToCart } = useStore();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section id="menu" className="relative py-28 sm:py-36 bg-charcoal-near text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-cream/10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
              04 / CURATED GASTRONOMY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium">
              THE <span className="italic text-gold-soft font-normal">FOUR-DISH</span> MENU
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="font-mono text-xs text-cream/50 tracking-widest block uppercase">
              Cloud Kitchen • Made for Karur
            </span>
            <span className="font-tamil text-sm text-gold-soft/80 font-light mt-1 block">
              நான்கு தனித்துவ உணவுகள், ஒரே சுவை பாரம்பரியம்
            </span>
          </div>
        </div>

        {/* Desktop Interactive Expanding Horizontal Cards */}
        <div className="hidden lg:flex gap-4 h-[580px] w-full mb-12">
          {menuItems.map((item, index) => {
            const isHovered = hoveredIdx === index;
            const num = `0${index + 1}`;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(index)}
                className={`relative rounded-sm overflow-hidden border border-cream/15 transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between p-8 group ${
                  isHovered ? 'flex-[3.5] bg-charcoal-warm' : 'flex-[1] bg-charcoal-deep'
                }`}
              >
                {/* Full-bleed background image with dynamic opacity */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      isHovered ? 'scale-105 brightness-[0.75] contrast-[1.05]' : 'scale-100 brightness-[0.35]'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-charcoal-near via-charcoal-near/60 to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-90' : 'opacity-80'
                    }`}
                  />
                </div>

                {/* Top Number & Tag */}
                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className={`font-mono text-2xl font-light transition-colors duration-300 ${
                      isHovered ? 'text-gold-soft' : 'text-cream/30'
                    }`}
                  >
                    {num}
                  </span>

                  {isHovered && (
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-charcoal-deep/80 border border-gold-soft/40 backdrop-blur-md text-gold-soft text-[10px] font-mono tracking-wider animate-fadeIn">
                      <ShieldCheck className="w-3 h-3 text-gold-soft" />
                      <span>100% HALAL</span>
                    </span>
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10">
                  {/* Collapsed State Title (Rotated / Compact) */}
                  {!isHovered && (
                    <div className="writing-mode-vertical-lr transform rotate-180 mb-4 transition-all">
                      <h3 className="font-display text-xl tracking-[0.15em] text-cream/70 uppercase">
                        {item.name}
                      </h3>
                    </div>
                  )}

                  {/* Expanded State Content */}
                  {isHovered && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <span className="font-mono text-[11px] tracking-[0.2em] text-gold-soft uppercase block">
                          {item.subtitle}
                        </span>
                        <div className="flex items-baseline justify-between mt-1">
                          <h3 className="font-display text-3xl sm:text-4xl text-cream font-medium">
                            {item.name}
                          </h3>
                          <span className="font-tamil text-sm text-gold-soft/80">
                            {item.tamilName}
                          </span>
                        </div>
                      </div>

                      <p className="font-body text-sm text-cream/80 font-light line-clamp-3 leading-relaxed max-w-xl">
                        {item.description}
                      </p>

                      <div className="pt-4 border-t border-cream/10 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] tracking-wider text-cream/40 uppercase block">
                            PRICE
                          </span>
                          <span className="font-mono text-base text-cream">
                            {item.pricePlaceholder}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart({
                                menuItemId: item.id,
                                quantity: 1,
                                includeRaitha: item.category === 'biryani',
                                includeThalcha: item.category === 'biryani',
                              });
                            }}
                            className="px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near text-xs font-semibold uppercase tracking-[0.15em] hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center space-x-1.5"
                          >
                            <span>ADD TO ORDER</span>
                            <Plus className="w-3.5 h-3.5" />
                          </button>

                          <Link
                            href={`#${item.id}`}
                            className="p-2.5 rounded-sm bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
                            aria-label={`View story for ${item.name}`}
                          >
                            <ArrowUpRight className="w-4 h-4 text-gold-soft" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Stacked Touch Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => {
            const num = `0${index + 1}`;
            return (
              <div
                key={item.id}
                className="relative rounded-sm overflow-hidden border border-cream/15 bg-charcoal-warm/70 p-6 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-xs text-gold-soft bg-charcoal-deep/80 px-2.5 py-1 rounded-sm border border-gold-soft/30">
                      {num}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-gold-soft uppercase block mb-1">
                    {item.subtitle}
                  </span>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl text-cream font-medium">
                      {item.name}
                    </h3>
                    <span className="font-tamil text-xs text-cream/50">
                      {item.tamilName}
                    </span>
                  </div>
                  <p className="font-body text-xs text-cream/70 font-light leading-relaxed mb-6">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-cream/70">
                    {item.pricePlaceholder}
                  </span>
                  <button
                    onClick={() =>
                      addToCart({
                        menuItemId: item.id,
                        quantity: 1,
                        includeRaitha: item.category === 'biryani',
                        includeThalcha: item.category === 'biryani',
                      })
                    }
                    className="px-4 py-2 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near text-[11px] font-semibold tracking-wider uppercase flex items-center space-x-1"
                  >
                    <span>ADD</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Order Builder */}
        <div className="text-center mt-12">
          <Link
            href="#order-builder"
            className="inline-flex items-center space-x-2 text-gold-soft hover:text-cream text-xs font-mono tracking-[0.2em] uppercase transition-colors"
          >
            <span>CUSTOMIZE FULL MEAL ORDER IN BUILDER</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
