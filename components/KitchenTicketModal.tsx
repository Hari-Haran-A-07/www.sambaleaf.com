'use client';

import React, { useState } from 'react';
import { Printer, X, Check, ChefHat } from 'lucide-react';
import { useStore } from '../lib/store';
import { formatINR } from '../lib/formatters';

export default function KitchenTicketModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, cartTotal } = useStore();

  const handlePrint = () => {
    window.print();
  };

  const sampleItems = cart.length > 0 ? cart : [
    { id: '1', name: 'Chicken Biryani (Seeraga Samba)', quantity: 2, includeRaitha: true, includeThalcha: true, priceNumeric: 560 },
    { id: '2', name: 'Mutton Biryani (Slow Dum)', quantity: 1, includeRaitha: true, includeThalcha: true, priceNumeric: 360 }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-near border border-cream/20 text-cream/70 hover:text-cream text-xs font-medium transition"
        title="Kitchen Display & Printable KOT"
      >
        <Printer className="w-3.5 h-3.5 text-gold" />
        <span>KOT Print Ticket</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-cream/40 hover:text-cream print:hidden"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Printable Thermal Receipt Container */}
            <div className="bg-white text-black p-5 rounded-xl font-mono text-xs shadow-inner">
              <div className="text-center pb-3 border-b-2 border-dashed border-gray-400">
                <div className="text-base font-bold tracking-wider">SAMBALEAF KARUR</div>
                <div className="text-[10px] text-gray-600">Authentic Dindigul Woodfire Dum</div>
                <div className="text-[10px] font-bold mt-1">KITCHEN ORDER TICKET (KOT)</div>
                <div className="text-[10px] text-gray-500">Token #{Math.floor(Math.random() * 80) + 20}</div>
              </div>

              <div className="py-2.5 border-b border-gray-300 text-[11px] space-y-0.5">
                <div>Date: {new Date().toLocaleDateString('en-IN')}</div>
                <div>Time: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</div>
                <div>Station: Central Hearth (Kovai Rd)</div>
                <div>Dietary: 100% Halal Verified</div>
              </div>

              <div className="py-3 border-b-2 border-dashed border-gray-400 space-y-2">
                {sampleItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs">
                    <div className="pr-2">
                      <span className="font-bold">{item.quantity}x </span>
                      <span>{item.name}</span>
                      <div className="text-[9px] text-gray-600 pl-4">
                        + Raitha & Thalcha Cups
                      </div>
                    </div>
                    <span className="font-semibold">{formatINR(item.priceNumeric * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex justify-between font-bold text-sm">
                <span>TOTAL:</span>
                <span>{formatINR(cartTotal || 920)}</span>
              </div>

              <div className="text-center pt-4 text-[9px] text-gray-500">
                *** PACK IN THERMAL FOIL & BANANA LEAF ***
              </div>
            </div>

            <div className="mt-5 flex gap-3 print:hidden">
              <button
                onClick={handlePrint}
                className="flex-1 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Kitchen KOT</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-charcoal-near border border-cream/20 text-cream/70 text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
