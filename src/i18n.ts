import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import it from './locales/it.json';
import de from './locales/de.json';
import es from './locales/es.json';

const resources = {
    en: { translation: en },
    it: { translation: it },
    de: { translation: de },
    es: { translation: es }
};

i18n
    // Detects the user's language based on browser settings, localStorage, etc.
    .use(LanguageDetector)
    // Passes the i18n instance to react-i18next.
    .use(initReactI18next)
    // Initialization
    .init({
        resources,
        // We use fallbackLng instead of lng so the detector can do its job first.
        fallbackLng: 'en',
        supportedLngs: ['en', 'it', 'de', 'es'],

        interpolation: {
            escapeValue: false, // React already safe from XSS
        },

        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage'], // cache the language in localStorage
        }
    });

export default i18n;
