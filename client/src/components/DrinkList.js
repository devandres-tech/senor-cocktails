import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DrinkList = ({ title, drinks }) => {
  return (
    <Row>
      {drinks.map((drink) => (
        <Col sm={4} md={3}>
          <img src={drink.strDrinkThumb} alt='drink' />
          <h1>{drink.strDrink}</h1>
        </Col>
      ))}
    </Row>
  )
}

export default DrinkList
