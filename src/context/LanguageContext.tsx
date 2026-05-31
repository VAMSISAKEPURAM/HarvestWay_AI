"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/locales/translations";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (keyPath: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Load language from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("harvestway-lang");
    if (saved && (saved === "en" || saved === "te" || saved === "hi" || saved === "kn")) {
      setLangState(saved as Language);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("harvestway-lang", newLang);
  };

  // Helper to translate nested paths like 'hero.tagline' or 'features.list.diseaseTitle'
  const t = (keyPath: string): string => {
    const dict = (translations[lang] || translations.en) as unknown as Record<string, unknown>;
    const value = keyPath.split(".").reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);

    if (value === undefined) {
      // Fallback to English if translation is missing in the chosen language
      const fallbackDict = translations.en as unknown as Record<string, unknown>;
      const fallbackValue = keyPath.split(".").reduce<unknown>((acc, key) => {
        if (acc && typeof acc === "object" && key in acc) {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, fallbackDict);
      return typeof fallbackValue === "string" ? fallbackValue : keyPath;
    }

    return typeof value === "string" ? value : keyPath;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
