import React, { useReducer } from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './BookingAPI';
import { useNavigate } from 'react-router-dom';

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
export const updateTimes = async (date, dispatch) => {
  try {
    // When the API call completes, dispatch an 'UPDATE_TIMES' action with the new times
    const times = await fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', times });

    // Submit form data
    const formData = { date };
    await submitAPI(formData);
  } catch (error) {
    console.error(error);
    dispatch({ type: 'UPDATE_TIMES_ERROR', error });
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  // Use the useReducer hook to create a stateful value for available times
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  // Define a function to update the available times for a given date
  const handleSubmit = async (formData) => {
  console.log('Form submitted to submitAPI with the following data:', formData);
  try {
    // Submit form data
    const success = await submitAPI(formData);

    if (success) {
      // If the submitAPI call returns true, navigate to the booking confirmed page
      navigate('/booking-confirmed');
    } else {
      // If the submitAPI call returns false, display an error message or take other appropriate action
      console.error('Booking failed');
    }
  } catch (error) {
    console.error('An error occurred while submitting the form:', error);
  }
};
  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        updateTimes={(date) => updateTimes(date, dispatch)}
        handleSubmit={handleSubmit}
        submitForm={(formData) => handleSubmit(formData)}
      />
    </main>
  )
};
  

export default BookingPage;