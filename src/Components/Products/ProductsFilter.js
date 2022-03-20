import React from "react";
import { motion } from "framer-motion";
import { filterSlideRight } from "../../Animations/Products-Animations";
import ProductCategories from "./ProductCategories/ProductCategories";
import ProductColor from "./ProductCategories/ProductColor";
import ProductGender from "./ProductCategories/ProductGender";
import ProductSize from "./ProductCategories/ProductSize";
import classes from "./ProductsFilter.module.css";

const ProductsFilter = () => {
  return (
    <motion.div
      variants={filterSlideRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.container}
    >
      <div className={classes.filterbody}>
        <div className={classes.filtercontent}>
          <ProductGender />
          <ProductSize />
          <ProductCategories />
          <ProductColor />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsFilter;
