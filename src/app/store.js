import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import sliceRestaurantsReducer from '../features/sliceRestaurants';
import favoritesReducer from '../features/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    sliceRestaurants: sliceRestaurantsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
