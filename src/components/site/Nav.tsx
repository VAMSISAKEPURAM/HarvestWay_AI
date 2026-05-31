"use client";

import { Logo } from "./Logo";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { Language } from "@/locales/translations";

export function Nav() {
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "#features", labelPath: "nav.features" },
    { href: "#ecosystem", labelPath: "nav.ecosystem" },
    { href: "#product", labelPath: "nav.product" },
    { href: "#stories", labelPath: "nav.stories" },
    { href: "#vision", labelPath: "nav.vision" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass-strong px-4 py-3 sm:mx-4 sm:px-6 lg:mx-auto">
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-display text-base font-semibold tracking-tight">
            Harvest<span className="text-gradient-brand">Way</span>AI
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.labelPath)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown in ribbon */}
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10">
            <Globe className="h-3.5 w-3.5 text-[color:var(--brand-blue)]" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent border-none text-xs font-medium text-foreground focus:outline-none cursor-pointer pr-0.5"
              style={{ colorScheme: "dark" }}
            >
              <option value="en" className="bg-[#0b130f] text-white">
                EN
              </option>
              <option value="te" className="bg-[#0b130f] text-white">
                తెలుగు
              </option>
              <option value="hi" className="bg-[#0b130f] text-white">
                हिन्दी
              </option>
              <option value="kn" className="bg-[#0b130f] text-white">
                ಕನ್ನಡ
              </option>
            </select>
          </div>

          <a
            href="#cta"
            className="inline-flex rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-green transition-transform hover:-translate-y-0.5"
          >
            {t("nav.getStarted")}
          </a>
        </div>
      </div>
    </header>
  );
}
