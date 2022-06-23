import Market from '../enum/Market';
import contentEnUS from '../locale/locale.en-US.json';
import contentPtBR from '../locale/locale.pt-BR.json';

export const getMessage = (market = Market.EN_US) => {
  if (market === Market.PT_BR) {
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
      '<a href="https://www.linkedin.com/in/gustavo-isensee-75293b3a/" target="blank">Linkedin</a>'
    );

  return replaced;
};

export const scrollToTheBottom = () => {
  document.getElementById('root').scrollTo(0, document.body.scrollHeight);
};
