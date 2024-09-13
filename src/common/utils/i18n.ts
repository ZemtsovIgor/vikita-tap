import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../assets/locales/en/translation.json';
import ru from '../../assets/locales/ru/translation.json';
import pt from '../../assets/locales/pt/translation.json';
import cn from '../../assets/locales/cn/translation.json';

// @ts-ignore
const webApp = window.Telegram?.WebApp;

export const LANGUAGES = new Map([
  ['en', 'English'],
  ['ru', 'Русский'],
  ['pt', 'Portuguese'],
  ['zh', '中国人'],
]);

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  },
  pt: {
    translation: pt
  },
  zh: {
    translation: cn
  }
};

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    // lng: String(webApp.initDataUnsafe?.user?.language_code || 'en'),
    supportedLngs: Array.from(LANGUAGES.keys()),
    resources: resources,
  });

export default i18n;
