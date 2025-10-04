import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  // Carrega traduções de um backend (ex: pasta /public/locales)
  .use(HttpApi)
  // Detecta o idioma do usuário
  .use(LanguageDetector)
  // Passa a instância do i18n para o react-i18next
  .use(initReactI18next)
  .init({
    debug: true,
    // Idiomas suportados
    supportedLngs: ["pt", "en"],
    // Idioma padrão caso a detecção falhe
    fallbackLng: "pt",
    detection: {
      // Ordem e métodos de detecção de idioma
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    // Configurações do backend para carregar os arquivos JSON
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    // O react-i18next já escapa os valores por padrão
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
