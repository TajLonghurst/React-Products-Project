import React from "react";
import classes from "./ProductColor.module.css";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";

const ProductColor = () => {
  const dispatch = useDispatch();
  const filtertCategories = (type) => {
    dispatch(filterActions.filterColor({ type: type }));
  };
  return (
    <div className={classes.colorconatiner}>
      <h4 className={classes.colorheader}>COLOR</h4>
      <ul className={classes.colorlist}>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Red")}
                className={`${classes.checkmark} ${classes.checkmarkRed}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Orange")}
                className={`${classes.checkmark} ${classes.checkmarkOrange}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Green")}
                className={`${classes.checkmark} ${classes.checkmarkGreen}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Blue")}
                className={`${classes.checkmark} ${classes.checkmarkBlue}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Brown")}
                className={`${classes.checkmark} ${classes.checkmarkBrown}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Purple")}
                className={`${classes.checkmark} ${classes.checkmarkDarkPurple}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("Black")}
                className={`${classes.checkmark} ${classes.checkmarkBlack}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="radio" />
              <span
                onClick={() => filtertCategories("White")}
                className={`${classes.checkmarkWhitedot} ${classes.checkmarkWhite}`}
              ></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductColor;
