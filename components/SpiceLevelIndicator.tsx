"use client";
import React from "react";
import { Flame } from "lucide-react";

export default function SpiceLevelIndicator({ level = 2 }: { level?: number }) {
  return (
    <div className="inline-flex items-center space-x-1.5" title={`Spice Profile: Balanced Dindigul Warmth (${level}/3)`}>
      <span className="font-mono text-[10px] uppercase text-cream/50">Spice:</span>
      <div className="flex space-x-0.5">
        {[1, 2, 3].map((i) => (
          <Flame
            key={i}
            className={`w-3.5 h-3.5 ${i <= level ? "text-terracotta fill-terracotta" : "text-cream/20"}`}
          />
        ))}
      </div>
    </div>
  );
}
