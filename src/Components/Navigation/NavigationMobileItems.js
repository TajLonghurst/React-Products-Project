import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import menuIcon from "../../Assets/Icons/bx-menu.svg";
import cartIcon from "../../Assets/Icons/bx-cart.svg";
import classes from "./NavigationMobileItems.module.css";
import { NavLink } from "react-router-dom";

const NavigationMobileItems = () => {
  const cartTotal = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const menuClickHandler = () => {
    dispatch(uiActions.mobileNavigationHandler());
  };

  const onClickXHandler = () => {
    dispatch(uiActions.onClickCart());
  };

  return (
    <Fragment>
      <div className={classes.nav}>
        <NavLink to="/" className={classes.logo}>
          KURB
        </NavLink>
        <ul className={classes.navbar}>
          <li className={classes.navitem}>
            <div className={classes.navcart}>
              <p className={classes.basketamount}>{cartTotal}</p>
              <img
                onClick={onClickXHandler}
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
