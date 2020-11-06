import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import Body from './Body'
// import Show from './ShowFetch'
import Show from './ShowAxios'

function Navigation(props) {
  
  return (
    <Router>

      <Nav />

      <Switch>
        <Route path="/" exact={true}>
          <Body />
        </Route>
        <Route path="/new" exact={true}>
          <Form data={props}/>
        </Route>
        <Route path="/show-all" exact={true}>
          <Show />
        </Route>
      </Switch>
      
    </Router>
  )
}

export default Navigation