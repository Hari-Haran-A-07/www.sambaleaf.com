import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, CheckCircle2, Award, HeartHandshake, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: '100% Halal Trust & Ethical Sourcing Audit | SAMBALEAF Karur',
  description: 'Uncompromising Halal integrity: Certified Zabiha slaughter by Muslim butchers, zero pre-frozen meat, alcohol-free kitchen, and complete ethical transparency.'
};

export default function HalalPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-charcoal-near text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-light mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Main Hearth</span>
        </Link>

        <div className="mb-12 border-b border-cream/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Divine Trust & Pure Sourcing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-4 leading-tight">
            Our 100% Halal & Ethical Sourcing Commitment
          </h1>
          <p className="text-cream/70 text-base leading-relaxed">
            Halal is not a marketing checkbox at Sambaleaf — it is a sacred covenant of purity, animal welfare, and spiritual hygiene that guides every dawn batch we cook.
          </p>
        </div>

        <div className="space-y-8">
          {/* Commitment Card 1 */}
          <div className="bg-charcoal-deep border border-gold/20 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-cream mb-4 flex items-center gap-3">
              <Award className="w-6 h-6 text-gold" />
              <span>1. Hand-Slaughtered Zabiha by Practicing Muslim Butchers</span>
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-4">
              We categorically reject mechanical, pre-stunned, or automated slaughter. Every goat and chicken sourced for Sambaleaf is hand-slaughtered strictly in accordance with Islamic Shariah law (Bismillahi Allahu Akbar), ensuring swift, humane dispatch and complete blood drainage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-cream/70 pt-2">
              <div className="flex items-center gap-2 bg-charcoal-near p-3 rounded-xl border border-cream/5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero pre-frozen or imported bulk meat</span>
              </div>
              <div className="flex items-center gap-2 bg-charcoal-near p-3 rounded-xl border border-cream/5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Procured fresh every morning at 5:00 AM</span>
              </div>
            </div>
          </div>

          {/* Commitment Card 2 */}
          <div className="bg-charcoal-deep border border-gold/20 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-cream mb-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span>2. 100% Alcohol-Free & Pure Kitchen Environment</span>
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-4">
              Our cloud kitchen premises in Karur are strictly alcohol-free. We do not use wine vinegars, vanilla essences containing ethyl alcohol, or non-certified gelatin thickeners. All marinades utilize natural lacto-fermented curd and cold-pressed sesame and pure ghee.
            </p>
          </div>

          {/* Commitment Card 3 */}
          <div className="bg-charcoal-deep border border-gold/20 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-cream mb-4 flex items-center gap-3">
              <HeartHandshake className="w-6 h-6 text-gold" />
              <span>3. Open Kitchen & Certificate Verification</span>
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed">
              We welcome patrons to inspect our supplier slaughter certificates and kitchen standards anytime. Whether ordering for a Friday Juma lunch or a family Eid celebration, enjoy your biryani with total peace of mind.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-gold/25"
          >
            <span>Order with Total Faith & Trust</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
