import React from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";
import classes from "./ProductSize.module.css";

const ProductSize = () => {
  const dispatch = useDispatch();
  const handleRadioSmallSize = (type) => {
    dispatch(filterActions.filterSize({ type: type }));
  };

  return (
    <div className={classes.sizeconatiner}>
      <h4 className={classes.sizeheader}>SIZE</h4>
      <ul className={classes.sizelist}>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            {/* <input value="S" /> */}
            <span
              onClick={() => handleRadioSmallSize("S")}
              className={classes.checkmark}
            >
              S
            </span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            {/* <input value="M" /> */}
            <span
              onClick={() => handleRadioSmallSize("M")}
              className={classes.checkmark}
            >
              M
            </span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            {/* <input value="L" /> */}
            <span
              onClick={() => handleRadioSmallSize("L")}
              className={classes.checkmark}
            >
              L
            </span>
          </label>
        </li>
        <li className={classes.sizeitem}>
          <label className={classes.containerRadio}>
            {/* <input value="X" /> */}
            <span
              onClick={() => handleRadioSmallSize("X")}
              className={classes.checkmark}
            >
              X
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ProductSize;
