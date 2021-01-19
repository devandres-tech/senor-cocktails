import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Pagination from '../components/Pagination'

const DrinkList = ({ title, drinks }) => {
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const renderDrinks = drinks.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <>
      <h2>{title}</h2>
      <Row>
        {renderDrinks.map((drink) => (
          <Col sm={4} md={3}>
            <p>{drink.name}</p>
          </Col>
        ))}
      </Row>
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
