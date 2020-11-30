import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useViewport } from '../hooks/useViewport'
import config from '../config.json'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  z-index: 5;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }

  i.fa-search {
    position: relative;
    bottom: 2px;
    font-size: 1.1rem;
    padding-right: 0.3rem;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: 500;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 26px;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
const StyledBurger = styled.button`
  position: relative;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.4rem;
  height: 1.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  padding-left: 1rem;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.4rem;
    height: 0.13rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#000')};
    border-radius: 10px;
    transition: all 0.1s linear;
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
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/'>Home</Link>
      <Link>Popular Drinks</Link>
      <Link>Ingredients</Link>
      <Link>My Bar</Link>
      <Link>
        {' '}
        <i className='fas fa-search'></i>Search
      </Link>
      {/* <Link to='signup'>Sign up</Link>
      <Link to='/login'>
        <button className='btn__primary'>Login</button>
      </Link> */}
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const MobileNavbar = ({ node, setOpen, open }) => (
  <div className='containerNavbar__mobile'>
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
    <Link>
      <img
        alt='logo'
        id='logo'
        src='https://firebasestorage.googleapis.com/v0/b/senor-cocktails.appspot.com/o/Logo.jpg?alt=media&token=db113644-029b-4eb3-9467-32fd50ad84ac'
      />
    </Link>
    <div className='containerNavbar__mobile--right'>
      <div className='containerNavbar__item'>
        <Link>
          <i class='fas fa-user'></i>
          <span>{'Andres'}</span>
        </Link>
      </div>
      {/* <li className='containerNavbar__item'>
        <Link to='/signup' className='hoverLinkStyle'>
          Sign up
        </Link>
      </li>
      <li className='containerNavbar__item'>
        <Link to='/login'>
          <button className='btn__primary'>Login</button>
        </Link>
      </li> */}
    </div>
  </div>
)

const Navbar = () => (
  <ul className='containerNavbar'>
    <div className='containerNavbar__left'>
      <li className='containerNavbar__item'>
        <Link to='/'>
          <img
            alt='logo'
            id='logo'
            src='https://firebasestorage.googleapis.com/v0/b/senor-cocktails.appspot.com/o/Logo.jpg?alt=media&token=db113644-029b-4eb3-9467-32fd50ad84ac'
          />
        </Link>
      </li>
      <li className='containerNavbar__item'>
        <Link className='hoverLinkStyle'>Home</Link>
      </li>
      <li className='containerNavbar__item'>
        <Link className='hoverLinkStyle'>Popular Drinks</Link>
      </li>
      <li className='containerNavbar__item'>
        <Link className='hoverLinkStyle'>Ingredients</Link>
      </li>
      <li className='containerNavbar__item'>
        <Link className='hoverLinkStyle'>My Bar</Link>
      </li>
      <li className='containerNavbar__item'>
        <Link className='hoverLinkStyle'>
          <i className='fas fa-search'></i>Search
        </Link>
      </li>
    </div>
    <div className='containerNavbar__right'>
      <li className='containerNavbar__item'>
        <Link className='hoverLinkStyle'>
          <i class='fas fa-user'></i>
          <span>{'Andres'}</span>
        </Link>
      </li>
      {/* <li className='containerNavbar__item'>
        <Link to='/signup' className='hoverLinkStyle'>
          Sign up
        </Link>
      </li>
      <li className='containerNavbar__item'>
        <Link to='/login'>
          <button className='btn__primary'>Login</button>
        </Link>
      </li> */}
    </div>
  </ul>
)

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  const [windowDimensions] = useViewport()

  return (
    <header>
      <nav>
        {windowDimensions.width < config.TABLET_WIDTH ? (
          <MobileNavbar node={node} setOpen={setOpen} open={open} />
        ) : (
          <Navbar />
        )}
      </nav>
    </header>
  )
}

export default Header
