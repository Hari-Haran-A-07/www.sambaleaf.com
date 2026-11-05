import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, ArrowLeft, Recycle, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eco-Packaging & Green Kitchen Commitment | SAMBALEAF Karur',
  description: 'Our pledge to Karur: 100% biodegradable banana leaf lining, unbleached kraft paper, zero single-use plastics, and terracotta handi return incentive.'
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-charcoal-near text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Main Hearth</span>
        </Link>

        <div className="mb-12 border-b border-cream/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Leaf className="w-3.5 h-3.5" />
            <span>Green Kitchen Charter</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-4 leading-tight">
            Nurturing Earth with Every Handi
          </h1>
          <p className="text-cream/70 text-base leading-relaxed">
            In our pursuit of authentic taste, we believe ancient tradition holds the antidote to modern plastic pollution. Here is how Sambaleaf protects Karur’s ecosystem.
          </p>
        </div>

        <div className="space-y-8">
          {/* Pillar 1 */}
          <div className="bg-charcoal-deep border border-emerald-500/20 rounded-3xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
              <Leaf className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-cream mb-2">
              1. Authentic Farm-Cut Banana Leaves
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-3">
              Every parcel includes whole sanitized banana leaves harvested from Cauvery riverside plantain orchards. When hot biryani rests on fresh plantain leaves, it releases natural antibacterial epigallocatechin gallate (EGCG) antioxidants that enhance aroma while ensuring 100% home compostability.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-charcoal-deep border border-emerald-500/20 rounded-3xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
              <Recycle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-cream mb-2">
              2. Terracotta Clay Handi Return & Reward Initiative
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-3">
              Our artisanal baked-clay handis are molded by rural potters in Karur district. To prevent disposal waste, we run a Karur Clay Loop: return 5 intact Sambaleaf clay pots to any of our pickup hubs, and enjoy a complimentary portion of Seeraga Samba Chicken Biryani on us!
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-charcoal-deep border border-emerald-500/20 rounded-3xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-cream mb-2">
              3. Zero Single-Use Plastic Mandate
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-3">
              We never pack boiling hot curries or thalcha in transparent polythene bags that leach microplastics. All liquid accompaniments are delivered in compostable bagasse containers with cornstarch lids and unbleached cotton string ties.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-cream font-bold text-xs uppercase tracking-wider transition shadow-xl"
          >
            <span>Support Clean Earth Dining</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
