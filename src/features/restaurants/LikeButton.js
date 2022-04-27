import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../favoritesSlice';

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.includes(id));

  const handleOnClickFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <button className='favoriteButton' onClick={handleOnClickFavorite}>
      {isFavorite ? (
        <Icon icon='ant-design:heart-filled' style={{ color: 'red' }} />
      ) : (
        <Icon icon='ant-design:heart-outlined' style={{ color: 'red' }} />
      )}
    </button>
  );
}
