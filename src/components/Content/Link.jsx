import React from 'react';
import useHash from '../../hooks/useHash';
import { hashtags } from '../../consts';

const isTabActive = (flag) => (flag ? 'text-indigo-500' : 'underline');

const Link = ({ hashSource, title }) => {
  const hash = useHash();
  const hasHash = Object.values(hashtags).includes(hash);
  const noHashAndAboutTab = !hasHash && hashSource === hashtags.about;

  return (
    <a
      className={`mr-4 font-semibold ${isTabActive(
        hashSource === hash || noHashAndAboutTab
      )}`}
      href={hashSource}
    >
      {title}
    </a>
  );
};

export default Link;
