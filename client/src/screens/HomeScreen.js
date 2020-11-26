import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import HeroImage from '../images/hero-image.svg'
import Slider from '../components/Slider'
import drinks from '../data/drinks'
import ingredients from '../data/ingredients'
import AddItemIcon from '../images/add-item.svg'
import LibraryIcon from '../images/library.svg'
import UserIcon from '../images/user.svg'

const HomeScreen = () => {
  return (
    <>
      <div className='heroContainer container'>
        <div className='heroContainer__leftContent'>
          <h1 className='heroContainer__title'>
            Señor Cocktails-an app that helps you <br />
            discover and manage cocktail recipes you'll love.
          </h1>
          <ul className='heroContainer__listDescription'>
            <li>Easily manage your cocktail recipes</li>
            <li>Search over 600 drinks</li>
            <li>Comment, save, and like your favorite drinks</li>
            <li>Discover new cocktails with over 400 available ingredients</li>
          </ul>
        </div>
        <div className='heroContainer__rightContent'>
          <img src={HeroImage} alt='cocktails illustration' />
        </div>
      </div>
      <Slider items={drinks} title={'Top Drinks'} />
      <Slider items={ingredients} title={'Popular Ingredients'} />
      <div className='callToActionContainer'>
        <Container>
          <Row className='callToActionContainer__content container'>
            <Col md='6'>
              <h1>
                Sign up for a custom <br />
                and personalized experience!
              </h1>
            </Col>
            <Col md='6'>
              <ul>
                <li>
                  <img src={AddItemIcon} alt='add item icon' />
                  <p>Add your own recipes</p>
                </li>
                <li>
                  <img src={LibraryIcon} alt='library icon' />
                  Create your own ingredient library <br />
                  to see the type of drinks you can make
                </li>
                <li>
                  <img src={UserIcon} alt='library icon' />
                  Comment and rate your favorite drinks
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HomeScreen
