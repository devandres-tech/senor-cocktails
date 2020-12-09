import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  randomDrinkListReducer,
  latestDrinkListReducer,
  popularDrinkListReducer,
} from './reducers/drinkReducers'

import {
  randomIngredientListReducer,
  popularIngredientListReducer,
} from './reducers/ingredientReducers'

const reducer = combineReducers({
  randomDrinkList: randomDrinkListReducer,
  latestDrinkList: latestDrinkListReducer,
  popularDrinkList: popularDrinkListReducer,
  randomIngredientList: randomIngredientListReducer,
  popularIngredientList: popularIngredientListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
