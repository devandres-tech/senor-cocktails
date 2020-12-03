import {
  DRINK_LIST_FAIL,
  DRINK_LIST_REQUEST,
  DRINK_LIST_SUCCESS,
} from '../constants/drinkConstants'

export const drinkListReducer = (state = { drinkList: [] }, action) => {
  switch (action.type) {
    case DRINK_LIST_REQUEST:
      return { loading: true, drinkList: [] }

    case DRINK_LIST_SUCCESS:
      return { loading: false, drinkList: action.payload }

    case DRINK_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
