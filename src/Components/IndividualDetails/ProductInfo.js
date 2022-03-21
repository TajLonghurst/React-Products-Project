import React from "react";
import classes from "../IndividualDetails/ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={classes.container}>
      <h6 className={classes.categories}>T-Shirt</h6>
      <h1 className={classes.header}>Blue Shirt</h1>
      <ul className={classes.sizes}>
        <li className={classes.sizesBody}>
          <p className={classes.sizeText}>XL</p>
        </li>
        <li className={classes.sizesBody}>
          <p className={classes.sizeText}>L</p>
        </li>
        <li className={classes.sizesBody}>
          <p className={classes.sizeText}>M</p>
        </li>
        <li className={classes.sizesBody}>
          <p className={classes.sizeText}>S</p>
        </li>
      </ul>
    </div>
  );
};

export default ProductInfo;
