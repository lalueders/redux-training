import React from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../sliceRestaurants';

export default function LoadRestaurantsButton() {
  const dispatch = useDispatch();

  const handleOnClickShowMore = () => {
    dispatch(getRestaurants());
  };
  return <button onClick={handleOnClickShowMore}>Show More</button>;
}
