import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
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
      console.log('current page ', currentPage)
      console.log('page numbs', pageNumbers()[0])
      setCurrentPage(currentPage - 1)
    }
  }

  const pageNumbers = () => {
    const totalPageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      totalPageNumbers.push(i)
    }
    return totalPageNumbers
  }

  const renderPageNumbers = pageNumbers().map((pageNumber) => {
    return (
      <li
        key={pageNumber}
        className={currentPage === pageNumber ? 'active' : ''}
        onClick={() => handlePageClick(pageNumber)}
      >
        {pageNumber}
      </li>
    )
  })

  return (
    <div className='paginationContainer'>
      <p onClick={() => onPrevPageHandler()}>
        <i class='fas fa-chevron-left'></i> Prev
      </p>
      {renderPageNumbers}
      <p onClick={() => onNextPageHandler()}>
        Next <i class='fas fa-chevron-right'></i>
      </p>
    </div>
  )
}

export default Pagination

Pagination.propTypes = {
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
}