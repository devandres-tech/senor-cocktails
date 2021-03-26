import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import DrinkList from '../components/DrinkList'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { getDrinkList, searchDrinks } from '../actions/drinkActions'

const DrinkListScreen = ({
  history,
  location: { title },
  match: { params },
}) => {
  const { categoryList } = params
  const dispatch = useDispatch()

  const drinkListState = useSelector((state) => state.drinkList)
  const { drinkList } = drinkListState

  useEffect(() => {
    if (categoryList === 'similarlist') {
      // dispatch search action
      // ingredients array, category string
    }
    dispatch(getDrinkList(categoryList))
  }, [dispatch, categoryList])

  useScrollToTop()

  return (
    <Container className='listScreenContainer'>
      <div onClick={() => history.goBack()} className='btn__goBack'>
        <i className='fas fa-chevron-left'></i>
        <span>Go back</span>
      </div>
      <DrinkList type='drink' title={title} drinks={drinkList} />
    </Container>
  )
}

export default DrinkListScreen
