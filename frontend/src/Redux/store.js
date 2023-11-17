import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import applicationReducer from './applicationSlice';
import academicReducer from './academicSlice';
const store = configureStore({
  reducer: {
    auth: authReducer, 
    applications: applicationReducer,
    academic: academicReducer,
  },
});

export default store;