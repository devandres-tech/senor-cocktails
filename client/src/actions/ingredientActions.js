import axios from '../axios'
import {
  POPULAR_INGREDIENT_LIST_FAIL,
  POPULAR_INGREDIENT_LIST_REQUEST,
  POPULAR_INGREDIENT_LIST_SUCCESS,
  RANDOM_INGREDIENT_LIST_FAIL,
  RANDOM_INGREDIENT_LIST_REQUEST,
  RANDOM_INGREDIENT_LIST_SUCCESS,
} from '../constants/ingredientActions'

export const getRandomIngredientList = () => async (dispatch) => {
  try {
    dispatch({ type: RANDOM_INGREDIENT_LIST_REQUEST })

    const { data } = await axios.get('/ingredients/list/random')
    dispatch({ type: RANDOM_INGREDIENT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: RANDOM_INGREDIENT_LIST_FAIL, payload: error })
  }
}

export const getPopularIngredientList = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_INGREDIENT_LIST_REQUEST })

    const { data } = await axios.get('/ingredients/list/popular')
    dispatch({ type: POPULAR_INGREDIENT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: POPULAR_INGREDIENT_LIST_FAIL, payload: error })
  }
}
