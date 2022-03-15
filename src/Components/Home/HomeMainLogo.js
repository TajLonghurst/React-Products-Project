import React from "react";
import classes from "./HomeMainLogo.module.css";
import { motion } from "framer-motion";
import {
  upWardsMotionH1,
  downWardsMotionH1,
} from "../../Animations/Home-Animations";

const HomeMainLogo = (props) => {
  const switchClass = props.switchClass
    ? classes.logoActiveText
    : classes.logoText;

  return (
    <div className={classes.logoposition}>
      <motion.div
        variants={upWardsMotionH1}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className={switchClass}>KU</h1>
      </motion.div>
      <motion.div
        variants={downWardsMotionH1}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className={switchClass}>RB</h1>
      </motion.div>
    </div>
  );
};

export default HomeMainLogo;
