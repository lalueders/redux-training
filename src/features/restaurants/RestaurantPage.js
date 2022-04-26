import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { useGetRestaurantQuery } from '../api/apiSlice';

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const { data: restaurant, isFetching, isSuccess } = useGetRestaurantQuery(restaurantId);

  if (isFetching) {
    return <div>is loading...</div>;
  } else if (!restaurant) {
    return (
      <section>
        <h2>Restaurant not found!</h2>
      </section>
    );
  } else if (isSuccess) {
    return (
      <section className='singleRestaurantPage'>
        <RestaurantCard restaurant={restaurant} showOnSinglePage={true} />
      </section>
    );
  }
}
