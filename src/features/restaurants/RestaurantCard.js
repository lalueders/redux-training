import React from 'react';
import LikeButton from './LikeButton';
import Rating from './Rating';

export default function RestaurantCard({ restaurant }) {
  return (
    <article className='restaurantCard'>
      <Rating />
      <LikeButton id={restaurant.id} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.website_url}</p>
    </article>
  );
}
