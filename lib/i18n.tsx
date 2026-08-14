"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "tr";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function loadMessages(locale: Locale) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const msgs = require(`../locales/${locale}.json`);
    return msgs;
  } catch (e) {
    return {};
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const initial = (typeof window !== "undefined" && (localStorage.getItem("locale") as Locale)) || "tr";
  const [locale, setLocaleState] = useState<Locale>(initial);
  const [messages, setMessages] = useState<Record<string, string>>(loadMessages(initial));

  useEffect(() => {
    setMessages(loadMessages(locale));
    try {
      localStorage.setItem("locale", locale);
    } catch (e) {
      // ignore
    }
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const t = (key: string) => {
    return messages[key] ?? key;
  };

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export default I18nProvider;
