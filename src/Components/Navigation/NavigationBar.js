import React, { Fragment, useEffect, useState } from "react";
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
import CartSuccesModal from "../Modals/CartSuccesModal/CartSuccesModal";

const NavigationBar = () => {
  const [isAnimated, setIsisAnimated] = useState(false);
  const menuIsActive = useSelector((state) => state.ui.mobileIsActive);
  const cartIsActive = useSelector((state) => state.ui.cartIsActive);
  const isMsgActive = useSelector((state) => state.ui.purchaseMsg);
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { isMobileView } = useWindowSize();

  useEffect(() => {
    if (!isMobileView && menuIsActive) {
      dispatch(uiActions.mobileNavigationHandler());
    }
  }, [dispatch, isMobileView, menuIsActive]);

  useEffect(() => {
    if (isMsgActive) {
      const timer = setTimeout(() => setIsisAnimated(false), 2000);
      setIsisAnimated(true);
      return () => clearTimeout(timer);
    }
  }, [isMsgActive]);

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
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isAnimated && <CartSuccesModal />}
      </AnimatePresence>
    </Fragment>
  );
};

export default NavigationBar;
