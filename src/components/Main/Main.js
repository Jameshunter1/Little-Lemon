import React, { useReducer, useState } from "react";
import "./Main.css";
import bruchetta from "../../images/bruchetta.jpg";
import greek from "../../images/greek salad.jpg";
import lemon from "../../images/lemon dessert.jpg";
import vector from "../../images/Vector.png";

// Define an array of available times
const availableTimes = [  "11:00 AM",  "12:00 PM",  "1:00 PM",  "5:00 PM",  "6:00 PM",  "7:00 PM"];

// Define a function to initialize the available times
export function initializeTimes(availableTimes) {
  // Create an empty object to store the available times
  const initialTimes = {};
  // Loop through the available times and add each time to the object with a value of true
  availableTimes?.forEach((time) => {
    initialTimes[time] = true;
  });
  // Return the object containing the available times
  return initialTimes;
}

// Define a function to update the available times based on the selected date
export function updateTimes() {
  // For now, return the same available times regardless of the date
  return availableTimes;
}

const Main = () => {
  // Initialize the selected time to false
  const [selectedTime, setSelectedTime] = useState(false);

  // Define a function to handle the selection of a time
  const handleTimeSelection = (time) => {
    // Set the selected time
    setSelectedTime(time);
    // Update the available times state to mark the selected time as unavailable
    setAvailableTimesState({ [time]: false });
  };

  // Initialize the available times state using the initializeTimes function and the availableTimes array
  const [availableTimesState, setAvailableTimesState] = useReducer(initializeTimes, availableTimes);


      return(
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
      
    </main>
  );
};
export default Main;
