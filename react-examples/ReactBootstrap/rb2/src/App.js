import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
