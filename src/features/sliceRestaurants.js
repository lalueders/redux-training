import { createSlice } from '@reduxjs/toolkit';

const sliceRestaurants = createSlice({
  name: 'restaurants',
  initialState: { value: 3 },
  reducers: {
    getRestaurants(state, action) {
      state.value = state.value + 1;
    },
  },
});

export const { getRestaurants } = sliceRestaurants.actions;
export default sliceRestaurants.reducer;
