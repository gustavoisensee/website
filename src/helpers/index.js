import { colors } from '../consts';
import locales from '../enum/locales';
import contentEnUS from '../locale/locale.en-US.json';
import contentPtBR from '../locale/locale.pt-BR.json';

export const getMessage = () => {
  const locale = localStorage.locale || locales.EN_US
  if (locale === locales.PT_BR) {
    return {
      ...contentPtBR,
    };
  }
  return {
    ...contentEnUS,
  };
};

export const replaceLinks = (locale) => {
  const replaced = locale.content.description
    .replace(
      '{link1}',
      '<a href="https://github.com/gustavoisensee" target="blank">Github</a>'
    )
    .replace(
      '{link2}',
      '<a href="https://www.linkedin.com/in/gustavoisensee/" target="blank">Linkedin</a>'
    );

  return replaced;
};

export const scrollToTheBottom = () => {
  const content = document.querySelector('#content') || document.body;
  document.getElementById('root').scrollTo(0, content.scrollHeight + 50);
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