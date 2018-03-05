import Market from '../enum/Market';
import contentEnUS from '../components/Content/locale/content.en-US.json';
import contentPtBR from '../components/Content/locale/content.pt-BR.json';

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
