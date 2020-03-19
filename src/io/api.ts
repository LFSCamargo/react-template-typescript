import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json'
  }
});

export default api;
