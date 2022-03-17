import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  return (
    <div className={classes.productDetails}>
      <div className={classes.sizes}>
        <div className={classes.sizesBody}>
          <p className={classes.sizeText}>XL</p>
        </div>
        <div className={classes.sizesBody}>
          <p className={classes.sizeText}>X</p>
        </div>
        <div className={classes.sizesBody}>
          <p className={classes.sizeText}>M</p>
        </div>
        <div className={classes.sizesBody}>
          <p className={classes.sizeText}>S</p>
        </div>
      </div>
      <div className={classes.categorie}>
        <p className={classes.categorieName}>T-Shirt</p>
      </div>
      <div className={classes.productName}>
        <h1 className={classes.productNameText}>Moon Man</h1>
      </div>
      <div className={classes.productPrice}>
        <p className={classes.productPriceText}>$30</p>
      </div>
    </div>
  );
};

export default ProductDetails;
