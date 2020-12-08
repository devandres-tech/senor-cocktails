import axios from '../axios'
import {
  LATEST_DRINK_LIST_FAIL,
  LATEST_DRINK_LIST_REQUEST,
  LATEST_DRINK_LIST_SUCCESS,
  POPULAR_DRINK_LIST_FAIL,
  POPULAR_DRINK_LIST_REQUEST,
  POPULAR_DRINK_LIST_SUCCESS,
  RANDOM_DRINK_LIST_FAIL,
  RANDOM_DRINK_LIST_REQUEST,
  RANDOM_DRINK_LIST_SUCCESS,
} from '../constants/drinkConstants'

export const getRandomDrinkList = () => async (dispatch) => {
  try {
    dispatch({ type: RANDOM_DRINK_LIST_REQUEST })

    const { data } = await axios.get(`/drinks/list/randomselection`)
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

    const { data } = await axios.get(`/drinks/list/popular`)
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

    const { data } = await axios.get(`/drinks/list/latest`)
    dispatch({ type: LATEST_DRINK_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LATEST_DRINK_LIST_FAIL,
      payload: error,
    })
  }
}
