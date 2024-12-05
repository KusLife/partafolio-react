import React, { createContext, useState, useContext } from 'react';
import en from '../translation/en.json';
import es from '../translation/es.json';
import ua from '../translation/ua.json';

// Create a Language Context
const LanguageContext = createContext();

// Define available languages and their translations
const translations = {
  en,
  es,
  ua,
};

// Provider component to wrap the entire app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
