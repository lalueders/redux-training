import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Burger Restaurants</h1>
      <div className='nav-links'>
        <Link to='/'>Restaurants</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
}
