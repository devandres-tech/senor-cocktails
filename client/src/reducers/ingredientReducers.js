import {
  INGREDIENT_DETAILS_FAIL,
  INGREDIENT_DETAILS_REQUEST,
  INGREDIENT_DETAILS_SUCCESS,
  POPULAR_INGREDIENT_LIST_FAIL,
  POPULAR_INGREDIENT_LIST_REQUEST,
  POPULAR_INGREDIENT_LIST_SUCCESS,
  RANDOM_INGREDIENT_LIST_FAIL,
  RANDOM_INGREDIENT_LIST_REQUEST,
  RANDOM_INGREDIENT_LIST_SUCCESS,
} from '../constants/ingredientActions'

export const randomIngredientListReducer = (
  state = { randomIngredientList: [] },
  action
) => {
  switch (action.type) {
    case RANDOM_INGREDIENT_LIST_REQUEST:
      return { loading: true, randomIngredientList: [] }

    case RANDOM_INGREDIENT_LIST_SUCCESS:
      return { loading: false, randomIngredientList: action.payload }

    case RANDOM_INGREDIENT_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const popularIngredientListReducer = (
  state = { popularIngredientList: [] },
  action
) => {
  switch (action.type) {
    case POPULAR_INGREDIENT_LIST_REQUEST:
      return { loading: true, popularIngredientList: [] }

    case POPULAR_INGREDIENT_LIST_SUCCESS:
      return { loading: false, popularIngredientList: action.payload }

    case POPULAR_INGREDIENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const ingredientDetailsReducer = (
  state = { ingredientDetails: {} },
  action
) => {
  switch (action.type) {
    case INGREDIENT_DETAILS_REQUEST:
      return { loading: true, ingredientDetails: {} }

    case INGREDIENT_DETAILS_SUCCESS:
      return { loading: false, ingredientDetails: action.payload }

    case INGREDIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
