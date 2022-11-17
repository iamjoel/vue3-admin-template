import { createI18n } from 'vue-i18n';
import en from './en-US';
import cn from './zh-CN';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = localStorage.getItem('arco-locale') || 'en-US';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  legacy: false, // you must set `false`, to use Composition API
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn,
  },
});
// console.log(i18n.mode)

export default i18n;