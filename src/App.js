import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RestaurantsList from './features/restaurants/RestaurantsList';
import Navbar from './features/navbar/navbar';
import RestaurantPage from './features/restaurants/RestaurantPage';
import { ImageSlider } from './features/imageSlider/ImageSlider';
import { About } from './features/about/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RestaurantsList />} />
        <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
        <Route path='/pictures' element={<ImageSlider />} />
        <Route path='/about' element={<About />} />
        <Route exact path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
