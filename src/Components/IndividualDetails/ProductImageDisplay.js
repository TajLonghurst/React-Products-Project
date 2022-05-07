import React from "react";
import classes from "../IndividualDetails/ProductImageDisplay.module.css";
import { motion } from "framer-motion";
import { imgslideLeft } from "../../Animations/Products-Animations";

const ProductImageDisplay = (props) => {
  return (
    <motion.div
      variants={imgslideLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.ImageContainer}
    >
      <div className={classes.imgbody}>
        <img className={classes.img} src={props.img} alt="Img Failed" />
      </div>
      <div className={classes.selectimgsbody}>
        <ul className={classes.list}>
          {props.extraImages.map((extraImg, index) => {
            return (
              <li key={index} className={classes.item}>
                <img
                  className={classes.smallimg}
                  src={extraImg}
                  alt="img failed"
                />
              </li>
            );
          })}
          {/* <li className={classes.item}>
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
          </li> */}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProductImageDisplay;
