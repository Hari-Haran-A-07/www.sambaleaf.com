'use client';

import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { CURRENCIES, CurrencyCode, convertFromINR } from '../lib/currency';

export default function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('INR');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/5 hover:bg-cream/10 border border-cream/15 text-[11px] font-mono text-cream/70 hover:text-cream transition"
      >
        <Globe className="w-3.5 h-3.5 text-gold" />
        <span>{selectedCurrency} ({CURRENCIES[selectedCurrency].symbol.trim()})</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-charcoal-deep border border-gold/40 shadow-2xl z-50 p-2 space-y-1">
            <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-gold border-b border-cream/10">
              NRI & International Gifting
            </div>
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
              const curr = CURRENCIES[code];
              const isSelected = selectedCurrency === code;
              return (
                <button
                  key={code}
                  onClick={() => {
                    setSelectedCurrency(code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition ${
                    isSelected
                      ? 'bg-gold/15 text-gold font-bold'
                      : 'text-cream/70 hover:bg-charcoal-near hover:text-cream'
                  }`}
                >
                  <div>
                    <span className="font-semibold">{curr.code}</span>
                    <span className="text-[11px] text-cream/40 ml-1.5">({curr.name})</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-gold" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
