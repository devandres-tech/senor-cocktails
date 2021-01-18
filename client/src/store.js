import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  randomDrinkListReducer,
  latestDrinkListReducer,
  popularDrinkListReducer,
  searchDrinksReducer,
} from './reducers/drinkReducers'

import {
  randomIngredientListReducer,
  popularIngredientListReducer,
  ingredientDetailsReducer,
} from './reducers/ingredientReducers'

const reducer = combineReducers({
  randomDrinkList: randomDrinkListReducer,
  latestDrinkList: latestDrinkListReducer,
  popularDrinkList: popularDrinkListReducer,
  searchDrinkList: searchDrinksReducer,
  randomIngredientList: randomIngredientListReducer,
  popularIngredientList: popularIngredientListReducer,
  ingredientDetails: ingredientDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
