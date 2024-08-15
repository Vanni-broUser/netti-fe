import { createI18n } from 'vue-i18n';

import itLocale from '@/assets/locales/it.json';
import enLocale from '@/assets/locales/en.json';

const i18n = createI18n({
  locale: 'it',
  messages: {
    it: itLocale,
    en: enLocale
  }
});

export default i18n;
