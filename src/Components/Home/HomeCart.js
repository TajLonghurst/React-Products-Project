import React, { Fragment } from "react";
import classes from "./HomeCart.module.css";
import useWindowSize from "../../Hooks/use-windowSize";
import NavigationMobileItems from "../Navigation/NavigationMobileItems";
import { ModalMobileNav } from "../Modals/NavigationModal/ModalMobileNav";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import { motion } from "framer-motion";
import { slideDown } from "../../Animations/Navigation-Animation";
import { uiActions } from "../../Store/ui-slice";
import ModalCart from "../Modals/CartModal/ModalCart";

const HomeCart = () => {
  const dispatch = useDispatch();
  const menuIsActive = useSelector((state) => state.ui.mobileIsActive);
  const cartIsActive = useSelector((state) => state.ui.cartIsActive);
  const { isMobileView } = useWindowSize();

  const onClickXHandler = () => {
    dispatch(uiActions.onClickCart());
  };

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
              onClick={onClickXHandler}
              className={classes.carticon}
              src={cartIcon}
              alt="Cart Icon Failed to Load"
            />
          </motion.div>
        )}
      </nav>
      {menuIsActive && <ModalMobileNav />}
      {cartIsActive && <ModalCart />}
    </Fragment>
  );
};

export default HomeCart;
