import axios from 'axios';

// Create an Axios instance with default configuration
// In development, use the proxied path; in production, use the full URL
const API_BASE_URL = import.meta.env.DEV 
  ? '/Prod'
  : 'https://pwud2mn8yk.execute-api.us-east-1.amazonaws.com/Prod';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add authentication token here if needed
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      console.error('Unauthorized - redirecting to login');
    }
    console.error('API Error:', error);
    return Promise.reject(error.response?.data || error);
  }
);

export default apiClient;
