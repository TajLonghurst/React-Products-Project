import React, { Fragment, useEffect } from "react";
import NavigationItems from "./NavigationItems";
import classes from "./NavigationBar.module.css";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import useWindowSize from "../../Hooks/use-windowSize";
import NavigationMobileItems from "./NavigationMobileItems";
import { useSelector, useDispatch } from "react-redux";
import { ModalMobileNav } from "../Modals/NavigationModal/ModalMobileNav";
import { motion } from "framer-motion";
import { slideDown } from "../../Animations/Navigation-Animation";
import { uiActions } from "../../Store/ui-slice";

const NavigationBar = () => {
  const menuIsActive = useSelector((state) => state.ui.mobileIsActive);
  const dispatch = useDispatch();
  const { isMobileView } = useWindowSize();

  useEffect(() => {
    if (!isMobileView && menuIsActive) {
      dispatch(uiActions.mobileNavigationHandler());
    }
  }, [dispatch, isMobileView, menuIsActive]);

  return (
    <Fragment>
      <motion.nav
        variants={slideDown}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.nav}
      >
        <div className={classes.navlength}>
          {isMobileView && <NavigationMobileItems />}
          {!isMobileView && <NavigationItems />}
        </div>
        {!isMobileView && (
          <div className={classes.navcart}>
            <p className={classes.basketamount}>1</p>
            <img
              className={classes.carticon}
              src={cartIcon}
              alt="Cart Icon Failed to Load"
            />
          </div>
        )}
      </motion.nav>
      {menuIsActive && <ModalMobileNav />}
    </Fragment>
  );
};

export default NavigationBar;
