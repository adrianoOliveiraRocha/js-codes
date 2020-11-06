import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

  return (
    
    <div className="container">

      <ul className="nav">

        <li className="nav-item">
          <NavLink to="/"  exact className="nav-link"> Home </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/show-all" exact className="nav-link"> Show All </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/new" exact className="nav-link"> New </NavLink>
        </li>
            
      </ul> 

    </div>
    
  )
}

export default Nav