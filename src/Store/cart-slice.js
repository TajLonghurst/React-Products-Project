import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  change: false,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "CART",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.change = true;
      //Checking if the item does not exist. if that is true. it'll add this data to the product arry.
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        //If the item does already exsit. then all we need to do is change the price of that item. in this case the quantity of the item and the total price.
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exesitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--; //only diffrence
      state.change = true;
      //same goes here as above but removing an item.
      if (exesitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exesitingItem.quantity--; //only diffrence
        exesitingItem.totalPrice =
          exesitingItem.totalPrice - exesitingItem.price; //only diffrence
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
