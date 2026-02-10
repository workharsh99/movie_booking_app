import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../../data/mockData';
import './Dashboard.css';

function Dashboard() {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const cities = [...new Set(movies.flatMap(m => m.cities))];

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const filteredMovies = movies.filter(movie => {
    const matchesCity = !selectedCity || movie.cities.includes(selectedCity);
    const matchesSearch = !searchQuery || 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const handleMovieClick = (movieId) => {
    localStorage.setItem('selectedCity', selectedCity || movies.find(m => m.id === movieId).cities[0]);
    navigate(`/cinema-halls/${movieId}`);
  };

  return (
    <div>
      <div className="navbar">
        <h2>🎬 Movie Booking</h2>
        <div className="nav-right">
          <span className="welcome-text">Welcome, {currentUser.name}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="city-select"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie.id)}>
              <img src={movie.poster} alt={movie.title} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.rating}/10</p>
                <p>📅 {movie.year}</p>
                <p>🗣️ {movie.language}</p>
                <p className="cities">📍 {movie.cities.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="no-results">
            <p>No movies found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
