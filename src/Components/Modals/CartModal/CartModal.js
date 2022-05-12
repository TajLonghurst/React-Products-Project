import React, { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import { cartPopEffect } from "../../../Animations/Cart-Animations";
import { motion } from "framer-motion";
import classes from "./CartModal.module.css";
import useHttp from "../../../Hooks/use-http";
import CartOverlay from "./CartOverlay";
import CartModalList from "./CartModalList";
import Button from "../../UI/Button";
import xIcon from "../../../Assets/Icons/bx-x.svg";

const CartModal = () => {
  const { sendRequest } = useHttp();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalCartCost = useSelector((state) => state.cart.totalAmount);

  const cartProductsApi = useCallback(async () => {
    sendRequest({
      typeOfRequest: "CARTPRODUCTS",
      method: "POST",
      url: `https://react-product-project-default-rtdb.firebaseio.com/ShoppingCart.json`,
      data: {
        customersCart: items,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [items, sendRequest]);

  const sumbitCartHandler = () => {
    if (items.length > 0) {
      cartProductsApi();
      console.log("Items in the cart");
    } else {
      console.log("No Items are in the cart");
      return;
    }
  };

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
                      price: cartItems.price,
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
              <h1 className={classes.totalcost}>$ {totalCartCost}</h1>
            </div>
          </div>

          <div className={classes.verticallineBreaker}></div>
          <div className={classes.btnpostion}>
            <Button onClick={sumbitCartHandler}>CHECKOUT</Button>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default CartModal;
