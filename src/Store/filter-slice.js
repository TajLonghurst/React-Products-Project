import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  filtredProductData: [],
};

const filterSlice = createSlice({
  name: "FILTER",
  initialState: initialState,
  reducers: {
    httpRequest(state, action) {
      state.productData = action.payload.response;
      state.filtredProductData = action.payload.response;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
