import React from "react";
import classes from "../IndividualDetails/ProductImageDisplay.module.css";
import ShirtBlue from "../../Assets/Images/ShirtBlue.png";
import { motion } from "framer-motion";
import { imgslideLeft } from "../../Animations/Products-Animations";

const ProductImageDisplay = () => {
  return (
    <motion.div
      variants={imgslideLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.ImageContainer}
    >
      <div className={classes.imgbody}>
        <img className={classes.img} src={ShirtBlue} alt="Img Failed" />
      </div>
      <div className={classes.selectimgsbody}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <img
              className={classes.smallimg}
              src={ShirtBlue}
              alt="img failed"
            />
          </li>
          <li className={classes.item}>
            <img
              className={classes.smallimg}
              src={ShirtBlue}
              alt="img failed"
            />
          </li>
          <li className={classes.item}>
            <img
              className={classes.smallimg}
              src={ShirtBlue}
              alt="img failed"
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ProductImageDisplay;
