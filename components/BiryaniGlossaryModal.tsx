'use client';

import React, { useState } from 'react';
import { BookOpen, X, Sparkles, Volume2 } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  tamilTerm: string;
  phonetic: string;
  definition: string;
  culturalNote: string;
}

const TERMS: GlossaryTerm[] = [
  {
    term: 'Dum',
    tamilTerm: 'தம்',
    phonetic: 'Dhum',
    definition: 'The art of slow cooking by sealing the vessel lid with whole-wheat dough and placing burning embers both beneath and above the rim.',
    culturalNote: 'Traps the volatile essential oils of spices so none escape into the air.'
  },
  {
    term: 'Seeraga Samba',
    tamilTerm: 'சீரக சம்பா',
    phonetic: 'See-ra-ga Saam-baa',
    definition: 'The indigenous aromatic short grain of Tamil Nadu, celebrated for centuries in ancient Sangam literature.',
    culturalNote: 'Absorbs up to 2.8 times its weight in rich meat juices without bursting.'
  },
  {
    term: 'Dega / Handi',
    tamilTerm: 'தேகா / அண்டி',
    phonetic: 'Dhay-gaa',
    definition: 'Traditional heavy-bottom copper cooking pot with a narrow neck, lined with pure food-grade tin (Kalai).',
    culturalNote: 'Copper diffuses heat uniformly across the base, preventing scorching.'
  },
  {
    term: 'Thalcha',
    tamilTerm: 'தால்ச்சா',
    phonetic: 'Thaal-chaa',
    definition: 'A slow-cooked sour and spicy gravy crafted with chana dal, country brinjals, bottle gourd, and tamarind.',
    culturalNote: 'The indispensable companion to Dindigul biryani — cuts through rich fats.'
  },
  {
    term: 'Ustad',
    tamilTerm: 'உஸ்தாத்',
    phonetic: 'Oos-thaadh',
    definition: 'Master biryani culinary artisan who oversees the hearth and knows the exact second the handi is done by the sound of the steam simmer.',
    culturalNote: 'Decades of apprenticeships pass down secret masala proportions.'
  },
  {
    term: 'Kaima',
    tamilTerm: 'கைமா அரிசி',
    phonetic: 'Kai-maa',
    definition: 'Historical regional Tamil name for tiny fragrant Samba rice varieties cultivated in South India.',
    culturalNote: 'Prized over all other grains for weddings and royal banquets.'
  }
];

export default function BiryaniGlossaryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTerm, setActiveTerm] = useState<GlossaryTerm>(TERMS[0]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-near border border-cream/20 text-cream/70 hover:text-cream text-xs font-medium transition"
      >
        <BookOpen className="w-3.5 h-3.5 text-gold" />
        <span>Tamil Culinary Glossary</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase font-bold tracking-widest text-gold">Tradition Decoded</span>
            </div>
            <h3 className="text-2xl font-serif text-cream font-bold mb-2">
              The Sambaleaf Heritage Glossary
            </h3>
            <p className="text-xs text-cream/70 mb-6">
              Learn the authentic Tamil culinary terms that define genuine Dindigul-style biryani craft.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 overflow-y-auto pr-1">
              {/* Term List */}
              <div className="sm:col-span-5 space-y-2">
                {TERMS.map((t) => (
                  <button
                    key={t.term}
                    onClick={() => setActiveTerm(t)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                      activeTerm.term === t.term
                        ? 'bg-charcoal-near border-gold text-cream font-bold shadow'
                        : 'bg-charcoal-pure/50 border-cream/10 text-cream/70 hover:border-cream/20'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-serif">{t.term}</span>
                      <span className="text-[10px] font-tamil text-gold">{t.tamilTerm}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Term Detail */}
              <div className="sm:col-span-7 bg-charcoal-near/80 rounded-2xl p-5 border border-cream/10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-xl font-serif font-bold text-cream">{activeTerm.term}</h4>
                    <span className="text-sm font-tamil text-gold">{activeTerm.tamilTerm}</span>
                  </div>
                  <div className="text-xs text-cream/40 font-mono mb-4">
                    Pronunciation: /{activeTerm.phonetic}/
                  </div>

                  <p className="text-cream/90 text-xs sm:text-sm leading-relaxed mb-4">
                    {activeTerm.definition}
                  </p>

                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-xs text-gold/90">
                    <span className="font-bold">Culinary Lore: </span>
                    {activeTerm.culturalNote}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-cream/10 text-[10px] text-cream/40">
                  Documented from historical Dindigul Ustad kitchen oral history.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
