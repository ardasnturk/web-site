import i18n, { type BackendModule } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { languages } from "./languages";

// Each language is its own chunk, so visitors only download the one they read
const backend: BackendModule = {
  type: "backend",
  init() {},
  read(language, _namespace, callback) {
    import(`./locales/${language}.json`).then(
      (module) => callback(null, module.default),
      (error) => callback(error, null)
    );
  },
};

const applyLanguage = (language: string) => {
  const root = document.documentElement;
  root.lang = language;
  root.dir = i18n.dir(language);
  document.title = i18n.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
};

export const i18nReady = i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: languages.map((language) => language.code),
    load: "languageOnly",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },

    react: {
      useSuspense: false,
    },
  })
  .then(() => {
    applyLanguage(i18n.resolvedLanguage ?? "en");
    i18n.on("languageChanged", applyLanguage);
  });

export default i18n;
