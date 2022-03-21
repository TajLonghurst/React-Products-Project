import React from "react";
import classes from "../IndividualDetails/ProductInfo.module.css";
import Button from "../UI/Button";
import plusIcon from "../../Assets/Icons/bx-plus.svg";
import minusIcon from "../../Assets/Icons/bx-minus.svg";

const ProductInfo = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h6 className={classes.categories}>T-Shirt</h6>
        <h1 className={classes.header}>Blue Shirt</h1>
        <h5>
          Color: <span>Black</span>
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
          <p>$30</p>
        </div>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductInfo;