import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar
