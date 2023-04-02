import { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import "./BookingPage.css"

const BookingForm = ({ availableTimes, dispatch, updateTimes, submitForm, handleSubmit }) => {
  // Setting up state with the useState hook
  const [bookings, setBookings] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  // Form Validation
  const [dateValid, setDateValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);
  const [guestsValid, setGuestsValid] = useState(false);
  const [occasionValid, setOccasionValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Validate date
  const validateDate = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const isValid =
      selectedDate instanceof Date &&
      !isNaN(selectedDate) &&
      selectedDate >= currentDate;
    setDateValid(isValid);
    validateform();
    return isValid;
  };

  // Validate time
  const validateTime = (time) => {
    const isValid = availableTimes.includes(time);
    setTimeValid(isValid);
    validateform();
    return isValid;
  };

  // Validate guests
  const validateGuests = (guests) => {
    const isValid = guests > 1 && guests < 10;
    setGuestsValid(isValid);
    validateform();
    return isValid;
  };

  // Validate occasion
  const validateOccasion = (occasion) => {
    const isValid = occasion !== "";
    setOccasionValid(isValid);
    validateform();
    return isValid;
  };

  // Validate Form
  const validateform = () => {
    const isFormValid = dateValid && timeValid && guestsValid && occasionValid;
    setFormValid(isFormValid);
  };

  // The handleDateChange function is called when the date input value changes
  const handleDateChange = (e) => {
    setBookings({ ...bookings, date: e.target.value });
    validateDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', times: [] }); // Clear the availableTimes state
    const date = new Date(e.target.value);
    updateTimes(date); // Dispatch state change when the date is changed
  };

  // The handleSubmit function is called when the form is submitted
  


  return (
    <>
      <main className='booking-container'>
     
       <Breadcrumb  paths={[
        { name: 'Home', url: '/' },
        
   
        ]}  />
        <h1 className="form-header">Book a table with us!</h1>  
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookings.date}
            onChange={handleDateChange}
            required
          />
         
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            required 
            value={bookings.time}
            onChange={(e) => {
              setBookings({ ...bookings, time: e.target.value });
              validateTime(e.target.value);
           }}
            
          >
           
         

            {Array.isArray(availableTimes) &&
availableTimes?.map((time) => (
<option key={time} value={time}>
{time}
</option>
))}</select>

<label htmlFor="guests">Number of guests</label>
<input
type="number"
id="guests"
name="guests"
required
min="1"
max="9"
onChange={(e) => {
setBookings({ ...bookings, guests: e.target.value });
validateGuests(e.target.value);
}}
/>


<label htmlFor="occasion">Occasion</label>
<select
id="occasion"
name="occasion"
required
onChange={(e) => {
setBookings({ ...bookings, occasion: e.target.value });
validateOccasion(e.target.value);
}}
>
<option value="">-- Please choose an occasion --</option>
<option value="business">Business</option>
<option value="casual">Casual</option>
<option value="romantic">Romantic</option>
</select>

<button type="submit" className="booking-btn" >
Book a table
</button>
</form>

</main>
</>
);
};

export default BookingForm;