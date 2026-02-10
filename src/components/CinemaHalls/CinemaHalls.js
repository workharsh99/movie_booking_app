import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies, cinemaHalls } from '../../data/mockData';
import './CinemaHalls.css';

function CinemaHalls() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const selectedCity = localStorage.getItem('selectedCity');

  const movie = movies.find(m => m.id === parseInt(movieId));
  const availableHalls = cinemaHalls.filter(
    hall => hall.movieIds.includes(parseInt(movieId)) && 
            (!selectedCity || hall.city === selectedCity)
  );

  const handleHallClick = (cinemaId) => {
    navigate(`/show-timing/${movieId}/${cinemaId}`);
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <div className="navbar">
        <h2>🎬 Movie Booking</h2>
        <button onClick={handleBack} className="logout-btn">Back to Dashboard</button>
      </div>

      <div className="container">
        <div className="movie-header">
          <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
          <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>⭐ {movie.rating}/10</p>
            <p>📅 {movie.year}</p>
            <p>🗣️ {movie.language}</p>
            {selectedCity && <p className="selected-city">📍 {selectedCity}</p>}
          </div>
        </div>

        <h2 className="section-title">Select Cinema Hall</h2>
        
        <div className="cinema-grid">
          {availableHalls.map(hall => (
            <div key={hall.id} className="cinema-card" onClick={() => handleHallClick(hall.id)}>
              <div className="cinema-icon">🎭</div>
              <h3>{hall.name}</h3>
              <p className="location">📍 {hall.location}</p>
              <p className="city">{hall.city}</p>
              <button className="select-btn">Select Hall</button>
            </div>
          ))}
        </div>

        {availableHalls.length === 0 && (
          <div className="no-results">
            <p>No cinema halls available for this movie in the selected city</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CinemaHalls;
