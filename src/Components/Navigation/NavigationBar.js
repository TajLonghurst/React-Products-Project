import React, { Fragment } from "react";
import NavigationItems from "./NavigationItems";
import classes from "./NavigationBar.module.css";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import useWindowSize from "../../Hooks/use-windowSize";
import NavigationMobileItems from "./NavigationMobileItems";
import { useSelector } from "react-redux";
import { ModalMobileNav } from "../Modals/NavigationModal/ModalMobileNav";

const NavigationBar = () => {
  const menuIsActive = useSelector((state) => state.ui.mobileIsActive);
  const { isMobileView } = useWindowSize();

  return (
    <Fragment>
      <nav className={classes.nav}>
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
      </nav>
      {menuIsActive && <ModalMobileNav />}
    </Fragment>
  );
};

export default NavigationBar;
