import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <div className={classes.productDetails}>
      <div className={classes.sizes}>
        {props.size.map((sizeType, index) => {
          return (
            <div key={index} className={classes.sizesBody}>
              <p className={classes.sizeText}>{sizeType}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.categorie}>
        <p className={classes.categorieName}>{props.categorie}</p>
      </div>
      <div className={classes.productName}>
        <h1 className={classes.productNameText}>{props.title}</h1>
      </div>
      <div className={classes.productPrice}>
        <p className={classes.productPriceText}>${props.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
