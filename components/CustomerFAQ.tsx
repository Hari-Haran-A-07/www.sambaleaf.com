'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Check } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  category: 'craft' | 'halal' | 'ordering';
}

const FAQS: FaqItem[] = [
  {
    q: 'Why does SAMBALEAF only offer four dishes?',
    a: 'We believe culinary mastery comes from uncompromising focus. Rather than preparing dozens of mediocre dishes, we devote all our culinary devotion to mastering authentic Dindigul Chicken Biryani, Mutton Biryani, fresh Onion Raitha, and traditional Thalcha.',
    category: 'craft'
  },
  {
    q: 'What makes Seeraga Samba rice superior for Dindigul biryani?',
    a: 'Seeraga Samba is an indigenous small-grain rice from the Cauvery basin of Tamil Nadu. Its high-amylose starch structure drinks in the spiced meat jus and ghee into the core of each grain without breaking, unlike basmati which only coats the exterior.',
    category: 'craft'
  },
  {
    q: 'Is all meat 100% Halal certified?',
    a: 'Yes, without exception. All poultry and mutton are strictly 100% Halal, hand-slaughtered by practicing Muslim butchers in verified regional abattoirs. Our kitchen is 100% alcohol-free.',
    category: 'halal'
  },
  {
    q: 'How does delivery work across Karur?',
    a: 'Orders are prepared in timed dum batches and dispatched in insulated thermal packaging to keep the biryani piping hot upon arrival at your doorstep anywhere within Karur city limits and outer rings.',
    category: 'ordering'
  },
  {
    q: 'Do you cater for weddings and family gatherings?',
    a: 'Yes! We cater from 15 to 500 guests with sealed copper degas, fresh banana leaves, and complimentary accompaniments. You can get an instant estimate on our Catering page.',
    category: 'ordering'
  },
  {
    q: 'Do you use any artificial food coloring or MSG?',
    a: 'Never. The deep rich golden-amber tone comes exclusively from slow-caramelized shallots, Ramnad Mundu red chillies, and natural turmeric. Zero artificial additives.',
    category: 'craft'
  }
];

export default function CustomerFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'all' | 'craft' | 'halal' | 'ordering'>('all');

  const filtered = FAQS.filter((f) => {
    const matchCat = category === 'all' || f.category === category;
    const matchSearch =
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="faq" className="py-24 bg-charcoal-near text-cream border-t border-cream/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-3 border border-gold/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-bold">
            Frequently Asked <span className="italic text-gold font-normal">Questions</span>
          </h2>
          <p className="text-xs text-cream/70 mt-2">
            Everything you need to know about our sourcing, dum technique, and delivery in Karur.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-cream/40 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Filter by question, ingredient, or delivery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-charcoal-deep border border-cream/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-gold"
            />
          </div>

          <div className="flex gap-2">
            {(['all', 'craft', 'halal', 'ordering'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize border transition ${
                  category === cat
                    ? 'bg-gold text-charcoal-pure border-gold font-bold shadow'
                    : 'bg-charcoal-deep border-cream/10 text-cream/70 hover:border-cream/20'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat === 'craft' ? 'Culinary Craft' : cat === 'halal' ? 'Halal Trust' : 'Ordering & Delivery'}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-cream/50 bg-charcoal-deep rounded-2xl border border-cream/10">
              No questions found matching your search. Have a question? Reach us directly on WhatsApp!
            </div>
          ) : (
            filtered.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-charcoal-deep/80 border border-cream/10 p-5 transition-all">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between text-left font-serif text-base sm:text-lg text-cream focus:outline-none"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      openIdx === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIdx === i && (
                  <p className="mt-3 text-xs sm:text-sm text-cream/80 font-light leading-relaxed border-t border-cream/10 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
