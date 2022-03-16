import React from "react";
import classes from "./ProductSize.module.css";

const ProductSize = () => {
  return (
    <div className={classes.sizeconatiner}>
      <h4 className={classes.sizeheader}>SIZE</h4>
      <ul className={classes.sizelist}>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input type="radio" name="radio" />
            <span className={classes.checkmark}>S</span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input type="radio" name="radio" />
            <span className={classes.checkmark}>M</span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input type="radio" name="radio" />
            <span className={classes.checkmark}>L</span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input type="radio" name="radio" />
            <span className={classes.checkmark}>XL</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ProductSize;
