import React, { useState } from 'react';
import Footer from '../Footer';
import Market from '../../enum/Market';
import getMessage from '../../utils';
import './styles.scss';

const SideMenu = () => {
  const [market, setMarket] = useState(localStorage.market);

  const getButtonClass = (_market) => {
    return `button ${market === _market ? 'active' : ''}`;
  }

  const handleChangeMarket = (market) => {
    setMarket({ market });
    localStorage.market = market;
    document.location.reload();
  }

  const locale = getMessage(market);

  return (
    <nav role='navigation'>
      <div id='menuToggle'>
        <input type='checkbox' />
        
        <span></span>
        <span></span>
        <span></span>
        
        <ul id='menu'>
          <a href='/#home' rel='noopener noreferrer'><li>Home</li></a>
          <a href='/#projects' rel='noopener noreferrer'><li>Projects</li></a>
          <li>
            <div className='content-button'>
              <button
                className={getButtonClass(Market.PT_BR)}
                onClick={() => handleChangeMarket(Market.PT_BR)}
              >
                {locale.content.portuguese}
              </button>
              <button
                className={getButtonClass(Market.EN_US)}
                onClick={() => handleChangeMarket(Market.EN_US)}
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
  )
};

export default SideMenu