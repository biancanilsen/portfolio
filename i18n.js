import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptTranslations from "./app/public/locales/pt.json";
import enTranslations from "./app/public/locales/en.json";
import esTranslations from "./app/public/locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    supportedLngs: ["pt", "en", "es"],
    fallbackLng: "pt",
    
    resources: {
      pt: {
        translation: ptTranslations,
      },
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },

    detection: {
      order: ["localStorage", "navigator"], 
      caches: ["localStorage"],
    },
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;