import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../features/auth/store/auth.slice.js'

export const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
});

export default store;
