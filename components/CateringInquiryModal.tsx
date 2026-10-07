"use client";
import React, { useState } from "react";
import { Users, Send, X, ShieldCheck } from "lucide-react";

export default function CateringInquiryModal() {
  const [open, setOpen] = useState(false);
  const [portions, setPortions] = useState(25);
  const [eventType, setEventType] = useState("Family Gathering");

  const sendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`*SAMBALEAF â€” BULK DUM HANDI INQUIRY (KARUR)*\n\n*Event:* ${eventType}\n*Portions:* ${portions} Portions\n*Dish:* Authentic Seeraga Samba Dum Biryani Handi (100% Halal)\n\nPlease contact me with catering availability and details.`);
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-sm bg-cream/10 hover:bg-gold-soft/20 text-cream hover:text-gold-soft border border-cream/20 text-xs font-mono uppercase tracking-wider transition-colors flex items-center space-x-2"
      >
        <Users className="w-4 h-4" />
        <span>BULK / CATERING DUM HANDIS</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-near/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-charcoal-deep border border-cream/20 rounded-sm p-6 sm:p-8 max-w-lg w-full text-cream shadow-2xl relative">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-cream/50 hover:text-cream">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-2xl mb-1">Bulk Handi Catering in Karur</h3>
            <p className="font-body text-xs text-cream/70 mb-6">Authentic sealed copper handis delivered directly to your event venue.</p>

            <form onSubmit={sendInquiry} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-cream/60 block mb-1">Event Type</label>
                <input
                  type="text"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-charcoal-warm p-2.5 rounded-sm border border-cream/15 text-xs text-cream focus:outline-none focus:border-gold-soft"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-cream/60 block mb-1">Required Portions ({portions} people)</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={portions}
                  onChange={(e) => setPortions(Number(e.target.value))}
                  className="w-full accent-gold-soft"
                />
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-cream/10">
                <div className="flex items-center space-x-1 text-gold-soft text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Halal Certified</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-gold-brass to-terracotta text-charcoal-near font-semibold text-xs font-mono uppercase rounded-sm flex items-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND INQUIRY</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
