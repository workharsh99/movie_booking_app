export const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    language: "English",
    poster: "/Inception.jpg",
    cities: ["Phagwara", "Jalandhar", "Ludhiana"]
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    language: "English",
    poster: "/The_Dark_Knight.jpg",
    cities: ["Phagwara", "Jalandhar", "Amritsar"]
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    language: "English",
    poster: "/Interstellar.jpg",
    cities: ["Phagwara", "Ludhiana", "Chandigarh"]
  },
  {
    id: 4,
    title: "Dangal",
    year: 2016,
    rating: 8.4,
    language: "Hindi",
    poster: "/Dangal.jpg",
    cities: ["Phagwara", "Jalandhar", "Patiala"]
  },
  {
    id: 5,
    title: "3 Idiots",
    year: 2009,
    rating: 8.4,
    language: "Hindi",
    poster: "/3_Idiots.jpg",
    cities: ["Phagwara", "Ludhiana", "Chandigarh"]
  },
  {
    id: 6,
    title: "Baahubali 2",
    year: 2017,
    rating: 8.2,
    language: "Telugu",
    poster: "/Baahubali_2.jpg",
    cities: ["Phagwara", "Amritsar", "Ludhiana"]
  }
];

export const cinemaHalls = [
  {
    id: 1,
    name: "PVR Cinemas",
    location: "Grand Mall, Phagwara",
    city: "Phagwara",
    movieIds: [1, 2, 4, 5]
  },
  {
    id: 2,
    name: "INOX",
    location: "City Center, Phagwara",
    city: "Phagwara",
    movieIds: [1, 2, 4, 5]
  },
  {
    id: 3,
    name: "Cinepolis",
    location: "Mall Road, Phagwara",
    city: "Phagwara",
    movieIds: [1, 4, 5]
  },
  {
    id: 4,
    name: "Wave Cinemas",
    location: "GT Road, Phagwara",
    city: "Phagwara",
    movieIds: [1, 2, 3, 4]
  },
  {
    id: 5,
    name: "Carnival Cinemas",
    location: "Hoshiarpur Road, Phagwara",
    city: "Phagwara",
    movieIds: [1, 2, 3, 4, 6]
  },
  {
    id: 6,
    name: "PVR Jalandhar",
    location: "MBD Mall, Jalandhar",
    city: "Jalandhar",
    movieIds: [1, 2, 4]
  },
  {
    id: 7,
    name: "INOX Jalandhar",
    location: "Curo High Street, Jalandhar",
    city: "Jalandhar",
    movieIds: [1, 2, 3, 4, 5]
  },
  {
    id: 8,
    name: "Wave Cinemas Jalandhar",
    location: "Model Town, Jalandhar",
    city: "Jalandhar",
    movieIds: [2, 4, 6]
  },
  {
    id: 9,
    name: "Cinepolis Jalandhar",
    location: "North Country Mall, Jalandhar",
    city: "Jalandhar",
    movieIds: [1, 3, 5, 6]
  },
  {
    id: 10,
    name: "PVR Ludhiana",
    location: "Pavilion Mall, Ludhiana",
    city: "Ludhiana",
    movieIds: [1, 3, 5, 6]
  },
  {
    id: 11,
    name: "INOX Ludhiana",
    location: "Silver Arc Mall, Ludhiana",
    city: "Ludhiana",
    movieIds: [1, 2, 4, 5]
  },
  {
    id: 12,
    name: "Wave Cinemas Ludhiana",
    location: "Feroze Gandhi Market, Ludhiana",
    city: "Ludhiana",
    movieIds: [2, 3, 4, 6]
  },
  {
    id: 13,
    name: "Cinepolis Ludhiana",
    location: "MBD Neopolis Mall, Ludhiana",
    city: "Ludhiana",
    movieIds: [1, 3, 5, 6]
  },
  {
    id: 14,
    name: "PVR Amritsar",
    location: "Trilium Mall, Amritsar",
    city: "Amritsar",
    movieIds: [2, 6]
  },
  {
    id: 15,
    name: "Cinepolis Chandigarh",
    location: "Elante Mall, Chandigarh",
    city: "Chandigarh",
    movieIds: [3, 5]
  },
  {
    id: 16,
    name: "Wave Patiala",
    location: "Omaxe Mall, Patiala",
    city: "Patiala",
    movieIds: [4]
  }
];

export const showTimings = [
  "09:00 AM",
  "12:30 PM",
  "03:45 PM",
  "06:30 PM",
  "09:15 PM"
];
