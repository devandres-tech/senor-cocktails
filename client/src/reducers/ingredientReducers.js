import {
  RANDOM_INGREDIENT_LIST_FAIL,
  RANDOM_INGREDIENT_LIST_REQUEST,
  RANDOM_INGREDIENT_LIST_SUCCESS,
  POPULAR_INGREDIENT_LIST_REQUEST,
  POPULAR_INGREDIENT_LIST_SUCCESS,
  POPULAR_INGREDIENT_LIST_FAIL,
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

export const popularIngredientList = (
  state = { popularIngredientList: [] },
  action
) => {
  switch (action.type) {
    case POPULAR_INGREDIENT_LIST_REQUEST:
      return { loading: false, popularIngredientList: [] }

    case POPULAR_INGREDIENT_LIST_SUCCESS:
      return { loading: false, popularIngredientList: action.payload }

    case POPULAR_INGREDIENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
