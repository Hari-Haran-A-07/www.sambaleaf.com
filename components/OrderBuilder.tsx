'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useStore } from '../lib/store';
import {
  Flame,
  Plus,
  Minus,
  Check,
  Send,
  PhoneCall,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function OrderBuilder() {
  const { menuItems, addToCart, kitchenSettings } = useStore();

  const [selectedBiryani, setSelectedBiryani] = useState<'chicken-biryani' | 'mutton-biryani'>('chicken-biryani');
  const [raitha, setRaitha] = useState(true);
  const [thalcha, setThalcha] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const selectedItem = menuItems.find((m) => m.id === selectedBiryani) || menuItems[0];
  const unitPrice = selectedItem.priceNumeric || 0;
  const estimatedTotal = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      menuItemId: selectedBiryani,
      quantity,
      includeRaitha: raitha,
      includeThalcha: thalcha,
    });
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#C99A3A', '#D6B56A', '#A95332', '#304D35'],
      });
    } catch {
      // fallback
    }

    const accompanimentsList = [];
    if (raitha) accompanimentsList.push('Onion Raitha');
    if (thalcha) accompanimentsList.push('Thalcha');
    const accompanimentsStr = accompanimentsList.length > 0 ? accompanimentsList.join(' + ') : 'None';

    const message = encodeURIComponent(
      `*SAMBALEAF — NEW ORDER INQUIRY (KARUR)*\n\n` +
      `*Dish:* ${selectedItem.name} (${selectedItem.tamilName})\n` +
      `*Quantity:* ${quantity} Portion(s)\n` +
      `*Accompaniments:* ${accompanimentsStr}\n` +
      (customerName ? `*Customer Name:* ${customerName}\n` : '') +
      (customerAddress ? `*Delivery Location in Karur:* ${customerAddress}\n` : '') +
      `*Dietary:* 100% Halal Certified\n\n` +
      `Please confirm the order availability and delivery estimate. Thank you!`
    );

    const whatsappUrl = `https://wa.me/${kitchenSettings.whatsappPlaceholder}?text=${message}`;
    setOrderPlaced(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order-builder" className="relative py-28 sm:py-36 bg-charcoal-near text-cream overflow-hidden border-t border-cream/10">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gold-turmeric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-soft uppercase block mb-3">
            10 / SEAMLESS ORDERING
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-medium mb-4">
            READY FOR <span className="italic text-gold-soft font-normal">BRIYANI?</span>
          </h2>
          <p className="font-body text-base text-cream/75 font-light">
            Build your signature Dindigul biryani box with accompaniments. Freshly prepared in Karur.
          </p>
        </div>

        {/* Interactive Order Builder Card */}
        <div className="max-w-4xl mx-auto bg-charcoal-warm/70 border border-cream/15 rounded-sm p-6 sm:p-12 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleWhatsAppOrder} className="space-y-10">
            {/* STEP 01: Choose Your Biryani */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-gold-soft/20 text-gold-soft font-mono text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-cream">
                  Choose Your Biryani
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Chicken Biryani Option */}
                <button
                  type="button"
                  onClick={() => setSelectedBiryani('chicken-biryani')}
                  className={`p-5 rounded-sm text-left border transition-all duration-300 relative ${
                    selectedBiryani === 'chicken-biryani'
                      ? 'bg-charcoal-deep border-gold-soft shadow-lg shadow-gold-soft/10 ring-1 ring-gold-soft/50'
                      : 'bg-charcoal-deep/40 border-cream/10 hover:border-cream/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-display text-xl text-cream font-medium">
                      Chicken Biryani
                    </span>
                    {selectedBiryani === 'chicken-biryani' && (
                      <Check className="w-5 h-5 text-gold-soft" />
                    )}
                  </div>
                  <span className="font-tamil text-xs text-gold-soft/80 block mb-1">
                    சிக்கன் பிரியாணி
                  </span>
                  <p className="font-body text-xs text-cream/70 font-light">
                    Tender spiced chicken slow cooked in Seeraga Samba rice.
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-gold-soft">100% Halal</span>
                    <span className="text-cream/80">{menuItems[0]?.pricePlaceholder}</span>
                  </div>
                </button>

                {/* Mutton Biryani Option */}
                <button
                  type="button"
                  onClick={() => setSelectedBiryani('mutton-biryani')}
                  className={`p-5 rounded-sm text-left border transition-all duration-300 relative ${
                    selectedBiryani === 'mutton-biryani'
                      ? 'bg-charcoal-deep border-gold-soft shadow-lg shadow-gold-soft/10 ring-1 ring-gold-soft/50'
                      : 'bg-charcoal-deep/40 border-cream/10 hover:border-cream/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-display text-xl text-cream font-medium">
                      Mutton Biryani
                    </span>
                    {selectedBiryani === 'mutton-biryani' && (
                      <Check className="w-5 h-5 text-gold-soft" />
                    )}
                  </div>
                  <span className="font-tamil text-xs text-gold-soft/80 block mb-1">
                    மட்டன் பிரியாணி
                  </span>
                  <p className="font-body text-xs text-cream/70 font-light">
                    Slow braised tender mutton steeped in rich aromatic dum.
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-gold-soft">100% Halal</span>
                    <span className="text-cream/80">{menuItems[1]?.pricePlaceholder}</span>
                  </div>
                </button>
              </div>
            </div>

            {/* STEP 02: Choose Accompaniments */}
            <div className="pt-6 border-t border-cream/10">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-gold-soft/20 text-gold-soft font-mono text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-cream">
                  Choose Accompaniments
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Onion Raitha */}
                <div
                  onClick={() => setRaitha(!raitha)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                    raitha
                      ? 'bg-charcoal-deep border-gold-soft/80 text-cream'
                      : 'bg-charcoal-deep/30 border-cream/10 text-cream/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center ${raitha ? 'bg-gold-soft border-gold-soft text-charcoal-near' : 'border-cream/30'}`}>
                      {raitha && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className="font-body text-sm font-medium block">Onion Raitha</span>
                      <span className="font-tamil text-[10px] text-cream/40">வெங்காய தயிர் பச்சடி</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gold-soft">Included</span>
                </div>

                {/* Thalcha */}
                <div
                  onClick={() => setThalcha(!thalcha)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                    thalcha
                      ? 'bg-charcoal-deep border-gold-soft/80 text-cream'
                      : 'bg-charcoal-deep/30 border-cream/10 text-cream/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center ${thalcha ? 'bg-gold-soft border-gold-soft text-charcoal-near' : 'border-cream/30'}`}>
                      {thalcha && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className="font-body text-sm font-medium block">Thalcha</span>
                      <span className="font-tamil text-[10px] text-cream/40">தால்ச்சா</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gold-soft">Included</span>
                </div>
              </div>
            </div>

            {/* STEP 03: Quantity & Customer Info */}
            <div className="pt-6 border-t border-cream/10">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-gold-soft/20 text-gold-soft font-mono text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-cream">
                  Portion &amp; Delivery Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                {/* Quantity Stepper */}
                <div className="md:col-span-4">
                  <label className="font-mono text-xs text-cream/60 uppercase block mb-2">
                    Number of Portions
                  </label>
                  <div className="flex items-center space-x-3 bg-charcoal-deep p-2 rounded-sm border border-cream/15">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 rounded-sm bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors active:scale-95"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center font-mono text-lg text-cream font-semibold">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 rounded-sm bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors active:scale-95"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Optional Customer Name */}
                <div className="md:col-span-4">
                  <label className="font-mono text-xs text-cream/60 uppercase block mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Anand"
                    className="w-full bg-charcoal-deep p-3.5 rounded-sm border border-cream/15 text-cream text-sm focus:outline-none focus:border-gold-soft font-body placeholder:text-cream/20"
                  />
                </div>

                {/* Optional Area / Landmark */}
                <div className="md:col-span-4">
                  <label className="font-mono text-xs text-cream/60 uppercase block mb-2">
                    Karur Delivery Area
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="e.g. Pasupathipalem / Bus Stand"
                    className="w-full bg-charcoal-deep p-3.5 rounded-sm border border-cream/15 text-cream text-sm focus:outline-none focus:border-gold-soft font-body placeholder:text-cream/20"
                  />
                </div>
              </div>
            </div>

            {/* STEP 04: Order Actions & Summary */}
            <div className="pt-6 border-t border-cream/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-cream/50 uppercase tracking-wider block">
                    CURRENT SELECTION SUMMARY
                  </span>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="font-display text-2xl text-cream font-medium">
                      {quantity} × {selectedItem.name}
                    </span>
                    <span className="font-mono text-xs text-gold-soft">
                      ({raitha ? 'Raitha' : ''} {raitha && thalcha ? '+' : ''} {thalcha ? 'Thalcha' : ''})
                    </span>
                  </div>
                  <span className="font-mono text-xs text-cream/40 block mt-1">
                    Authentic Seeraga Samba • 100% Halal
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="px-6 py-4 rounded-sm bg-cream/10 hover:bg-cream/15 text-cream border border-cream/20 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-gold-soft" />
                    <span>ADD TO BAG</span>
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-4 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-gold-brass/25 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ORDER VIA WHATSAPP</span>
                  </button>
                </div>
              </div>

              {orderPlaced && (
                <div className="mt-4 p-3 rounded-sm bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Opening WhatsApp with your pre-filled Karur order details...</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
