import React from 'react';
import { getMessage, replaceLinks } from '../../helpers';

const About = () => {
  const locale = getMessage(localStorage.market);
  return (
    <>
      <h2>{locale.pages.about.title}</h2>
      <p
        className='paragraph'
        dangerouslySetInnerHTML={{ __html: replaceLinks(locale) }}
      />
    </>
  );
};

export default About;
