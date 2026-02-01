import { colors } from '../consts';
import locales from '../enums/locales';
import contentEnUS from '../locale/locale.en-US.json';
import contentPtBR from '../locale/locale.pt-BR.json';

export { cache, clearCache, getCachedData } from './cache';

export const getLocale = () => {
  const locale = localStorage.locale || locales.EN_US;
  if (locale === locales.PT_BR) {
    return {
      ...contentPtBR,
    };
  }
  return {
    ...contentEnUS,
  };
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
