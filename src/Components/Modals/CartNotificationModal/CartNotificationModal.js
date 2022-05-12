import React, { Fragment } from "react";
import classes from "./CartNotificationModal.module.css";
import CartNotificationOverlay from "./CartNotificationOverlay";
import tickIcon from "../../../Assets/Icons/bx-check.svg";
import failedIcon from "../../../Assets/Icons/bx-failed.svg";
import { motion } from "framer-motion";
import { notificationPop } from "../../../Animations/Notification-Animations";

const CartNotificationModal = (props) => {
  const img = props.failed ? failedIcon : tickIcon;

  return (
    <Fragment>
      <CartNotificationOverlay />
      <div className={classes.container}>
        <motion.div
          variants={notificationPop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.body}
        >
          <img className={classes.imgSize} src={img} alt="Failed to Load Img" />
          <p className={classes.text}>{props.message}</p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default CartNotificationModal;
