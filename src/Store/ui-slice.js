import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileIsActive: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    mobileNavigationHandler(state) {
      state.mobileIsActive = !state.mobileIsActive;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
