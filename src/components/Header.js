import React from 'react'
import food from "../images/food.jpg";
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
    <h2>Little Lemon</h2>
    <p>Chicago</p>
    <p></p>
    <img class="foodpic1"src={food} alt="food" width="296px" height="368px"/>
    
    </div>
     )
}

export default Header