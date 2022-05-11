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
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.change = true;
      //Checking if the item does not exist. if that is true. it'll add this data to the product arry.
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          title: newItem.title,
          categorie: newItem.categorie,
        });
      } else {
        //If the item does already exsit. then all we need to do is change the price of that item. in this case the quantity of the item and the total price.
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        if (newItem.totalPrice === 0) {
          existingItem.totalPrice =
            existingItem.totalPrice + existingItem.price;
        } else {
          existingItem.totalPrice =
            existingItem.totalPrice + newItem.totalPrice;
        }
      }
      //Grabes the total cost of the hole cart
      const total = state.items.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        0
      );
      state.totalAmount = total;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exesitingItem = state.items.find((item) => item.id === id.id);
      state.totalQuantity--; //only diffrence
      state.change = true;
      //same goes here as above but removing an item.
      if (exesitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id.id);
      } else {
        exesitingItem.quantity--; //only diffrence
        exesitingItem.totalPrice =
          exesitingItem.totalPrice - exesitingItem.price; //only diffrence
      }
      const total = state.items.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        0
      );
      state.totalAmount = total;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
