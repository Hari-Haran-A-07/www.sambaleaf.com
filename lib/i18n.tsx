"use client";
import React, { createContext, useContext, useState } from "react";
import { en } from "./translations/en";
import { ta } from "./translations/ta";

type Lang = "en" | "ta";
interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof en;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "en" ? en : (ta as unknown as typeof en);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
