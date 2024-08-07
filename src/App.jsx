import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantForm from './components/RestaurantForm';
import RestaurantList from './components/RestaurantList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<RestaurantForm />} />
        <Route path="/edit/:id" element={<RestaurantForm />} />
        <Route path="/" element={<RestaurantList />} />
      </Routes>
    </Router>
  );
};

export default App;
