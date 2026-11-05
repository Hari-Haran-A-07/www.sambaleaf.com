'use client';

import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, MessageSquarePlus, MapPin } from 'lucide-react';
import { REVIEWS_DATA, getAverageRating } from '../lib/reviewsData';

export default function CustomerReviews() {
  const [filter, setFilter] = useState<'all' | 'mutton' | 'chicken'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const { score, totalCount, satisfactionRate } = getAverageRating();

  const filtered = REVIEWS_DATA.filter(r => {
    if (filter === 'mutton') return r.orderItem.toLowerCase().includes('mutton');
    if (filter === 'chicken') return r.orderItem.toLowerCase().includes('chicken');
    return true;
  });

  return (
    <section className="py-20 bg-charcoal-pure border-t border-cream/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Rating Overview */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-gold" />
            <span>Real Karur Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-cream font-bold mb-4">
            Loved Across Karur & Beyond
          </h2>
          <p className="text-cream/70 text-base leading-relaxed">
            Authentic feedback from biryani lovers who savor our daily handi-crafted Seeraga Samba creations.
          </p>

          {/* Social Proof Metric Banner */}
          <div className="mt-8 grid grid-cols-3 gap-4 bg-charcoal-deep/80 border border-cream/10 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-gold">{score} / 5</div>
              <div className="flex justify-center gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-xs text-cream/50">Average Rating</div>
            </div>
            <div className="border-x border-cream/10 px-2">
              <div className="text-3xl sm:text-4xl font-bold font-serif text-cream">{satisfactionRate}%</div>
              <div className="text-xs text-emerald-400 font-semibold my-1">Verified Satisfaction</div>
              <div className="text-xs text-cream/50">Based on 1,200+ Handis</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-serif text-cream">100%</div>
              <div className="text-xs text-gold font-semibold my-1">Pure Halal Certified</div>
              <div className="text-xs text-cream/50">Zero Chemical Flavors</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gold text-charcoal-pure shadow-md font-bold'
                  : 'bg-charcoal-deep text-cream/70 hover:text-cream border border-cream/10'
              }`}
            >
              All Feedback ({REVIEWS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('mutton')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'mutton'
                  ? 'bg-gold text-charcoal-pure shadow-md font-bold'
                  : 'bg-charcoal-deep text-cream/70 hover:text-cream border border-cream/10'
              }`}
            >
              Mutton Biryani
            </button>
            <button
              onClick={() => setFilter('chicken')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'chicken'
                  ? 'bg-gold text-charcoal-pure shadow-md font-bold'
                  : 'bg-charcoal-deep text-cream/70 hover:text-cream border border-cream/10'
              }`}
            >
              Chicken Biryani
            </button>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold text-xs font-semibold transition"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Share Your Experience</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(rev => (
            <div
              key={rev.id}
              className="bg-charcoal-deep/90 border border-cream/10 hover:border-gold/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-cream/40">{rev.date}</span>
                </div>

                <p className="text-cream/90 text-sm leading-relaxed mb-3 italic">
                  "{rev.comment}"
                </p>

                {rev.tamilComment && (
                  <p className="text-gold/80 text-xs font-tamil mb-4 leading-normal">
                    {rev.tamilComment}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-cream/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-cream text-sm flex items-center gap-1.5">
                      {rev.author}
                      {rev.verifiedBuyer && (
                        <span title="Verified Customer">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-cream/50 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-gold" />
                      {rev.location}
                    </div>
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-cream/5 text-gold border border-gold/20">
                    {rev.orderItem}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Experience Sharing */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-charcoal-pure/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-charcoal-deep border border-gold/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
              <h3 className="text-xl font-serif text-cream font-bold mb-2">We Value Your Words</h3>
              <p className="text-xs text-cream/70 mb-4">
                Tell us about the aroma, texture, and taste of your Sambaleaf Dum experience.
              </p>
              <textarea
                placeholder="How was the Seeraga Samba grain texture? Was the dum spice balanced?"
                rows={4}
                className="w-full bg-charcoal-near border border-cream/20 rounded-xl p-3 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold mb-4"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-cream/60 hover:text-cream"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Nandri! Your review has been submitted for verification.');
                    setShowSubmitModal(false);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-gold text-charcoal-pure hover:bg-gold-light"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
