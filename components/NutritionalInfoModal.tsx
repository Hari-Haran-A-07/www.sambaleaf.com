"use client";
import React, { useState } from "react";
import { Info, X } from "lucide-react";

const NUTRITION = [
  { dish: "Chicken Biryani", cal: "580 kcal", protein: "38g", carbs: "64g", fat: "18g" },
  { dish: "Mutton Biryani", cal: "690 kcal", protein: "44g", carbs: "62g", fat: "26g" },
  { dish: "Onion Raitha", cal: "75 kcal", protein: "4g", carbs: "6g", fat: "3.5g" },
  { dish: "Thalcha", cal: "110 kcal", protein: "5g", carbs: "14g", fat: "4g" }
];

export default function NutritionalInfoModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[11px] font-mono text-cream/50 hover:text-gold-soft underline flex items-center space-x-1"
      >
        <Info className="w-3 h-3" />
        <span>Nutritional Estimates</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-near/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-charcoal-deep border border-cream/20 rounded-sm p-6 max-w-md w-full text-cream shadow-2xl relative">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-cream/50 hover:text-cream">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-xl mb-4">Nutritional Information (Per Portion)</h3>
            <div className="space-y-3 font-mono text-xs">
              {NUTRITION.map((n) => (
                <div key={n.dish} className="p-3 bg-charcoal-warm/50 border border-cream/10 rounded-sm flex justify-between items-center">
                  <span className="text-cream font-medium">{n.dish}</span>
                  <div className="flex space-x-3 text-gold-soft">
                    <span>{n.cal}</span>
                    <span className="text-cream/40">â€¢</span>
                    <span>P: {n.protein}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
