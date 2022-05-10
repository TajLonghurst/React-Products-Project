import React from "react";
import classes from "./ProductCategories.module.css";

const ProductCategories = () => {
  return (
    <div className={classes.categoriesconatiner}>
      <h4 className={classes.categoriesheader}>CATEGORIES</h4>
      <ul className={classes.categorieslist}>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              T-Shirt
              <input type="checkbox" />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Trousers
              <input type="checkbox" />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Combo
              <input type="checkbox" />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategories;
