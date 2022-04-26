import { AboutData } from './AboutData';
import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
  name: 'about',
  initialState: AboutData,
  reducers: {},
});

export default aboutSlice.reducer;
