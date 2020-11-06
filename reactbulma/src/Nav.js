import React from 'react';
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div>      

      <nav className="navbar" role="navigation" aria-label="main navigation">
        
        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-start">
            <NavLink className="navbar-item" to="/home">Home</NavLink>
            <NavLink className="navbar-item" to="/test">Test</NavLink>
            
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-item" to="/home">More</NavLink>
              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to="/item1">Item Menu 1</NavLink>
                <NavLink className="navbar-item" to="/item2">Item Menu 2</NavLink>
                <NavLink className="navbar-item" to="/item3">Item Menu 3</NavLink>  
                <NavLink className="navbar-item" to="/item4">Item Menu 4</NavLink>

              </div>
              
            </div>

          </div>

        </div>

      </nav>

    </div>
  );
}

export default App;
