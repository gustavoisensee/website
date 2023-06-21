import React from 'react';
import Projects from '../../../Projects';
import Blog from '../../../Blog';
import About from '../../../About';
import useHash from '../../../../../hooks/useHash';
import { hashtags } from '../../../../../consts';
import { getMessage } from '../../../../../helpers';
import Link from './Link';

const locale = getMessage();

const getTabComponent = (hash) => ({
  [hashtags.about]: About,
  [hashtags.projects]: Projects,
  [hashtags.blog]: Blog,
})[hash] || About;

const Content = () => {
  const hash = useHash();
  const TabContent = getTabComponent(hash);

  return (
    <div>
      <div className='my-8'>
        <Link hashSource={hashtags.about} title={locale?.hashtags?.about} />
        <Link hashSource={hashtags.projects} title={locale?.hashtags?.projects} />
        <Link hashSource={hashtags.blog} title={locale?.hashtags?.blog} />
      </div>
      <TabContent />
    </div>
  );
};

export default Content;
