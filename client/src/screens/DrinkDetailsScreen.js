import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getDrinkDetails } from '../actions/drinkActions'

const DrinkDetailsScreen = ({ match, history }) => {
  const { drinkId } = match.params
  const dispatch = useDispatch()

  const drinkDetailsState = useSelector((state) => state.drinkDetails)
  const { loading, error, drinkDetails } = drinkDetailsState

  useEffect(() => {
    dispatch(getDrinkDetails(drinkId))
  }, [dispatch, drinkId])

  return (
    <Container className='drinkContainer'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <div className='drinkContainer__leftContent'>
                <div className='drinkContainer__leftContent header'>
                  <h1>{drinkDetails.name}</h1>
                  <div className='drinkContainer__leftContent rating'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                </div>
                <div className='drinkContainer__leftContent image'>
                  <img src={drinkDetails.image} alt='drink' />
                </div>
                <button className='btn__primary'>Add to favorites</button>
                <label>
                  Tried it:
                  <input type='checkbox' name='triedIt' />
                </label>
              </div>
            </Col>
            <Col md={6}>
              <div className='drinkContainer__rightContent'>
                <h2>Ingredients</h2>
                {drinkDetails.ingredients &&
                  drinkDetails.ingredients.map((ingredient) => (
                    <Link to={`/ingredient/${ingredient.ingredient}`}>
                      <div className='drinkContent__rightContent ingredient'>
                        <div className='ingredientImage'>
                          <img src={ingredient.image} alt='ingredient' />
                        </div>
                        <p>{ingredient.name}</p>
                        <p className='ingredientMeasurement'>
                          {ingredient.measurement}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='drinkContainer__instructions'>
                <h2>Instructions</h2>
                {drinkDetails.instructions && (
                  <p>{drinkDetails.instructions.EN}</p>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='drinkContainer__comments'>
                <h2>Comments</h2>
                <div className='addComment'>
                  <input
                    type='text'
                    placeholder='Add comment...'
                    name='addComment'
                  />
                  <div className='addComment__actions'>
                    <button className='btn__secondary'>Cancel</button>
                    <button className='btn__primary'>Comment</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default DrinkDetailsScreen
