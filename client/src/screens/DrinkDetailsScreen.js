import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

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
              <h1>ingredients</h1>
              {drinkDetails.ingredients &&
                drinkDetails.ingredients.map((ingredient) => (
                  <div>
                    <img src={ingredient.image} alt='ingredient' />
                    <p>{ingredient.name}</p>
                    <p>{ingredient.measurement}</p>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default DrinkDetailsScreen
