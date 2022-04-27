import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useGetRestaurantsQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import LoadRestaurantsButton from './LoadRestaurantsButton';

export default function RestaurantsList() {
  const currentlyShownRestaurantsCount = useSelector((state) => state.sliceRestaurants.value);
  const { data: restaurants, isLoading, isSuccess, isError, error } = useGetRestaurantsQuery();

  return (
    <section className='restaurantList'>
      <h2>RestaurantsList</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.toString}</div>}
      {isSuccess &&
        restaurants
          .slice(0, currentlyShownRestaurantsCount)
          .map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
      <LoadRestaurantsButton />
    </section>
  );
}
