import React from 'react'
import food from "../../images/food.jpg";
import "./Header.css"

const Header = () => {
  return (
    <>
    
      <main className='header-container'>
            
            <section className="heading">
    <h2>Little Lemon</h2>
    <p>Chicago</p>
    <p> akfhaoifiuriafiugufgad<br/>
        fiuahgheiughewhiughuie<br/>
        wugehguhewiuhgiuhfdgdd<br/>
        dddddddddddddddddddddd<br/>
        ddddddddddddsdsfsgdsgd<br/>
    </p>
    <button className='reservetable'>Reserve a table</button>
    
    
   
     </section>
      <img className="image"src={food} alt="food" width="296px" height="400px"/></main>
   
    </>
     )
}

export default Header