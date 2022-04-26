import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRestaurantQuery } from '../api/apiSlice';
import Restaurant from './Restaurant';

export default function SingleRestaurantPage() {
  const { restaurantId } = useParams();
  const { data: restaurant, isFetching, isSuccess } = useGetRestaurantQuery(restaurantId);

  if (isFetching) {
    return <div>is loading...</div>;
  } else if (!restaurant) {
    return (
      <section>
        <h2>Brewery not found!</h2>
      </section>
    );
  } else if (isSuccess) {
    return (
      <div className='singleRestaurantPage'>
        <Restaurant restaurant={restaurant} showOnSinglePage={true} />
      </div>
    );
  }
}
