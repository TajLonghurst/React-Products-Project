import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  individualProduct: [],
};

const httpSlice = createSlice({
  name: "HTTP",
  initialState: initialState,
  reducers: {
    productListHttp(state, action) {
      state.products = action.payload.response;
      console.log("ReduxStore", state.products);
    },
    individualHttp(state, action) {
      state.individualProduct = action.payload.product;
      console.log("ReduxIndividualProductsStore", state.individualProduct);
    },
  },
});

export const httpActions = httpSlice.actions;

export default httpSlice;
