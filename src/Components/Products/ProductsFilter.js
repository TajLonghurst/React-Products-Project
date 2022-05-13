import React from "react";
import { motion } from "framer-motion";
import { filterSlideRight } from "../../Animations/Products-Animations";
import { useDispatch } from "react-redux";
import ProductCategories from "./ProductCategories/ProductCategories";
import ProductColor from "./ProductCategories/ProductColor";
import ProductGender from "./ProductCategories/ProductGender";
import ProductSize from "./ProductCategories/ProductSize";
import classes from "./ProductsFilter.module.css";
import Button from "../UI/Button";
import { filterActions } from "../../Store/filter-slice";

const ProductsFilter = () => {
  const dispatch = useDispatch();

  const btnonClickHandler = () => {
    dispatch(filterActions.filterReset());
  };

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
          <div className={classes.btnconatiner}>
            <Button onClick={btnonClickHandler}>Reset Filter</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsFilter;
