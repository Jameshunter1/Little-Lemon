import React from 'react';
import Breadcrumb from '../../Breadcrumb.js';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <>
      <main className="confirmation-box">
        <Breadcrumb
          paths={[
            { name: 'Home', url: '/' },
            { name: 'Booking', url: '/booking' },
          ]}
        />

        <h1 className="confirmation-message">
          Your booking has been confirmed!
        </h1>
        <p className="confirmation-details">
          Thank you for choosing Little Lemon restaurant. We have received your
          booking request and will be in touch shortly to confirm the details.
          If you have any questions, please don't hesitate to contact us.
        </p>
        <article className="confirmation-contact">
          <h2>Contact Information</h2>
          <ul>
            <li>Little Lemon restaurant</li>
            <li>123 Main Street</li>
            <li>New York, NY 10001</li>
            <li>Phone: 555-1234</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default ConfirmedBooking;
