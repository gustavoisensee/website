import React from 'react';
import { getMessage, replaceLinks } from '../../helpers';
import TechKnowledge from '../../components/about/TechKnowledge';

const locale = getMessage();

const About = () => (
  <div className='mb-4'>
    <h2 className='text-2xl font-semibold my-4'>{locale.pages.about.title}</h2>
    <p
      className='text-base leading-relaxed'
      dangerouslySetInnerHTML={{ __html: replaceLinks(locale) }}
    />
    <TechKnowledge />
  </div>
);

export default About;
