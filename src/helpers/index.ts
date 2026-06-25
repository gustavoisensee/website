import { colors } from '../consts';
import locales from '../enums/locales';

export { cache, clearCache, getCachedData } from './cache';
export { cx } from './cx';
export { formatDate, compareDatesDesc } from './formatDate';

type LocaleContent = typeof import('../locale/locale.en-US.json');

const localeLoaders: Record<string, () => Promise<{ default: LocaleContent }>> = {
  [locales.EN_US]: () => import('../locale/locale.en-US.json'),
  [locales.PT_BR]: () => import('../locale/locale.pt-BR.json'),
};

let cachedLocale: LocaleContent | null = null;

export const loadLocale = async (localeKey?: string) => {
  const key = localeKey || localStorage.locale || locales.EN_US;
  const loader = localeLoaders[key] ?? localeLoaders[locales.EN_US];
  const mod = await loader();
  cachedLocale = mod.default;
  return cachedLocale;
};

export const getLocale = (): LocaleContent => {
  if (!cachedLocale) {
    throw new Error('Locale not loaded. Call loadLocale() before rendering.');
  }
  return cachedLocale;
};

type Locale = {
  content: {
    description: string;
  };
};

export const replaceLinks = (locale: Locale) => {
  const replaced = locale.content.description
    .replace('{link1}', '<a href="https://github.com/gustavoisensee" target="blank">Github</a>')
    .replace(
      '{link2}',
      '<a href="https://www.linkedin.com/in/gustavoisensee/" target="blank">Linkedin</a>',
    );

  return replaced;
};

export const scrollToTheBottom = () => {
  const content = document.querySelector('#content') || document.body;
  document.getElementById('root')!.scrollTo(0, content.scrollHeight + 50);
};

let counter = 0;
export const getColor = () => {
  if (counter >= colors.length) {
    counter = 0;
  }
  const color = colors[counter];
  counter++;
  return color;
};
