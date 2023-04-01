import React, { useReducer} from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm';
import { fetchAPI } from './BookingAPI';




// Define a reducer function to handle state updates for available times
export function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // When the 'UPDATE_TIMES' action is dispatched, update the state with the new times
      return action.times;
    default:
            // For all other actions, return the current state unchanged
      return state;
  }
}

export const updateTimes = (date, dispatch) => {
  // When the API call completes, dispatch an 'UPDATE_TIMES' action with the new times
  fetchAPI(date).then((times) => dispatch({ type: 'UPDATE_TIMES', times }));
};

const BookingPage = (submitForm) => {
  // Use the useReducer hook to create a stateful value for available times
 const [availableTimes, dispatch] = useReducer(timesReducer, []);
// Define a function to update the available times for a given date
 

  return ( 
    <>
      <main>
      {/* Render the BookingForm component and pass it the available times and updateTimes function as props */}
       <BookingForm availableTimes={availableTimes} dispatch={dispatch} updateTimes={(date) => updateTimes(date, dispatch)} submitForm={submitForm} />
    </main>
    </>
  )
  }
export default BookingPage
