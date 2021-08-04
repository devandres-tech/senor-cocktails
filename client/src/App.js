import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import IngredientDetailsScreen from './screens/IngredientDetailsScreen'
import IngredientListScreen from './screens/IngredientListScreen'
import DrinkDetailsScreen from './screens/DrinkDetailsScreen'
import DrinkListScreen from './screens/DrinkListScreen'

const MainRoutes = () => (
  <>
    <Header />
    <main>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/drink-list/:categoryList' component={DrinkListScreen} />
      <Route
        path='/ingredient-list/:categoryList'
        component={IngredientListScreen}
      />
      <Route
        path='/ingredient/:ingredientId'
        component={IngredientDetailsScreen}
      />
      <Route path='/drink/:drinkId' component={DrinkDetailsScreen} />
    </main>
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginScreen} />
        <Route path='/signup' component={SignupScreen} />
        <Route component={MainRoutes} />
      </Switch>
    </Router>
  )
}

export default App
