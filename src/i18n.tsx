import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanbuageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanbuageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["localStorage", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      htmlTag: document.documentElement,
    },
  });

export default i18n;
