'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '../lib/store';
import { ShoppingBag, Flame, ChevronRight } from 'lucide-react';

export default function StickyOrderBar() {
  const { cartCount, setIsCartOpen } = useStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past hero (approx 300px)
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-charcoal-near/95 backdrop-blur-lg border-t border-cream/15 md:hidden animate-slideUp shadow-2xl">
      <div className="flex items-center space-x-3 max-w-lg mx-auto">
        {/* Cart Trigger if items present */}
        {cartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-3 rounded-sm bg-charcoal-warm border border-gold-soft/50 text-gold-soft flex items-center justify-center relative active:scale-95 transition-transform"
            aria-label="View current cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-terracotta text-cream text-[10px] font-mono font-bold flex items-center justify-center border border-charcoal-deep">
              {cartCount}
            </span>
          </button>
        )}

        {/* Big Touch-Friendly Order CTA */}
        <Link
          href="#order-builder"
          className="flex-1 py-3.5 px-6 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-between shadow-lg shadow-gold-brass/25 active:scale-98 transition-transform"
        >
          <span className="flex items-center space-x-1.5">
            <Flame className="w-4 h-4 text-charcoal-near" />
            <span>ORDER NOW</span>
          </span>
          <div className="flex items-center space-x-1 font-mono text-[10px] opacity-90">
            <span>KARUR CLOUD KITCHEN</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  );
}
