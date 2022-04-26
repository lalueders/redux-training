import React from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../restaurants/restaurantsSlice';

export default function LoadMoreButton() {
  const dispatch = useDispatch();

  const handleOnClickShowMore = () => {
    dispatch(getRestaurants());
  };
  return (
    <button className='loadMoreButton' onClick={handleOnClickShowMore}>
      Show More
    </button>
  );
}
