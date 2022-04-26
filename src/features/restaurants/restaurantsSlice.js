import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: { value: 3 },
  reducers: {
    getRestaurants(state, action) {
      state.value = state.value + 1;
    },
  },
});

export const { getRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
