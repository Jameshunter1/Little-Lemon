import React from 'react'
import food from "../../images/food.jpg";
import "./Header.css"

const Header = () => {
  return (
    <>
    
      <main className='header-container'>
        <section className='header-background'>
          <section className='content'>
            <section className="content-left">
    <h2>Little Lemon</h2>
    <p>Chicago</p>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt
       ut labore et dolore magna aliqua.<br/>
    </p>
    <button className='reservetable'>Reserve a table</button>
</section>


<section className='content-right'>    
<img className="image"src={food} alt="food" width="296px" height="368px"/>     
</section>
</section>
</section>
     </main>
   
    </>
     )
}

export default Header