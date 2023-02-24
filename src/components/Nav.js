import React from 'react'
import logo from "../images/logo.svg"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='nav-container'>
    
        <img className="navbar-logo"src={logo} alt="logo"/>
        <ul className="navbar-links">
            <li className='nav-item'><a href="#home">Home</a></li>
            <li className='nav-item'><a href="#about">About</a></li>
            <li className='nav-item'><a href="#menu">Menu</a></li>
            <li className='nav-item'><a href="#reservation">Reservations</a></li>
            <li className='nav-item'><a href="#order">Order Online</a></li>
        </ul>
    
    </nav>
  )
}

export default Nav