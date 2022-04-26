import React from 'react';
import { Link } from 'react-router-dom';
import { FavoritesButton } from '../favorites/FavoritesButton';
import { RestaurantMenu } from './RestaurantMenu';

export default function Restaurant({ restaurant, showOnSinglePage }) {
  return (
    <article key={restaurant.id} className='restaurant'>
      <FavoritesButton restaurantId={restaurant.id} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.website_url}</p>
      <RestaurantMenu menu={restaurant.brewery_type} />
      {!showOnSinglePage && <Link to={`/restaurants/${restaurant.id}`}>Show Details</Link>}
    </article>
  );
}
