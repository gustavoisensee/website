import Market from '../enum/Market';
import contentEnUS from '../locale/locale.en-US.json';
import contentPtBR from '../locale/locale.pt-BR.json';

const getMessage = (market = Market.EN_US) => {
  if (market === Market.PT_BR) {
    return {
      ...contentPtBR,
    };
  }
  return {
    ...contentEnUS,
  };
};

export default getMessage;
