import React from "react";
import classes from "../IndividualDetails/IndividualProduct.module.css";
import ProductImageDisplay from "./ProductImageDisplay";
import ProductInfo from "../IndividualDetails/ProductInfo";
import "../../index.css";

const IndividualProduct = () => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className={classes.leftbody}>
            <ProductImageDisplay />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
