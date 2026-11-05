'use client';

import React, { useState } from 'react';
import { GlassWater, Sparkles, Flame, Check } from 'lucide-react';

interface Pairing {
  id: string;
  name: string;
  tamilName: string;
  category: 'Cooling Beverage' | 'Digestive Broth' | 'Sweet Finish';
  servesWith: string;
  sensoryHarmony: string;
  temperature: string;
}

const PAIRINGS: Pairing[] = [
  {
    id: 'nannari',
    name: 'Madurai Nannari Root Sarbath',
    tamilName: 'நன்னாரி எலுமிச்சை சர்பத்',
    category: 'Cooling Beverage',
    servesWith: 'Best alongside hot Mutton Biryani',
    sensoryHarmony: 'Sarsaparilla root essence instantly calms the palate, neutralizing Tellicherry black pepper heat.',
    temperature: 'Chilled with soaked Sabja seeds'
  },
  {
    id: 'sulaimani',
    name: 'Spiced Golden Sulaimani Tea',
    tamilName: 'ஏலக்காய் சுலைமானி தேநீர்',
    category: 'Digestive Broth',
    servesWith: 'Sipped 15 minutes after a heavy feast',
    sensoryHarmony: 'Infused with crushed green cardamom, Ceylon cinnamon, and fresh mint to kickstart enzymatic digestion.',
    temperature: 'Steaming hot with country jaggery'
  },
  {
    id: 'elaneer',
    name: 'Tender Coconut Elaneer Payasam',
    tamilName: 'இளநீர் பாயாசம்',
    category: 'Sweet Finish',
    servesWith: 'The ultimate royal dessert',
    sensoryHarmony: 'Pure coconut water and delicate tender pulp simmered with cashew milk for a light, non-cloying finale.',
    temperature: 'Lightly chilled'
  },
  {
    id: 'rasam',
    name: 'Cracked Pepper Kollu Rasam',
    tamilName: 'மிளகு கொள்ளு ரசம்',
    category: 'Digestive Broth',
    servesWith: 'Post-biryani digestive sip',
    sensoryHarmony: 'Horsegram broth with toasted cumin and dry ginger — ancient Tamil medicine for robust digestion.',
    temperature: 'Piping hot'
  }
];

export default function CulinaryPairings() {
  const [selectedPairing, setSelectedPairing] = useState<Pairing>(PAIRINGS[0]);

  return (
    <section className="py-20 bg-charcoal-pure border-t border-cream/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
            <GlassWater className="w-3.5 h-3.5" />
            <span>Harmonious Dining</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold mb-4">
            Curated Beverages & Digestive Pairings
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed">
            In traditional Tamil gastronomy, a feast is never complete without balanced cooling beverages and herbal infusions that harmonize the fire of slow-cooked spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIRINGS.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedPairing(p)}
              className={`cursor-pointer rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                selectedPairing.id === p.id
                  ? 'bg-charcoal-deep border-gold shadow-2xl ring-1 ring-gold/40 -translate-y-1'
                  : 'bg-charcoal-deep/50 border-cream/10 hover:border-cream/20'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-cream/5 text-gold border border-gold/20 inline-block mb-3">
                  {p.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-cream mb-0.5">{p.name}</h3>
                <div className="text-xs font-tamil text-gold/80 mb-3">{p.tamilName}</div>
                <p className="text-xs text-cream/70 leading-relaxed mb-4">
                  {p.sensoryHarmony}
                </p>
              </div>

              <div className="pt-3 border-t border-cream/10 text-[11px] space-y-1">
                <div className="text-emerald-400 font-semibold">{p.servesWith}</div>
                <div className="text-cream/40">{p.temperature}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
