"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Why does SAMBALEAF only offer four dishes?",
    a: "We believe mastery comes from focus. Rather than preparing dozens of mediocre dishes, we devote all our culinary craft to mastering authentic Dindigul Chicken Biryani, Mutton Biryani, fresh Onion Raitha, and traditional Thalcha."
  },
  {
    q: "What makes Seeraga Samba rice superior for Dindigul biryani?",
    a: "Seeraga Samba is an indigenous small-grain rice from Tamil Nadu. Its unique starch structure absorbs the spiced meat jus and ghee into the core of each grain without breaking, unlike basmati which only coats the exterior."
  },
  {
    q: "Is all meat 100% Halal?",
    a: "Yes, without exception. All poultry and mutton are strictly 100% Halal sourced from verified purveyors."
  },
  {
    q: "How does delivery work in Karur?",
    a: "Orders are prepared in timed dum batches and dispatched in insulated thermal packaging to keep the biryani piping hot upon arrival at your doorstep in Karur."
  }
];

export default function CustomerFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-charcoal-near text-cream border-t border-cream/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-gold-soft uppercase tracking-widest block mb-2">QUESTIONS &amp; ANSWERS</span>
          <h2 className="font-display text-4xl text-cream">FREQUENTLY ASKED <span className="italic text-gold-soft font-normal">QUESTIONS</span></h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="p-6 rounded-sm bg-charcoal-warm/50 border border-cream/10">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between text-left font-display text-xl text-cream focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold-soft transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <p className="mt-4 font-body text-sm text-cream/75 font-light leading-relaxed border-t border-cream/5 pt-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
