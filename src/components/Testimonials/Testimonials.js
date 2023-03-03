import React from 'react'
import "./Testimonials.css"
import  persona1  from "../../images/persona1.png";
import   persona2  from"../../images/persona2.png";
import   persona3  from"../../images/persona3.png";
import  persona4  from"../../images/persona4.png";

const Testimonials = () => {
  return (
    <>
      <main className='testimonials-container'>
        <section className='personas'>
          
          <article className='review1'>
            <h2>User Profile</h2>
<img src={persona1} width="64px" height="40px"></img>
        </article>
        
          <article className='review2'>
            <h2>User Profile</h2>
        <img  src={persona2} width="64px" height="40px"/>
        </article>
          <article className='review3'>
            <h2>User Profile</h2>
        <img  src={persona3} width="64px" height="40px"></img>
        </article>
          <article className='review4'>
            <h2>User Profile</h2>
        <img  src={persona4} width="64px" height="40px"></img>
        </article>
      </section>
      </main>
        </>
  )
}

export default Testimonials
