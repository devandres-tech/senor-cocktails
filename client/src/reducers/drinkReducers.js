import {
  DRINK_RANDOM_FAIL,
  DRINK_RANDOM_REQUEST,
  DRINK_RANDOM_SUCCESS,
} from '../constants/drinkConstants'

export const drinkRandomReducer = (state = { randomDrinks: [] }, action) => {
  switch (action.type) {
    case DRINK_RANDOM_REQUEST:
      return { loading: true, randomDrinks: [] }

    case DRINK_RANDOM_SUCCESS:
      console.log('SUCESS', action.payload)
      return { loading: false, randomDrinks: action.payload }

    case DRINK_RANDOM_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
