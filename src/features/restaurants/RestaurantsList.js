import React from 'react';
import { useGetRestaurantsQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';

export default function RestaurantsList() {
  const currentlyShownRestaurantsCount = useSelector((state) => state.restaurants.value);
  const {
    data: restaurants,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRestaurantsQuery(currentlyShownRestaurantsCount);

  return (
    <section className='restaurantsList'>
      <h2>RestaurantsList</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.toString}</div>}
      {isSuccess && restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
      <LoadMoreButton />
    </section>
  );
}
