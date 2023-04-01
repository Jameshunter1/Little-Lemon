import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import { submitAPI } from "./BookingAPI";
import "./BookingPage.css"

const BookingForm = ({ availableTimes, dispatch, updateTimes}) => {
     
  const navigate = useNavigate();
  
  function submitForm(formData) {
    const result = submitAPI(formData);
    if (result) {
      navigate('/booking-confirmed');
    }
  }
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
  dispatch({ type: 'UPDATE_TIMES', times: [] }); // Clear the availableTimes state
  const date = new Date(e.target.value);
  updateTimes(date); // Dispatch state change when the date is changed
};
 function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    submitForm(formData);
  }
  return (
    <>
      <section className='booking-container'>
         <Breadcrumb paths={[
        { name: 'Home', url: '/' },
        
   
  ]}/> <h1 className="form-header">Book a table with us!</h1>
        
        <form className="form" onSubmit={handleSubmit}>

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
            <option>Business meeting</option>
            <option>Other</option>
          </select>
          <Link to="/booking-confirmed">
            <input type="submit" value="Make Your reservation" />
            </Link>
        </form>
      </section>                
    </>
  )
}
export default BookingForm;