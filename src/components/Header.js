import React from 'react';

import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header'>
      <div className='logo'></div>
      <nav className='main-nav'>
        <ul>
          <li className='nav-link'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-link add-space'>
            <Link to='/'>Add space</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
