'use client';

import React, { useState } from 'react';
import { Calculator, Users, Utensils, Leaf, Check, MessageSquare } from 'lucide-react';
import { formatINR } from '../lib/formatters';

export default function FeastCalculator() {
  const [guests, setGuests] = useState<number>(20);
  const [meatPreference, setMeatPreference] = useState<'mixed' | 'mutton' | 'chicken'>('mixed');

  // Realistic catering yield calculations:
  // 1 portion = approx 400g cooked biryani (including 150g meat)
  const chickenPortions = meatPreference === 'chicken' ? guests : meatPreference === 'mixed' ? Math.ceil(guests * 0.6) : 0;
  const muttonPortions = meatPreference === 'mutton' ? guests : meatPreference === 'mixed' ? Math.floor(guests * 0.4) : 0;

  const rawRiceKg = +(guests * 0.12).toFixed(1); // 120g raw samba rice per person
  const raithaLitres = +(guests * 0.08).toFixed(1);
  const thalchaLitres = +(guests * 0.1).toFixed(1);
  const bananaLeaves = guests + Math.ceil(guests * 0.1); // 10% buffer

  // Pricing estimation with bulk tier discount
  const baseCost = (chickenPortions * 280) + (muttonPortions * 360);
  const discountPercent = guests >= 100 ? 15 : guests >= 50 ? 10 : guests >= 25 ? 5 : 0;
  const discountedCost = Math.round(baseCost * (1 - discountPercent / 100));

  const handleWhatsAppQuote = () => {
    const text = `வணக்கம் SAMBALEAF Team! I would like a bulk catering quote for ${guests} guests (%0AMeat: ${meatPreference}%0AEstimated Portions: ${chickenPortions} Chicken, ${muttonPortions} Mutton%0AEstimated Rice: ${rawRiceKg}kg Seeraga Samba%0AEstimated Quote: ${formatINR(discountedCost)}). Please share booking availability!`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 bg-charcoal-near border-y border-cream/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Feast Planner</span>
          </div>
          <h2 className="text-3xl font-serif text-cream font-bold">
            Interactive Biryani & Feast Calculator
          </h2>
          <p className="text-sm text-cream/70 mt-2 max-w-2xl mx-auto">
            Planning a family gathering, wedding reception, or office celebration in Karur? Calculate precise portions, accompaniments, and estimated bulk rates instantly.
          </p>
        </div>

        <div className="bg-charcoal-deep border border-gold/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-cream flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Number of Guests:</span>
                </label>
                <span className="text-2xl font-bold font-serif text-gold">{guests} Guests</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full accent-gold h-2 bg-charcoal-near rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-cream/40 mt-1">
                <span>5 (Family)</span>
                <span>50 (Party)</span>
                <span>100 (Function)</span>
                <span>200+ (Wedding)</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-cream mb-3">
                Meat Preference Distribution:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['mixed', 'mutton', 'chicken'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setMeatPreference(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize border transition-all ${
                      meatPreference === type
                        ? 'bg-gold text-charcoal-pure border-gold shadow'
                        : 'bg-charcoal-pure text-cream/70 border-cream/10 hover:border-cream/30'
                    }`}
                  >
                    {type === 'mixed' ? '60/40 Split' : `${type} Only`}
                  </button>
                ))}
              </div>
              {discountPercent > 0 && (
                <div className="mt-3 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Tier discount of {discountPercent}% applied for {guests} guests!</span>
                </div>
              )}
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-charcoal-pure/70 rounded-2xl border border-cream/10 mb-8">
            <div>
              <div className="text-xs text-cream/50 mb-1">Seeraga Samba Rice</div>
              <div className="text-xl font-bold text-cream font-serif">{rawRiceKg} kg</div>
              <div className="text-[11px] text-gold/80">Cauvery Delta Grain</div>
            </div>
            <div>
              <div className="text-xs text-cream/50 mb-1">Curd Raitha</div>
              <div className="text-xl font-bold text-cream font-serif">{raithaLitres} L</div>
              <div className="text-[11px] text-cream/60">Shallot & green chilli</div>
            </div>
            <div>
              <div className="text-xs text-cream/50 mb-1">Dindigul Thalcha</div>
              <div className="text-xl font-bold text-cream font-serif">{thalchaLitres} L</div>
              <div className="text-[11px] text-cream/60">Slow-simmered brinjal</div>
            </div>
            <div>
              <div className="text-xs text-cream/50 mb-1 flex items-center gap-1">
                <Leaf className="w-3 h-3 text-emerald-400" />
                <span>Banana Leaves</span>
              </div>
              <div className="text-xl font-bold text-emerald-400 font-serif">{bananaLeaves} pcs</div>
              <div className="text-[11px] text-cream/60">Freshly cut & sanitized</div>
            </div>
          </div>

          {/* Bottom Total & WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-cream/10">
            <div>
              <div className="text-xs text-cream/50">Estimated Catering Investment</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-gold">{formatINR(discountedCost)}</span>
                {discountPercent > 0 && (
                  <span className="text-sm line-through text-cream/40">{formatINR(baseCost)}</span>
                )}
              </div>
              <div className="text-[11px] text-cream/40">Includes live packing & warm delivery in Karur</div>
            </div>

            <button
              onClick={handleWhatsAppQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-sm transition-all shadow-lg shadow-gold/20"
            >
              <MessageSquare className="w-4 h-4 fill-charcoal-pure" />
              <span>Get Official Quote on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
