'use client';

import React, { useState } from 'react';
import { ShieldCheck, X, AlertCircle, Check, Info } from 'lucide-react';
import { ALLERGEN_PROFILES } from '../lib/allergenData';

export default function AllergenMatrixModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-near border border-cream/20 text-cream/70 hover:text-cream text-xs font-medium transition"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Allergen & Safety Matrix</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">Dietary Transparency</span>
            </div>
            <h3 className="text-2xl font-serif text-cream font-bold mb-2">
              Allergen & Dietary Safety Standards
            </h3>
            <p className="text-xs text-cream/70 mb-6">
              At SAMBALEAF, every batch is prepared with 100% natural spices, zero MSG, and zero artificial coloring. Below is our verified allergen declaration.
            </p>

            <div className="space-y-4 mb-6">
              {ALLERGEN_PROFILES.map((profile) => (
                <div key={profile.dishId} className="p-4 rounded-2xl bg-charcoal-pure/70 border border-cream/10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-serif font-bold text-cream">{profile.dishName}</h4>
                    <div className="flex gap-1.5 text-[10px] font-bold">
                      {profile.isGlutenFree && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Gluten-Free
                        </span>
                      )}
                      {profile.isNutFree && (
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          100% Nut-Free
                        </span>
                      )}
                      {profile.isHalal && (
                        <span className="px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/30">
                          Halal
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-cream/80 mb-2">
                    <span className="text-cream/40 font-semibold">Contains: </span>
                    {profile.keyAllergens.join(', ')}
                  </div>

                  <p className="text-[11px] text-cream/60 italic">
                    {profile.kitchenSafetyNotes}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-charcoal-near border border-cream/10 text-xs text-cream/70 flex items-start gap-3">
              <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-cream">Kitchen Cross-Contamination Notice: </span>
                Our kitchen strictly segregates vegetarian accompaniment preparation and avoids peanut or tree nut handling. For acute dairy allergies, please advise our chef during WhatsApp checkout.
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-gold text-charcoal-pure font-bold text-xs"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
