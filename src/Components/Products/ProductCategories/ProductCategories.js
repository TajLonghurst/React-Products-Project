import React, { useState, useEffect } from "react";
import classes from "./ProductCategories.module.css";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";
const ProductCategories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const handleButtonClick = (getValue) => {
    if (categories.includes(getValue)) {
      setCategories((prev) => prev.filter((val) => val !== getValue));
    } else {
      setCategories((prev) => [...prev, getValue]);
    }
  };
  useEffect(() => {
    let dataToBeSentToStore = { kind: "categorie", data: categories };
    dispatch(filterActions.filterGenderData(dataToBeSentToStore));
  }, [categories, dispatch]);
  return (
    <div className={classes.categoriesconatiner}>
      <h4 className={classes.categoriesheader}>CATEGORIES</h4>
      <ul className={classes.categorieslist}>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              T-Shirt
              <input
                type="checkbox"
                onClick={() => handleButtonClick("T-Shirt")}
              />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Trousers
              <input
                type="checkbox"
                onClick={() => handleButtonClick("Trousers")}
              />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label className={classes.containerbox}>
              Combo
              <input
                type="checkbox"
                onClick={() => handleButtonClick("Combo")}
              />
              <span className={classes.checkmark}></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategories;
