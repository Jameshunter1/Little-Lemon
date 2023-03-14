import React, {  useState } from 'react'
import "./Bookingpage.css"

const BookingForm = (selectedDate) => {

  const [bookings, setbookings] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
      
  })
  
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setbookings({ ...bookings, date: e.target.value });
    selectedDate(newDate);
  }
  return (
    <>
      <section className='booking-container'>
        <form  className="form">
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="res-date" value={bookings.date}
            onChange={handleDateChange} />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="res-time"
            value={bookings.time}
            onChange={(e) => setbookings({ ...bookings, time: e.target.value })}
          >
            {bookings.availabileTimes?.map((time, index) => (
              <option key={index} value={time}>{time}</option>
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


export default BookingForm