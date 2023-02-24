import React from 'react'
import food from "../images/food.jpg";
import "./Header.css"

const Header = () => {
  return (
    <>
    
      <main className='header-container'>
            <div className='header-background'>
            <div className="heading">
    <h2>Little Lemon</h2>
    <p>Chicago</p>
    <p> akfhaoifiuriafiugufgad<br/>
        fiuahgheiughewhiughuie<br/>
        wugehguhewiuhgiuhfdgdd<br/>
        dddddddddddddddddddddd<br/>
        ddddddddddddsdsfsgdsgd<br/>
    </p>
    <button className='reservetable'>Reserve a table</button>
    </div>
    
    <img className="image"src={food} alt="food" width="296px" height="368px"/>
     </div>
     </main>
   
    </>
     )
}

export default Header