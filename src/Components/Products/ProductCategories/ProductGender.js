import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";
import classes from "./ProductGender.module.css";

const ProductGender = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.filter.genderIsChecked);

  const onClickHandler = () => {
    dispatch(filterActions.genderIsChecked());
  };

  useEffect(() => {
    if (isChecked) {
      dispatch(filterActions.filterProducts({ genderSelected: "male" }));
    }
    return;
  }, [dispatch, isChecked]);

  return (
    <div className={classes.genderconatiner}>
      <h4 className={classes.genderheader}>GENDER</h4>
      <ul className={classes.genderlist}>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Male
              <input
                checked={isChecked}
                onChange={onClickHandler}
                type="checkbox"
              />
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
