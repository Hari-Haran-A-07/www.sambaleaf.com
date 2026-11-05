'use client';

import React, { useState } from 'react';
import { MapPin, CheckCircle, Clock, Truck, ShieldCheck, AlertCircle } from 'lucide-react';
import { formatINR } from '../lib/formatters';

interface ZoneDetail {
  pincode: string;
  area: string;
  timeEstimate: string;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  hub: string;
}

const ZONES: Record<string, ZoneDetail> = {
  '639001': {
    pincode: '639001',
    area: 'Jawahar Bazaar, Old Bus Stand, Light House, Karur Town',
    timeEstimate: '15–20 Mins',
    deliveryFee: 0,
    freeDeliveryThreshold: 280,
    hub: 'Central Express Counter'
  },
  '639002': {
    pincode: '639002',
    area: 'Kovai Road, Sengunthapuram, Gandhigramam',
    timeEstimate: '15–25 Mins',
    deliveryFee: 0,
    freeDeliveryThreshold: 280,
    hub: 'Kovai Road Woodfire Hearth'
  },
  '639004': {
    pincode: '639004',
    area: 'Vengamedu, Pasupathipalem, Ramakrishnapuram',
    timeEstimate: '20–30 Mins',
    deliveryFee: 25,
    freeDeliveryThreshold: 500,
    hub: 'Northern Express Fleet'
  },
  '639005': {
    pincode: '639005',
    area: 'Thanthonimalai, Govt Arts College Road, Chettipalayam',
    timeEstimate: '25–35 Mins',
    deliveryFee: 30,
    freeDeliveryThreshold: 600,
    hub: 'Thanthonimalai Southern Cloud Hub'
  },
  '639006': {
    pincode: '639006',
    area: 'Sanapiratti, Rayanur, Athur bypass',
    timeEstimate: '30–40 Mins',
    deliveryFee: 40,
    freeDeliveryThreshold: 700,
    hub: 'Suburban Dispatch Partner'
  }
};

export default function DeliveryRadiusChecker() {
  const [query, setQuery] = useState('');
  const [matchedZone, setMatchedZone] = useState<ZoneDetail | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleCheck = () => {
    if (!query) return;
    const clean = query.trim().toLowerCase();

    // Check pincode match
    if (ZONES[clean]) {
      setMatchedZone(ZONES[clean]);
      setNotFound(false);
      return;
    }

    // Check locality substring match
    const found = Object.values(ZONES).find(z =>
      z.area.toLowerCase().includes(clean) || clean.includes(z.area.split(',')[0].toLowerCase())
    );

    if (found) {
      setMatchedZone(found);
      setNotFound(false);
    } else {
      setMatchedZone(null);
      setNotFound(true);
    }
  };

  return (
    <div className="bg-charcoal-deep border border-gold/30 rounded-3xl p-6 sm:p-8 text-cream my-10 shadow-2xl relative">
      <div className="flex items-center gap-2 text-gold mb-2">
        <MapPin className="w-5 h-5 text-gold" />
        <span className="text-xs uppercase font-bold tracking-widest text-gold">Karur Direct Dispatch Checker</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream mb-2">
        Verify Your Karur Delivery Zone & Dispatch Time
      </h3>
      <p className="text-xs text-cream/70 mb-6">
        Enter your 6-digit Karur pincode (e.g. 639001, 639002, 639005) or neighborhood name:
      </p>

      <div className="flex gap-2 max-w-lg mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setNotFound(false); }}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          placeholder="e.g. 639002 or Thanthonimalai"
          className="flex-1 bg-charcoal-near px-4 py-2.5 rounded-xl border border-cream/20 text-xs text-cream focus:outline-none focus:border-gold"
        />
        <button
          onClick={handleCheck}
          className="px-5 py-2.5 bg-gold hover:bg-gold-light text-charcoal-pure text-xs font-bold uppercase rounded-xl transition shadow"
        >
          Verify
        </button>
      </div>

      {matchedZone && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-xs text-emerald-300 space-y-2 mt-4 animate-fadeIn">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
            <CheckCircle className="w-4 h-4" />
            <span>Direct Coverage: {matchedZone.area} ({matchedZone.pincode})</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-emerald-500/20 text-cream/80">
            <div>
              <span className="text-cream/50 block">Est. Thermal Transit:</span>
              <span className="font-bold text-cream">{matchedZone.timeEstimate}</span>
            </div>
            <div>
              <span className="text-cream/50 block">Delivery Fee:</span>
              <span className="font-bold text-gold">
                {matchedZone.deliveryFee === 0 ? 'FREE' : formatINR(matchedZone.deliveryFee)}
              </span>
              <span className="text-[10px] text-cream/40 ml-1">
                (Free on orders {formatINR(matchedZone.freeDeliveryThreshold)}+)
              </span>
            </div>
            <div>
              <span className="text-cream/50 block">Fulfilled From:</span>
              <span className="font-bold text-cream truncate block">{matchedZone.hub}</span>
            </div>
          </div>
        </div>
      )}

      {notFound && (
        <div className="p-4 bg-amber-950/40 border border-amber-500/40 rounded-2xl text-xs text-amber-300 flex items-start gap-2.5 mt-4">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <div>
            <div className="font-bold text-amber-300">Outer Karur Area Detected</div>
            <div className="text-cream/70 text-[11px] mt-0.5">
              We deliver to outer Karur districts (Velur, Paramathi, Aravakurichi) for pre-booked bulk handis (10+ portions). Please confirm route with our WhatsApp dispatch pilot!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
