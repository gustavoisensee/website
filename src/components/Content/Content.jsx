import React from 'react';
import Projects from '../Projects';
import Blog from '../Blog';
import About from '../About/About';
import useHash from '../../hooks/useHash';
import { hashtags } from '../../consts';
import { getMessage } from '../../helpers';

const Content = () => {
  const locale = getMessage(localStorage.market);
  const hash = useHash();
  const TabContent =
    {
      [hashtags.about]: About,
      [hashtags.projects]: Projects,
      [hashtags.blog]: Blog,
    }[hash] || About;
  const hasHash = Object.values(hashtags).includes(hash);

  const isTabActive = (flag) => (flag ? 'text-indigo-500' : 'underline');

  return (
    <div>
      <div className='mt-4'>
        <a
          className={`mr-4 font-semibold ${isTabActive(
            hashtags.about === hash || !hasHash
          )}`}
          href={hashtags.about}
        >
          {locale?.hashtags?.about}
        </a>
        <a
          className={`mr-4 font-semibold ${isTabActive(
            hashtags.projects === hash
          )}`}
          href={hashtags.projects}
        >
          {locale?.hashtags?.projects}
        </a>
        <a
          className={`font-semibold ${isTabActive(hashtags.blog === hash)}`}
          href={hashtags.blog}
        >
          {locale?.hashtags?.blog}
        </a>
      </div>

      <TabContent />
    </div>
  );
};

export default Content;
