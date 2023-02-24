import React from 'react'
import "./Main.css";
import bruchetta from "../images/bruchetta.jpeg"
import greek from "../images/greek salad.jpg"
import lemon from "../images/lemon dessert.jpg"


const Main = () => {
  return (
    <main className='main-container'>
      <div className='main-heading'>
        <h2 >This Weeks Specials!</h2>
        </div>
      <button className='heading-button'>Online Menu</button>
      
      <article className='images'>
      
      <img  className="bruchetta"src={bruchetta} alt="bruchetta" width="303px"/>
  
      
      <img className="greek"src={greek} alt="greek salad" width="303px" />
      
      
      <img className="lemon"src={lemon} alt="lemon dessert" width="303px"/>
      </article>
      
      </main>
    
  )
}

export default Main