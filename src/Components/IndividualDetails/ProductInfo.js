import React, { useEffect, useState } from "react";
import classes from "../IndividualDetails/ProductInfo.module.css";
import Button from "../UI/Button";
import plusIcon from "../../Assets/Icons/bx-plus.svg";
import minusIcon from "../../Assets/Icons/bx-minus.svg";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/Products-Animations";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";

const ProductInfo = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const price = props.price;

  useEffect(() => {
    setTotalPrice(price);
  }, [price]);

  const increaseItemAmount = () => {
    if (quantity >= 9) {
      return;
    } else {
      setQuantity(quantity + 1);
    }
    const totalAmount = quantity + 1;
    const totalPriceAmount = price * totalAmount;

    setTotalPrice(totalPriceAmount);
  };

  const decreaseItemAmount = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
    const totalPriceAmount = totalPrice - price;

    setTotalPrice(totalPriceAmount);
  };

  const submitHandlerEvent = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        img: props.img,
        categorie: props.categorie,
        price: price,
        totalPrice: totalPrice,
        quantity: quantity,
      })
    );
    setQuantity(1);
    setTotalPrice(price);
  };

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
          {/* By doing props.size && props.size its making sure the props have been passed down before doing the map() method */}
          {props.size &&
            props.size.map((sizeType, index) => {
              return (
                <div key={index} className={classes.sizesBody}>
                  <p className={classes.sizeText}>{sizeType}</p>
                </div>
              );
            })}
        </div>
        <div className={classes.incromentbtns}>
          <button onClick={decreaseItemAmount} className={classes.minsBtn}>
            <img className={classes.iconsize} src={minusIcon} alt="-" />
          </button>
          <p className={classes.itemCount}>{quantity}</p>
          <button onClick={increaseItemAmount} className={classes.plusBtn}>
            <img className={classes.iconsize} src={plusIcon} alt="+" />
          </button>
          <p className={classes.itemprice}>$ {totalPrice}</p>
        </div>
        <Button onClick={submitHandlerEvent}>Add to Cart</Button>
      </motion.div>
    </div>
  );
};

export default ProductInfo;
