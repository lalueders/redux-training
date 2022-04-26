import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorites/FavoriteButton';
import RestaurantMenu from '../restaurantMenu/RestaurantMenu';
import Rating from '../rating/Rating';

export default function RestaurantCard({ restaurant, showOnSinglePage }) {
  return (
    <article className='restaurantCard'>
      <FavoriteButton id={restaurant.id} />
      <Rating rating={restaurant.phone} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.website_url}</p>
      <RestaurantMenu menu={restaurant.brewery_type} />
      {!showOnSinglePage && <Link to={`/restaurants/${restaurant.id}`}>Show Details</Link>}
    </article>
  );
}
