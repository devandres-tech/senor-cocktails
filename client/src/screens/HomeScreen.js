import React from 'react'

import HeroImage from '../images/hero-image.svg'
import Slider from '../components/Slider'
import drinks from '../data/drinks'

const HomeScreen = () => {
  return (
    <>
      <div className='heroContainer'>
        <div className='heroContainer__leftContent'>
          <h1 className='heroContainer__title'>
            Señor Cocktails -an app that helps you <br />
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
      <Slider items={drinks} />
    </>
  )
}

export default HomeScreen
