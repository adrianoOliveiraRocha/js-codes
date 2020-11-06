import React from 'react';
import logo from './images/fs.png';
import './css/App.css';
import Sum from './componentes/Sum'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Simple Calculator
        </p>
        <Sum />
      </header>
    </div>
  );
}

export default App;
