import React, { Fragment } from "react";
import classes from "./HomeMainImage.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { popEffect } from "../../Animations/Home-Animations";

const HomeMainImage = (props) => {
  return (
    <Fragment>
      <div className={classes.imgpostion}>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {props.isHover && (
            <motion.img
              variants={popEffect}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={classes.shirt}
              src={props.shirtType}
              alt="Failed"
            />
          )}
        </AnimatePresence>
      </div>
    </Fragment>
  );
};

export default HomeMainImage;
