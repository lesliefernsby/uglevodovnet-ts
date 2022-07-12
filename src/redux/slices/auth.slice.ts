/* eslint-disable no-param-reassign */
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import authService from '../../services/auth.service';
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
const initialState: AuthState = parsedUser
  ? { loggingIn: false, isLogged: true, user: parsedUser, error: null }
  : { loggingIn: false, isLogged: false, user: null, error: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => {
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

export const selectAuth = (state: RootState) => state.auth;

export const loginAction =
  (log: string, pass: string) => async (dispatch: Dispatch) => {
    dispatch(loginRequest());
    authService.login(log, pass).then(
      data => {
        dispatch(loginSuccess(data));
      },
      error => {
        dispatch(loginFailure(error.response.data));
      }
    );
  };

export const refreshToken =
  (access: string, refresh: string) => async (dispatch: Dispatch) => {
    authService.refreshToken(access, refresh).then(
      data => {
        dispatch(loginSuccess(data));
      },
      error => {
        dispatch(loginFailure(error.response.data));
      }
    );
  };
