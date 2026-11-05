'use client';

import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Truck, ChefHat, Flame, ShieldCheck, PhoneCall } from 'lucide-react';

interface TrackingState {
  orderId: string;
  customerName: string;
  items: string[];
  currentStep: number;
  riderName: string;
  riderPhone: string;
  estArrival: string;
  totalAmount: number;
}

const STEPS = [
  { step: 1, title: 'Order Verified', desc: 'Samba rice and tender meat weighed' },
  { step: 2, title: 'Handi Sealed', desc: 'Wheat dough seam applied over copper dega' },
  { step: 3, title: 'Slow Woodfire Dum', desc: 'Infusing over mango wood embers' },
  { step: 4, title: 'Aroma Lifted & Packed', desc: 'Inspected by Ustad with hot raitha & thalcha' },
  { step: 5, title: 'Out on Karur Streets', desc: 'Thermal insulated dispatch to your door' }
];

export default function OrderTracker() {
  const [query, setQuery] = useState('SL-7824');
  const [tracking, setTracking] = useState<TrackingState | null>({
    orderId: 'SL-7824',
    customerName: 'Praveen K.',
    items: ['2x Seeraga Samba Chicken Biryani', '1x Dindigul Thalcha', '1x Onion Raitha'],
    currentStep: 4,
    riderName: 'Murugan S.',
    riderPhone: '+91 94421 88320',
    estArrival: '18 mins',
    totalAmount: 600
  });
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setTracking({
        orderId: query.toUpperCase(),
        customerName: 'Valued Food Lover',
        items: ['1x Signature Mutton Biryani', '1x Seeraga Samba Chicken Biryani'],
        currentStep: Math.floor(Math.random() * 3) + 3,
        riderName: 'Selva Kumar',
        riderPhone: '+91 98422 12904',
        estArrival: '14 mins',
        totalAmount: 640
      });
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Search Input Box */}
      <div className="bg-charcoal-deep border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-2xl mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif text-cream font-bold mb-2 text-center">
          Live Handi Order Tracker
        </h2>
        <p className="text-xs text-cream/70 text-center mb-6 max-w-md mx-auto">
          Enter your 6-character Sambaleaf Order ID or 10-digit WhatsApp phone number to follow your biryani from the wood embers to your table.
        </p>

        <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-cream/40 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. SL-7824 or 9876543210"
              className="w-full bg-charcoal-near border border-cream/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-cream uppercase placeholder-cream/40 focus:outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-xs uppercase tracking-wider transition"
          >
            {isSearching ? 'Tracking...' : 'Track'}
          </button>
        </form>
      </div>

      {tracking && (
        <div className="bg-charcoal-deep border border-cream/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Order Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-cream/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-gold/15 text-gold border border-gold/30">
                  {tracking.orderId}
                </span>
                <span className="text-xs text-cream/60">Estimated Delivery:</span>
                <span className="text-xs font-bold text-emerald-400">{tracking.estArrival}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-cream mt-2">
                Prepared for {tracking.customerName}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-xs text-cream/50">Total Bill</div>
              <div className="text-xl font-bold font-serif text-gold">₹{tracking.totalAmount}</div>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="py-8">
            <div className="relative">
              {/* Line connector */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-cream/10 hidden sm:block" />

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-2">
                {STEPS.map((s) => {
                  const isDone = s.step < tracking.currentStep;
                  const isCurrent = s.step === tracking.currentStep;
                  return (
                    <div key={s.step} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2 relative z-10">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all ${
                          isDone
                            ? 'bg-emerald-500 border-emerald-400 text-charcoal-pure'
                            : isCurrent
                            ? 'bg-gold border-gold text-charcoal-pure ring-4 ring-gold/20 animate-pulse'
                            : 'bg-charcoal-near border-cream/20 text-cream/40'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-5 h-5" /> : s.step}
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${isCurrent ? 'text-gold' : isDone ? 'text-cream' : 'text-cream/40'}`}>
                          {s.title}
                        </div>
                        <div className="text-[11px] text-cream/50 sm:max-w-[130px] mx-auto mt-0.5">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Items Summary & Delivery Pilot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-cream/10">
            <div className="bg-charcoal-near/80 rounded-2xl p-4 border border-cream/5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-cream/50 mb-3">Order Contents</h4>
              <ul className="space-y-1.5">
                {tracking.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-cream/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-charcoal-near/80 rounded-2xl p-4 border border-cream/5 flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-cream/50 mb-1">Karur Dispatch Pilot</h4>
                <div className="text-sm font-bold text-cream">{tracking.riderName}</div>
                <div className="text-xs text-emerald-400 mt-0.5">Insulated Hot Bag #04</div>
              </div>
              <a
                href={`tel:${tracking.riderPhone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gold/20 text-gold border border-gold/40 text-xs font-semibold hover:bg-gold/30 transition"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Pilot</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
