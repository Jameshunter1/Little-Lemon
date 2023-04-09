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
      <main className="booking-container">
        <Breadcrumb paths={[{ name: "Home", url: "/" }]} />
        <h1 className="form-header">Book a table with us!</h1>

        <form className="booking-form" onSubmit={handleSubmit}>
          <section className="header-background">
            <section className="booking-row1">
              <label htmlFor="indoor">
                Indoor Seating
                <input type="radio" className="indoor" />
              </label>
              <label htmlFor="outdoor">
                Outdoor Seating
                <input type="radio" className="outdoor" />
              </label>
            </section>
            <section className="booking-row2">
              <label htmlFor="date" className="date-label">
                Date
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookings.date}
                  onChange={handleDateChange}
                  required
                  placeholder="Select a date"
                />
              </label>
              <label htmlFor="time" className="time-label">
                Time
              </label>
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
                  ))}
              </select>
            </section>
            <section className="booking-row3">
              <label htmlFor="guests" className="guest-label">
                Number of guests
              </label>
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
              <label htmlFor="occasion" className="occasion-label">
                Occasion
              </label>
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
            </section>
          </section>
          <button type="submit" className="booking-btn">
            Reserve a table
          </button>
        </form>
      </main>
    </>
  );
};

export default BookingForm;