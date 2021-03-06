import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { authSlice } from './slices/auth.slice';
import { pageSlice } from './slices/page.slice';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    page: pageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch
