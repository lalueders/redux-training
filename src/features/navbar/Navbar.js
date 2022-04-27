import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1>Burger Restaurant-Vergleich</h1>
      <div className='navbar-links'>
        <Link to='/'>Restaurants</Link>
        <Link to='/'>Pictures</Link>
        <Link to='/'>About</Link>
      </div>
    </nav>
  );
}
