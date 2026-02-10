# 🎬 Movie Booking Application

A complete frontend-only Movie Booking Application built with ReactJS. All data is stored and managed using LocalStorage.

## Features

### 🔐 Authentication Module
- User Registration with validation
- Login with stored credentials
- Protected routes requiring authentication
- User session management

### 🏠 Dashboard - Movie Listing
- Display movies with poster, title, year, rating, and language
- Filter by City
- Search by Movie Name
- Click on movie to view cinema halls

### 🏢 Cinema Hall Listing
- Shows available cinema halls for selected movie
- Displays cinema name, location, and city
- Click to proceed to show timing selection

### 📅 Show Date & Time Selection
- Current date selected by default
- Multiple show timings available
- Select date and time for booking

### ✅ Booking Confirmation
- Success message after booking
- Complete booking details displayed
- Booking stored in LocalStorage

## Installation & Setup

1. Navigate to the project directory:
```bash
cd movie-booking-app
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit: `http://localhost:3000`

## Usage

1. **Register**: Create a new account with name, email, and password
2. **Login**: Use your registered credentials to login
3. **Browse Movies**: View all available movies, filter by city or search by name
4. **Select Cinema**: Choose a cinema hall from the available options
5. **Pick Show Time**: Select your preferred date and time
6. **Confirm Booking**: View your booking confirmation with all details

## Data Storage

All data is stored in browser's LocalStorage:
- `users`: Registered user accounts
- `currentUser`: Currently logged-in user
- `bookings`: All ticket bookings
- `selectedCity`: User's selected city for filtering

## Technologies Used

- ReactJS
- React Router DOM
- CSS3
- LocalStorage API

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Auth.css
│   ├── Dashboard/
│   │   ├── Dashboard.js
│   │   └── Dashboard.css
│   ├── CinemaHalls/
│   │   ├── CinemaHalls.js
│   │   └── CinemaHalls.css
│   ├── ShowTiming/
│   │   ├── ShowTiming.js
│   │   └── ShowTiming.css
│   └── Booking/
│       ├── BookingConfirmation.js
│       └── BookingConfirmation.css
├── data/
│   └── mockData.js
├── App.js
├── App.css
└── index.js
```

## Sample Movies Included

- Inception (2010)
- The Dark Knight (2008)
- Interstellar (2014)
- Dangal (2016)
- 3 Idiots (2009)
- Baahubali 2 (2017)

## Cities Available

- Mumbai
- Delhi
- Bangalore
- Hyderabad
- Chennai
- Pune
- Kolkata

Enjoy booking your movies! 🍿
