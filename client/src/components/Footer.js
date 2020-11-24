import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import GooglePlayLogo from '../images/google-play.svg'

const Footer = () => {
  return (
    <Container>
      <div className='footerContainer'>
        <div className='footerContainer__mainContent'>
          <p>Coming Soon</p>
          <img src={GooglePlayLogo} alt='google play icon' />
        </div>
        <div className='footerContainer__links'>
          <div className='footerContainer__links--left'>
            <Link className='default-linkStyle'>About</Link>
            <Link className='default-linkStyle'>Contact</Link>
            <Link className='default-linkStyle'>Terms</Link>
          </div>
          <p>
            Designed and developed by{' '}
            <span className='default-linkStyle'>Andres Alcocer</span> Copyright
            @2020
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
