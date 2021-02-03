import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import translationEn from './locales/en/translation.json';
import translationGe from './locales/ge/translation.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: 'ge',
    fallbackLng: 'en',

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      ge: {
        translations: translationGe,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
