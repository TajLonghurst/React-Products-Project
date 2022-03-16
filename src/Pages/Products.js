import React, { Fragment } from "react";
import ProductsContainer from "../Components/Products/ProductsContainer";
import NavigationBar from "../Components/Navigation/NavigationBar";

const Products = () => {
  return (
    <Fragment>
      <NavigationBar />
      <ProductsContainer />
    </Fragment>
  );
};

export default Products;
