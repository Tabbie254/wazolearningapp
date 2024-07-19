// src/services/api.js
import axios from 'axios';

// Create an Axios instance with a default base URL
const api = axios.create({
  baseURL: 'http://localhost:5000', // Adjust base URL to match your backend
  timeout: 10000, // Optional: set a timeout for requests
});

// Function to get a list of users
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to create a new user
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
