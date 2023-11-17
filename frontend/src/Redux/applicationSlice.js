// applicationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const applicationSlice = createSlice({
  name: 'applications',
  initialState: [],
  reducers: {
    
    addApplication: (state, action) => {
      state.push(action.payload);
    },
    editApplication: (state, action) => {
      const { index, updatedApplication } = action.payload;
      state[index] = updatedApplication;
    },
    removeApplication: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addApplication, editApplication, removeApplication } = applicationSlice.actions;

export default applicationSlice.reducer;
