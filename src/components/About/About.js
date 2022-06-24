import React from 'react';
import { getMessage, replaceLinks } from '../../helpers';

const About = () => {
  const locale = getMessage(localStorage.market);
  return (
    <div className='mb-4'>
      <h2 className='text-2xl font-semibold my-4'>
        {locale.pages.about.title}
      </h2>
      <p
        className='text-base leading-relaxed'
        dangerouslySetInnerHTML={{ __html: replaceLinks(locale) }}
      />
    </div>
  );
};

export default About;
