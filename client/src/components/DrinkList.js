import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Pagination from '../components/Pagination'

const DrinkList = ({ title, drinks, type }) => {
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  let renderDrinks = []
  if (drinks) {
    console.log('drinks', drinks)
    renderDrinks = drinks.slice(indexOfFirstItem, indexOfLastItem)
  }

  return (
    <>
      <div className='drinkListContainer'>
        <h2>{title}</h2>
        <Row>
          {renderDrinks.map((drink) => (
            <Link
              to={
                type === 'drink'
                  ? `/drink/${drink._id}`
                  : `/ingredient/${drink._id}`
              }
            >
              <Col
                key={drink._id}
                xs={6}
                sm={6}
                md={4}
                lg={3}
                className='drinkListContainer__wrapper'
              >
                <img
                  className='drinkListContainer__image'
                  src={drink.image}
                  alt='drink'
                />
                <p className='drinkListContainer__name'>{drink.name}</p>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
      <Pagination
        totalItems={drinks.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default DrinkList

DrinkList.propTypes = {
  title: PropTypes.string,
  drinks: PropTypes.array,
  type: PropTypes.string,
}
