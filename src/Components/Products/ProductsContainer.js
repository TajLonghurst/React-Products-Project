import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductList from "./ProductList";
import ModalMobileFilter from "../Modals/FilterModal/ModalMobileFilter";
import useWindowSize from "../../Hooks/use-windowSize";
import classes from "./ProductsContainer.module.css";
import "../../index.css";

const ProductsContainer = () => {
  const { isMobileView: mobile } = useWindowSize();
  return (
    <div className={classes.container}>
      {!mobile && <ProductsFilter />}
      {mobile && <ModalMobileFilter />}
      <ProductList />
    </div>
  );
};

export default ProductsContainer;
