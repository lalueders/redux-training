import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openbrewerydb.org' }),

  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => '/breweries',
    }),
  }),
});

export const { useGetRestaurantsQuery } = apiSlice;
