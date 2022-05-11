import React, { Fragment } from "react";
import classes from "./CartModal.module.css";
import CartOverlay from "./CartOverlay";
import xIcon from "../../../Assets/Icons/bx-x.svg";
import CartModalList from "./CartModalList";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import { motion } from "framer-motion";
import { cartPopEffect } from "../../../Animations/Cart-Animations";

const CartModal = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const cartXOnClick = () => {
    dispatch(uiActions.onClickCart());
  };

  return (
    <Fragment>
      <CartOverlay />
      <div className={classes.container}>
        <motion.div
          variants={cartPopEffect}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.cartbody}
        >
          <div className={classes.carthead}>
            <h1 className={classes.carttitle}>Shopping Cart</h1>
            <img
              onClick={cartXOnClick}
              className={classes.xIcon}
              src={xIcon}
              alt="X"
            />
          </div>
          <ul className={classes.cartcontent}>
            {items.map((cartItems) => {
              return (
                <li key={cartItems.id}>
                  <CartModalList
                    cartItemsProps={{
                      title: cartItems.title,
                      categorie: cartItems.categorie,
                      img: cartItems.img,
                      quantity: cartItems.quantity,
                      id: cartItems.id,
                      totalPrice: cartItems.totalPrice,
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <div className={classes.cartbottom}>
            <div className={classes.verticallineBreaker}></div>
            <div className={classes.totalcontent}>
              <h1 className={classes.totaltext}>Total:</h1>
              <h1 className={classes.totalcost}>$ 100</h1>
            </div>
          </div>

          <div className={classes.verticallineBreaker}></div>
          <div className={classes.btnpostion}>
            <Button>CHECKOUT</Button>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default CartModal;
