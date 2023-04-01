import React from 'react';
import { Link } from 'react-router-dom';
import food from "../../images/food.jpg";

import "./Header.css";

const Header = () => {
  

  return (
    <>
      <main className='header-container'>
        <section className='header-background'>
            <section className="content-left">
            
            <h2 className='header-title'>Little Lemon</h2>
            <p className='header-subtitle'>Chicago</p>
            <p className='header-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

     
        <Link
          to="/booking"
          className="reservetable"
        
        > <button className="reservetable">
          Reserve a table
              </button>
            </Link>
              
    
        </section>    
<section className='content-right'>    
<img className="image"src={food} alt="food" width="296px" height="342px"/>     
</section>
          </section>         
     </main> 
    </>
  ) 
}
export default Header