// academicSlice.js
import { createSlice } from '@reduxjs/toolkit';

const academicSlice = createSlice({
  name: 'academic',
  initialState: {
    academicData: null, // Store academic details here
  },
  reducers: {
    setAcademicData: (state, action) => {
      state.academicData = action.payload;
    },
  },
});

export const { setAcademicData } = academicSlice.actions;
export const selectAcademicData = (state) => state.academic.academicData;
export default academicSlice.reducer;
