import React from 'react'
import "./Footer.css"
import restaurant from "../../images/restaurant.jpg"


const Footer = () => {
  return (
    <>
      <main className='footer-container'>
        <section className='footer-logo'>

          <img src={restaurant} alt="restaurant" width="300px"
          />
        </section>
      <section className='footer-menu'>
          <article className='menu-left'>
          
        <ul className='menu-left-list'>
        <li><a href="#name">Little Lemon</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#order">Order Online</a></li>
        <li>Login</li>
        </ul>
        </article>
          <article className="menu-middle">
            <ul className='menu-middle-list'>
            <h3>Contact</h3>
            <li>123 Little Lemon Boulevard
            </li>
            <li>102-304-5678
            </li> <li>Littlelemon@tastyfood.com</li></ul> </article>
          <article className='menu-right'>
  
          </article>
        </section>
 </main>       </>
  )
}

export default Footer