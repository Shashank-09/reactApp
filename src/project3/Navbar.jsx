import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='menu_style'> 
      <NavLink exact activeClassName="active_class" to="/"> About Us</NavLink>
      <NavLink exact activeClassName="active_class" to="/contact"> Contact Us</NavLink>
      <NavLink exact activeClassName="active_class" to="/search"> Service </NavLink>
      <NavLink exact activeClassName="active_class" to="/service"> Service </NavLink>
      <NavLink exact activeClassName="active_class" to="/user/shashank/tulsikar"> User </NavLink>
    </div>
    </>
  )
}

export default Navbar