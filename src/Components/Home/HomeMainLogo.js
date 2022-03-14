import React from "react";
import classes from "./HomeMainLogo.module.css";

const HomeMainLogo = (props) => {
  const switchClass = props.switchClass
    ? classes.logoActiveText
    : classes.logoText;

  return (
    <div className={classes.logoposition}>
      <h1 className={switchClass}>KU</h1>
      <h1 className={switchClass}>RB</h1>
    </div>
  );
};

export default HomeMainLogo;
