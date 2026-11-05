'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Utensils, ArrowLeft, Check, Sparkles, PhoneCall, Calendar } from 'lucide-react';
import { formatINR } from '../../lib/formatters';

interface Package {
  id: string;
  name: string;
  pricePerPerson: number;
  minGuests: number;
  items: string[];
  popular?: boolean;
}

const PACKAGES: Package[] = [
  {
    id: 'silver',
    name: 'Silver Handi Feast',
    pricePerPerson: 320,
    minGuests: 15,
    items: [
      'Seeraga Samba Chicken Biryani (2 succulent pieces)',
      'Rich Dindigul Brinjal Thalcha',
      'Shallot & Curd Onion Raitha',
      'Masala Braised Country Egg',
      'Sanitized Whole Plantain Leaf & Cutlery'
    ]
  },
  {
    id: 'gold',
    name: 'Royal Ustad Dega Feast',
    pricePerPerson: 420,
    minGuests: 25,
    popular: true,
    items: [
      'Choice of Mutton or Chicken Seeraga Samba Biryani',
      'Crispy Boneless Chicken 65',
      'Authentic Dindigul Thalcha & Onion Raitha',
      'Masala Braised Egg',
      'Tender Coconut Elaneer Payasam',
      'Eco-Friendly Banana Leaf Setup & Warm Thermal Delivery'
    ]
  },
  {
    id: 'grand',
    name: 'Grand Kalyana Virundhu',
    pricePerPerson: 580,
    minGuests: 50,
    items: [
      'Slow Woodfire Mutton Biryani (Bone-in tender goat)',
      'Karur Pepper Mutton Chukka',
      'Crispy Chicken 65',
      'Dindigul Thalcha + Onion Raitha + Lemon Pickle',
      'Tender Coconut Elaneer Payasam + Nannari Herb Sarbath',
      'Full On-Site Live Dum Carving & Service Staff (Optional)'
    ]
  }
];

export default function CateringPage() {
  const [selectedPkg, setSelectedPkg] = useState<Package>(PACKAGES[1]);
  const [guests, setGuests] = useState<number>(30);
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('Karur City');

  const totalEstimate = selectedPkg.pricePerPerson * guests;

  const handleWhatsAppBooking = () => {
    const text = `🎉 *SAMBALEAF CATERING RESERVATION (KARUR)*%0A%0A*Package:* ${selectedPkg.name}%0A*Guests:* ${guests} Persons%0A*Estimated Total:* ${formatINR(totalEstimate)}%0A*Event Date:* ${eventDate || 'To be decided'}%0A*Venue Area:* ${venue}%0A%0APlease confirm date availability and delivery logistics!`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-charcoal-near text-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-light mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Main Hearth</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Feasts for 15 to 500 Guests</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-4">
            Curated Catering & Dega Feast Services
          </h1>
          <p className="text-cream/70 text-base leading-relaxed">
            Elevate your wedding, family gathering, or office event in Karur with steaming, freshly opened copper handis cooked over mango wood charcoal.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                selectedPkg.id === pkg.id
                  ? 'bg-charcoal-deep border-gold shadow-2xl ring-2 ring-gold/40 -translate-y-1'
                  : 'bg-charcoal-deep/60 border-cream/10 hover:border-cream/30'
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-gold text-charcoal-pure inline-block mb-3">
                    Most Popular in Karur
                  </span>
                )}
                <h3 className="text-2xl font-serif font-bold text-cream mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl font-serif font-bold text-gold">{formatINR(pkg.pricePerPerson)}</span>
                  <span className="text-xs text-cream/50">/ person</span>
                </div>
                <div className="text-xs text-cream/40 mb-4">Min. {pkg.minGuests} guests</div>

                <ul className="space-y-2.5 border-t border-cream/10 pt-4 text-xs text-cream/80">
                  {pkg.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition ${
                  selectedPkg.id === pkg.id
                    ? 'bg-gold text-charcoal-pure'
                    : 'bg-charcoal-near border border-cream/20 text-cream/70'
                }`}
              >
                {selectedPkg.id === pkg.id ? 'Selected Package' : 'Select Tier'}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Calculation & WhatsApp Booking Box */}
        <div className="bg-charcoal-deep border border-gold/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <h2 className="text-2xl font-serif font-bold text-cream mb-6">
            Live Booking Estimator for {selectedPkg.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs font-semibold text-cream/70 mb-2">Guest Headcount:</label>
              <input
                type="number"
                min={selectedPkg.minGuests}
                max={500}
                value={guests}
                onChange={(e) => setGuests(Math.max(selectedPkg.minGuests, Number(e.target.value)))}
                className="w-full bg-charcoal-near border border-cream/20 rounded-xl px-4 py-2.5 text-cream font-mono font-bold text-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-cream/70 mb-2">Planned Event Date:</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-charcoal-near border border-cream/20 rounded-xl px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-cream/70 mb-2">Delivery Location in Karur:</label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="e.g. Kovai Road, Vengamedu"
                className="w-full bg-charcoal-near border border-cream/20 rounded-xl px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-cream/10">
            <div>
              <div className="text-xs text-cream/50">Estimated Package Investment</div>
              <div className="text-3xl font-serif font-bold text-gold">{formatINR(totalEstimate)}</div>
              <div className="text-[11px] text-cream/40">Includes hot thermal packaging & live delivery</div>
            </div>

            <button
              onClick={handleWhatsAppBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-gold/25 flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-4 h-4 fill-charcoal-pure" />
              <span>Book Catering Date on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
