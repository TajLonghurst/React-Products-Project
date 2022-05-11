import React from "react";
import classes from "./CartModalList.module.css";
import minusIcon from "../../../Assets/Icons/bx-minus.svg";
import plusIcon from "../../../Assets/Icons/bx-plus.svg";

const CartModalList = (props) => {
  const { title, categorie, img, quantity, id, totalPrice } =
    props.cartItemsProps;

  return (
    <li ley={id} className={classes.cartitem}>
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
            <button className={classes.minsBtn}>
              <img className={classes.iconsize} src={minusIcon} alt="-" />
            </button>
            <p className={classes.itemCount}>{quantity}</p>
            <button className={classes.plusBtn}>
              <img className={classes.iconsize} src={plusIcon} alt="+" />
            </button>
          </div>
          <p className={classes.itemprice}>$ {totalPrice}</p>
        </div>
      </div>
    </li>
  );
};

export default CartModalList;
