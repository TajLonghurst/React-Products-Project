import React from "react";
import classes from "../IndividualDetails/ProductImageDisplay.module.css";
import { motion } from "framer-motion";
import { imgslideLeft } from "../../Animations/Products-Animations";
import ImgIcon from "../../Assets/Icons/bx-images.svg";

const ProductImageDisplay = (props) => {
  const img = props.extraImages;
  const mapImg =
    img &&
    img.map((extraImg, index) => {
      return (
        <li key={index} className={classes.item}>
          <img className={classes.smallimg} src={extraImg} alt="Img failed" />
        </li>
      );
    });

  const isErrorMsg = (
    <div className={classes.errorcontainer}>
      <p className={classes.errorText}>No Extra Images</p>
      <img className={classes.errorimg} src={ImgIcon} alt="Icon Failed" />
    </div>
  );
  //Icon

  const extraImages = !img ? isErrorMsg : mapImg;

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
        <ul className={classes.list}>{extraImages}</ul>
      </div>
    </motion.div>
  );
};

export default ProductImageDisplay;
