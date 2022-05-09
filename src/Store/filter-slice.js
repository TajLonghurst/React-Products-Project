import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  filtredProductData: [],
};

const filterSlice = createSlice({
  name: "FILTER",
  initialState: initialState,
  reducers: {
    filterGenderData(state, action) {
      // action.payload will contain the array of elements based on which the filtering will be done
      if (action.payload.data.length > 0) {
        const apiData = state.productData;
        state.filtredProductData = apiData.filter(
          (val) =>
            val[action.payload.kind] === action.payload.data[0] ||
            action.payload.data[1] ||
            action.payload.data[2] ||
            action.payload.data[3] ||
            action.payload.data[4] ||
            action.payload.data[5] ||
            action.payload.data[6]
        );
        return;
      }
      state.filtredProductData = state.productData;
    },

    httpRequest(state, action) {
      state.productData = action.payload.response;
      state.filtredProductData = action.payload.response;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
