import React, { Fragment } from "react";
import classes from "./HomeCart.module.css";
import useWindowSize from "../../Hooks/use-windowSize";
import NavigationMobileItems from "../Navigation/NavigationMobileItems";
import { ModalMobileNav } from "../Modals/NavigationModal/ModalMobileNav";
import { useSelector } from "react-redux";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import { motion } from "framer-motion";
import { slideDown } from "../../Animations/Navigation-Animation";

const HomeCart = () => {
  const menuIsActive = useSelector((state) => state.ui.mobileIsActive);
  const { isMobileView } = useWindowSize();
  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes.navlength}>
          {isMobileView && <NavigationMobileItems />}
        </div>
        {!isMobileView && (
          <motion.div
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.navcart}
          >
            <p className={classes.basketamount}>1</p>
            <img
              className={classes.carticon}
              src={cartIcon}
              alt="Cart Icon Failed to Load"
            />
          </motion.div>
        )}
      </nav>
      {menuIsActive && <ModalMobileNav />}
    </Fragment>
  );
};

export default HomeCart;
