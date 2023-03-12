import React, { useState } from 'react'
import "./Bookingpage.css"



const BookingForm = () => {

   const [bookings, setbookings] = useState({
      date: "",
      time: "",
      guests: "",
      occasion: "",
      availabileTimes: ["12:00pm","1:00pm","2:00pm","3:00pm","4:00pm","5:00pm","6:00pm"] 
   })
   
   
   return (
      
        <>
        <section className='booking-container'>
    <form className="form">
   <label htmlFor="res-date">Choose date</label>
               <input type="date" id="res-date" name="res-date" value={bookings.date}
                   //create a copy of the current bookings object and then update the date property with the new value from the form input.
                  onChange={(e) => setbookings({ ...bookings, date: e.target.value })} />
   <label htmlFor="res-time">Choose time</label>
  <select 
              id="res-time"
              name="res-time"
                  value={bookings.time}
                   //create a copy of the current bookings object and then update the time property with the new value from the form input.
              onChange={(e) => setbookings({...bookings, time: e.target.value})}
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
                  //create a copy of the current bookings object and then update the guests property with the new value from the form input.
              onChange={(e) => setbookings({...bookings, guests: e.target.value})}
            />
   <label htmlFor="occasion">Occasion</label>
   <select 
              id="occasion"
              name="occasion"
                  value={bookings.occasion}
                  //create a copy of the current bookings object and then update the occasion property with the new value from the form input.
              onChange={(e) => setbookings({...bookings, occasion: e.target.value})}
            >
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>
                    </form>
                    </section>
                        
                   
                    </>
                    )
}

export default BookingForm