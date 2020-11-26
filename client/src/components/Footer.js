import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import GooglePlayLogo from '../images/google-play.svg'

const Footer = () => {
  return (
    <footer className='footerContainer container'>
      <div className='footerContainer__mainContent'>
        <p>Coming Soon</p>
        <img src={GooglePlayLogo} alt='google play icon' />
      </div>
      <div className='footerContainer__links'>
        <Row>
          <Col md='6'>
            <div className='footerContainer__links--left'>
              <Link className='default-linkStyle'>About</Link>
              <Link className='default-linkStyle'>Contact</Link>
              <Link className='default-linkStyle'>Terms</Link>
            </div>
          </Col>
          <Col md='6'>
            <p>
              Designed and developed by{' '}
              <span className='default-linkStyle'>Andres Alcocer</span>{' '}
              Copyright @2020
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default Footer
