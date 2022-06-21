import React from 'react';
import profile from '../../assets/images/profile.jpg';
import donut from '../../assets/images/donut.png';
import { getMessage } from '../../helpers';
import './styles.scss';

const Header = () => {
  const locale = getMessage(localStorage.market);

  return (
    <div className='Header'>
      <img className='profile-picture' src={profile} alt='' />
      <div className='title-container'>
        <h1>Gustavo Isensee</h1>
        <h2 className='title'>
          {locale.content.title}
          <img className='icon' src={donut} alt='' />
        </h2>
      </div>
    </div>
  );
};

export default Header;
