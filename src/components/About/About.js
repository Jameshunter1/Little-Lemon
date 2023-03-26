import React from 'react'
import "./About.css"
import mario from "../../images/Mario and Adrian b.jpg"
import adrian from "../../images/Mario and Adrian A.jpg"


const About = () => {
  return (
    <>
    <main className='about-container'>
      
        <section className="about-left">
          <article className='about-title'>
    <h2 className='about-heading'>Little Lemon</h2>
    <p>Chicago</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque nisi et commodo maximus. Mauris sollicitudin faucibus interdum. Etiam ornare eu eros nec interdum. Etiam blandit euismod ligula at molestie. Fusce malesuada dui ut ex lacinia consequat. Pellentesque aliquam enim orci. Phasellus tincidunt libero lacus, in sagittis leo sodales ac. Mauris quis felis maximus, elementum est vitae, sodales risus.</p>
   </article></section> 
   <section className="about-right">
    <img src={adrian} className="mario" alt="mario" width="300px" height="300px"/>
      <img className="adrian"src={mario} alt="adrian" width="300x" height="300px"/>
    
    </section></main>
    </>
  )
}

export default About