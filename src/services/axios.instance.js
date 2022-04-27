import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlZmM2YjRkOC1hODA2LTQ3OGQtYjNmYi0yMTQ5MTg4ZjQ0ZWQiLCJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjQ4NjMyMDUzfQ.VCKdhTrG1vq8eSjCaIzDgalRbcrbL9PLg3J6YOQbQzo' },
});

export default axiosInstance;