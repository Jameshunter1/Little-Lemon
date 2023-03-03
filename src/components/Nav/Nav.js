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
            <Link to="/about" >About</Link>
            <Link to="/menu" >Menu</Link>
            <Link to="/reserve">Reservation</Link>  
        <Link to="/contact" >Contact</Link>
        <Link to="/order" >Order Online</Link>
        </ul>
    
    </nav>
  )
}

export default Nav