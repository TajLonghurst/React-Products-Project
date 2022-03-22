import React, { Fragment } from "react";
import classes from "./CartModal.module.css";
import CartOverlay from "./CartOverlay";
import xIcon from "../../../Assets/Icons/bx-x.svg";
import CartModalList from "./CartModalList";
import Button from "../../UI/Button";

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
          <ul className={classes.cartcontent}>
            <CartModalList />
            <CartModalList />
            <CartModalList />
            <CartModalList />
            <CartModalList />
          </ul>
          <div className={classes.cartbottom}>
            <div className={classes.verticallineBreaker}></div>
            <div className={classes.totalcontent}>
              <h1 className={classes.totaltext}>Total:</h1>
              <h1 className={classes.totalcost}>$150</h1>
            </div>
            <div className={classes.verticallineBreaker}></div>
            <div className={classes.btnpostion}>
              <Button>CHECKOUT</Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartModal;
