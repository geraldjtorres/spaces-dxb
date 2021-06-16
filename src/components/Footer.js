import React from 'react'
import { Link } from 'react-router-dom'
import LogoSmall from '../images/space-logo-small.svg'
import './Footer.css'
// import './Header.css'

function Footer() {
  const footerStyles = {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 36,
    padding: '0px 0 30px 0',
    alignItems: 'center',
    marginTop: 276
  }

  return (
    <footer style={footerStyles} className='footerStyle'>
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
    </footer>
  )
}

export default Footer
