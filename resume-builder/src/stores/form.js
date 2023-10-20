import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_APP = "cv-maker-app";
const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_APP));

export const formSlice = createSlice({
  name: "form",
  initialState: {
    personal: data?.personal || {},
    education: data?.education || [],
    experience: data?.experience || [],
  },
  reducers: {
    setPersonal: (state, action) => {
      state.personal = action.payload;
    },

    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
  },
});

export const {
  setPersonal,
  setEducation,
  setExperience,
} = formSlice.actions;

export default formSlice.reducer;
