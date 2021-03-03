import axios from '../axios'
import {
  DRINK_DETAILS_REQUEST,
  DRINK_DETAILS_SUCCESS,
  DRINK_DETAILS_FAIL,
  LATEST_DRINK_LIST_FAIL,
  LATEST_DRINK_LIST_REQUEST,
  LATEST_DRINK_LIST_SUCCESS,
  POPULAR_DRINK_LIST_FAIL,
  POPULAR_DRINK_LIST_REQUEST,
  POPULAR_DRINK_LIST_SUCCESS,
  RANDOM_DRINK_LIST_FAIL,
  RANDOM_DRINK_LIST_REQUEST,
  RANDOM_DRINK_LIST_SUCCESS,
  CATEGORY_DRINK_FAIL,
  CATEGORY_DRINK_REQUEST,
  CATEGORY_DRINK_SUCCESS,
  SEARCH_DRINKS_SUCCESS,
  SEARCH_DRINKS_FAIL,
  SEARCH_DRINKS_REQUEST,
} from '../constants/drinkConstants'

export const getRandomDrinkList = () => async (dispatch) => {
  try {
    dispatch({ type: RANDOM_DRINK_LIST_REQUEST })

    const { data } = await axios.get(`/drinks?sort=random`)
    dispatch({ type: RANDOM_DRINK_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: RANDOM_DRINK_LIST_FAIL,
      payload: error,
    })
  }
}

export const getPopularDrinkList = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_DRINK_LIST_REQUEST })

    const { data } = await axios.get(`/drinks?sort=popular`)
    dispatch({ type: POPULAR_DRINK_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: POPULAR_DRINK_LIST_FAIL,
      payload: error,
    })
  }
}

export const getLatestDrinkList = () => async (dispatch) => {
  try {
    dispatch({ type: LATEST_DRINK_LIST_REQUEST })

    const { data } = await axios.get(`/drinks?sort=latest`)
    dispatch({ type: LATEST_DRINK_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LATEST_DRINK_LIST_FAIL,
      payload: error,
    })
  }
}

export const searchDrinks = (ingredients = '', category = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: SEARCH_DRINKS_REQUEST })

    const { data } = await axios.get(
      `/drinks/search?ingredients=${ingredients}&category=${category}`
    )
    dispatch({ type: SEARCH_DRINKS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: SEARCH_DRINKS_FAIL,
      payload: error,
    })
  }
}

// export const getDrinksByCategory = (ingredients = '', category = '') => async (
//   dispatch
// ) => {
//   try {
//     dispatch({ type: CATEGORY_DRINK_REQUEST })

//     const { data } = await axios.get(`/drinks/category/${category}`)
//     dispatch({ type: CATEGORY_DRINK_SUCCESS, payload: data })
//   } catch (error) {
//     dispatch({
//       type: CATEGORY_DRINK_FAIL,
//       payload: error,
//     })
//   }
// }

export const getDrinkDetails = (drinkId) => async (dispatch) => {
  try {
    dispatch({ type: DRINK_DETAILS_REQUEST })

    const { data } = await axios.get(`/drinks/${drinkId}`)
    dispatch({ type: DRINK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: DRINK_DETAILS_FAIL,
      payload: error,
    })
  }
}

// export const getDrinksByIngredients = (drinkId) => async (dispatch) => {
//   try {
//     dispatch({ type: DRINK_DETAILS_REQUEST })

//     const { data } = await axios.get(`/drinks/${drinkId}`)
//     dispatch({ type: DRINK_DETAILS_SUCCESS, payload: data })
//   } catch (error) {
//     dispatch({
//       type: DRINK_DETAILS_FAIL,
//       payload: error,
//     })
//   }
// }
