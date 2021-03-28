import axios from 'axios';

const api = axios.create({
  baseURL: 'https://olp-imports.herokuapp.com'
});

export default api;
