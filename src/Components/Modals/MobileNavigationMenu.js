import React from "react";
import { Link } from "react-router-dom";
import classes from "./MobileNavigationMenu.module.css";
import xIcon from "../../Assets/Icons/bx-x.svg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui-slice";

const MobileNavigationMenu = () => {
  const dispatch = useDispatch();

  const menuOnClickhandler = () => {
    dispatch(uiActions.mobileNavigationHandler());
  };

  return (
    <div className={classes.overlay}>
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
      <ul className={classes.container}>
        <li className={classes.navitem}>
          <Link to="/" className={classes.navlink}>
            Home
          </Link>
        </li>
        <li className={classes.navitem}>
          <Link to="/admin" className={classes.navlink}>
            Admin
          </Link>
        </li>
        <li className={classes.navitem}>
          <Link to="/products" className={classes.navlink}>
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigationMenu;
