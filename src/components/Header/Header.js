import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';
import food from "../../images/food.jpg";
import BookingForm from '../Bookingpage/Bookingpage';
import "./Header.css"


const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
};

const Header = () => {
  const initializeTimes = () => {
    // Return initial available times
    return [
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM"
    ];
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

   // Define handleUpdateTimes function
  const handleUpdateTimes = (selectedDate) => {
    // Determine available times based on selected date
      
    // Update available times
    dispatch({ type: "SET_TIMES", handleUpdateTimes }); 

   
  };
  return (
    <>
    
      <main className='header-container'>
        <section className='header-background'>
            <section className="content-left">
            
            <h2 className='header-title'>Little Lemon</h2>
            <p className='header-subtitle'>Chicago</p>
            <p className='header-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       
    </p>
            <button className='reservetable'><Link to="/booking" className='reservetable' onClick={<BookingForm availableTimes={availableTimes} handleUpdateTimes={handleUpdateTimes} dispatch={dispatch} />} >Reserve a table</Link></button>
            
</section>


<section className='content-right'>    
<img className="image"src={food} alt="food" width="296px" height="342px"/>     
</section>
</section>


     </main>
   
    </>
     )
}

export default Header