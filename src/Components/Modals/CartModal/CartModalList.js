import React from "react";
import classes from "./CartModalList.module.css";
import shirtBlue from "../../../Assets/Images/ShirtBlue.png";
import minusIcon from "../../../Assets/Icons/bx-minus.svg";
import plusIcon from "../../../Assets/Icons/bx-plus.svg";

const CartModalList = () => {
  return (
    <ul className={classes.cartcontent}>
      <li className={classes.cartitem}>
        <img className={classes.img} src={shirtBlue} alt="Img" />
        <div className={classes.breakerline}></div>
        <div className={classes.cartitemcontent}>
          <h1 className={classes.itemname}>GODS WILL</h1>
          <p className={classes.categorie}>T-shirt</p>
        </div>
        <div className={classes.incromentbtns}>
          <button className={classes.minsBtn}>
            <img className={classes.iconsize} src={minusIcon} alt="-" />
          </button>
          <p className={classes.itemCount}>1</p>
          <button className={classes.plusBtn}>
            <img className={classes.iconsize} src={plusIcon} alt="+" />
          </button>
          <p className={classes.itemprice}>$30</p>
        </div>
      </li>
    </ul>
  );
};

export default CartModalList;
