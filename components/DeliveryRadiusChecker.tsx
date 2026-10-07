"use client";
import React, { useState } from "react";
import { MapPin, CheckCircle, Clock } from "lucide-react";

export default function DeliveryRadiusChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const checkArea = () => {
    if (!query) return;
    const lower = query.toLowerCase();
    if (lower.includes("karur") || lower.includes("pasupathi") || lower.includes("vengamedu") || lower.includes("thanthoni") || lower.includes("gandhi")) {
      setResult("Direct 30-45 min thermal delivery zone! Pre-orders accepted for lunch and dinner dum.");
    } else {
      setResult("Serving this location via our Karur cloud kitchen dispatch network. Please confirm via WhatsApp!");
    }
  };

  return (
    <div className="p-6 rounded-sm bg-charcoal-warm/70 border border-cream/15 text-cream my-8">
      <div className="flex items-center space-x-2 text-gold-soft mb-2">
        <MapPin className="w-4 h-4" />
        <span className="font-mono text-xs uppercase tracking-wider">Karur Delivery Checker</span>
      </div>
      <p className="font-body text-xs text-cream/70 mb-4">Enter your neighborhood or locality in Karur to check dispatch estimate:</p>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Thanthonimalai / Vengamedu"
          className="flex-1 bg-charcoal-deep p-2.5 rounded-sm border border-cream/20 text-xs text-cream focus:outline-none focus:border-gold-soft"
        />
        <button
          onClick={checkArea}
          className="px-4 py-2 bg-gold-soft text-charcoal-near text-xs font-mono font-semibold uppercase rounded-sm hover:brightness-110"
        >
          CHECK
        </button>
      </div>
      {result && (
        <div className="mt-3 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-sm text-xs font-mono text-emerald-300 flex items-start space-x-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}
