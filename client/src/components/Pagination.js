import React from 'react'

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
    if (currentPage !== pageNumbers[0]) {
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
    return <li onClick={() => handlePageClick(pageNumber)}>{pageNumber}</li>
  })

  return (
    <div>
      <p onClick={() => onPrevPageHandler()}>Prev</p>
      {renderPageNumbers}
      <p onClick={() => onNextPageHandler()}>Next</p>
    </div>
  )
}

export default Pagination
