'use client';

import React from 'react';
import { useStore } from '../lib/store';
import { X, Sliders, Check, ToggleLeft, ToggleRight, Sparkles, RefreshCw, Phone } from 'lucide-react';

export default function AdminDrawer() {
  const {
    isAdminOpen,
    setIsAdminOpen,
    menuItems,
    updateMenuItem,
    kitchenSettings,
    updateKitchenSettings,
  } = useStore();

  if (!isAdminOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsAdminOpen(false)}
        className="absolute inset-0 bg-charcoal-near/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-charcoal-deep border-l border-cream/15 text-cream flex flex-col justify-between shadow-2xl animate-slideLeft">
          {/* Header */}
          <div className="p-6 border-b border-cream/10 flex items-center justify-between bg-charcoal-near/90">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-sm bg-gold-soft/10 text-gold-soft border border-gold-soft/30">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-cream font-medium">Kitchen CMS Preview</h2>
                <p className="font-mono text-[10px] text-gold-soft tracking-wider uppercase">
                  Client Content &amp; Inventory Management
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-cream/50 hover:text-cream rounded-full transition-colors"
              aria-label="Close CMS preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CMS Controls Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-8">
            {/* Kitchen Live Status Controls */}
            <div className="p-5 rounded-sm bg-charcoal-warm/60 border border-cream/10 space-y-4">
              <span className="font-mono text-xs text-gold-soft uppercase tracking-widest block">
                01. KITCHEN OPERATING STATUS
              </span>

              <div>
                <label className="font-mono text-[11px] text-cream/60 uppercase block mb-1.5">
                  Header Status Text
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() =>
                      updateKitchenSettings({
                        isOpen: true,
                        statusText: 'SERVING KARUR',
                      })
                    }
                    className={`p-2.5 rounded-sm font-mono text-xs border text-left transition-colors ${
                      kitchenSettings.statusText === 'SERVING KARUR'
                        ? 'bg-leaf-deep border-leaf text-cream font-medium'
                        : 'bg-charcoal-deep border-cream/10 text-cream/60'
                    }`}
                  >
                    ● SERVING KARUR
                  </button>

                  <button
                    onClick={() =>
                      updateKitchenSettings({
                        isOpen: true,
                        statusText: 'OPEN FOR ORDERS',
                      })
                    }
                    className={`p-2.5 rounded-sm font-mono text-xs border text-left transition-colors ${
                      kitchenSettings.statusText === 'OPEN FOR ORDERS'
                        ? 'bg-leaf-deep border-leaf text-cream font-medium'
                        : 'bg-charcoal-deep border-cream/10 text-cream/60'
                    }`}
                  >
                    ● OPEN FOR ORDERS
                  </button>

                  <button
                    onClick={() =>
                      updateKitchenSettings({
                        isOpen: true,
                        statusText: 'PRE-ORDERS ONLY',
                      })
                    }
                    className={`p-2.5 rounded-sm font-mono text-xs border text-left transition-colors ${
                      kitchenSettings.statusText === 'PRE-ORDERS ONLY'
                        ? 'bg-terracotta/40 border-terracotta text-cream font-medium'
                        : 'bg-charcoal-deep border-cream/10 text-cream/60'
                    }`}
                  >
                    ● PRE-ORDERS ONLY
                  </button>

                  <button
                    onClick={() =>
                      updateKitchenSettings({
                        isOpen: false,
                        statusText: 'SOLD OUT FOR TODAY',
                      })
                    }
                    className={`p-2.5 rounded-sm font-mono text-xs border text-left transition-colors ${
                      kitchenSettings.statusText === 'SOLD OUT FOR TODAY'
                        ? 'bg-red-950/80 border-red-500/50 text-red-200 font-medium'
                        : 'bg-charcoal-deep border-cream/10 text-cream/60'
                    }`}
                  >
                    ● SOLD OUT FOR TODAY
                  </button>
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-cream/60 uppercase block mb-1.5">
                  Client WhatsApp Number (for orders)
                </label>
                <input
                  type="text"
                  value={kitchenSettings.whatsappPlaceholder}
                  onChange={(e) => updateKitchenSettings({ whatsappPlaceholder: e.target.value })}
                  placeholder="e.g. 919876543210"
                  className="w-full bg-charcoal-deep p-3 rounded-sm border border-cream/15 text-cream text-xs font-mono focus:border-gold-soft focus:outline-none"
                />
              </div>
            </div>

            {/* Menu Items & Pricing Manager */}
            <div className="space-y-4">
              <span className="font-mono text-xs text-gold-soft uppercase tracking-widest block">
                02. FOUR DISHES CONFIGURATION
              </span>

              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-sm bg-charcoal-warm/60 border border-cream/10 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-base text-cream">{item.name}</h4>
                      <span className="font-tamil text-xs text-cream/40">{item.tamilName}</span>
                    </div>

                    <button
                      onClick={() => updateMenuItem(item.id, { availability: !item.availability })}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border transition-colors ${
                        item.availability
                          ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                          : 'bg-red-950/70 border-red-500/50 text-red-300'
                      }`}
                    >
                      {item.availability ? 'AVAILABLE' : 'SOLD OUT'}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-cream/5">
                    <div>
                      <label className="text-[10px] font-mono text-cream/50 uppercase block mb-1">
                        Price Display String
                      </label>
                      <input
                        type="text"
                        value={item.pricePlaceholder}
                        onChange={(e) =>
                          updateMenuItem(item.id, { pricePlaceholder: e.target.value })
                        }
                        className="w-full bg-charcoal-deep p-2 rounded-sm border border-cream/15 text-cream text-xs font-mono focus:border-gold-soft focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-cream/50 uppercase block mb-1">
                        Serving Info
                      </label>
                      <input
                        type="text"
                        value={item.servingInfo}
                        onChange={(e) =>
                          updateMenuItem(item.id, { servingInfo: e.target.value })
                        }
                        className="w-full bg-charcoal-deep p-2 rounded-sm border border-cream/15 text-cream text-xs font-mono focus:border-gold-soft focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cream/10 bg-charcoal-near/90 flex items-center justify-between">
            <span className="text-xs font-mono text-cream/50">
              Changes update immediately in preview
            </span>
            <button
              onClick={() => setIsAdminOpen(false)}
              className="px-6 py-2.5 rounded-sm bg-gold-soft text-charcoal-near font-mono text-xs font-semibold uppercase tracking-wider hover:brightness-110"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
