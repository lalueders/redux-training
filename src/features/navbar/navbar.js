import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='navbar-heading'>Check24 Burger Restaurant-Vergleich</h1>
      <div className='navbar-links'>
        <Link to='/'>Restaurants</Link>
        <Link to='/pictures'>Pictures</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
}
