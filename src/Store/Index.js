import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import filterSlice from "./filter-slice";
import cartSlice from "./cart-slice";
import httpSlice from "./http-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
    http: httpSlice.reducer,
  },
});

export default store;
