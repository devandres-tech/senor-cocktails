import axios from '../axios'
import {
  DRINK_LIST_FAIL,
  DRINK_LIST_REQUEST,
  DRINK_LIST_SUCCESS,
} from '../constants/drinkConstants'

export const getDrinkList = (drinkListType) => async (dispatch) => {
  try {
    dispatch({ type: DRINK_LIST_REQUEST })
    const { data } = await axios.get(`/${drinkListType}.php`)
    dispatch({ type: DRINK_LIST_SUCCESS, payload: data.drinks })
  } catch (error) {
    dispatch({
      type: DRINK_LIST_FAIL,
      payload: error,
    })
  }
}
