import React from "react";
import NavigationItems from "./NavigationItems";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navlength}>
        <NavigationItems />
        {/* <NavigationMobileItems/> */}
      </div>
    </nav>
  );
};

export default NavigationBar;
