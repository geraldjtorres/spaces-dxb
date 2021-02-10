import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LogoSmall from '../images/space-logo-small.svg';

function Footer() {
  return (
    <div className='main-footer'>
      <a href='#'>
        <div className='footer-logo'>
          <img src={LogoSmall} alt='' />
        </div>
      </a>
      <div className='footer-nav'>
        <ul className='footer-links'>
          {/* <li className='footer-link'>
            <Link to='/'>About</Link>
          </li>
          <li className='footer-link'>
            <Link to='/'>Contact</Link>
          </li> */}
        </ul>
        <span>Copyright &copy; 2020 Spaces.ae</span>
      </div>
    </div>
  );
}

export default Footer;
