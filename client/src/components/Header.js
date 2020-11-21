import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Logo from '../images/Logo.svg'

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <ul className='containerNavbar'>
            <div className='containerNavbar__left'>
              <li className='containerNavbar__item'>
                <Link>
                  <img id='logo' src={Logo} alt='logo' />
                </Link>
              </li>
              <li className='containerNavbar__item'>
                <Link className='hoverLinkStyle'>Home</Link>
              </li>
              <li className='containerNavbar__item'>
                <Link className='hoverLinkStyle'>Top Drinks</Link>
              </li>
              <li className='containerNavbar__item'>
                <Link className='hoverLinkStyle'>Ingredients</Link>
              </li>
              <li className='containerNavbar__item'>
                <Link className='hoverLinkStyle'>
                  <i class='fas fa-search'></i>Search
                </Link>
              </li>
            </div>
            <div className='containerNavbar__right'>
              <li className='containerNavbar__item'>
                <Link className='hoverLinkStyle'>Sign up</Link>
              </li>
              <li className='containerNavbar__item'>
                <Link>
                  <button className='btn__primary'>Login</button>
                </Link>
              </li>
            </div>
          </ul>
        </Container>
      </nav>
    </header>
  )
}

export default Header
