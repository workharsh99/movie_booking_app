import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CinemaHalls from './components/CinemaHalls/CinemaHalls';
import ShowTiming from './components/ShowTiming/ShowTiming';
import BookingConfirmation from './components/Booking/BookingConfirmation';
import './App.css';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('currentUser') !== null;
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/cinema-halls/:movieId" element={<ProtectedRoute><CinemaHalls /></ProtectedRoute>} />
          <Route path="/show-timing/:movieId/:cinemaId" element={<ProtectedRoute><ShowTiming /></ProtectedRoute>} />
          <Route path="/booking-confirmation" element={<ProtectedRoute><BookingConfirmation /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
