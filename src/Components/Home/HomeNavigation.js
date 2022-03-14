import React, { Fragment } from "react";
import classes from "../Home/HomeNavigation.module.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import HomeCart from "./HomeCart";

const HomeNavigation = () => {
  return (
    <Fragment>
      <HomeCart />
      <div className={classes.container}>
        <div className={classes.nav}>
          <div className={classes.navitem}>
            <NavLink to="/products" className={classes.navlink}>
              Products
            </NavLink>
          </div>
          <div className={classes.logoposition}>
            <h1 className={classes.logotext}>KU</h1>
            <h1 className={classes.logotext}>RB</h1>
          </div>
          <div className={classes.navitem}>
            <NavLink to="/admin" className={classes.navlink}>
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeNavigation;
