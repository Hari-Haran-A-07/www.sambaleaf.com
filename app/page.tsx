import React from 'react';
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
import KarurIdentity from '../components/KarurIdentity';
import OrderBuilder from '../components/OrderBuilder';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-near text-cream">
      {/* 01. Full-Screen Cinematic Hero */}
      <Hero />

      {/* 02. Four Dishes. One Tradition. */}
      <BrandIntro />

      {/* 03. Seeraga Samba Heritage Story & Basmati vs Seeraga Samba Comparison */}
      <RiceStory />

      {/* 04. The Dindigul Way - 6 Stage Visual Journey */}
      <DindigulWay />

      {/* 04B. Interactive Dum Handi Simulation & Sound Synthesis */}
      <DumHandiSimulation />

      {/* 05. Signature Chicken Biryani, Mutton Biryani, Onion Raitha & Thalcha Showcases */}
      <SignatureDishes />

      {/* 06. The Four-Dish Curated Horizontal Card Menu */}
      <FourDishMenu />

      {/* 07. Less Menu. More Craft. Principles Manifesto */}
      <Manifesto />

      {/* 08. 100% Halal Trust & Pure Sourcing Commitment */}
      <HalalSection />

      {/* 09. Inside Sambaleaf Kitchen Story (Prepare, Cook, Rest, Pack, Deliver) */}
      <KitchenStory />

      {/* 10. The 6-Step Dum Cooking Timeline */}
      <CookingProcess />

      {/* 11. Made for Karur Identity & Active Delivery Zones */}
      <KarurIdentity />

      {/* 12. Interactive Step-by-Step Order Builder & WhatsApp Dispatch */}
      <OrderBuilder />
    </div>
  );
}
