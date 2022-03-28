import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, filter: filterSlice.reducer },
});

export default store;
