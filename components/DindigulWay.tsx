'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, Sparkles, Wind, Droplets, Clock, Utensils } from 'lucide-react';
import SteamEffect from './SteamEffect';

const STAGES = [
  {
    id: 'rice',
    title: 'RICE',
    tamil: 'சீரக சம்பா அரிசி',
    label: 'Stage 01',
    description: 'Aged indigenous Seeraga Samba grains carefully rinsed and measured. Unlike modern high-yield rices, its tight starch structure ensures uniform cooking without releasing excess starch.',
    image: '/images/seeraga-samba-rice.jpg',
    icon: Sparkles,
    highlight: 'Pure Short Grain'
  },
  {
    id: 'spices',
    title: 'SPICES',
    tamil: 'கை அரைத்த மசாலா',
    label: 'Stage 02',
    description: 'Fresh country shallots, pure curd, mild green chillies, garlic, and freshly crushed spices—cinnamon, cloves, cardamom, and star anise—slowly caramelized in pure country ghee.',
    image: '/images/kitchen-dum.jpg',
    icon: Flame,
    highlight: 'Handcrafted Base'
  },
  {
    id: 'meat',
    title: 'MEAT',
    tamil: '100% ஹலால் இறைச்சி',
    label: 'Stage 03',
    description: 'Freshly cut 100% Halal chicken or tender mutton braised directly in the aromatic masala until succulent, creating a concentrated natural broth with deep umami.',
    image: '/images/mutton-biryani.jpg',
    icon: Utensils,
    highlight: '100% Halal Cuts'
  },
  {
    id: 'aroma',
    title: 'AROMA',
    tamil: 'நறுமணம்',
    label: 'Stage 04',
    description: 'As the broth simmers, essential oils from the spices, fresh mint, coriander, and ghee infuse the liquid with the distinct, heady scent of authentic Dindigul cooking.',
    image: '/images/chicken-biryani.jpg',
    icon: Wind,
    highlight: 'Pure Ghee & Mint'
  },
  {
    id: 'dum',
    title: 'DUM',
    tamil: 'தம் சமையல்',
    label: 'Stage 05',
    description: 'Sealed tightly with dough in a heavy-gauge deg. Glowing red charcoal embers are placed atop the lid, allowing balanced convective heat to steam every single rice grain to perfection.',
    image: '/images/kitchen-dum.jpg',
    icon: Flame,
    highlight: 'Charcoal Slow Dum'
  },
  {
    id: 'biryani',
    title: 'BRIYANI',
    tamil: 'பிரியாணி',
    label: 'Stage 06',
    description: 'Broken open fresh for each order. Golden-hued, piping hot, perfectly spiced Seeraga Samba grains crowned with tender meat, served alongside cool Onion Raitha and velvety Thalcha.',
    image: '/images/chicken-biryani.jpg',
    icon: Utensils,
    highlight: 'Served Piping Hot'
  }
];

export default function DindigulWay() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-charcoal-deep text-cream overflow-hidden">
      {/* Visual Ambient Steam */}
      <SteamEffect intensity="subtle" className="z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
            03 / THE DINDIGUL CRAFT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[0.04em] text-cream mb-4">
            THE <span className="italic text-gold-soft font-normal">DINDIGUL WAY</span>
          </h2>
          <p className="font-body text-base text-cream/70 font-light max-w-xl mx-auto">
            From raw heritage grain to slow woodfire dum — the meticulous 6-stage journey behind every serving at SAMBALEAF.
          </p>
        </div>

        {/* Stage Navigation Ribbon */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-12 border-b border-cream/10 scrollbar-none">
          {STAGES.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`flex-1 min-w-[120px] py-3 px-2 text-center group transition-all duration-300 relative focus:outline-none ${
                activeStage === idx
                  ? 'text-gold-soft font-semibold'
                  : 'text-cream/40 hover:text-cream/80'
              }`}
            >
              <span className="block font-mono text-[10px] tracking-[0.2em] mb-1">
                {stage.label}
              </span>
              <span className="block font-display text-base sm:text-lg tracking-wider">
                {stage.title}
              </span>

              {activeStage === idx && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric shadow-lg shadow-gold-brass/50" />
              )}
            </button>
          ))}
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal-warm/60 border border-cream/10 rounded-sm p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          {/* Left: Imagery with Steam */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm aspect-[16/10] w-full">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover transition-all duration-700 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/90 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-charcoal-deep/80 border border-gold-soft/40 backdrop-blur-md text-gold-soft text-[10px] font-mono tracking-[0.15em] uppercase">
                <CurrentIcon className="w-3 h-3 text-gold-soft" />
                <span>{current.highlight}</span>
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
              <span className="font-tamil text-sm text-gold-soft/90 block">
                {current.tamil}
              </span>
            </div>
          </div>

          {/* Right: Stage Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 lg:pl-4">
            <div>
              <div className="flex items-center space-x-2 text-gold-soft mb-2">
                <span className="font-mono text-xs tracking-[0.2em] uppercase">
                  {current.label} OF 06
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-cream font-medium mb-4">
                {current.title}
              </h3>

              <p className="font-body text-base text-cream/80 font-light leading-relaxed mb-6">
                {current.description}
              </p>
            </div>

            <div className="pt-6 border-t border-cream/10 flex items-center justify-between">
              <button
                onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1))}
                className="text-xs font-mono tracking-[0.15em] text-cream/50 hover:text-gold-soft uppercase transition-colors"
              >
                ← PREVIOUS
              </button>

              <span className="text-xs font-mono text-cream/30">
                {activeStage + 1} / {STAGES.length}
              </span>

              <button
                onClick={() => setActiveStage((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0))}
                className="text-xs font-mono tracking-[0.15em] text-cream/50 hover:text-gold-soft uppercase transition-colors"
              >
                NEXT STAGE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
