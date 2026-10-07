'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../lib/store';
import { ShieldCheck, MapPin, MessageCircle, Sliders, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { setIsAdminOpen, kitchenSettings } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-charcoal-near text-cream pt-24 pb-16 border-t border-cream/10 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-leaf-deep/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-cream/10">
          {/* Col 1: Brand Wordmark & Philosophy */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-brass via-terracotta to-leaf-deep flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-charcoal-deep rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-soft" fill="currentColor">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-2xl tracking-[0.2em] text-cream font-medium">
                SAMBALEAF
              </span>
            </div>

            <p className="font-body text-sm text-cream/70 font-light leading-relaxed mb-6 max-w-sm">
              Dindigul-style Seeraga Samba Biryani. Slow cooked, steeped in tradition, and crafted exclusively for Karur.
            </p>

            <p className="font-tamil text-xs text-gold-soft/80 font-light mb-6">
              திண்டுக்கல் சீரக சம்பா பிரியாணி • கரூர்
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cream/5 border border-gold-soft/30 text-gold-soft text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-gold-soft" />
              <span>100% HALAL COMMITMENT</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.2em] text-gold-soft uppercase block mb-6">
              NAVIGATION
            </span>
            <ul className="space-y-3 font-body text-xs tracking-wider uppercase text-cream/70">
              <li>
                <Link href="#hero" className="hover:text-gold-soft transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-gold-soft transition-colors">
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-gold-soft transition-colors">
                  THE FOUR-DISH MENU
                </Link>
              </li>
              <li>
                <Link href="#biryani" className="hover:text-gold-soft transition-colors">
                  OUR BIRYANI
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-gold-soft transition-colors">
                  THE DINDIGUL PROCESS
                </Link>
              </li>
              <li>
                <Link href="#halal" className="hover:text-gold-soft transition-colors">
                  HALAL COMMITMENT
                </Link>
              </li>
              <li>
                <Link href="#delivery" className="hover:text-gold-soft transition-colors">
                  KARUR DELIVERY
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Cloud Kitchen & Contact Details */}
          <div className="lg:col-span-3">
            <span className="font-mono text-xs tracking-[0.2em] text-gold-soft uppercase block mb-6">
              KARUR LOCATION
            </span>
            <div className="space-y-4 text-xs font-body text-cream/70">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-soft flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-cream block font-medium">Cloud Kitchen Hub</span>
                  <span>Karur, Tamil Nadu, India</span>
                  <span className="text-cream/40 block text-[11px] mt-0.5">
                    [Address to be finalized by client]
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MessageCircle className="w-4 h-4 text-gold-soft flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-cream block font-medium">WhatsApp Pre-orders</span>
                  <span className="font-mono">{kitchenSettings.phonePlaceholder}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <a
                  href={`https://wa.me/${kitchenSettings.whatsappPlaceholder}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-cream/5 hover:bg-gold-soft/20 text-cream/70 hover:text-gold-soft transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <span className="p-2 rounded-full bg-cream/5 text-cream/40 hover:text-gold-soft cursor-pointer transition-colors" title="Instagram (Client to provide link)">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </span>
                <span className="p-2 rounded-full bg-cream/5 text-cream/40 hover:text-gold-soft cursor-pointer transition-colors" title="Facebook (Client to provide link)">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Client CMS Access & Back to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2.5 rounded-sm bg-cream/5 hover:bg-cream/10 border border-cream/15 text-cream/80 hover:text-gold-soft text-xs font-mono tracking-wider transition-all flex items-center space-x-2"
            >
              <Sliders className="w-3.5 h-3.5 text-gold-soft" />
              <span>CMS PREVIEW</span>
            </button>

            <button
              onClick={scrollToTop}
              className="mt-8 lg:mt-0 p-3 rounded-full bg-cream/5 hover:bg-gold-soft/20 text-cream/70 hover:text-gold-soft transition-colors flex items-center space-x-2 text-xs font-mono"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Rights Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cream/40 gap-4">
          <div>
            <span>© 2026 SAMBALEAF. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span>100% HALAL</span>
            <span>•</span>
            <span>SEERAGA SAMBA</span>
            <span>•</span>
            <span>KARUR, TAMIL NADU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
