import React from "react";
import classes from "./ProductItem.module.css";
import ShirtHand from "../../../Assets/Images/ShirtHand.png";
import ProductDetails from "./ProductDetails";

const ProductItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <div className={classes.imgBody}>
            <img
              className={classes.img}
              src={ShirtHand}
              alt="Img Failed to load"
            />
          </div>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
