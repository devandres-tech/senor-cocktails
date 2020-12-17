import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import { getIngredientDetails } from '../actions/ingredientActions'

const IngredientScreen = ({ match }) => {
  const { ingredientId } = match.params
  const dispatch = useDispatch()

  const ingredientDetailsState = useSelector((state) => state.ingredientDetails)
  const { loading, error, ingredientDetails } = ingredientDetailsState

  useEffect(() => {
    dispatch(getIngredientDetails(ingredientId))
  }, [dispatch, ingredientId])
  return (
    <Container className='ingredientContainer'>
      <Row>
        <Col md={4}>
          <div className='ingredientContainer__left'>
            <h1>{ingredientDetails.name}</h1>
            <img src={ingredientDetails.image} alt={'ingredient'} />
          </div>
        </Col>
        <Col md={8}>
          <div className='ingredientContainer__right'>
            <div className='typeContent'>
              <h2>Type</h2>
              <p>{ingredientDetails.type}</p>
            </div>
            <h2>Description</h2>
            <p>{ingredientDetails.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default IngredientScreen
