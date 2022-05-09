import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";
import classes from "./ProductGender.module.css";

const ProductGender = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState([]);

  const handleButtonClick = (getValue) => {
    if (gender.includes(getValue)) {
      setGender((prev) => prev.filter((val) => val !== getValue));
    } else {
      setGender((prev) => [...prev, getValue]);
    }
  };
  useEffect(() => {
    let dataToBeSentToStore = { kind: "gender", data: gender };
    dispatch(filterActions.filterGenderData(dataToBeSentToStore));
  }, [gender, dispatch]);

  return (
    <div className={classes.genderconatiner}>
      <h4 className={classes.genderheader}>GENDER</h4>
      <ul className={classes.genderlist}>
        <li className={classes.genderitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              <input
                onClick={() => handleButtonClick("male")}
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
                onClick={() => handleButtonClick("female")}
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
