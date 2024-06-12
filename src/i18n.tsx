import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enJSON from "./locales/en.json"
import uaJSON from "./locales/ua.json"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ua",
    resources: {
      en: {
        translation: enJSON
      },
      ua: {
        translation: uaJSON
      }
    },
    lng: "ua"
  })
