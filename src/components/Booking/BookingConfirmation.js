import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state || {};

  if (!booking) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div>
      <div className="navbar">
        <h2>🎬 Movie Booking</h2>
        <button onClick={() => navigate('/dashboard')} className="logout-btn">Back to Dashboard</button>
      </div>

      <div className="container">
        <div className="confirmation-container">
          <div className="success-icon">✅</div>
          <h1 className="success-title">Booking Successful!</h1>
          <p className="success-message">Your ticket has been successfully booked.</p>

          <div className="booking-details">
            <h3>Booking Details</h3>
            <div className="detail-row">
              <span className="label">Movie:</span>
              <span className="value">{booking.movie}</span>
            </div>
            <div className="detail-row">
              <span className="label">Cinema:</span>
              <span className="value">{booking.cinema}</span>
            </div>
            <div className="detail-row">
              <span className="label">Location:</span>
              <span className="value">{booking.location}, {booking.city}</span>
            </div>
            <div className="detail-row">
              <span className="label">Date:</span>
              <span className="value">{new Date(booking.date).toLocaleDateString()}</span>
            </div>
            <div className="detail-row">
              <span className="label">Time:</span>
              <span className="value">{booking.time}</span>
            </div>
            <div className="detail-row">
              <span className="label">Booking ID:</span>
              <span className="value">#{booking.id}</span>
            </div>
          </div>

          <button onClick={() => navigate('/dashboard')} className="home-btn">
            Book Another Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
