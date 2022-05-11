import React from "react";
import classes from "./CartModalList.module.css";
import minusIcon from "../../../Assets/Icons/bx-minus.svg";
import plusIcon from "../../../Assets/Icons/bx-plus.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/cart-slice";

const CartModalList = (props) => {
  const dispatch = useDispatch();

  const { title, categorie, img, quantity, id, totalPrice } =
    props.cartItemsProps;

  const increaseItemAmount = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        totalPrice: 0,
        quantity: 1,
      })
    );
  };

  const decreaseItemAmount = () => {
    dispatch(cartActions.removeItemFromCart({ id: id }));
  };

  return (
    <div ley={id} className={classes.cartitem}>
      <div className={classes.toprow}>
        <img className={classes.img} src={img} alt="Img" />
        <div className={classes.breakerline}></div>
        <div className={classes.cartitemcontent}>
          <h1 className={classes.itemname}>{title}</h1>
          <p className={classes.categorie}>{categorie}</p>
        </div>
      </div>
      <div className={classes.bottomrow}>
        <div className={classes.incromentbtns}>
          <div className={classes.incromenttop}>
            <button onClick={decreaseItemAmount} className={classes.minsBtn}>
              <img className={classes.iconsize} src={minusIcon} alt="-" />
            </button>
            <p className={classes.itemCount}>{quantity}</p>
            <button onClick={increaseItemAmount} className={classes.plusBtn}>
              <img className={classes.iconsize} src={plusIcon} alt="+" />
            </button>
          </div>
          <p className={classes.itemprice}>$ {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartModalList;
