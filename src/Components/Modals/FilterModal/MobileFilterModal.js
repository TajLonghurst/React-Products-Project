import React, { Fragment } from "react";
import classes from "./MobileFilterModal.module.css";
import ProductGender from "../../Products/ProductCategories/ProductGender";
import ProductSize from "../../Products/ProductCategories/ProductSize";
import ProductCategories from "../../Products/ProductCategories/ProductCategories";
import ProductColor from "../../Products/ProductCategories/ProductColor";
import MobileFilterOverlay from "./MobileFilterOverlay";
import xIcon from "../../../Assets/Icons/bx-x.svg";

const MobileFilterModal = () => {
  return (
    <Fragment>
      <MobileFilterOverlay />
      <div className={classes.container}>
        <div className={classes.body}>
          <div className={classes.filterNav}>
            <img className={classes.xIcon} src={xIcon} alt="X Failed" />
          </div>
          <ProductGender />
          <ProductSize />
          <ProductCategories />
          <ProductColor />
        </div>
      </div>
    </Fragment>
  );
};

export default MobileFilterModal;
