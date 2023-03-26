import {  useState } from "react";
import "./BookingPage.css"
const BookingForm = ({ availableTimes, dispatch, updateTimes }) => {
     
   
  // Setting up state with the useState hook
  const [bookings, setbookings] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",  
  });


  // The handleDateChange function is called when the date input value changes
const handleDateChange = (e) => {
  setbookings({ ...bookings, date: e.target.value });
  dispatch({ type: 'UPDATE_TIMES', payload: [] }); // Clear the availableTimes state
  const date = new Date(e.target.value);
  updateTimes(date); // Dispatch state change when the date is changed
};
 
  return (
    <>
      <section className='booking-container'>
        <h1>Book a table with us!</h1>
        <form className="form">

          {/* Label for date input */}
          <label htmlFor="res-date">Choose date</label>
           {/* Date input */}
          <input
            type='date'
            id='res-date'
            name='res-date'
            value={bookings.date} // The value of this input is set to the "date" property of the "bookings" state
            onChange={handleDateChange}
          // The onChange event handler is set to the handleDateChange function );
          />
                   {/* Label for time input */}
          <label htmlFor="res-time">Choose time</label>
         <select
  id="res-time"
  name="res-time"
  value={bookings.time}
  onChange={(e) => setbookings({ ...bookings, time: e.target.value })}
>
            
          
  {availableTimes && availableTimes?.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
</select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"     
            id="guests"
            name="guests"
            value={bookings.guests}
            onChange={(e) => setbookings({ ...bookings, guests: e.target.value })}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={bookings.occasion}
            onChange={(e) => setbookings({ ...bookings, occasion: e.target.value })}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>
      </section>                
    </>
  )
}
export default BookingForm;