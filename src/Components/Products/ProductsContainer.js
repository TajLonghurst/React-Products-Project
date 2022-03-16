import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductList from "./ProductList";
import classes from "./ProductsContainer.module.css";
import "../../index.css";

const ProductsContainer = () => {
  return (
    <div className={classes.container}>
      <ProductsFilter />
      <ProductList />
    </div>
  );
};

export default ProductsContainer;
