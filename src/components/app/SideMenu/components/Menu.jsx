import React from 'react';
import { getMessage } from '../../../../helpers';
import { hashtags } from '../../../../consts';
import useHash from '../../../../hooks/useHash';
import MenuLink from './MenuLink';

const locale = getMessage();

const menus = [
  { hashName: hashtags.about, text: locale.hashtags.about },
  { hashName: hashtags.projects, text: locale.hashtags.projects },
  { hashName: hashtags.blog, text: locale.hashtags.blog },
  { hashName: hashtags.career, text: locale.hashtags.career }
];

const Menu = () => {
  const hash = useHash();

  return (
    <ul>
      {menus.map(({ hashName, text }) => (
        <li key={hashName}>
          <MenuLink active={hash.includes(hashName)} href={hashName}>
            {text}
          </MenuLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
