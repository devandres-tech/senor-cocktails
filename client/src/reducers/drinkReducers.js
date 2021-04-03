import {
  DRINK_DETAILS_FAIL,
  DRINK_DETAILS_REQUEST,
  DRINK_DETAILS_SUCCESS,
  LATEST_DRINK_LIST_FAIL,
  LATEST_DRINK_LIST_REQUEST,
  LATEST_DRINK_LIST_SUCCESS,
  POPULAR_DRINK_LIST_FAIL,
  POPULAR_DRINK_LIST_REQUEST,
  POPULAR_DRINK_LIST_SUCCESS,
  RANDOM_DRINK_LIST_FAIL,
  RANDOM_DRINK_LIST_REQUEST,
  RANDOM_DRINK_LIST_SUCCESS,
  SEARCH_DRINKS_FAIL,
  SEARCH_DRINKS_REQUEST,
  SEARCH_DRINKS_SUCCESS,
  DRINK_LIST_REQUEST,
  DRINK_LIST_SUCCESS,
  DRINK_LIST_FAIL,
} from '../constants/drinkConstants'

export const drinkDetailsReducer = (state = { drinkDetails: [] }, action) => {
  switch (action.type) {
    case DRINK_DETAILS_REQUEST:
      return { loading: true, drinkDetails: [] }

    case DRINK_DETAILS_SUCCESS:
      return { loading: false, drinkDetails: action.payload }

    case DRINK_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

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

export const randomDrinkListReducer = (
  state = { randomDrinkList: [], loading: true },
  action
) => {
  switch (action.type) {
    case RANDOM_DRINK_LIST_REQUEST:
      return { loading: true, randomDrinkList: [] }

    case RANDOM_DRINK_LIST_SUCCESS:
      return { loading: false, randomDrinkList: action.payload }

    case RANDOM_DRINK_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const popularDrinkListReducer = (
  state = { popularDrinkList: [] },
  action
) => {
  switch (action.type) {
    case POPULAR_DRINK_LIST_REQUEST:
      return { loading: true, popularDrinkList: [] }

    case POPULAR_DRINK_LIST_SUCCESS:
      return { loading: false, popularDrinkList: action.payload }

    case POPULAR_DRINK_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const latestDrinkListReducer = (
  state = { latestDrinkList: [], loading: true },
  action
) => {
  switch (action.type) {
    case LATEST_DRINK_LIST_REQUEST:
      return { loading: true, latestDrinkList: [] }

    case LATEST_DRINK_LIST_SUCCESS:
      return { loading: false, latestDrinkList: action.payload }

    case LATEST_DRINK_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const searchDrinksReducer = (
  state = { searchDrinkList: { data: [], listTitle: '' } },
  action
) => {
  switch (action.type) {
    case SEARCH_DRINKS_REQUEST:
      return { loading: true, searchDrinkList: { data: [], listTitle: '' } }

    case SEARCH_DRINKS_SUCCESS:
      return {
        loading: false,
        searchDrinkList: action.payload,
      }

    case SEARCH_DRINKS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
