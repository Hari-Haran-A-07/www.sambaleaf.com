"use client";
import React from "react";
import { Clock } from "lucide-react";

export default function DumBatchCountdown() {
  return (
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream/5 border border-cream/10 text-xs font-mono text-cream/70">
      <Clock className="w-3.5 h-3.5 text-gold-soft animate-spin-slow" />
      <span>Next Dum Batch Opening: Lunch 12:30 PM &bull; Dinner 7:30 PM</span>
    </div>
  );
}
