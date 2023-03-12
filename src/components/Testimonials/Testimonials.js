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
        <article className="testimonials-title">
            <h3> Janet Harrison </h3>
          <img
            className="person1"
            src={persona1}
            alt="lemon dessert"
            width="100px"
            height="80px"
          />
         
  <q>The service at The Little Lemon was impeccable. The staff were friendly, attentive, and made our dining experience truly enjoyable.</q>      
        <section className='stars'>
          <img className="star"src={star}/>
        </section> </article>
        
        <article className='testimonials-title'>
            <h3>Jane Fonda</h3>
        <img
            className="person2"
            src={persona2}
            alt="lemon dessert"
            width="100px"
            height="80px"
          />
         
        <q>I was pleasantly surprised by The Little Lemon's vegan options. The dishes were not only healthy but also delicious and satisfying.</q>
         <section className='stars'>
          <img className="star"src={star}/>
        </section></article>
        <article className='testimonials-title'>
            <h3>Rick Ross</h3>
        <img
            className="person3"
            src={persona3}
            alt="lemon dessert"
            width="100px"
            height="80px"
          />
        <q>The Little Lemon's dishes burst with fresh, zesty flavors! A must-try for anyone craving a refreshing meal.</q>
        <section className='stars'>
          <img className="star"src={star}/>
        </section></article>
        <article className='testimonials-title'>
            <h3>Rick Ross</h3>
        <img
            className="person3"
            src={persona4}
            alt="lemon dessert"
            width="100px"
            height="80px"
          />
        <q>This cozy restaurant may be small, but its menu packs a big punch. The Little Lemon's fusion of sweet and savory flavors is simply delightful.</q><section className='stars'>
          <img className="star"src={star}/>
        </section>
        </article>
        </section>
        </section>
        </>
  )
}

export default Testimonials
