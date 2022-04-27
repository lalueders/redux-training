import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RestaurantsList from './features/restaurants/RestaurantsList';
import Navbar from './features/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RestaurantsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
