import locales from "../../../../enum/locales";
import { getLocale } from "../../../../helpers";
import LanguageButton from "./LanguageButton";

const locale = getLocale();

const LanguageSwitcher = () => {
  const handleChangeLocale = (_locale: string) => {
    localStorage.locale = _locale;
    document.location.reload();
  };

  return (
    <div className="flex justify-center mt-4 px-2 pt-4 border-t border-gray-300 dark:border-gray-600">
      <LanguageButton
        active={localStorage.locale === locales.PT_BR}
        onClick={() => handleChangeLocale(locales.PT_BR)}
      >
        {locale.content.portuguese}
      </LanguageButton>

      <LanguageButton
        active={localStorage.locale === locales.EN_US}
        onClick={() => handleChangeLocale(locales.EN_US)}
      >
        {locale.content.english}
      </LanguageButton>
    </div>
  );
};

export default LanguageSwitcher;
