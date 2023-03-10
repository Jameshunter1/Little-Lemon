import React from 'react'
import logo from "../../images/logo.svg"
import "./Nav.css"
import { Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav className='nav-container'>
    
        <img className="navbar-logo"src={logo} alt="logo"/>
        <ul className="navbar-links">
        
            <Link to="/">Home</Link>
            <Link to="/about" className='nav-item'>About</Link>
            <Link to="/menu" className='nav-item'>Menu</Link>
            <Link to="/reserve" className='nav-item'>Reservation</Link>  
             <Link to="/contact" className='nav-item'>Contact</Link>          
             <li className='order'><a href="#order">Order Online</a></li>
        </ul>
    
    </nav>
  )
}

export default Nav