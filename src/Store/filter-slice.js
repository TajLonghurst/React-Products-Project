import { createSlice } from "@reduxjs/toolkit";
import MoonMan from "../Assets/Images/ShirtMoon.png";
import ShirtBlue from "../Assets/Images/ShirtBlue.png";
import ShirtHand from "../Assets/Images/ShirtHand.png";

const FAKEDATA = [
  {
    id: "m1",
    img: ShirtBlue,
    title: "MoonMan",
    price: 31,
    gender: "female",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtHand, ShirtBlue, MoonMan],
  },
  {
    id: "m2",
    img: MoonMan,
    title: "MoonMan",
    price: 34,
    gender: "car",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtBlue, MoonMan],
  },
  {
    id: "m3",
    img: ShirtBlue,
    title: "MoonMan",
    price: 33,
    gender: "female",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtHand, ShirtBlue],
  },
  {
    id: "m4",
    img: MoonMan,
    title: "MoonMan",
    price: 28,
    gender: "male",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
    extraImages: [MoonMan],
  },
  {
    id: "m5",
    img: ShirtHand,
    title: "MoonMan",
    price: 30,
    gender: "female",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtHand],
  },
  {
    id: "m6",
    img: MoonMan,
    title: "MoonMan",
    price: 50,
    gender: "male",
    size: ["XL", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtHand, ShirtBlue, MoonMan],
  },
  {
    id: "m7",
    img: ShirtHand,
    title: "MoonMan",
    price: 29,
    gender: "male",
    size: ["XL", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtHand, MoonMan],
  },
  {
    id: "m8",
    img: ShirtBlue,
    title: "MoonMan",
    price: 33,
    gender: "female",
    size: ["XL", "S"],
    categorie: "T-Shirt",
    extraImages: [ShirtBlue, MoonMan],
  },
];

const initialState = {
  fakeData: FAKEDATA,
  filteredData: [],
};

const filterSlice = createSlice({
  name: "FILTER",
  initialState: initialState,
  reducers: {
    filterData(state, action) {
      let updatedDataList = state.fakeData;

      if (action.payload.type === "male") {
        updatedDataList = updatedDataList.filter(
          (item) => item.gender === action.payload.type
        );
        state.fakeData = updatedDataList;
        console.log(updatedDataList);
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
