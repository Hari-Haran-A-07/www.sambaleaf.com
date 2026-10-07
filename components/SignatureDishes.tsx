'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Plus, Check, Flame, Sparkles } from 'lucide-react';
import { useStore } from '../lib/store';
import SteamEffect from './SteamEffect';

export default function SignatureDishes() {
  const { menuItems, addToCart } = useStore();

  const chicken = menuItems.find((m) => m.id === 'chicken-biryani') || menuItems[0];
  const mutton = menuItems.find((m) => m.id === 'mutton-biryani') || menuItems[1];
  const raitha = menuItems.find((m) => m.id === 'onion-raitha') || menuItems[2];
  const thalcha = menuItems.find((m) => m.id === 'thalcha') || menuItems[3];

  return (
    <div id="biryani" className="relative bg-charcoal-near text-cream">
      {/* ============================================================ */}
      {/* 01. SIGNATURE CHICKEN BIRYANI SECTION */}
      {/* ============================================================ */}
      <section id="chicken-biryani" className="relative py-24 sm:py-36 border-t border-cream/10 overflow-hidden">
        <SteamEffect intensity="medium" className="z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: 65% Viewport Image Showcase */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-sm overflow-hidden border border-cream/15 shadow-2xl bg-charcoal-deep">
                <Image
                  src={chicken.image}
                  alt={chicken.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/90 via-transparent to-transparent" />

                {/* Floating Halal Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-charcoal-deep/85 border border-gold-soft/40 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-gold-soft" />
                  <span className="font-mono text-xs tracking-[0.2em] text-gold-soft uppercase font-medium">
                    100% HALAL
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-20">
                  <span className="font-tamil text-sm text-cream/80 bg-charcoal-near/80 px-3 py-1 rounded-sm backdrop-blur-sm border border-cream/10">
                    {chicken.tamilName}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Story & Order CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-gold-soft mb-2">
                <span className="font-mono text-xs tracking-[0.25em] uppercase">
                  01 / {chicken.subtitle}
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream font-medium tracking-[0.03em] leading-tight mb-2">
                {chicken.name}
              </h2>

              <p className="font-mono text-xs tracking-[0.15em] text-gold-soft/90 mb-6 uppercase">
                {chicken.servingInfo}
              </p>

              <p className="font-body text-base text-cream/80 font-light leading-relaxed mb-8">
                {chicken.description}
              </p>

              {/* Dish Specification Specs */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-cream/10 mb-8 font-mono text-xs">
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Rice</span>
                  <span className="text-cream/90 font-medium">{chicken.details.riceType}</span>
                </div>
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Dum Method</span>
                  <span className="text-cream/90 font-medium">{chicken.details.cookingMethod}</span>
                </div>
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Masala</span>
                  <span className="text-cream/90 font-medium">{chicken.details.spiceProfile}</span>
                </div>
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Integrity</span>
                  <span className="text-gold-soft font-medium">100% Halal Certified</span>
                </div>
              </div>

              {/* Price & Direct Order Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-cream/40 uppercase block">
                    PRICE PER SERVING
                  </span>
                  <span className="font-mono text-xl text-cream font-medium">
                    {chicken.pricePlaceholder}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      addToCart({
                        menuItemId: chicken.id,
                        quantity: 1,
                        includeRaitha: true,
                        includeThalcha: true,
                      })
                    }
                    className="flex-1 sm:flex-initial px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-semibold text-xs tracking-[0.18em] uppercase hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold-brass/20 flex items-center justify-center space-x-2"
                  >
                    <span>ADD TO ORDER</span>
                    <Plus className="w-4 h-4" />
                  </button>

                  <Link
                    href="#order-builder"
                    className="px-4 py-3.5 rounded-sm bg-cream/10 hover:bg-cream/15 text-cream border border-cream/20 text-xs tracking-[0.15em] uppercase font-mono transition-colors text-center"
                  >
                    CUSTOMIZE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02. SIGNATURE MUTTON BIRYANI SECTION */}
      {/* ============================================================ */}
      <section id="mutton-biryani" className="relative py-24 sm:py-36 bg-charcoal-deep border-t border-cream/10 overflow-hidden">
        <SteamEffect intensity="rich" tint="rgba(255, 230, 200, " className="z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Narrative & Order Details (Asymmetric inversion) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-terracotta mb-2">
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold-soft">
                  02 / {mutton.subtitle}
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream font-medium tracking-[0.03em] leading-tight mb-2">
                {mutton.name}
              </h2>

              <p className="font-mono text-xs tracking-[0.15em] text-gold-soft/90 mb-6 uppercase">
                {mutton.servingInfo}
              </p>

              <p className="font-body text-base text-cream/80 font-light leading-relaxed mb-8">
                {mutton.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-cream/10 mb-8 font-mono text-xs">
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Cut &amp; Grain</span>
                  <span className="text-cream/90 font-medium">{mutton.details.riceType}</span>
                </div>
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Cooking Heat</span>
                  <span className="text-cream/90 font-medium">{mutton.details.cookingMethod}</span>
                </div>
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Profile</span>
                  <span className="text-cream/90 font-medium">{mutton.details.spiceProfile}</span>
                </div>
                <div>
                  <span className="text-cream/40 block mb-1 text-[10px] tracking-[0.15em] uppercase">Assurance</span>
                  <span className="text-gold-soft font-medium">100% Halal Tender Cuts</span>
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-cream/40 uppercase block">
                    PRICE PER SERVING
                  </span>
                  <span className="font-mono text-xl text-cream font-medium">
                    {mutton.pricePlaceholder}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      addToCart({
                        menuItemId: mutton.id,
                        quantity: 1,
                        includeRaitha: true,
                        includeThalcha: true,
                      })
                    }
                    className="flex-1 sm:flex-initial px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-semibold text-xs tracking-[0.18em] uppercase hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold-brass/20 flex items-center justify-center space-x-2"
                  >
                    <span>ADD TO ORDER</span>
                    <Plus className="w-4 h-4" />
                  </button>

                  <Link
                    href="#order-builder"
                    className="px-4 py-3.5 rounded-sm bg-cream/10 hover:bg-cream/15 text-cream border border-cream/20 text-xs tracking-[0.15em] uppercase font-mono transition-colors text-center"
                  >
                    CUSTOMIZE
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Immersive Mutton Photography */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative group">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-sm overflow-hidden border border-cream/15 shadow-2xl bg-charcoal-warm">
                <Image
                  src={mutton.image}
                  alt={mutton.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/90 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-charcoal-deep/85 border border-gold-soft/40 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-gold-soft" />
                  <span className="font-mono text-xs tracking-[0.2em] text-gold-soft uppercase font-medium">
                    100% HALAL
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-20">
                  <span className="font-tamil text-sm text-cream/80 bg-charcoal-near/80 px-3 py-1 rounded-sm backdrop-blur-sm border border-cream/10">
                    {mutton.tamilName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 & 04. ACCOMPANIMENTS: ONION RAITHA & THALCHA */}
      {/* ============================================================ */}
      <section id="accompaniments" className="relative py-24 sm:py-36 bg-charcoal-near border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
              THE SIGNATURE ACCOMPANIMENTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-cream font-medium mb-4">
              HARMONY OF <span className="italic text-gold-soft font-normal">FLAVOURS</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-cream/70 font-light">
              Crafted in limited small batches to accompany and elevate each portion of SAMBALEAF biryani.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Onion Raitha Card */}
            <div
              id="onion-raitha"
              className="group p-6 sm:p-8 rounded-sm bg-charcoal-warm/50 border border-cream/10 hover:border-gold-soft/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mb-6 border border-cream/10">
                  <Image
                    src={raitha.image}
                    alt={raitha.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-charcoal-deep/80 border border-cream/20 text-cream/80 text-[10px] font-mono tracking-wider uppercase">
                      03 / ACCOMPANIMENT
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-cream">
                    {raitha.name}
                  </h3>
                  <span className="font-tamil text-xs text-cream/50">
                    {raitha.tamilName}
                  </span>
                </div>

                <p className="font-mono text-xs text-gold-soft tracking-wider mb-4 uppercase">
                  {raitha.subtitle}
                </p>

                <p className="font-body text-sm text-cream/70 font-light leading-relaxed mb-6">
                  {raitha.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream/10 flex items-center justify-between">
                <span className="font-mono text-xs text-cream/60">
                  {raitha.pricePlaceholder}
                </span>
                <button
                  onClick={() =>
                    addToCart({
                      menuItemId: raitha.id,
                      quantity: 1,
                      includeRaitha: false,
                      includeThalcha: false,
                    })
                  }
                  className="px-4 py-2 rounded-sm bg-cream/10 hover:bg-gold-soft/20 text-cream hover:text-gold-soft border border-cream/20 text-xs font-mono uppercase tracking-wider transition-colors flex items-center space-x-1.5"
                >
                  <span>ADD TO YOUR ORDER</span>
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Thalcha Card */}
            <div
              id="thalcha"
              className="group p-6 sm:p-8 rounded-sm bg-charcoal-warm/50 border border-cream/10 hover:border-gold-soft/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mb-6 border border-cream/10">
                  <Image
                    src={thalcha.image}
                    alt={thalcha.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-charcoal-deep/80 border border-cream/20 text-cream/80 text-[10px] font-mono tracking-wider uppercase">
                      04 / ACCOMPANIMENT
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-cream">
                    {thalcha.name}
                  </h3>
                  <span className="font-tamil text-xs text-cream/50">
                    {thalcha.tamilName}
                  </span>
                </div>

                <p className="font-mono text-xs text-gold-soft tracking-wider mb-4 uppercase">
                  {thalcha.subtitle}
                </p>

                <p className="font-body text-sm text-cream/70 font-light leading-relaxed mb-6">
                  {thalcha.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream/10 flex items-center justify-between">
                <span className="font-mono text-xs text-cream/60">
                  {thalcha.pricePlaceholder}
                </span>
                <button
                  onClick={() =>
                    addToCart({
                      menuItemId: thalcha.id,
                      quantity: 1,
                      includeRaitha: false,
                      includeThalcha: false,
                    })
                  }
                  className="px-4 py-2 rounded-sm bg-cream/10 hover:bg-gold-soft/20 text-cream hover:text-gold-soft border border-cream/20 text-xs font-mono uppercase tracking-wider transition-colors flex items-center space-x-1.5"
                >
                  <span>ADD TO YOUR ORDER</span>
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
