import React from 'react';
import locales from '../../../../enum/locales';
import { getMessage } from '../../../../helpers';
import LanguageButton from './LanguageButton';

const locale = getMessage();

const LanguageSwitcher = () => {
  const handleChangeLocale = (_locale) => {
    localStorage.locale = _locale;
    document.location.reload();
  };

  return (
    <div className='flex justify-center mt-4 px-2 pt-4 border-t-2 border-opacity-5'>
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
