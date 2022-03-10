import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <Fragment>
      <ul className={classes.navbar}>
        <li className={classes.navitem}>
          <Link className={classes.navlink} to="/products">
            Products
          </Link>
        </li>
        <li className={classes.logoitem}>
          <Link className={classes.navlogo} to="/">
            <div className={classes.logopostion}>
              <h1 className={classes.logotext}>KU</h1>
              <h1 className={classes.logotext}>RB</h1>
            </div>
          </Link>
        </li>
        <li className={classes.navitem}>
          <Link className={classes.navlink} to="/admin">
            Admin
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavigationItems;
