import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HeroImage from '../images/hero-image.svg'
import Slider from '../components/Slider'
import drinks from '../data/drinks'
import AddItemIcon from '../images/add-item.svg'
import LibraryIcon from '../images/library.svg'
import UserIcon from '../images/user.svg'
import { getRandomDrinkList, getLatestDrinkList } from '../actions/drinkActions'
import {
  getRandomIngredientList,
  getPopularIngredientList,
} from '../actions/ingredientActions'
import LoadingSpinner from '../components/LoadingSpinner'

const HomeScreen = () => {
  const user = { auth: true }
  const dispatch = useDispatch()

  const randomDrinkListState = useSelector((state) => state.randomDrinkList)
  const {
    loading: loadingRandomDrinks,
    error,
    randomDrinkList,
  } = randomDrinkListState

  const latestDrinkListState = useSelector((state) => state.latestDrinkList)
  const {
    loading: loadingLatestDrinks,
    error: errorLatest,
    latestDrinkList,
  } = latestDrinkListState

  const randomIngredientListState = useSelector(
    (state) => state.randomIngredientList
  )
  const {
    randomIngredientList,
    loading: loadingRandomIngredients,
  } = randomIngredientListState

  const popularIngredientListState = useSelector(
    (state) => state.popularIngredientList
  )
  const {
    popularIngredientList,
    loading: loadingIngredients,
  } = popularIngredientListState

  useEffect(() => {
    dispatch(getLatestDrinkList())
    dispatch(getPopularIngredientList())
    dispatch(getRandomDrinkList())
    dispatch(getRandomIngredientList())
  }, [dispatch])

  return (
    <>
      {user.auth ? (
        <div className='userItemsContainer container'>
          {/* <Row>
            <Col md={6}>
              <div className='userItemsContainer__bg'>
                <h2>
                  Favorite Drinks<span>(3)</span>
                </h2>
                {drinks.slice(0, 3).map((drink, idx) => (
                  <div key={idx} className='userItemsContainer__item'>
                    <img src={drink.strDrinkThumb} alt={'drink item'} />
                    <p>{drink.strDrink}</p>
                    <i className='fas fa-trash-alt'></i>
                    <span>Delete</span>
                  </div>
                ))}
                <Link to='/'>See All</Link>
              </div>
            </Col>
            <Col md={6}>
              <div className='userItemsContainer__bg'>
                <h2>
                  Favorite Drinks<span>(23)</span>
                </h2>
                {drinks.slice(0, 3).map((drink, idx) => (
                  <div key={idx} className='userItemsContainer__item'>
                    <img src={drink.strDrinkThumb} alt={'drink item'} />
                    <p>{drink.strDrink}</p>
                    <i className='fas fa-trash-alt'></i>
                    <span>Delete</span>
                  </div>
                ))}
                <Link to='/'>See All</Link>
              </div>
            </Col>
          </Row> */}
        </div>
      ) : (
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
              <li>
                Discover new cocktails with over 400 available ingredients
              </li>
            </ul>
          </div>
          <div className='heroContainer__rightContent'>
            <img src={HeroImage} alt='cocktails illustration' />
          </div>
        </div>
      )}

      <Container>
        {loadingLatestDrinks ? (
          <LoadingSpinner />
        ) : (
          <Slider
            categoryList={'latest'}
            items={latestDrinkList.list}
            itemType={'drink'}
            title={latestDrinkList.listTitle}
          />
        )}

        {loadingIngredients ? (
          <LoadingSpinner />
        ) : (
          <Slider
            categoryList={'popular'}
            items={popularIngredientList}
            itemType={'ingredient'}
            title={'Popular Ingredients'}
          />
        )}

        {user.auth && !loadingRandomDrinks ? (
          <Slider
            categoryList={'random'}
            items={randomDrinkList.list}
            itemType={'drink'}
            title={randomDrinkList.listTitle}
          />
        ) : (
          <LoadingSpinner />
        )}

        {user.auth && !loadingRandomIngredients ? (
          <Slider
            items={randomIngredientList}
            categoryList={'random'}
            itemType={'ingredient'}
            title={'Random Ingredients'}
          />
        ) : (
          <LoadingSpinner />
        )}
      </Container>
      {!user.auth && (
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
      )}
    </>
  )
}

export default HomeScreen
