import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import menuIcon from "../../Assets/Icons/bx-menu.svg";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import classes from "./NavigationMobileItems.module.css";

const NavigationMobileItems = () => {
  const dispatch = useDispatch();

  const menuClickHandler = () => {
    dispatch(uiActions.mobileNavigationHandler());
  };

  return (
    <Fragment>
      <div className={classes.nav}>
        <h1 className={classes.logo}>KURB</h1>
        <ul className={classes.navbar}>
          <li className={classes.navitem}>
            <div className={classes.navcart}>
              <p className={classes.basketamount}>1</p>
              <img
                className={classes.carticon}
                src={cartIcon}
                alt="Cart Icon Failed to Load"
              />
            </div>
          </li>
          <li className={classes.navitem}>
            <img
              onClick={menuClickHandler}
              className={classes.menuicon}
              src={menuIcon}
              alt="Menu failed"
            />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavigationMobileItems;
