import React from "react";
import classes from "./ProductColor.module.css";

const ProductColor = () => {
  return (
    <div className={classes.colorconatiner}>
      <h4 className={classes.colorheader}>COLOR</h4>
      <ul className={classes.colorlist}>
        <li className={classes.coloritem}>Red</li>
        <li className={classes.coloritem}>Orange</li>
        <li className={classes.coloritem}>Green</li>
        <li className={classes.coloritem}>Blue</li>
        <li className={classes.coloritem}>Purple</li>
        <li className={classes.coloritem}>DarkPurple</li>
        <li className={classes.coloritem}>Black</li>
        <li className={classes.coloritem}>White</li>
      </ul>
    </div>
  );
};

export default ProductColor;
