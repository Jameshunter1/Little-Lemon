import React from "react";
import "./Main.css";
import bruchetta from "../images/bruchetta.jpeg";
import greek from "../images/greek salad.jpg";
import lemon from "../images/lemon dessert.jpg";

const Main = () => {
  return (
    <main className="main-container">
      <section className="heading-container">
        <h2 className="main-heading">This Weeks Specials!</h2>

        <button className="heading-button">Online Menu</button>
      </section>
      <section className="images">
        <article className="title">
          {" "}
          <img
            className="bruchetta"
            src={bruchetta}
            alt="bruchetta"
            width="303px"
            height="210px"

          /><span className="span">
          <p>Bruchetta</p>
          <p className="price">$12.99</p></span>
          <p className="desc">krfdngkrnjhnrkdjhkjdkjhgdkjh</p>
        </article>
        <article className="title">
          <img className="greek" src={greek} alt="greek salad" width="303px" height="210px"/>
          <span className="span"><p>Greek Salad</p>
          <p className="price">$12.99</p></span>
         <p className="desc">skfdskjghiuahgfiuawheuighgjdighk</p>
       </article>
         
        <article className="title">
          <img
            className="lemon"
            src={lemon}
            alt="lemon dessert"
            width="303px"
            height="210px"
          />
          <span className="span">
          <p>Lemon Dessert</p>
          <p className="price">$12.99</p></span>
          <p className="desc">dgsiodghosdghiudshgiuhsdiughiudshgu</p>
        </article>
      </section>
    </main>
  );
};
export default Main;
