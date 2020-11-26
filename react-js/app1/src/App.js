import React, { Component } from 'react';
import './App.css';
import Component1 from './functional/component1';
import Container1 from './containers/container1'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Container1 nickname="Adr"/>
          <Component1
            name="Adriano" 
            age={47}
          />
        
      </div>
    );
  }

}

export default App;
