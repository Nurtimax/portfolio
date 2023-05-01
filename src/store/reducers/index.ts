import { combineReducers } from '@reduxjs/toolkit';
import { colorMode } from '../slices';

const rootReducer = combineReducers({
  mode: colorMode.reducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
