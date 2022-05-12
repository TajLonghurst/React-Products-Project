import React, { Fragment } from "react";
import classes from "./CartSuccesModal.module.css";
import CartSuccessOverlay from "./CartSuccessOverlay";
import tickIcon from "../../../Assets/Icons/bx-check.svg";
import { motion } from "framer-motion";
import { notificationPop } from "../../../Animations/Notification-Animations";

const CartSuccesModal = () => {
  return (
    <Fragment>
      <CartSuccessOverlay />
      <div className={classes.container}>
        <motion.div
          variants={notificationPop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.body}
        >
          <img
            className={classes.imgSize}
            src={tickIcon}
            alt="Failed to Load Img"
          />
          <p className={classes.text}>Purchase Completed</p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default CartSuccesModal;
