import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import restaurantsReducer from '../features/restaurants/restaurantsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import aboutReducer from '../features/about/aboutSlice';

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    restaurants: restaurantsReducer,
    favorites: favoritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
