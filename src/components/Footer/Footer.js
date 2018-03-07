import React from 'react';
import github from './img/github-logo.png';
import linkedin from './img/linkedin.png';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <a href="https://github.com/gustavoisensee" target="blank">
      <img className="icon" src={github} alt="" />
    </a>
    <a href="https://www.linkedin.com/in/gustavo-isensee-75293b3a/" target="blank">
      <img className="icon" src={linkedin} alt="" />
    </a>
  </div>
);

export default Footer;
