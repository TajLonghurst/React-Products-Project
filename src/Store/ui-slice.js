import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    function(state, action) {},
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
