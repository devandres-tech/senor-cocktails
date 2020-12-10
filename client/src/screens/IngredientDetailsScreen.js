import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getIngredientDetails } from '../actions/ingredientActions'

const IngredientScreen = ({ match }) => {
  const { ingredientId } = match.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredientDetails(ingredientId))
  }, [dispatch, ingredientId])
  return (
    <div>
      <h1>Ingredient Screen</h1>
    </div>
  )
}

export default IngredientScreen
