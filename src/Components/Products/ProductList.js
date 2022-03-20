import React from "react";
import classes from "./ProductList.module.css";
import ProductItem from "./ProductContent/ProductItem";
import useWindowSize from "../../Hooks/use-windowSize";
import { motion } from "framer-motion";
import { productsList } from "../../Animations/Products-Animations";
import MoonMan from "../../Assets/Images/ShirtMoon.png";
import "../../index.css";

const FAKEDATA = [
  {
    id: "m1",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m2",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m3",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m4",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m5",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "L", "M", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m6",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m7",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "S"],
    categorie: "T-Shirt",
  },
  {
    id: "m8",
    img: MoonMan,
    title: "MoonMan",
    price: "$30",
    size: ["XL", "S"],
    categorie: "T-Shirt",
  },
];

const ProductList = () => {
  const { isMobileView: mobile } = useWindowSize();

  const isMobileView = mobile
    ? classes.mobileContainer
    : classes.desktopContainer;

  return (
    <div className={isMobileView}>
      <div className={classes.contentbody}>
        <motion.div
          variants={productsList}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="row"
        >
          {FAKEDATA.map((productDetail) => {
            return (
              <div
                key={productDetail.id}
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12"
              >
                <ProductItem
                  id={productDetail.id}
                  img={productDetail.img}
                  title={productDetail.title}
                  price={productDetail.price}
                  size={productDetail.size}
                  categorie={productDetail.categorie}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductList;
