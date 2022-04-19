import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";
import classes from "./ProductGender.module.css";

const ProductGender = () => {
  const [maleIsChecked, setMaleIsChecked] = useState(!false);
  const [femaleIsChecked, setFemaleIsChecked] = useState(!false);
  const dispatch = useDispatch();

  const handleCheckedMale = () => {
    setMaleIsChecked((preState) => !preState);
    dispatch(
      filterActions.filterData({ type: "male", maleIsChecked: maleIsChecked })
    );
  };

  const handleCheckedFemale = () => {
    setFemaleIsChecked((preState) => !preState);

    dispatch(
      filterActions.filterData({
        type: "female",
        femaleIsChecked: femaleIsChecked,
      })
    );
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
                checked={!maleIsChecked}
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
              <input
                onChange={handleCheckedFemale}
                checked={!femaleIsChecked}
                type="checkbox"
              />
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
