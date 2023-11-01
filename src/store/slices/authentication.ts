// __________________________________________________________________________ redux
import { createSlice } from '@reduxjs/toolkit';

//..
import { AppState } from '../reducers';

// __________________________________________________________________________ types
import { IAuthenticationState } from '@/types/slices/auth';

const name = 'authentication';

const initialState: IAuthenticationState = {
  role: 'ADMIN'
};

const authentication = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: () => {}
});

export const actionAuthentication = authentication.actions;
export const authenticationReducer = (state: AppState) => state.auth;

export default authentication.reducer;
