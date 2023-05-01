import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const colorMode = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {}
});

export const actionColorMode = colorMode.actions;
export default colorMode;
