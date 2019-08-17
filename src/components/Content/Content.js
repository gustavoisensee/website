import React from 'react';
import getMessage from '../../utils';
import donut from './img/donut.png';
import './styles.scss';

const Content = () => {
  const { market } = localStorage;
  const locale = getMessage(market);

  return (
    <div className='Content' id='home'>
      <div className='row'>
        <h1>Gustavo Isensee</h1>
      </div>
      <div className='row'>
        <h2>
          {locale.content.title}
          <img className='icon' src={donut} alt='' />  
        </h2>
        
      </div>
      <p>{locale.content.description}</p>
      
    </div>
  );
};

export default Content;
