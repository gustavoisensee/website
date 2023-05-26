import React from 'react';
import Footer from '../Footer';
import locales from '../../enum/locales';
import { getMessage } from '../../helpers';
import { hashtags } from '../../consts';
import './styles.scss';

const SideMenu = () => {
  const locale = getMessage();

  const getButtonClass = (_locale) => {
    return `button ${locale === _locale ? 'active' : ''}`;
  };

  const handleChangeLocale = (_locale) => {
    localStorage.locale = _locale;
    document.location.reload();
  };

  return (
    <nav role='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' />

        <span></span>
        <span></span>
        <span></span>

        <ul id='menu' className='pl-4'>
          <a href={hashtags.about} rel='noopener noreferrer'>
            <li>{locale.hashtags.about}</li>
          </a>
          <a href={hashtags.projects} rel='noopener noreferrer'>
            <li>{locale.hashtags.projects}</li>
          </a>
          <a href={hashtags.blog} rel='noopener noreferrer'>
            <li>{locale.hashtags.blog}</li>
          </a>
          <li>
            <div className='content-button'>
              <button
                className={getButtonClass(locales.PT_BR)}
                onClick={() => handleChangeLocale(locales.PT_BR)}
              >
                {locale.content.portuguese}
              </button>
              <button
                className={getButtonClass(locales.EN_US)}
                onClick={() => handleChangeLocale(locales.EN_US)}
              >
                {locale.content.english}
              </button>
            </div>
          </li>
          <li>
            <Footer />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideMenu;
