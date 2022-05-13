import React from "react";
import classes from "./ProductCategories.module.css";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../Store/filter-slice";

const ProductCategories = () => {
  const dispatch = useDispatch();
  const filtertCategories = (type) => {
    dispatch(filterActions.filterCategories({ type: type }));
  };
  return (
    <div className={classes.categoriesconatiner}>
      <h4 className={classes.categoriesheader}>CATEGORIES</h4>
      <ul className={classes.categorieslist}>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label
              onClick={() => filtertCategories("T-Shirt")}
              className={classes.containerbox}
            >
              T-Shirt
              {/* <input type="checkbox" />
              <span className={classes.checkmark}></span> */}
            </label>
          </div>
        </li>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label
              onClick={() => filtertCategories("Trousers")}
              className={classes.containerbox}
            >
              Trousers
              {/* <input type="checkbox" />
              <span className={classes.checkmark}></span> */}
            </label>
          </div>
        </li>
        <li className={classes.categoriesitem}>
          <div className={classes.genderbox}>
            <label
              onClick={() => filtertCategories("Combo")}
              className={classes.containerbox}
            >
              Combo
              {/* <input type="checkbox" />
              <span className={classes.checkmark}></span> */}
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategories;
