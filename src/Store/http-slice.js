import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const httpSlice = createSlice({
  name: "HTTP",
  initialState: initialState,
  reducers: {
    http(state, action) {
      state.products = action.payload.response;
      console.log("Redux Store", state.products);
    },
  },
});

export const httpActions = httpSlice.actions;

export default httpSlice;
