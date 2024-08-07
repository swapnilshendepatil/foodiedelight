import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getRestaurants = () => api.get('/restaurants');
export const addRestaurant = (data) => api.post('/restaurants', data);
export const updateRestaurant = (id, data) => api.put(`/restaurants/${id}`, data);
export const deleteRestaurant = (id) => api.delete(`/restaurants/${id}`);
