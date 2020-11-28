import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

const MainRoutes = () => (
  <>
    <Header />
    <Route path='/' exact component={HomeScreen} />
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/login' component={LoginScreen} />
          <Route path='/signup' component={SignupScreen} />
          <Route component={MainRoutes} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
