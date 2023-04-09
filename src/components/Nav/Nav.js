import React from 'react'
import logo from "../../images/logo.svg"
import "./Nav.css"
import { Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav-container">
      <img className="navbar-logo" src={logo} alt="logo" />
      <ul className="navbar-links">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/booking" className="nav-item">
          Reservation
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </ul>
    </nav>
  );
}

export default Nav