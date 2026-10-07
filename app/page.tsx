'use client';

import React, { useState } from 'react';
import CinematicPreloader from '../components/CinematicPreloader';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import RiceStory from '../components/RiceStory';
import DindigulWay from '../components/DindigulWay';
import DumHandiSimulation from '../components/DumHandiSimulation';
import SignatureDishes from '../components/SignatureDishes';
import FourDishMenu from '../components/FourDishMenu';
import Manifesto from '../components/Manifesto';
import HalalSection from '../components/HalalSection';
import KitchenStory from '../components/KitchenStory';
import CookingProcess from '../components/CookingProcess';
import TastingNotes from '../components/TastingNotes';
import KarurIdentity from '../components/KarurIdentity';
import DeliveryRadiusChecker from '../components/DeliveryRadiusChecker';
import OrderBuilder from '../components/OrderBuilder';
import CustomerFAQ from '../components/CustomerFAQ';
import CateringInquiryModal from '../components/CateringInquiryModal';
import NutritionalInfoModal from '../components/NutritionalInfoModal';
import PrintableMenuModal from '../components/PrintableMenuModal';

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* 00. Cinematic 5-Second Biryani Entrance Experience */}
      <CinematicPreloader onComplete={() => setPreloaderDone(true)} />

      <div className={`flex flex-col w-full min-h-screen bg-charcoal-near text-cream transition-opacity duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-95'}`}>
        {/* 01. Full-Screen Cinematic Hero */}
        <Hero />

        {/* 02. Four Dishes. One Tradition. */}
        <BrandIntro />

        {/* 03. Seeraga Samba Heritage Story & Basmati vs Seeraga Samba Comparison */}
        <RiceStory />

        {/* 04. The Dindigul Way - 6 Stage Visual Journey */}
        <DindigulWay />

        {/* 04B. Interactive Dum Handi Simulation & Web Audio API Sound */}
        <DumHandiSimulation />

        {/* 05. Signature Chicken Biryani, Mutton Biryani, Onion Raitha & Thalcha Showcases */}
        <SignatureDishes />

        {/* 06. The Four-Dish Curated Horizontal Card Menu */}
        <FourDishMenu />

        {/* Quick Utility Actions Bar (Catering, Nutritional, Printable Menu) */}
        <div className="py-8 bg-charcoal-deep border-y border-cream/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <CateringInquiryModal />
              <NutritionalInfoModal />
            </div>
            <div>
              <PrintableMenuModal />
            </div>
          </div>
        </div>

        {/* 07. Less Menu. More Craft. Principles Manifesto */}
        <Manifesto />

        {/* 08. 100% Halal Trust & Pure Sourcing Commitment */}
        <HalalSection />

        {/* 09. Inside Sambaleaf Kitchen Story (Prepare, Cook, Rest, Pack, Deliver) */}
        <KitchenStory />

        {/* 10. The 6-Step Dum Cooking Timeline */}
        <CookingProcess />

        {/* Tasting Notes & Banana Leaf Etiquette */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <TastingNotes />
        </div>

        {/* 11. Made for Karur Identity & Active Delivery Zones */}
        <KarurIdentity />

        {/* Karur Delivery Radius Checker */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <DeliveryRadiusChecker />
        </div>

        {/* 12. Interactive Step-by-Step Order Builder & WhatsApp Dispatch */}
        <OrderBuilder />

        {/* 13. Frequently Asked Questions */}
        <CustomerFAQ />
      </div>
    </>
  );
}
