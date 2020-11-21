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
            <li className='containerNavbar__item'>
              <Link>
                <img id='logo' src={Logo} alt='logo' />
              </Link>
            </li>
            <li className='containerNavbar__item'>
              <Link>Home</Link>
            </li>
            <li className='containerNavbar__item'>
              <Link>Top Drinks</Link>
            </li>
            <li className='containerNavbar__item'>
              <Link>Ingredients</Link>
            </li>
            <li className='containerNavbar__item'>
              <Link>Search</Link>
            </li>
            <li className='containerNavbar__item'>
              <Link>Sign up</Link>
            </li>
            <li className='containerNavbar__item'>
              <Link>Login</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  )
}

export default Header
