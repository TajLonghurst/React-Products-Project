import React from "react";
import classes from "./ProductCategories.module.css";

const ProductCategories = () => {
  return (
    <div className={classes.categoriesconatiner}>
      <h4 className={classes.categoriesheader}>CATEGORIES</h4>
      <ul className={classes.categorieslist}>
        <li className={classes.categoriesitem}>
          <label className={classes.containerbox}>
            T-Shirt
            <input type="checkbox" />
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li className={classes.categoriesitem}>
          <label className={classes.containerbox}>
            Trousers
            <input type="checkbox" />
            <span className={classes.checkmark}></span>
          </label>
        </li>
        <li className={classes.categoriesitem}>
          <label className={classes.containerbox}>
            Combo
            <input type="checkbox" />
            <span className={classes.checkmark}></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategories;
