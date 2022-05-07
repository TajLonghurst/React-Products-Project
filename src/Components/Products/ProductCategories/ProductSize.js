import React, { useState } from "react";
//import { useDispatch } from "react-redux";
//import { filterActions } from "../../../Store/filter-slice";
import classes from "./ProductSize.module.css";

const ProductSize = () => {
  const [radioSize, setRadioSize] = useState("");
  //const dispatch = useDispatch();
  const handleRadioSmallSize = (e) => {
    setRadioSize(e.target.value);
  };

  return (
    <div className={classes.sizeconatiner}>
      <h4 className={classes.sizeheader}>SIZE</h4>
      <ul className={classes.sizelist}>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input
              onChange={handleRadioSmallSize}
              checked={radioSize === "S"}
              value="S"
              type="radio"
              name="radio"
            />
            <span className={classes.checkmark}>S</span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input
              onChange={handleRadioSmallSize}
              checked={radioSize === "M"}
              value="M"
              type="radio"
              name="radio"
            />
            <span className={classes.checkmark}>M</span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input
              onChange={handleRadioSmallSize}
              checked={radioSize === "L"}
              value="L"
              type="radio"
              name="radio"
            />
            <span className={classes.checkmark}>L</span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            <input
              onChange={handleRadioSmallSize}
              checked={radioSize === "XL"}
              value="XL"
              type="radio"
              name="radio"
            />
            <span className={classes.checkmark}>XL</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ProductSize;
