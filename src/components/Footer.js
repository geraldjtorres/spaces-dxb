import React from 'react'
import { Link } from 'react-router-dom'
import LogoSmall from '../images/space-logo-small.svg'
import './Footer.css'
// import './Header.css'

function Footer() {
  return (
    <div className='footerStyle'>
      <div>
        <div className='footer-logo'>
          <img src={LogoSmall} alt='' />
        </div>
      </div>
      <div className='footer-nav'>
        <ul className='footer-links'>
          <li className='footer-link'>
            <Link to='/'>About</Link>
          </li>
          {/* <li className='footer-link'>
            <Link to='/'>Contact</Link>
          </li> */}
        </ul>
        <span>Copyright &copy; 2020 Spaces.ae</span>
      </div>
    </div>
  )
}

export default Footer
