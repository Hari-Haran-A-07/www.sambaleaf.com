'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Sparkles, ShieldCheck, Flame } from 'lucide-react';
import SteamEffect from './SteamEffect';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-near"
    >
      {/* Background Image with Cinematic Zoom and Warm Vignette */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="relative w-full h-full animate-subtleZoom scale-100">
          <Image
            src="/images/chicken-biryani.jpg"
            alt="Authentic Dindigul style Seeraga Samba Chicken Biryani in traditional brass vessel on banana leaf"
            fill
            priority
            quality={95}
            className="object-cover object-center brightness-[0.72] contrast-[1.08]"
            sizes="100vw"
          />
        </div>

        {/* Ambient Luxury Dark Vignettes & Warm Amber Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-near via-charcoal-near/50 to-charcoal-near/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-near/90 via-transparent to-charcoal-near/90" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Canvas Steam Rising Effect */}
      <SteamEffect intensity="rich" className="z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center flex flex-col items-center justify-center">
        {/* Halal Commitment & Location Micro-badge */}
        <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-charcoal-deep/80 border border-gold-soft/30 backdrop-blur-md mb-8 shadow-2xl">
          <span className="flex items-center space-x-1 text-[11px] font-mono tracking-[0.2em] text-gold-soft uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-soft" />
            <span>100% HALAL</span>
          </span>
          <span className="text-cream/30 text-xs">•</span>
          <span className="text-[11px] font-mono tracking-[0.2em] text-cream/90 uppercase">
            KARUR • TAMIL NADU
          </span>
        </div>

        {/* Tamil Script Sub-heading Motif */}
        <p className="font-tamil text-sm sm:text-base tracking-[0.25em] text-gold-soft/90 mb-3 font-light">
          திண்டுக்கல் சீரக சம்பா பிரியாணி
        </p>

        {/* Massive Editorial Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-medium tracking-[0.03em] leading-[1.06] mb-6 max-w-4xl text-shadow-luxury">
          THE SOUL OF <br />
          <span className="italic font-normal text-gold-soft">DINDIGUL BIRYANI.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="font-body text-base sm:text-lg md:text-xl text-cream/80 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Authentic Seeraga Samba biryani, prepared with patience, slow woodfire tradition, and unmistakable Tamil flavour.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <Link
            href="#order-builder"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:brightness-110 active:scale-98 transition-all duration-300 shadow-xl shadow-gold-brass/25 flex items-center justify-center space-x-2"
          >
            <span>ORDER NOW</span>
            <Flame className="w-4 h-4 text-charcoal-near" />
          </Link>

          <Link
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-cream/10 hover:bg-cream/15 text-cream border border-cream/20 hover:border-gold-soft/60 font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
          >
            EXPLORE OUR MENU
          </Link>
        </div>

        {/* Brand Keynote Pillars Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-8 border-t border-cream/10 w-full max-w-3xl text-center">
          <div>
            <span className="block font-display text-lg text-gold-soft">Seeraga Samba</span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-cream/60 uppercase mt-0.5">
              Heritage Grain
            </span>
          </div>
          <div>
            <span className="block font-display text-lg text-gold-soft">Sealed Dum</span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-cream/60 uppercase mt-0.5">
              Charcoal Embers
            </span>
          </div>
          <div>
            <span className="block font-display text-lg text-gold-soft">Four Dishes</span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-cream/60 uppercase mt-0.5">
              One Tradition
            </span>
          </div>
          <div>
            <span className="block font-display text-lg text-gold-soft">100% Halal</span>
            <span className="block font-mono text-[10px] tracking-[0.18em] text-cream/60 uppercase mt-0.5">
              Strict Integrity
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <Link
          href="#story"
          className="flex flex-col items-center text-[10px] font-mono tracking-[0.25em] text-cream/70 hover:text-gold-soft uppercase transition-colors"
        >
          <span>SCROLL TO TASTE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-soft mt-1" />
        </Link>
      </div>
    </section>
  );
}
