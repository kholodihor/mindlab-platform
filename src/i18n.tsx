import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enJSON from "./locales/en.json"
import ukJSON from "./locales/uk.json"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "uk",
    resources: {
      en: {
        translation: enJSON
      },
      uk: {
        translation: ukJSON
      }
    },
    lng: "uk"
  })
