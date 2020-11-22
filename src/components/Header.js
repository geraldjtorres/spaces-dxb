import React from 'react';
import LogoSmall from '../images/space-logo-small.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header'>
      <div className='logo'>
        <img src={LogoSmall} />
      </div>
      <nav className='main-nav'>
        <ul>
          <li className='nav-link'>
            <Link to='/'>About</Link>
          </li>
          <li className='nav-link'>
            <Link to='/'>Add space</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
