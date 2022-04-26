import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: { value: 3 },
  reducers: {
    loadMoreRestaurants: (state, action) => {
      state.value = state.value + 1;
    },
    loadLessRestaurants: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { loadMoreRestaurants, loadLessRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
