import React from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";
import classes from "./ProductGender.module.css";

const ProductGender = () => {
  const dispatch = useDispatch();

  const filterGender = (type) => {
    dispatch(filterActions.filterGender({ type: type }));
  };

  return (
    <div className={classes.genderconatiner}>
      <h4 className={classes.genderheader}>GENDER</h4>
      <ul className={classes.genderlist}>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label
              onClick={() => filterGender("male")}
              className={classes.containerbox}
            >
              Male
              {/* <input type="checkbox" /> */}
              {/* <span className={classes.checkmark}></span> */}
            </label>
          </div>
        </li>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label
              onClick={() => filterGender("female")}
              className={classes.containerbox}
            >
              Female
              {/* <input type="checkbox" />
              <span className={classes.checkmark}></span> */}
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductGender;
