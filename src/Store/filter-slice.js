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
    filterGender(state, action) {
      const products = state.productData;
      const filtredProducts = products.filter(
        (val) => val.gender === action.payload.type
      );
      state.filtredProductData = filtredProducts;
    },
    filterCategories(state, action) {
      const products = state.productData;
      const filtredProducts = products.filter(
        (val) => val.categorie === action.payload.type
      );
      state.filtredProductData = filtredProducts;
    },
    filterSize(state, action) {
      const products = state.productData;

      const filtredProducts = products.filter(({ size }) =>
        size.some((str) => str.includes(action.payload.type))
      );

      state.filtredProductData = filtredProducts;
    },
    filterColor(state, action) {
      const products = state.productData;
      const filtredProducts = products.filter(
        (val) => val.color === action.payload.type
      );
      state.filtredProductData = filtredProducts;
    },
    filterReset(state) {
      state.filtredProductData = state.productData;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
