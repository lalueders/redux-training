import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import RestaurantsList from './features/restaurants/RestaurantsList';
import Navbar from './app/Navbar';
import SingleRestaurantPage from './features/restaurants/SingleRestaurantPage';
import About from './features/about/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RestaurantsList />} />
        <Route exact path='/Restaurants/:restaurantId' element={<SingleRestaurantPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
