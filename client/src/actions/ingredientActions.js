import axios from '../axios'
import { POPULAR_DRINK_LIST_SUCCESS } from '../constants/drinkConstants'
import {
  POPULAR_INGREDIENT_LIST_FAIL,
  POPULAR_INGREDIENT_LIST_REQUEST,
  RANDOM_INGREDIENT_LIST_FAIL,
  RANDOM_INGREDIENT_LIST_REQUEST,
  RANDOM_INGREDIENT_LIST_SUCCESS,
} from '../constants/ingredientActions'

export const getRandomIngredients = () => async (dispatch) => {
  try {
    dispatch({ type: RANDOM_INGREDIENT_LIST_REQUEST })

    const { data } = await axios.get('/ingredients/list/random')
    dispatch({ type: RANDOM_INGREDIENT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: RANDOM_INGREDIENT_LIST_FAIL, payload: error })
  }
}

export const getPopularIngredient = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_INGREDIENT_LIST_REQUEST })

    const { data } = await axios.get('/ingredients/list/popular')
    dispatch({ type: POPULAR_DRINK_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: POPULAR_INGREDIENT_LIST_FAIL, payload: error })
  }
}
