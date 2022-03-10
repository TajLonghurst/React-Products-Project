import React from "react";
import NavigationItems from "./NavigationItems";
import classes from "./NavigationBar.module.css";
import cart from "../../Assets/Icons/bx-cart.svg";

const NavigationBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navlength}>
        <NavigationItems />
        {/* <NavigationMobileItems/> */}
      </div>
      <div className={classes.navcart}>
        <p className={classes.basketamount}>1</p>
        <img
          className={classes.carticon}
          src={cart}
          alt="Cart Failed to Load"
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
