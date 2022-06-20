import React from 'react';
import Projects from '../Projects';
import Blog from '../Blog';
import About from '../About/About';
import useHash from '../../hooks/useHash';
import { hashtags } from '../../consts';
import { getMessage } from '../../helpers';
import './styles.scss';

const Content = () => {
  const locale = getMessage(localStorage.market);

  const hash = useHash();
  const TabContent = {
    [hashtags.about]: About,
    [hashtags.projects]: Projects,
    [hashtags.blog]: Blog,
  }[hash] || About;

  const isTabActive = (index) => (hash === index ? 'active' : 'not-active');

  return (
    <div className='Content'>
      <div className='tab'>
        <a
          className={isTabActive(hashtags.about)}
          style={{ marginRight: '16px' }}
          href={hashtags.about}
        >
          {locale?.hashtags?.about}
        </a>
        <a className={isTabActive(hashtags.projects)} href={hashtags.projects}>
          {locale?.hashtags?.projects}
        </a>
        <a className={isTabActive(hashtags.blog)} href={hashtags.blog}>
          {locale?.hashtags?.blog}
        </a>
      </div>

      <TabContent />
    </div>
  );
};

export default Content;
