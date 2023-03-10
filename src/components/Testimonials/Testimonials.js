import React from 'react'
import persona1 from "../../images/persona1.png"
import persona2 from "../../images/persona2.png"
import persona3 from "../../images/persona3.png"
import persona4 from "../../images/persona4.png"

import "./Testimonials.css"
import star from "../../images/Star 1.png"


const Testimonials = () => {
  return (
    <>
    <section className='testimonials-container'>
        <h1 className="testimonials-header">Testimonials</h1>
        <section className='testimonials-images'>
        <article className="title">
            <h3> Janet Harrison </h3>
          <img
            className="person1"
            src={persona1}
            alt="lemon dessert"
            width="60px"
            height="38px"
          />
          <img src={star}/>
        </article>
        
        <article className='title'>
            <h3>Jane Fonda</h3>
        <img
            className="person2"
            src={persona2}
            alt="lemon dessert"
            width="60px"
            height="38px"
          />
        </article>
        <article className='title'>
            <h3>Rick Ross</h3>
        <img
            className="person3"
            src={persona3}
            alt="lemon dessert"
            width="60px"
            height="38px"
          />
        </article>
        <article className='title'>
            <h3>Rick Ross</h3>
        <img
            className="person3"
            src={persona4}
            alt="lemon dessert"
            width="60px"
            height="38px"
          />
        </article>
        </section>
        </section>
        </>
  )
}

export default Testimonials
