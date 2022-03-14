import React, { Fragment, useState } from "react";
import classes from "../Home/HomeNavigation.module.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import HomeCart from "./HomeCart";
import HomeHoverEffect from "./HomeMainImage";
import HomeMainLogo from "./HomeMainLogo";

const HomeNavigation = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <Fragment>
      <HomeCart />
      <HomeHoverEffect isHover={isHover} />
      <div className={classes.container}>
        <div className={classes.nav}>
          <div className={classes.navitem}>
            <NavLink
              to="/products"
              onMouseEnter={onMouseHover}
              onMouseLeave={onMouseHover}
              className={classes.navlink}
            >
              Products
            </NavLink>
          </div>
          <HomeMainLogo switchClass={isHover} />
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
