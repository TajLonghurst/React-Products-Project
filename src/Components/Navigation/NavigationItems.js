import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";
import { motion } from "framer-motion";
import { slideDown } from "../../Animations/Navigation-Animation";
import "../../index.css";

const NavigationItems = () => {
  return (
    <Fragment>
      <motion.ul
        variants={slideDown}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.navbar}
      >
        <li className={classes.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinkActive" : classes.navlink
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li className={classes.logoitem}>
          <NavLink className={classes.navlogo} to="/">
            <div className={classes.logopostion}>
              <h1 className={classes.logotext}>KU</h1>
              <h1 className={classes.logotext}>RB</h1>
            </div>
          </NavLink>
        </li>
        <li className={classes.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlinkActive" : classes.navlink
            }
            to="/admin"
          >
            Admin
          </NavLink>
        </li>
      </motion.ul>
    </Fragment>
  );
};

export default NavigationItems;
