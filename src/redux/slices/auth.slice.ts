/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TUser, TUserError } from './types';

// Define a type for the slice state
interface AuthState {
  loggingIn: boolean;
  isLogged: boolean;
  user: TUser | null;
  error: TUserError | null;
}

const storedUser = localStorage.getItem('user');
const parsedUser = storedUser ? JSON.parse(storedUser) : null;
// Define the initial state using that type
const initialState: AuthState = parsedUser
  ? { loggingIn: false, isLogged: true, user: parsedUser, error: null }
  : { loggingIn: false, isLogged: false, user: null, error: null };

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loggingIn = true;
      state.isLogged = false;
      state.user = null;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<TUser>) => {
      state.loggingIn = false;
      state.isLogged = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<TUserError>) => {
      state.loggingIn = false;
      state.isLogged = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
