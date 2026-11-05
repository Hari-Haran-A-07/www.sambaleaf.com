'use client';

import React, { useState } from 'react';
import { Leaf, Droplets, UtensilsCrossed, Sparkles, HeartHandshake } from 'lucide-react';

interface Step {
  step: number;
  title: string;
  tamilTitle: string;
  desc: string;
  icon: any;
  tip: string;
}

const STEPS: Step[] = [
  {
    step: 1,
    title: 'Orientation of the Leaf',
    tamilTitle: 'இலையின் சரியான திசை',
    desc: 'Always place the banana leaf with its narrower, pointed tip facing your left, and the broader base to your right. This traditional orientation ensures adequate room for the main rice mound on the right.',
    icon: Leaf,
    tip: 'Tradition dictates that natural leaf veins align with hospitality flow.'
  },
  {
    step: 2,
    title: 'The Water Sprinkle Ritual',
    tamilTitle: 'நீர்தெளித்து தூய்மை செய்தல்',
    desc: 'Sprinkle fresh droplets of clean water across the leaf surface and wipe it gently with your fingers from left to right. This purifies the natural polyphenols before hot biryani is served.',
    icon: Droplets,
    tip: 'The heat of fresh biryani activates antimicrobial polyphenol oils in the leaf.'
  },
  {
    step: 3,
    title: 'Salt, Pickle & Cool Raitha',
    tamilTitle: 'உப்பு, ஊறுகாய் மற்றும் பச்சடி',
    desc: 'Place rock salt, spicy lemon pickle, and a crisp dollop of onion raitha on the top-left edge of the leaf. This keeps savories separated from the main course.',
    icon: Sparkles,
    tip: 'Shallot raitha helps neutralize warm black pepper spices between bites.'
  },
  {
    step: 4,
    title: 'The Seeraga Samba Mound & Thalcha',
    tamilTitle: 'சீரக சம்பா சாதம் & தால்ச்சா',
    desc: 'Gently mound steaming Seeraga Samba biryani on the lower-center portion. Make a small well at the top to receive hot, slow-simmered brinjal-lentil thalcha.',
    icon: UtensilsCrossed,
    tip: 'Mix small portions at a time so the rice retains its aromatic warmth.'
  },
  {
    step: 5,
    title: 'The Inward Leaf Fold of Honor',
    tamilTitle: 'மரியாதையுடன் இலையை மடித்தல்',
    desc: 'When finished, fold the top half of the leaf down towards yourself (inward). In Tamil culture, folding towards you signifies you were deeply satisfied and honored by the feast!',
    icon: HeartHandshake,
    tip: 'Never fold outward at a celebratory feast — inward fold is pure gratitude.'
  }
];

export default function BananaLeafGuide() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-charcoal-pure border-t border-cream/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>Sacred Culinary Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold mb-4">
            The Banana Leaf Dining Ritual
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed">
            Eating on an emerald plantain leaf is not merely dining — it is a centuries-old Tamil ritual that transforms taste, digestion, and celebration.
          </p>
        </div>

        {/* Step Carousel / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl border text-left transition-all ${
                activeStep === idx
                  ? 'bg-emerald-950/40 border-emerald-500 text-cream shadow-lg ring-1 ring-emerald-500/50'
                  : 'bg-charcoal-deep border-cream/10 text-cream/60 hover:border-cream/30'
              }`}
            >
              <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1">
                Step 0{s.step}
              </div>
              <div className="text-xs font-semibold font-serif truncate">{s.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase */}
        {(() => {
          const current = STEPS[activeStep];
          const Icon = current.icon;
          return (
            <div className="bg-gradient-to-br from-charcoal-deep to-charcoal-near border border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3">
                    Step {current.step} of {STEPS.length}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream mb-1">
                    {current.title}
                  </h3>
                  <div className="text-sm font-tamil text-gold mb-4">
                    {current.tamilTitle}
                  </div>
                  <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-6">
                    {current.desc}
                  </p>
                  <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4 text-xs text-emerald-300/90 flex items-center gap-3">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider shrink-0">Chef Tip:</span>
                    <span>{current.tip}</span>
                  </div>
                </div>

                <div className="w-full lg:w-72 h-64 bg-charcoal-pure/80 border border-emerald-500/20 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div className="text-xs text-cream/40 uppercase tracking-widest font-semibold">Tamil Culinary Tradition</div>
                  <div className="text-sm font-serif text-cream font-bold mt-1">Samba Leaf Authentic Way</div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
