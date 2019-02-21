import React from 'react';
import profile from './img/profile.jpg';
import './header.scss';

const Header = () => (
  <div className="Header">
    <img className="profile-picture" src={profile} alt="" />
  </div>
);

export default Header;
