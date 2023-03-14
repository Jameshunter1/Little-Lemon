import React, { useReducer, useState } from "react";
import "./Main.css";
import bruchetta from "../../images/bruchetta.jpg";
import greek from "../../images/greek salad.jpg";
import lemon from "../../images/lemon dessert.jpg";
import vector from "../../images/Vector.png";

// Define an array of available times
const availableTimes = [
"11:00 AM",
"12:00 PM",
"1:00 PM",
"5:00 PM",
"6:00 PM",
"7:00 PM"
];

// Function to initialize the times state with the available times
const initializeTimes = () => {
return availableTimes;
};

// Function to update the times state based on actions
const updateTimes = (times, action) => {
switch (action.type) {
// If the action type is "update", return the payload as the new state
case 'update':
return action.payload;
// Otherwise, return the original state
default:
return times;
}
};

// Define the main component
const Main = () => {
// Use the useReducer hook to initialize the times state
// Pass the updateTimes function and initializeTimes function as arguments
const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

// Use the useState hook to initialize the selectedDate state
const [selectedDate, setSelectedDate] = useState("");

// Update the selected date state
setSelectedDate(selectedDate);

// Call the updateTimes function with the current availableTimes and selected date
const newTimes = updateTimes(selectedDate, availableTimes);

// Update the times state with the new value
dispatch({ type: 'update', payload: newTimes });

  return (
    <>
    <main className="main-container">
      <section className="heading-container">
        <h2 className="main-heading">This Weeks Specials!</h2>

        <button className="heading-button">Online Menu</button>
      </section>
      <section className="images-container">
      <section className="images">
        <article className="title">
          <img
            className="bruchetta"
            src={bruchetta}
            alt="bruchetta"
          />
          <span className="span">
          <p>Bruchetta</p>
          <p className="price">$12.99</p>
          </span>
          <p className="desc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
          <span className="delivery-span">
            <p>Order Delivery</p>
            <img className="delivery-icon"src={vector} alt="delivery icon"/>
            </span>
        </article>
        <article className="title">
          <img className="greek" src={greek} alt="greek salad"/>
          <span className="span"><p>Greek Salad</p>
          <p className="price">$12.99</p></span>
         <p className="desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
         <span className="delivery-span">
            <p>Order Delivery</p>
            <img  className="delivery-icon" src={vector} alt="delivery-icon"/>
            </span>
       </article>
         
        <article className="title">
          <img
            className="lemon"
            src={lemon}
            alt="lemon dessert"
          />
          <span className="span">
          <p>Lemon Dessert</p>
          <p className="price">$12.99</p></span>
          <p className="desc">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <span className="delivery-span">
            <p>Order Delivery</p>
            <img className="delivery-icon"src={vector} alt="delivery icon"/>
          </span>
            </article>
          </section>
      </section>
      
    </main></>
  );
};
export default Main;
