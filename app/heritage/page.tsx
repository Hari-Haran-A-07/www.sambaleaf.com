import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Leaf, Award, Compass, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Legend of Seeraga Samba Rice | SAMBALEAF Heritage',
  description: 'Why authentic Dindigul biryani demands tiny, aromatic Seeraga Samba grain rather than long-grain Basmati. Discover centuries of Tamil culinary wisdom.'
};

export default function HeritagePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-charcoal-near text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-light mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Main Hearth</span>
        </Link>

        {/* Title & Header */}
        <div className="mb-12 border-b border-cream/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-4 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Grain of Kings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-4 leading-tight">
            The Untold Heritage of Seeraga Samba
          </h1>
          <p className="text-gold font-tamil text-lg mb-2">
            சீரக சம்பா — தமிழகத்தின் நறுமணப் பாரம்பரியம்
          </p>
          <p className="text-cream/70 text-base leading-relaxed">
            In an era where commercial restaurants defaulted to neutral Basmati, Sambaleaf reclaims the indigenous small grain that has defined festive Tamil cuisine since the Chola empire.
          </p>
        </div>

        {/* Story Chapters */}
        <div className="space-y-12">
          {/* Chapter 1 */}
          <section className="bg-charcoal-deep border border-cream/10 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-gold mb-3 flex items-center gap-3">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span>01. Why the Name "Seeraga Samba"?</span>
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-4">
              "Seeragam" in Tamil translates to cumin. The individual uncooked grains are so minuscule and delicate that they physically resemble cumin seeds. "Samba" refers to the long-duration winter cultivation season in Tamil Nadu, traditionally harvested between August and January when the Cauvery river inundates the alluvial plains with mineral-rich silts.
            </p>
            <p className="text-cream/80 text-sm leading-relaxed">
              Unlike industrial hybrids, genuine Seeraga Samba produces an unmistakable natural floral aroma even before touching heat.
            </p>
          </section>

          {/* Chapter 2: The Absorption Paradox */}
          <section className="bg-charcoal-deep border border-cream/10 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-gold mb-3 flex items-center gap-3">
              <Award className="w-5 h-5 text-gold" />
              <span>02. The Absorption Paradox: Basmati vs Seeraga Samba</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-charcoal-near p-5 rounded-2xl border border-cream/5">
                <div className="text-xs uppercase font-bold tracking-wider text-cream/40 mb-1">Commercial Basmati</div>
                <div className="text-base font-serif font-bold text-cream mb-2">Elongation without Penetration</div>
                <p className="text-xs text-cream/70 leading-relaxed">
                  Basmati grains expand longitudinally by 2.5x. However, their exterior remains slick, meaning masalas and rendered meat jus merely coat the outside surface while the core remains bland.
                </p>
              </div>

              <div className="bg-charcoal-near p-5 rounded-2xl border border-gold/30">
                <div className="text-xs uppercase font-bold tracking-wider text-gold mb-1">Authentic Seeraga Samba</div>
                <div className="text-base font-serif font-bold text-cream mb-2">Volumetric Saturation</div>
                <p className="text-xs text-cream/80 leading-relaxed">
                  Seeraga Samba does not elongate; it swells in girth. Its high amylose starch matrix drinks in the broth, locking the ginger, garlic, peppercorn, and bone marrow straight into every grain's heart.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 3: Health & Digestibility */}
          <section className="bg-charcoal-deep border border-cream/10 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl font-serif font-bold text-gold mb-3 flex items-center gap-3">
              <Heart className="w-5 h-5 text-red-400" />
              <span>03. The Lightness After Feasting</span>
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed mb-4">
              Ask any seasoned connoisseur who has enjoyed biryani in Dindigul: after finishing a full handi of Seeraga Samba, you never experience the sluggish, bloated heaviness associated with heavy commercial biryanis.
            </p>
            <p className="text-cream/80 text-sm leading-relaxed">
              Its lower glycemic index, combined with high fiber and natural resistant starches, ensures smooth metabolic digestion. It is festive food that respects your body.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center py-8">
            <Link
              href="/#menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-sm tracking-wider uppercase transition shadow-xl shadow-gold/25"
            >
              <span>Taste the Heritage Today</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
