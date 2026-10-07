"use client";
import React from "react";
import { Printer } from "lucide-react";

export default function PrintableMenuModal() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center space-x-1.5 text-xs font-mono text-cream/50 hover:text-gold-soft transition-colors"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>Printable Menu</span>
    </button>
  );
}
