import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; 

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define functions for making API requests

// Get all artists
export const getAllArtists = () => {
  return api.get('/artists');
};

// Create a new artist
export const createArtist = (artistData) => {
  return api.post('/artists', artistData);
};

// Get artist by ID
export const getArtistById = (artistId) => {
  return api.get(`/artists/${artistId}`);
};

// Update artist by ID
export const updateArtistById = (artistId, artistData) => {
  return api.put(`/artists/${artistId}`, artistData);
};

// Delete artist by ID
export const deleteArtistById = (artistId) => {
  return api.delete(`/artists/${artistId}`);
};

// Add more API request functions as needed for multimedia, e.g., createMultimedia, getMultimedia, etc.

export default api;
