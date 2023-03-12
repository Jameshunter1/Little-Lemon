import React from 'react'
import "./Footer.css"
import restaurant from "../../images/restaurant.jpg"


const Footer = () => {
  return (
    <>
      <main className='footer-container'>
        <section className='footer-logo'>

          <img src={restaurant} alt="restaurant" width="168px" height="295px"/>
        </section>
      <section className='footer-menu'>
      <article className='menu-left'>
        <ul>
        <li><a href="#name">Name</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#order">Order Online</a></li>
        <li>Login</li>
        </ul>
        </article>
        <article className='menu-right'>
        <ul>
            <li>Contact
            </li>
            <li>Address
            </li>
            <li>Phone Number
            </li> <li>Email</li>
        
        </ul></article></section>
 </main>       </>
  )
}

export default Footer