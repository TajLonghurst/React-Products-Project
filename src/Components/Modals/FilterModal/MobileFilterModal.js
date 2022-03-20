import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import { motion } from "framer-motion";
import classes from "./MobileFilterModal.module.css";
import ProductGender from "../../Products/ProductCategories/ProductGender";
import ProductSize from "../../Products/ProductCategories/ProductSize";
import ProductCategories from "../../Products/ProductCategories/ProductCategories";
import ProductColor from "../../Products/ProductCategories/ProductColor";
import MobileFilterOverlay from "./MobileFilterOverlay";
import xIcon from "../../../Assets/Icons/bx-x.svg";
import { mobileFilter } from "../../../Animations/Products-Animations";

const MobileFilterModal = () => {
  const dispatch = useDispatch();

  const onClickImgHandler = () => {
    dispatch(uiActions.mobileFilterHandler());
  };
  return (
    <Fragment>
      <MobileFilterOverlay />
      <div className={classes.container}>
        <motion.div
          variants={mobileFilter}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.body}
        >
          <div className={classes.filterNav}>
            <img
              onClick={onClickImgHandler}
              className={classes.xIcon}
              src={xIcon}
              alt="X Failed"
            />
          </div>
          <ProductGender />
          <ProductSize />
          <ProductCategories />
          <ProductColor />
        </motion.div>
      </div>
    </Fragment>
  );
};

export default MobileFilterModal;
