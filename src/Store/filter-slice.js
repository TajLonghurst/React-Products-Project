import { createSlice } from "@reduxjs/toolkit";
import MoonMan from "../Assets/Images/ShirtMoon.png";
import ShirtBlue from "../Assets/Images/ShirtBlue.png";
import ShirtHand from "../Assets/Images/ShirtHand.png";

const FAKEDATA = [
  {
    id: "m1",
    img: ShirtHand,
    title: "GOOGLE IMG",
    price: 31,
    gender: "female",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
    color: "Blue",
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
    color: "Black",
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
    color: "Blue",
    extraImages: [ShirtHand, ShirtBlue],
  },
  {
    id: "m4",
    img: MoonMan,
    title: "MoonMan",
    price: 28,
    gender: "male",
    size: ["XL", "L", "M"],
    categorie: "T-Shirt",
    color: "Black",
    extraImages: [MoonMan],
  },
  {
    id: "m5",
    img: ShirtHand,
    title: "MoonMan",
    price: 30,
    gender: "male",
    size: ["XL", "L", "M"],
    categorie: "T-Shirt",
    color: "Black",
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
    color: "Black",
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
    color: "Black",
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
    color: "Blue",
    extraImages: [ShirtBlue, MoonMan],
  },
  {
    id: "m9",
    img: ShirtBlue,
    title: "MoonMan",
    price: 33,
    gender: "car",
    size: ["S"],
    categorie: "T-Shirt",
    color: "Blue",
    extraImages: [ShirtBlue, MoonMan],
  },
  {
    id: "m10",
    img: ShirtBlue,
    title: "MoonMan",
    price: 33,
    gender: "car",
    size: ["XL"],
    categorie: "T-Shirt",
    color: "Blue",
    extraImages: [ShirtBlue, MoonMan],
  },
];

const initialState = {
  productData: FAKEDATA,
  filtredProductData: FAKEDATA,
  male: [],
  female: [],
  size: [],
};

const filterSlice = createSlice({
  name: "FILTER",
  initialState: initialState,
  reducers: {
    filterData(state, action) {
      const productData = state.productData;

      //Male Filter
      if (action.payload.type === "male" && action.payload.isChecked) {
        state.male = productData.filter(
          (item) => item.gender === action.payload.type
        );
      } else if (
        action.payload.type === "male" &&
        !action.payload.maleIsChecked
      ) {
        state.male = [];
      }

      //Female Filter
      if (action.payload.type === "female" && action.payload.isChecked) {
        state.female = productData.filter(
          (item) => item.gender === action.payload.type
        );
      } else if (
        action.payload.type === "female" &&
        !action.payload.femaleIsChecked
      ) {
        state.female = [];
      }

      //Size Filter
      if (action.payload.type === "S" || "M" || "L" || "XL") {
        state.size = productData.filter((item) =>
          item.size.forEach((s) => s.indexOf(1) === action.payload.type)
        );
        console.log(state.size);
      } else {
        state.size = [];
      }

      const placeHolder = [...state.male, ...state.female];
      state.filtredProductData = placeHolder;
      if (placeHolder.length <= 0) {
        state.filtredProductData = FAKEDATA;
      } else {
        return;
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
