import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import ItemList from '../components/ItemList'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { getDrinkList, searchDrinks } from '../actions/drinkActions'
import LoadingSpinner from '../components/LoadingSpinner'

const IngredientListScreen = ({
  history,
  location: { search },
  match: { params },
}) => {
  const { categoryList } = params
  const dispatch = useDispatch()

  const drinkListState = useSelector((state) => state.drinkList)
  const { drinkList, loading } = drinkListState

  const searchDrinkListState = useSelector((state) => state.searchDrinkList)
  const {
    loading: loadingSearchDrinkList,
    error: errorSearchDrinkList,
    searchDrinkList,
  } = searchDrinkListState

  let queryParams = new URLSearchParams(search)
  const ingredients = queryParams.get('ingredients')
  const category = queryParams.get('category')

  useEffect(() => {
    if (categoryList === 'similarlist') {
      dispatch(searchDrinks(ingredients, category))
    } else {
      dispatch(getDrinkList(categoryList))
    }
  }, [dispatch, categoryList, category, ingredients])

  useScrollToTop()

  return (
    <Container className='drinkListScreenContainer'>
      <div onClick={() => history.goBack()} className='btn__goBack'>
        <i className='fas fa-chevron-left'></i>
        <span>Go back</span>
      </div>
      {loading || loadingSearchDrinkList ? (
        <LoadingSpinner />
      ) : (
        <ItemList
          title={
            categoryList === 'similarlist'
              ? searchDrinkList.listTitle
              : drinkList.listTitle
          }
          itemType='drink'
          items={
            categoryList === 'similarlist'
              ? searchDrinkList.drinks
              : drinkList.list
          }
        />
      )}
    </Container>
  )
}

export default IngredientListScreen
