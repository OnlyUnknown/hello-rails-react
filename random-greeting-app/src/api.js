import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Change to your Rails server URL

export const getRandomGreeting = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/random_greeting`);
    return response.data.greeting;
  } catch (error) {
    throw error;
  }
};