import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import DrinkListScreen from './screens/DrinkListScreen'
import IngredientScreen from './screens/IngredientScreen'

const MainRoutes = () => (
  <>
    <Header />
    <main>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/drinklist/:drinktype' component={DrinkListScreen} />
      <Route path='/ingredient/:ingredientId' component={IngredientScreen} />
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
