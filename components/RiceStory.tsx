'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RICE_COMPARISON } from '../lib/data';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function RiceStory() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'origin'>('comparison');

  return (
    <section id="rice-story" className="relative py-28 sm:py-36 bg-charcoal-near text-cream overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cream/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cream/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
            02 / THE HERITAGE GRAIN
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium leading-[1.1] mb-6">
            WHY <span className="italic font-normal text-gold-soft">SEERAGA SAMBA?</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-cream/75 leading-relaxed font-light">
            Small-grained Seeraga Samba rice is at the heart of our biryani. Its distinctive texture and unparalleled ability to absorb flavour create the authentic character we want in every single serving.
          </p>
        </div>

        {/* Macro Image Showcase + Side-by-Side Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Macro Rice Photo Card */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-sm border border-cream/10 bg-charcoal-warm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/seeraga-samba-rice.jpg"
                alt="Macro close up of authentic raw Seeraga Samba rice grains with star anise and cardamom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6 sm:p-8 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] tracking-[0.2em] text-gold-soft uppercase">
                  Oryza Sativa • சீரக சம்பா
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gold-soft/10 text-gold-soft text-[10px] font-mono border border-gold-soft/30">
                  INDIGENOUS TO TAMIL NADU
                </span>
              </div>
              <h3 className="font-display text-2xl text-cream mb-2">The Tiny Grain with Immense Flavour</h3>
              <p className="font-body text-sm text-cream/70 font-light leading-relaxed">
                Named after &apos;Seeragam&apos; (cumin seeds) for its miniature oval form. Unlike elongated basmati, Seeraga Samba drinks in the spiced meat juices into its core during the sealed dum process without turning mushy.
              </p>
            </div>
          </div>

          {/* Grain Philosophy Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-charcoal-warm/40 border border-cream/10 hover:border-gold-soft/30 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold-soft/10 flex items-center justify-center text-gold-soft flex-shrink-0 mt-1">
                  <span className="font-mono text-sm font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-display text-xl text-cream mb-1">Core Flavour Penetration</h4>
                  <p className="font-body text-sm text-cream/70 font-light leading-relaxed">
                    The porous starch matrix of Seeraga Samba draws in the seasoned broth, meat marrow, and pure ghee deep into each grain, making every mouthful intensely flavorful.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-sm bg-charcoal-warm/40 border border-cream/10 hover:border-gold-soft/30 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold-soft/10 flex items-center justify-center text-gold-soft flex-shrink-0 mt-1">
                  <span className="font-mono text-sm font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-display text-xl text-cream mb-1">Light Digestibility &amp; Aroma</h4>
                  <p className="font-body text-sm text-cream/70 font-light leading-relaxed">
                    Prized for its pleasant earthy aroma and gentle digestibility, Seeraga Samba biryani leaves you satisfied without the heavy bloat often associated with high-starch hybrid rices.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-sm bg-charcoal-warm/40 border border-cream/10 hover:border-gold-soft/30 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold-soft/10 flex items-center justify-center text-gold-soft flex-shrink-0 mt-1">
                  <span className="font-mono text-sm font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-display text-xl text-cream mb-1">Authentic Dindigul Soul</h4>
                  <p className="font-body text-sm text-cream/70 font-light leading-relaxed">
                    In Dindigul culinary history, a biryani made with long-grain basmati is not considered true Dindigul biryani. The Seeraga Samba grain is non-negotiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Editorial Comparison Table: SEERAGA SAMBA vs BASMATI */}
        <div className="border border-cream/15 rounded-sm bg-charcoal-warm/50 backdrop-blur-sm overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-cream/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-gold-soft uppercase block mb-1">
                GRAIN IDENTITY COMPARISON
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-cream">
                Seeraga Samba <span className="text-cream/40 font-light">vs</span> Basmati
              </h3>
            </div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cream/60">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-soft inline-block" />
              <span>SAMBALEAF Exclusively Uses Seeraga Samba</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-cream/10 bg-charcoal-deep/80 text-xs font-mono tracking-[0.15em] text-cream/60 uppercase">
                  <th className="py-4 px-6 font-medium w-1/4">Attribute</th>
                  <th className="py-4 px-6 font-medium w-3/8 text-gold-soft bg-gold-soft/5">
                    SEERAGA SAMBA (OUR GRAIN)
                  </th>
                  <th className="py-4 px-6 font-medium w-3/8 text-cream/50">
                    LONG GRAIN BASMATI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream/5 text-sm font-body">
                {RICE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream/[0.02] transition-colors">
                    <td className="py-5 px-6 font-mono text-xs text-cream/70 font-medium tracking-wide">
                      {row.attribute}
                    </td>
                    <td className="py-5 px-6 text-cream/90 bg-gold-soft/[0.02] font-light leading-relaxed">
                      <div className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-gold-soft flex-shrink-0 mt-0.5" />
                        <span>{row.seeragaSamba}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-cream/50 font-light leading-relaxed">
                      {row.basmati}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
