import { combineReducers } from '@reduxjs/toolkit';

import { authentication, colorMode, landingPositionSlice } from '../slices';

const rootReducer = combineReducers({
  mode: colorMode,
  landingPosition: landingPositionSlice,
  auth: authentication
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
