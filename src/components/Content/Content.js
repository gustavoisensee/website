import React from 'react';
import getMessage from '../../utils';
import donut from './img/donut.png';
import './styles.scss';

const replaceLinks = (locale) => {
  const replaced = locale.content.description
    .replace('{link1}', '<a href="https://github.com/gustavoisensee" target="blank">Github</a>')
    .replace('{link2}', '<a href="https://www.linkedin.com/in/gustavo-isensee-75293b3a/" target="blank">Linkedin</a>')

  return replaced;
}

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
      <p 
        className="paragraph"
        dangerouslySetInnerHTML={{ __html: replaceLinks(locale) }}
      />
    </div>
  );
};

export default Content;
