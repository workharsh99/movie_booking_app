import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies, cinemaHalls, showTimings } from '../../data/mockData';
import './ShowTiming.css';

function ShowTiming() {
  const { movieId, cinemaId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('');

  const movie = movies.find(m => m.id === parseInt(movieId));
  const cinema = cinemaHalls.find(c => c.id === parseInt(cinemaId));

  const handleBooking = () => {
    if (!selectedTime) {
      alert('Please select a show time');
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const booking = {
      id: Date.now(),
      user: currentUser.email,
      userName: currentUser.name,
      movie: movie.title,
      cinema: cinema.name,
      city: cinema.city,
      location: cinema.location,
      date: selectedDate,
      time: selectedTime,
      bookedAt: new Date().toISOString()
    };

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    navigate('/booking-confirmation', { state: { booking } });
  };

  return (
    <div>
      <div className="navbar">
        <h2>🎬 Movie Booking</h2>
        <button onClick={() => navigate('/dashboard')} className="logout-btn">Back to Dashboard</button>
      </div>

      <div className="container">
        <div className="booking-summary">
          <h2>Select Show Time</h2>
          <div className="summary-card">
            <h3>{movie.title}</h3>
            <p>🎭 {cinema.name}</p>
            <p>📍 {cinema.location}, {cinema.city}</p>
            <p>⭐ {movie.rating}/10 | 🗣️ {movie.language}</p>
          </div>
        </div>

        <div className="date-section">
          <h3>Select Date</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="date-input"
          />
        </div>

        <div className="timing-section">
          <h3>Available Show Timings</h3>
          <div className="timing-grid">
            {showTimings.map(time => (
              <div
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleBooking} className="book-btn">
          Book Ticket
        </button>
      </div>
    </div>
  );
}

export default ShowTiming;
