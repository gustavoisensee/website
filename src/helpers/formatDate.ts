import locales from '../enums/locales';

const getDateLocale = () => {
  const stored = localStorage.locale || locales.EN_US;
  return stored === locales.PT_BR ? "pt-BR" : "en-US";
};

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat(getDateLocale(), {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(iso));

export const compareDatesDesc = (a: string, b: string) =>
  new Date(b).getTime() - new Date(a).getTime();
