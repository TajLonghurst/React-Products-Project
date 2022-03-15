import React, { Fragment, useState } from "react";
import classes from "../Home/HomeNavigation.module.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import HomeCart from "./HomeCart";
import HomeMainImage from "./HomeMainImage";
import HomeMainLogo from "./HomeMainLogo";
import ShirtHand from "../../Assets/Images/ShirtHand.png";
import ShirtBlue from "../../Assets/Images/ShirtBlue.png";
import { motion } from "framer-motion";
import { navLinkdisapear } from "../../Animations/Home-Animations";

const HomeNavigation = () => {
  const [isHover, setIsHover] = useState(false);
  const [shirtType, setShirtType] = useState(null);

  const onMouseHoverProducts = () => {
    setIsHover((prev) => !prev);
    setShirtType(ShirtHand);
  };

  const onMouseHoverAdmin = () => {
    setIsHover((prev) => !prev);
    setShirtType(ShirtBlue);
  };

  return (
    <Fragment>
      <HomeCart />
      <HomeMainImage isHover={isHover} shirtType={shirtType} />
      <div className={classes.container}>
        <div className={classes.nav}>
          <motion.div
            className={classes.navitem}
            variants={navLinkdisapear}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLink
              to="/products"
              onMouseEnter={onMouseHoverProducts}
              onMouseLeave={onMouseHoverProducts}
              className={classes.navlink}
            >
              Products
            </NavLink>
          </motion.div>
          <HomeMainLogo switchClass={isHover} />
          <motion.div
            className={classes.navitem}
            variants={navLinkdisapear}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLink
              to="/admin"
              onMouseEnter={onMouseHoverAdmin}
              onMouseLeave={onMouseHoverAdmin}
              className={classes.navlink}
            >
              Admin
            </NavLink>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeNavigation;
