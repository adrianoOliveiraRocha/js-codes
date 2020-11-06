import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink className="nav-link" to="#">Item Menu</NavLink>        
      </li>
    </ul>
  )
}

export default Nav