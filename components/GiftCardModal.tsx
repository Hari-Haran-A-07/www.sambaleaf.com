'use client';

import React, { useState } from 'react';
import { Gift, Sparkles, X, Heart, Share2, Check } from 'lucide-react';
import { VOUCHER_DENOMINATIONS, generateVoucherCode } from '../lib/giftCards';
import { formatINR } from '../lib/formatters';

export default function GiftCardModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [occasion, setOccasion] = useState('Birthday Feast');
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !sender) return;
    const code = generateVoucherCode(amount);
    setGeneratedCode(code);
  };

  const handleShareWhatsApp = () => {
    if (!generatedCode) return;
    const text = `🎉 *SAMBALEAF Authentic Dindigul Biryani Feast Voucher!*%0A%0ADear *${recipient}*,%0A${sender} has gifted you a ${formatINR(amount)} Biryani Feast for your ${occasion}!%0A%0A*Voucher Code:* \`${generatedCode}\`%0A%0ARedeem anytime on https://sambaleaf.com or via WhatsApp (+91 919876543210).%0A_May your feast be blessed with the finest Seeraga Samba aroma!_`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold text-xs font-semibold transition"
      >
        <Gift className="w-4 h-4 text-gold" />
        <span>Gift a Biryani Feast</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => { setIsOpen(false); setGeneratedCode(null); }}
              className="absolute top-5 right-5 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            {!generatedCode ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-4 h-4 text-gold" />
                  <span className="text-xs uppercase font-bold tracking-widest text-gold">Digital Gift Vouchers</span>
                </div>
                <h3 className="text-2xl font-serif text-cream font-bold">
                  Send the Gift of Authentic Dum
                </h3>
                <p className="text-xs text-cream/70 mt-1 mb-6">
                  Surprise friends, family, or colleagues in Karur with an unforgettably fragrant Seeraga Samba biryani celebration.
                </p>

                {/* Amount selection */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {VOUCHER_DENOMINATIONS.map((d) => (
                    <button
                      key={d.amount}
                      type="button"
                      onClick={() => setAmount(d.amount)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        amount === d.amount
                          ? 'bg-charcoal-near border-gold text-cream shadow-md ring-1 ring-gold/40'
                          : 'bg-charcoal-pure/60 border-cream/10 text-cream/70 hover:border-cream/20'
                      }`}
                    >
                      <div className="text-base font-serif font-bold text-gold">{formatINR(d.amount)}</div>
                      <div className="text-xs font-semibold text-cream mt-0.5">{d.label}</div>
                      <div className="text-[10px] text-cream/40">{d.sublabel}</div>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleGenerate} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Recipient's Name"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="bg-charcoal-near border border-cream/20 rounded-xl px-3.5 py-2.5 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-gold"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Your Name (Sender)"
                      value={sender}
                      onChange={(e) => setSender(e.target.value)}
                      className="bg-charcoal-near border border-cream/20 rounded-xl px-3.5 py-2.5 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-charcoal-near border border-cream/20 rounded-xl px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-gold"
                  >
                    <option value="Birthday Feast">Birthday Feast</option>
                    <option value="Wedding Anniversary">Wedding Anniversary</option>
                    <option value="Festival & Eid Mubarak">Festival Celebration / Eid Mubarak</option>
                    <option value="Congratulations Feast">Heartfelt Congratulations</option>
                    <option value="Just Because Biryani">Just Because Biryani is Love</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold/25"
                  >
                    Generate Digital Feast Voucher
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-2">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-cream">Feast Voucher Created!</h4>
                <p className="text-xs text-cream/70 mt-1 mb-6">
                  Ready to send to {recipient} with love from {sender}.
                </p>

                {/* Digital Card Preview */}
                <div className="bg-gradient-to-br from-charcoal-pure via-charcoal-deep to-charcoal-near border border-gold/50 rounded-2xl p-6 text-left shadow-2xl mb-6 relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-gold font-bold">SAMBALEAF FEAST CARD</div>
                      <div className="text-sm font-serif font-bold text-cream mt-0.5">{occasion}</div>
                    </div>
                    <div className="text-xl font-serif font-bold text-gold">{formatINR(amount)}</div>
                  </div>

                  <div className="my-5 py-3 border-y border-cream/10">
                    <div className="text-[11px] text-cream/50">For: <span className="font-semibold text-cream">{recipient}</span></div>
                    <div className="text-[11px] text-cream/50">From: <span className="font-semibold text-cream">{sender}</span></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-cream/40">Voucher Code</div>
                      <div className="text-sm font-mono font-bold text-gold">{generatedCode}</div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold">Valid 1 Year across Karur</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleShareWhatsApp}
                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-cream font-bold text-xs transition flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => { setIsOpen(false); setGeneratedCode(null); }}
                    className="px-5 py-3 rounded-xl bg-charcoal-near border border-cream/20 text-cream/80 text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
