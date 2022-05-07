import React from "react";
import classes from "../IndividualDetails/ProductInfo.module.css";
import Button from "../UI/Button";
import plusIcon from "../../Assets/Icons/bx-plus.svg";
import minusIcon from "../../Assets/Icons/bx-minus.svg";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/Products-Animations";

const ProductInfo = (props) => {
  return (
    <div className={classes.body}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.container}
      >
        <h6 className={classes.categories}>{props.categorie}</h6>
        <h1 className={classes.header}>{props.title}</h1>
        <h5 className={classes.itemcolor}>
          Color: <span className={classes.colorname}>{props.color}</span>
        </h5>
        <div className={classes.sizes}>
          {props.size.map((sizeType, index) => {
            return (
              <div key={index} className={classes.sizesBody}>
                <p className={classes.sizeText}>{sizeType}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.incromentbtns}>
          <button className={classes.minsBtn}>
            <img className={classes.iconsize} src={minusIcon} alt="-" />
          </button>
          <p className={classes.itemCount}>1</p>
          <button className={classes.plusBtn}>
            <img className={classes.iconsize} src={plusIcon} alt="+" />
          </button>
          <p className={classes.itemprice}>$ {props.price}</p>
        </div>
        <Button>Add to Cart</Button>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
