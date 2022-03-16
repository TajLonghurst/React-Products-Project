import React from "react";
import classes from "./ProductColor.module.css";

const ProductColor = () => {
  return (
    <div className={classes.colorconatiner}>
      <h4 className={classes.colorheader}>COLOR</h4>
      <ul className={classes.colorlist}>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkRed}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkOrange}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkGreen}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkBlue}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkPurple}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkDarkPurple}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
                className={`${classes.checkmark} ${classes.checkmarkBlack}`}
              ></span>
            </label>
          </div>
        </li>
        <li className={classes.coloritem}>
          <div className={classes.colorbox}>
            <label className={classes.containerbox}>
              <input type="checkbox" />
              <span
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
