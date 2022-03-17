import React from "react";
import classes from "./ProductList.module.css";
import ProductItem from "./ProductContent/ProductItem";
import useWindowSize from "../../Hooks/use-windowSize";
import "../../index.css";

const ProductList = () => {
  const { isMobileView: mobile } = useWindowSize();

  const isMobileView = mobile
    ? classes.mobileContainer
    : classes.desktopContainer;

  return (
    <div className={isMobileView}>
      <div className={classes.contentbody}>
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <ProductItem />
          </div>
          <div className="col-xxl-3  col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <ProductItem />
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <ProductItem />
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <ProductItem />
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <ProductItem />
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
