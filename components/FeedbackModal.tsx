'use client';

import React, { useState } from 'react';
import { MessageSquareHeart, Star, X, Check, HeartHandshake } from 'lucide-react';

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const tags = [
    'Aroma 10/10',
    'Grain Separated & Soft',
    'Meat Melt-in-Mouth',
    'Pure A2 Ghee Sheen',
    'Piping Hot Delivery',
    'Authentic Thalcha Tang'
  ];

  const toggleTag = (t: string) => {
    if (selectedTags.includes(t)) {
      setSelectedTags(selectedTags.filter(item => item !== t));
    } else {
      setSelectedTags([...selectedTags, t]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewText = `🌟 *SAMBALEAF FEAST FEEDBACK*%0A*Rating:* ${rating}/5 Stars%0A*Highlights:* ${selectedTags.join(', ') || 'Authentic Dum'}%0A*Comment:* ${comment || 'Delicious Seeraga Samba taste!'}`;
    window.open(`https://wa.me/919876543210?text=${reviewText}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-near border border-cream/20 text-cream/70 hover:text-gold text-xs font-medium transition"
        title="Share your dining feedback"
      >
        <MessageSquareHeart className="w-3.5 h-3.5 text-gold" />
        <span>Rate Your Dum Experience</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-pure/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal-deep border border-gold/40 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <HeartHandshake className="w-4 h-4 text-gold" />
                  <span className="text-xs uppercase font-bold tracking-widest text-gold">Every Bite Matters</span>
                </div>
                <h3 className="text-2xl font-serif text-cream font-bold">
                  How was your Sambaleaf Feast?
                </h3>
                <p className="text-xs text-cream/70 mt-1 mb-6">
                  Help our Karur culinary team uphold the sacred standards of Dindigul Seeraga Samba cooking.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-2 py-2 bg-charcoal-pure/60 rounded-2xl border border-cream/10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating ? 'fill-gold text-gold' : 'text-cream/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Sensory Tags */}
                  <div>
                    <label className="text-xs text-cream/60 block mb-2 font-semibold">What stood out to your senses?</label>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleTag(t)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                            selectedTags.includes(t)
                              ? 'bg-gold text-charcoal-pure border-gold'
                              : 'bg-charcoal-near border-cream/10 text-cream/60 hover:text-cream'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comments */}
                  <textarea
                    rows={3}
                    placeholder="Share any special notes with our Ustad..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-charcoal-near border border-cream/20 rounded-xl p-3 text-xs text-cream placeholder-cream/40 focus:outline-none focus:border-gold"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gold hover:bg-gold-light text-charcoal-pure font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-gold/25"
                  >
                    Send Feedback Directly to Chef
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-xl font-serif font-bold text-cream">நன்றி (Thank You)!</h4>
                <p className="text-xs text-cream/70 mt-1">
                  Your feedback helps us keep the dum fire burning true to tradition.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
