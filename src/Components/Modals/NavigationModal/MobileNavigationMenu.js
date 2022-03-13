import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MobileNavigationMenu.module.css";
import xIcon from "../../../Assets/Icons/bx-x.svg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import MobileNavigationOverlay from "./MobileNavigationOverlay";

const MobileNavigationMenu = () => {
  const dispatch = useDispatch();

  const menuOnClickhandler = () => {
    dispatch(uiActions.mobileNavigationHandler());
  };

  return (
    <Fragment>
      <MobileNavigationOverlay />
      <div className={classes.nav}>
        <div className={classes.navbar}>
          <img
            onClick={menuOnClickhandler}
            className={classes.xicon}
            src={xIcon}
            alt="X failed"
          />
        </div>
      </div>
      <div className={classes.container}>
        <ul className={classes.navbody}>
          <li className={classes.navitem}>
            <NavLink
              onClick={menuOnClickhandler}
              to="/"
              className={classes.navlink}
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navitem}>
            <NavLink
              onClick={menuOnClickhandler}
              to="/admin"
              className={classes.navlink}
            >
              Admin
            </NavLink>
          </li>
          <li className={classes.navitem}>
            <NavLink
              onClick={menuOnClickhandler}
              to="/products"
              className={classes.navlink}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MobileNavigationMenu;
