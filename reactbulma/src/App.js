import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Test from './Test'

function App() {
  return (
    <div>
      
      <Router>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App