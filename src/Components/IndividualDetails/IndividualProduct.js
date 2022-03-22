import React from "react";
import classes from "../IndividualDetails/IndividualProduct.module.css";
import ProductImageDisplay from "./ProductImageDisplay";
import ProductInfo from "../IndividualDetails/ProductInfo";
import { motion } from "framer-motion";
import { imgBgslideRight } from "../../Animations/Products-Animations";
import "../../index.css";

const IndividualProduct = () => {
  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <motion.div
            variants={imgBgslideRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.leftbody}
          >
            <ProductImageDisplay />
          </motion.div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
