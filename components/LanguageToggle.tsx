"use client";
import React from "react";
import { useI18n } from "../lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center space-x-1 bg-charcoal-deep/80 border border-cream/15 rounded-full p-0.5 text-[10px] font-mono">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-0.5 rounded-full transition-colors ${lang === "en" ? "bg-gold-soft text-charcoal-near font-bold" : "text-cream/60 hover:text-cream"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ta")}
        className={`px-2 py-0.5 rounded-full transition-colors ${lang === "ta" ? "bg-gold-soft text-charcoal-near font-bold" : "text-cream/60 hover:text-cream"}`}
      >
        à®¤à®®à®¿à®´à¯
      </button>
    </div>
  );
}
