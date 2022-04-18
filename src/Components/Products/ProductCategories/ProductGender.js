import React, { useState } from "react";
import classes from "./ProductGender.module.css";

const ProductGender = () => {
  const [isChecked, setIsChecked] = useState(!false);

  const handleCheckedMale = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classes.genderconatiner}>
      <h4 className={classes.genderheader}>GENDER</h4>
      <ul className={classes.genderlist}>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              <input
                onChange={handleCheckedMale}
                checked={isChecked}
                type="checkbox"
              />
              Male
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              Female
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductGender;
