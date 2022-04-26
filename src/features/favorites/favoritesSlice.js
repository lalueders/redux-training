import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    favoriteToggled(state, action) {
      let id = action.payload;
      if (state.includes(id)) {
        const index = state.indexOf(id);
        state.splice(index, 1);
      } else {
        state.push(id);
      }
    },
  },
});

export const { favoriteToggled } = favoritesSlice.actions;
export default favoritesSlice.reducer;
