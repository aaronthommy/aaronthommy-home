// plugins/i18n.js
import { createI18n } from 'vue-i18n';
import de from '~/locales/de.json';
import en from '~/locales/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'de',
    messages: {
      de,
      en,
    }
  });

  vueApp.use(i18n);
  
  return {
    provide: {
      i18n: i18n.global
    }
  };
});