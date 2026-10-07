"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

export default function Toast({ message, visible }: { message: string; visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="fixed bottom-20 right-6 z-50 p-4 rounded-sm bg-charcoal-deep border border-gold-soft text-cream text-xs font-mono flex items-center space-x-2 shadow-2xl animate-fadeIn">
      <CheckCircle className="w-4 h-4 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}
