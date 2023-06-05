import React from 'react'
import {  NavLink } from 'react-router-dom'

export const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "darkblue" : "white",
      textDecoration: isActive ? "none" : "underline",
      fontSize:"30px",
      
    };
  };
  return (
    <div className='Header'>
    
    <NavLink style={navLinkStyles} to={'/register'}>RegistrationForm</NavLink>
    <NavLink style={navLinkStyles} to={'/login'}>login</NavLink>
    <NavLink style={navLinkStyles} to={'/Details'}>Details</NavLink>
    
    
    </div>
  )
}

export default Header