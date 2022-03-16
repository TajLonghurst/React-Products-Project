import React from "react";
import classes from "./ProductGender.module.css";

const ProductGender = () => {
  return (
    <div className={classes.genderconatiner}>
      <h4 className={classes.genderheader}>GENDER</h4>
      <ul className={classes.genderlist}>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Male
              <input type="checkbox" />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Female
              <input type="checkbox" />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductGender;
