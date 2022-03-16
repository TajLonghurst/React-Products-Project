import React from "react";
import ProductCategories from "./ProductCategories/ProductCategories";
import ProductColor from "./ProductCategories/ProductColor";
import ProductGender from "./ProductCategories/ProductGender";
import ProductSize from "./ProductCategories/ProductSize";
import classes from "./ProductsFilter.module.css";

const ProductsFilter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.filterbody}>
        <div className={classes.filtercontent}>
          <ProductGender />
          <ProductSize />
          <ProductCategories />
          <ProductColor />
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
