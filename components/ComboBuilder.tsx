'use client';

import React, { useState } from 'react';
import { Layers, Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { useStore } from '../lib/store';
import { formatINR } from '../lib/formatters';

interface Option {
  id: string;
  name: string;
  price: number;
  calories: number;
}

const BASES: Option[] = [
  { id: 'b-chicken', name: 'Seeraga Samba Chicken Biryani', price: 280, calories: 620 },
  { id: 'b-mutton', name: 'Seeraga Samba Mutton Biryani', price: 360, calories: 710 },
  { id: 'b-duo', name: 'Royal Duo (Half Chicken + Half Mutton)', price: 340, calories: 670 }
];

const STARTERS: Option[] = [
  { id: 's-egg', name: '2x Masala Braised Country Eggs', price: 40, calories: 150 },
  { id: 's-c65', name: 'Dindigul Crispy Chicken 65 (Boneless)', price: 160, calories: 340 },
  { id: 's-chukka', name: 'Karur Pepper Mutton Chukka', price: 220, calories: 390 },
  { id: 's-none', name: 'No Extra Starter', price: 0, calories: 0 }
];

const DESSERTS: Option[] = [
  { id: 'd-elaneer', name: 'Tender Coconut Elaneer Payasam', price: 90, calories: 180 },
  { id: 'd-nannari', name: 'Nannari Lemon Herb Sarbath', price: 50, calories: 95 },
  { id: 'd-none', name: 'No Dessert / Drink', price: 0, calories: 0 }
];

export default function ComboBuilder() {
  const [selectedBase, setSelectedBase] = useState<Option>(BASES[0]);
  const [selectedStarter, setSelectedStarter] = useState<Option>(STARTERS[0]);
  const [selectedDessert, setSelectedDessert] = useState<Option>(DESSERTS[0]);
  const { addToCart, setIsCartOpen } = useStore();

  const totalPrice = selectedBase.price + selectedStarter.price + selectedDessert.price;
  const totalCalories = selectedBase.calories + selectedStarter.calories + selectedDessert.calories;

  const handleAddToCart = () => {
    addToCart({
      menuItemId: selectedBase.id === 'b-mutton' ? 'mutton-biryani' : 'chicken-biryani',
      quantity: 1,
      includeRaitha: true,
      includeThalcha: true
    });
    setIsCartOpen(true);
  };

  return (
    <section className="py-20 bg-charcoal-near border-t border-cream/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Handi Box Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold mb-3">
            Build Your Custom Royal Feast Box
          </h2>
          <p className="text-cream/70 text-sm">
            Curate your ideal combination of piping hot biryani, crisp starters, and cooling desserts with seamless one-click ordering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Selector */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Base */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-gold mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">1</span>
                <span>Select Your Biryani Foundation</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BASES.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBase(b)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedBase.id === b.id
                        ? 'bg-charcoal-deep border-gold text-cream shadow-lg ring-1 ring-gold/40'
                        : 'bg-charcoal-deep/50 border-cream/10 text-cream/70 hover:border-cream/20'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-cream mb-1">{b.name}</div>
                    <div className="text-xs text-gold font-semibold">{formatINR(b.price)}</div>
                    <div className="text-[10px] text-cream/40 mt-1">{b.calories} kcal</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Starter */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-gold mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">2</span>
                <span>Add Sizzling Starters & Savories</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STARTERS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStarter(s)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedStarter.id === s.id
                        ? 'bg-charcoal-deep border-gold text-cream shadow-lg ring-1 ring-gold/40'
                        : 'bg-charcoal-deep/50 border-cream/10 text-cream/70 hover:border-cream/20'
                    }`}
                  >
                    <div className="font-semibold text-xs text-cream">{s.name}</div>
                    <div className="text-xs text-gold font-semibold mt-0.5">
                      {s.price === 0 ? 'None' : `+${formatINR(s.price)}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Dessert */}
            <div>
              <h3 className="text-sm uppercase tracking-wider font-bold text-gold mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">3</span>
                <span>Choose Traditional Dessert or Drink</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {DESSERTS.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDessert(d)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedDessert.id === d.id
                        ? 'bg-charcoal-deep border-gold text-cream shadow-lg ring-1 ring-gold/40'
                        : 'bg-charcoal-deep/50 border-cream/10 text-cream/70 hover:border-cream/20'
                    }`}
                  >
                    <div className="font-semibold text-xs text-cream">{d.name}</div>
                    <div className="text-xs text-gold font-semibold mt-0.5">
                      {d.price === 0 ? 'None' : `+${formatINR(d.price)}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Order Summary Card */}
          <div className="lg:col-span-4 bg-charcoal-deep border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-2xl sticky top-24">
            <span className="text-xs uppercase font-bold tracking-widest text-gold">Handi Box Summary</span>
            <h4 className="text-xl font-serif font-bold text-cream mt-1 mb-4">Your Custom Feast</h4>

            <div className="space-y-3 pb-6 border-b border-cream/10 text-xs">
              <div className="flex justify-between text-cream/90">
                <span>{selectedBase.name}</span>
                <span className="font-bold text-gold">{formatINR(selectedBase.price)}</span>
              </div>
              <div className="flex justify-between text-cream/70">
                <span>Starter: {selectedStarter.name}</span>
                <span>{selectedStarter.price > 0 ? `+${formatINR(selectedStarter.price)}` : '—'}</span>
              </div>
              <div className="flex justify-between text-cream/70">
                <span>Dessert: {selectedDessert.name}</span>
                <span>{selectedDessert.price > 0 ? `+${formatINR(selectedDessert.price)}` : '—'}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold pt-1">
                <span>Raitha & Thalcha Cups</span>
                <span>Included Free</span>
              </div>
            </div>

            <div className="py-4 border-b border-cream/10 flex justify-between items-baseline">
              <div>
                <span className="text-xs text-cream/50 block">Total Box Value</span>
                <span className="text-2xl font-serif font-bold text-gold">{formatINR(totalPrice)}</span>
              </div>
              <span className="text-xs text-cream/40">~{totalCalories} kcal</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-sm transition-all shadow-lg shadow-gold/25 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 fill-charcoal-pure" />
              <span>Add Custom Box to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
