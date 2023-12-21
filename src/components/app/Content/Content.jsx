import React from 'react';
import Projects from '../../../pages/Projects';
import Blog from '../../../pages/Blog';
import About from '../../../pages/About';
import Career from '../../../pages/Career';
import useHash from '../../../hooks/useHash';
import { hashtags } from '../../../consts';
import { getMessage } from '../../../helpers';
import Link from './Link';

const locale = getMessage();

const getTabComponent = (hash) =>
  ({
    [hashtags.about]: About,
    [hashtags.projects]: Projects,
    [hashtags.blog]: Blog,
    [hashtags.career]: Career
  })[hash] || About;

const Content = () => {
  const hash = useHash();
  const TabContent = getTabComponent(hash);

  return (
    <div>
      <div className='flex flex-wrap my-8'>
        <Link hashSource={hashtags.about} title={locale?.hashtags?.about} />
        <Link
          hashSource={hashtags.projects}
          title={locale?.hashtags?.projects}
        />
        <Link hashSource={hashtags.blog} title={locale?.hashtags?.blog} />
        <Link hashSource={hashtags.career} title={locale?.hashtags?.career} />
      </div>
      <TabContent />
    </div>
  );
};

export default Content;
