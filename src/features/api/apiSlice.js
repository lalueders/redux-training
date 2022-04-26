import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openbrewerydb.org' }),

  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: (value) => `/breweries?per_page=${value}`,
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => `/breweries/${restaurantId}`,
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = apiSlice;
