import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
