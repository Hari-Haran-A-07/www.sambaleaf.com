'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, CheckCircle } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  tamilName: string;
  origin: string;
  category: string;
  character: string;
  whyItMatters: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    id: 'samba-rice',
    name: 'Aged Seeraga Samba Rice',
    tamilName: 'பழைய சீரக சம்பா அரிசி',
    origin: 'Cauvery River Delta, Tamil Nadu',
    category: 'Grains',
    character: 'Small, aromatic grains resembling cumin seeds (Seeragam). Absorbs meat juices effortlessly.',
    whyItMatters: 'Unlike Basmati which elongates, Seeraga Samba expands in volume, locking flavours deep in the starch.'
  },
  {
    id: 'mundu-chilli',
    name: 'Ramnad Mundu Chillies',
    tamilName: 'ராமநாதபுரம் குண்டு மிளகாய்',
    origin: 'Ramanathapuram, Tamil Nadu',
    category: 'Spices',
    character: 'Spherical dry red chillies offering deep terracotta colour and fruity warmth with moderate pungency.',
    whyItMatters: 'Provides authentic Dindigul warmth without that sharp burning sensation in the throat.'
  },
  {
    id: 'kangeyam-ghee',
    name: 'Pure Kangeyam Grass-fed Ghee',
    tamilName: 'காங்கேயம் நாட்டு மாட்டு நெய்',
    origin: 'Kangeyam Country Cattle Farms',
    category: 'Fats',
    character: 'Golden, nutty, and clarified over wood embers to preserve delicate butyric acids.',
    whyItMatters: 'Coats each grain of rice with a silk sheen and prevents the biryani from turning sticky.'
  },
  {
    id: 'malabar-pepper',
    name: 'Tellicherry Black Pepper',
    tamilName: 'தென்காசி நல்ல மிளகு',
    origin: 'Western Ghats Border',
    category: 'Spices',
    character: 'Bold, robust peppercorns sun-dried on bamboo mats, freshly cracked into the handi.',
    whyItMatters: 'The backbone of authentic Tamil dum cooking — aids digestion and balances rich meat collagen.'
  },
  {
    id: 'shalott-garlic',
    name: 'Freshly Ground Small Shallots & Garlic',
    tamilName: 'நாட்டு சின்ன வெங்காயம் & பூண்டு',
    origin: 'Dindigul Regional Farmers',
    category: 'Aromatics',
    character: 'Hand-pounded daily at dawn in traditional stone pestles with zero preservatives.',
    whyItMatters: 'Creates the signature golden-brown masala fond at the base of the copper handi.'
  },
  {
    id: 'fresh-curd',
    name: 'Farm-Fresh Slow-Set Buffalo Curd',
    tamilName: 'பண்ணை பசும் தயிர்',
    origin: 'Karur Local Dairies',
    category: 'Dairy',
    character: 'Thick, creamy, naturally acidic curd used both in the marinade and freshly whipped raitha.',
    whyItMatters: 'Natural lactic acid gently tenderizes meat fibres during the 3-hour pre-dum resting phase.'
  }
];

export default function SpiceProvenance() {
  const [selected, setSelected] = useState<Ingredient>(INGREDIENTS[0]);

  return (
    <section className="py-20 bg-charcoal-deep border-t border-cream/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Farm to Handi Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold mb-4">
            Sourced With Reverence. Prepared With Pride.
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed">
            Great biryani begins long before the fire is lit. Explore the local terroirs and heritage farmers who supply Sambaleaf.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Ingredient List */}
          <div className="lg:col-span-5 space-y-3">
            {INGREDIENTS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  selected.id === item.id
                    ? 'bg-charcoal-near border-gold text-cream shadow-xl ring-1 ring-gold/40'
                    : 'bg-charcoal-pure/50 border-cream/10 text-cream/70 hover:border-cream/20'
                }`}
              >
                <div>
                  <div className="text-sm font-semibold font-serif text-cream">{item.name}</div>
                  <div className="text-xs text-gold/80 font-tamil mt-0.5">{item.tamilName}</div>
                  <div className="text-[11px] text-cream/40 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-gold" />
                    {item.origin}
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cream/5 text-cream/60">
                  {item.category}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Deep-Dive Card */}
          <div className="lg:col-span-7 bg-charcoal-near border border-gold/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-cream/10 mb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold">Provenance Spotlight</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream mt-1">{selected.name}</h3>
                <div className="text-sm font-tamil text-gold mt-1">{selected.tamilName}</div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold/15 text-gold text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selected.origin}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cream/50 mb-2">Flavor Profile & Sensory Notes</h4>
                <p className="text-cream/80 text-sm leading-relaxed bg-charcoal-pure/60 p-4 rounded-xl border border-cream/5">
                  {selected.character}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-cream/50 mb-2">The Sambaleaf Culinary Difference</h4>
                <p className="text-cream/90 text-sm leading-relaxed bg-gold/5 p-4 rounded-xl border border-gold/20 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{selected.whyItMatters}</span>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10 flex items-center justify-between text-xs text-cream/50">
              <span>Zero Preservatives • Zero Added Colour</span>
              <span className="text-gold font-medium">100% Native Tamil Sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
