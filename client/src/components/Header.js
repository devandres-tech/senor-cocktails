import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import Logo from '../images/Logo.svg'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>
        <span role='img' aria-label='about us'>
          💁🏻‍♂️
        </span>
        About us
      </a>
      <a href='/'>
        <span role='img' aria-label='price'>
          💸
        </span>
        Pricing
      </a>
      <a href='/'>
        <span role='img' aria-label='contact'>
          📩
        </span>
        Contact
      </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#000')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [open, setOpen] = useState(false)
  const node = useRef()

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <header>
      <nav>
        <Container>
          {width <= 520 ? (
            <div className='containerNavbar__mobile'>
              <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>
              <Link>
                <img id='logo' src={Logo} alt='logo' />
              </Link>
            </div>
          ) : (
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
                    <i className='fas fa-search'></i>Search
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
          )}
        </Container>
      </nav>
    </header>
  )
}

export default Header
