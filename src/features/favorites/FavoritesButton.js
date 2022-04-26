import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteToggled } from './favoritesSlice';

export const FavoritesButton = ({ restaurantId }) => {
  const isFavorite = useSelector((state) => state.favorites.includes(restaurantId));
  const dispatch = useDispatch();

  const handleClickOnFavorite = () => {
    dispatch(favoriteToggled(restaurantId));
  };

  return (
    <button className='favoriteTogglebutton' onClick={handleClickOnFavorite}>
      {isFavorite ? (
        <Icon icon='ic:baseline-favorite' style={{ color: 'red' }} />
      ) : (
        <Icon icon='ic:baseline-favorite-border' style={{ color: 'red' }} />
      )}
    </button>
  );
};
