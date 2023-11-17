import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    email: null, // Change 'username' to 'email'
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload; // Change 'username' to 'email'
    },
    logout: (state) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.email = null; // Change 'username' to 'email'
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
