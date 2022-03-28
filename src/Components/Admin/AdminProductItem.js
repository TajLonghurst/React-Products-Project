import React from "react";
import classes from "./AdminProductItem.module.css";
import ShirtMoon from "../../Assets/Images/ShirtMoon.png";
import xIcon from "../../Assets/Icons/bx-x.svg";

const AdminProductItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes.row}>
        <img className={classes.img} src={ShirtMoon} alt="Img Failed" />
        <div className={classes.breakline}></div>
        <div className={classes.titlecontent}>
          <div className={classes.content}>
            <h1 className={classes.title}>Blue Moon</h1>
            <p className={classes.categorie}>T-shirt</p>
          </div>
          <img className={classes.xIcon} src={xIcon} alt="X" />
        </div>
      </div>
    </li>
  );
};

export default AdminProductItem;
