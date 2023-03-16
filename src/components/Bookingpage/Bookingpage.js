import React, { useState } from 'react';
import "./Bookingpage.css";

// Defining a functional component
const BookingForm = ({ selectedDate, availableTimes, setAvailableTimes, dispatch }) => {
  // Setting up state with the useState hook
  const [bookings, setbookings] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "", 
  });
 
  return (
    <>
      <section className='booking-container'>
        <form  className="form">

          {/* Label for date input */}
          <label htmlFor="res-date">Choose date</label>

          {/* Date input */}
          <input
            type="date"
            id="res-date"
            name="res-date"
            value={bookings.date} // The value of this input is set to the "date" property of the "bookings" state
            onChange={(e) => setbookings({ ...bookings, date:e.target.value })}  // When the user selects a new date, this updates the "bookings" state to reflect the new date    
          />

          {/* Label for time input */}
          <label htmlFor="res-time">Choose time</label>

          {/* Time input */}
          <input
            type="time"
            id="res-time"
            name="res-time"
            value={bookings.time} // The value of this input is set to the "time" property of the "bookings" state
            onChange={(e) => setbookings({ ...bookings, time:e.target.value })} // When the user selects a new value from the dropdown, this updates the "bookings" state to reflect the new value
          >
            {/* Generating options for the dropdown from the "availableTimes" state */}
            {availableTimes?.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </input>
          <input
  type="number"
  id="res-guests"
  name="res-guests"
  value={bookings.guests}
            onChange={(e) => setbookings({ ...bookings, guests: e.target.value })}
/>

<select
  type="dropdown"
  id="res-occasion"
  name="res-occasion"
  value={bookings.occasion}
            onChange={(e) => setbookings({ ...bookings, occasion: e.target.value })}
          ><option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
        </form>
      </section>
    </>
  );
};
export default BookingForm;