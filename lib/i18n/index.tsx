"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang } from "./translations";

export type { Lang };

export type Theme = "light" | "dark";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: typeof translations["en"];
}

const I18nContext = createContext<I18nContextValue>({} as I18nContextValue);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("ta-lang") as Lang | null;
    const savedTheme = localStorage.getItem("ta-theme") as Theme | null;
    if (savedLang === "en" || savedLang === "fr") setLangState(savedLang);
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ta-theme", theme);
  }, [theme, mounted]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ta-lang", l);
    document.documentElement.lang = l;
  };

  const setTheme = (t: Theme) => setThemeState(t);

  const t = translations[lang] as typeof translations["en"];

  return (
    <I18nContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
