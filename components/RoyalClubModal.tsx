'use client';

import React, { useState } from 'react';
import { Crown, Sparkles, Check, Gift, X, ShieldAlert, Award } from 'lucide-react';
import { LOYALTY_TIERS, getUserTier } from '../lib/loyalty';

export default function RoyalClubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber) return;
    setRegistered(true);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold hover:bg-gold/25 transition-all"
      >
        <Crown className="w-3.5 h-3.5 text-gold" />
        <span>Royal Dum Club</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => { setIsOpen(false); setRegistered(false); }}
              className="absolute top-5 right-5 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            {!registered ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="text-xs uppercase font-bold tracking-widest text-gold">Exclusive Membership</span>
                </div>
                <h3 className="text-2xl font-serif text-cream font-bold">
                  Sambaleaf Royal Dum Club
                </h3>
                <p className="text-xs text-cream/70 mt-1 mb-6">
                  Earn 1 Grain Point for every ₹10 spent. Unlock early Sunday batch allocations, secret recipes, and feast privileges in Karur.
                </p>

                {/* Tier Highlights */}
                <div className="space-y-3 mb-6">
                  {LOYALTY_TIERS.map((tier) => (
                    <div key={tier.id} className="p-3.5 rounded-xl bg-charcoal-pure/60 border border-cream/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-cream font-serif">{tier.name}</span>
                        <span className="text-[11px] text-gold font-semibold">{tier.minPoints}+ pts</span>
                      </div>
                      <div className="text-[11px] text-cream/60">
                        {tier.perks.join(' • ')}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleJoin} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name (e.g. Senthil Kumar)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-charcoal-near border border-cream/20 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Mobile Number (e.g. 9876543210)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-charcoal-near border border-cream/20 rounded-xl px-4 py-2.5 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-sm transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                  >
                    <Crown className="w-4 h-4 fill-charcoal-pure" />
                    <span>Claim Free 50 Welcome Points & Membership</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-cream">Welcome to the Club, {customerName}!</h4>
                <p className="text-xs text-cream/70 mt-2 mb-6">
                  Your Sambaleaf Digital Member Pass has been initialized with <span className="text-gold font-bold">50 Welcome Grain Points</span>!
                </p>

                {/* Digital Card Preview */}
                <div className="bg-gradient-to-br from-charcoal-pure via-charcoal-deep to-charcoal-near border border-gold/50 rounded-2xl p-6 text-left shadow-xl mb-6 relative overflow-hidden">
                  <div className="text-[10px] tracking-widest uppercase text-gold font-bold mb-1">VIP Member Pass</div>
                  <div className="text-lg font-serif font-bold text-cream">{customerName}</div>
                  <div className="text-xs text-cream/50 mt-4">+91 {phoneNumber}</div>
                  <div className="flex justify-between items-end mt-2">
                    <span className="text-xs font-semibold text-emerald-400">Status: Samba Bronze</span>
                    <span className="text-sm font-bold font-mono text-gold">50 PTS</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-gold text-charcoal-pure font-bold text-xs"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
