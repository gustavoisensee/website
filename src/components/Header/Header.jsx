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
        <h1 className='text-3xl leading-relaxed font-bold'>Gustavo Isensee</h1>
        <div className='title'>
          <h2 className='text-center leading-relaxed'>{locale.content.title}</h2>
          <img className='icon' src={donut} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
