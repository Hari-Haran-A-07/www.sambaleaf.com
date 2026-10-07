'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '../lib/store';
import { ShoppingBag, Menu, X, Sliders, ShieldCheck, Flame } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen, setIsAdminOpen, kitchenSettings } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'THE MENU', href: '#menu' },
    { name: 'OUR BIRYANI', href: '#biryani' },
    { name: 'THE PROCESS', href: '#process' },
    { name: 'HALAL', href: '#halal' },
    { name: 'DELIVERY', href: '#delivery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-deep/90 backdrop-blur-md border-b border-cream/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-charcoal-near/90 via-charcoal-near/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <Link
          href="#hero"
          className="group flex items-center space-x-3 focus:outline-none focus:ring-1 focus:ring-gold-soft/40 rounded-sm"
        >
          {/* Logo Mark: Stylized Brass Leaf Icon */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-brass via-terracotta to-leaf-deep flex items-center justify-center p-[1px] shadow-lg shadow-gold-brass/10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-charcoal-deep rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gold-soft group-hover:text-cream transition-colors"
                fill="currentColor"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl tracking-[0.22em] text-cream font-medium leading-none group-hover:text-gold-soft transition-colors">
              SAMBALEAF
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-gold-soft/80 mt-1 uppercase">
              Dindigul • Seeraga Samba
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs tracking-[0.18em] font-medium text-cream/70 hover:text-gold-soft transition-colors duration-200 uppercase py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-soft hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Area: Status + Cart + CTA */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Status Indicator */}
          <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-full bg-leaf-deep/40 border border-leaf/40 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] tracking-[0.16em] uppercase font-mono text-cream/90 font-medium">
              {kitchenSettings.statusText}
            </span>
          </div>

          {/* Quick CMS / Admin Demo Trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="hidden lg:flex items-center justify-center p-2 text-cream/50 hover:text-gold-soft hover:bg-cream/5 rounded-full transition-colors"
            title="Client Kitchen Management Preview"
            aria-label="Kitchen Management Preview"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Bag / Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-cream/80 hover:text-gold-soft hover:bg-cream/5 rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-gold-soft/50"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-cream rounded-full text-[10px] font-mono font-bold flex items-center justify-center border-2 border-charcoal-deep shadow-md animate-scaleIn">
                {cartCount}
              </span>
            )}
          </button>

          {/* Main CTA */}
          <Link
            href="#order-builder"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta-warm to-gold-turmeric text-charcoal-near font-body font-semibold text-xs tracking-[0.18em] uppercase hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg shadow-gold-brass/20"
          >
            ORDER NOW
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-cream/80 hover:text-cream rounded-sm focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-charcoal-near/98 border-b border-cream/10 backdrop-blur-xl px-6 py-8 transition-all duration-300 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-cream/10">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs tracking-[0.15em] font-mono text-gold-soft">
                {kitchenSettings.statusText}
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-cream/60">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-soft" />
              <span>100% HALAL</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base tracking-[0.18em] font-display text-cream/80 hover:text-gold-soft py-1 border-b border-cream/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-4 space-y-3">
            <Link
              href="#order-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3.5 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-semibold text-xs tracking-[0.2em] uppercase shadow-lg shadow-gold-brass/20"
            >
              ORDER NOW
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsAdminOpen(true);
              }}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-sm bg-cream/5 border border-cream/10 text-cream/70 text-xs tracking-[0.15em] font-mono"
            >
              <Sliders className="w-3.5 h-3.5 mr-2 text-gold-soft" />
              KITCHEN DASHBOARD PREVIEW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
