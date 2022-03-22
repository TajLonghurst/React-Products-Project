import React, { Fragment } from "react";
import classes from "./CartModal.module.css";
import CartOverlay from "./CartOverlay";
import xIcon from "../../../Assets/Icons/bx-x.svg";
import CartModalList from "./CartModalList";

const CartModal = () => {
  return (
    <Fragment>
      <CartOverlay />
      <div className={classes.container}>
        <div className={classes.cartbody}>
          <div className={classes.carthead}>
            <h1 className={classes.carttitle}>Shopping Cart</h1>
            <img className={classes.xIcon} src={xIcon} alt="X" />
          </div>
          <CartModalList />
          <CartModalList />
          <CartModalList />
          <CartModalList />
          <CartModalList />
          <div className={classes.cartbottom}>
            <div className={classes.verticallineBreaker}></div>
            <h1>Total</h1>
            <h1>$150</h1>
            <div className={classes.verticallineBreaker}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartModal;
