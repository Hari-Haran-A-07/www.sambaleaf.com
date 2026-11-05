'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, SlidersHorizontal, Plus, Check } from 'lucide-react';
import { MENU_ITEMS } from '../lib/data';
import { MenuItem } from '../lib/types';
import { useStore } from '../lib/store';
import { formatINR } from '../lib/formatters';

export default function MenuSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<'all' | 'biryani' | 'accompaniment'>('all');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart, setIsCartOpen } = useStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tamilName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || item.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  const handleQuickAdd = (item: MenuItem) => {
    addToCart({
      menuItemId: item.id,
      quantity: 1,
      includeRaitha: true,
      includeThalcha: true
    });
    setIsOpen(false);
    setIsCartOpen(true);
  };

  return (
    <>
      <div className="max-w-xl mx-auto my-6 px-4">
        <button
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
          className="w-full bg-charcoal-deep/80 hover:bg-charcoal-deep border border-cream/20 hover:border-gold/40 rounded-2xl px-4 py-3 flex items-center justify-between text-xs text-cream/50 transition-all shadow-md group"
        >
          <div className="flex items-center gap-2.5">
            <Search className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
            <span>Search dishes, spices, accompaniments...</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-charcoal-near border border-cream/10 text-[10px] font-mono text-cream/40">
            Press /
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-start justify-center pt-20 p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[80vh] flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b border-cream/10">
              <Search className="w-5 h-5 text-gold shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search Seeraga Samba Chicken, Mutton, Thalcha, Raitha..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-cream placeholder-cream/40 text-base focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-cream/40 hover:text-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 py-3 border-b border-cream/10">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                  selectedTag === 'all'
                    ? 'bg-gold text-charcoal-pure'
                    : 'bg-charcoal-near text-cream/60 hover:text-cream'
                }`}
              >
                All Four Offerings
              </button>
              <button
                onClick={() => setSelectedTag('biryani')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                  selectedTag === 'biryani'
                    ? 'bg-gold text-charcoal-pure'
                    : 'bg-charcoal-near text-cream/60 hover:text-cream'
                }`}
              >
                Handi Biryanis
              </button>
              <button
                onClick={() => setSelectedTag('accompaniment')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold ${
                  selectedTag === 'accompaniment'
                    ? 'bg-gold text-charcoal-pure'
                    : 'bg-charcoal-near text-cream/60 hover:text-cream'
                }`}
              >
                Accompaniments
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto divide-y divide-cream/5 py-2">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-cream/40">
                  No matching offerings found. We craft strictly four authentic dishes.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div key={item.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-serif font-bold text-cream flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className="text-xs font-tamil text-gold font-normal">({item.tamilName})</span>
                      </div>
                      <div className="text-xs text-cream/60 line-clamp-1 mt-0.5">{item.tagline}</div>
                      <div className="text-xs font-bold text-gold mt-1">
                        {item.priceNumeric ? formatINR(item.priceNumeric) : item.pricePlaceholder}
                      </div>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(item)}
                      className="px-3.5 py-1.5 rounded-xl bg-gold/15 hover:bg-gold text-gold hover:text-charcoal-pure text-xs font-semibold border border-gold/30 transition shrink-0 flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
