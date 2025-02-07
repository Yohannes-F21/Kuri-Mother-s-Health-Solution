import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import es from "./es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en",
    // interpolation: {
    //     escapeValue: false,
    //     format: (value, format, lng) => {
    //         if (format === 'currency') {
    //             return new Intl.NumberFormat(lng, {
    //                 style: 'currency',
    //                 currency: lng === 'es' ? 'EUR' : 'USD',
    //             }).format(value);
    //         }
    //         if (format === 'datetime') {
    //             return new Intl.DateTimeFormat(lng, {
    //                 year: 'numeric',
    //                 month: 'long',
    //                 day: 'numeric',
    //             }).format(new Date(value));
    //         }
    //         return value;
    //     },
    // },
  });

export default i18n;
