import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const DrinkList = ({ title, drinks }) => {
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const renderDrinks = drinks.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const onNextPageHandler = () => {
    if (currentPage !== pageNumbers().length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const onPrevPageHandler = () => {
    if (currentPage !== pageNumbers()[0]) {
      setCurrentPage(currentPage - 1)
    }
  }

  const pageNumbers = () => {
    const totalPageNumbers = []
    for (let i = 1; i <= Math.ceil(drinks.length / itemsPerPage); i++) {
      totalPageNumbers.push(i)
    }
    return totalPageNumbers
  }

  const renderPageNumbers = pageNumbers().map((pageNumber) => {
    return <li onClick={() => handlePageClick(pageNumber)}>{pageNumber}</li>
  })

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
      <p onClick={() => onPrevPageHandler()}>Prev</p>
      {renderPageNumbers}
      <p onClick={() => onNextPageHandler()}>Next</p>
    </>
  )
}

export default DrinkList
