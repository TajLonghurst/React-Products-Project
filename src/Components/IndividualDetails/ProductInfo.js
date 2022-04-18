import React from "react";
import classes from "../IndividualDetails/ProductInfo.module.css";
import Button from "../UI/Button";
import plusIcon from "../../Assets/Icons/bx-plus.svg";
import minusIcon from "../../Assets/Icons/bx-minus.svg";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/Products-Animations";

const ProductInfo = () => {
  return (
    <div className={classes.body}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.container}
      >
        <h6 className={classes.categories}>T-shirt</h6>
        <h1 className={classes.header}>Blue Shirt</h1>
        <h5 className={classes.itemcolor}>
          Color: <span className={classes.colorname}>Black</span>
        </h5>
        <ul className={classes.sizes}>
          <li className={classes.sizesBody}>
            <p className={classes.sizeText}>XL</p>
          </li>
          <li className={classes.sizesBody}>
            <p className={classes.sizeText}>L</p>
          </li>
          <li className={classes.sizesBody}>
            <p className={classes.sizeText}>M</p>
          </li>
          <li className={classes.sizesBody}>
            <p className={classes.sizeText}>S</p>
          </li>
        </ul>
        <div className={classes.incromentbtns}>
          <button className={classes.minsBtn}>
            <img className={classes.iconsize} src={minusIcon} alt="-" />
          </button>
          <p className={classes.itemCount}>1</p>
          <button className={classes.plusBtn}>
            <img className={classes.iconsize} src={plusIcon} alt="+" />
          </button>
          <p className={classes.itemprice}>$ 30</p>
        </div>
        <Button>Add to Cart</Button>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
