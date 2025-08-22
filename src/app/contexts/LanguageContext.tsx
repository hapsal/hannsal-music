'use client'

import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'fi';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Record<string, string>;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fi',
  setLanguage: () => {},
  t: translations.fi,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');
  
  // Load saved language preference on initial render
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fi')) {
      setLanguage(savedLang);
    }
  }, []);
  
  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);
  
  const value = {
    language,
    setLanguage,
    t: translations[language],
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);