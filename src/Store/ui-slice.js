import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileIsActive: false,
  moblieFilterIsActive: false,
  cartIsActive: false,
  purchaseMsg: false,
  message: null,
  failed: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    mobileNavigationHandler(state) {
      state.mobileIsActive = !state.mobileIsActive;
      if (state.mobileIsActive) {
        document.body.style.overflow = "hidden";
      }
      if (!state.mobileIsActive) {
        document.body.style.overflow = "visible";
      }
    },
    mobileFilterHandler(state) {
      state.moblieFilterIsActive = !state.moblieFilterIsActive;

      if (state.moblieFilterIsActive) {
        document.body.style.overflow = "hidden";
      }
      if (state.moblieFilterIsActive === false) {
        document.body.style.overflow = "visible";
      }
    },
    onClickCart(state) {
      state.cartIsActive = !state.cartIsActive;
    },
    purchaseNotification(state, action) {
      state.purchaseMsg = action.payload.type;
      state.message = action.payload.message;
      state.failed = action.payload.failed;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
