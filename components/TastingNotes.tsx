"use client";
import React from "react";
import { Sparkles, UtensilsCrossed } from "lucide-react";

export default function TastingNotes() {
  return (
    <div className="p-6 rounded-sm bg-charcoal-warm/60 border border-cream/10 text-cream my-8">
      <div className="flex items-center space-x-2 text-gold-soft mb-3">
        <UtensilsCrossed className="w-4 h-4" />
        <span className="font-mono text-xs uppercase tracking-wider">How to Savor Seeraga Samba Biryani</span>
      </div>
      <div className="space-y-3 font-body text-xs text-cream/80 font-light leading-relaxed">
        <p>1. <strong>First Bite Pure:</strong> Taste a forkful of biryani rice alone to savor the nutty fragrance of aged Seeraga Samba and whole roasted spices.</p>
        <p>2. <strong>Add Thalcha:</strong> Drizzle a spoonful of velvety Thalcha over the meat to marry the gentle tamarind tang with slow-cooked marrow jus.</p>
        <p>3. <strong>Cool with Raitha:</strong> Cleanse the palate with crisp shallot curd raitha between rich, aromatic bites.</p>
      </div>
    </div>
  );
}
