import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreRestaurants } from './restaurantsSlice';
import { loadLessRestaurants } from './restaurantsSlice';

export default function LoadRestaurantsButton() {
  let currentlyShownRestaurants = useSelector((state) => state.restaurants.value);
  const dispatch = useDispatch();

  const handleClickonLoadMore = () => {
    dispatch(loadMoreRestaurants());
  };

  const handleClickLoadLess = () => {
    dispatch(loadLessRestaurants());
  };

  return (
    <div className='LoadRestaurantsButton'>
      {currentlyShownRestaurants < 50 && <button onClick={handleClickonLoadMore}>Load More</button>}
      {currentlyShownRestaurants > 3 && <button onClick={handleClickLoadLess}>Load Less</button>}
    </div>
  );
}
