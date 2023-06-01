import { combineReducers } from '@reduxjs/toolkit';

import { colorMode } from '../slices';
import landingPositionSlice from '../slices/landing-position';

const rootReducer = combineReducers({
  mode: colorMode.reducer,
  landingPosition: landingPositionSlice.reducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
