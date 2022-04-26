import React from 'react';
import { useGetRestaurantsQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import Restaurant from './Restaurant';
import LoadRestaurantsButton from './LoadRestaurantsButton';

export default function RestaurantsList() {
  let currentlyShownRestaurantsCount = useSelector((state) => state.restaurants.value);
  const {
    data: restaurants,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRestaurantsQuery(currentlyShownRestaurantsCount);

  return (
    <section>
      <h2>Restaurants</h2>
      <div className='restaurantsList'>
        {isLoading && <div text='Loading...' />}
        {isError && <div>{error.toString()}</div>}
        {isSuccess && restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
      </div>
      <LoadRestaurantsButton />
    </section>
  );
}
