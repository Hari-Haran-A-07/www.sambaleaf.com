'use client';

import React from 'react';
import { MapPin, Navigation, Bike, Clock, ShieldCheck } from 'lucide-react';
import { useStore } from '../lib/store';

export default function KarurIdentity() {
  const { kitchenSettings } = useStore();

  return (
    <section id="delivery" className="relative py-28 sm:py-36 bg-charcoal-deep text-cream overflow-hidden border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Brand Origin Story */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
              09 / LOCAL IDENTITY
            </span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium mb-6">
              MADE FOR <span className="italic text-gold-soft font-normal">KARUR.</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-cream/80 font-light leading-relaxed mb-6">
              Rooted in Tamil Nadu, prepared specifically for the discerning people of Karur who cherish authentic Seeraga Samba biryani.
            </p>

            <p className="font-tamil text-sm text-gold-soft/90 font-light mb-8">
              கரூர் மக்களுக்கு திண்டுக்கல்லின் உன்னதமான சீரக சம்பா பிரியாணி சுவையை அதன் தூய முறையில் கொண்டு சேர்க்கிறோம்.
            </p>

            <div className="space-y-4 pt-6 border-t border-cream/10">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-soft flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs text-cream/50 uppercase tracking-wider block">Kitchen Location</span>
                  <span className="font-body text-sm text-cream font-medium">{kitchenSettings.location}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Bike className="w-5 h-5 text-gold-soft flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs text-cream/50 uppercase tracking-wider block">Cloud Kitchen Delivery Radius</span>
                  <span className="font-body text-sm text-cream font-medium">{kitchenSettings.deliveryAreaNotice}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold-soft flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs text-cream/50 uppercase tracking-wider block">Fresh Dum Timings</span>
                  <span className="font-body text-sm text-cream font-medium">Lunch &amp; Dinner Dum Batches (Pre-order recommended)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Graphic / City Grid Card */}
          <div className="lg:col-span-6 relative">
            <div className="p-8 sm:p-10 rounded-sm bg-charcoal-warm/60 border border-cream/15 backdrop-blur-md relative overflow-hidden shadow-2xl">
              {/* Subtle Decorative Map Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-cream/10">
                  <div className="flex items-center space-x-2">
                    <Navigation className="w-5 h-5 text-gold-soft animate-pulse" />
                    <span className="font-mono text-xs tracking-[0.2em] text-cream uppercase font-semibold">
                      KARUR DELIVERY HUB
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-leaf-deep/60 border border-leaf/40 text-emerald-400 text-[10px] font-mono tracking-wider">
                    ● ACTIVE SERVICE ZONE
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-sm bg-charcoal-deep/80 border border-cream/10 flex items-center justify-between">
                    <span className="font-body text-sm text-cream">Karur City &amp; Bus Stand Hub</span>
                    <span className="font-mono text-xs text-gold-soft">Direct Dispatch</span>
                  </div>

                  <div className="p-4 rounded-sm bg-charcoal-deep/80 border border-cream/10 flex items-center justify-between">
                    <span className="font-body text-sm text-cream">Pasupathipalem &amp; Thanthonimalai</span>
                    <span className="font-mono text-xs text-gold-soft">Direct Dispatch</span>
                  </div>

                  <div className="p-4 rounded-sm bg-charcoal-deep/80 border border-cream/10 flex items-center justify-between">
                    <span className="font-body text-sm text-cream">Vengamedu &amp; Gandhigramam</span>
                    <span className="font-mono text-xs text-gold-soft">Direct Dispatch</span>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-gold-soft/10 border border-gold-soft/30 text-xs font-mono text-cream/80 flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-gold-soft flex-shrink-0" />
                  <span>Insulated thermal packaging keeps your biryani piping hot upon arrival.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
