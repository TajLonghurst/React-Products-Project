import React, { Fragment, useEffect } from "react";
import NavigationItems from "./NavigationItems";
import classes from "./NavigationBar.module.css";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import useWindowSize from "../../Hooks/use-windowSize";
import NavigationMobileItems from "./NavigationMobileItems";
import { useSelector, useDispatch } from "react-redux";
import { ModalMobileNav } from "../Modals/NavigationModal/ModalMobileNav";
import { motion, AnimatePresence } from "framer-motion";
import { slideDown } from "../../Animations/Navigation-Animation";
import { uiActions } from "../../Store/ui-slice";
import CartModal from "../Modals/CartModal/CartModal";

const NavigationBar = () => {
  const menuIsActive = useSelector((state) => state.ui.mobileIsActive);
  const cartIsActive = useSelector((state) => state.ui.cartIsActive);
  const dispatch = useDispatch();
  const { isMobileView } = useWindowSize();
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    if (!isMobileView && menuIsActive) {
      dispatch(uiActions.mobileNavigationHandler());
    }
  }, [dispatch, isMobileView, menuIsActive]);

  const onclickCartHandler = () => {
    dispatch(uiActions.onClickCart());
  };

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
            <p className={classes.basketamount}>{totalCartItems}</p>
            <img
              onClick={onclickCartHandler}
              className={classes.carticon}
              src={cartIcon}
              alt="Cart Icon Failed to Load"
            />
          </div>
        )}
      </motion.nav>
      {menuIsActive && <ModalMobileNav />}
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {cartIsActive && <CartModal />}
      </AnimatePresence>
    </Fragment>
  );
};

export default NavigationBar;
