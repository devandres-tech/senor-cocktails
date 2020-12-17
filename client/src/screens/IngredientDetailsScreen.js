import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import { getIngredientDetails } from '../actions/ingredientActions'

const IngredientScreen = ({ match }) => {
  const { ingredientId } = match.params
  const dispatch = useDispatch()

  const ingredientDetailsState = useSelector((state) => state.ingredientDetails)
  const { loading, error, ingredientDetails } = ingredientDetailsState

  const [expandText, setExpandText] = useState(false)

  useEffect(() => {
    dispatch(getIngredientDetails(ingredientId))
  }, [dispatch, ingredientId])

  const truncateText = (text, isExpanded) => {
    if (text.length > 1000) {
      return !isExpanded ? text.substring(0, 900) : text
    }
    return text
  }

  return (
    <Container className='ingredientContainer'>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <Row>
            <Col md={4}>
              <div className='ingredientContainer__left'>
                <h1>{ingredientDetails.name}</h1>
                <img src={ingredientDetails.image} alt={'ingredient'} />
                <button className='btn__primary'>Add to my ingredients</button>
              </div>
            </Col>
            <Col md={8}>
              <div className='ingredientContainer__right'>
                {ingredientDetails.type && (
                  <div className='typeContent'>
                    <h2>Type</h2>
                    <p>{ingredientDetails.type}</p>
                  </div>
                )}
                {ingredientDetails.description && (
                  <>
                    <h2>Description</h2>
                    {ingredientDetails.description.length > 1000 ? (
                      <p>
                        {truncateText(
                          ingredientDetails.description,
                          expandText
                        )}
                        <span
                          className='truncateText'
                          onClick={() => setExpandText(!expandText)}
                        >
                          {!expandText ? '...See more' : '  See less'}
                        </span>
                      </p>
                    ) : (
                      <p>{ingredientDetails.description}</p>
                    )}
                  </>
                )}
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default IngredientScreen
