'use client';

import React from 'react';
import { useStore } from '../lib/store';
import { X, Plus, Minus, Trash2, Send, ShoppingBag, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    kitchenSettings,
    cartTotal,
    cartCount,
  } = useStore();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C99A3A', '#D6B56A', '#A95332', '#304D35'],
      });
    } catch {
      // fallback
    }

    let itemsSummary = '';
    cart.forEach((item, index) => {
      const accList = [];
      if (item.includeRaitha) accList.push('Raitha');
      if (item.includeThalcha) accList.push('Thalcha');
      const accText = accList.length > 0 ? ` [With ${accList.join(' + ')}]` : '';

      itemsSummary += `${index + 1}. *${item.name}* × ${item.quantity}${accText}\n`;
    });

    const message = encodeURIComponent(
      `*SAMBALEAF — NEW ORDER INQUIRY (KARUR)*\n\n` +
      `*Order Details:*\n${itemsSummary}\n` +
      `*Total Items:* ${cartCount}\n` +
      `*Dietary:* 100% Halal Certified\n\n` +
      `*Delivery Area in Karur:* [Please send delivery address]\n\n` +
      `Please confirm availability and dispatch time!`
    );

    const whatsappUrl = `https://wa.me/${kitchenSettings.whatsappPlaceholder}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-charcoal-near/80 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-charcoal-deep border-l border-cream/15 text-cream flex flex-col justify-between shadow-2xl animate-slideLeft">
          {/* Header */}
          <div className="p-6 border-b border-cream/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-gold-soft" />
              <h2 className="font-display text-2xl text-cream font-medium">Your Order Bag</h2>
              <span className="font-mono text-xs bg-cream/10 px-2 py-0.5 rounded-full text-gold-soft">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-cream/50 hover:text-cream rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-cream/50">
                <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-cream/20" />
                <p className="font-display text-xl text-cream/70 mb-1">Your bag is empty</p>
                <p className="font-body text-xs font-light">
                  Explore our four signature Dindigul dishes and add your selection.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-sm bg-charcoal-warm/70 border border-cream/10 flex flex-col justify-between space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-lg text-cream">{item.name}</h4>
                      <div className="flex items-center space-x-2 text-[11px] font-mono text-gold-soft/80 mt-0.5">
                        {item.includeRaitha && <span>+ Onion Raitha</span>}
                        {item.includeRaitha && item.includeThalcha && <span>•</span>}
                        {item.includeThalcha && <span>+ Thalcha</span>}
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-cream/30 hover:text-terracotta transition-colors p-1"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-cream/5">
                    <div className="flex items-center space-x-2 bg-charcoal-deep rounded-sm px-2 py-1 border border-cream/10">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-cream/60 hover:text-cream p-1"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-xs text-cream px-2 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-cream/60 hover:text-cream p-1"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-mono text-xs text-cream/70">
                      Portion: {item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-cream/10 bg-charcoal-near/90 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cream/60">
                <div className="flex items-center space-x-1.5 text-gold-soft">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Halal Verified</span>
                </div>
                <button
                  onClick={clearCart}
                  className="text-cream/40 hover:text-cream underline text-[11px]"
                >
                  Clear all
                </button>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 rounded-sm bg-gradient-to-r from-gold-brass via-terracotta to-gold-turmeric text-charcoal-near font-semibold text-xs tracking-[0.2em] uppercase hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-gold-brass/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM ORDER ON WHATSAPP</span>
              </button>

              <p className="text-[10px] font-mono text-center text-cream/40">
                Direct dispatch from Karur Cloud Kitchen • Pre-orders accepted
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
